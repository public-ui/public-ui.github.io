import type { ReactNode, ReactElement } from 'react';
import React, { useState, cloneElement } from 'react';
import { KolCard, KolButton, KolDetails } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';

type PropertyComponent = ReactElement<{
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
	[key: string]: unknown;
}>;

export enum PreviewLayout {
	DEFAULT,
	CENTERED,
	FULL_SIZE,
}

type PreviewProps<TProps> = {
	children: (props: TProps) => ReactNode;
	initialProps: TProps;
	propertyComponents?: Partial<Record<keyof TProps, PropertyComponent>>;
	componentName?: string;
	visibleProperties?: (keyof TProps)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
	layout?: PreviewLayout;
	slotKey?: keyof TProps;
};

const Preview = <TProps,>({
	children,
	initialProps,
	propertyComponents,
	componentName,
	visibleProperties,
	codeCollapsable,
	codeCollapsed: codeInitialCollapsed,
	layout = PreviewLayout.DEFAULT,
	slotKey,
}: PreviewProps<TProps>) => {
	const [currentProps, setCurrentProps] = useState<TProps>(initialProps);
	const [codeCollapsed, setCodeCollapsed] = useState<boolean>(codeInitialCollapsed ?? false);
	const [copySuccess, setCopySuccess] = useState<boolean>(false);

	const updateProperty = (key: keyof TProps, value: unknown) => {
		setCurrentProps((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const generateSourceCode = () => {
		if (!componentName) return '';

		const slotValue = slotKey ? (currentProps as Record<string, unknown>)[slotKey as string] : undefined;

		const formatValue = (value: unknown): string => {
			if (typeof value === 'string') {
				return `"${value}"`;
			}
			if (typeof value === 'boolean') {
				return value ? '{true}' : '{false}';
			}
			if (typeof value === 'number') {
				return `{${value}}`;
			}
			if (value === null || value === undefined) {
				return '';
			}
			return `{${JSON.stringify(value)}}`;
		};

		const propsString = Object.entries(currentProps as Record<string, unknown>)
			.filter(([key]) => (slotKey ? key !== slotKey : true))
			.filter(([, value]) => value !== undefined && value !== null && value !== '')
			.map(([key, value]) => {
				const formattedValue = formatValue(value);
				return formattedValue ? `\n  ${key}=${formattedValue}` : '';
			})
			.filter(Boolean)
			.sort()
			.join('');

		if (slotKey !== undefined) {
			let slotContent = '';
			if (typeof slotValue === 'string') {
				slotContent = slotValue;
			} else if (typeof slotValue === 'number' || typeof slotValue === 'boolean') {
				slotContent = String(slotValue);
			} else if (slotValue !== undefined && slotValue !== null) {
				slotContent = JSON.stringify(slotValue);
			}
			const openTag = propsString ? `<${componentName}${propsString}\n>` : `<${componentName}>`;
			return `${openTag}${slotContent}</${componentName}>`;
		}

		return `<${componentName}${propsString}\n/>`;
	};

	const renderSourceCode = () => {
		if (!componentName) return null;

		const sourceCode = generateSourceCode();

		const copyToClipboard = async () => {
			try {
				await navigator.clipboard.writeText(sourceCode);
				setCopySuccess(true);
				setTimeout(() => setCopySuccess(false), 2000);
			} catch (err) {
				console.error('Failed to copy code: ', err);
			}
		};

		return (
			<div className="grid grid-cols-[1fr_max-content] gap-1 p-2 my-2 bg-gray-100 border-solid border-gray-300 rounded-md">
				<pre className="overflow-auto m-0 p-1">
					<code>{sourceCode}</code>
				</pre>
				<KolButton
					style={{ backgroundColor: 'transparent' }}
					_label={translate({ id: 'preview.sourceCode.copyButton' })}
					_variant="secondary"
					_icons={copySuccess ? 'fa-solid fa-check' : 'fa-solid fa-copy'}
					_on={{
						onClick: () => void copyToClipboard(),
					}}
				/>
			</div>
		);
	};

	const renderPropertyComponents = () => {
		if (!propertyComponents) return null;

		// Filter entries based on visibleProperties if provided
		const filteredEntries = Object.entries(propertyComponents)
			.map(([key, cmp]) => [key as keyof TProps, cmp as PropertyComponent] as const)
			.filter(([key]) => !visibleProperties || visibleProperties.includes(key));

		return (
			<KolCard _label={translate({ id: 'preview.props.heading' })} className="p-4">
				<div className="flex flex-col flex-wrap gap-x-4 gap-y-2">
					{filteredEntries.map(([key, component]) => {
						if (!React.isValidElement(component)) return null;

						// Get the current value for this property
						const currentValue = currentProps[key];

						return cloneElement(component, {
							...component.props,
							key: key as string,
							_value: currentValue,
							_on: {
								...component.props?._on,
								onInput: (event: Event, value: unknown) => {
									updateProperty(key, value);
									// Call original onInput if it exists
									component.props?._on?.onInput?.(event, value);
								},
							},
						});
					})}
				</div>
			</KolCard>
		);
	};

	const hasProp = visibleProperties?.length !== 0;
	return (
		<div className={`preview ${hasProp ? 'props' : ''} gap-4 border-2 border-solid border-gray-200 rounded-md p-2`}>
			<div
				className={`flex ${layout === PreviewLayout.CENTERED ? '' : 'items-center'} ${
					layout === PreviewLayout.FULL_SIZE ? 'h-96' : ''
				}`}
			>
				<span
					className={`${
						layout === PreviewLayout.FULL_SIZE
							? 'w-full h-full'
							: `px-4 py-2 ${layout === PreviewLayout.CENTERED ? 'm-auto' : 'grow'}`
					}`}
				>
					{children(currentProps)}
				</span>
			</div>
			{hasProp && renderPropertyComponents()}
			{codeCollapsable ? (
				<KolDetails
					className={`${hasProp ? 'col-span-2' : ''}`}
					_label={translate({ id: 'preview.sourceCode.heading' })}
					_open={codeCollapsed}
					_on={{ onToggle: (_, open) => setCodeCollapsed(open) }}
				>
					{renderSourceCode()}
				</KolDetails>
			) : (
				<div className={`${hasProp ? 'col-span-2' : ''}`}>{renderSourceCode()}</div>
			)}
		</div>
	);
};

export default Preview;
