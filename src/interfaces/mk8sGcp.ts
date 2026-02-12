/* auto-generated */

import { Labels, Taints, PreInstallScript, AutoscalerConfig } from './mk8sCommon.js';

export interface GcpPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  machineType: string;

  assignPublicIP?: boolean;

  zone: string;

  overrideImage?: Image;

  bootDiskSize: number;

  minSize: number;

  maxSize: number;

  preemptible?: boolean;

  subnet: string;

  localPersistentDisks?: number;

}

export interface GcpProvider {
  projectId: string;

  region: string;

  labels?: {
  [x: string]: string;

};

  tags?: string[];

  metadata?: {
  [x: string]: string;

};

  network: string;

  saKeyLink: string;

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: 'vpc' | '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

  dnsForwarder?: string;

};

  preInstallScript?: PreInstallScript;

  image: {
  recommended?: 'ubuntu/jammy-22.04' | 'ubuntu/noble-24.04' | 'debian/bookworm-12' | 'debian/trixie-13' | 'google/cos-stable';

  family?: {
  project: string;

  family: string;

};

  exact?: string;

};

  nodePools?: GcpPool[];

  autoscaler?: AutoscalerConfig;

}

export interface GcpProviderStatus {
  [x: string]: any;

}

export interface Image {
  recommended?: 'ubuntu/jammy-22.04' | 'ubuntu/noble-24.04' | 'debian/bookworm-12' | 'debian/trixie-13' | 'google/cos-stable';

  family?: {
  project: string;

  family: string;

};

  exact?: string;

}

