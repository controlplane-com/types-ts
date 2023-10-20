/* auto-generated */

import { Query } from './query';
import { Tracing } from './tracing';
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

  tracing?: Tracing;

  sidecar?: {
  envoy?: {
  [x: string]: any;

};

};

  env?: EnvVar[];

  loadBalancer?: {
  dedicated?: boolean;

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

}

