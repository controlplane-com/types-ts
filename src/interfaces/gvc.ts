/* auto-generated */

import { Query } from './query';
import { Tracing } from './tracing';
import { EnvoyFilters } from './envoy';
import { EnvVar } from './env';
import { Name, Kind, Tags, Links } from './base';

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

  endpointNamingFormat?: 'default' | 'org';

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

  loadBalancer?: {
  minScale?: number;

};

  thinProvision?: number;

  largeDiskSize?: string;

  capacityAI?: {
  memToCpuRatio?: number;

};

}

