import express = require('express');
import {WebApi} from './application';

let port = 5001; //or from a configuration file
let gp = new WebApi(express(), port);
gp.run();
console.info(`listening on ${port}`);
