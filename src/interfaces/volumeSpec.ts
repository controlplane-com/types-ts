/* auto-generated */


export interface VolumeSpec {
  uri: string;

  recoveryPolicy?: 'retain' | 'recycle';

  path?: string;

  name?: string;

  bus?: 'virtio' | 'sata' | 'scsi';

  bootOrder?: number;

}

