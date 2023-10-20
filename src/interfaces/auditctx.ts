/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface AuditContextStatus {
  [x: string]: any;

}

export interface AuditContext {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  status?: AuditContextStatus;

  origin?: 'default' | 'builtin';

}

