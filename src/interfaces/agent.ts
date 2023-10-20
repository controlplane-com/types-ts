/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface BootstrapConfig {
  registrationToken: string;

  agentId: string;

  agentLink: string;

  hubEndpoint: string;

}

export interface AgentStatus {
  bootstrapConfig?: BootstrapConfig;

}

export interface Agent {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  status?: AgentStatus;

}

export interface AgentInfo {
  lastActive?: Date;

  env?: {
  [x: string]: any;

};

  peerCount?: number;

  serviceCount?: number;

}

