import BrowserOnly from '@docusaurus/BrowserOnly';
import { KolTable } from '@public-ui/react';
import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { getDataFromExcel } from '../shares/fetch-excel';

function parseThemeResult(result: string, col: number) {
	let erfuellt = 0;
	let gesamt = 0;
	for (let i = 2; i < result.length; i++) {
		gesamt++;
		switch (result[i][col]) {
			case 'erfüllt':
				erfuellt++;
				break;
			case 'nicht erfüllt':
			case 'teilweise erfüllt':
				break;
			default:
				gesamt--;
		}
	}
	return `${erfuellt}/${gesamt}`;
}

function parseResult(name: string, result: string) {
	return {
		component: name,
		bmf: parseThemeResult(result, 2),
		zoll: parseThemeResult(result, 4),
	};
}

export const BitvTestResult: FC = () => {
	const [data, setData] = useState<{ component: string; bmf: string; zoll: string }[]>([]);

	useEffect(() => {
		getDataFromExcel()
			.then((results) => {
				const typedResults = results as { [key: string]: string };
				console.log(typedResults);
				const data = [];
				for (const key in typedResults) {
					data.push(parseResult(key, typedResults[key]));
				}
				setData(data);
				console.log(data);
			})
			.catch((err) => {
				console.warn(err);
			});
	}, []);

	return (
		<KolTable
			_label="Übersicht der Testergebnisse der KoliBri-Komponenten"
			_headers={{
				horizontal: [
					[
						{
							label: 'Component',
							key: 'component',
						},
						{
							label: 'BMF',
							key: 'bmf',
							textAlign: 'center',
						},
						{
							label: 'Zoll (v2)',
							key: 'zoll',
							textAlign: 'center',
						},
					],
				],
			}}
			_data={data}
		/>
	);
};

export const BitvTestResults: FC = () => <BrowserOnly>{() => <BitvTestResult />}</BrowserOnly>;
