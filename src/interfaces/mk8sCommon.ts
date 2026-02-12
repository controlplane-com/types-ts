/* auto-generated */


export interface AutoscalerConfig {
  expander?: ('random' | 'most-pods' | 'least-waste' | 'price')[];

  unneededTime?: string;

  unreadyTime?: string;

  utilizationThreshold?: number;

}

export interface CacertsRes {
  cacerts?: string;

}

export type GoDuration = string;

export interface InitBody {
  [x: string]: any;

}

export interface InitRes {
  script?: string;

}

export interface JoinBody {
  [x: string]: any;

}

export interface JoinRes {
  script?: string;

}

export interface KubeConfigBody {
  [x: string]: any;

}

export interface KubeConfigRes {
  kubeconfig?: string;

  fileName?: string;

}

export interface Labels {
  [x: string]: string;

}

export type NodePoolName = string;

export type PreInstallScript = string;

export interface ReadyRes {
  ready?: boolean;

  message?: string;

}

export type SshPublicKey = string;

export interface Taint {
  key?: string;

  value?: string;

  effect?: 'NoSchedule' | 'PreferNoSchedule' | 'NoExecute';

}

export type Taints = Taint[];

export interface UnmanagedPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

}

