/**
 * Allow ES6 support for all requests
 */
require('babel-register');
require('babel-polyfill');

/**
 * Initialize the server
 */
require('../server/init.js');
