import { glob } from 'glob';
import {generateDocumentation} from '@deep-foundation/npm-automation'
import path from 'path';
import fsExtra from 'fs-extra';

main();

async function main() {
  await generateDocumentation({
    generateCliAppsHelpInReadmeOptions: null,
    generateUsageWaysOfNpmCliAppsInMarkdownFormatOptions: null,
  })
};