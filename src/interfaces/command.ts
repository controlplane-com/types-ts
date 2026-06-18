/* auto-generated */

import { Kind, Links, Tags, Name } from './base.js';
import { Term } from './query.js';
import { VolumeSnapshot, VolumeSetSpec, VolumeSetStatus } from './volumeSet.js';
import { ContainerOverride } from './workload.js';

export interface Cluster {
  clusterId?: string;

  since?: Date;

}

export interface Clusters {
  [x: string]: Cluster;

}

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

  conflictQuery?: {
  kind?: Kind;

  context?: {
  [x: string]: any;

};

  fetch?: 'links' | 'items';

  spec?: {
  match?: 'all' | 'any' | 'none';

  terms?: Term[];

  sort?: {
  by: string;

  order?: 'asc' | 'desc';

};

};

};

}

export type CommandLifecycleStage = 'pending' | 'running' | 'cancellation-requested' | 'cancelled' | 'completed' | 'failed';

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

  clusterIdByLocation?: {
  [x: string]: string;

};

  newSnapshotId?: string;

  newSnapshotSize?: number;

  creationStartTime?: Date;

}

export interface DeleteCloudDevicesStatus {
  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  volume: {
  lifecycle?: 'creating' | 'unused' | 'unbound' | 'bound' | 'deleted' | 'repairing';

  storageDeviceId?: string;

  oldStorageDeviceIds?: string[];

  resourceName?: string;

  index: number;

  currentSize: number;

  currentBytesUsed?: number;

  currentBytesFree?: number;

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

export interface DeleteOrphanedVolumeSnapshotSpec {
  location: string;

  snapshotId: string;

  volumeIndex: number;

}

export interface DeleteOrphanedVolumeSnapshotStatus {
  stage: 'delete-snapshot' | 'update-volume-set' | 'fail';

  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  messages?: string[];

}

export interface DeleteOrphanedVolumeSpec {
  location: string;

  storageDeviceId: string;

  volumeIndex: number;

  newlyObservedStorageDeviceId?: string;

}

export interface DeleteOrphanedVolumeStatus {
  stage: 'delete-storage-resources' | 'cleanup-k8s' | 'update-volume-set' | 'fail';

  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  messages?: string[];

}

export interface DeleteVolumeSetLocationStatus {
  stage: 'delete-volumes' | 'delete-orphaned-volumes' | 'cleanup-filesystem' | 'complete';

  volumes?: {
  [x: string]: DeleteCloudDevicesStatus;

};

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

  locations?: string[];

}

export interface DeleteVolumeSetStatus {
  [x: string]: DeleteVolumeSetLocationStatus;

}

export interface DeleteVolumeSnapshotSpec {
  location: string;

  volumeIndex: number;

  snapshotName: string;

}

export interface DeleteVolumeSnapshotStatus {
  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

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

  snapshotId?: string;

}

export interface DeleteVolumeSpec {
  location: string;

  volumeIndex: number;

}

export interface DeleteVolumeStatus {
  stage: 'update-volume-set' | 'delete-storage-resources' | 'shutdown-replica' | 'await-replica-termination' | 'fail' | 'cleanup-k8s';

  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  messages?: string[];

  inUseByWorkloadId?: string;

  storageDeviceIdToRemove?: string;

}

export interface ExpandVolumeSpec {
  location: string;

  volumeIndex: number;

  newStorageCapacity: number;

  timeoutSeconds?: number;

}

export interface ExpandVolumeStatus {
  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  messages?: string[];

  stage: 'expand-volume' | 'delete-stateful-set' | 'await-online-resize' | 'await-replica-termination' | 'await-expansion-completed' | 'update-volume-set' | 'recreate-replica' | 'cleanup-k8s' | 'revert';

  replicaRestartedAt?: Date;

  onlineResizeStartedAt?: Date;

  lockNames?: string[];

  storageDeviceId?: string;

}

export interface ReplaceVolumeSpec {
  location: string;

  volumeIndex: number;

}

export interface ReplaceVolumeStatus {
  stage: 'create-volume' | 'cleanup-after-volume-creation' | 'update-volume-set' | 'configure-storage-resources' | 'remove-finalizer' | 'shutdown-replica' | 'await-replica-termination' | 'cleanup-k8s' | 'fail' | 'revert' | 'cleanup-old-storage-device' | 'restart-replica';

  messages?: string[];

  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  inUseByWorkloadId?: string;

  storageDeviceIdToRemove?: string;

  newStorageDeviceId?: string;

  newVolumeAttributes?: {
  [x: string]: string;

};

  newResourceName?: string;

  nextVolumeSize?: number;

  tempStorageClassName?: string;

  lockNames?: string[];

}

export interface RestoreVolumeSpec {
  volumeIndex: number;

  location: string;

  snapshotName: string;

  zone?: string;

}

export interface RunCronWorkloadSpec {
  location: string;

  scheduleName?: string;

  containerOverrides?: ContainerOverride[];

  activeDeadlineSeconds?: number;

}

export interface RunCronWorkloadStatus {
  replica?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  minimumWorkloadVersion?: number;

  messages?: string[];

}

export interface ShrinkVolumeSpec {
  location: string;

  volumeIndex: number;

  newStorageCapacity: number;

  timeoutSeconds?: number;

}

export interface ShrinkVolumeStatus {
  stage: 'create-volume' | 'apply-presync-resources' | 'inject-and-await-presync' | 'apply-delta-source' | 'commit-and-prepare-swap' | 'shutdown-replica' | 'await-replica-termination' | 'await-data-ready' | 'cleanup-k8s' | 'fail';

  messages?: string[];

  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  inUseByWorkloadId?: string;

  storageDeviceIdToRemove?: string;

  newStorageDeviceId?: string;

  newVolumeAttributes?: {
  [x: string]: string;

};

  newResourceName?: string;

  nextVolumeSize?: number;

  tempStorageClassName?: string;

  lockNames?: string[];

  presyncTargetPodUid?: string;

  presyncAttempt?: number;

  finalSyncCompletedAt?: Date;

}

export interface SnapshotDeletionStatus {
  stage?: 'pending' | 'k8s-resources-created' | 'deleted';

  messages?: string[];

}

export interface StopReplicaSpec {
  location: string;

  replica?: string;

}

export interface StopReplicaStatus {
  clusterId?: string;

  clusterIdByLocation?: {
  [x: string]: string;

};

  podCreatedByCommandLink?: string;

  podId: string;

}

