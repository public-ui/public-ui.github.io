import React, { useRef } from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { KolButton, KolInputText, KolDialog } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';
import type { JSX } from '@public-ui/components';
import { MultiLineTextProperty, VariantProperty } from '../properties';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';
import { variantDialogOptions } from '../properties/VariantProperty';

interface DialogPreviewProps extends JSX.KolDialog {
	_slot?: string;
}

const DialogPreview: React.FC<PreviewDefaults<DialogPreviewProps>> = (props) => {
	const dialogRef = useRef<HTMLKolDialogElement>(null);

	const defaultProps = React.useMemo<DialogPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.dialog.label' }),
			_width: '400px',
			_variant: 'card',
			_slot: `<p>${translate({ id: 'preview.component.dialog.content' })}</p>`,
		}),
		[]
	);

	return (
		<Preview<DialogPreviewProps>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_width: <KolInputText _label="Width" />,
				_variant: <VariantProperty label="Variant" defaultValue="card" variantOptions={variantDialogOptions} />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			componentName="KolDialog"
			layout={PreviewLayout.DEFAULT}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...componentOnlyProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');

				return (
					<>
						<KolButton
							_label={translate({ id: 'preview.component.dialog.openButton' })}
							_on={{
								onClick: () => {
									void dialogRef.current?.show(true);
								},
							}}
						/>
						<KolDialog {...componentOnlyProps} ref={dialogRef}>
							<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
						</KolDialog>
					</>
				);
			}}
		</Preview>
	);
};

export default DialogPreview;
