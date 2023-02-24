module.exports = {
    extends: ['airbnb-base'],
    parserOptions: { ecmaVersion: 12 },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/no-unresolved': 'off',
    },
};
