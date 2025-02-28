import { useDocsPreferredVersion as originalUseDocsPreferredVersion } from '@docusaurus/theme-common';
import type { DocVersionType } from '@site/src/types/DocVersionType';

/* Typed wrapper for the Docusaurus hook */
export const useDocsPreferredVersion = (): DocVersionType => {
	return originalUseDocsPreferredVersion() as DocVersionType;
};
