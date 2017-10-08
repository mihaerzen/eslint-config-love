export = {
  extends: 'eslint-config-standard',
  plugins: [
    'typescript'
  ],
  rules: {
    'no-undef': 'warn',
    'no-useless-constructor': 'warn',
    'typescript/type-annotation-spacing': 'error',
    'typescript/explicit-member-accessibility': 'error',

    'no-array-constructor': 'off', // in favor of TypeScript rule
    'typescript/no-array-constructor': 'error',

    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-use-before-define': ['error', { functions: false, classes: false, variables: false, typedefs: false }],
    'typescript/no-unused-vars': 'error',
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/member-delimiter-style': ['error', { delimiter: 'none' }],
    'typescript/no-empty-interface': 'error'
  }
}