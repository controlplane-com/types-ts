/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';

export interface Tenant {
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
  orgs?: Name[];

  clusters?: Name[];

};

}

export interface TenantSpec {
  orgs?: Name[];

  clusters?: Name[];

}

