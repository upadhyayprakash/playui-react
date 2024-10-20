import '@testing-library/jest-dom';
import { cloneElement } from 'react';
import { RenderResult, render as rtlRender } from '@testing-library/react';
import { Theme, ThemeProvider, Themes } from './themes';

// Custom render function to inject data-testid dynamically
export const render = (
  ui: React.ReactElement,
  { testId = 'TEST_ID', ...options } = {}
): RenderResult => {
  return rtlRender(
    cloneElement(ui, { ['data-testid']: testId }), // Dynamically pass 'data-testid' prop
    options
  );
};

// Custom render function to wrap the component within ThemeProvider
export const renderWithTheme = (
  ui: React.ReactElement,
  { testId = 'TEST_ID', mode = Themes.light, ...options }: { testId: string; mode?: Theme }
): RenderResult => {
  const themedUI = (
    <ThemeProvider mode={mode}>{cloneElement(ui, { 'data-testid': testId })}</ThemeProvider>
  );

  return rtlRender(themedUI, options);
};

// Runs before the start of test suite
beforeAll(() => {
  /**
   * Mock 'window.matchMedia' to simulate media query behavior.
   * As tests run on Node.js runtime, we need to simulate the media query like this.
   */
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false, // Default to false; change this to true to simulate a match
      media: query,
      onchange: null,
      addListener: jest.fn(), // For older APIs, typically not needed
      removeListener: jest.fn(),
      addEventListener: jest.fn(), // Modern method for handling changes
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});
