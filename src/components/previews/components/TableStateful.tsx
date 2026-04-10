import React from 'react';
import Preview, { PreviewLayout } from '../Preview';
import type { JSX } from '@public-ui/components';
import { KolInputText, KolTableStateful } from '@public-ui/react-v19';
import { translate } from '@docusaurus/Translate';
import TableColumnsProperty from '../properties/TableColumnsProperty';

type PlantRecord = {
	id: number;
	name: string;
	family: string;
	type: string;
	origin: string;
};

interface TableStatefulPreviewComponentProps {
	initialProps?: JSX.KolTableStateful;
	visibleProperties?: (keyof JSX.KolTableStateful)[];
	codeCollapsable?: boolean;
	codeCollapsed?: boolean;
}

const TableStatefulPreview: React.FC<TableStatefulPreviewComponentProps> = (props) => {
	const plantData = React.useMemo<PlantRecord[]>(
		() => [
			{
				id: 1,
				name: translate({ id: 'preview.component.table-stateful.plant.rose' }),
				family: 'Rosaceae',
				type: translate({ id: 'preview.component.table-stateful.type.shrub' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.europe' }),
			},
			{
				id: 2,
				name: translate({ id: 'preview.component.table-stateful.plant.lavender' }),
				family: 'Lamiaceae',
				type: translate({ id: 'preview.component.table-stateful.type.shrub' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.europe' }),
			},
			{
				id: 3,
				name: translate({ id: 'preview.component.table-stateful.plant.tulip' }),
				family: 'Liliaceae',
				type: translate({ id: 'preview.component.table-stateful.type.perennial' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.asia' }),
			},
			{
				id: 4,
				name: translate({ id: 'preview.component.table-stateful.plant.sunflower' }),
				family: 'Asteraceae',
				type: translate({ id: 'preview.component.table-stateful.type.perennial' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.americas' }),
			},
			{
				id: 5,
				name: translate({ id: 'preview.component.table-stateful.plant.orchid' }),
				family: 'Orchidaceae',
				type: translate({ id: 'preview.component.table-stateful.type.perennial' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.worldwide' }),
			},
			{
				id: 6,
				name: translate({ id: 'preview.component.table-stateful.plant.cactus' }),
				family: 'Cactaceae',
				type: translate({ id: 'preview.component.table-stateful.type.cactus' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.americas' }),
			},
			{
				id: 7,
				name: translate({ id: 'preview.component.table-stateful.plant.bamboo' }),
				family: 'Poaceae',
				type: translate({ id: 'preview.component.table-stateful.type.grass' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.asia' }),
			},
			{
				id: 8,
				name: translate({ id: 'preview.component.table-stateful.plant.oak' }),
				family: 'Fagaceae',
				type: translate({ id: 'preview.component.table-stateful.type.tree' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.europe' }),
			},
			{
				id: 9,
				name: translate({ id: 'preview.component.table-stateful.plant.cherry-blossom' }),
				family: 'Rosaceae',
				type: translate({ id: 'preview.component.table-stateful.type.tree' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.asia' }),
			},
			{
				id: 10,
				name: translate({ id: 'preview.component.table-stateful.plant.aloe-vera' }),
				family: 'Asphodelaceae',
				type: translate({ id: 'preview.component.table-stateful.type.cactus' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.africa' }),
			},
			{
				id: 11,
				name: translate({ id: 'preview.component.table-stateful.plant.fern' }),
				family: 'Polypodiaceae',
				type: translate({ id: 'preview.component.table-stateful.type.perennial' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.worldwide' }),
			},
			{
				id: 12,
				name: translate({ id: 'preview.component.table-stateful.plant.mint' }),
				family: 'Lamiaceae',
				type: translate({ id: 'preview.component.table-stateful.type.herb' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.europe' }),
			},
			{
				id: 13,
				name: translate({ id: 'preview.component.table-stateful.plant.basil' }),
				family: 'Lamiaceae',
				type: translate({ id: 'preview.component.table-stateful.type.herb' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.asia' }),
			},
			{
				id: 14,
				name: translate({ id: 'preview.component.table-stateful.plant.rosemary' }),
				family: 'Lamiaceae',
				type: translate({ id: 'preview.component.table-stateful.type.shrub' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.europe' }),
			},
			{
				id: 15,
				name: translate({ id: 'preview.component.table-stateful.plant.thyme' }),
				family: 'Lamiaceae',
				type: translate({ id: 'preview.component.table-stateful.type.herb' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.europe' }),
			},
			{
				id: 16,
				name: translate({ id: 'preview.component.table-stateful.plant.ivy' }),
				family: 'Araliaceae',
				type: translate({ id: 'preview.component.table-stateful.type.climber' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.europe' }),
			},
			{
				id: 17,
				name: translate({ id: 'preview.component.table-stateful.plant.chrysanthemum' }),
				family: 'Asteraceae',
				type: translate({ id: 'preview.component.table-stateful.type.perennial' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.asia' }),
			},
			{
				id: 18,
				name: translate({ id: 'preview.component.table-stateful.plant.lily' }),
				family: 'Liliaceae',
				type: translate({ id: 'preview.component.table-stateful.type.perennial' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.worldwide' }),
			},
			{
				id: 19,
				name: translate({ id: 'preview.component.table-stateful.plant.geranium' }),
				family: 'Geraniaceae',
				type: translate({ id: 'preview.component.table-stateful.type.perennial' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.africa' }),
			},
			{
				id: 20,
				name: translate({ id: 'preview.component.table-stateful.plant.wisteria' }),
				family: 'Fabaceae',
				type: translate({ id: 'preview.component.table-stateful.type.climber' }),
				origin: translate({ id: 'preview.component.table-stateful.origin.asia' }),
			},
		],
		[],
	);

	const defaultProps = React.useMemo<JSX.KolTableStateful>(
		() => ({
			_label: translate({ id: 'preview.component.table-stateful.label' }),
			_headers: {
				horizontal: [
					[
						{ key: 'name', label: translate({ id: 'preview.component.table-stateful.column.name' }) },
						{ key: 'family', label: translate({ id: 'preview.component.table-stateful.column.family' }) },
						{ key: 'type', label: translate({ id: 'preview.component.table-stateful.column.type' }) },
						{ key: 'origin', label: translate({ id: 'preview.component.table-stateful.column.origin' }) },
					],
				],
			} as JSX.KolTableStateful['_headers'],
			_data: plantData as JSX.KolTableStateful['_data'],
			_pagination: { pageSize: 5 } as JSX.KolTableStateful['_pagination'],
		}),
		[plantData],
	);

	return (
		<Preview<JSX.KolTableStateful>
			propertyComponents={{
				_label: <KolInputText _label="Label" />,
				_headers: (
					<TableColumnsProperty label={translate({ id: 'preview.component.table-stateful.columns.label' })} />
				),
			}}
			initialProps={{ ...defaultProps, ...props.initialProps }}
			componentName="KolTableStateful"
			visibleProperties={props.visibleProperties}
			codeCollapsable={props.codeCollapsable}
			codeCollapsed={props.codeCollapsed}
			layout={PreviewLayout.FULL_SIZE}
			sourceFormatter={(currentProps) => {
				const label = JSON.stringify(currentProps._label ?? '');
				const headers = JSON.stringify(currentProps._headers ?? null, null, 2)
					.split('\n')
					.join('\n  ');
				const pagination = JSON.stringify(currentProps._pagination ?? null);
				return [
					`<KolTableStateful`,
					`  _label=${label}`,
					`  _headers={${headers}}`,
					`  _data={PLANT_DATA}`,
					`  _pagination={${pagination}}`,
					`/>`,
				].join('\n');
			}}
		>
			{(componentProps) => (
				<div className="w-full h-full overflow-auto">
					<KolTableStateful {...componentProps} _data={plantData as JSX.KolTableStateful['_data']} />
				</div>
			)}
		</Preview>
	);
};

export default TableStatefulPreview;
