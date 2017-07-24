import express from 'express';
import bodyParser from 'body-parser';
import Logger from './logger';
// import routes from './routes';

const app = express();
/**
 * Hide the powered by express to hide the version
 * This can help protect against exploits and vulnerabilities
 */
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Include Logger
 */
app.use(Logger.base());

app.use('/', (req, res, next) => { // eslint-disable-line no-unused-vars
    res.send('done');
});

/**
 * Include Routes
 */
// app.use('/', routes);


/**
 * Catch 404 errors
 * This is all page not found
 * Then forward the error to the error handler
 */
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(Logger.error);

/**
 * Default Error Handler
 *
 * This will return all of the errors in your application
 */
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res
        .status(err.status || 500)
        .render('error', {
            message: err.message,
        });
});

export default app;
