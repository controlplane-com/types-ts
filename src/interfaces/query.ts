/* auto-generated */

import { Kind, Link } from './base';

export interface Term {
  op?: '=' | '>' | '>=' | '<' | '<=' | '!=' | '~' | 'exists' | '!exists';

  property?: string;

  rel?: string;

  tag?: string;

  value?: string | number | boolean | Date;

}

export interface Spec {
  match?: 'all' | 'any' | 'none';

  terms?: Term[];

  sort?: {
  by: string;

  order?: 'asc' | 'desc';

};

}

export interface Query {
  kind?: Kind;

  context?: {
  [x: string]: any;

};

  fetch?: 'links' | 'items';

  spec?: Spec;

}

export interface QueryResult {
  kind?: 'queryresult';

  itemKind?: Kind;

  items: any[];

  links: Link[];

  query?: Query;

}

