import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolNav } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import NavItemsProperty from '../properties/NavtemsProperty';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults, NavLinksDefault } from '../utils';

const NavPreview: React.FC<PreviewDefaults<JSX.KolNav>> = (props) => {
	const defaultProps = React.useMemo<JSX.KolNav>(
		() => ({
			_label: translate({ id: 'preview.component.nav.label' }),
			_links: NavLinksDefault,
		}),
		[]
	);

	return (
		<Preview<JSX.KolNav>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_links: <NavItemsProperty label="Links" />,
				_hasCompactButton: <BooleanProperty label="Has Compact Button" />,
				_hasIconsWhenExpanded: <BooleanProperty label="Has Icons When Expanded" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_collapsible: <BooleanProperty label="Collapsible" />,
			}}
			componentName="KolNav"
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
