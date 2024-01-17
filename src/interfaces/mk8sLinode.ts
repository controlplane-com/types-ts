/* auto-generated */

import { Labels, Taints, AutoscalerConfig } from './mk8sCommon';

export interface LinodePool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  serverType: 'g6-nanode-1' | 'g6-standard-1' | 'g6-standard-2' | 'g6-standard-4' | 'g6-standard-6' | 'g6-standard-8' | 'g6-standard-16' | 'g6-standard-20' | 'g6-standard-24' | 'g6-standard-32' | 'g7-highmem-1' | 'g7-highmem-2' | 'g7-highmem-4' | 'g7-highmem-8' | 'g7-highmem-16' | 'g6-dedicated-2' | 'g6-dedicated-4' | 'g6-dedicated-8' | 'g6-dedicated-16' | 'g6-dedicated-32' | 'g6-dedicated-48' | 'g6-dedicated-50' | 'g6-dedicated-56' | 'g6-dedicated-64' | 'g1-gpu-rtx6000-1' | 'g1-gpu-rtx6000-2' | 'g1-gpu-rtx6000-3' | 'g1-gpu-rtx6000-4';

  overrideImage?: string;

  minSize: number;

  maxSize: number;

}

export interface LinodeProvider {
  region: 'us-iad' | 'us-ord' | 'fr-par' | 'us-southeast' | 'us-east' | 'eu-west' | 'eu-central';

  tokenSecretLink: string;

  vlanCidr: string;

  firewall?: string;

  nodePools?: LinodePool[];

  image: string;

  authorizedUsers?: string[];

  autoscaler?: AutoscalerConfig;

}

export interface LinodeProviderStatus {
  [x: string]: any;

}

export interface LinodeJoinParams {
  ipAddress?: string;

  nodePoolName: string;

  [x: string]: any;

}

