import { KolInputText, KolButton, KolInputCheckbox, KolDrawer, KolCard } from '@public-ui/react-v19';
import React, { useEffect, useState } from 'react';
import { translate } from '@docusaurus/Translate';

export type TreeItemData = {
	_label: string;
	_href?: string;
	_active?: boolean;
	_open?: boolean;
	_children?: TreeItemData[];
};

const createDefaultItem = (label: string): TreeItemData => ({
	_label: label,
	_href: `#/${label.toLowerCase().replace(/\s+/g, '-')}`,
});

const INITIAL_ITEMS: TreeItemData[] = [
	{
		_label: 'Home',
		_href: '#/',
		_active: true,
	},
	{
		_label: 'Page 1',
		_href: '#/page-1',
		_open: true,
		_children: [
			{ _label: 'Page 1.1', _href: '#/page-1/1' },
			{ _label: 'Page 1.2', _href: '#/page-1/2' },
		],
	},
	{
		_label: 'Page 2',
		_href: '#/page-2',
	},
];

type UpdateFn = (updater: (item: TreeItemData) => TreeItemData) => void;
type RemoveFn = () => void;

const TreeItemEditor: React.FC<{
	item: TreeItemData;
	index: number;
	depth: number;
	onUpdate: UpdateFn;
	onRemove: RemoveFn;
}> = ({ item, index, depth, onUpdate, onRemove }) => {
	const label = depth === 0 ? `Item ${index + 1}` : `Child ${index + 1}`;

	const handleFieldChange = (field: keyof TreeItemData, value: unknown) => {
		onUpdate((prev) => ({ ...prev, [field]: value }));
	};

	const addChild = () => {
		onUpdate((prev) => ({
			...prev,
			_open: true,
			_children: [...(prev._children ?? []), createDefaultItem(`Child ${(prev._children?.length ?? 0) + 1}`)],
		}));
	};

	const updateChild = (childIndex: number, updater: (child: TreeItemData) => TreeItemData) => {
		onUpdate((prev) => {
			const children = [...(prev._children ?? [])];
			children[childIndex] = updater(children[childIndex]);
			return { ...prev, _children: children };
		});
	};

	const removeChild = (childIndex: number) => {
		onUpdate((prev) => {
			const children = (prev._children ?? []).filter((_, i) => i !== childIndex);
			return { ...prev, _children: children.length > 0 ? children : undefined };
		});
	};

	return (
		<div style={{ marginLeft: depth > 0 ? '16px' : undefined, borderLeft: depth > 0 ? '2px solid var(--color-gray-300, #ccc)' : undefined, paddingLeft: depth > 0 ? '12px' : undefined }}>
			<KolCard _label={label}>
				<div className="flex flex-col gap-2">
					<KolInputText
						_label="Label"
						_value={item._label}
						_on={{
							onInput: (e: Event) => {
								handleFieldChange('_label', (e.target as HTMLInputElement).value);
							},
						}}
					/>
					<KolInputText
						_label="URL/Href"
						_value={item._href}
						_on={{
							onInput: (e: Event) => {
								handleFieldChange('_href', (e.target as HTMLInputElement).value);
							},
						}}
					/>
					<KolInputCheckbox
						_label="Active"
						_checked={item._active ?? false}
						_variant="switch"
						_on={{
							onInput: (_e: Event, checked: unknown) => {
								handleFieldChange('_active', !!checked);
							},
						}}
					/>
					{item._children && item._children.length > 0 && (
						<KolInputCheckbox
							_label="Open"
							_checked={item._open ?? false}
							_variant="switch"
							_on={{
								onInput: (_e: Event, checked: unknown) => {
									handleFieldChange('_open', !!checked);
								},
							}}
						/>
					)}
					<div className="flex gap-2">
						<KolButton
							_label="+ Child"
							_variant="ghost"
							_on={{ onClick: addChild }}
						/>
						<KolButton
							_label="Remove"
							_variant="danger"
							_on={{ onClick: onRemove }}
						/>
					</div>
				</div>
			</KolCard>

			{item._children?.map((child, childIndex) => (
				<TreeItemEditor
					key={childIndex}
					item={child}
					index={childIndex}
					depth={depth + 1}
					onUpdate={(updater) => updateChild(childIndex, updater)}
					onRemove={() => removeChild(childIndex)}
				/>
			))}
		</div>
	);
};

const TreeItemsProperty = (props: {
	label: string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [items, setItems] = useState<TreeItemData[]>(INITIAL_ITEMS);

	useEffect(() => {
		props._on?.onInput?.(new Event('input'), items);
	}, [items]);

	const addRootItem = () => {
		setItems((prev) => [...prev, createDefaultItem(`Page ${prev.length + 1}`)]);
	};

	const updateItem = (index: number, updater: (item: TreeItemData) => TreeItemData) => {
		setItems((prev) => {
			const next = [...prev];
			next[index] = updater(next[index]);
			return next;
		});
	};

	const removeItem = (index: number) => {
		setItems((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
			<KolButton
				_label={props.label}
				_variant="secondary"
				_on={{ onClick: () => setIsEditing(!isEditing) }}
			/>

			<KolDrawer
				_label={translate({ id: 'preview.component.tree.items.edit' })}
				_open={isEditing}
				_align="right"
				_hasCloser
				_on={{ onClose: () => setIsEditing(false) }}
			>
				<div className="flex flex-col gap-4 py-4">
					{items.map((item, index) => (
						<TreeItemEditor
							key={index}
							item={item}
							index={index}
							depth={0}
							onUpdate={(updater) => updateItem(index, updater)}
							onRemove={() => removeItem(index)}
						/>
					))}

					<KolButton
						_label="+ Root Item"
						_variant="secondary"
						_on={{ onClick: addRootItem }}
					/>

					<KolButton
						_label={translate({ id: 'preview.component.tree.items.closeedit' })}
						_variant="primary"
						_on={{ onClick: () => setIsEditing(false) }}
					/>
				</div>
			</KolDrawer>
		</div>
	);
};

export default TreeItemsProperty;
