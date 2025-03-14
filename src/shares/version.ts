import VERSIONS from '../../versions.json';
import type { DocVersionType } from '../types/DocVersionType';

export type Version = (typeof VERSIONS)[number] & 'current';

export function determinateVersionId(docVersion: { preferredVersion?: { name: string } }) {
	if (!docVersion || !docVersion.preferredVersion) return 'v2';
	return parseFloat(docVersion?.preferredVersion?.name as Version) < 2 ? 'v1' : 'v2';
}

/**
 * Determines the appropriate version to be used in the URL.
 * If the preferred version is "current" or matches the latest version,
 * `null` is returned because no version specification is needed in the URL in these cases.
 * If the preferred version differs from the latest version, it will be returned.
 * @param docVersion - An object containing the preferred version.
 * @returns A string representing the version to be used in the URL, or `null` if the preferred version is "current" or matches the latest version.
 */
export function getVersionForUrl(docVersion: DocVersionType): string | null {
	if (!docVersion || !docVersion.preferredVersion) return null;

	const lastVersion = VERSIONS.reduce((max, ver) => {
		return parseFloat(ver) > max ? parseFloat(ver) : max;
	}, 0).toString();

	return docVersion.preferredVersion?.versionName === 'current' ||
		docVersion.preferredVersion?.versionName === lastVersion
		? null
		: (docVersion.preferredVersion?.versionName as Version);
}
