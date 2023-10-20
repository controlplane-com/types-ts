/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export type AwsRoleName = string;

export type PolicyRef = string;

export type GcpRoleName = string;

export interface AwsPolicyDocument {
  Version?: string;

  Statement?: {
  [x: string]: any;

}[];

}

export interface AwsIdentity {
  cloudAccountLink: string;

  policyRefs?: PolicyRef[];

  trustPolicy?: AwsPolicyDocument;

  roleName?: AwsRoleName;

}

export interface GcpIdentity {
  cloudAccountLink: string;

  scopes?: string[];

  serviceAccount?: string;

  bindings?: {
  resource?: string;

  roles?: GcpRoleName[];

}[];

}

export interface NgsIdentity {
  cloudAccountLink: string;

  pub?: {
  allow?: string[];

  deny?: string[];

};

  sub?: {
  allow?: string[];

  deny?: string[];

};

  resp?: {
  max?: number;

  ttl?: string;

};

  subs?: number;

  data?: number;

  payload?: number;

}

export interface AzureRoleAssignment {
  scope?: string;

  roles?: string[];

}

export interface AzureIdentity {
  cloudAccountLink: string;

  roleAssignments?: AzureRoleAssignment[];

}

export interface Status {
  objectName?: string;

}

export interface NetworkResource {
  name: Name | string;

  agentLink?: string;

  IPs?: string[];

  FQDN?: string;

  resolverIP?: string;

  ports: number[];

}

export interface NativeNetworkResource {
  name: Name | string;

  FQDN?: string;

  ports: number[];

  awsPrivateLink?: {
  endpointServiceName: string;

};

  gcpServiceConnect?: {
  targetService: string;

};

}

export interface SpicedbAccess {
  clusterLink: string;

  role: 'checkPermission' | 'read' | 'write';

}

export interface MemcacheAccess {
  clusterLink: string;

  role: 'readWrite';

}

export interface Identity {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  aws?: AwsIdentity;

  gcp?: GcpIdentity;

  azure?: AzureIdentity;

  ngs?: NgsIdentity;

  networkResources?: NetworkResource[];

  nativeNetworkResources?: NativeNetworkResource[];

  memcacheAccess?: MemcacheAccess[];

  spicedbAccess?: SpicedbAccess[];

  status?: Status;

  gvc?: any;

}

