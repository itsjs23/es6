const chalk = require('chalk');

/**
 * Adds mark check symbol
 */

const addCheckMark = (cb) => {
    process.stdout.write(chalk.green(' ✓'));
    if(cb) cb();
}

const addXMark = (cb) => {
  process.stdout.write(chalk.red(' ✘'));
  if (cb) cb();
}

module.exports = {
    addCheckMark : addCheckMark ,
    addXMark : addXMark
};
