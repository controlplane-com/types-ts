/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';

export interface IpAddress {
  name: string;

  ip: string;

  id: string;

  state: 'bound' | 'unbound';

  created: Date;

}

export interface IpSet {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  spec: {
  link?: string;

  locations?: IpSetLocation[];

};

  status?: IpSetStatus;

}

export interface IpSetLocation {
  name: string;

  retentionPolicy: 'keep' | 'free';

}

export interface IpSetSpec {
  link?: string;

  locations?: IpSetLocation[];

}

export interface IpSetStatus {
  ipAddresses?: IpAddress[];

  error?: string;

  warning?: string;

}

