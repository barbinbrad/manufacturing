import styled from 'styled-components';
import PropTypes from 'prop-types';
import { space, width, color, height } from 'styled-system';

function error({ hasError, theme }) {
  const borderColor = (!hasError) ? theme.colors.grey[600] : theme.colors.error.main;

  return {
    border: `1px solid ${borderColor}`,
  };
}

const Input = styled.input`
  appearance: none;
  border:none;
  border-radius: 3px;
  box-sizing: border-box;
  display: block;
  padding: 10px 14px;
  outline: none;
  width: 100%;
  ::-ms-clear {
    display: none;
  }
  ::placeholder {
    opacity: 0.4;
  }
  :read-only {
    cursor: not-allowed
  }
  ${color} ${space} ${width} ${height} ${error};
`;

Input.displayName = 'Input';

Input.propTypes = {
  placeholder: PropTypes.string,
  hasError: PropTypes.bool,
  borderColor: PropTypes.string,
};

Input.defaultProps = {
  bg: 'light',
  color: 'text.onLight',
};

export default Input;