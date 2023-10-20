/* auto-generated */


export interface DeploymentResources {
  replicas?: number;

  replicasReady?: number;

  cpu?: number;

  memory?: number;

}

export interface ContainerStatus {
  name?: string;

  image?: string;

  ready?: boolean;

  resources?: DeploymentResources;

  message?: string;

}

