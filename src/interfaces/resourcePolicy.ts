/* auto-generated */

import { Kind, Links } from './base.js';

export interface ResourcePolicy {
  id?: string;

  kind?: Kind;

  version?: number;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  bindings?: {
  permissions: string[];

  principalLinks?: string[];

}[];

}

