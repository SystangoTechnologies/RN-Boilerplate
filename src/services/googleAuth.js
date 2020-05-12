import {
  GoogleSignin,
} from 'react-native-google-signin';

GoogleSignin.configure({
  iosClientId:
      '580318158991-kt5n7fievdccofp779m7r539nti13fb2.apps.googleusercontent.com',
  webClientId:
      '580318158991-kaoe76t99ikgclu8elfh12osvu15pu8s.apps.googleusercontent.com',
});

export async function loginWithGoogle() {
  await GoogleSignin.hasPlayServices();
  return GoogleSignin.signIn();
}

export async function signOut() {
  GoogleSignin.signOut();
}
