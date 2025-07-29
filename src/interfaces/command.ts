/* auto-generated */

import { Kind, Links, Tags, ImageLink, Name } from './base';
import { EnvVar } from './env';
import { Memory, Cpu } from './workload';
import { VolumeSnapshot, VolumeSetSpec, VolumeSetStatus } from './volumeSet';

export type CommandLifecycleStage = 'pending' | 'running' | 'cancelled' | 'completed' | 'failed';

export interface Command {
  id?: string;

  ownerId?: string;

  kind?: Kind;

  version?: number;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  tags?: Tags;

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

  memory?: Memory;

  cpu?: Cpu;

  image?: ImageLink;

}

export interface RunCronWorkloadSpec {
  location: string;

  containerOverrides?: CronWorkloadContainerOverrides[];

}

export interface RunCronWorkloadStatus {
  replica?: string;

  minimumWorkloadVersion?: number;

}

export interface StopReplicaSpec {
  location: string;

  replica?: string;

}

export interface StopReplicaStatus {
  clusterId?: string;

  podCreatedByCommandLink?: string;

  podId: string;

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
  stage: 'create-volume' | 'cleanup-after-volume-creation' | 'update-volume-set' | 'configure-storage-resources' | 'remove-finalizer' | 'shutdown-replica' | 'await-replica-termination' | 'cleanup-k8s' | 'fail' | 'revert' | 'cleanup-old-storage-device' | 'restart-replica';

  messages?: string[];

  clusterId?: string;

  inUseByWorkloadId?: string;

  storageDeviceIdToRemove?: string;

  newStorageDeviceId?: string;

  newVolumeAttributes?: {
  [x: string]: string;

};

  newResourceName?: string;

  nextVolumeSize?: number;

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

  stage: 'expand-volume' | 'delete-stateful-set' | 'await-replica-termination' | 'await-expansion-completed' | 'update-volume-set' | 'recreate-replica' | 'cleanup-k8s' | 'revert';

  replicaRestartedAt?: Date;

  lockNames?: string[];

}

export interface DeleteVolumeSpec {
  location: string;

  volumeIndex: number;

}

export interface DeleteVolumeStatus {
  stage: 'update-volume-set' | 'delete-storage-resources' | 'shutdown-replica' | 'await-replica-termination' | 'fail' | 'cleanup-k8s';

  clusterId?: string;

  messages?: string[];

  inUseByWorkloadId?: string;

  storageDeviceIdToRemove?: string;

}

export interface SnapshotDeletionStatus {
  stage?: 'pending' | 'k8s-resources-created' | 'deleted';

  messages?: string[];

}

export interface DeleteCloudDevicesStatus {
  clusterId?: string;

  volume: {
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

};

  stage: 'delete-snapshots' | 'delete-volume' | 'finalize-volume-deletion' | 'update-volume-set';

  messages?: string[];

  pvcRef?: {
  namespace: string;

  name: string;

};

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

  spec: VolumeSetSpec;

  status?: VolumeSetStatus;

  gvc?: any;

};

}

export interface DeleteVolumeSetLocationStatus {
  stage: 'delete-volumes' | 'delete-orphaned-volumes' | 'cleanup-filesystem' | 'complete';

  volumes?: {
  [x: string]: DeleteCloudDevicesStatus;

};

}

export interface DeleteVolumeSetStatus {
  [x: string]: DeleteVolumeSetLocationStatus;

}

export interface DeleteOrphanedVolumeSpec {
  storageDeviceId: string;

  org: string;

  gvc: string;

  workloadName: string;

  volumeSetUri: string;

  driver: string;

}

export interface DeleteOrphanedVolumeStatus {
  clusterId?: string;

  stage?: 'create-deletion-records' | 'delete' | 'cleanup-k8s';

  messages?: string[];

}

