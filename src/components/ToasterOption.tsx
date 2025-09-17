import type { FC } from 'react';
import React from 'react';
import { translate } from '@docusaurus/Translate';

export const ToasterOption: FC = () => {
	return (
		<>
			<p>{translate({ id: 'toaster.diff.level', message: 'In KoliBri unterscheiden wir drei Ebenen:' })}</p>

			<ul>
				<li>
					<strong>
						<code>_type</code>
					</strong>{' '}
					{translate({ id: 'toaster.level.type.prefix', message: '→ definiert die ' })}
					<strong>{translate({ id: 'toaster.level.type.bold', message: 'semantische Bedeutung' })}</strong>
					{translate({ id: 'toaster.level.type.suffix', message: ' oder logische Funktion einer Komponente.' })}
				</li>
				<p>
					<em>{translate({ id: 'toaster.type.example.label', message: 'Beispiel:' })}</em>{' '}
					{translate({ id: 'toaster.type.example.firstFor', message: 'Bei' })} <code>kol-button</code>:{' '}
					<code>
						{'"'}button{'"'} | {'"'}submit{'"'} | {'"'}reset{'"'}
					</code>
					, {translate({ id: 'toaster.type.example.secondFor', message: 'bei' })} <code>kol-alert</code>:{' '}
					<code>
						{'"'}info{'"'} | {'"'}success{'"'} | {'"'}warning{'"'} | {'"'}error{'"'}
					</code>
					.
				</p>

				<li>
					<strong>
						<code>_variant</code>
					</strong>{' '}
					{translate({ id: 'toaster.level.variant.prefix', message: '→ steuert das ' })}
					<strong>{translate({ id: 'toaster.level.variant.bold', message: 'visuelle Erscheinungsbild' })}</strong>
					{translate({ id: 'toaster.level.variant.suffix', message: ', z. B. ' })}
					<code>
						{'"'}primary{'"'}
					</code>
					,{' '}
					<code>
						{'"'}secondary{'"'}
					</code>
					,{' '}
					<code>
						{'"'}ghost{'"'}
					</code>
					.
				</li>

				<li>
					<strong>
						<code>_behavior</code>
					</strong>{' '}
					{translate({ id: 'toaster.level.behavior.prefix', message: '→ bestimmt das ' })}
					<strong>{translate({ id: 'toaster.level.behavior.bold', message: 'Interaktionsverhalten' })}</strong>
					{translate({ id: 'toaster.level.behavior.suffix', message: ' der Komponente.' })}
				</li>
				<p>
					<em>{translate({ id: 'toaster.behavior.example.label', message: 'Beispiel:' })}</em>{' '}
					{translate({ id: 'toaster.behavior.example.for', message: 'Bei' })} <code>kol-tabs</code>:{' '}
					<code>
						{'"'}select-automatic{'"'}
					</code>{' '}
					vs.{' '}
					<code>
						{'"'}select-manual{'"'}
					</code>
					.
				</p>
			</ul>

			<p>{translate({ id: 'toaster.short', message: '👉 Kurz gesagt:' })}</p>

			<ul>
				<li>
					<code>_type</code> {translate({ id: 'toaster.short.type', message: '= Bedeutung & Logik' })}
				</li>
				<li>
					<code>_variant</code> {translate({ id: 'toaster.short.variant', message: '= Look & Styling' })}
				</li>
				<li>
					<code>_behavior</code> {translate({ id: 'toaster.short.behavior', message: '= Interaktion & Verhalten' })}
				</li>
			</ul>
		</>
	);
};
