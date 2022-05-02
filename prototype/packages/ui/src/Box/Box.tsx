import styled from 'styled-components';
import theme from '../theme';
import {
  overflow,
  borders,
  borderRadius,
  borderColor,
  flex,
  height,
  maxWidth,
  minHeight,
  maxHeight,
  minWidth,
  alignSelf,
  justifySelf,
  space,
  width,
  color,
  textAlign,
} from '../system';

const Box = styled.div`
  box-sizing: border-box;
  ${maxWidth}
  ${minWidth}
  ${space}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${width}
  ${color}
  ${textAlign}
  ${flex}
  ${alignSelf}
  ${justifySelf}
  ${borders}
  ${borderRadius}
  ${overflow}
  ${borderColor}
`;

Box.displayName = 'Box';
Box.defaultProps = {
  theme,
};

Box.propTypes = {
  ...space.propTypes,
  ...height.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...textAlign.propTypes,
  ...flex.propTypes,
  ...alignSelf.propTypes,
  ...justifySelf.propTypes,
  ...borders.propTypes,
  ...overflow.propTypes,
};

export default Box;