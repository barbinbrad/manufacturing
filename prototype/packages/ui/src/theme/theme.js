import { fonts } from './fonts';
import { getContrastRatio } from './utils/colorManipulator';
import { lightBlue, red, teal, orange, pink, blueGrey, yellow } from './palette';
import typography, { fontSizes, fontWeights } from './typography';

const space = [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
const contrastThreshold = 3;

const colors = {
  accent: {
    purple: '#5219d0',
    pink: '#ff008c',
    blue: '#00aeff',
    yellow: '#ffc400',
    green: '#3ef794',
  } ,

  dark: '#111111',

  light: '#FFFFFF',

  primary: {
    main: '#1C254D',
    light: '#222C59',
    lighter: '#2C3A73',
    dark: '#111B48',
    contrastText: '#FFFFFF',
  },

  secondary: {
    main: '#512FC9',
    light: '#651FFF',
    dark: '#354AA4',
    contrastText: '#FFFFFF',
  },

  darkness: {
    80: 'rgba(0,0,0,0.8)',
    70: 'rgba(0,0,0,0.7)',
    60: 'rgba(0,0,0,0.6)',
    50: 'rgba(0,0,0,0.5)',
    40: 'rgba(0,0,0,0.4)',
    30: 'rgba(0,0,0,0.3)',
    20: 'rgba(0,0,0,0.2)',
    10: 'rgba(0,0,0,0.1)',
  },

  lightness: {
    80: 'rgba(255,255,255,0.8)',
    70: 'rgba(255,255,255,0.7)',
    60: 'rgba(255,255,255,0.6)',
    50: 'rgba(255,255,255,0.5)',
    40: 'rgba(255,255,255,0.4)',
    30: 'rgba(255,255,255,0.3)',
    20: 'rgba(255,255,255,0.2)',
    10: 'rgba(255,255,255,0.1)',
  },

  text: {
    // The most important text.
    primary: 'rgba(255,255,255,0.87)',
    // Secondary text.
    secondary: 'rgba(255, 255, 255, 0.56)',
    // Placeholder text for forms.
    placeholder: 'rgba(255, 255, 255, 0.24)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.24)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.24)',
    // On light backgrounds
    onLight: 'rgba(0, 0, 0, 0.87)',
    // On dark backgrounds
    onDark: 'rgba(255, 255, 255, 0.87)',
  },

  grey: {
    ...blueGrey,
  },

  error: {
    light: red['A200'],
    dark: red['A700'],
    main: red['A400'],
  },

  action: {
    active: '#FFFFFF',
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },

  subtle: blueGrey[50],
  link: lightBlue[500],
  danger: pink.A400,
  highlight: yellow[50],
  disabled: blueGrey[500],
  info: lightBlue[600],
  warning: orange.A400,
  success: teal.A700,
};

const borders = [
  0,
  '1px solid',
  '2px solid',
  '4px solid',
  '8px solid',
  '16px solid',
  '32px solid',
];

const theme = {
  colors,
  typography,
  font: fonts.sansSerif,
  fonts: fonts,
  fontWeights,
  fontSizes,
  space,
  borders,
  radii: [0, 2, 4, 8, 16, 9999, '100%'],
  regular: fontWeights.regular,
  bold: fontWeights.bold,
  // disabled media queries for styled-system
  breakpoints: [],
};

export default theme;

export function getContrastText(background) {
  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  const contrastText =
    getContrastRatio(background, colors.light) >= contrastThreshold
      ? colors.light
      : colors.dark;

  return contrastText;
}