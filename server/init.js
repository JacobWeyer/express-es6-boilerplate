/**
 * Fetch the entire app
 * And start it on the server
 */
import app from './app';

/**
 * Default server is port 3000
 */
const { PORT = 3000, NODE_ENV = 'development' } = process.env;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
    console.log(`Running ${NODE_ENV} environment`); // eslint-disable-line no-console
});
