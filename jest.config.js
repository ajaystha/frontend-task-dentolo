module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["<rootDir>/src/**/*.{spec,test}.{ts,tsx}"],
  moduleNameMapper: {
    "^.+(css|sass|scss)$": "identity-obj-proxy",
  },
};
