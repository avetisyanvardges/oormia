import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { socialLogin } from 'state/user/operations/socialLogin';
import dispatch from 'utils/dispatch/dispatch';

function useContainer() {
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log(idToken, 'IDTOKEN');
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    console.log(googleCredential, 'googleCredential');
    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(user => {
        dispatch(socialLogin({ socialUser: user }));
        console.log('Signed in with Google!', user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return { onGoogleButtonPress };
}

export { useContainer };
