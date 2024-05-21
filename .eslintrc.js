// eslint-disable-next-line no-undef
const fs = require('fs');
// eslint-disable-next-line no-undef
const path = require('path');

// eslint-disable-next-line no-undef
const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es2022: true,
    node: true,
    browser: true,
    jest: true,
    commonjs: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true,
      globalReturn: true,
    },
    ecmaVersion: 'Latest',
    sourceType: 'module',
  },
  plugins: [ 'react-hooks', 'prettier', 'unused-imports', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['off', prettierOptions],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'getter-return': 'off',
    'no-shadow': 'off',
    'no-var': 'off',
    'no-multi-spaces': 'off',
    'space-in-parens': 'off',
    'no-async-promise-executor': 'off',
    'valid-typeof': 'off',
    'no-multiple-empty-lines': 'off',
    'prefer-const': 'off',
    'array-callback-return': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': 'off',
    'no-console': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    'no-useless-concat': 'off',
    'no-loop-func': 'warn',
    'no-empty': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'for-direction': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'sort-vars': 'off',
    'react/jsx-key': 'off',
    'sort-imports': [
      'off',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'unused-imports/no-unused-imports': 'off',
    'unused-imports/no-unused-vars': [
      'off',
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.js?(x)'],
      rules: { 'prettier/prettier': ['off', prettierOptions] },
    },
  ],
};
