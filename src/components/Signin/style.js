import {StyleSheet, Platform} from 'react-native';
import screen from '@utils/screen';
import {getCorrectFontSizeForScreen} from '../../utils/mutiResolution';
import scale from '../../utils/scale';
module.exports = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#bfe8f0',
		padding:15,
	},
	topContainer: {
		flexDirection: 'row', 
		paddingVertical: 2,
	},
	signinLabel: {
		color: '#1d224f',
		fontSize: getCorrectFontSizeForScreen(24),
		fontFamily: 'OpenSans',
		textAlign: 'left',
	},
	label: {
		color: '#001e60',
		fontSize: getCorrectFontSizeForScreen(9),
		fontFamily: 'OpenSans',
		textAlign: 'left',
		marginVertical: scale(5),
	},
	midLabel: {
		color: '#001e60',
		fontSize: getCorrectFontSizeForScreen(11),
		fontFamily: 'OpenSans',
		textAlign: 'left',
		marginVertical: scale(1),
	},
	bigLabel: {
		color: '#1d224f',
		fontSize: getCorrectFontSizeForScreen(13),
		fontFamily: 'OpenSans-Semibold',
		textAlign: 'left',
		marginVertical: scale(1),
	},
	inputContainer: {
		marginTop: scale(10),
	},
	passBottomBrd: {
		borderBottomWidth: 1, 
		borderColor:'#001e60', 
		marginTop: scale(-3),
	},
	inputBox : {
		paddingVertical:5,
		paddingHorizontal:5,
		backgroundColor:'#FFF',
		alignSelf:'stretch',
		borderColor:'transparent',
		borderWidth:1,
		height:getCorrectFontSizeForScreen(50)
	},
	remPassConteiner: {
		marginTop: scale(15),
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	chkboxContainer: {
		flexDirection: 'row', 
		alignItems: 'flex-end' ,
	},
	chkIcon: {
		height:scale(20),
		width:20,
	},
	submitButtonContainer: {
		marginTop: scale(30), 
		alignItems: 'center', 
		justifyContent: 'center',
	},
	submitButton: {
		backgroundColor:'#001e60',
		width: 200,
		height:scale(40),
		alignItems: 'center', 
		justifyContent: 'center',
	},
	submitBtnText: {
		color: '#ffffff',
		fontSize: getCorrectFontSizeForScreen(12),
		fontFamily: 'OpenSans-Semibold',
		textAlign: 'center',
	},
	hDivider: {
		marginVertical: scale(24),
		height: scale(2), 
		backgroundColor:'#ffffff',
	},
	socialBtn: {
		marginTop: scale(10),
		width:200, height:scale(40), flexDirection:'row'
	},
	socialButtonContainer: {
		zIndex: 11,
		alignItems: 'center', 
		justifyContent: 'center', 
	},
	socialIconContainer: {
		backgroundColor:'#fff',
		width: 47,
		height:scale(40),
		alignItems: 'center', 
		justifyContent: 'center',
	},
	socialTextContainer: {
		backgroundColor:'#fff',
		width: 157,
		height:scale(40),
		alignItems: 'center', 
		justifyContent: 'center',
	},
	socialBtnText: {
		color: '#001e60',
		fontSize: getCorrectFontSizeForScreen(12),
		fontWeight: '600',
		fontFamily: 'OpenSans-Semibold',
		textAlign: 'center',
	},
	socialVdivide: {
		backgroundColor:'#c2e6e1',
		width: 2,
		height:scale(40),
	},
	bottomBar: {
		position: 'absolute',
		bottom:0,
		flexDirection : 'row',
		height: scale(50),
		width: screen.WIDTH, 
		alignItems: 'center',
		padding: 5,
		paddingHorizontal: 20,
		backgroundColor: '#001e60',
	},
	bgImage: {
		zIndex: -1,
		position: 'absolute',
		bottom:0,
		width: screen.WIDTH, 
	},
	letsStartText: {
		color: '#c2e6e1',
		fontSize: getCorrectFontSizeForScreen(22),
		fontFamily:  Platform.OS === 'ios' ? 'MrsEavesItalic' : 'MrsEavesItalic_Italic',
		textAlign: 'left',
	},
	signUpBtn :{
		borderColor: '#c2e6e1',
		borderWidth: 1.5,
	},
	signUpText: {
		color: '#c2e6e1',
		fontSize: getCorrectFontSizeForScreen(10),
		paddingHorizontal:15, 
		paddingVertical:5,
		textAlign: 'center',
	},
	focusedInputBox:{
		borderColor:'#7bacb5',
		borderWidth:1,
	},
	errorMsgTextStyle :{
		color: '#b3441b',
		fontSize : getCorrectFontSizeForScreen(9),
		textAlign : 'left',
		fontStyle : 'italic',
		fontWeight : '600'
	},
	errorMsgViewStyle :{
		paddingVertical : 7.5,
		height : scale(11)
	}
});