/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';
import { Query } from './query.js';

export interface Binding {
  permissions: string[];

  principalLinks: string[];

}

export interface Policy {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  targetKind?: Kind;

  targetLinks?: string[];

  targetQuery?: Query;

  target?: 'all';

  origin?: 'default' | 'builtin';

  bindings?: Binding[];

}

