import { StyleSheet } from 'react-native';
import screen from '@utils/screen';

module.exports = StyleSheet.create({
	spinnerContainer: {
		zIndex: 100, 
		justifyContent: 'center',  
		position: 'absolute', 
		width: screen.WIDTH, 
		height: screen.HEIGHT, 
		backgroundColor: 'rgba(52, 52, 52, 0.8)',
	},
	spinner: {
		zIndex: 200,
		alignSelf: 'center',
	},
});