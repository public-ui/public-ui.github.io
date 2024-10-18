import type VERSIONS from '../../versions.json';

export type Version = (typeof VERSIONS)[number] & 'current';

export function determinateVersionId(docVersion: { preferredVersion?: { name: string } }) {
	if (!docVersion || !docVersion.preferredVersion) return null;
	return parseFloat(docVersion?.preferredVersion?.name as Version) < 2 ? 'v1' : 'v2';
}
