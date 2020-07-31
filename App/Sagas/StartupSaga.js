import NavigationService from '../Services/NavigationService';

export default function* startup() {
  yield NavigationService.navigateAndReset('LoginScreen');
}
