import express = require("express");

let customerRouter = express.Router();
customerRouter.get('/', (request: express.Request, response: express.Response) => {
    let testData = {
        firstName: "The",
        lastName: "Burge"
    }

    response.send(testData);
});


export = customerRouter;