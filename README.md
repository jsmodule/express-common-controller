# Express Common Controller

This is a common controller for using express

## Installation

```
$ npm install express-common-controller
```

## Usage

### First step:

Create a controller base on BaseController.

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

Create a router config using `express-common-router`. Please refer to here: [express-common-router](https://www.npmjs.com/package/express-common-router)

We need to set two loader into router config.

```js
const path = require('path');
const babelRegister = require('babel-register');
const ExpressCommonRouter = require('express-common-router').ExpressCommonRouter;
const ControllerLoader = require('express-common-controller').ControllerLoader;
const ControllerActionLoader = require('express-common-controller').ControllerActionLoader;

const router = new ExpressCommonRouter();

router.controllerPath = path.join(__dirname, './js/controllers');
router.controllerLoader = new ControllerLoader();
router.actionLoader = new ControllerActionLoader();

router.get('/hello', 'HelloController#hello');

module.exports = router.routes();
```

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
