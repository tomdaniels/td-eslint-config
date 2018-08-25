module.exports = {
  env: {
    mocha: true,
  },
  globals: {
    sinon: false,
    chai: false,
    enzyme: false,
    assert: false,
    React: false,
    expect: false,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
      },
    ],
  },
};
