import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import { BooleanProperty } from '../properties';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolNav, KolTextarea } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

interface NavPreviewProps {
	initialProps?: JSX.KolNav;
	visibleProperties?: (keyof JSX.KolNav)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const defaultLinks: JSX.KolNav['_links'] = [
	{
		_href: '#/',
		_icons: 'kolicon-house',
		_label: 'Startseite',
		_children: [
			{ _href: '#/1', _icons: 'kolicon-house', _label: '1. Untermenüpunkt' },
			{ _href: '#/2', _icons: 'kolicon-house', _label: '2. Untermenüpunkt' },
		],
	},
	{ _href: '#/seite-2', _icons: 'kolicon-house', _label: '2. Menüpunkt' },
];

const NavPreview: React.FC<NavPreviewProps> = (props) => {
	const defaultProps = React.useMemo<JSX.KolNav>(
		() => ({
			_label: translate({ id: 'preview.component.nav.label' }),
			_links: defaultLinks,
		}),
		[],
	);

	const [linksJson, setLinksJson] = React.useState<string>(JSON.stringify(defaultLinks, null, 2));
	const [linksError, setLinksError] = React.useState<string>('');

	const parseLinks = (json: string): JSX.KolNav['_links'] => {
		try {
			const parsed = JSON.parse(json) as JSX.KolNav['_links'];
			setLinksError('');
			return parsed;
		} catch {
			setLinksError('Invalid JSON');
			return defaultLinks;
		}
	};

	return (
		<Preview<JSX.KolNav>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_links: (
					<KolTextarea
						_label="Links (JSON)"
						_rows={12}
						_msg={linksError ? { _type: 'error', _description: linksError } : undefined}
						_on={{
							onInput: (_: Event, v: unknown) => {
								setLinksJson(v as string);
							},
						}}
						_value={linksJson}
					/>
				),
				_hasCompactButton: <BooleanProperty label="Has Compact Button" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolNav"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.DEFAULT}
		>
			{(componentProps) => (
				<div className="min-h-44">
					<KolNav {...componentProps} _links={parseLinks(linksJson)} />
				</div>
			)}
		</Preview>
	);
};

export default NavPreview;
