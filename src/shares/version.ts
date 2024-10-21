import VERSIONS from '../../versions.json';

export type Version = (typeof VERSIONS)[number] & 'current';

export function determinateVersionId(docVersion) {
	if (!docVersion || !docVersion.preferredVersion) return null;
	return parseFloat(docVersion?.preferredVersion?.name as Version) < 2 ? 'v1' : 'v2';
}

export function getVersionForUrl(docVersion: { preferredVersion?: { name: string } }) {
	if (!docVersion || !docVersion.preferredVersion) return null;

	const lastVersion = VERSIONS.reduce((max, ver) => {
		return parseFloat(ver) > max ? parseFloat(ver) : max;
	}, 0).toString();

	return docVersion.preferredVersion?.name === 'current' || docVersion.preferredVersion?.name === lastVersion
		? null
		: (docVersion.preferredVersion?.name as Version);
}
