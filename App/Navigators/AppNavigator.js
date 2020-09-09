import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import LandingScreenContainer from '../Components/LandingScreen/LandingScreenContainer';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    LandingScreen: {screen: LandingScreenContainer},
  },
  {
    initialRouteName: 'LandingScreen',
    headerMode: 'none',
  },
);
export default createAppContainer(StackNavigator);
