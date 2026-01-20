import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAvatar, KolInputColor } from '@public-ui/react-v19';

const AvatarPreview: React.FC = (props: {
	initialProps?: JSX.KolAvatar;
	visibleProperties?: (keyof JSX.KolAvatar)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}) => {
	const defaultProps: JSX.KolAvatar = {
		_label: 'Erika Maria Mustermann',
		_color: '#5A5FEE',
	};

	return (
		<Preview<JSX.KolAvatar>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_src: <KolInputText _label="Image Source (URL)" />,
				_color: <KolInputColor _label="Color" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolAvatar"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
		>
			{(props) => <KolAvatar {...props} />}
		</Preview>
	);
};

export default AvatarPreview;
