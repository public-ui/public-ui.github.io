import { readSheetNames } from 'read-excel-file';

export const getDataFromExcel = async () => {
	try {
		const result = await fetch('/test-results/bitv-test.xlsx');
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
		return await readSheetNames(await result.blob());
		// return await readXlsxFile(await result.blob(), { sheet: 1 });
	} catch (e) {
		throw Error(`Excel file not found: ${e as string}`);
	}
};
