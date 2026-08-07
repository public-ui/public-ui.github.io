import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { LevelProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolHeading } from '@public-ui/react-v19';
import { PreviewDefaults } from '../utils';

interface HeadingPreviewProps extends PreviewDefaults<JSX.KolHeading> {}

const HeadingPreview = (props: HeadingPreviewProps) => {
	const defaultProps = React.useMemo<JSX.KolHeading>(
		() => ({
			_label: 'Heading',
			_level: 1,
		}),
		[]
	);

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
			hideSourceCodeDetails={props.hideSourceCodeDetails}
			sourceCodeDetailsCollapsed={props.sourceCodeDetailsCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolHeading {...componentProps} />}
		</Preview>
	);
};

export default HeadingPreview;
