/* auto-generated */

import { Links } from './base';

export interface Permission {
  name: string;

  description?: string;

}

export interface Permissions {
  links?: Links;

  kind: 'permissions';

  targetKind: 'org' | 'cloudaccount' | 'policy' | 'user' | 'group' | 'resource' | 'task' | 'permissions' | 'serviceaccount' | 'secret' | 'location' | 'gvc' | 'workload' | 'quota' | 'identity' | 'deployment' | 'event' | 'domain' | 'image' | 'ipset' | 'resourcepolicy' | 'agent' | 'accessreport' | 'policymembership' | 'dbcluster' | 'auditctx' | 'memcachecluster' | 'spicedbcluster' | 'tenant' | 'mk8s' | 'command' | 'imagesummary' | 'volumeset';

  items: Permission[];

  implied?: {
  [x: string]: any;

};

}

