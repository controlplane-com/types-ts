/* auto-generated */

import { ContainerStatus } from './containerstatus';
import { JobExecutionStatus } from './cronjob';
import { Kind, Links } from './base';

export interface DeploymentVersion {
  name?: string;

  created?: Date;

  workload?: number;

  gvc?: number;

  containers?: {
  [x: string]: ContainerStatus;

};

  ready?: boolean;

  message?: string;

}

export interface DeploymentStatus {
  endpoint?: string;

  remote?: string;

  lastProcessedVersion?: number;

  expectedDeploymentVersion?: number;

  internal?: any;

  ready?: boolean;

  deploying?: boolean;

  versions?: DeploymentVersion[];

  jobExecutions?: JobExecutionStatus[];

  message?: string;

}

export interface Deployment {
  name: string;

  kind?: Kind;

  links?: Links;

  lastModified?: Date;

  status?: DeploymentStatus;

}

