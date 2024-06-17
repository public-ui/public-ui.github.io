import type { FC } from 'react';
import React from 'react';
import type { Language } from '../../shares/language';
import { MESSAGES } from '../../shares/language';

type Props = Language;

const Tooltip: FC<Props> = ({ lang }) => <p>{MESSAGES?.[lang]?.components?.noPreview}</p>;

export default Tooltip;
