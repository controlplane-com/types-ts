/* auto-generated */


export interface ContainerStatus {
  name?: string;

  image?: string;

  ready?: boolean;

  resources?: DeploymentResources;

  message?: string;

  restarts?: {
  lastRestartTime?: Date;

  exitCode?: number;

  reason?: string;

  count?: number;

};

}

export interface DeploymentResources {
  replicas?: number;

  replicasReady?: number;

  cpu?: number;

  memory?: number;

}

