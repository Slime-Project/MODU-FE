import nextJest from 'next/jest';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './'
});
const testType = process.env.TEST_TYPE || 'unit';

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
  verbose: true,
  testRegex:
    testType === 'integration'
      ? '.*\\/.*\\.integration.test\\.ts$'
      : '^(?!.*\\.integration).*\\.test\\.(ts|tsx)$'
};

export default createJestConfig(config);
