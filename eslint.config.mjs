// eslint.config.mjs
import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: ['node_modules', 'dist'],
		rules: {
			'no-unused-vars': 'error',
			'no-unused-expressions': 'error',
			'prefer-const': 'error',
			'no-console': 'warn',
			'no-undef': 'error',
		},
	},
	eslintPluginPrettierRecommended,
];
