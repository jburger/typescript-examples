///<reference path="../typings/main.d.ts"/>
import $ = require('jquery');
import {
  IConfiguration,
  DevelopmentConfig
} from './configuration';
import {
  IService,
  IEndpointResponse,
  EndpointService
} from './services';

export class Program {
  private _config : IConfiguration;
  private _endpoint : IService;

  constructor(config? : IConfiguration, endpoint? : IService) {
      this._config = config;
      this._endpoint = endpoint;
  }

  Run() {
    $('#welcome-message').text(this._config.welcomeMessage);
    let response : IEndpointResponse = this._endpoint.Get();
    /* uncomment to see source maps in action
    *throw new Error('boo');
    */
    $('#data').text(response.data.foo);
  }
}

//todo: DI
const config = new DevelopmentConfig();
const service = new EndpointService(config);
const app = new Program(config, service);

$(() => app.Run());
