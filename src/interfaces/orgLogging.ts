/* auto-generated */


export interface CloudWatchLogging {
  region: 'us-east-1' | 'us-east-2' | 'us-west-1' | 'us-west-2' | 'ap-south-1' | 'ap-northeast-2' | 'ap-southeast-1' | 'ap-southeast-2' | 'ap-northeast-1' | 'eu-central-1' | 'eu-west-1' | 'eu-west-2' | 'eu-south-1' | 'eu-west-3' | 'eu-north-1' | 'me-south-1' | 'sa-east-1' | 'af-south-1';

  credentials: string;

  retentionDays?: number;

  groupName: string;

  streamName: string;

  extractFields?: {
  [x: string]: string;

};

}

export interface CoralogixLogging {
  cluster: 'coralogix.com' | 'coralogix.us' | 'app.coralogix.in' | 'app.eu2.coralogix.com' | 'app.coralogixsg.com';

  credentials: string;

  app?: string;

  subsystem?: string;

}

export interface DatadogLogging {
  host: 'http-intake.logs.datadoghq.com' | 'http-intake.logs.us3.datadoghq.com' | 'http-intake.logs.us5.datadoghq.com' | 'http-intake.logs.datadoghq.eu';

  credentials: string;

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

export interface FluentdLogging {
  host: string;

  port?: number;

}

export interface LogzioLogging {
  listenerHost: 'listener.logz.io' | 'listener-nl.logz.io';

  credentials: string;

}

export interface OpenTelemetryLogging {
  endpoint: string;

  headers?: {
  [x: string]: string;

};

  credentials?: string;

}

export interface S3Logging {
  bucket: string;

  region: string;

  prefix?: string;

  credentials: string;

}

export interface StackdriverLogging {
  credentials: string;

  location: 'us-east1' | 'us-east4' | 'us-central1' | 'us-west1' | 'europe-west4' | 'europe-west1' | 'europe-west3' | 'europe-west2' | 'asia-east1' | 'asia-southeast1' | 'asia-northeast1' | 'asia-south1' | 'australia-southeast1' | 'southamerica-east1' | 'africa-south1' | 'asia-east2' | 'asia-northeast2' | 'asia-northeast3' | 'asia-south2' | 'asia-southeast2' | 'australia-southeast2' | 'europe-central2' | 'europe-north1' | 'europe-southwest1' | 'europe-west10' | 'europe-west12' | 'europe-west6' | 'europe-west8' | 'europe-west9' | 'me-central1' | 'me-central2' | 'me-west1' | 'northamerica-northeast1' | 'northamerica-northeast2' | 'southamerica-west1' | 'us-east5' | 'us-south1' | 'us-west2' | 'us-west3' | 'us-west4';

}

export interface SyslogLogging {
  host: string;

  port: number;

  mode: 'tcp' | 'udp' | 'tls';

  format: 'rfc3164' | 'rfc5424';

  severity: number;

}

