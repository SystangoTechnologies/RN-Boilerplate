import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingScreenContainer from '../components/landingScreen/LandingScreenContainer';

const StackNavigator = createStackNavigator(
  {
    LandingScreen: {screen: LandingScreenContainer},
  },
  {
    initialRouteName: 'LandingScreen',
    headerMode: 'none',
  },
);
export default createAppContainer(StackNavigator);
