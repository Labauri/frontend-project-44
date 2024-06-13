import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* eslint-disable no-underscore-dangle, max-len */
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });
/* eslint-enable no-underscore-dangle, max-len */

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'import/extensions': 'off',
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'no-console': 0,
      'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
      'max-len': ['error', { code: 100, ignoreComments: true }],
    },
  },
];
