/* auto-generated */

import { AccessLog } from './envoyAccessLog.js';
import { Cluster } from './envoyCluster.js';
import { ExcExtAuth, ExcludedRateLimit } from './envoyExcExtAuth.js';
import { HttpFilter } from './envoyHttp.js';
import { VolumeSpec } from './volumeSpec.js';

export interface EnvoyFilters {
  accessLog?: AccessLog[];

  clusters?: Cluster[];

  excludedExternalAuth?: ExcExtAuth[];

  excludedRateLimit?: ExcludedRateLimit[];

  http?: HttpFilter[];

  network?: any[];

  volumes?: VolumeSpec[];

}

