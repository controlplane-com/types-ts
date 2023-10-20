/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface LocationSpec {
  enabled?: boolean;

}

export interface LocationStatus {
  geo?: {
  lat?: number;

  lon?: number;

  country?: string;

  state?: string;

  city?: string;

  continent?: string;

};

  ipRanges?: string[];

}

export interface Location {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  origin?: 'builtin' | 'default' | 'custom';

  provider?: 'aws' | 'gcp' | 'azure' | 'byok' | 'linode' | 'vultr' | 'equinix';

  region?: string;

  spec?: LocationSpec;

  status?: LocationStatus;

}

