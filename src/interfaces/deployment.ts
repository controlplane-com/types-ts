/* auto-generated */

import { Kind, Links } from './base.js';
import { JobExecutionStatus } from './cronjob.js';
import { ContainerStatus } from './containerstatus.js';

export interface Deployment {
  name: string;

  kind?: Kind;

  links?: Links;

  lastModified?: Date;

  status?: DeploymentStatus;

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

  zone?: string;

}

