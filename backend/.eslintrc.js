module.exports = {
    env: {
        node: true,
        commonjs: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020
    },
    extends: ['eslint:recommended'],
    rules: {
        'no-undef': 'off'
    }
}
