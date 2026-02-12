/* auto-generated */

import { Kind, Links } from './base.js';

export interface PolicyMembership {
  kind?: Kind;

  policies?: PolicySummary[];

  links?: Links;

}

export interface PolicySummary {
  link?: string;

  description?: string;

  targetKind?: Kind;

}

