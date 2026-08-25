import type { PreviewDefaults } from '../utils';

function getPreviewDefaults<TProps>(props: PreviewDefaults<TProps>, defaultProps: TProps) {
	return {
		context: props.context,
		initialProps: { ...defaultProps, ...props.initialProps },
		// Bewusst kein Fallback auf `[]`: `undefined` bedeutet "alle sinnvollen Eigenschaften"
		// und muss von der leeren Auswahl unterscheidbar bleiben.
		visibleProperties: props.visibleProperties,
	};
}

export default getPreviewDefaults;
