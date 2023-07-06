import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { FC, useEffect } from 'React';
import { getDataFromExcel } from '../shares/fetch-excel';

const BitvTestResult: FC = () => {
	useEffect(() => {
		getDataFromExcel()
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.warn(err);
			});
	}, []);

	return <div className="">[]</div>;
};

export const BitvTestResults: FC = () => <BrowserOnly>{() => <BitvTestResult />}</BrowserOnly>;
