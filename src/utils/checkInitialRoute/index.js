import {routNames} from '../../constants/routNames';
import {store} from '../../state/store';
import {isEmpty} from 'lodash';

function checkInitialRoute() {
  const {
    user: {token},
  } = store.getState();
  if (!isEmpty(token)) {
    return routNames.APP_LAYER;
  } else {
    return routNames.AUTH_LAYER;
  }
}

export {checkInitialRoute};
