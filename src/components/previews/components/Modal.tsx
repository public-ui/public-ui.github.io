import React, { useRef } from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { MultiLineTextProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolButton, KolInputText, KolModal } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { sanitizeHtml } from '../../../shares/sanitize';

type ModalPreviewProps = JSX.KolModal & { _slot?: string };

interface ModalPreviewComponentProps {
	initialProps?: ModalPreviewProps;
	visibleProperties?: (keyof JSX.KolModal | '_slot')[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const ModalPreview = (props: ModalPreviewComponentProps) => {
	const modalRef = useRef<HTMLKolModalElement>(null);

	const defaultProps = React.useMemo<ModalPreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.modal.label' }),
			_slot: `<p>${translate({ id: 'preview.component.modal.content' })}</p>`,
		}),
		[],
	);

	return (
		<Preview<ModalPreviewProps>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_width: <KolInputText _label="Width" />,
				_slot: <MultiLineTextProperty label="Content" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolModal"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.CENTERED}
			slotKey="_slot"
		>
			{(componentProps) => {
				const { _slot, ...modalProps } = componentProps;
				const sanitizedHtml = sanitizeHtml(_slot ?? '');
				return (
					<>
						<KolButton
							_label={translate({ id: 'preview.component.modal.openButton' })}
							_on={{
								onClick: () => {
									void modalRef.current?.openModal();
								},
							}}
						/>
						<KolModal {...modalProps} ref={modalRef}>
							<div style={{ padding: '1.5rem' }}>
								<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
							</div>
							<div
								style={{
									borderTop: '1px solid var(--color-subtle, #e0e0e0)',
									display: 'flex',
									justifyContent: 'flex-end',
									padding: '1rem 1.5rem',
								}}
							>
								<KolButton
									_label={translate({ id: 'preview.component.modal.closeButton' })}
									_on={{
										onClick: () => {
											void modalRef.current?.closeModal();
										},
									}}
								/>
							</div>
						</KolModal>
					</>
				);
			}}
		</Preview>
	);
};

export default ModalPreview;
