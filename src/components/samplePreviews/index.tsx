import { COMPONENT_VERSIONS } from './version';

export type ComponentName = (typeof COMPONENT_VERSIONS)['current'][number]['name'];

export const getComponentByName = (name: ComponentName) => {
	const component = COMPONENT_VERSIONS.current.find((el) => el.name === name);
	if (!component) {
		throw new Error(`Component with name ${name} not found`);
	}
	return component;
};

export type Component = (typeof COMPONENT_VERSIONS)['current'][number];
