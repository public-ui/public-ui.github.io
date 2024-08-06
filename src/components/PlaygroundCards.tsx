import { KolLinkButton } from '@public-ui/react';
import React from 'react';
import type { FC } from 'react';
import Heading from '@theme/Heading';

import type { Locale } from '../shares/language';
import { MESSAGES } from '../shares/language';
import type { Playground } from '../shares/playground';
import { PLAYGROUNDS_V1, PLAYGROUNDS_V2 } from '../shares/playground';

const PlaygroundCard: FC<
	Playground & {
		lang: Locale;
	}
> = ({ lang, name, image, url }) => (
	<div className="grid gap-2">
		<Heading as="h3">{name}</Heading>
		<img src={`/assets/playgrounds/${image}`} alt={`Vorschau des Playground ${name}'s`} />
		<div className="text-center">
			<KolLinkButton
				_href={url}
				_label={MESSAGES[lang].components.playgroundCards.button}
				_target="${image}"
			></KolLinkButton>
		</div>
	</div>
);

export type PlaygroundCardsProps = {
	lang?: Locale;
	majorVersion?: 1 | 2;
};

export const PlaygroundCards: FC<PlaygroundCardsProps> = ({ lang = 'de', majorVersion = 1 }) => {
	return (
		<div className="grid gap-8 md:grid-cols-2">
			{(majorVersion === 1 ? PLAYGROUNDS_V1 : PLAYGROUNDS_V2).map((item, idx) => (
				<PlaygroundCard key={idx} lang={lang} {...item} />
			))}
		</div>
	);
};

export default PlaygroundCards;
