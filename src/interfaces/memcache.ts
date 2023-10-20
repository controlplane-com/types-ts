/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface MemcacheOptions {
  evictionsDisabled?: boolean;

  idleTimeoutSeconds?: number;

  maxItemSizeKiB?: number;

  maxConnections?: number;

}

export interface ClusterSpec {
  nodeCount: number;

  nodeSizeGiB: number;

  version?: '1.6.17' | '1.5.22';

  options?: {
  evictionsDisabled?: boolean;

  idleTimeoutSeconds?: number;

  maxItemSizeKiB?: number;

  maxConnections?: number;

};

  locations?: string[];

}

export interface ClusterStatus {
  [x: string]: any;

}

export interface MemcacheCluster {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  spec: {
  nodeCount: number;

  nodeSizeGiB: number;

  version?: '1.6.17' | '1.5.22';

  options?: {
  evictionsDisabled?: boolean;

  idleTimeoutSeconds?: number;

  maxItemSizeKiB?: number;

  maxConnections?: number;

};

  locations?: string[];

};

  status?: ClusterStatus;

}

