const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transform: {
    ...tsjPreset.transform,
  },
};
