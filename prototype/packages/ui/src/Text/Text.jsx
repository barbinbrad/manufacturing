import styled from 'styled-components';
import {
  typography,
  fontSize,
  space,
  color,
  textAlign,
  fontWeight,
} from '../system';
import theme from '../theme';

const Text = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  ${typography}
  ${fontSize}
  ${space}
  ${color}
  ${textAlign}
  ${fontWeight}
`;

Text.displayName = 'Text';

Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...textAlign.propTypes,
  ...typography.propTypes,
};

Text.defaultProps = {
  theme: theme,
  m: 0,
};

export default Text;