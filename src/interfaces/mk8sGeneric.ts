/* auto-generated */

import { Labels, Taints } from './mk8sCommon';

export interface GenericPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

}

export interface GenericProvider {
  location: 'aws-eu-central-1' | 'aws-us-east-2' | 'aws-us-west-2' | 'gcp-me-west1' | 'gcp-us-east1';

  networking?: {
  serviceNetwork?: '10.43.0.0/16' | '192.168.0.0/16';

  podNetwork?: '10.42.0.0/16' | '172.16.0.0/15' | '172.18.0.0/15' | '172.20.0.0/15' | '172.22.0.0/15' | '172.24.0.0/15' | '172.26.0.0/15' | '172.28.0.0/15' | '172.30.0.0/15';

};

  nodePools?: GenericPool[];

}

export interface GenericProviderStatus {
  [x: string]: any;

}

export interface GenericJoinParams {
  nodePoolName: string;

  [x: string]: any;

}

