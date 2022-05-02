import styled from 'styled-components';
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  propTypes,
} from '../system';
import theme from '../theme';
import Box from '../Box';

const Flex = styled(Box)`
  display: flex;
  ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection};
`;

Flex.defaultProps = {
  theme,
};

Flex.propTypes = {
  ...propTypes.Box,
  ...propTypes.alignItems,
  ...propTypes.justifyContent,
  ...propTypes.flexWrap,
  ...propTypes.flexDirection,
};

Flex.displayName = 'Flex';

export default Flex;