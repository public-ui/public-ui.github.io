import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolAccordion, KolSelect } from '@public-ui/react-v19';

const AccordionPreview: React.FC = (props: {
    initialProps?: JSX.KolAccordion;
    visibleProperties?: (keyof JSX.KolAccordion)[];
    codeCollapsable?: boolean;
}) => {
    const defaultProps: JSX.KolAccordion = {
        _label: 'Accordion Element',
    };

    return (
        <Preview<JSX.KolAccordion>
            propertyComponents={{
                _label: <KolInputText _label="Label" />,
                _level: (
                    <KolSelect
                        _label="Heading Level"
                        _options={[
                            { label: 'No Heading (Bold Text)', value: '0' },
                            { label: 'H1', value: '1' },
                            { label: 'H2', value: '2' },
                            { label: 'H3', value: '3' },
                            { label: 'H4', value: '4' },
                            { label: 'H5', value: '5' },
                            { label: 'H6', value: '6' },
                        ]}
                    />
                ),
                _disabled: <BooleanProperty label="Disabled" />,
                _open: <BooleanProperty label="Open" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolAccordion"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            layout={PreviewLayout.FULL_SIZE}
        >
            {(props) => (
                <KolAccordion {...props}>
                    <div>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </div>
                </KolAccordion>
            )}
        </Preview>
    );
};

export default AccordionPreview;
