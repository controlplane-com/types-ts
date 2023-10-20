/* auto-generated */

import { Kind, Links } from './base';

export interface PolicySummary {
  link?: string;

  description?: string;

  targetKind?: Kind;

}

export interface PolicyMembership {
  kind?: Kind;

  policies?: PolicySummary[];

  links?: Links;

}

