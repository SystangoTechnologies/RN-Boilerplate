// Screen Constatnts
export const SCREEN_HEIGHT = 667;
export const SCREEN_WIDTH = 375;

// Color Constants
export const WHITE_COLOR = '#FFFFFF';
export const BLACK_COLOR = '#000000';
export const GREY_COLOR = '#626262';
export const STATUS_BAR_BACKGROUND_COLOR = '#FFFFFF';
export const PRIMARY_COLOR = '#ed9121';
export const ACTIVE_TAB_COLOR = '#457ced';
export const TITLEBAR_BACKGROUND_COLOR = 'rgb(253,249,249)';
export const BORDER_COLOR_GREY = 'rgb(208,208,208)';
export const BORDER_COLOR_GREY_LIGHT = 'rgb(221,221,221)';
export const BORDER_SHADOW_COLOR = 'rgba(0,0,0,0.03)';
export const BLUE_COLOR_COLLAPSE = 'rgb(69,124,237)';
export const ICON_BG = 'rgb(253, 249, 249)';
export const LIGHT_GREY_BG = 'rgb(235, 235, 235)';
export const LIGHT_GREY_COLOR = '#efefef';
export const GREY_DARK = '#323232';
export const PRIMARY_DARK_COLOR = '#a24900';

// Font Weight Constants
export const fontWeight = {
  Thin: '100',
  UltraLight: '200',
  Light: '300',
  Regular: '400',
  Medium: '500',
  Semibold: '600',
  Bold: '700',
  Heavy: '800',
  Black: '900'
};

// Font Family constants 'TODO custom fonts needs to install'
export const fontFamily = {
  Regular: 'Raleway-Regular',
  Medium: 'Raleway-Medium',
  SemiBold: 'Raleway-SemiBold',
  Light: 'Raleway-Light',
  Bold: 'Raleway-Bold',
  MediumItalic: 'Raleway-MediumItalic',
  RegularItalic: 'Raleway-Italic',
  Black: 'Raleway-Black',
  Josef: 'JosefinSans-Regular',
  JosefBold: 'JosefinSans-Bold'
};

// CONFIGURATIONS
export const API_TIMEOUT = 30000;

// API CALLING CONSTANTS
export const GET_API = 'GET';
export const POST_API = 'POST';
export const PUT_API = 'PUT';
export const DELETE_API = 'DELETE';
export const UPDATE_API = 'PUT';

// Saga Constants
export const START_UP = 'START_UP';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAILURE = 'USER_SIGNUP_FAILURE';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const USER_LOGGED_OUT_SUCCESSFULLY = 'USER_LOGGED_OUT_SUCCESSFULLY';
export const ERROR_IN_LOGOUT = 'ERROR_IN_LOGOUT';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

/**
 * @Brands Constants
 */
export const GET_ALL_BRANDS = 'GET_ALL_BRANDS';
export const GET_ALL_BRANDS_SUCCESS = 'GET_ALL_BRANDS_SUCCESS';
export const GET_ALL_BRANDS_FAILURE = 'GET_ALL_BRANDS_FAILURE';

// Messages
export const MSG_TITLE = 'Any Message Title';

// image constants 'TODO specify correct assets path'
// export const HOME_INACTIVE = require('@assets/');
// export const HOME_ACTIVE = require('@assets/');

// Screen uri constants
export const BONUS_URI = 'https://www.xyz.com/app/bonus/';
export const FAQS_URI = 'https://www.xyz.com/app/faq/';

// Style Constants
export const POSITION_ABSOLUTE = 'absolute';
export const POSITION_RELATIVE = 'relative';
export const CENTER = 'center';
export const UNDEFINED = 'undefined';
export const SPACE_BETWEEN = 'space-between';
export const FLEX_START = 'flex-start';
export const FLEX_END = 'flex-end';
export const ROW = 'row';
export const COLUMN = 'column';
export const WINDOW = 'window';
export const PLATFORM_ANDROID = 'android';
export const PLATFORM_IOS = 'ios';
export const POSITION_RIGHT = 'right';
export const SPACE_AROUND = 'space-around';
export const STRETCH = 'stretch';
export const CONTAIN = 'contain';
export const BOLD = 'bold';

// Image Constants

export const APP_BACKGROUND = require('../../assets/Images/bg.png');
export const APP_LOGO = require('../../assets/Images/logo.png');
export const FB_ICON = require('../../assets/Images/fb.png');
export const GOOGLE_PLUS_ICON = require('../../assets/Images/googlePlus.png');
export const INSTA_ICON = require('../../assets/Images/insta.png');
export const NOTIFICATION_ICON = require('../../assets/Home/notifications.png');
export const CART_ICON = require('../../assets/Home/cart.png');
export const SEARCH_ICON = require('../../assets/Home/search.png');
export const FILTER_ICON = require('../../assets/Home/filter.png');
export const BOTTLE_IMAGE = require('../../assets/Home/img.png');
export const TRIPLE_DOT = require('../../assets/Home/dots.png');
export const HOME_TAB_ICON = require('../../assets/Home/home.png');
export const ORDERS_TAB_ICON = require('../../assets/Home/orders.png');
export const FAVORITES_TAB_ICON = require('../../assets/Home/favorites.png');
export const SETTINGS_TAB_ICON = require('../../assets/Home/settings.png');
export const LOAD_MORE_ICON = require('../../assets/Home/loadMore.png');
