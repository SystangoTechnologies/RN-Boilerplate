import NavigationService from '../services/NavigationService';

export default function* startup() {
  yield NavigationService.navigateAndReset('LandingScreen');
}
