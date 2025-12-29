import type { FC } from 'react';
import React from 'react';
import { translate } from '@docusaurus/Translate';

export const PropertyMsgUsage: FC = () => {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>
							{translate({
								id: 'property.msg.case',
								message: 'Fall',
							})}
						</th>
						<th>
							{translate({
								id: 'property.msg.value',
								message: '_msg-Wert',
							})}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							{translate({
								id: 'property.msg.case.no.msg',
								message: 'Keine Message',
							})}
						</td>
						<td>
							<code>
								{translate({
									id: 'property.msg.value.undefined',
									message: 'undefined',
								})}
							</code>
						</td>
					</tr>
					<tr>
						<td>
							{translate({
								id: 'property.msg.case.standard',
								message: 'Standard-Fehlermeldung',
							})}
						</td>
						<td>
							<code>
								{translate({
									id: 'property.msg.value.string',
									message: 'string',
								})}
							</code>
						</td>
					</tr>
					<tr>
						<td>
							{translate({
								id: 'property.msg.case.message',
								message: 'Meldung',
							})}
						</td>
						<td>
							<code>
								{translate({
									id: 'property.msg.value.message',
									message: '{_type: success, _description: Success message}',
								})}
							</code>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
