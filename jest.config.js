module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["/src/tests/*.ts"],
  coverageDirectory: "coverage",
  coverageReporters: ["text-summary", "lcov"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
};
