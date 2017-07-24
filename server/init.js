import dotenv from 'dotenv';
import { addPath } from 'app-module-path';

/**
 * Fetch the entire app
 * And start it on the server
 */
import app from './app';

/**
 * Make all files available from the absolute namespace rather than having to do long relative paths
 * Ex server/logger.js will return the logger file from anywhere
 */
addPath(`${__dirname}/../`);

/**
 * Initialize env file config
 */
dotenv.config();

/**
 * Default server is port 3000
 */
const { PORT = 3000, NODE_ENV = 'development' } = process.env;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
    console.log(`Running ${NODE_ENV} environment`); // eslint-disable-line no-console
});
