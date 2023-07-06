import React, { useEffect, useState } from 'react';
import { Attribute } from '../../LiveEditorCompact/types';
import { KolButton, KolDetails } from '@public-ui/react';
import { KoliBriAllIcon } from '@public-ui/components/dist/types/types/icon';

type Props = {
	attribute: Attribute;
	label: JSX.Element | string;
	update: (key: string, value: string | number | boolean) => void;
	value?: string;
};

export function Icon(props: Props) {
	const { attribute, label, update, value } = props;

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
			const result: KoliBriAllIcon = {};
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
				<KolDetails _summary="Links">
					<div className="flex flex-wrap">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icon={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: (e: Event) => setLeft(icon) }}
							></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
			{rightAvailable ? (
				<KolDetails _summary="Rechts">
					<div className="flex flex-wrap">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icon={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: (e: Event) => setRight(icon) }}
							></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
			{topAvailable ? (
				<KolDetails _summary="Oben">
					<div className="flex flex-wrap">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icon={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: (e: Event) => setTop(icon) }}
							></KolButton>
						))}
					</div>
				</KolDetails>
			) : (
				''
			)}
			{bottomAvailable ? (
				<KolDetails _summary="Unten">
					<div className="flex flex-wrap">
						{iconList.map((icon) => (
							<KolButton
								key={icon}
								_icon={`codicon codicon-${icon}`}
								_hideLabel
								_label=""
								_on={{ onClick: (e: Event) => setBottom(icon) }}
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
