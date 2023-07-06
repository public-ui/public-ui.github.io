import React, { FC } from 'React';

const DEPRECATED = new Map<string, Set<string>>();
DEPRECATED.set('avatar', new Set());
DEPRECATED.set('dialog', new Set());
DEPRECATED.set('toolbar', new Set());
DEPRECATED.set('tree', new Set());
DEPRECATED.set('list', new Set());
DEPRECATED.set(
	'',
	new Set(['button-group', 'icon-font-awesome', 'icon-icofont', 'input-radio-group', 'link-group', 'symbol'])
);

export const ComponentsDeprecated: FC = () => {
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>New Component</th>
						<th>Deprecated Components</th>
					</tr>
				</thead>
				<tbody>
					{Array.from(DEPRECATED.keys()).map((prop) => {
						const deprecated = Array.from(DEPRECATED.get(prop) || []);
						return (
							<tr key={prop}>
								<td>{prop}</td>
								<td
									dangerouslySetInnerHTML={{
										__html: deprecated.join(', '),
									}}
								></td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<p>
				<small>
					<sup>*</sup> Betrifft nur Typen, die eigentlich Varianten meinen.
				</small>
			</p>
		</>
	);
};
