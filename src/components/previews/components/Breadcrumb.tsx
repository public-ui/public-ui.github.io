import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolBreadcrumb } from '@public-ui/react-v19';
import LinksProperty from '../properties/LinksProperty';
import { translate } from '@docusaurus/Translate';

interface BreadcrumbPreviewComponentProps {
	initialProps?: JSX.KolBreadcrumb;
	visibleProperties?: (keyof JSX.KolBreadcrumb)[];
	codeCollapsable?: boolean;
}

const BreadcrumbPreview = (props: BreadcrumbPreviewComponentProps) => {
	const defaultProps: JSX.KolBreadcrumb = {
		_label: translate({ id: 'preview.component.breadcrumb.label' }),
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
