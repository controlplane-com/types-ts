/* auto-generated */

import { Query } from './query';
import { Tracing } from './tracing';
import { EnvoyFilters } from './envoy';
import { EnvVar } from './env';
import { Name, Kind, Tags, Links } from './base';
import { Memory } from './workload';

export interface GvcStatus {
  [x: string]: any;

}

export interface StaticPlacement {
  locationLinks?: string[];

  locationQuery?: Query;

}

export interface GvcSpec {
  staticPlacement?: StaticPlacement;

  pullSecretLinks?: string[];

  domain?: string;

  endpointNamingFormat?: 'default' | 'legacy' | 'org';

  tracing?: Tracing;

  sidecar?: {
  envoy?: EnvoyFilters;

};

  env?: EnvVar[];

  loadBalancer?: {
  dedicated?: boolean;

  multiZone?: {
  enabled?: boolean;

};

  trustedProxies?: number;

  redirect?: {
  class?: {
  status5xx?: string;

  status401?: string;

};

};

  ipSet?: string;

};

  keda?: {
  enabled?: boolean;

  identityLink?: string;

  secrets?: string[];

};

}

export interface Gvc {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  alias?: string;

  spec?: GvcSpec;

  status?: GvcStatus;

}

export interface GvcLoadBalancerConfig {
  minScale?: number;

  maxScale?: number;

  minCpu?: string;

  minMemory?: string;

  readinessProbe?: {
  timeoutSeconds?: number;

  failureThreshold?: number;

  successThreshold?: number;

};

  livenessProbe?: {
  timeoutSeconds?: number;

  failureThreshold?: number;

  successThreshold?: number;

};

}

export interface GvcConfig {
  clusters?: {
  [x: string]: {
  clusterId?: string;

  since?: Date;

};

};

  preferredClusters?: {
  [x: string]: {
  clusterId?: string;

};

};

  proxy?: {
  minCpu?: number;

};

  loadBalancer?: {
  minScale?: number;

  maxScale?: number;

  minCpu?: string;

  minMemory?: string;

  readinessProbe?: {
  timeoutSeconds?: number;

  failureThreshold?: number;

  successThreshold?: number;

};

  livenessProbe?: {
  timeoutSeconds?: number;

  failureThreshold?: number;

  successThreshold?: number;

};

};

  thinProvision?: number;

  largeDiskSize?: Memory;

  capacityAI?: {
  memToCpuRatio?: number;

};

}

