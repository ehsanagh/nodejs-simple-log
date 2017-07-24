"use strict";
const util = require('util');
/**
 * create logger class for debug purposes
 * @type Class
 */
const loggerModule = class logger {
    /**
     * set allowed log level for showing
     */
    constructor(logtTypes) {
        this._types = logtTypes;
        this._background = {
            'black':        [40, 49],
            'red':          [41, 49],
            'green':        [42, 49],
            'yellow':       [43, 49],
            'blue':         [44, 49],
            'magenta':      [45, 49],
            'cyan':         [46, 49],
            'white':        [47, 49]
        };
    }

    /**
     * implement toString Method
     * @returns {string}
     */
    toString() {
        return `(${this._types})`;
    }

    /**
     * log the arguments with white color
     */
    log() {
        this._processLog.apply(this, ['log', 'white', arguments]);
    }

    /**
     * log the arguments with blue color
     */
    info() {
        this._processLog.apply(this, ['info', 'blue', arguments]);
    }

    /**
     * log the argument with yellow color
     */
    warn() {
        this._processLog.apply(this, ['warn', 'yellow', arguments]);
    }

    /**
     * log the arguments with red color
     */
    error() {
        this._processLog.apply(this, ['error', 'red', arguments]);
    }

    /**
     * lof the arguments with green color
     */
    success() {
        this._processLog.apply(this, ['success', 'green', arguments]);
    }

    /**
     * check whether wich kind of log is allowed for show
     * @param type
     * @returns {boolean}
     * @private
     */
    _checkLevel(type) {
        return (this._types.indexOf(type) >= 0);
    }

    /**
     * log text with the color
     * @param color
     * @param text
     * @private
     */
    static _colorizedLog (color, text) {
        const codes = util.inspect.colors[color];
        Array.prototype.unshift.call(text, `\x1b[${codes[0]}m`);
        Array.prototype.push.call(text, `\x1b[${codes[1]}m`);
        console.log.apply(console, text);
    }

    /**
     * prepare argument for logging , check if logged valid
     * @param color
     * @param args
     * @private
     * @param type
     */
    _processLog(type, color, args) {
        if (this._checkLevel(type)) {
            this.constructor._colorizedLog(color, args);
        }
    }
};

module.exports = (arg) => new loggerModule(arg);