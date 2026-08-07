import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolNav } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import NavItemsProperty from '../properties/NavtemsProperty';
import { NavLinksDefault, PreviewDefaults } from '../utils';

interface NavPreviewProps extends PreviewDefaults<JSX.KolNav> {}

const NavPreview: React.FC<NavPreviewProps> = (props) => {
	const defaultProps = React.useMemo<JSX.KolNav>(
		() => ({
			_label: translate({ id: 'preview.component.nav.label' }),
			_links: NavLinksDefault,
		}),
		[]
	);

	return (
		<Preview<JSX.KolNav>
			propertyComponents={{
				_label: <KolInputText _label="_label" />,
				_links: <NavItemsProperty label="_links" />,
				_hasCompactButton: <BooleanProperty label="_hasCompactButton" />,
				_hasIconsWhenExpanded: <BooleanProperty label="_hasIconsWhenExpanded" />,
				_hideLabel: <BooleanProperty label="_hideLabel" />,
				_collapsible: <BooleanProperty label="_collapsible" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolNav"
			visibleProperties={props.visibleProperties}
			hideSourceCodeDetails={props.hideSourceCodeDetails}
			sourceCodeDetailsCollapsed={props.sourceCodeDetailsCollapsed}
			layout={PreviewLayout.DEFAULT}
		>
			{(componentProps) => (
				<div className="min-h-44">
					<KolNav {...componentProps} />
				</div>
			)}
		</Preview>
	);
};

export default NavPreview;
