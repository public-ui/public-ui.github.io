#!/usr/bin/env node

const fs = require('fs');

const SITEMAP = './build/sitemap.xml';
const CHARSET = 'utf-8';

const xml = fs.readFileSync(SITEMAP, CHARSET).replace(/\r*\n*\t*/g, '');
const urls = xml.replace(/.*<urlset[^>]+>/, '').replace(/<\/urlset>.*/, '');
const enUrls = urls.replace(/https:\/\/public-ui.github.io\//g, 'https://public-ui.github.io/en/');

fs.writeFileSync(SITEMAP, xml.replace(/<\/urlset>.*/, `${enUrls}</urlset>`), CHARSET);
