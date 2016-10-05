# Express Common Controller

This is a common controller for using express

Current Status:

[![NPM Version](https://img.shields.io/npm/v/express-common-controller.svg)](https://npmjs.org/package/express-common-controller)
[![NPM Downloads](https://img.shields.io/npm/dm/express-common-controller.svg)](https://npmjs.org/package/express-common-controller)
[![Build Status](https://travis-ci.org/jsmodule/express-common-controller.svg?branch=master)](https://travis-ci.org/jsmodule/express-common-controller)

[![NPM](https://nodei.co/npm/express-common-controller.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/express-common-controller/)

## Installation

```
$ npm install express-common-controller
```

## Usage

### First step:

Create a controller inherit BaseController.

* HelloController.js

```js
const BaseController = require('express-common-controller').BaseController;

function HelloController() {}

HelloController.prototype = new BaseController();

HelloController.prototype.index = function() {
  this.render("Hello World");
};

module.exports = HelloController;
```

Or Using ES6 style

```js
import { BaseController } from 'express-common-controller';

class HelloController extends BaseController {
  constructor() {
    super();
  }

  index() {
    this.render('Hello World');
  }
}

export default HelloController;
```

### Second step:

Create a router config like this:

```js
const path = require('path');
const ExpressCommonControllerRouter = require('express-common-controller').default;

const router = new ExpressCommonControllerRouter();

router.path = path.join(__dirname, './js/controllers');

router.get('/hello', 'HelloController#hello');

module.exports = router.routes();
```

**NOTE** `ExpressCommonControllerRouter` based on `ExpressCommonRouter`.
More info please refer to here:[express-common-router](https://www.npmjs.com/package/express-common-router)

### Third step:

Using routes config in server.js

```js
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
```

### Config your routes.

This component support all methods which supported by `express`.

About the details of config route, please refer to here: [Express Router](http://www.expressjs.com.cn/guide/routing.html)

## License

express-common-controller is released under the MIT license.
