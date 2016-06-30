///<reference path="./typings/main.d.ts"/>
import express = require("express");
import customerRoute = require("./routes/customerRoute");
import requestLogger = require("./middleware/requestLogger");

export class WebApi {
    /**
     * @param app - express application
     * @param port - port to listen on
     */
    constructor(private app: express.Express, private port: number) {
        this.configureMiddleware(app);
        this.configureRoutes(app);
    }

    private configureMiddleware(app: express.Express) {
        app.use(requestLogger);
    }

    private configureRoutes(app: express.Express) {
        app.use("/customer", customerRoute );
    }

    public run() {
        this.app.listen(this.port);  
    }
}