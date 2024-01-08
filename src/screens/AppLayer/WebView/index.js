import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { deviceInfo } from 'assets/deviceInfo';
import { back } from 'services/NavigationService';
import Header from 'components/Header';
import { Colors } from 'assets/RootStyles';
import dispatch from 'utils/dispatch/dispatch';
import { generateQr } from 'state/events/operations/generateQr';

let canGoBack = false;

const WebViewScreen = ({ route }) => {
  const navigation = useNavigation();
  const { uri } = route?.params;
  const webViewRef = useRef(null);
  const [load, setLoad] = useState(true);
  const [url, setUrl] = useState();

  useEffect(() => {
    if (uri) {
      if (deviceInfo?.android && uri.includes('.pdf')) {
        setUrl(`https://docs.google.com/viewer?url=${uri}`);
      } else {
        setUrl(uri);
      }
    }
  }, [uri, load]);

  const handleNavigationStateChange = navState => {
    canGoBack = navState.canGoBack;

    const { url } = navState;
    console.log(url, 'URL');

    // Check if the URL contains the desired parameter (responseCode)
    if (url.includes('resposneCode=00') || url.includes('responseCode=00')) {
      setLoad(true);
      const { eventId, ticketCount } = route.params;
      dispatch(
        generateQr({
          params: { eventId, ticketCount },
          callback: () => {
            back();
            setTimeout(() => {
              setLoad(false);
            }, 400);
          },
        }),
      );
      // Success logic here
      console.log('Success');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={''}
        backPress={() => back()}
        containerStyle={{ backgroundColor: Colors.purple['500'] }}
      />
      <WebView
        ref={webViewRef}
        source={{
          uri: url,
        }}
        onLoad={() => {
          console.log('lOAD');
          setLoad(false);
        }}
        onLoadEnd={() => {
          console.log('onLoadEnd');
          setLoad(false);
        }}
        onError={error => console.error('WebView Error:', error)}
        onHttpError={e => {
          console.log(e, 'onHttpError');
          // navigation.goBack();
        }}
        onNavigationStateChange={handleNavigationStateChange}
        setSupportMultipleWindows
        javaScriptEnabled // Enable JavaScript if needed
        originWhitelist={['*']} // Allow all origins (be cautious with this in a production app)
      />
      {load ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 999,
            backgroundColor: '#fff',
          }}>
          <LottieView
            source={require('../../../assets/lottie/loader.json')}
            autoPlay
            loop
            speed={0.7}
          />
        </View>
      ) : null}
    </View>
  );
};

export default WebViewScreen;
