import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../../Theme/Fonts';
import ApplicationStyles from '../../Theme/ApplicationStyles';
import scale from '../../Utils/scale';
import * as CONST from '../../Utils/Constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center'
  },
  loginContainer: {
    flex: 1
  },
  logoImage: {
    marginTop: 30,
    alignSelf: CONST.CENTER
  },
  LoginText: {
    position: CONST.POSITION_ABSOLUTE,
    top: scale(88),
    alignSelf: CONST.CENTER,
    fontFamily: CONST.fontFamily.JosefBold,
    fontSize: scale(40),
    color: '#f98829'
  },
  inputContainer: {
    justifyContent: 'center'
  },
  emailContainer: {
    marginTop: scale(330),
    marginHorizontal: 45
  },
  passContainer: {
    marginTop: 70,
    marginHorizontal: 45
  },
  field: {
    fontSize: scale(20),
    color: CONST.PRIMARY_DARK_COLOR,
    fontFamily: CONST.fontFamily.Josef
  },
  fieldText: {
    fontSize: scale(20),
    color: CONST.WHITE_COLOR,
    fontFamily: CONST.fontFamily.Josef
  },
  signUpText: {
    color: CONST.BLACK_COLOR,
    fontSize: scale(22),
    fontFamily: CONST.fontFamily.JosefBold
  },
  forgotPassword: {
    marginTop: scale(50)
  },
  buttonContainer: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN
  },
  signUp: {
    marginTop: scale(30),
    marginLeft: scale(50)
  },
  login: {
    flexDirection: CONST.ROW,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginTop: scale(30),
    marginRight: scale(50)
  },
  loginText: {
    color: CONST.WHITE_COLOR,
    fontSize: scale(22),
    fontFamily: CONST.fontFamily.JosefBold,
    marginRight: 10
  },
  connectContainer: {
    alignSelf: CONST.CENTER,
    justifyContent: CONST.CENTER,
    alignItems: CONST.CENTER,
    marginTop: scale(10)
  },
  line: {
    height: 1,
    borderWidth: 1,
    width: width - 200,
    marginBottom: 10,
    borderColor: '#f98729',
    backgroundColor: '#f98729'
  },
  socialIconContainer: {
    marginTop: scale(10),
    flexDirection: CONST.ROW,
    justifyContent: CONST.SPACE_BETWEEN
  },
  fbSocialIcon: {
    marginLeft: scale(50)
  },
  instaSocialIcon: {
    marginRight: scale(50)
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: scale(10)
  },
  subsContainer: {
    height: scale(55),
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: scale(22)
  },
  subsText: {
    color: 'white',
    fontSize: scale(16),
    textAlign: 'center'
  },
  emailInput: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(40),
    borderBottomColor: CONST.WHITE_COLOR,
    fontSize: scale(20),
    fontFamily: CONST.fontFamily.Josef,
    textAlign: 'left'
    // padding: scale(10),
    // paddingRight: scale(30)
  },
  crossIconContainer: {
    backgroundColor: 'transparent',
    height: scale(55),
    position: 'absolute',
    right: 0,
    top: 0
  },
  crossIcon: {
    padding: scale(10),
    height: scale(55),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backIconContainer: {
    marginTop: scale(15),
    marginBottom: scale(10),
    paddingLeft: scale(10),
    paddingVertical: scale(10),
    width: scale(50)
  },
  signInContainers: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(26)
  },
  appleBtn: {
    height: scale(44),
    width: scale(200)
  },
  appleCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: scale(50),
    marginVertical: scale(10)
  },
  signupButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  orTextStyle: {
    fontSize: scale(18),
    color: 'black'
  },
  signupButton: {
    height: scale(42),
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginHorizontal: scale(54),
    marginVertical: scale(10),
    borderRadius: scale(2)
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scale(20),
    textAlign: 'center'
  }
});
