#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve(__dirname, '../versions.json'));
let versions = JSON.parse(content);

const toRemovedVersions = process.argv.splice(2, process.argv.length - 2);

versions = versions.filter((version) => !toRemovedVersions.includes(version));

fs.writeFileSync(path.resolve(__dirname, '../versions.json'), JSON.stringify(versions, null, 2));
