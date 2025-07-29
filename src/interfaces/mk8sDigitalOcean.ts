/* auto-generated */

import { Labels, Taints, PreInstallScript, SshPublicKey, AutoscalerConfig } from './mk8sCommon';

export type ValidTag = string;

export interface DigitalOceanPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  dropletSize: string;

  overrideImage?: string;

  minSize: number;

  maxSize: number;

}

export interface DigitalOceanProvider {
  region: 'ams3' | 'blr1' | 'fra1' | 'lon1' | 'nyc1' | 'nyc2' | 'nyc3' | 'sfo2' | 'sfo3' | 'sgp1' | 'syd1' | 'tor1';

  digitalOceanTags?: ValidTag[];

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

  dnsForwarder?: string;

};

  preInstallScript?: PreInstallScript;

  tokenSecretLink: string;

  vpcId: string;

  nodePools?: DigitalOceanPool[];

  image: string;

  sshKeys: string[];

  extraSshKeys?: SshPublicKey[];

  autoscaler?: AutoscalerConfig;

  reservedIPs?: string[];

}

export interface DigitalOceanProviderStatus {
  [x: string]: any;

}

