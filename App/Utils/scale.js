import { Dimensions } from 'react-native';
import * as CONST from './Constants';

const { height, width } = Dimensions.get('window');

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function scale(units = 1) {
  return (width / CONST.SCREEN_WIDTH) * units;
}

const verticalScale = (size) => (height / CONST.SCREEN_HEIGHT) * size;

export { verticalScale };
