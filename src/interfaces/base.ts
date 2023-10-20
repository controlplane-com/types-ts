/* auto-generated */


export type LocalLink = string;

export type ImageLink = string;

export type Kind = 'org' | 'cloudaccount' | 'policy' | 'user' | 'group' | 'resource' | 'task' | 'permissions' | 'serviceaccount' | 'secret' | 'location' | 'gvc' | 'workload' | 'quota' | 'identity' | 'deployment' | 'event' | 'domain' | 'image' | 'resourcepolicy' | 'agent' | 'accessreport' | 'policymembership' | 'dbcluster' | 'auditctx' | 'memcachecluster' | 'spicedbcluster' | 'tenant' | 'mk8s' | 'command' | 'imagesummary' | 'volumeset';

export type CloudProvider = 'aws' | 'gcp' | 'azure' | 'ngs';

export type Name = string;

export interface Tags {
  [x: string]: any;

}

export interface Link {
  rel: string;

  href: string;

}

export type Links = Link[];

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

export interface List {
  kind?: 'list';

  itemKind?: 'org' | 'cloudaccount' | 'policy' | 'user' | 'group' | 'resource' | 'task' | 'permissions' | 'serviceaccount' | 'secret' | 'location' | 'gvc' | 'workload' | 'quota' | 'identity' | 'deployment' | 'event' | 'account' | 'domain' | 'image' | 'resourcepolicy' | 'accessreport' | 'agent' | 'auditctx' | 'dbcluster' | 'memcachecluster' | 'spicedbcluster' | 'tenant' | 'mk8s' | 'command' | 'policymembership' | 'primitive' | 'foreign' | 'link' | 'imagesummary' | 'volumeset';

  items: any[];

  links: Link[];

}

export interface ApiError {
  status?: number;

  message?: string;

  code?: string;

  details?: any;

  id?: string;

}

