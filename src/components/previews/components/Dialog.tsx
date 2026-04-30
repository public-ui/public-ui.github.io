import React, { useRef } from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { KolButton, KolInputText, KolDialog } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';
import type { JSX } from '@public-ui/components';
import { DialogVariantProperty, MultiLineTextProperty } from '../properties';

type DialogPreviewProps = JSX.KolDialog & { _slot?: string };

interface DialogPreviewComponentProps {
	initialProps?: DialogPreviewProps;
	visibleProperties?: (keyof JSX.KolDialog | '_slot')[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const DialogPreview: React.FC<DialogPreviewComponentProps> = (props) => {
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
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_width: <KolInputText _label="Width" />,
				_variant: <DialogVariantProperty label="Variant" defaultValue="card" />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolDialog"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
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
									void dialogRef.current?.openModal();
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
