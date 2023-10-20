/* auto-generated */

import { Name, Kind, Tags, Links, CloudProvider } from './base';

export interface AwsConfig {
  roleArn: string;

}

export interface GcpConfig {
  projectId: string;

}

export interface NgsConfig {
  secretLink: string;

}

export interface AzureConfig {
  secretLink: string;

}

export interface CloudAccount {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  provider?: CloudProvider;

  data?: GcpConfig | AwsConfig | AzureConfig | NgsConfig;

  status?: {
  usable?: boolean;

  lastChecked?: Date;

  lastError?: string;

};

}

export interface Instructions {
  message?: string;

  data?: {
  [x: string]: any;

};

}

