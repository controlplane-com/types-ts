/* auto-generated */

import { Labels, Taints, UnmanagedPool, AutoscalerConfig, PreInstallScript } from './mk8sCommon';

export interface OblivusPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  minSize: number;

  maxSize: number;

  flavor: 'A100_NVLINK_80GB_x8' | 'A100_PCIE_80GB_x1' | 'A100_PCIE_80GB_x2' | 'A100_PCIE_80GB_x4' | 'A100_PCIE_80GB_x8' | 'H100_NVLINK_80GB_x8' | 'H100_PCIE_80GB_x1' | 'H100_PCIE_80GB_x2' | 'H100_PCIE_80GB_x4' | 'H100_PCIE_80GB_x8' | 'INTEL_XEON_V3_x16' | 'INTEL_XEON_V3_x4' | 'INTEL_XEON_V3_x8' | 'L40_x1' | 'L40_x2' | 'L40_x4' | 'L40_x8' | 'RTX_A4000_x1' | 'RTX_A4000_x2' | 'RTX_A4000_x4' | 'RTX_A4000_x8' | 'RTX_A5000_x1' | 'RTX_A5000_x2' | 'RTX_A5000_x4' | 'RTX_A5000_x8' | 'RTX_A6000_x1' | 'RTX_A6000_x2' | 'RTX_A6000_x4' | 'RTX_A6000_x8';

}

export interface OblivusProvider {
  datacenter: 'MON1' | 'OSL1';

  tokenSecretLink: string;

  nodePools?: OblivusPool[];

  sshKeys?: string[];

  unmanagedNodePools?: UnmanagedPool[];

  autoscaler?: AutoscalerConfig;

  preInstallScript?: PreInstallScript;

}

export interface OblivusProviderStatus {
  [x: string]: any;

}

export interface OblivusJoinParams {
  nodePoolName: string;

  [x: string]: any;

}

