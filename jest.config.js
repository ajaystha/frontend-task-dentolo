module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  moduleNameMapper: {
    '^.+(css|sass|scss)$': 'identity-obj-proxy',
    '^@views(.*)$': '<rootDir>/src/views$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@shared(.*)$': '<rootDir>/src/shared$1',
  },
};
