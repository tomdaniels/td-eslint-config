module.exports = {
  extends: ['./index'].map(require.resolve),
  env: {
    node: true,
  },
  rules: {
    'id-length': [
      'error',
      {
        min: 3,
        properties: 'never',
        exceptions: ['_', 'fs', 'os'],
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
