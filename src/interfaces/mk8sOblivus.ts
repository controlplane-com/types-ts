/* auto-generated */

import { UnmanagedPool } from './mk8sCommon';

export interface OblivusProvider {
  datacenter: 'CHI1' | 'NYC1' | 'LAS1';

  tokenSecretLink: string;

  unmanagedNodePools?: UnmanagedPool[];

}

export interface OblivusProviderStatus {
  [x: string]: any;

}

export interface OblivusJoinParams {
  nodePoolName: string;

  [x: string]: any;

}

