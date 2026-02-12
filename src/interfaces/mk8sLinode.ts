/* auto-generated */

import { Labels, Taints, PreInstallScript, AutoscalerConfig } from './mk8sCommon.js';

export interface LinodeJoinParams {
  ipAddress?: string;

  nodePoolName: string;

  [x: string]: any;

}

export interface LinodePool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  serverType: string;

  overrideImage?: string;

  subnetId: string;

  minSize: number;

  maxSize: number;

}

export interface LinodeProvider {
  region: string;

  tokenSecretLink: string;

  firewallId?: string;

  nodePools?: LinodePool[];

  image: string;

  authorizedUsers?: string[];

  authorizedKeys?: string[];

  vpcId: string;

  preInstallScript?: PreInstallScript;

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

  dnsForwarder?: string;

};

  autoscaler?: AutoscalerConfig;

}

export interface LinodeProviderStatus {
  [x: string]: any;

}

