module.exports = {
	extends: ['eslint:recommended', 'plugin:@docusaurus/recommended', 'plugin:mdx/recommended'],
	ignorePatterns: ['**/assets/**'],
	overrides: [
		{
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:jsx-a11y/recommended',
				'plugin:react/recommended',
			],
			files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: '2015',
				project: ['./tsconfig.json'],
				sourceType: 'module',
				tsconfigRootDir: __dirname,
			},
			plugins: ['@typescript-eslint', 'jsx-a11y', 'react'],
			rules: {
				/**
				 * This setting is necessary because required and optional properties
				 * and states build on each other in API design. If duplicate or redundant
				 * types were not used, changes to base types would not be propagated
				 * and would lead to errors.
				 */
				'@typescript-eslint/no-duplicate-type-constituents': 'off',
				'@typescript-eslint/no-redundant-type-constituents': 'off',

				/**
				 * The HTML templates in TSX are recognized as any.
				 */
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
			},
			settings: {
				react: {
					version: 'detect',
				},
			},
		},
	],
	plugins: ['@docusaurus'],
	root: true,
};
