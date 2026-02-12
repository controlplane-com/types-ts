/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';
import { Term } from './query.js';
import { TracingCustomTag } from './tracing.js';
import { EnvoyFilters } from './envoy.js';
import { EnvVar } from './env.js';
import { Memory } from './workload.js';

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

  spec?: {
  staticPlacement?: {
  locationLinks?: string[];

  locationQuery?: {
  kind?: Kind;

  context?: {
  [x: string]: any;

};

  fetch?: 'links' | 'items';

  spec?: {
  match?: 'all' | 'any' | 'none';

  terms?: Term[];

  sort?: {
  by: string;

  order?: 'asc' | 'desc';

};

};

};

};

  pullSecretLinks?: string[];

  domain?: string;

  endpointNamingFormat?: 'default' | 'legacy' | 'org';

  tracing?: {
  sampling: number;

  lightstep?: {
  endpoint: string;

  credentials?: string;

};

  customTags?: {
  [x: string]: TracingCustomTag;

};

  provider?: {
  otel?: {
  endpoint: string;

};

  lightstep?: {
  endpoint: string;

  credentials?: string;

};

  controlplane?: {
};

};

};

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

};

  status?: {
  [x: string]: any;

};

}

export interface GvcConfig {
  clusters?: {
  [x: string]: GvcConfigClusterEntry;

};

  preferredClusters?: {
  [x: string]: GvcConfigPreferredClusterEntry;

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

export interface GvcConfigClusterEntry {
  clusterId?: string;

  since?: Date;

}

export interface GvcConfigPreferredClusterEntry {
  clusterId?: string;

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

export interface GvcSpec {
  staticPlacement?: {
  locationLinks?: string[];

  locationQuery?: {
  kind?: Kind;

  context?: {
  [x: string]: any;

};

  fetch?: 'links' | 'items';

  spec?: {
  match?: 'all' | 'any' | 'none';

  terms?: Term[];

  sort?: {
  by: string;

  order?: 'asc' | 'desc';

};

};

};

};

  pullSecretLinks?: string[];

  domain?: string;

  endpointNamingFormat?: 'default' | 'legacy' | 'org';

  tracing?: {
  sampling: number;

  lightstep?: {
  endpoint: string;

  credentials?: string;

};

  customTags?: {
  [x: string]: TracingCustomTag;

};

  provider?: {
  otel?: {
  endpoint: string;

};

  lightstep?: {
  endpoint: string;

  credentials?: string;

};

  controlplane?: {
};

};

};

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

export interface GvcStatus {
  [x: string]: any;

}

export interface StaticPlacement {
  locationLinks?: string[];

  locationQuery?: {
  kind?: Kind;

  context?: {
  [x: string]: any;

};

  fetch?: 'links' | 'items';

  spec?: {
  match?: 'all' | 'any' | 'none';

  terms?: Term[];

  sort?: {
  by: string;

  order?: 'asc' | 'desc';

};

};

};

}

