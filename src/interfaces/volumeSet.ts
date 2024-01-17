/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface PerformanceClass {
  name: string;

  minCapacity?: number;

  maxCapacity: number;

  featuresSupported?: ('automatic-expansion' | 'snapshots')[];

}

export interface VolumeSnapshot {
  name: string;

  id?: string;

  created: Date;

  expires?: Date;

  size?: number;

  tags?: {
  [x: string]: string;

}[];

}

export interface PersistentVolumeStatus {
  lifecycle?: 'creating' | 'unused' | 'unbound' | 'bound' | 'deleted' | 'repairing';

  storageDeviceId?: string;

  index: number;

  currentSize: number;

  iops?: number;

  throughput?: number;

  driver: string;

  volumeSnapshots?: VolumeSnapshot[];

  attributes?: {
  [x: string]: string;

};

}

export interface VolumeSetStatusLocation {
  name: string;

  volumes?: PersistentVolumeStatus[];

  desiredVolumeCount?: number;

  clusterId?: string;

}

export interface VolumeSetStatus {
  parentId?: string;

  usedByWorkload?: string;

  locations?: VolumeSetStatusLocation[];

}

export interface VolumeSetSpec {
  initialCapacity: number;

  performanceClass: 'general-purpose-ssd' | 'high-throughput-ssd';

  fileSystemType?: 'xfs' | 'ext4';

  snapshots?: {
  createFinalSnapshot?: boolean;

  retentionDuration?: string;

  schedule?: string;

};

  autoscaling?: {
  maxCapacity?: number;

  minFreePercentage?: number;

  scalingFactor?: number;

};

}

export interface VolumeSet {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  spec: {
  initialCapacity: number;

  performanceClass: 'general-purpose-ssd' | 'high-throughput-ssd';

  fileSystemType?: 'xfs' | 'ext4';

  snapshots?: {
  createFinalSnapshot?: boolean;

  retentionDuration?: string;

  schedule?: string;

};

  autoscaling?: {
  maxCapacity?: number;

  minFreePercentage?: number;

  scalingFactor?: number;

};

};

  status?: VolumeSetStatus;

  gvc?: any;

}

