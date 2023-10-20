/* auto-generated */

import { Labels, Taints } from './mk8sCommon';

export interface GenericPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

}

export interface GenericProvider {
  location: 'aws-eu-central-1' | 'aws-us-east-2' | 'aws-us-west-2' | 'gcp-me-west1' | 'gcp-us-east1';

  nodePools?: GenericPool[];

}

export interface GenericProviderStatus {
  [x: string]: any;

}

export interface GenericJoinParams {
  nodePoolName: string;

  [x: string]: any;

}

