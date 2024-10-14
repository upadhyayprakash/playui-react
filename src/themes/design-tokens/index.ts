import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  background: '#ffffff',
  color: '#000000',
  link: {
    textColor: '#646cff',
    hoverTextColor: '#535bf2',
  },
  button: {
    primary: {
      backgroundColor: '#007bff',
      backgroundHoverColor: '#006fe6',
      backgroundFocusColor: '#007bff',
      color: '#f0f0f0',
    },
    secondary: {
      backgroundColor: '#eaeaea',
      backgroundHoverColor: '#dedede',
      backgroundFocusColor: '#eaeaea',
      color: '#3e3e3e',
    },
  },
  icon: {
    defaultColor: '#aaa',
  },
};

export const darkTheme: DefaultTheme = {
  background: '#121212',
  color: '#e0e0e0',
  link: {
    textColor: '#646cff',
    hoverTextColor: '#535bf2',
  },
  button: {
    primary: {
      backgroundColor: '#007bff',
      backgroundHoverColor: '#1a88ff',
      backgroundFocusColor: '#007bff',
      color: '#f0f0f0',
    },
    secondary: {
      backgroundColor: '#1f1f1f',
      backgroundHoverColor: '#2b2b2b',
      backgroundFocusColor: '#1f1f1f',
      color: '#f0f0f0',
    },
  },
  icon: {
    defaultColor: '#eee',
  },
};
