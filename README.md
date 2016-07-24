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

Create a middleware using `express-controller-middleware`. Please refer to here: [express-controller-middleware](https://www.npmjs.com/package/express-controller-middleware)

We need to set two loader into express-controller-middleware.

```js
const path = require('path');
const babelRegister = require('babel-register');
const ControllerMiddleware = require('express-controller-middleware');
const ControllerLoader = require('express-common-controller').ControllerLoader;
const ControllerActionLoader = require('express-common-controller').ControllerActionLoader;

const middleware = new ControllerMiddleware();

middleware.setControllerPath(path.join(__dirname, './controllers'));
middleware.setControllerLoader(new ControllerLoader());
middleware.setActionLoader(new ControllerActionLoader());

middleware.get('/hello', 'HelloController#index');

module.exports = middleware;
```

### Third step:

Using middleware in server.js

```js
const express = require('express');
const controllerMiddleware = require('./js/controller-middleware');
const app = express();

app.use(controllerMiddleware);

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
