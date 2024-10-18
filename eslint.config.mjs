import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  eslintConfigPrettier,
  {
    files: ['scripts/*.js'],
    ignores: ['eslint.config.mjs', '.prettierrc', '.gitignore'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'prettier/prettier': 'error',
      ...eslintPluginPrettier.configs.recommended.rules,
    },
  },
];
