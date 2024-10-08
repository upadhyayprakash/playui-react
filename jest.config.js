export default {
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for DOM-related tests
  setupFilesAfterEnv: ['./src/setupTests.ts'], // Setup for jest-dom
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Handle TS and JS files
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      // {
      //   tsconfig: './tsconfig.json',
      // },
    ], // Transform TypeScript files
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['coverage', 'dist', 'node_modules', 'storybook-static'],
};
