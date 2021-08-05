module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react'],
  globals: {
    test: 'readonly',
    expect: 'readonly',
    jest: 'readonly',
  },
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
