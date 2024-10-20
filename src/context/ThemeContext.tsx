import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/design-tokens';
import { GlobalStyle } from '../themes/globalStyles';

interface ThemeContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  toggleTheme: () => {}, // Default function does nothing
});

export const Themes = {
  dark: 'dark',
  light: 'light',
} as const;

export type Theme = keyof typeof Themes;

interface ThemeProviderProps {
  children: ReactNode;
  mode?: Theme; // Allow passing a custom theme
}

export const ThemeProvider = ({ children, mode }: ThemeProviderProps): React.ReactNode => {
  const getSystemPreference = (): Theme => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return mediaQuery.matches ? 'dark' : 'light';
  };

  const getInitialTheme = (): Theme => {
    // Step 1: Use customTheme if provided
    if (mode) return mode;

    // Step 2: Check for a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) return savedTheme;

    // Step 3: Default to system preference if no theme is saved
    const systemPreference = getSystemPreference();
    return systemPreference;
  };

  const [theme, setTheme] = useState<Theme | null>(getInitialTheme());

  useEffect(() => {
    const handleSystemThemeChange = (): void => {
      setTheme(getInitialTheme());
    };

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup event listener
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    if (mode) setTheme(mode);
  }, [mode]);

  const toggleTheme = (): void => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: theme === 'dark' ? darkTheme : lightTheme, toggleTheme }}
    >
      <StyledThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle theme={theme === 'dark' ? darkTheme : lightTheme} />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => React.useContext(ThemeContext);
