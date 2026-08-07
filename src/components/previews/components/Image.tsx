import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolImage, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { getPreviewDefaults, PreviewDefaults } from '../utils';

interface ImagePreviewProps extends PreviewDefaults<JSX.KolImage> {}

const ImagePreview = (props: ImagePreviewProps) => {
	const defaultProps = React.useMemo<JSX.KolImage>(
		() => ({
			_src: '/assets/sample-image.png',
			_alt: translate({ id: 'preview.component.image.label' }),
			_loading: 'lazy',
		}),
		[]
	);

	return (
		<Preview<JSX.KolImage>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_src: <KolInputText _label="Source (URL)" />,
				_alt: <KolInputText _label="Alternative Text" />,
				_loading: (
					<KolSelect
						_label="Loading"
						_options={[
							{ label: 'Lazy', value: 'lazy' },
							{ label: 'Eager', value: 'eager' },
						]}
					/>
				),
				_sizes: <KolInputText _label="Sizes" />,
				_srcset: <KolInputText _label="Srcset" />,
			}}
			componentName="KolImage"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => <KolImage {...componentProps} />}
		</Preview>
	);
};

export default ImagePreview;
