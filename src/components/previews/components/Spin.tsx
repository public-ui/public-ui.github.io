import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty, CustomCssProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSelect, KolSpin } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

type SpinPreviewProps = JSX.KolSpin & {
    _customCss?: string;
};

const SpinPreview: React.FC = (props: {
    initialProps?: SpinPreviewProps;
    visibleProperties?: (keyof SpinPreviewProps)[];
    codeCollapsable?: boolean;
}) => {
    const defaultProps: SpinPreviewProps = {
        _label: translate({
            id: 'preview.component.spin.label',
            message: 'Ladevorgang',
        }),
        _show: true,
        _variant: 'dot',
        _customCss: '',
    };

    const formatValue = (value: unknown): string => {
        if (typeof value === 'string') {
            return `"${value}"`;
        }
        if (typeof value === 'boolean') {
            return value ? '{true}' : '{false}';
        }
        if (typeof value === 'number') {
            return `{${value}}`;
        }
        if (value === null || value === undefined) {
            return '';
        }
        return `{${JSON.stringify(value)}}`;
    };

    return (
        <Preview<SpinPreviewProps>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _variant: (
                    <KolSelect
                        _label="Variant"
                        _options={[
                            { label: 'Dot', value: 'dot' },
                            { label: 'Cycle', value: 'cycle' },
                            { label: 'None', value: 'none' },
                        ]}
                    />
                ),
                _show: <BooleanProperty label="Show" />,
                _customCss: <CustomCssProperty label="Custom CSS" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolSpin"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            layout={PreviewLayout.CENTERED}
            sourceFormatter={(currentProps) => {
                const customCss = currentProps._customCss?.toString().trim();
                if (!customCss) return undefined;

                const { _customCss, _variant, ...rest } = currentProps;
                const propsWithVariant: Record<string, unknown> = {
                    ...rest,
                    _variant: 'none',
                };

                const propsString = Object.entries(propsWithVariant)
                    .filter(([, value]) => value !== undefined && value !== null && value !== '')
                    .map(([key, value]) => {
                        const formattedValue = formatValue(value);
                        return formattedValue ? `\n  ${key}=${formattedValue}` : '';
                    })
                    .filter(Boolean)
                    .sort()
                    .join('');

                return `<style>\n\t${customCss}\n</style>\n<KolSpin${propsString}\n>\n  <span className="loader" slot="expert"></span>\n</KolSpin>`;
            }}
        >
            {(componentProps) => {
                const { _customCss, _variant, ...spinProps } = componentProps;
                const hasCustomCss = Boolean(_customCss?.toString().trim());
                const activeVariant = hasCustomCss ? 'none' : _variant;

                return (
                    <>
                        {hasCustomCss ? <style>{_customCss}</style> : null}
                        <KolSpin {...spinProps} _variant={activeVariant}>
                            {hasCustomCss ? <span className="loader" slot="expert" /> : null}
                        </KolSpin>
                    </>
                );
            }}
        </Preview>
    );
};

export default SpinPreview;
