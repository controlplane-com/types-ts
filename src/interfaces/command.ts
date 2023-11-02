/* auto-generated */

import { Kind, Links } from './base';
import { EnvVar } from './env';

export type CommandLifecycleStage = 'pending' | 'running' | 'cancelled' | 'completed' | 'failed';

export interface Command {
  id?: string;

  kind?: Kind;

  version?: number;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  type: string;

  lifecycleStage?: CommandLifecycleStage;

  spec?: {
  [x: string]: any;

};

  status?: {
  [x: string]: any;

};

}

export interface CronWorkloadContainerOverrides {
  name: string;

  env?: EnvVar[];

  command?: string;

  args?: string[];

}

export interface RunCronWorkloadSpec {
  location: string;

  containerOverrides?: CronWorkloadContainerOverrides[];

}

