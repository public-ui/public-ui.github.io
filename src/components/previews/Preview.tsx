import type { ReactNode, ReactElement } from 'react';
import React, { useState, cloneElement } from 'react';
import { KolCard, KolButton, KolHeading, KolDetails } from '@public-ui/react';

type PropertyComponent = ReactElement<{
	_on?: {
		onInput?: (event: Event, value: unknown) => void;
	};
	[key: string]: unknown;
}>;

type PreviewProps<TProps> = {
	children: (props: TProps) => ReactNode;
	initialProps: TProps;
	propertyComponents?: Partial<Record<keyof TProps, PropertyComponent>>;
	componentName?: string;
	visibleProperties?: (keyof TProps)[];
	codeCollapsable?: boolean;
};

const Preview = <TProps,>({
	children,
	initialProps,
	propertyComponents,
	componentName,
	visibleProperties,
	codeCollapsable,
}: PreviewProps<TProps>) => {
	const [currentProps, setCurrentProps] = useState<TProps>(initialProps);
	const [codeCollapsed, setCodeCollapsed] = useState<boolean>(codeCollapsable ?? false);

	const updateProperty = (key: keyof TProps, value: unknown) => {
		setCurrentProps((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const generateSourceCode = () => {
		if (!componentName) return '';

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
			.filter(([, value]) => value !== undefined && value !== null && value !== '')
			.map(([key, value]) => {
				const formattedValue = formatValue(value);
				return formattedValue ? `\n  ${key}=${formattedValue}` : '';
			})
			.filter(Boolean)
			.join('');

		return `<${componentName}${propsString}\n/>`;
	};

	const renderSourceCode = () => {
		if (!componentName) return null;

		const sourceCode = generateSourceCode();

		const copyToClipboard = async () => {
			try {
				await navigator.clipboard.writeText(sourceCode);
				// You could add a toast notification here if available
				console.log('Code copied to clipboard!');
			} catch (err) {
				console.error('Failed to copy code: ', err);
			}
		};

		return (
			<div className="flex flex-col align-stretch border-2 bg-gray-100 border-solid border-gray-200 rounded-md p-4">
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
					<KolHeading _label="Source Code" _level={4} style={{ background: 'transparent' }} />
					<KolButton
						style={{ background: 'transparent' }}
						_label="Copy"
						_variant="secondary"
						_icons="codicon codicon-copy"
						_on={{
							onClick: () => void copyToClipboard(),
						}}
					/>
				</div>
				<pre
					style={{
						background: '#f5f5f5',
						padding: '12px',
						borderRadius: '4px',
						overflow: 'auto',
						fontSize: '14px',
						fontFamily: 'monospace',
						margin: 0,
						border: '1px solid #ddd',
						overflowX: 'auto',
						width: '100%',
					}}
				>
					<code>{sourceCode}</code>
				</pre>
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
			<KolCard _label="Playground">
				<div className="flex flex-col flex-wrap max-h-[500px] gap-x-4">
					{filteredEntries.map(([key, component]) => {
						if (!React.isValidElement(component)) return null;

						// Get the current value for this property
						const currentValue = currentProps[key];

						return (
							<div key={key as string} style={{ marginBottom: '10px' }}>
								{cloneElement(component, {
									...component.props,
									_value: currentValue,
									_on: {
										...component.props?._on,
										onInput: (event: Event, value: unknown) => {
											updateProperty(key, value);
											// Call original onInput if it exists
											component.props?._on?.onInput?.(event, value);
										},
									},
								})}
							</div>
						);
					})}
				</div>
			</KolCard>
		);
	};

	return (
		<div
			className={`grid grid-cols-[${
				visibleProperties?.length !== 0 ? '1fr_1fr' : '1fr'
			}] grid-rows-[1fr_auto] gap-4 border-2 border-solid border-gray-200 rounded-md p-2`}
		>
			<div className="flex mb-4">
				<span className="m-auto min-w-lg">{children(currentProps)}</span>
			</div>
			<div>{visibleProperties?.length !== 0 && renderPropertyComponents()}</div>
			{codeCollapsable ? (
				<KolDetails
					className="col-span-2"
					_label="Source Code"
					_open={codeCollapsed}
					_on={{ onToggle: (_, open) => setCodeCollapsed(open) }}
				>
					{renderSourceCode()}
				</KolDetails>
			) : (
				<div className="col-span-2">{renderSourceCode()}</div>
			)}
		</div>
	);
};

export default Preview;
