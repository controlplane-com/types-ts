/* auto-generated */

import { Labels, Taints, AutoscalerConfig } from './mk8sCommon';

export type PolicyArn = string;

export interface AssumeRoleLink {
  roleArn: string;

  externalId?: string;

  sessionNamePrefix?: string;

}

export interface Ami {
  recommended?: 'ubuntu/jammy-22.04' | 'ubuntu/jammy-22.04+nvidia' | 'ubuntu/focal-20.04' | 'ubuntu/focal-20.04+nvidia' | 'ubuntu/noble-24.04' | 'ubuntu/noble-24.04+nvidia' | 'ubuntu/bionic-18.04' | 'amazon/amzn2' | 'amazon/al2023';

  exact?: string;

}

export interface AwsPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  instanceTypes: string[];

  overrideImage?: Ami;

  bootDiskSize: number;

  minSize: number;

  maxSize: number;

  onDemandBaseCapacity: number;

  onDemandPercentageAboveBaseCapacity: number;

  spotAllocationStrategy?: 'lowest-price' | 'capacity-optimized' | 'capacity-optimized-prioritized' | 'price-capacity-optimized';

  subnetIds: string[];

  extraSecurityGroupIds?: string[];

}

export interface AwsProvider {
  region: 'af-south-1' | 'ap-east-1' | 'ap-northeast-1' | 'ap-northeast-2' | 'ap-northeast-3' | 'ap-south-1' | 'ap-south-2' | 'ap-southeast-1' | 'ap-southeast-2' | 'ap-southeast-3' | 'ap-southeast-4' | 'ca-central-1' | 'eu-central-1' | 'eu-central-2' | 'eu-north-1' | 'eu-south-1' | 'eu-south-2' | 'eu-west-1' | 'eu-west-2' | 'eu-west-3' | 'me-central-1' | 'me-south-1' | 'sa-east-1' | 'us-east-1' | 'us-east-2' | 'us-west-1' | 'us-west-2';

  awsTags?: {
  [x: string]: string;

};

  skipCreateRoles?: boolean;

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: 'vpc' | '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

  dnsForwarder?: string;

};

  preInstallScript?: string;

  image: {
  recommended?: 'ubuntu/jammy-22.04' | 'ubuntu/jammy-22.04+nvidia' | 'ubuntu/focal-20.04' | 'ubuntu/focal-20.04+nvidia' | 'ubuntu/noble-24.04' | 'ubuntu/noble-24.04+nvidia' | 'ubuntu/bionic-18.04' | 'amazon/amzn2' | 'amazon/al2023';

  exact?: string;

};

  deployRoleArn: string;

  deployRoleChain?: AssumeRoleLink[];

  vpcId: string;

  keyPair?: string;

  diskEncryptionKeyArn?: string;

  securityGroupIds?: string[];

  extraNodePolicies?: PolicyArn[];

  nodePools?: AwsPool[];

  autoscaler?: AutoscalerConfig;

}

export interface AwsProviderStatus {
  [x: string]: any;

}

