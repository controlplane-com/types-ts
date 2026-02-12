/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';

export interface ServiceAccount {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  keys?: ServiceAccountKey[];

  origin?: 'default' | 'builtin';

}

export interface ServiceAccountKey {
  name?: string;

  created?: Date;

  key?: string;

  description: string;

}

