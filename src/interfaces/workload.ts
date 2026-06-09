/* auto-generated */

import { EnvVar } from './env.js';
import { Regex, Kind, Tags, Links } from './base.js';
import { VolumeSpec } from './volumeSpec.js';
import { DefaultOptions, LocalOptions } from './workloadOptions.js';
import { AccessLog } from './envoyAccessLog.js';
import { Cluster } from './envoyCluster.js';
import { ExcExtAuth, ExcludedRateLimit } from './envoyExcExtAuth.js';
import { HttpFilter } from './envoyHttp.js';

export interface ContainerOverride {
  name: string;

  env?: EnvVar[];

  command?: string;

  args?: string[];

  memory?: string;

  cpu?: string;

  image?: string;

}

export interface ContainerSpec {
  name?: string;

  image?: string;

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

  periodSeconds?: number;

  timeoutSeconds?: number;

  successThreshold?: number;

  failureThreshold?: number;

  initialDelaySeconds?: number;

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

export type Cpu = string;

export interface Extras {
  affinity?: any;

  tolerations?: any[];

  topologySpreadConstraints?: any[];

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

export interface HeaderFilter {
  key: string;

  allowedValues?: Regex[];

  blockedValues?: Regex[];

}

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

export interface HealthCheckStatus {
  active: boolean;

  success?: boolean;

  code?: number;

  message?: string;

  failures?: number;

  successes?: number;

  lastChecked?: Date;

}

export interface JobSpec {
  schedule: string;

  concurrencyPolicy?: 'Forbid' | 'Replace' | 'Allow';

  historyLimit?: number;

  restartPolicy?: 'OnFailure' | 'Never';

  activeDeadlineSeconds?: number;

}

export interface LivenessProbe {
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

  periodSeconds?: number;

  timeoutSeconds?: number;

  successThreshold?: number;

  failureThreshold?: number;

  initialDelaySeconds?: number;

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

export interface LoadBalancerStatus {
  origin?: string;

  url?: string;

}

export type Memory = string;

export interface PodZoneMap {
  [x: string]: string;

}

export interface ReadinessProbe {
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

export interface RequestRetryPolicy {
  attempts?: number;

  retryOn?: string[];

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

export interface RolloutOptions {
  minReadySeconds?: number;

  maxUnavailableReplicas?: string;

  maxSurgeReplicas?: string;

  scalingPolicy?: 'OrderedReady' | 'Parallel';

  terminationGracePeriodSeconds?: number;

}

export type ScheduleType = string;

export interface SecurityOptions {
  filesystemGroupId?: number;

  runAsUser?: number;

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

  health?: WorkloadHealth;

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
  schedule: string;

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

  rolloutOptions?: {
  minReadySeconds?: number;

  maxUnavailableReplicas?: string;

  maxSurgeReplicas?: string;

  scalingPolicy?: 'OrderedReady' | 'Parallel';

  terminationGracePeriodSeconds?: number;

};

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

  vm?: {
  bootDisk?: {
  source?: {
  oci?: {
  image: string;

};

  http?: {
  url: string;

  checksum?: string;

};

};

  persist?: {
  volumeSet: string;

};

  bus?: 'virtio' | 'sata' | 'scsi';

  bootOrder?: number;

};

  cpu?: {
  sockets?: number;

  threads?: number;

};

  firmware?: {
  bootloader?: 'bios' | 'efi';

  secureBoot?: boolean;

  uuid?: string;

  serial?: string;

  smbios?: {
  manufacturer?: string;

  product?: string;

  version?: string;

  sku?: string;

  family?: string;

};

};

  guestOS?: 'linux' | 'windows';

  networks?: {
  name?: string;

}[];

  cloudInit?: {
  userData?: string;

  userDataBase64?: string;

  userDataSecret?: string;

  sshPublicKeySecrets?: string[];

};

  accessCredentials?: ({
  sshPublicKeySecret: string;

  users: string[];

  deliveryMethod?: 'qemuGuestAgent' | 'configDrive';

})[];

  runStrategy?: 'Always' | 'RerunOnFailure' | 'Manual' | 'Halted';

  features?: {
  acpi?: boolean;

  apic?: boolean;

  smm?: boolean;

  rng?: boolean;

  tpm?: {
  enabled?: boolean;

  persistent?: boolean;

};

};

  clock?: {
  timezone?: string;

};

  hostname?: string;

  subdomain?: string;

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

  suspendedStatus?: string;

  [x: string]: any;

};

}

export interface WorkloadHealth {
  readiness?: string;

  syncFailed?: boolean;

  readyLocations?: number;

  totalLocations?: number;

  readyReplicas?: number;

  totalReplicas?: number;

}

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
  schedule: string;

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

  rolloutOptions?: {
  minReadySeconds?: number;

  maxUnavailableReplicas?: string;

  maxSurgeReplicas?: string;

  scalingPolicy?: 'OrderedReady' | 'Parallel';

  terminationGracePeriodSeconds?: number;

};

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

  vm?: {
  bootDisk?: {
  source?: {
  oci?: {
  image: string;

};

  http?: {
  url: string;

  checksum?: string;

};

};

  persist?: {
  volumeSet: string;

};

  bus?: 'virtio' | 'sata' | 'scsi';

  bootOrder?: number;

};

  cpu?: {
  sockets?: number;

  threads?: number;

};

  firmware?: {
  bootloader?: 'bios' | 'efi';

  secureBoot?: boolean;

  uuid?: string;

  serial?: string;

  smbios?: {
  manufacturer?: string;

  product?: string;

  version?: string;

  sku?: string;

  family?: string;

};

};

  guestOS?: 'linux' | 'windows';

  networks?: {
  name?: string;

}[];

  cloudInit?: {
  userData?: string;

  userDataBase64?: string;

  userDataSecret?: string;

  sshPublicKeySecrets?: string[];

};

  accessCredentials?: ({
  sshPublicKeySecret: string;

  users: string[];

  deliveryMethod?: 'qemuGuestAgent' | 'configDrive';

})[];

  runStrategy?: 'Always' | 'RerunOnFailure' | 'Manual' | 'Halted';

  features?: {
  acpi?: boolean;

  apic?: boolean;

  smm?: boolean;

  rng?: boolean;

  tpm?: {
  enabled?: boolean;

  persistent?: boolean;

};

};

  clock?: {
  timezone?: string;

};

  hostname?: string;

  subdomain?: string;

};

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

  suspendedStatus?: string;

  [x: string]: any;

}

export type WorkloadType = 'serverless' | 'standard' | 'cron' | 'stateful' | 'vm';

