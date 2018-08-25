module.exports = {
  extends: ['./index'].map(require.resolve),
  env: {
    browser: true,
  },
  rules: {
    // see https://github.com/airbnb/javascript/pull/1802
    // TODO: remove in the next release of eslint-config-airbnb
    'jsx-a11y/label-has-for': [
      'error',
      {
        components: [],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
};
