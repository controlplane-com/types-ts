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

  serverType: 'cx11' | 'cx21' | 'cx31' | 'cx41' | 'cx51' | 'ccx11' | 'ccx21' | 'ccx31' | 'ccx41' | 'ccx51' | 'cpx11' | 'cpx21' | 'cpx31' | 'cpx41' | 'cpx51' | 'ccx12' | 'ccx22' | 'ccx32' | 'ccx42' | 'ccx52' | 'ccx62' | 'cax11' | 'cax21' | 'cax31' | 'cax41';

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

