import { KolTable } from '@public-ui/react';
import type { FC } from 'react';
import React from 'react';
import { dangerouslySetInnerHTML } from '../../shares/utils';

type Props = {
	lang: 'de' | 'en';
};

type Tupel = {
	device: string;
	os: string;
	browser: string;
	screenreader: string;
};

export const WelcomeQualityTable: FC<Props> = ({ lang }) => {
	if (lang === 'en') {
		return (
			<KolTable
				className="col-12"
				_label="Prioritized qualities"
				_minWidth="50em"
				_headers={{
					horizontal: [
						[
							{
								label: 'Quality',
								key: 'quality',
								width: '12em',
								textAlign: 'left',
								render: (el, _col, row) => dangerouslySetInnerHTML(el, `<b>${row.quality}</b>`),
							},
							{
								label: 'Priority',
								key: 'prio',
								textAlign: 'left',
								width: '8em',
							},
							{
								label: 'Description',
								textAlign: 'left',
								key: 'desc',
							},
						],
					],
				}}
				_data={[
					{
						quality: 'Compatibility',
						prio: 'AAA',
						desc: 'W3C® standards, framework-agnostic and open source',
					},
					{
						quality: 'Usability',
						prio: 'AAA',
						desc: 'BITV- und Usability-Test',
					},
					{
						quality: 'Maintainability',
						prio: 'AAA',
						desc: 'DevOps, technology stack, modularization and automation',
					},
					{
						quality: 'Portability',
						prio: 'AA',
						desc: 'Adaptability to various style guides of the federal government or other',
					},
					{
						quality: 'Reliability',
						prio: 'AA',
						desc: 'BITV-, Axe-, Unit-, Snapshot-, E2E-Tests and Developer Experience (DX)',
					},
					{
						quality: 'Performance',
						prio: 'A',
						desc: 'KoliBri makes a compromise here, as it actively supports development in the implementation of accessible user interfaces.',
					},
					{
						quality: 'Security',
						prio: 'A',
						desc: 'Web Components are used for the presentation layer and do not contain any sensitive information themselves.',
					},
				]}
			></KolTable>
		);
	} else {
		return (
			<KolTable
				className="col-12"
				_label="Priorisierte Qualitäten"
				_minWidth="50em"
				_headers={{
					horizontal: [
						[
							{
								label: 'Qualität',
								key: 'quality',
								width: '12em',
								textAlign: 'left',
								render: (el, _col, row) => dangerouslySetInnerHTML(el, `<b>${row.quality}</b>`),
							},
							{
								label: 'Priorität',
								key: 'prio',
								textAlign: 'left',
								width: '8em',
							},
							{
								label: 'Erläuterung',
								textAlign: 'left',
								key: 'desc',
							},
						],
					],
				}}
				_data={[
					{
						quality: 'Kompatibilität',
						prio: 'AAA',
						desc: 'W3C®-Standards, Framework-agnostisch und Open Source',
					},
					{
						quality: 'Benutzbarkeit',
						prio: 'AAA',
						desc: 'BITV- und Usability-Test',
					},
					{
						quality: 'Wartbarkeit',
						prio: 'AAA',
						desc: 'DevOps, Technologie-Stack, Modularisierung und Automatisierung',
					},
					{
						quality: 'Portierbarkeit',
						prio: 'AA',
						desc: 'Anpassbarkeit an verschiedene Styleguides des Bundes oder anderer',
					},
					{
						quality: 'Zuverlässigkeit',
						prio: 'AA',
						desc: 'BITV-, Axe-, Unit-, Snapshot-, E2E-Tests und Developer Experience (DX)',
					},
					{
						quality: 'Performance',
						prio: 'A',
						desc: 'KoliBri geht hier einen Kompromiss ein, da es die Entwicklung aktiv bei der Umsetzung barrierefreier Benutzeroberflächen unterstützt.',
					},
					{
						quality: 'Sicherheit',
						prio: 'A',
						desc: 'Web Components dienen der Präsentationsschicht und beinhalten selbst keine sensitiven Informationen',
					},
				]}
			></KolTable>
		);
	}
};

export const WelcomeSupportTable: FC<Props> = ({ lang }) => {
	if (lang === 'en') {
		return (
			<KolTable
				className="col-12"
				_label="Aims for device, operating system, browser and screen reader compatibility"
				_minWidth="40em"
				_headers={{
					horizontal: [
						[
							{
								label: 'Device',
								key: 'device',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, `<b>${row.device}</b>`),
							},
							{
								label: 'Operating system',
								key: 'os',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, row.os),
							},
							{
								label: 'Browser',
								key: 'browser',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, row.os),
							},
							{
								label: 'Screen reader',
								key: 'screenreader',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, row.screenreader),
							},
						],
					],
				}}
				_data={[
					{
						device: 'PC',
						os: 'Windows<br/>Linux<br/>MacOS',
						browser: 'Chrome<br/>Firefox<br/>Edge<br/>Opera<br/>Safari (MacOS only)',
						screenreader: 'NVDA (... only)<br/>Jaws (... only)<br/>VoiceOver (MacOS only)',
					},
					{
						device: 'Tablet',
						os: 'Android<br/>iOS<br/>Windows',
						browser: 'Chrome<br/>Firefox<br/>Edge<br/>Opera<br/>Safari (MacOS only)',
					},
					{
						device: 'Mobile',
						os: 'Android<br/>iOS',
						browser: 'Chrome<br/>Firefox<br/>Edge<br/>Opera<br/>Safari (MacOS only)',
						screenreader: 'TalkBack (Android only)',
					},
				]}
			></KolTable>
		);
	} else {
		return (
			<KolTable
				className="col-12"
				_label="Angestrebt Geräte-, Betriebssystem-, Browser und Screenreader-Kompatibilität"
				_minWidth="40em"
				_headers={{
					horizontal: [
						[
							{
								label: 'Gerät',
								key: 'device',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, `<b>${row.device}</b>`),
							},
							{
								label: 'Betriebssystem',
								key: 'os',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, row.os),
							},
							{
								label: 'Browser',
								key: 'browser',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, row.browser),
							},
							{
								label: 'Screenreader',
								key: 'screenreader',
								width: '10em',
								textAlign: 'left',
								render: (el, _col, row: Tupel) => dangerouslySetInnerHTML(el, row.screenreader),
							},
						],
					],
				}}
				_data={[
					{
						device: 'PC',
						os: 'Windows<br/>Linux<br/>MacOS',
						browser: 'Chrome<br/>Firefox<br/>Edge<br/>Opera<br/>Safari (nur MacOS)',
						screenreader: 'NVDA (nur ...)<br/>Jaws (nur ...)<br/>VoiceOver (nur MacOS)',
					},
					{
						device: 'Tablet',
						os: 'Android<br/>iOS<br/>Windows',
						browser: 'Chrome<br/>Firefox<br/>Edge<br/>Opera<br/>Safari (nur MacOS)',
						screenreader: 'TalkBack (nur Android)',
					},
					{
						device: 'Mobil',
						os: 'Android<br/>iOS',
						browser: 'Chrome<br/>Firefox<br/>Edge<br/>Opera<br/>Safari (nur MacOS)',
						screenreader: 'TalkBack (nur Android)',
					},
				]}
			></KolTable>
		);
	}
};
