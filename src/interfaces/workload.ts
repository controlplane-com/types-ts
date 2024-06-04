/* auto-generated */

import { Port } from './port';
import { EnvVar } from './env';
import { VolumeSpec } from './volumeSpec';
import { DefaultOptions, LocalOptions } from './workloadOptions';
import { EnvoyFilters } from './envoy';
import { Kind, Tags, Links } from './base';

export type Memory = string;

export type Cpu = string;

export interface HealthCheckSpec {
  exec?: {
  command?: string[];

};

  grpc?: {
  port?: Port;

};

  tcpSocket?: {
  port?: number;

};

  httpGet?: {
  path?: string;

  port?: number;

  httpHeaders?: {
  name: string;

  value: string;

}[];

  scheme?: 'HTTP' | 'HTTPS';

};

  initialDelaySeconds?: number;

  periodSeconds?: number;

  timeoutSeconds?: number;

  successThreshold?: number;

  failureThreshold?: number;

}

export interface RolloutOptions {
  minReadySeconds?: number;

  maxUnavailableReplicas?: string;

  maxSurgeReplicas?: string;

  scalingPolicy?: 'OrderedReady' | 'Parallel';

}

export interface SecurityOptions {
  filesystemGroupId?: number;

}

export interface GpuResource {
  nvidia: {
  model?: any;

  quantity?: number;

};

}

export interface ContainerSpec {
  name?: string;

  image: string;

  workingDir?: string;

  metrics?: {
  port: number;

  path: string;

};

  port?: number;

  ports?: ({
  protocol?: 'http' | 'http2' | 'grpc' | 'tcp';

  number: number;

})[];

  memory?: string;

  readinessProbe?: {
  exec?: {
  command?: string[];

};

  grpc?: {
  port?: Port;

};

  tcpSocket?: {
  port?: number;

};

  httpGet?: {
  path?: string;

  port?: number;

  httpHeaders?: {
  name: string;

  value: string;

}[];

  scheme?: 'HTTP' | 'HTTPS';

};

  initialDelaySeconds?: number;

  periodSeconds?: number;

  timeoutSeconds?: number;

  successThreshold?: number;

  failureThreshold?: number;

};

  livenessProbe?: {
  exec?: {
  command?: string[];

};

  grpc?: {
  port?: Port;

};

  tcpSocket?: {
  port?: number;

};

  httpGet?: {
  path?: string;

  port?: number;

  httpHeaders?: {
  name: string;

  value: string;

}[];

  scheme?: 'HTTP' | 'HTTPS';

};

  initialDelaySeconds?: number;

  periodSeconds?: number;

  timeoutSeconds?: number;

  successThreshold?: number;

  failureThreshold?: number;

};

  cpu?: string;

  minCpu?: string;

  minMemory?: string;

  env?: EnvVar[];

  gpu?: {
  nvidia: {
  model?: any;

  quantity?: number;

};

};

  inheritEnv?: boolean;

  command?: string;

  args?: string[];

  lifecycle?: {
  postStart?: {
  exec?: {
  command?: string[];

};

};

  preStop?: {
  exec?: {
  command?: string[];

};

};

};

  volumes?: VolumeSpec[];

}

export interface HealthCheckStatus {
  active: boolean;

  success?: boolean;

  code?: number;

  message?: string;

  failures?: number;

  successes?: number;

  lastChecked?: Date;

}

export interface ResolvedImage {
  digest?: string;

  manifests?: {
  image: string;

  mediaType: string;

  digest: string;

  platform?: {
  [x: string]: string;

};

}[];

}

export interface ResolvedImages {
  resolvedForVersion?: number;

  resolvedAt?: Date;

  errorMessages?: string[];

  images?: ResolvedImage[];

}

export interface WorkloadStatus {
  parentId?: string;

  canonicalEndpoint?: string;

  endpoint?: string;

  internalName?: string;

  healthCheck?: HealthCheckStatus;

  currentReplicaCount?: number;

  resolvedImages?: ResolvedImages;

  [x: string]: any;

}

export interface FirewallSpec {
  external?: {
  inboundAllowCIDR?: string[];

  outboundAllowHostname?: string[];

  outboundAllowPort?: ({
  protocol: 'http' | 'https' | 'tcp';

  number: number;

})[];

  outboundAllowCIDR?: string[];

};

  internal?: {
  inboundAllowType?: 'none' | 'same-gvc' | 'same-org' | 'workload-list';

  inboundAllowWorkload?: string[];

};

}

export type ScheduleType = string;

export interface JobSpec {
  schedule: ScheduleType;

  concurrencyPolicy?: 'Forbid' | 'Replace';

  historyLimit?: number;

  restartPolicy?: 'OnFailure' | 'Never';

  activeDeadlineSeconds?: number;

}

export interface WorkloadSpec {
  type?: 'serverless' | 'standard' | 'cron' | 'stateful';

  identityLink?: string;

  containers?: ContainerSpec[];

  firewallConfig?: {
  external?: {
  inboundAllowCIDR?: string[];

  outboundAllowHostname?: string[];

  outboundAllowPort?: ({
  protocol: 'http' | 'https' | 'tcp';

  number: number;

})[];

  outboundAllowCIDR?: string[];

};

  internal?: {
  inboundAllowType?: 'none' | 'same-gvc' | 'same-org' | 'workload-list';

  inboundAllowWorkload?: string[];

};

};

  defaultOptions?: DefaultOptions;

  localOptions?: LocalOptions;

  job?: {
  schedule: ScheduleType;

  concurrencyPolicy?: 'Forbid' | 'Replace';

  historyLimit?: number;

  restartPolicy?: 'OnFailure' | 'Never';

  activeDeadlineSeconds?: number;

};

  sidecar?: {
  envoy?: EnvoyFilters;

};

  supportDynamicTags?: boolean;

  rolloutOptions?: {
  minReadySeconds?: number;

  maxUnavailableReplicas?: string;

  maxSurgeReplicas?: string;

  scalingPolicy?: 'OrderedReady' | 'Parallel';

};

  securityOptions?: {
  filesystemGroupId?: number;

};

}

export interface Workload {
  id?: string;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  name?: string;

  gvc?: any;

  spec?: WorkloadSpec;

  status?: WorkloadStatus;

}

export interface WorkloadConfig {
  scheduling?: {
  fingerprint?: string;

  version?: number;

};

}

