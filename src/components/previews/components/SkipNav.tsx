import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolSkipNav } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import SkipNavLinksProperty from '../properties/SkipNavLinksProperty';
import type { PreviewDefaults } from '../utils';
import { getPreviewDefaults } from '../utils';

const DEFAULT_LINKS = [
	{ _label: 'Navigation', _href: '#nav' },
	{ _label: 'Content', _href: '#main' },
	{ _label: 'Contact', _href: '#contact' },
];

const SkipNavPreview = (props: PreviewDefaults<JSX.KolSkipNav>) => {
	const defaultProps = React.useMemo<JSX.KolSkipNav>(
		() => ({
			_label: translate({ id: 'preview.component.skip-nav.label' }),
			_links: DEFAULT_LINKS,
		}),
		[]
	);

	return (
		<Preview<JSX.KolSkipNav>
			{...getPreviewDefaults(props, defaultProps)}
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_links: (
					<SkipNavLinksProperty label={translate({ id: 'preview.component.skip-nav.links' })} _value={DEFAULT_LINKS} />
				),
			}}
			componentName="KolSkipNav"
			layout={PreviewLayout.CENTERED}
		>
			{(componentProps) => (
				<>
					<div className="flex flex-col">
						<div
							// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
							tabIndex={0}
							className="p-2 text-sm text-gray-500 border border-gray-300 rounded"
						>
							{translate({ id: 'preview.component.skip-nav.hint' })}
						</div>
						<KolSkipNav {...componentProps} />
					</div>
				</>
			)}
		</Preview>
	);
};

export default SkipNavPreview;
