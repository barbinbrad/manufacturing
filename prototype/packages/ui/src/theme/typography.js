const light = 300;
const regular = 400;
const bold = 600;

export const fontSizes = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 34];

export const fontWeights = { light, regular, bold };

const typography = {
  h1: {
    fontWeight: light,
    fontSize: '34px',
    lineHeight: '56px',
  },
  h2: {
    fontWeight: light,
    fontSize: '28px',
    lineHeight: '32px',
  },
  h3: {
    fontWeight: 300,
    fontSize: '22px',
    lineHeight: '32px',
  },
  h4: {
    fontWeight: regular,
    fontSize: '18px',
    lineHeight: '32px',
  },
  h5: {
    fontWeight: regular,
    fontSize: '16px',
    lineHeight: '24px',
  },
  h6: {
    fontWeight: bold,
    fontSize: '14px',
    lineHeight: '24px',
  },
  body1: {
    fontWeight: regular,
    fontSize: '14px',
    lineHeight: '24px',
  },
  body2: {
    fontWeight: regular,
    fontSize: '12px',
    lineHeight: '16px',
  },
  paragraph: {
    fontWeight: light,
    fontSize: '16px',
    lineHeight: '32px',
  },
  paragraph2: {
    fontWeight: light,
    fontSize: '12px',
    lineHeight: '24px',
  },
  subtitle1: {
    fontWeight: regular,
    fontSize: '14px',
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: bold,
    fontSize: '10px',
    lineHeight: '16px',
  },
};

export default typography;