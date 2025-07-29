/* auto-generated */

import { Labels, Taints, PreInstallScript, SshPublicKey, AutoscalerConfig } from './mk8sCommon';

export interface TritonPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  packageId: string;

  overrideImageId?: string;

  publicNetworkId?: string;

  privateNetworkIds?: string[];

  tritonTags?: {
  [x: string]: string;

};

  minSize: number;

  maxSize: number;

}

export interface Manual {
  packageId: string;

  imageId: string;

  publicNetworkId: string;

  privateNetworkIds?: string[];

  metadata?: {
  [x: string]: string;

};

  tags?: {
  [x: string]: string;

};

  logging?: {
  nodePort?: number;

  externalSyslog?: string;

};

  count: number;

  cnsInternalDomain: string;

  cnsPublicDomain: string;

}

export interface LoadBalancerConfig {
  manual?: Manual;

  gateway?: {
};

}

export interface SdcConnection {
  url: string;

  account: string;

  user?: string;

  privateKeySecretLink: string;

}

export interface TritonProvider {
  connection: {
  url: string;

  account: string;

  user?: string;

  privateKeySecretLink: string;

};

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

  dnsForwarder?: string;

};

  preInstallScript?: PreInstallScript;

  location: 'aws-eu-central-1' | 'aws-us-east-2' | 'aws-us-west-2' | 'gcp-me-west1' | 'gcp-us-east1';

  loadBalancer?: LoadBalancerConfig;

  privateNetworkId: string;

  firewallEnabled?: boolean;

  nodePools?: TritonPool[];

  imageId: string;

  sshKeys?: SshPublicKey[];

  autoscaler?: AutoscalerConfig;

}

export interface TritonProviderStatus {
  [x: string]: any;

}

export interface TritonJoinParams {
  nodePoolName: string;

  [x: string]: any;

}

