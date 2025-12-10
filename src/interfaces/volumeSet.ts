/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface FileSystem {
  name: string;

  accessMode: string;

  commandsSupported?: string[];

}

export interface PerformanceClass {
  name: string;

  minCapacity: number;

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

  oldStorageDeviceIds?: string[];

  resourceName?: string;

  index: number;

  currentSize: number;

  currentBytesUsed?: number;

  iops?: number;

  throughput?: number;

  driver: string;

  volumeSnapshots?: VolumeSnapshot[];

  attributes?: {
  [x: string]: string;

};

  zone?: string;

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

  workloadLinks?: string[];

  bindingId?: string;

  locations?: VolumeSetStatusLocation[];

}

export interface SnapshotSpec {
  createFinalSnapshot?: boolean;

  retentionDuration?: string;

  schedule?: string;

}

export type PerformanceClassName = 'general-purpose-ssd' | 'high-throughput-ssd' | 'shared';

export type FileSystemType = 'ext4' | 'xfs' | 'shared';

export interface MountResources {
  maxCpu?: string;

  minCpu?: string;

  minMemory?: string;

  maxMemory?: string;

}

export interface CustomEncryptionRegion {
  keyId?: string;

}

export interface VolumeSetSpec {
  initialCapacity: number;

  performanceClass?: PerformanceClassName;

  storageClassSuffix?: string;

  fileSystemType?: FileSystemType;

  customEncryption?: {
  regions?: {
  [x: string]: CustomEncryptionRegion;

};

};

  snapshots?: SnapshotSpec;

  autoscaling?: {
  maxCapacity?: number;

  minFreePercentage?: number;

  scalingFactor?: number;

};

  mountOptions?: {
  resources?: {
  maxCpu?: string;

  minCpu?: string;

  minMemory?: string;

  maxMemory?: string;

};

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

  spec: VolumeSetSpec;

  status?: VolumeSetStatus;

  gvc?: any;

}

