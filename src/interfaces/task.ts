/* auto-generated */

import { Link } from './base';

export interface Task {
  id?: string;

  kind?: 'task';

  description?: string;

  created?: Date;

  lastModified?: Date;

  targetEmail?: string;

  creatorLink?: string;

  type?: string;

  context?: {
  [x: string]: any;

};

  status?: 'pending' | 'complete' | 'canceled';

  response?: {
  [x: string]: any;

};

  links?: Link[];

}

