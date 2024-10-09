import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';
import { DocsContainer, DocsContainerProps } from '@storybook/blocks';
import { ThemeProvider } from '../src/context/ThemeContext';
import React from 'react';

// Define the Storybook preview configuration
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      disableSaveFromUI: true,
      toolbar: {
        hidden: ['measure', 'backgrounds'], // Hides the measure control
      },
    },
    backgrounds: { disabled: true, grid: false },
    darkMode: {
      // Override the default dark theme
      dark: {
        ...themes.dark,
        base: 'dark',
        brandTitle: 'PlayUI Design System',
        brandImage: './playui_full_logo.svg',
        brandTarget: '_self',

        colorSecondary: '#8765e7ba',

        appBg: '#19171c',
        appContentBg: '#19171c',
        appPreviewBg: '#19171c',
        appBorderRadius: 0,

        barTextColor: '#fff',
        barSelectedColor: '#b89bfd',
        barHoverColor: '#b89bfd',
      },
      // Override the default light theme
      light: {
        ...themes.light,
        base: 'light',
        brandTitle: 'PlayUI Design System',
        brandImage: './playui_full_logo.svg',
        brandTarget: '_self',

        colorSecondary: '#5721f1ba',

        appBg: '#fff',
        appBorderRadius: 0,
        textColor: '#222',

        barTextColor: '#645e74',
        barSelectedColor: '#7c47fc',
        barHoverColor: '#7c47fc',
      },
    },
    docs: {
      container: (props: DocsContainerProps) => {
        const [isDark, setDark] = React.useState(false);
        props.context.channel.on(DARK_MODE_EVENT_NAME, (state) => setDark(state));
        const currentProps = { ...props };
        currentProps.theme = isDark ? themes.dark : themes.light;
        return <DocsContainer {...currentProps} />;
      },
      outline: {
        disable: true,
      },
    },
  },
  globalTypes: {
    toolbar: {
      disabled: true,
    },
  },
};

export default preview;

// Define a decorator to apply theme based on dark mode
export const decorators = [
  (StoryFn: () => React.JSX.Element, { parameters }) => {
    console.log({ parameters });
    const darkMode = useDarkMode();

    return (
      <ThemeProvider mode={darkMode ? 'dark' : 'light'}>
        <StoryFn />
      </ThemeProvider>
    );
  },
];
