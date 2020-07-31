import { StyleSheet, PixelRatio } from 'react-native';
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
  subsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    // margin: scale(10),
    // height: scale(40),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    borderRadius: scale(20)
  },
  editContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    // margin: scale(10),
    // height: scale(40),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    borderRadius: scale(20)
  },
  subsText: {
    color: Colors.white,
    fontSize: scale(16),
    textAlign: 'center'
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(10)
  },
  avatarContainer: {
    borderColor: CONST.PRIMARY_COLOR,
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  avatar: {
    borderRadius: scale(48),
    width: scale(96),
    height: scale(96)
  },
  cameraIcon: {
    position: 'absolute',
    right: scale(1),
    bottom: scale(5)
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
  },
  detailsCon: {
    flex: 7,
    margin: 20
  },
  detsContainer: {
    flex: 1
  },
  label: {
    fontSize: scale(12),
    color: Colors.text,
    padding: scale(2)
  },
  labelVal: {
    fontSize: scale(16),
    color: Colors.text,
    padding: scale(2)
  },
  itemContaine: {
    flexDirection: 'row',
    paddingVertical: scale(5)
  },
  iconContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  textContainer: {
    flex: 8,
    padding: 5
  }
});
