import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  StyleSheetManager,
} from 'styled-components';
import { GlobalStyle } from './globals';
import theme from './../theme';

const ThemeProvider = props => (
  <StyledThemeProvider theme={props.theme || theme}>
    <StyleSheetManager disableVendorPrefixes>
      <React.Fragment>
        <GlobalStyle />
        {props.children}
      </React.Fragment>
    </StyleSheetManager>
  </StyledThemeProvider>
);

export default ThemeProvider;