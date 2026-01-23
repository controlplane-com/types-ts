/* auto-generated */

import { Regex, Kind, Tags, Links } from './base';
import { EnvVar } from './env';
import { VolumeSpec } from './volumeSpec';
import { DefaultOptions, LocalOptions } from './workloadOptions';
import { AccessLog } from './envoyAccessLog';
import { Cluster } from './envoyCluster';
import { ExcExtAuth, ExcludedRateLimit } from './envoyExcExtAuth';
import { HttpFilter } from './envoyHttp';

export type Memory = string;

export type Cpu = string;

export interface HealthCheckSpec {
  exec?: {
  command?: string[];

};

  grpc?: {
  port?: number;

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

  terminationGracePeriodSeconds?: number;

}

export interface RolloutOptionsStateful {
  minReadySeconds?: number;

  maxSurgeReplicas?: string;

  scalingPolicy?: 'OrderedReady' | 'Parallel';

  terminationGracePeriodSeconds?: number;

  maxUnavailableReplicas?: string;

}

export interface SecurityOptions {
  filesystemGroupId?: number;

  runAsUser?: number;

}

export interface GpuResource {
  nvidia?: {
  model?: any;

  quantity?: number;

};

  custom?: {
  resource: string;

  runtimeClass?: string;

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

  dropMetrics?: Regex[];

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
  port?: number;

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
  port?: number;

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
  nvidia?: {
  model?: any;

  quantity?: number;

};

  custom?: {
  resource: string;

  runtimeClass?: string;

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

export interface LoadBalancerStatus {
  origin?: string;

  url?: string;

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

  nextRetryAt?: Date;

  images?: ResolvedImage[];

}

export interface WorkloadStatus {
  parentId?: string;

  canonicalEndpoint?: string;

  endpoint?: string;

  internalName?: string;

  replicaInternalNames?: string[];

  healthCheck?: {
  active: boolean;

  success?: boolean;

  code?: number;

  message?: string;

  failures?: number;

  successes?: number;

  lastChecked?: Date;

};

  currentReplicaCount?: number;

  resolvedImages?: {
  resolvedForVersion?: number;

  resolvedAt?: Date;

  errorMessages?: string[];

  nextRetryAt?: Date;

  images?: ResolvedImage[];

};

  loadBalancer?: LoadBalancerStatus[];

  [x: string]: any;

}

export interface HeaderFilter {
  key: string;

  allowedValues?: Regex[];

  blockedValues?: Regex[];

}

export interface FirewallSpec {
  external?: {
  inboundAllowCIDR?: string[];

  inboundBlockedCIDR?: string[];

  outboundAllowHostname?: string[];

  outboundAllowPort?: ({
  protocol: 'http' | 'https' | 'tcp';

  number: number;

})[];

  outboundAllowCIDR?: string[];

  outboundBlockedCIDR?: string[];

  http?: {
  inboundHeaderFilter?: HeaderFilter[];

};

};

  internal?: {
  inboundAllowType?: 'none' | 'same-gvc' | 'same-org' | 'workload-list';

  inboundAllowWorkload?: string[];

};

}

export type ScheduleType = string;

export interface JobSpec {
  schedule: ScheduleType;

  concurrencyPolicy?: 'Forbid' | 'Replace' | 'Allow';

  historyLimit?: number;

  restartPolicy?: 'OnFailure' | 'Never';

  activeDeadlineSeconds?: number;

}

export interface LoadBalancerPort {
  externalPort: number;

  protocol: 'TCP' | 'UDP';

  scheme?: 'http' | 'tcp' | 'https' | 'ws' | 'wss';

  containerPort?: number;

}

export interface LoadBalancerSpec {
  direct?: {
  enabled: boolean;

  ports?: LoadBalancerPort[];

  ipSet?: string;

};

  geoLocation?: {
  enabled?: boolean;

  headers?: {
  asn?: string;

  city?: string;

  country?: string;

  region?: string;

};

};

  replicaDirect?: boolean;

}

export interface Extras {
  affinity?: any;

  tolerations?: any[];

  topologySpreadConstraints?: any[];

}

export interface RequestRetryPolicy {
  attempts?: number;

  retryOn?: string[];

}

export type WorkloadType = 'serverless' | 'standard' | 'cron' | 'stateful';

export interface WorkloadSpec {
  type?: WorkloadType;

  identityLink?: string;

  containers: ContainerSpec[];

  firewallConfig?: {
  external?: {
  inboundAllowCIDR?: string[];

  inboundBlockedCIDR?: string[];

  outboundAllowHostname?: string[];

  outboundAllowPort?: ({
  protocol: 'http' | 'https' | 'tcp';

  number: number;

})[];

  outboundAllowCIDR?: string[];

  outboundBlockedCIDR?: string[];

  http?: {
  inboundHeaderFilter?: HeaderFilter[];

};

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

  concurrencyPolicy?: 'Forbid' | 'Replace' | 'Allow';

  historyLimit?: number;

  restartPolicy?: 'OnFailure' | 'Never';

  activeDeadlineSeconds?: number;

};

  sidecar?: {
  envoy?: {
  accessLog?: AccessLog[];

  clusters?: Cluster[];

  excludedExternalAuth?: ExcExtAuth[];

  excludedRateLimit?: ExcludedRateLimit[];

  http?: HttpFilter[];

  network?: any[];

  volumes?: VolumeSpec[];

};

};

  supportDynamicTags?: boolean;

  rolloutOptions?: any;

  securityOptions?: {
  filesystemGroupId?: number;

  runAsUser?: number;

};

  loadBalancer?: {
  direct?: {
  enabled: boolean;

  ports?: LoadBalancerPort[];

  ipSet?: string;

};

  geoLocation?: {
  enabled?: boolean;

  headers?: {
  asn?: string;

  city?: string;

  country?: string;

  region?: string;

};

};

  replicaDirect?: boolean;

};

  extras?: {
  affinity?: any;

  tolerations?: any[];

  topologySpreadConstraints?: any[];

};

  requestRetryPolicy?: {
  attempts?: number;

  retryOn?: string[];

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

  gvc?: string;

  spec: {
  type?: WorkloadType;

  identityLink?: string;

  containers: ContainerSpec[];

  firewallConfig?: {
  external?: {
  inboundAllowCIDR?: string[];

  inboundBlockedCIDR?: string[];

  outboundAllowHostname?: string[];

  outboundAllowPort?: ({
  protocol: 'http' | 'https' | 'tcp';

  number: number;

})[];

  outboundAllowCIDR?: string[];

  outboundBlockedCIDR?: string[];

  http?: {
  inboundHeaderFilter?: HeaderFilter[];

};

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

  concurrencyPolicy?: 'Forbid' | 'Replace' | 'Allow';

  historyLimit?: number;

  restartPolicy?: 'OnFailure' | 'Never';

  activeDeadlineSeconds?: number;

};

  sidecar?: {
  envoy?: {
  accessLog?: AccessLog[];

  clusters?: Cluster[];

  excludedExternalAuth?: ExcExtAuth[];

  excludedRateLimit?: ExcludedRateLimit[];

  http?: HttpFilter[];

  network?: any[];

  volumes?: VolumeSpec[];

};

};

  supportDynamicTags?: boolean;

  rolloutOptions?: any;

  securityOptions?: {
  filesystemGroupId?: number;

  runAsUser?: number;

};

  loadBalancer?: {
  direct?: {
  enabled: boolean;

  ports?: LoadBalancerPort[];

  ipSet?: string;

};

  geoLocation?: {
  enabled?: boolean;

  headers?: {
  asn?: string;

  city?: string;

  country?: string;

  region?: string;

};

};

  replicaDirect?: boolean;

};

  extras?: {
  affinity?: any;

  tolerations?: any[];

  topologySpreadConstraints?: any[];

};

  requestRetryPolicy?: {
  attempts?: number;

  retryOn?: string[];

};

};

  status?: {
  parentId?: string;

  canonicalEndpoint?: string;

  endpoint?: string;

  internalName?: string;

  replicaInternalNames?: string[];

  healthCheck?: {
  active: boolean;

  success?: boolean;

  code?: number;

  message?: string;

  failures?: number;

  successes?: number;

  lastChecked?: Date;

};

  currentReplicaCount?: number;

  resolvedImages?: {
  resolvedForVersion?: number;

  resolvedAt?: Date;

  errorMessages?: string[];

  nextRetryAt?: Date;

  images?: ResolvedImage[];

};

  loadBalancer?: LoadBalancerStatus[];

  [x: string]: any;

};

}

