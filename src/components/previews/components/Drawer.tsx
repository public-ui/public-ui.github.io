import React, { useRef } from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { AlignProperty, BooleanProperty, MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolButton, KolDrawer, KolInputText } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface DrawerPreviewProps extends JSX.KolDrawer {
	_slot?: string;
}

interface DrawerPreviewComponentProps extends PreviewDefaults<DrawerPreviewProps> {}

const DrawerPreview = (props: DrawerPreviewComponentProps) => {
	const drawerRef = useRef<HTMLKolDrawerElement>(null);

	const defaultProps = React.useMemo<DrawerPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.drawer.label' }),
			_align: 'left',
			_hasCloser: true,
			_slot: `<p>${translate({ id: 'preview.component.drawer.content' })}</p>`,
		}),
		[]
	);

	return (
		<Preview<DrawerPreviewProps>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_align: <AlignProperty label="Align" defaultValue="left" />,
				_hasCloser: <BooleanProperty label="Has Closer" />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			componentName="KolDrawer"
			layout={PreviewLayout.CENTERED}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...drawerProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<>
						<KolButton
							_label={translate({ id: 'preview.component.drawer.openButton' })}
							_on={{
								onClick: () => {
									void drawerRef.current?.show(true);
								},
							}}
						/>
						<KolDrawer {...drawerProps} ref={drawerRef}>
							<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
						</KolDrawer>
					</>
				);
			}}
		</Preview>
	);
};

export default DrawerPreview;
