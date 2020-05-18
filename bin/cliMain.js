#!/usr/bin/env node
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
const chalk = require('chalk');
const { mdLinks } = require('./md-linksMain');
const { stats, statsValidate } = require('../lib/cli.js');

// INPUTS VALIDOS
const path = process.argv[2];
const options = process.argv[3];
const status = process.argv[4];

// OPCIONES DISPONIBLES
const optionStatsValidate = (options === '--validate' && status === '--stats') || (options === '--v' && status === '--s') || (options === '--stats' && status === '--validate') || (options === '--s' && status === '--v');
const optionValidate = (options === '--validate' || options === '--v');
const optionStats = (options === '--stats' || options === '--s');
const optionHelp = (path === '--help');

// VALIDACIONES
const optionInvalidPath = (path === undefined);
const optionInvalidOptions = (options === undefined);
const optionInvalidStatus = (status === undefined);

if (process.argv[5] !== undefined) {
  console.log(chalk.cyan('you added invalid characters type "--help" for more usage information'));
} else if (optionInvalidPath) {
  console.log(chalk.cyan('you need write a path <options> type "--help" for more usage information'));
} else if (optionStatsValidate) {
  mdLinks(path, { validate: true }).then((res) => {
    console.log(chalk.green(`
    ✔ TOTAL :  ${statsValidate(res).TOTAL}
    ✔ UNIQUE :  ${statsValidate(res).UNIQUE}`));
    console.log(chalk.red(`
    ✖ BROKEN :  ${statsValidate(res).BROKEN}`));
  }).catch((error) => console.log(chalk.cyan('enter a valid path')));
} else if (optionStats) {
  mdLinks(path, { validate: true }).then((res) => {
    console.log(chalk.green(`
    ✔ TOTAL :  ${stats(res).TOTAL}
    ✔ UNIQUE :  ${stats(res).UNIQUE}`));
  }).catch((error) => console.log(chalk.cyan('No files with md extension found')));
} else if (optionValidate) {
  if (optionInvalidStatus) {
    mdLinks(path, { validate: true }).then((res) => {
      res.forEach((element, index, arr) => {
        console.log(chalk.yellow(`
 FILE NUMBER ${index + 1}`));
        console.log(`
        URL: ${element.file}
        TEXT: ${element.text}  `);
        if (element.href === '') {
          console.log(chalk.bold.red('        HREF : invalid link'));
        } else {
          console.log(`        HREF: ${element.href} `);
        }
        if (element.status !== 200) {
          console.log(chalk.red(`        STATUS: ${element.status}
        STATUS TEXT: ${element.statusText}`));
        } else {
          console.log(chalk.green(`        STATUS: ${element.status}
        STATUS TEXT: ${element.statusText}`));
        }
      });
    }).catch((error) => console.log(chalk.cyan('No files with md extension found')));
  } else {
    console.log(chalk.cyan('you added invalid characters type "--help" for more usage information'));
  }
} else if (optionHelp) {
  console.log(chalk.cyan(`
        CORRECT USE :`));
  console.log(`
   md-links <path-to-file>                returns markdown files on the specified path
   md-links <path-to-file> [options]      returns characteristics and some statistics of markdown files  `);
  console.log(chalk.cyan(`
   ARGUMENTS :`));
  console.log(`
   [options] :
    --validate                            returns more characteristics of markdown files
    --stats                               returns basic statistics of markdown files
    --stats --validate                    returns more statistics of markdown files
    --validate --stats                    returns more statistics of markdown files
    --v --s   || --s --v                  returns more statistics of markdown files
  `);
} else if (optionInvalidOptions) {
  mdLinks(path).then((res) => {
    res.forEach((element, index, arr) => {
      console.log(chalk.yellow(`
FILE NUMBER ${index + 1}`));
      console.log(`
    URL: ${element.file}
    TEXT: ${element.text} `);
      if (element.href === '') {
        console.log(chalk.bold.red('    HREF: invalid link'));
      } else {
        console.log(`    HREF: ${chalk.green(element.href)} `);
      }
    });
  }).catch((error) => console.log(chalk.cyan('Invalid path type "--help" for more usage information')));
} else {
  console.log(chalk.cyan('Invalid input type "--help" for more usage information '));
}
