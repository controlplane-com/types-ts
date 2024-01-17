/* auto-generated */


export type GoDuration = string;

export interface Labels {
  [x: string]: string;

}

export interface Taint {
  key?: string;

  value?: string;

  effect?: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute';

}

export type Taints = Taint[];

export type NodePoolName = string;

export type SshPublicKey = string;

export interface AutoscalerConfig {
  expander: ('random' | 'most-pods' | 'least-waste' | 'price' | 'priority')[];

  unneededTime: string;

  unreadyTime: string;

  utilizationThreshold: number;

}

export interface UnmanagedPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

}

export type PreInstallScript = string;

