import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import Colors from '../../Theme/Colors';
import ApplicationStyles from '../../Theme/ApplicationStyles';
import scale from '../../Utils/scale';
import * as CONST from '../../Utils/Constants';

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
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: Colors.text
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
