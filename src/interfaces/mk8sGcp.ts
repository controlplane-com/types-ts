/* auto-generated */

import { Labels, Taints, AutoscalerConfig } from './mk8sCommon';

export interface Image {
  recommended?: 'ubuntu-2004-lts' | 'ubuntu-2204-lts' | 'ubuntu-2404-lts';

  exact?: string;

}

export interface GcpPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  instanceType: string;

  overrideImage?: Image;

  bootDiskSize: number;

  minSize: number;

  maxSize: number;

  subnetId: string;

  zones?: string[];

  targetShape?: 'ANY' | 'BALANCED' | 'CLOSEST_TO_HEALTHY';

  extraSecurityGroupIds?: string[];

}

export interface GcpProvider {
  region: 'africa-south1' | 'asia-east1' | 'asia-east2' | 'asia-northeast1' | 'asia-northeast2' | 'asia-northeast3' | 'asia-south1' | 'asia-south2' | 'asia-southeast1' | 'asia-southeast2' | 'australia-southeast1' | 'australia-southeast2' | 'europe-central2' | 'europe-north1' | 'europe-southwest1' | 'europe-west1' | 'europe-west10' | 'europe-west12' | 'europe-west2' | 'europe-west3' | 'europe-west4' | 'europe-west6' | 'europe-west8' | 'europe-west9' | 'me-central1' | 'me-central2' | 'me-west1' | 'northamerica-northeast1' | 'northamerica-northeast2' | 'southamerica-east1' | 'southamerica-west1' | 'us-central1' | 'us-east1' | 'us-east4' | 'us-east5' | 'us-south1' | 'us-west1' | 'us-west2' | 'us-west3' | 'us-west4';

  gcpTags?: {
  [x: string]: string;

};

  skipCreateRoles?: boolean;

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: 'vpc' | '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

};

  preInstallScript?: string;

  image: {
  recommended?: 'ubuntu-2004-lts' | 'ubuntu-2204-lts' | 'ubuntu-2404-lts';

  exact?: string;

};

  deployServiceAccount: string;

  vpcId: string;

  projectId: string;

  keyPair?: string;

  diskEncryptionKey?: string;

  nodePools?: GcpPool[];

  autoscaler?: AutoscalerConfig;

}

export interface GcpProviderStatus {
  [x: string]: any;

}

