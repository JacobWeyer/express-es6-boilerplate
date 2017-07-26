import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import Logger from './logger';
import sequelize from './sequelize';
import User from '../models/user';
// import routes from './server/routes.js';

/**
 * Initialize env file config
 */
dotenv.config();

/**
 * Test connection to database
 */
sequelize
    .authenticate()
    .then(() => {
        console.log('Successfully connected to the database'); // eslint-disable-line no-console
    })
    .catch((err) => {
        console.error('Error connecting to the database: ', err); // eslint-disable-line no-console
    });

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
app.use(Logger.baseLogger());

app.use('/', (req, res, next) => { // eslint-disable-line no-unused-vars
    User.findAll().then((users) => {
        console.log(users); // eslint-disable-line no-console
        res.send('done');
    });
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

app.use(Logger.errorLogger);

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
