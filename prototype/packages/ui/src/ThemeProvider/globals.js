import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${props => props.theme.font};
    ${props => props.theme.typography.body1};
  }
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.dark};
    color: ${props => props.theme.colors.light};
    padding: 0;
  }
  input, textarea {
    font-family: ${props => props.theme.font};
  }
  // custom scrollbars
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #757575;
  }
  ::-webkit-scrollbar-corner {
    background: rgba(0,0,0,0.5);
  }
  // remove dotted Firefox outline
  button, a {
    outline: 0;
    ::-moz-focus-inner {
      border: 0;
    }
  }
`;

export { GlobalStyle };