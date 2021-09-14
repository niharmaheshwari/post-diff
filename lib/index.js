#!/usr/bin/env node

/**
 * post-diff : a regression runner for postman
 * Argument Details :
 * c | collection : postman collection input
 * e | environment : postman environments array
 * i | ignore : ignore-tags file
 * o | output : destination folder
 */

const ARG_FAIL = 'Oops! Something went wrong while starting post-diff. Try running with --help';
const { argv } = require('yargs')
  .option('collection', {
    alias: 'c',
    description: 'Postman collection input',
    demandOption: true,
  })
  .option('environment', {
    array: true,
    alias: 'e',
    description: 'Ordered array of postman environments for regressions',
    demandOption: true,
  })
  .option('ignore', {
    alias: 'i',
    description: 'Ignore tagging file',
  })
  .option('output', {
    alias: 'o',
    description: 'Target output folder',
    default: './out',
  })
  .option('h', {
    alias: 'help',
    description: 'Display help message',
  })
  .help('help')
  .version()
  .alias('version', 'v')
  .showHelpOnFail(false, ARG_FAIL);

const runner = require('./runner');

const postdiff = function postdiff() {
  console.log(`post-diff started with arguments: ${JSON.stringify(argv)}`);
  runner.runCollection();
};

postdiff();
