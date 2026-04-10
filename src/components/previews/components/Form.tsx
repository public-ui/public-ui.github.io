import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolButton, KolInputEmail, KolInputText, KolForm } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface FormPreviewComponentProps {
    initialProps?: JSX.KolForm;
    visibleProperties?: (keyof JSX.KolForm)[];
    codeCollapsable?: boolean;
    codeCollapsed?: boolean;
}

const FormPreview: React.FC<FormPreviewComponentProps> = (props) => {
    const defaultProps = React.useMemo<JSX.KolForm>(
        () => ({
            _requiredText: translate({ id: 'preview.component.form.label' }),
        }),
        [],
    );

    return (
        <Preview<JSX.KolForm>
            propertyComponents={{
                _requiredText: <KolInputText _label="Required text" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolForm"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            codeCollapsed={props.codeCollapsed}
            layout={PreviewLayout.FULL_SIZE}
        >
            {(componentProps) => (
                <KolForm {...componentProps} className="block w-full" style={{ width: '100%' }}>
                    <div className="grid w-full gap-2">
                        <KolInputText _label={translate({ id: 'preview.component.form.first-name' })} _required _name="first-name" />
                        <KolInputText _label={translate({ id: 'preview.component.form.last-name' })} _required _name="last-name" />
                        <KolInputEmail _label={translate({ id: 'preview.component.form.email' })} _required _name="email" />
                        <div className="flex gap-2 pt-2">
                            <KolButton _label={translate({ id: 'preview.component.form.submit' })} _type="submit" />
                            <KolButton _label={translate({ id: 'preview.component.form.reset' })} _type="reset" _variant="secondary" />
                        </div>
                    </div>
                </KolForm>
            )}
        </Preview>
    );
};

export default FormPreview;
