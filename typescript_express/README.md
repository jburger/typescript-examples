

### to get this up and running
```bash
npm install
typings install
npm start
```

### tsconfig.json
_For configuring the behaviour of the typescript compiler_
```javascript
{
    "compilerOptions": {
        "module":"umd",
        "sourceMap": true,
        "noEmitOnError": true,
        "strictNullChecks": true
    },
    "exclude": [
        "node_modules/",
        "typings/"
    ]
}
```
**NOTE** You'll want to use [typings](https://npmjs.org/typings) to bring in nodejs & express definitions.

### application.ts
_Application Class_
```javascript
///<reference path="./typings/main.d.ts"/>
import express = require("express");
import customerRouter = require("./routes/customerRouter");
import requestLogger = require("./middleware/requestLogger");

export class WebApi {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    constructor(private app: express.Express, private port?: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    /**
     * @param app - express application
     */
    private configureMiddleware(app: express.Express) {
        app.use(requestLogger);
    }

    private configureRoutes(app: express.Express) {
        app.use("/customer", customerRouter );
    }

    public run() {
        this.app.listen(this.port);  
    }
}
```

### routes/customerRouter.ts
_Example express Router implementation_
```javascript
import express = require("express")

let router = express.Router();
router.get('/', (req, res) => {
    let testData = {
        firstName: "Jim",
        lastName: "Burger"
    }
    res.send(testData);
});

export = router;
```
### middleware/requestLogger.ts
_Example custom middleware_
```javascript
import express = require("express");

let requestLogger: express.RequestHandler = (
    request: express.Request, 
    response: express.Response, 
    next: express.NextFunction
) => {
    console.info(`${(new Date()).toUTCString()}|${request.method}|${request.url}|${request.ip}`);
    next();
}

export = requestLogger;
```
### index.ts
_Program entry point_
```javascript
import express = require('express');
import { WebApi } from './application';

let port = 5001; //or from a configuration file
let api = new WebApi(express(), port);
api.run();
console.info(`listening on ${port}`);
```
