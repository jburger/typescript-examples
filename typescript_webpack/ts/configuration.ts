export interface IConfiguration {
    serviceUrl: string;
    welcomeMessage: string;
}

export class DevelopmentConfig implements IConfiguration {
  serviceUrl:string = "http://tempuri.org/api";
  welcomeMessage: string = "Hello world";
}
