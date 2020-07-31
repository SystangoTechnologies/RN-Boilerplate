import { StyleSheet, Dimensions } from 'react-native';
import Fonts from '../../Theme/Fonts';
import ApplicationStyles from '../../Theme/ApplicationStyles';
import scale from '../../Utils/scale';
import Colors from '../../Theme/Colors';
import * as CONST from '../../Utils/Constants';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: Colors.text
  },
  textRate: {
    ...Fonts.style.small,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 100,
    color: 'red'
  },
  inputContainer: {
    marginVertical: 10
  },
  subsContainer: {
    alignSelf: 'center',
    height: scale(55),
    width: scale(300),
    backgroundColor: 'black',
    justifyContent: 'center',
    marginTop: scale(22)
  },
  subsText: {
    color: 'white',
    fontSize: scale(16),
    textAlign: 'center'
  },
  textInputContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',
    height: 50,
    width: width - 50,
    marginBottom: 10,
    alignSelf: 'center'
  },
  ratingContainer: {
    backgroundColor: 'white',
    marginVertical: 10
  },
  headerContainer: {
    flex: 3,
    paddingTop: 30,
    borderWidth: 1,
    backgroundColor: '#ECE5E3',
    borderColor: CONST.LIGHT_GREY_BG,
    borderRadius: scale(30),
    margin: scale(20),
    shadowOpacity: 0.75,
    shadowRadius: scale(10),
    shadowColor: CONST.GREY_COLOR,
    shadowOffset: { height: 5, width: 5 },
    elevation: 5
  }
});
