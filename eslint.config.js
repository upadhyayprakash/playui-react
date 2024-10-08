import js from '@eslint/js';
import globals from 'globals';

import eslintConfigPrettier from 'eslint-config-prettier';

import prettier from 'eslint-plugin-prettier';
import storybook from 'eslint-plugin-storybook';
import jest from 'eslint-plugin-jest';
import react from 'eslint-plugin-react';

import tsEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

// To convert old eslint 'config' format to flat config
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Translate ESLintRC-style configs into flat configs.
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: tsEslint.configs['recommended'],
});

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // global file matcher
  },
  {
    // global file ignore
    ignores: [
      'coverage',
      'dist',
      'node_modules',
      'storybook-static',
      '**/*.config.js',
      '!**/eslint.config.js',
      '!.storybook',
    ],
  },
  js.configs.recommended,
  jest.configs['flat/recommended'],

  // 'eslintrc' to 'Flat config' converter for parsing TypeScript files. Includes rules for TypeScript.
  ...compat.config({
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:jsx-a11y/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jsx-a11y'],
    rules: {},
  }),

  {
    plugins: {
      jest: jest,
      prettier: prettier,
      react: react,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },

  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
      'key-spacing': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      // 'react/react-in-jsx-scope': 'error',
    },
  },

  {
    files: ['**/*.stories.@(ts|tsx)'],
    plugins: {
      storybook: storybook,
    },
    rules: {
      'storybook/default-exports': 'error',
    },
  },
  eslintConfigPrettier, // Turns off all rules that are unnecessary or might conflict with Prettier.
];

export default config;
