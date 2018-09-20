module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    'browser': true,
    'node': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-negated-condition': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-direct-mutation-state': 'error',
    'id-length': [
      'error',
      {
        min: 3,
        properties: 'never',
        exceptions: ['_'],
      },
    ],
    'padded-blocks': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    curly: ['error', 'all'],
  },
};
