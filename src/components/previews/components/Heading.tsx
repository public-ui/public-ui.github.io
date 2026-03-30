import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { LevelProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolHeading } from '@public-ui/react-v19';

interface HeadingPreviewProps {
	initialProps?: JSX.KolHeading;
	visibleProperties?: (keyof JSX.KolHeading)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const HeadingPreview = (props: HeadingPreviewProps) => {
	const defaultProps: JSX.KolHeading = {
		_label: 'Heading',
		_level: 1,
	};

	return (
		<Preview<JSX.KolHeading>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_level: <LevelProperty label="Level" defaultValue={1} />,
				_secondaryHeadline: <KolInputText _label="Secondary Headline" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolHeading"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolHeading {...componentProps} />}
		</Preview>
	);
};

export default HeadingPreview;
