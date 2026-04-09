import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolImage, KolInputText, KolSelect } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface ImagePreviewProps {
    initialProps?: JSX.KolImage;
    visibleProperties?: (keyof JSX.KolImage)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}

const ImagePreview = (props: ImagePreviewProps) => {
    const defaultProps = React.useMemo<JSX.KolImage>(
        () => ({
            _src: '/assets/sample-image.png',
            _alt: translate({ id: 'preview.component.image.label' }),
            _loading: 'lazy',
        }),
        [],
    );

    return (
        <Preview<JSX.KolImage>
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
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolImage"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.CENTERED}
        >
            {(componentProps) => <KolImage {...componentProps} />}
        </Preview>
    );
};

export default ImagePreview;