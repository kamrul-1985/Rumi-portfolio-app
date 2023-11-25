module.exports = {
  root: true,
  env: { browser: true, es2020: true, nude: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
// module.exports = {
//   env: {
//     browser: true,
//     es6: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:tailwindcss/recommended',
//   ],
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaVersion: 2022,
//     sourceType: 'module',
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ['react', 'jsx-a11y', 'tailwindcss'],
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   rules: {
//     // Add your custom ESLint rules here
//   },
// };