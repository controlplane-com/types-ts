/* auto-generated */

import { S3Logging, CoralogixLogging, DatadogLogging, LogzioLogging, ElasticLogging, CloudWatchLogging, FluentdLogging, StackdriverLogging, SyslogLogging, OpenTelemetryLogging } from './orgLogging';
import { Tracing } from './tracing';
import { Kind, Tags, Links } from './base';

export interface OrgStatus {
  accountLink?: string;

  active?: boolean;

  endpointPrefix?: string;

}

export interface AuthConfig {
  domainAutoMembers?: string[];

  samlOnly?: boolean;

}

export interface ObservabilityConfig {
  logsRetentionDays?: number;

  metricsRetentionDays?: number;

  tracesRetentionDays?: number;

  defaultAlertEmails?: string[];

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

  opentelemetry?: OpenTelemetryLogging;

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

  opentelemetry?: OpenTelemetryLogging;

}[];

  tracing?: Tracing;

  sessionTimeoutSeconds?: number;

  authConfig?: AuthConfig;

  observability?: {
  logsRetentionDays?: number;

  metricsRetentionDays?: number;

  tracesRetentionDays?: number;

  defaultAlertEmails?: string[];

};

  security?: {
  threatDetection?: ThreatDetection;

};

}

export interface Org {
  id?: string;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  name?: string;

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

