// jest.config.js
// Sync object
module.exports = {
  preset: "jest-expo",

  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/screen/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/**/stories.{js,jsx,ts,tsx}",
    "!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
  ],
  moduleFileExtensions: ["js", "ts", "tsx"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)",
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  setupFiles: ["<rootDir>/.jest/setup-tests.js"],
};
