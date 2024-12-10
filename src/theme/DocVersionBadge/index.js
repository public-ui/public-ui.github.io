import React from 'react';
import { KolBadge } from '@public-ui/react';
import { useDocsVersion } from '@docusaurus/plugin-content-docs/client';

export default function DocVersionBadgeWrapper() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const { label } = useDocsVersion();
	return (
		<span className="flex">
			<KolBadge _color={'#ddd'} _label={`Version: ${label}`}></KolBadge>
		</span>
	);
}
