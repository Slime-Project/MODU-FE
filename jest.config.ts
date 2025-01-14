import nextJest from 'next/jest';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: { '@/(.*)$': '<rootDir>/src/$1' },
  resetMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.ts', '<rootDir>/src/**/*.test.tsx'],
  verbose: true
};

export default createJestConfig(config);
