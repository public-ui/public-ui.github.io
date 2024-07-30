import { useDocsVersion } from '@docusaurus/theme-common/internal';
import { KolBadge } from '@public-ui/react';
import React from 'react';

export default function DocVersionBadgeWrapper() {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const versionMetadata = useDocsVersion();
	return (
		<span className="flex">
			<KolBadge
				_color={'#ddd'}
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				_label={`Version: ${versionMetadata.label}`}
			></KolBadge>
		</span>
	);
}
