#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function kebab2CamelCase(string) {
	return string.replace(/-./g, (segment) => segment.toUpperCase()[1]);
}

function firstLetterCamelCase(string) {
	return capitalizeFirstLetter(kebab2CamelCase(string));
}

function md2mdx(filePath) {
	filePath = path.resolve(process.cwd(), filePath);
	let code = fs.readFileSync(filePath, 'utf-8');
	code = code
		.replace(
			/(#+ Barrierefreiheit)/m,
			`$1

> Die optische Standardausgabe der Komponente ist auf die Umsetzung der Barrierefreiheit hin optimiert. Wenn Sie eigene Custom Styles verwenden, kann das zu einer Einschränkung der Barrierefreiheit führen.`
		)
		.replace(
			/(#+ Code)/m,
			`$1

> Um das Zusammenspiel von Komponenten (HTML) und Kontroller (TypeScript) gemeinsam darzustellen, wurden alle Code-Beispiele auf dieser Seite mit den Web Components im TSX geschrieben.`
		)
		// https://regex101.com/r/xdpxFM/1
		.replace(/- \[([^\]]+)\]\([^\)]+\)/g, '- $1')
		// https://regex101.com/r/CqlxSI/1
		.replace(/`{3}mermaid([^`]+)```/m, '<div class="mermaid">$1</div>')
		.replace(/(#+ )Properties/m, '$1Eigenschaften')
		.replace(/\\\|/gm, '|')
		.replace(/(#+ )Dependencies/m, '$1Abhängigkeiten')
		.replace(/(#+ )Used by/m, '$1Verwendet von')
		.replace(/(#+ )Depends on/m, '$1Abhängig von')
		.replace(/\*\*([^-]+)-(Komponenten?)\*\*/gm, '**$1**-$2');
	const componentName = path
		.dirname(filePath)
		.replace(/\\/g, '/')
		.replace(/([^\/]+)?\//g, '');
	// const targetDir = path.resolve(process.cwd(), 'src/components', componentName);
	// if (fs.existsSync(targetDir) === false) {
	//   try {
	//     fs.mkdirSync(targetDir);
	//   } catch (error) {
	//     console.log(`Verzeichnis konnte für die Komponente "${componentName}" nicht angelegt werden.`);
	//   }
	// }
	const storyDir = path.resolve(process.cwd(), 'src/components', componentName, '0-description');
	if (fs.existsSync(storyDir) === false) {
		try {
			fs.mkdirSync(storyDir);
		} catch (error) {
			console.log(`Verzeichnis konnte für die Komponente "${componentName}" nicht angelegt werden.`);
		}
	}
	if (fs.existsSync(storyDir)) {
		// try {
		//   fs.rm(path.resolve(storyDir, '.autogen.readme.md'));
		//   fs.rm(path.resolve(path.resolve(storyDir, '.autogen.react.stories.mdx')));
		//   fs.rm(path.resolve(path.resolve(storyDir, '.autogen.wc.stories.mdx')));
		// } catch (error) {}
		fs.writeFileSync(path.resolve(storyDir, 'autogen.readme.md'), code, 'utf-8');
		let mdx = `import { Description, Meta } from '@storybook/addon-docs';
import Readme from './autogen.readme.md';
import { mermaidLoadContent } from '../../mermaid';

<Meta title="React/${firstLetterCamelCase(componentName)}/Beschreibung" />

<Description>{Readme}</Description>

<script>() =>{mermaidLoadContent()}</script>`;
		fs.writeFileSync(path.resolve(storyDir, 'autogen.react.stories.mdx'), mdx, 'utf-8');
		mdx = mdx.replace(/React/, 'Web Components');
		fs.writeFileSync(path.resolve(storyDir, 'autogen.wc.stories.mdx'), mdx, 'utf-8');
	}
	const overviewDir = path.resolve(process.cwd(), 'src/components', componentName, '1-overview');
	if (fs.existsSync(path.resolve(overviewDir, 'react.stories.mdx'))) {
		fs.rm(path.resolve(overviewDir, 'react.stories.mdx'));
	}
	if (fs.existsSync(path.resolve(overviewDir, 'wc.stories.mdx'))) {
		fs.rm(path.resolve(overviewDir, 'wc.stories.mdx'));
	}
}

function filterMdFiles(dir) {
	let files = [];
	const dirPath = path.resolve(process.cwd(), dir);
	fs.readdirSync(dirPath).forEach((file) => {
		const fullPath = path.resolve(dir, file);
		if (fs.lstatSync(fullPath).isDirectory() && /@else/.test(fullPath) === false) {
			files = files.concat(filterMdFiles(fullPath));
		} else if (path.extname(fullPath) === '.md') {
			files.push(fullPath);
			// md2mdx(fullPath);
			// fs.writeFileSync(path.resolve(storyDir, 'autogen.wc.stories.mdx'), mdx, 'utf-8');
		}
	});
	return files;
}

const DOC_FOLDERS = ['readmes'];
const README_PATHS = filterMdFiles(path.relative(process.cwd(), 'node_modules/@public-ui/components/doc'));

const mkDirs = (dirs, index = 0) => {
	console.log(dirs, index);
	if (Array.isArray(dirs) && index >= 0 && index < dirs.length) {
		index++;
		try {
			console.log(dirs.slice(0, index).join('/'));
			fs.mkdirSync(dirs.slice(0, index).join('/'));
		} catch (e) {}
		mkDirs(dirs, index);
	}
};

rimraf([...DOC_FOLDERS, '**/*.md'].join('/'), () => {
	console.log(README_PATHS);
	README_PATHS.forEach((readmePath) => {
		const name = path.basename(readmePath).replace(/\..+/g, '');
		const folders = [...DOC_FOLDERS, name];
		mkDirs(folders);
		fs.writeFileSync(
			`${folders.join('/')}/readme.md`,
			fs
				.readFileSync(readmePath, 'utf-8')
				.replace(/style="color:red"/g, 'class="text-red-500"')
				.replace(/^# \w+/, '')
				.replace(/^( *\r?\n)+/, '')
				.replace(/\]\(..\//g, '](./')
				.replace(/class=/g, 'className=')
				.replace(/ *\\_/g, ' _'),
			'utf-8'
		);
	});
});
