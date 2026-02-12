/* auto-generated */

import { Kind, Link } from './base.js';

export interface Query {
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

}

export interface QueryResult {
  kind?: 'queryresult';

  itemKind?: Kind;

  items: any[];

  links: Link[];

  query?: Query;

}

export interface Spec {
  match?: 'all' | 'any' | 'none';

  terms?: Term[];

  sort?: {
  by: string;

  order?: 'asc' | 'desc';

};

}

export interface Term {
  op?: '=' | '>' | '>=' | '<' | '<=' | '!=' | '~' | 'exists' | '!exists';

  property?: string;

  rel?: string;

  tag?: string;

  value?: string | number | boolean | Date;

}

