/* auto-generated */

import { Kind, Links } from './base';

export interface Command {
  id?: string;

  kind?: Kind;

  version?: number;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  type: string;

  lifecycleStage?: 'pending' | 'running' | 'cancelled' | 'completed' | 'failed';

  spec?: {
  [x: string]: any;

};

  status?: {
  [x: string]: any;

};

}

