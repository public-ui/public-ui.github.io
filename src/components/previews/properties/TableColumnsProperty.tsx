import React, { useEffect, useState } from 'react';
import { KolInputNumber, KolInputText, KolButton, KolDrawer, KolCard } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

type TableColumnDef = {
	key: string;
	label: string;
};

const TableColumnsProperty = (props: {
	label: string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const defaultColumns = React.useMemo<TableColumnDef[]>(
		() => [
			{ key: 'name', label: translate({ id: 'preview.component.table-stateful.column.name' }) },
			{ key: 'family', label: translate({ id: 'preview.component.table-stateful.column.family' }) },
			{ key: 'type', label: translate({ id: 'preview.component.table-stateful.column.type' }) },
			{ key: 'origin', label: translate({ id: 'preview.component.table-stateful.column.origin' }) },
		],
		[],
	);

	const [isEditing, setIsEditing] = useState(false);
	const [columnCount, setColumnCount] = useState(defaultColumns.length);
	const [columns, setColumns] = useState<TableColumnDef[]>(() => [...defaultColumns]);

	const currentColumns = columns.slice(0, columnCount);

	useEffect(() => {
		props._on?.onInput?.(new Event('input'), { horizontal: [currentColumns] });
	}, [columns, columnCount]);

	const handleCountChange = (_event: Event, value: unknown) => {
		const count = Math.min(Math.max(Number(value) || 1, 1), columns.length);
		setColumnCount(count);
	};

	const handleLabelChange = (index: number, value: string) => {
		const newColumns = [...columns];
		newColumns[index] = { ...newColumns[index], label: value };
		setColumns(newColumns);
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
			<KolInputNumber
				_label={props.label}
				_min={1}
				_max={columns.length}
				_value={columnCount}
				_on={{ onInput: handleCountChange }}
			/>

			{currentColumns.length > 0 && (
				<KolButton
					_label={translate({ id: 'preview.component.table-stateful.columns.edit' })}
					_variant="secondary"
					_on={{ onClick: () => setIsEditing(!isEditing) }}
				/>
			)}

			<KolDrawer
				_label={translate({ id: 'preview.component.table-stateful.columns.edit' })}
				_open={isEditing}
				_align="right"
				_hasCloser
				_on={{ onClose: () => setIsEditing(false) }}
			>
				<div className="flex flex-col gap-4 py-4">
					{currentColumns.map((col, index) => (
						<KolCard
							key={col.key}
							_label={`${translate({ id: 'preview.component.table-stateful.column.label' })} ${index + 1}`}
						>
							<div className="flex flex-col gap-2">
								<KolInputText
									_label="Label"
									_value={col.label}
									_on={{
										onInput: (e: Event) => {
											const target = e.target as HTMLInputElement;
											handleLabelChange(index, target.value);
										},
									}}
								/>
							</div>
						</KolCard>
					))}

					<KolButton
						_label={translate({ id: 'preview.component.table-stateful.columns.closeedit' })}
						_variant="primary"
						_on={{ onClick: () => setIsEditing(false) }}
					/>
				</div>
			</KolDrawer>
		</div>
	);
};

export default TableColumnsProperty;
