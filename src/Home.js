/**
 * @author Tushar K Sarkar
 * Jan 18, 2018
 * Root Navigator For App
 * 
 */

import {StackNavigator} from 'react-navigation';
import SigninContainer from '../src/components/Signin/SigninContainer';

const navigationOptions = {
	headerStyle: {
		backgroundColor: '#000',
		height: 50,
		justifyContent: 'flex-end',
		elevation: 0,
	},
	headerTitleStyle: {
		color: '#FFFFFF',
		justifyContent: 'flex-end',
	},
	headerTintColor: '#FFFFFF',
};

export default Home = StackNavigator({
	SigninScreen: {screen:SigninContainer, navigationOptions:{header:null}}
},{
	headerMode: 'screen'
}, {
	navigationOptions
});