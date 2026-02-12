/* auto-generated */


export interface ApiError {
  status?: number;

  message?: string;

  code?: string;

  details?: any;

  id?: string;

}

export interface Base {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

}

export type CloudProvider = 'aws' | 'gcp' | 'azure' | 'ngs';

export type ImageLink = string;

export type Kind = 'org' | 'cloudaccount' | 'policy' | 'user' | 'group' | 'resource' | 'task' | 'permissions' | 'serviceaccount' | 'secret' | 'location' | 'gvc' | 'workload' | 'quota' | 'identity' | 'deployment' | 'event' | 'domain' | 'image' | 'ipset' | 'resourcepolicy' | 'agent' | 'accessreport' | 'policymembership' | 'dbcluster' | 'auditctx' | 'memcachecluster' | 'spicedbcluster' | 'tenant' | 'mk8s' | 'command' | 'imagesummary' | 'volumeset';

export interface Link {
  rel: string;

  href: string;

}

export type Links = Link[];

export interface List {
  kind?: 'list';

  itemKind?: 'org' | 'cloudaccount' | 'policy' | 'user' | 'group' | 'resource' | 'task' | 'permissions' | 'serviceaccount' | 'secret' | 'location' | 'gvc' | 'workload' | 'quota' | 'identity' | 'deployment' | 'event' | 'account' | 'domain' | 'image' | 'ipset' | 'resourcepolicy' | 'accessreport' | 'agent' | 'auditctx' | 'dbcluster' | 'memcachecluster' | 'spicedbcluster' | 'tenant' | 'mk8s' | 'command' | 'policymembership' | 'primitive' | 'foreign' | 'link' | 'imagesummary' | 'volumeset';

  items: any[];

  links: Link[];

}

export type LocalLink = string;

export interface MultiZoneOptions {
  enabled?: boolean;

}

export type Name = string;

export type Regex = string;

export interface Tags {
  [x: string]: any;

}

