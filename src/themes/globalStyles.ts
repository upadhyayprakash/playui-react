import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }

  /* Add any other global styles here */
`;
