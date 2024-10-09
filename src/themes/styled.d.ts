import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    color: string;
    link: {
      textColor: string;
      hoverTextColor: string;
    };
    button: {
      primary: {
        backgroundColor: string;
        backgroundHoverColor?: string;
        backgroundFocusColor?: string;
        color: string;
      };
      secondary: {
        backgroundColor: string;
        backgroundHoverColor?: string;
        backgroundFocusColor?: string;
        color: string;
      };
    };
  }
}
