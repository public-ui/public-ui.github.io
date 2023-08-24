import BrowserOnly from '@docusaurus/BrowserOnly';
import { KolTable } from '@public-ui/react';
import React, { FC, useEffect, useState } from 'react';
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
	const [data, setData] = useState([]);

	useEffect(() => {
		getDataFromExcel()
			.then((results) => {
				console.log(results);
				const data = [];
				for (const key in results) {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
					data.push(parseResult(key, results[key]));
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
			_caption="Übersicht der Testergebnisse der KoliBri-Komponenten"
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
