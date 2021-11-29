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
    curly: ['error', 'all'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        // ignore module import/require statements
        ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(",
      }
    ]
  },
};
