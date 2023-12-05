import { AppState } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { webSocketUrlApi } from 'constants/url';

let socketToken;
let connecting = false;
let connected = false;

class Socket {
  static nav;
  static notificationRef;
  static hasNewSetter;
  static callbacks = [];
  static reconnectCallback = [];
  static ws;

  static addCallback({ execute, supports }) {
    Socket.callbacks.push({ execute, supports });
  }

  static addReconnectCallback(callback) {
    Socket.reconnectCallback.push(callback);
  }

  static removeLastCallback() {
    Socket.callbacks.pop();
  }

  static removeLastReconnectCallback() {
    Socket.reconnectCallback.pop();
  }

  static start(token) {
    socketToken = token;
    Socket.connect();
  }

  static send(message) {
    if (Socket.ws) {
      Socket.ws.send(JSON.stringify(message));
    }
  }

  static async connect() {
    if (connecting || connected) {
      return;
    } else {
      connecting = true;
    }

    const deviceId = await DeviceInfo.getUniqueId();
    Socket.ws = new WebSocket(webSocketUrlApi, null, {
      headers: {
        Authorization: 'Bearer ' + socketToken,
        deviceId: deviceId,
      },
    });

    Socket.ws.onopen = () => {
      connected = true;
      connecting = false;
      this.appStateListener = AppState.addEventListener(
        'change',
        nextAppState => {
          const message = {
            type: 'appState',
            params: {
              state: nextAppState,
            },
          };
          if (Socket.ws) {
            Socket.ws.send(JSON.stringify(message));
          }
        },
      );
      for (const callback of Socket.reconnectCallback) {
        callback();
      }
    };

    Socket.ws.onmessage = m => {
      console.log(m, 'MESSAGE');
      const data = JSON.parse(m.data);
      console.log(data, 'MESSAGE');
      let supports = false;
      for (const callback of Socket.callbacks) {
        if (callback.supports(data)) {
          supports = true;
          callback.execute(data);
          break;
        }
      }

      if (!supports && data.type === 'CHAT_MESSAGE') {
        Socket.notificationRef.add(data.data);
        Socket.hasNewSetter(true);
      }
    };

    Socket.ws.onclose = e => {
      connected = false;
      connecting = false;
      if (this.appStateListener) {
        this.appStateListener.remove();
      }

      Socket.ws = null;
      if (socketToken) {
        console.log('reconnecting');
      }
    };

    Socket.ws.onerror = e => {
      console.log('error', e, typeof e);
    };
  }
  static disconnect() {
    socketToken = null;
    Socket.ws?.close();
  }
}
export default Socket;
