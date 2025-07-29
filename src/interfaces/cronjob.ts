/* auto-generated */

import { ContainerStatus } from './containerstatus';

export interface JobExecutionCondition {
  status?: string;

  type: string;

  lastDetectionTime?: Date;

  lastTransitionTime?: Date;

  message?: string;

  reason?: string;

}

export interface JobExecutionStatus {
  workloadVersion: number;

  status?: 'successful' | 'failed' | 'active' | 'pending' | 'invalid' | 'removed' | '';

  startTime?: Date;

  completionTime?: Date;

  conditions?: JobExecutionCondition[];

  name: string;

  replica?: string;

  containers?: {
  [x: string]: ContainerStatus;

};

}

