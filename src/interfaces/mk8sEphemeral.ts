/* auto-generated */

import { Labels, Taints } from './mk8sCommon';

export interface EphemeralPool {
  name: string;

  labels?: Labels;

  taints?: Taints;

  count: number;

  arch: 'any' | 'arm64' | 'amd64';

  flavor: 'debian' | 'ubuntu' | 'fedora';

  cpu: string;

  memory: string;

}

export interface EphemeralProvider {
  location: 'aws-eu-central-1' | 'aws-us-east-2' | 'aws-us-west-2' | 'gcp-me-west1' | 'gcp-us-east1';

  nodePools?: EphemeralPool[];

}

export interface EphemeralProviderStatus {
  [x: string]: any;

}

