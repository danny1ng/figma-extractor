import { ClientInterface, FileNodesResponse, FullStyleMetadata } from 'figma-js';

import { Plugin } from '@/plugins';
import { Config } from '@/types';

import { addEslintDisableAtTheTopOfText } from './add-eslint-disable';
import { runFormattingFile } from './run-formatting-file';
import { styleTypeUtils } from './style-type-utils';
import { writeFile } from './write-file';

export interface FigmaData {
  figmaClient: ClientInterface;
  styleMetadata: readonly FullStyleMetadata[];
  fileNodes: FileNodesResponse;
}

export interface Core {
  config: Config;
  rootPath: string;
  plugins: Plugin[];
  styleTypeUtils: typeof styleTypeUtils;
  writeFile: typeof writeFile;
  runFormattingFile: typeof runFormattingFile;
  addEslintDisableRules: typeof addEslintDisableAtTheTopOfText;
}

export const createCore = (args: { config: Config; rootPath: string; plugins: Plugin[] }): Core => {
  return {
    ...args,
    styleTypeUtils,
    writeFile,
    runFormattingFile,
    addEslintDisableRules: addEslintDisableAtTheTopOfText,
  };
};
