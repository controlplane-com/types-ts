/* auto-generated */

import { Labels, Taints, SshPublicKey, AutoscalerConfig } from './mk8sCommon';

export interface Image {
  recommended?: 'ubuntu/noble-24.04' | 'ubuntu/jammy-22.04' | 'ubuntu/focal-20.04' | 'debian/bookworm-12' | 'debian/bullseye-11';

  reference?: {
  publisher: string;

  offer: string;

  sku: string;

  version: string;

};

}

export interface AzurePool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  size: string;

  subnetId: string;

  zones: number[];

  overrideImage?: Image;

  bootDiskSize: number;

  minSize: number;

  maxSize: number;

}

export interface AzureProvider {
  location: 'centralus' | 'eastus2' | 'eastus' | 'southcentralus';

  subscriptionId: string;

  sdkSecretLink: string;

  resourceGroup: string;

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

  dnsForwarder?: string;

};

  preInstallScript?: string;

  image: {
  recommended?: 'ubuntu/noble-24.04' | 'ubuntu/jammy-22.04' | 'ubuntu/focal-20.04' | 'debian/bookworm-12' | 'debian/bullseye-11';

  reference?: {
  publisher: string;

  offer: string;

  sku: string;

  version: string;

};

};

  sshKeys: SshPublicKey[];

  networkId: string;

  tags?: {
  [x: string]: string;

};

  nodePools?: AzurePool[];

  autoscaler?: AutoscalerConfig;

}

export interface AzureProviderStatus {
  [x: string]: any;

}

