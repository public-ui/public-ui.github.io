import { translate } from '@docusaurus/Translate';
import { KolAlert } from '@public-ui/react-v19';
import React, { type ReactNode } from 'react';

/**
 * Banner that indicates the documentation page is currently being revised and is in beta status.
 * Embed at the top of any revised documentation page:
 *
 * ```mdx
 * import BetaDocsBanner from '@site/src/components/BetaDocsBanner';
 * <BetaDocsBanner />
 * ```
 */
export default function BetaDocsBanner(): ReactNode {
	return (
		<div className='my-4'>
			<KolAlert
				_type='info'
				_variant='card'
				_label={translate({ id: 'custom.beta-docs-banner.label' })}
			>
				{translate({ id: 'custom.beta-docs-banner.message' })}
			</KolAlert>
		</div>
	);
}
