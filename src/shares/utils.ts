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

// used for json.stringify - casts functions to string and replaces the => with an arrow so it doesn't confuse the code preview component
export function funcToStringReplacer(key: string, val: unknown) {
	console.log(key);

	if (typeof val === 'function') {
		return val.toString().replace('=', ' ').replace('>', '⇒ ');
	}
	return val;
}
