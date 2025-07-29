/* auto-generated */

import { Labels, Taints, AutoscalerConfig, UnmanagedPool, PreInstallScript } from './mk8sCommon';

export interface PaperspacePool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  minSize: number;

  maxSize: number;

  publicIpType: 'none' | 'dynamic' | 'static';

  bootDiskSize?: number;

  machineType: 'A100' | 'A100-80G' | 'A100-80Gx2' | 'A100-80Gx4' | 'A100-80Gx8' | 'A100x2' | 'A100x4' | 'A100x8' | 'A4000' | 'A4000x2' | 'A4000x4' | 'A5000' | 'A5000x2' | 'A5000x4' | 'A6000' | 'A6000x2' | 'A6000x4' | 'C10' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7' | 'C8' | 'C9' | 'GPU+' | 'P4000' | 'P4000x2' | 'P4000x4' | 'P5000' | 'P5000x2' | 'P6000' | 'P6000x2' | 'RTX4000' | 'RTX5000' | 'RTX5000x2' | 'V100' | 'V100-32G' | 'V100-32Gx2' | 'V100-32Gx4';

}

export interface PaperspaceProvider {
  region: 'AMS1' | 'NY2' | 'CA1';

  tokenSecretLink: string;

  sharedDrives?: string[];

  nodePools?: PaperspacePool[];

  autoscaler?: AutoscalerConfig;

  unmanagedNodePools?: UnmanagedPool[];

  preInstallScript?: PreInstallScript;

  userIds?: string[];

  networkId: string;

}

export interface PaperspaceProviderStatus {
  [x: string]: any;

}

export interface PaperspaceJoinParams {
  nodePoolName: string;

  [x: string]: any;

}

