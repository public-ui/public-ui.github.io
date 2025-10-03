import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import type { Attribute } from '../../LiveEditorCompact/types';
import { KolButton, KolDetails } from '@public-ui/react-v19';
import type { KoliBriIconsProp } from '@public-ui/components';

type Props = {
	attribute: Attribute;
	label: ReactNode;
	update: (key: string, value: string | number | boolean) => void;
	value?: string;
};

export function Icon(props: Props) {
	const { attribute, label, update } = props;

	const [left, setLeft] = useState('');
	const [right, setRight] = useState('');
	const [top, setTop] = useState('');
	const [bottom, setBottom] = useState('');

	let leftAvailable = false;
	let rightAvailable = false;
	let topAvailable = false;
	let bottomAvailable = false;
	if (attribute.type.includes('KoliBriAllIcon')) {
		leftAvailable = true;
		rightAvailable = true;
		topAvailable = true;
		bottomAvailable = true;
	} else {
		if (attribute.type.includes('KoliBriVerticalIcon')) {
			topAvailable = true;
			bottomAvailable = true;
		}
		if (attribute.type.includes('KoliBriHorizontalIcon')) {
			leftAvailable = true;
			rightAvailable = true;
		}
	}

	useEffect(() => {
		if (left && !right && !top && !bottom) {
			update(attribute.name, `codicon codicon-${left}`);
		} else {
			const result: KoliBriIconsProp = {};
			if (left) result.left = `codicon codicon-${left}`;
			if (right) result.right = `codicon codicon-${right}`;
			if (top) result.top = `codicon codicon-${top}`;
			if (bottom) result.bottom = `codicon codicon-${bottom}`;

			if (Object.keys(result).length) update(attribute.name, JSON.stringify(result));
		}
	}, [left, right, top, bottom]);

	const iconList = ['home', 'arrow-up', 'arrow-right', 'arrow-down', 'arrow-left'];
	return (
		<div>
			{label}
			{leftAvailable ? (
				<KolDetails _label="Links">
					<div className="flex flex-wrap gap-2 p-2">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icons={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: () => setLeft(icon) }}
							></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
			{rightAvailable ? (
				<KolDetails _label="Rechts">
					<div className="flex flex-wrap gap-2 p-2">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icons={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: () => setRight(icon) }}
							></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
			{topAvailable ? (
				<KolDetails _label="Oben">
					<div className="flex flex-wrap gap-2 p-2">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icons={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: () => setTop(icon) }}
							></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
			{bottomAvailable ? (
				<KolDetails _label="Unten">
					<div className="flex flex-wrap gap-2 p-2">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icons={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: () => setBottom(icon) }}
							></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
		</div>
	);
}
