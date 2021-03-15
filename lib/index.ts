#!/usr/bin/env node

import path from 'path';
import program from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';

import example from './commands/example';

const pkg = require(path.join(__dirname, '../package.json'));

program
  .version(pkg.version)
  .description(pkg.description)
  .usage('<options>')
  .option('-b, --blue', 'display message in blue')
  .action(example);

program.on('command:*', (commands?: string[]) => {
  if (commands) {
    console.error(`error: unknown command: ${commands[0]}`);

    process.exit(1);
  }
});

program.on('--help', () => {
  console.log(
    chalk.magentaBright(
      figlet.textSync('Node.js CLI\nTypeScript\nstarter', {
        horizontalLayout: 'full',
        verticalLayout: 'full',
      })
    )
  );
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.help();
}
