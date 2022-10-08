module.exports = {
  env: {
    browser: true,
    es2021: true,
    "react-native/react-native": true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    "ecmaFeatures": {
       "jsx": true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
  },
};
