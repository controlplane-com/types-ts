/* auto-generated */

import { Labels, Taints } from './mk8sCommon';

export interface Ami {
  recommended?: 'ubuntu/jammy-22.04' | 'ubuntu/jammy-22.04+nvidia' | 'ubuntu/focal-20.04' | 'ubuntu/focal-20.04+nvidia' | 'ubuntu/bionic-18.04' | 'amazon/amzn2' | 'amazon/al2023';

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

  onDemandBaseCapacity?: number;

  onDemandPercentageAboveBaseCapacity?: number;

  spotAllocationStrategy?: 'lowest-price' | 'capacity-optimized' | 'capacity-optimized-prioritized' | 'price-capacity-optimized';

  subnetIds: string[];

  extraSecurityGroupIds?: string[];

}

export interface AwsProvider {
  region: 'af-south-1' | 'ap-east-1' | 'ap-northeast-1' | 'ap-northeast-2' | 'ap-northeast-3' | 'ap-south-1' | 'ap-south-2' | 'ap-southeast-1' | 'ap-southeast-2' | 'ap-southeast-3' | 'ap-southeast-4' | 'ca-central-1' | 'eu-central-1' | 'eu-central-2' | 'eu-north-1' | 'eu-south-1' | 'eu-south-2' | 'eu-west-1' | 'eu-west-2' | 'eu-west-3' | 'me-central-1' | 'me-south-1' | 'sa-east-1' | 'us-east-1' | 'us-east-2' | 'us-west-1' | 'us-west-2';

  skipCreateRoles?: boolean;

  image: {
  recommended?: 'ubuntu/jammy-22.04' | 'ubuntu/jammy-22.04+nvidia' | 'ubuntu/focal-20.04' | 'ubuntu/focal-20.04+nvidia' | 'ubuntu/bionic-18.04' | 'amazon/amzn2' | 'amazon/al2023';

  exact?: string;

};

  deployRoleArn: string;

  vpcId: string;

  keyPair?: string;

  diskEncryptionKeyArn?: string;

  securityGroupIds?: string[];

  nodePools?: AwsPool[];

}

export interface AwsProviderStatus {
  [x: string]: any;

}

