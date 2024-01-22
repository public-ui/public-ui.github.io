export const getPackageName = (scope: string, name: string, seperator = '/') => {
	if (scope) {
		return `${scope}${seperator}${name}`;
	} else {
		return `${name}`;
	}
};

export const dangerouslySetInnerHTML = (el: HTMLElement, html: string) => {
	el.innerHTML = html;
};
