import { translate } from '@docusaurus/Translate';
import { KolAlert } from '@public-ui/react-v19';
import React, { type ReactNode } from 'react';

/**
 * Banner that indicates the component has not yet been tested for accessibility.
 * Embed at the top of any untested component documentation page:
 *
 * ```mdx
 * import UntestedBanner from '@site/src/components/UntestedBanner';
 * <UntestedBanner />
 * ```
 */
export default function UntestedBanner(): ReactNode {
	return (
		<div className='my-4'>
			<KolAlert
				_type='warning'
				_variant='card'
				_label={translate({ id: 'custom.untested-banner.label' })}
			>
				{translate({ id: 'custom.untested-banner.message' })}
			</KolAlert>
		</div>
	);
}
