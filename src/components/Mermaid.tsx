import type { FunctionComponent } from 'react';
import React, { useEffect } from 'react';
import mermaid, { type MermaidConfig } from 'mermaid';

type MermaidProps = {
	code: string;
	config: MermaidConfig;
};

let mermaidTimeout: NodeJS.Timeout;

export const mermaidLoadContent = (config: MermaidConfig) => {
	if (config) {
		mermaid.initialize(Object.assign({ startOnLoad: true }, config));
	}
	clearTimeout(mermaidTimeout);
	mermaidTimeout = setTimeout(() => {
		clearTimeout(mermaidTimeout);
		mermaid.contentLoaded();
	}, 500);
};

export const Mermaid: FunctionComponent<MermaidProps> = ({ code, config }) => {
	useEffect(() => {
		mermaidLoadContent(config);
	}, []);
	return (
		<div>
			<div className="mermaid">{code}</div>
		</div>
	);
};

export default Mermaid;
