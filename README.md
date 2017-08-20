
[![alt text][1.1]][1]

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)

[1]: https://twitter.com/ehsan_aghaei


# nodejs-simple-log

[nodejs-simple-log](https://github.com/ehsanagh/nodejs-simple-log) is small and independence NodeJS module,
that gives you this ability to have colorized logs with log level control as configuration, simple as possible

## Installation

 installing by NPM
 ```bash
 npm install nodejs-simple-log --save
 ```

## Usage

simple way to use
```javascript
const loggerModule = require('nodejs-simple-log'); // loading the module
let logLevel = ['log', 'info', 'warn', 'error', 'success']; // setting log level config
const logger = loggerModule(logLevel); // apply log level configuration


logger.log('hello', ' World!', {testObj: 'Value!'}); // print with white color

logger.info('hello', ' World!', {testObj: 'Value!'}); // print with blue color

logger.warn('hello', ' World!', {testObj: 'Value!'}); // print with yellow color

logger.error('hello', ' World!', {testObj: 'Value!'}); // print with red color

logger.success('hello', ' World!', {testObj: 'Value!'}); // print with green color

```

## available functions

 `log()`, `info()`, `error()`, `warn()`, `success()`


## License

MIT License

Copyright (c) 2017 Ehsan Aghaei

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Bugs

See <https://github.com/ehsanagh/nodejs-simple-log/issues>.