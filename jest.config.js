/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['<rootDir>/tests/**/*.test.ts'], // Asegura que Jest busque en la carpeta `tests/`
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};