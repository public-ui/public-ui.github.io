import React from 'react';
import { KolTree, KolTreeItem } from '@public-ui/react-v19';

const Tree = () => (
	<KolTree _label="Sitemap" class="block w-fit">
		<KolTreeItem _label="Home" _href="#"></KolTreeItem>
		<KolTreeItem _label="Page" _open _href="#">
			<KolTreeItem _label="Sub-Page" _href="#">
				<KolTreeItem _label="2.1.1. Values" _href="#"></KolTreeItem>
			</KolTreeItem>
		</KolTreeItem>
	</KolTree>
);

export default Tree;
