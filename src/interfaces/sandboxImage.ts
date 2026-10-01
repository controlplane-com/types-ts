/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';

export interface SandboxImage {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  spec: SandboxImageSpec;

  status?: SandboxImageStatus;

}

export interface SandboxImageSpec {
  base?: {
  image?: string;

};

  tag?: string;

}

export interface SandboxImageStatus {
  phase?: 'pending' | 'queued' | 'building' | 'ready' | 'failed';

  imageLink?: string;

  imageRef?: string;

  buildId?: string;

  builtFingerprint?: string;

  error?: string;

  buildDuration?: number;

  lastBuildAt?: Date;

}

