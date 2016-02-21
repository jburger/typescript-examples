import { IConfiguration,  DevelopmentConfig } from './Configuration';

export interface IService {
    Get(): IEndpointResponse;
}

export interface IEndpointResponse {
    data: any;
    total: number;
}

export class EndpointService implements IService {
    private _config: IConfiguration;
    constructor(config: IConfiguration) {
        this._config = config;
    }

    Get(): IEndpointResponse {
        return <IEndpointResponse>{
          data: { 'foo':'bar' },
          total: 1
        }
    }
}
