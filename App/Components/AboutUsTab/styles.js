import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import ApplicationStyles from '../../Theme/ApplicationStyles';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
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
    marginBottom: 5
  },
  textInput: {
    height: 40,
    flex: 1,
    minHeight: '7%',
    marginTop: '7%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    // alignItems: 'baseline',
    borderColor: '#D0D0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: 'white',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    marginTop: 10
  }
});
