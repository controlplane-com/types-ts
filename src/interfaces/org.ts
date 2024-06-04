/* auto-generated */

import { S3Logging, CoralogixLogging, DatadogLogging, LogzioLogging, ElasticLogging, CloudWatchLogging, FluentdLogging, StackdriverLogging, SyslogLogging } from './orgLogging';
import { Tracing } from './tracing';
import { Name, Kind, Tags, Links } from './base';

export interface OrgStatus {
  accountLink?: string;

  active?: boolean;

}

export interface AuthConfig {
  domainAutoMembers?: string[];

  samlOnly?: boolean;

}

export interface ObservabilityConfig {
  logsRetentionDays?: number;

  metricsRetentionDays?: number;

  tracesRetentionDays?: number;

}

export interface ThreatDetection {
  enabled: boolean;

  minimumSeverity?: 'warning' | 'error' | 'critical';

  syslog?: {
  transport?: 'tcp' | 'udp';

  host: string;

  port: number;

};

}

export interface OrgSpec {
  logging?: {
  s3?: S3Logging;

  coralogix?: CoralogixLogging;

  datadog?: DatadogLogging;

  logzio?: LogzioLogging;

  elastic?: ElasticLogging;

  cloudWatch?: CloudWatchLogging;

  fluentd?: FluentdLogging;

  stackdriver?: StackdriverLogging;

  syslog?: SyslogLogging;

};

  extraLogging?: {
  s3?: S3Logging;

  coralogix?: CoralogixLogging;

  datadog?: DatadogLogging;

  logzio?: LogzioLogging;

  elastic?: ElasticLogging;

  cloudWatch?: CloudWatchLogging;

  fluentd?: FluentdLogging;

  stackdriver?: StackdriverLogging;

  syslog?: SyslogLogging;

}[];

  tracing?: Tracing;

  sessionTimeoutSeconds?: number;

  authConfig?: AuthConfig;

  observability?: ObservabilityConfig;

  security?: {
  threatDetection?: ThreatDetection;

};

}

export interface Org {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  spec?: OrgSpec;

  status?: OrgStatus;

}

export interface QuotaOverride {
  name: string;

  max: number;

}

export interface OrgConfig {
  awsPrivateLinks?: string[];

  gcpServiceConnects?: string[];

  quotaOverrides?: QuotaOverride[];

}

