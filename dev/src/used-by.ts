type UsedBy = {
	label: string;
	homepageUrl: string;
	logoSrc: string;
	description?: string;
	feedback?: string;
};

export const USED_BY: Map<string, UsedBy> = new Map<string, UsedBy>();
USED_BY.set('bmf', {
	label: 'Bundesministerium der Finanzen',
	homepageUrl: 'bundesfinanzministerium.de',
	logoSrc: 'bundesfinanzministerium.de/SiteGlobals/StyleBundles/Bilder/Farbschema/logo.svg?__blob=normal',
});
USED_BY.set('bmi', {
	label: 'Bundesministerium des Innern, für Bau und Heimat',
	homepageUrl: 'bmi.bund.de',
	logoSrc: 'bmi.bund.de/SiteGlobals/Frontend/Images/logo.svg?__blob=normal',
});
USED_BY.set('itzbund', {
	label: 'Informationstechnikzentrum Bund',
	homepageUrl: 'itzbund.de',
	logoSrc: 'itzbund.de/SiteGlobals/Frontend/Images/logo.svg?__blob=normal',
});
USED_BY.set('gzd', {
	label: 'Generalzolldirektion',
	homepageUrl: 'zoll.de',
	logoSrc: 'zoll.de/SiteGlobals/Frontend/Images/logo.svg?__blob=normal',
});
USED_BY.set('bzst', {
	label: 'Bundeszentralamt für Steuern',
	homepageUrl: 'www.bzst.de/DE/Home/home_node.html',
	logoSrc: 'upload.wikimedia.org/wikipedia/commons/thumb/6/60/BZSt_Logo.svg/426px-BZSt_Logo.svg.png',
});
// USED_BY.set('kern', {
// 	label: 'KERN - UX-Standard für die deutsche Verwaltung',
// 	homepageUrl: 'gitlab.opencode.de/kern-designsystem',
// 	logoSrc: 'gitlab.opencode.de/uploads/-/system/project/avatar/803/KERN_Signet.png', Logo mit Schriftzug
// });
