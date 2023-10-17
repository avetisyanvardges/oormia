import {routNames} from '../../constants/routNames';
import {store} from '../../state/store';

function checkInitialRoute() {
  const {
    user: {token},
  } = store.getState();
  if (token) {
    return routNames.APP_LAYER;
  } else {
    return routNames.AUTH_LAYER;
  }
}

export {checkInitialRoute};
