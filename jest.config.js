module.exports = {
  globals: {
    __PATH_PREFIX__: '',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/loadershim.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    'node_modules',
    'build',
    'public',
    '\\.cache',
    '<rootDir>.*/public',
    '<rootDir>.*/cypress'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
};
