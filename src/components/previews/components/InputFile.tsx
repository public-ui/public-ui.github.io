import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, IconsProperty, MsgProperty, SmartButtonProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputFile, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface InputFilePreviewComponentProps extends PreviewDefaults<JSX.KolInputFile> {}

const InputFilePreview = (props: InputFilePreviewComponentProps) => {
	const defaultProps = React.useMemo<JSX.KolInputFile>(
		() => ({
			_label: translate({ id: 'preview.component.input-file.label' }),
		}),
		[]
	);

	return (
		<Preview<JSX.KolInputFile>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_accept: (
					<KolSelect
						_label="Accept"
						_options={[
							{ label: 'All files', value: '' },
							{ label: 'Images (image/*)', value: 'image/*' },
							{ label: 'PDF (.pdf)', value: '.pdf' },
							{ label: 'Text (.txt)', value: '.txt' },
							{ label: 'Markdown (.md)', value: '.md' },
							{ label: 'Word (.doc, .docx)', value: '.doc,.docx' },
							{ label: 'Excel (.xls, .xlsx)', value: '.xls,.xlsx' },
						]}
					/>
				),
				_icons: <IconsProperty label="Icons" directions={['right', 'left']} />,
				_accessKey: <KolInputText _label="Access Key" />,
				_name: <KolInputText _label="Name" />,
				_hint: <KolInputText _label="Hint" />,
				_msg: <MsgProperty label="Message" />,
				_multiple: <BooleanProperty label="Multiple" />,
				_disabled: <BooleanProperty label="Disabled" />,
				_required: <BooleanProperty label="Required" />,
				_hideLabel: <BooleanProperty label="Hide Label" />,
				_smartButton: (
					<SmartButtonProperty label="Smart Button" buttonLabel="Smart button label" buttonIcon="kolicon-kolibri" />
				),
			}}
			componentName="KolInputFile"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolInputFile _touched {...componentProps} />}
		</Preview>
	);
};

export default InputFilePreview;
