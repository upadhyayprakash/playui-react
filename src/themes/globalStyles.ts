import { createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

const styled = { createGlobalStyle }; // workaround for prettier issue with 'createGlobalStyle'

export const GlobalStyle = styled.createGlobalStyle<{ theme: DefaultTheme }>`
  html {
    box-sizing: border-box;
    line-height: 1.5;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color-scheme: light dark;
    color: #242424;
    background-color: rgba(255, 255, 255, 0.87);
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  body {
    display: flex;
    margin: 0;
    font-family:
      'lato',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol';
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }

  /* Add any other global styles here */
  a {
    font-weight: 500;
    color: ${(props) => props.theme.link.textColor};
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.link.hoverTextColor};
    text-decoration: underline;
  }
`;
