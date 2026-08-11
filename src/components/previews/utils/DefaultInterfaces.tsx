interface PreviewDefaults<TProps> {
	initialProps?: TProps;
	visibleProperties?: (keyof TProps)[];
	hideSourceCodeDetails?: boolean;
	sourceCodeDetailsCollapsed?: boolean;
}

export default PreviewDefaults;
