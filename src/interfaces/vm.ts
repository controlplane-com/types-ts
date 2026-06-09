/* auto-generated */


export interface VmSpec {
  bootDisk?: {
  source?: {
  oci?: {
  image: string;

};

  http?: {
  url: string;

  checksum?: string;

};

};

  persist?: {
  volumeSet: string;

};

  bus?: 'virtio' | 'sata' | 'scsi';

  bootOrder?: number;

};

  cpu?: {
  sockets?: number;

  threads?: number;

};

  firmware?: {
  bootloader?: 'bios' | 'efi';

  secureBoot?: boolean;

  uuid?: string;

  serial?: string;

  smbios?: {
  manufacturer?: string;

  product?: string;

  version?: string;

  sku?: string;

  family?: string;

};

};

  guestOS?: 'linux' | 'windows';

  networks?: {
  name?: string;

}[];

  cloudInit?: {
  userData?: string;

  userDataBase64?: string;

  userDataSecret?: string;

  sshPublicKeySecrets?: string[];

};

  accessCredentials?: ({
  sshPublicKeySecret: string;

  users: string[];

  deliveryMethod?: 'qemuGuestAgent' | 'configDrive';

})[];

  runStrategy?: 'Always' | 'RerunOnFailure' | 'Manual' | 'Halted';

  features?: {
  acpi?: boolean;

  apic?: boolean;

  smm?: boolean;

  rng?: boolean;

  tpm?: {
  enabled?: boolean;

  persistent?: boolean;

};

};

  clock?: {
  timezone?: string;

};

  hostname?: string;

  subdomain?: string;

}

