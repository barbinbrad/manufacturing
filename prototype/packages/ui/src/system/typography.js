import PropTypes from 'prop-types';

function getTypography(props) {
  const { typography, theme } = props;
  return {
    ...theme.typography[typography],
    ...caps(props),
    ...breakAll(props),
    ...bold(props),
    ...mono(props),
  };
}

function caps(props) {
  return props.caps ? { textTransform: 'uppercase' } : null;
}

function mono(props) {
  return props.mono ? { fontFamily: props.theme.fonts.mono } : null;
}

function breakAll(props) {
  return props.breakAll ? { wordBreak: 'break-all' } : null;
}

function bold(props) {
  return props.bold ? { fontWeight: props.theme.fontWeights.bold } : null;
}

getTypography.propTypes = {
  caps: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.string,
};

export default getTypography;