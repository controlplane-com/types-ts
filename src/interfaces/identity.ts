/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';

export interface AwsIdentity {
  cloudAccountLink: string;

  policyRefs?: PolicyRef[];

  trustPolicy?: AwsPolicyDocument;

  roleName?: AwsRoleName;

}

export interface AwsPolicyDocument {
  Version?: string;

  Statement?: {
  [x: string]: any;

}[];

}

export type AwsRoleName = string;

export interface AzureIdentity {
  cloudAccountLink: string;

  roleAssignments?: AzureRoleAssignment[];

}

export interface AzureRoleAssignment {
  scope?: string;

  roles?: string[];

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

export type GcpRoleName = string;

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

  aws?: {
  cloudAccountLink: string;

  policyRefs?: PolicyRef[];

  trustPolicy?: AwsPolicyDocument;

  roleName?: AwsRoleName;

};

  gcp?: {
  cloudAccountLink: string;

  scopes?: string[];

  serviceAccount?: string;

  bindings?: {
  resource?: string;

  roles?: GcpRoleName[];

}[];

};

  azure?: {
  cloudAccountLink: string;

  roleAssignments?: AzureRoleAssignment[];

};

  ngs?: {
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

};

  networkResources?: NetworkResource[];

  nativeNetworkResources?: NativeNetworkResource[];

  memcacheAccess?: MemcacheAccess[];

  spicedbAccess?: SpicedbAccess[];

  status?: Status;

  gvc?: string;

}

export interface MemcacheAccess {
  clusterLink: string;

  role: 'readWrite';

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

export interface NetworkResource {
  name: Name | string;

  agentLink?: string;

  IPs?: string[];

  FQDN?: string;

  resolverIP?: string;

  ports: number[];

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

export type PolicyRef = string;

export interface SpicedbAccess {
  clusterLink: string;

  role: 'checkPermission' | 'read' | 'write';

}

export interface Status {
  objectName?: string;

  aws?: {
  lastError?: string;

  usable?: boolean;

};

  gcp?: {
  lastError?: string;

  usable?: boolean;

};

  azure?: {
  lastError?: string;

  usable?: boolean;

};

}

