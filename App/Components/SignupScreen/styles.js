import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import ApplicationStyles from '../../Theme/ApplicationStyles';
import scale from '../../Utils/scale';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center'
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
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(55),
    borderColor: '#d0d0d0',
    fontSize: scale(14),
    textAlign: 'left',
    padding: scale(10),
    paddingRight: scale(30)
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
  },
  genderInput: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(55),
    borderColor: '#d0d0d0',
    fontSize: scale(14),
    textAlign: 'left',
    padding: scale(10),
    paddingRight: scale(30)
  },
  genderView: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    marginTop: 10
  },
  dobContainer: {
    marginTop: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    paddingLeft: 10
  }
});
