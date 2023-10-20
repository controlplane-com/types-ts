/* auto-generated */


export interface S3Logging {
  bucket: string;

  region: string;

  prefix?: string;

  credentials: string;

}

export interface DatadogLogging {
  host: 'http-intake.logs.datadoghq.com' | 'http-intake.logs.us3.datadoghq.com' | 'http-intake.logs.us5.datadoghq.com' | 'http-intake.logs.datadoghq.eu';

  credentials: string;

}

export interface LogzioLogging {
  listenerHost: 'listener.logz.io' | 'listener-nl.logz.io';

  credentials: string;

}

export interface CoralogixLogging {
  cluster: 'coralogix.com' | 'coralogix.us' | 'app.coralogix.in' | 'app.eu2.coralogix.com' | 'app.coralogixsg.com';

  credentials: string;

  app?: string;

  subsystem?: string;

}

export interface ElasticLogging {
  aws?: {
  host: string;

  port: number;

  index: string;

  type: string;

  credentials: string;

  region: string;

};

  elasticCloud?: {
  index: string;

  type: string;

  credentials: string;

  cloudId: string;

};

  generic?: {
  host: string;

  port?: number;

  path?: string;

  index: string;

  type: string;

  credentials: string;

  username?: string;

  password?: string;

};

}

