/* auto-generated */

import { ContainerStatus } from './containerstatus';

export interface JobExecutionCondition {
  status?: 'True' | 'False' | 'Unknown';

  type: 'Complete' | 'Failed' | 'Suspended';

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

  containers?: {
  [x: string]: ContainerStatus;

};

}

