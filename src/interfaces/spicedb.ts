/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface ClusterSpec {
  version?: '1.14.1';

  locations?: string[];

}

export interface ClusterStatus {
  externalEndpoint?: string;

  [x: string]: any;

}

export interface SpicedbCluster {
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
  version?: '1.14.1';

  locations?: string[];

};

  alias?: string;

  status?: ClusterStatus;

}

