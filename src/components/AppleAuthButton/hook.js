import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import dispatch from 'utils/dispatch/dispatch';
import { socialLogin } from 'state/user/operations/socialLogin';

function useContainer() {
  async function onAppleButtonPress() {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }

    // Create a Firebase credential from the response
    const { identityToken, nonce, fullName } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    auth()
      .signInWithCredential(appleCredential)
      .then(res => {
        console.log(res, 'APPLE ');
        dispatch(socialLogin(res));
      })
      .catch(e => console.log(e, 'error '));

    // Sign the user in with the credential
    // return;
  }

  return { onAppleButtonPress };
}

export { useContainer };
