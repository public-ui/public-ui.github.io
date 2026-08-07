import { PreviewDefaults } from '../utils';

function getPreviewDefaults<TProps>(props: PreviewDefaults<TProps>, defaultProps: TProps) {
	const initialProps = { ...defaultProps, ...props.initialProps };
	const visibleProperties = props.visibleProperties ?? [];
	const hideSourceCodeDetails = props.hideSourceCodeDetails ?? false;
	const sourceCodeDetailsCollapsed = props.sourceCodeDetailsCollapsed ?? false;
	return {
		initialProps: initialProps,
		visibleProperties: visibleProperties,
		hideSourceCodeDetails: hideSourceCodeDetails,
		sourceCodeDetailsCollapsed: sourceCodeDetailsCollapsed,
	};
}

export default getPreviewDefaults;
