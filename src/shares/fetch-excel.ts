import readXlsxFile, { readSheetNames } from 'read-excel-file';

const WHITELIST = [
	'Abbr',
	'Accordion',
	'Alert',
	'Badge',
	'Breadcrumb',
	'Button',
	'ButtonGroup',
	'ButtonLink',
	'Card',
	'Details',
	'Heading',
	'Icon',
	'IndentedText',
	'InputCheckbox',
	'InputColor',
	'InputDate',
	'InputEmail',
	'InputFile',
];

async function getDataFromSheet(blob: Blob, name: string) {
	return await readXlsxFile(blob, { sheet: name });
}

function getDataFromSheets(queryList: unknown[], resultList: Record<string, unknown> = {}): unknown {
	return new Promise((resolve) => {
		if (queryList.length === 0) {
			resolve(resultList);
		}

		const query = queryList.shift();

		const { sheet, promise } = query as { sheet: string; promise: Promise<unknown> };

		void promise.then((result: unknown) => {
			resultList[sheet] = result;
			resolve(getDataFromSheets(queryList, resultList));
		});
	});
}

export const getDataFromExcel = async () => {
	try {
		const result = await fetch('/test-results/bitv-test.xlsx');
		const blob = await result.blob();
		const sheets = await readSheetNames(blob);
		const data: unknown[] = [];
		sheets.forEach((sheet) => {
			if (WHITELIST.includes(sheet)) {
				data.push({
					sheet,
					promise: getDataFromSheet(blob, sheet),
				});
			}
		});

		return getDataFromSheets(data);
	} catch (e) {
		throw Error(`Excel file not found: ${e as string}`);
	}
};
