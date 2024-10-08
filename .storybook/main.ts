import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
  ],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
    builder: '@storybook/builder-vite',
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen',
  },
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      // Refer during local development
      return {
        'design-system': {
          title: 'OliaSoft Design System',
          url: 'https://oliasoft-open-source.gitlab.io/react-ui-library/storybook',
        },
      };
    }
    return {
      'design-system': { disable: true },
    };
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      if (config.build) {
        config.build.sourcemap = false;
        config.build.chunkSizeWarningLimit = 1000;
      }
      config.optimizeDeps = {
        include: ['storybook-dark-mode'],
      };
    }
    return config;
  },
};
export default config;
