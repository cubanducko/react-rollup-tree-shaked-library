const tsConfig = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest/utils");

module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  setupFilesAfterEnv: ["./src/setupTests.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: "<rootDir>/",
  }), // Use ts-jest to calculate paths from tsconfig
};
