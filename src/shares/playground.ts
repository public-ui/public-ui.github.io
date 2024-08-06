export type Playground = {
	name: string;
	image: string;
	url: string;
};

export const PLAYGROUNDS_V1: Playground[] = [
	{
		name: '⚡ StackBlitz',
		image: 'stackblitz.png',
		url: 'https://stackblitz.com/edit/vitejs-vite-6bmmiv',
	},
	{
		name: '📦 CodeSandbox',
		image: 'codesandbox.png',
		url: 'https://codesandbox.io/s/minimal-kolibri-sample-oj7pee',
	},
];

export const PLAYGROUNDS_V2: Playground[] = [
	{
		...PLAYGROUNDS_V1[0],
		url: 'https://stackblitz.com/edit/vitejs-vite-kkfhk5',
	},
	PLAYGROUNDS_V1[1],
];
