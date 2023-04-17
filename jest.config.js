const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  cacheDirectory: '.jest/cache',
  collectCoverage: true,
  coverageDirectory: '.jest/coverage',
  testRegex: '/tests/.+\\.test\\.(ts|tsx)$',
  transformIgnorePatterns: [
    'node_modules/(?!react-native-snap-carousel|@react-native|react-native)'
  ],
  silent: true,
}
