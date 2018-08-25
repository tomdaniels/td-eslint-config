module.exports = {
  extends: ['./index'].map(require.resolve),
  env: {
    node: true,
  },
  rules: {
    'react/prefer-es6-class': 'error',
  },
};
