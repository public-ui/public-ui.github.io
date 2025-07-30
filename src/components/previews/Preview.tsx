import React, { ReactNode, useState, ReactElement, cloneElement } from 'react';
import { KolCard, KolButton } from '@public-ui/react';

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
};

const Preview = <TProps,>({
	children,
	initialProps,
	propertyComponents,
	componentName,
	visibleProperties,
}: PreviewProps<TProps>) => {
	const [currentProps, setCurrentProps] = useState<TProps>(initialProps);

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
			.filter(([_, value]) => value !== undefined && value !== null && value !== '')
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
			<div className="border-2 bg-gray-100 border-solid border-gray-200 rounded-md p-4">
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
					<h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Source Code</h4>
					<KolButton
						_label="Copy"
						_variant="secondary"
						_icons="codicon codicon-copy"
						_on={{
							onClick: copyToClipboard,
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
		const filteredEntries = Object.entries(propertyComponents).filter(([key]) => {
			if (!visibleProperties) return true; // Show all if no filter specified
			return visibleProperties.includes(key as keyof TProps);
		});

		return (
			<KolCard _label="Playground">
				{filteredEntries.map(([key, component]) => {
					if (!React.isValidElement(component)) return null;

					// Get the current value for this property
					const currentValue = currentProps[key as keyof TProps];

					return (
						<div key={key} style={{ marginBottom: '10px' }}>
							{cloneElement(component, {
								...(component.props as any),
								_value: currentValue,
								_on: {
									...(component.props as any)?._on,
									onInput: (event: Event, value: unknown) => {
										updateProperty(key as keyof TProps, value);
										// Call original onInput if it exists
										(component.props as any)?._on?.onInput?.(event, value);
									},
								},
							} as any)}
						</div>
					);
				})}
			</KolCard>
		);
	};

	return (
		<div className="grid grid-cols-2 grid-rows-[1fr_auto] gap-4 border-2 border-solid border-gray-200 rounded-md p-2">
			<div className="flex mb-4">
				<span className="m-auto">{children(currentProps)}</span>
			</div>
			<div className="row-span-2">{renderPropertyComponents()}</div>
			{renderSourceCode()}
		</div>
	);
};

export default Preview;
