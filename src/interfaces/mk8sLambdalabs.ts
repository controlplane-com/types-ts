/* auto-generated */

import { Labels, Taints, UnmanagedPool, AutoscalerConfig, PreInstallScript } from './mk8sCommon';

export interface LambdalabsPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  minSize: number;

  maxSize: number;

  instanceType: 'cpu_4x_general' | 'gpu_1x_a10' | 'gpu_1x_a100' | 'gpu_1x_a100_sxm4' | 'gpu_1x_a6000' | 'gpu_1x_h100_pcie' | 'gpu_1x_rtx6000' | 'gpu_2x_a100' | 'gpu_2x_a6000' | 'gpu_4x_a100' | 'gpu_4x_a6000' | 'gpu_8x_a100' | 'gpu_8x_a100_80gb_sxm4' | 'gpu_8x_h100_sxm5' | 'gpu_8x_v100';

}

export interface LambdalabsProvider {
  region: 'asia-northeast-1' | 'asia-northeast-2' | 'asia-south-1' | 'australia-southeast-1' | 'europe-central-1' | 'europe-south-1' | 'me-west-1' | 'us-east-1' | 'us-midwest-1' | 'us-south-1' | 'us-west-1' | 'us-west-2' | 'us-west-3';

  tokenSecretLink: string;

  nodePools?: LambdalabsPool[];

  sshKey: string;

  unmanagedNodePools?: UnmanagedPool[];

  autoscaler?: AutoscalerConfig;

  fileSystems?: string[];

  preInstallScript?: PreInstallScript;

}

export interface LambdalabsProviderStatus {
  [x: string]: any;

}

export interface LambdalabsJoinParams {
  nodePoolName: string;

  [x: string]: any;

}

