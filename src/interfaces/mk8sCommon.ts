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
  expander?: ('random' | 'most-pods' | 'least-waste' | 'price' | 'priority')[];

}

export interface UnmanagedPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

}

