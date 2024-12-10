import docusaurus from '@docusaurus/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['**/assets/**/*'],
	},
	...compat.extends('eslint:recommended', 'plugin:@docusaurus/recommended', 'plugin:mdx/recommended'),
	{
		plugins: {
			'@docusaurus': docusaurus,
		},
	},
	...compat
		.extends(
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/recommended-requiring-type-checking',
			'plugin:jsx-a11y/recommended',
			'plugin:react/recommended'
		)
		.map((config) => ({
			...config,
			files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
		})),
	{
		files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],

		plugins: {
			'@typescript-eslint': typescriptEslint,
			'jsx-a11y': jsxA11Y,
			react,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},

				project: ['./tsconfig.json'],
				tsconfigRootDir: '/Users/moppitz/Workspace/kolibri/public-ui.github.io',
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			'@typescript-eslint/consistent-type-imports': 'warn',
			'@typescript-eslint/no-duplicate-type-constituents': 'off',
			'@typescript-eslint/no-redundant-type-constituents': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
		},
	},
];
