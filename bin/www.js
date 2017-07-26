/**
 * Make all files available from the absolute namespace rather than having to do long relative paths
 * Ex server/logger.js will return the logger file from anywhere
 */
// causes errors with linting everywhere
// require('app-module-path/cwd');
// require('app-module-path').addPath(process.cwd());

/**
 * Allow ES6 support for all requests
 */
require('babel-register');
require('babel-polyfill');

/**
 * Initialize the server
 */
require('../server/init.js');
