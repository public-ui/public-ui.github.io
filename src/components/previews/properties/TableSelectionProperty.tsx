import React, { useEffect, useState } from 'react';
import { KolInputNumber, KolInputText, KolButton, KolDrawer, KolCard, KolInputCheckbox } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import { KoliBriTableDataType } from '@public-ui/components';
import { PlantRecord } from '../components/TableStateful';

type TableSelectionDef = {
	label: (row: KoliBriTableDataType) => string;
	keyPropertyName: string;
	multiple: boolean;
	selectedKeys?: string[];
	disabledKeys?: string[];
};

const TableSelectionProperty = (props: {
	label: string;
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
}) => {
	const defaultSelection = React.useMemo<TableSelectionDef>(() => {
		return { label: (row) => `Selection for ${(row as PlantRecord).name}`, keyPropertyName: 'id', multiple: false };
	}, []);

	const [isMultiple, setIsMultiple] = useState(defaultSelection.multiple);
	const [rowLabel, setRowLabel] = useState('Selection for ${(row as PlantRecord).name}');
	const [keyPropertyName, setKeyPropertyName] = useState(defaultSelection.keyPropertyName);
	const [selectedKeys, setSelectedKeys] = useState('');
	const [disabledKeys, setDisabledKeys] = useState('');
	const [selection, setSelection] = useState<TableSelectionDef>(defaultSelection);

	useEffect(() => {
		props._on?.onInput?.(new Event('input'), selection);
	}, [rowLabel, isMultiple, keyPropertyName, selectedKeys, disabledKeys]);

	const handleMultipleChange = () => {
		let newSelection = selection;
		newSelection.multiple = !isMultiple;
		setSelection(newSelection);
		setIsMultiple(!isMultiple);
	};

	const handleLabelChange = (value: string) => {
		// wie stelle ich die function editable da?
		selection.label = (row) => value;
		setRowLabel(value);
	};

	const handleKeyPropertyNameChange = (value: string) => {
		let newSelection = selection;
		newSelection.keyPropertyName = value;
		setSelection(newSelection);
		setKeyPropertyName(value);
	};

	const handleSelectedKeysChange = (value: string) => {
		const keys = value.split(',');
		let newSelection = selection;
		newSelection.selectedKeys = keys;
		setSelection(newSelection);
		setSelectedKeys(value);
	};

	const handleDisabledKeysChange = (value: string) => {
		const keys = value.split(',');
		let newSelection = selection;
		newSelection.disabledKeys = keys;
		setSelection(newSelection);
		setDisabledKeys(value);
	};

	return (
		<fieldset>
			<legend>{props.label}</legend>
			<div className="flex flex-col gap-2">
				<KolInputCheckbox _label="Multiple" _value={isMultiple} _on={{ onInput: handleMultipleChange }} />
				<KolInputText
					_label="Label for Checkbox"
					_value={rowLabel}
					_on={{
						onInput: (e: Event) => {
							const target = e.target as HTMLInputElement;
							handleLabelChange(target.value);
						},
					}}
				/>
				<KolInputText
					_label="keyPropertyName"
					_value={keyPropertyName}
					_on={{
						onInput: (e: Event) => {
							const target = e.target as HTMLInputElement;
							handleKeyPropertyNameChange(target.value);
						},
					}}
				/>
				<KolInputText
					_label="selectedKeys"
					_value={selectedKeys}
					_placeholder="z.B. 1,2"
					_on={{
						onInput: (e: Event) => {
							const target = e.target as HTMLInputElement;
							handleSelectedKeysChange(target.value);
						},
					}}
				/>
				<KolInputText
					_label="disabledKeys"
					_value={disabledKeys}
					_placeholder="z.B. 1,2"
					_on={{
						onInput: (e: Event) => {
							const target = e.target as HTMLInputElement;
							handleDisabledKeysChange(target.value);
						},
					}}
				/>
			</div>
		</fieldset>
	);
};

export default TableSelectionProperty;
