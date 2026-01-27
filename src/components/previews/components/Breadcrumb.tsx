import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolBreadcrumb } from '@public-ui/react-v19';
import LinksProperty from '../properties/LinksProperty';

const BreadcrumbPreview: React.FC = (props: {
    initialProps?: JSX.KolBreadcrumb;
    visibleProperties?: (keyof JSX.KolBreadcrumb)[];
    codeCollapsable?: boolean;
}) => {
    const defaultProps: JSX.KolBreadcrumb = {
        _label: 'Breadcrumb',
        _links: [],
    };

    return (
        <Preview<JSX.KolBreadcrumb>
            propertyComponents={{
                _links: <LinksProperty label="Links" />,
            }}
            initialProps={{ ...defaultProps, ...props.initialProps }}
            componentName="KolBreadcrumb"
            visibleProperties={props.visibleProperties}
            codeCollapsable={props.codeCollapsable}
            layout={PreviewLayout.CENTERED}
        >
            {(props) => <KolBreadcrumb {...props} />}
        </Preview>
    );
};

export default BreadcrumbPreview;
