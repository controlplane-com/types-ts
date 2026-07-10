/* auto-generated */


export interface Service {
  workload: {
  name: string;

  canonicalEndpoint: string;

  portMap: ServicePortMap[];

  type: 'serverless' | 'standard' | 'cron' | 'stateful' | 'vm';

  replicas?: ServiceReplica[];

  agentAccessible?: boolean;

};

  gvc: {
  name: string;

  alias: string;

};

}

export interface ServiceMap {
  outbound: Service[];

  lastUpdate: Date;

  orgGvcAliases?: string[];

}

export interface ServicePortMap {
  servicePort: number;

  containerPort: number;

  protocol?: string;

}

export interface ServiceReplica {
  location: string;

  replicas: number;

}

