import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolTree, KolTreeItem } from '@public-ui/react-v19';
import TreeItemsProperty from '../properties/TreeItemsProperty';
import type { TreeItemData } from '../properties/TreeItemsProperty';
import { translate } from '@docusaurus/Translate';

type TreePreviewProps = JSX.KolTree & { _items?: TreeItemData[] };

interface TreePreviewComponentProps {
	initialProps?: TreePreviewProps;
	visibleProperties?: (keyof JSX.KolTree | '_items')[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const TreePreview: React.FC<TreePreviewComponentProps> = (props) => {
	const defaultProps = React.useMemo<TreePreviewProps>(
		() => ({
			_label: translate({ id: 'preview.component.tree.label' }),
			_items: [],
		}),
		[],
	);

	const formatSource = (currentProps: TreePreviewProps): string => {
		const { _items, ...treeProps } = currentProps;
		const items = _items ?? [];

		const propsString = Object.entries(treeProps as Record<string, unknown>)
			.filter(([, value]) => value !== undefined && value !== null && value !== '')
			.map(([key, value]) => {
				if (typeof value === 'string') return `\n  ${key}="${value}"`;
				if (typeof value === 'boolean') return value ? `\n  ${key}` : '';
				if (typeof value === 'number') return `\n  ${key}={${value}}`;
				return `\n  ${key}={${JSON.stringify(value)}}`;
			})
			.sort()
			.join('');

		const formatItem = (item: TreeItemData, indent: number): string => {
			const pad = '  '.repeat(indent);
			const { _children, ...rest } = item;
			const itemProps = Object.entries(rest as Record<string, unknown>)
				.filter(([, value]) => value !== undefined && value !== null && value !== '')
				.map(([key, value]) => {
					if (typeof value === 'string') return ` ${key}="${value}"`;
					if (typeof value === 'boolean') return value ? ` ${key}` : '';
					if (typeof value === 'number') return ` ${key}={${value}}`;
					return ` ${key}={${JSON.stringify(value)}}`;
				})
				.join('');

			if (_children && _children.length > 0) {
				const childrenString = _children.map((child) => formatItem(child, indent + 1)).join('\n');
				return `${pad}<KolTreeItem${itemProps}>\n${childrenString}\n${pad}</KolTreeItem>`;
			}
			return `${pad}<KolTreeItem${itemProps} />`;
		};

		const itemsString = items.map((item) => formatItem(item, 1)).join('\n');

		return `<KolTree${propsString}\n>\n${itemsString}\n</KolTree>`;
	};

	return (
		<Preview<TreePreviewProps>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_items: <TreeItemsProperty label="Items" />,
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolTree"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.DEFAULT}
			sourceFormatter={formatSource}
		>
			{(componentProps) => {
				const { _items, ...treeProps } = componentProps;
				const items = _items ?? [];

				const renderItem = (item: TreeItemData, index: number): React.ReactNode => {
					const { _children, _href = '', ...itemProps } = item;
					if (_children && _children.length > 0) {
						return (
							<KolTreeItem key={index} _href={_href} {...itemProps}>
								{_children.map((child, childIndex) => renderItem(child, childIndex))}
							</KolTreeItem>
						);
					}
					return <KolTreeItem key={index} _href={_href} {...itemProps} />;
				};

				return (
					<div className="min-h-44">
						<KolTree {...treeProps}>
							{items.map((item, index) => renderItem(item, index))}
						</KolTree>
					</div>
				);
			}}
		</Preview>
	);
};

export default TreePreview;
