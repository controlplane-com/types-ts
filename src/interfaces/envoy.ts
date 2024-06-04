/* auto-generated */

import { AccessLog } from './envoyAccessLog';
import { Cluster } from './envoyCluster';
import { ExcExtAuth, ExcludedRateLimit } from './envoyExcExtAuth';
import { HttpFilter } from './envoyHttp';
import { VolumeSpec } from './volumeSpec';

export interface EnvoyFilters {
  accessLog?: AccessLog[];

  clusters?: Cluster[];

  excludedExternalAuth?: ExcExtAuth[];

  excludedRateLimit?: ExcludedRateLimit[];

  http?: HttpFilter[];

  network?: any[];

  volumes?: VolumeSpec[];

}

