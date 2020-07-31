import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SplashScreen from '../Components/SplashScreen/SplashScreen';
import LoginScreenContainer from '../Components/LoginScreen/LoginScreenContainer';
import HomeTabContainer from '../Components/Home/HomeTabContainer';
import OrderTabContainer from '../Components/Order/OrderTabContainer';
import FavoritesTabContainer from '../Components/Favorites/FavoritesTabContainer';
import FeedbackScreenContainer from '../Components/FeedbackScreen/FeedbackContainer';
import ProfileTabContainer from '../Components/ProfileTab/ProfileTabContainer';
import * as CONST from '../Utils/Constants';
import scale from '../Utils/scale';
import SignupScreenContainer from '../Components/SignupScreen/SignupScreenContainer';

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: { screen: HomeTabContainer },
    OrderTab: { screen: OrderTabContainer },
    FavoritesTab: { screen: FavoritesTabContainer },
    ProfileTab: { screen: ProfileTabContainer }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeTab') {
          iconName = CONST.HOME_TAB_ICON;
        } else if (routeName === 'OrderTab') {
          iconName = CONST.ORDERS_TAB_ICON;
        } else if (routeName === 'FavoritesTab') {
          iconName = CONST.FAVORITES_TAB_ICON;
        } else if (routeName === 'ProfileTab') {
          iconName = CONST.SETTINGS_TAB_ICON;
        }
        // You can return any component that you like here!
        return <Image source={iconName} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: CONST.PRIMARY_COLOR,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: scale(15),
        fontFamily: CONST.fontFamily.JosefBold
      },
      style: {
        height: scale(80)
      }
    }
  }
);

const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    LoginScreen: { screen: LoginScreenContainer },
    HomeTab: { screen: TabNavigator },
    FeedbackScreen: { screen: FeedbackScreenContainer },
    Signup: { screen: SignupScreenContainer }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none'
  }
);
export default createAppContainer(StackNavigator);
