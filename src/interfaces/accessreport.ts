/* auto-generated */

import { Links } from './base';

export interface PrincipalBinding {
  principalLink?: string;

  grantingPolicyLink?: string;

  grantedPermissions?: string[];

  match?: 'link' | 'query' | 'all';

}

export interface GrantedPermission {
  name?: string;

  description?: string;

  bindings?: PrincipalBinding[];

}

export interface AccessReport {
  kind?: 'accessreport';

  permissions?: GrantedPermission[];

  created?: Date;

  links?: Links;

}

