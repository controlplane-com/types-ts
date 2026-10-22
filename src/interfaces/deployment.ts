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

export interface DeploymentIdentity {
  link?: string;

  version?: number;

  appliedAt?: Date;

}

export interface DeploymentStatus {
  endpoint?: string;

  remote?: string;

  lastProcessedVersion?: number;

  expectedDeploymentVersion?: number;

  identity?: DeploymentIdentity;

  internal?: any;

  ready?: boolean;

  deploying?: boolean;

  versions?: DeploymentVersion[];

  jobExecutions?: JobExecutionStatus[];

  message?: string;

  desiredScale?: number;

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

  desiredScale?: number;

}

