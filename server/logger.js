import { Logger as WinstonLogger, transports } from 'winston';
import expressWinston from 'express-winston';

/**
 * Logger Class
 * This class is wrapped around winston
 *
 * Levels:
 *  - error: 0
 *  - warn: 1
 *  - info: 2
 *  - verbose: 3
 *  - debug: 4
 *  - silly: 5
 */
const logPath = `${__dirname}/../var/logs/`;

class Logger {
    constructor(env = 'development') {
        this.env = env;
        if (process.env.NODE_ENV !== '') {
            this.env = process.env.NODE_ENV;
        }
        this.logPath = logPath;
        this.level = env === 'production' ? '' : 'verbose';
        this.logger = new WinstonLogger({
            level: this.level,
            transports: this.transports,
        });

        this.logger.log('info', 'hi');
    }
    static transports() {
        return [
            this.consoleTransport(),
            this.infoFileTransport(),
            this.warnFileTransport(),
            this.errorFileTransport(),
        ];
    }
    static consoleTransport() {
        return new transports.Console({
            handleExceptions: true,
            json: true,
            colorize: true,
        });
    }
    static infoFileTransport() {
        return new transports.File({
            name: 'info-file',
            filename: `${logPath}info.log`,
            level: 'info',
        });
    }
    static warnFileTransport() {
        return new transports.File({
            name: 'warn-file',
            filename: `${logPath}warnings.log`,
            level: 'warn',
        });
    }
    static errorFileTransport() {
        return new transports.File({
            name: 'error-file',
            filename: `${logPath}errors.log`,
            level: 'error',
        });
    }
    static exceptionFileHandler() {
        return new transports.File({
            name: 'exception-file',
            filename: `${logPath}exceptions.log`,
        });
    }
    static baseLogger() {
        return expressWinston.logger({
            transports: this.transports(),
        });
    }
    static errorLogger() {
        return expressWinston.errorLogger({
            transports: this.transports(),
        });
    }
}

export default Logger;
