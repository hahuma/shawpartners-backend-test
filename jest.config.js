module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**",
    "!src/controllers/index.ts",
    "!src/__tests__/coverage",
    "!src/@types",
    "!src/server.ts",
  ],
  coverageDirectory: "src/__tests__/coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  testMatch: ["**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
}
