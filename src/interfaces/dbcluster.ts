/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface ClusterSpec {
  externalAccessEnabled?: boolean;

  postgres: {
  version?: '12.8' | '13.4';

  storageGB: number;

  defaults?: {
  size: 'developer-2c-4g' | 'small-2c-8g' | 'standard-4c-16g' | 'large-8c-32g' | 'xlarge-16c-64g';

  instances: number;

};

  locations?: ({
  name?: string;

  writable?: boolean;

  size?: 'developer-2c-4g' | 'small-2c-8g' | 'standard-4c-16g' | 'large-8c-32g' | 'xlarge-16c-64g';

  instances?: number;

})[];

};

}

export interface ClusterStatus {
  parentId?: string;

  externalEndpoint?: string;

  [x: string]: any;

}

export interface DbCluster {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  spec?: ClusterSpec;

  status?: ClusterStatus;

  alias?: string;

}

export interface DbClusterStatus {
  data?: ClusterStatus;

  lastModified?: Date;

  version?: number;

}

