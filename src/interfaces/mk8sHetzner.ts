/* auto-generated */

import { Labels, Taints } from './mk8sCommon';

export interface DedicatedServerHetznerPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

}

export interface HetznerPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  serverType: string;

  overrideImage?: string;

  minSize: number;

  maxSize: number;

}

export interface HetznerProvider {
  region: 'fsn1' | 'nbg1' | 'hel1' | 'ash' | 'hil';

  tokenSecretLink: string;

  networkId: string;

  firewallId?: string;

  nodePools?: HetznerPool[];

  dedicatedServerNodePools?: DedicatedServerHetznerPool[];

  image: string;

  sshKey?: string;

}

export interface HetznerProviderStatus {
  [x: string]: any;

}

export interface HetznerJoinParams {
  ipAddress?: string;

  nodePoolName: string;

  [x: string]: any;

}

