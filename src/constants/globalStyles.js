/* @flow */
import { Platform, Dimensions } from 'react-native';


export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 10;

export const colors = {
  BLACK: '#000',
  DARK_GREY: '#464E55',
  GREY_MENU: '#465661',
  GREY_DARK: '#A3A7A3',
  GREY_BUTTON_LIGHT: '#ccc',
  BORDER_COLOR_GREY: '#76777A',
  BORDER_COLOR_ADD: '#33424533',
  GREY_MENU_DARK: '#565656',
  GREY_MENU_DARK_ADD: '#747678',
  GREY_MENU_MIDDLE: '#808080',
  GREY_MENU_MIDDLE_ADD: '#999999',
  GREY_MENU_NORMAL: '#b3b3b3',
  GREY: '#666',
  GREY_MENU_NORMAL_ADD: '#c2c2c2',
  GREY_BUTTON_LIGHT_ADD: '#cfcfcf',
  INPUT_COLOR: '#F2F2F2',
  INPUT_ADD_COLOR: '#E6E6E6',
  GREY_TEXT_COLOR: '#a4a4a4',
  WHITE_LIGHT: '#FCFCFC',
  WHITE_DARK: '#ececec',
  WHITE: '#fff',
  WHITE_ADD_NEW: '#efefef',
  TEXT_GREY_ADD: '#b6b6b6',
  RED_GLOBAL: '#EE3124',
  BLUE_COLOR: '#13B5EA',
  BLUE_DARK: '#2577fc',
  YELLOW_COLOR: '#FDCD32',
  YELLOW_LIGHT: '#ffffffaa',
  SHADOW_COLOR: '#d1d1d1',
};

export const dismissModalAnimation = Platform.OS === 'ios' ? 'slide-down' : 'none';
export const showModalAnimation = Platform.OS === 'ios' ? 'slide-up' : 'none';
