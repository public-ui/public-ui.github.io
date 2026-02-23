import { KolTabs } from '@public-ui/react-v19';
import type { FC } from 'react';
import React from 'react';

type ConfiguratorProps = {
	component: string;
	sample: string;
};

const STYLES = {
	width: '100%',
	height: '500px',
	border: '0',
	overflow: 'hidden',
};

export const Configurator: FC<ConfiguratorProps> = ({ component, sample }) => {
	const sampleUrl = `/sample-react/#/${component}/${sample}?hideMenus`;

	return (
		<KolTabs
			className="w-full"
			_label="Code-Beispiel"
			_tabs={[
				{
					_label: 'Vorschau',
				},
			]}
		>
			<div>
				<iframe
					src={sampleUrl}
					style={STYLES}
					title="kolibri-public-ui-code-samples"
					allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
					sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
				></iframe>
			</div>
		</KolTabs>
	);
};
