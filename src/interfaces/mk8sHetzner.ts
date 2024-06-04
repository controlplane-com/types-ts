/* auto-generated */

import { Labels, Taints, PreInstallScript, AutoscalerConfig } from './mk8sCommon';

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

  hetznerLabels?: {
  [x: string]: string;

};

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

};

  preInstallScript?: PreInstallScript;

  tokenSecretLink: string;

  networkId: string;

  firewallId?: string;

  nodePools?: HetznerPool[];

  dedicatedServerNodePools?: DedicatedServerHetznerPool[];

  image: string;

  sshKey?: string;

  autoscaler?: AutoscalerConfig;

}

export interface HetznerProviderStatus {
  [x: string]: any;

}

export interface HetznerJoinParams {
  ipAddress?: string;

  nodePoolName: string;

  [x: string]: any;

}

