import express = require('express');
import {GetPackApi} from './application';

let port = 5001; //or from a configuration file
let gp = new GetPackApi(express(), port);
gp.run();
console.info(`listening on ${port}`);
