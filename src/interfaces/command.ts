/* auto-generated */

import { Kind, Links, Name, Tags } from './base';
import { EnvVar } from './env';
import { VolumeSnapshot, VolumeSetStatus } from './volumeSet';

export type CommandLifecycleStage = 'pending' | 'running' | 'cancelled' | 'completed' | 'failed';

export interface Command {
  id?: string;

  ownerId?: string;

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

export interface ReplaceVolumeSpec {
  location: string;

  volumeIndex: number;

}

export interface RestoreVolumeSpec {
  location: string;

  volumeIndex: number;

  snapshotName: string;

}

export interface ReplaceVolumeStatus {
  stage: 'create-volume' | 'update-volume-set' | 'shutdown-replica' | 'await-replica-termination' | 'restart-replica' | 'cleanup-k8s' | 'cleanup-old-storage-device' | 'revert';

  messages?: string[];

  clusterId?: string;

  inUseByWorkloadId?: string;

  storageDeviceIdToRemove?: string;

  newStorageDeviceId?: string;

}

export interface CreateVolumeSnapshotSpec {
  location: string;

  volumeIndex: number;

  snapshotName: string;

  snapshotExpirationDate?: Date;

  snapshotTags?: {
  [x: string]: string;

}[];

}

export interface CreateVolumeSnapshotStatus {
  stage: 'create-snapshot' | 'update-volume-set' | 'cleanup-k8s' | 'revert';

  messages?: string[];

  clusterId?: string;

  newSnapshotId?: string;

  newSnapshotSize?: number;

  creationStartTime?: Date;

}

export interface ExpandVolumeSpec {
  location: string;

  volumeIndex: number;

  newStorageCapacity: number;

}

export interface ExpandVolumeStatus {
  clusterId?: string;

  messages?: string[];

  stage: 'expand-volume' | 'await-replica-termination' | 'update-volume-set' | 'cleanup-k8s' | 'revert';

}

export interface DeleteVolumeSpec {
  location: string;

  volumeIndex: number;

}

export interface SnapshotDeletionStatus {
  stage?: 'pending' | 'k8s-resources-created' | 'deleted';

  messages?: string[];

}

export interface DeleteVolumeStatus {
  clusterId?: string;

  volume: {
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

};

  stage: 'delete-snapshots' | 'delete-volume' | 'update-volume-set';

  messages?: string[];

  snapshotDeletionStatus: {
  [x: string]: SnapshotDeletionStatus;

};

}

export interface DeleteVolumeSnapshotSpec {
  location: string;

  volumeIndex: number;

  snapshotName: string;

}

export interface DeleteVolumeSnapshotStatus {
  clusterId?: string;

  snapshot: {
  name: string;

  id?: string;

  created: Date;

  expires?: Date;

  size?: number;

  tags?: {
  [x: string]: string;

}[];

};

  stage: 'delete-snapshot' | 'update-volume-set';

  messages?: string[];

}

export interface Cluster {
  clusterId?: string;

  since?: Date;

}

export interface Clusters {
  [x: string]: Cluster;

}

export interface DeleteVolumeSetSpec {
  volumeSet: {
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

};

  clusters: Clusters;

}

export interface DeleteVolumeSetLocationStatus {
  [x: string]: DeleteVolumeStatus;

}

export interface DeleteVolumeSetStatus {
  [x: string]: DeleteVolumeSetLocationStatus;

}

