/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';

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
  protocolVersion?: 'v1' | 'v2';

  instanceId?: string;

  lastActive?: Date;

  env?: {
  [x: string]: any;

};

  peerCount?: number;

  serviceCount?: number;

}

export interface AgentStatus {
  bootstrapConfig?: BootstrapConfig;

  protocolVersion?: 'v1' | 'v2';

}

export interface BootstrapConfig {
  registrationToken: string;

  agentId: string;

  agentLink: string;

  hubEndpoint: string;

  protocolVersion?: 'v1' | 'v2';

}

