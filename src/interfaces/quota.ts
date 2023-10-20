/* auto-generated */

import { Kind, Name, Links } from './base';

export interface Quota {
  id?: string;

  kind?: Kind;

  version?: number;

  description?: string;

  name?: Name;

  unit?: string;

  dimensions?: {
  [x: string]: any;

};

  max?: number;

  created?: Date;

  lastModified?: Date;

  current?: number;

  origin?: 'default' | 'builtin';

  links?: Links;

}

