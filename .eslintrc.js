module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['standard'],
  rules: {
    'no-undef': 0,
    'no-new': 0,
    'no-useless-constructor': 0,
    'operator-linebreak': ['error', 'after'],
    'no-proto': 0,
    'new-cap': 0,
    'no-useless-call': 0,
    'comma-dangle': 0,
    'no-redeclare': 0,
    'one-var': 0,
    'no-eval': 0
  }
}
