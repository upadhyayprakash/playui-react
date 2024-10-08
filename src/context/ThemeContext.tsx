import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import { lightTheme, darkTheme } from '../themes';
import { GlobalStyle } from '../themes/globalStyles';

interface ThemeContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  toggleTheme: () => {}, // Default function does nothing
});

type Theme = 'dark' | 'light';

interface ThemeProviderProps {
  children: ReactNode;
  customTheme?: Theme; // Allow passing a custom theme
}

export const ThemeProvider = ({ children, customTheme }: ThemeProviderProps): React.ReactNode => {
  const getSystemPreference = (): Theme => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return mediaQuery.matches ? 'dark' : 'light';
  };

  const getInitialTheme = (): Theme => {
    // Step 1: Use customTheme if provided
    if (customTheme) return customTheme;

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
    if (customTheme) setTheme(customTheme);
  }, [customTheme]);

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
