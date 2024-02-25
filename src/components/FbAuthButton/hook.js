import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import dispatch from 'utils/dispatch/dispatch';
import { socialLogin } from 'state/user/operations/socialLogin';

function useContainer() {
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    console.log(data, 'DATA');

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    console.log(facebookCredential, 'FBCredential');

    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(facebookCredential)
      .then(user => {
        const mutatedUser = {
          ...user,
          additionalUserInfo: {
            ...user.additionalUserInfo,
            profile: {
              ...user.additionalUserInfo.profile,
              picture: user?.additionalUserInfo?.profile?.pcture?.data?.url,
              family_name: user?.additionalUserInfo?.profile?.last_name,
              given_name: user?.additionalUserInfo?.profile?.first_name,
            },
          },
        };
        dispatch(socialLogin(mutatedUser));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return { onFacebookButtonPress };
}

export { useContainer };
