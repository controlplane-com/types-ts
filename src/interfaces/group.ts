/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';
import { Query } from './query.js';

export interface Group {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  memberLinks?: string[];

  memberQuery?: Query;

  identityMatcher?: {
  expression: string;

  language: 'jmespath' | 'javascript';

};

  origin?: 'synthetic' | 'default' | 'builtin';

}

