import React, { type FC, type PropsWithChildren } from 'react';

export const IndentedText: FC<PropsWithChildren> = ({ children }) => {
	return <div className="indented-text">{children}</div>;
};
