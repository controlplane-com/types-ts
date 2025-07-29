/* auto-generated */


export interface EventContext {
  category?: string;

  component?: 'actuator' | 'dns-updater' | 'scheduler' | 'iam-broker' | 'metadata-proxy' | 'data-service';

  cloudProvider?: 'aws' | 'gcp' | 'azure' | 'linode' | 'byok';

  cluster?: string;

  principalLink?: string;

  fingerprint?: string;

  [x: string]: any;

}

export interface Event {
  id?: string;

  created?: Date;

  kind?: string;

  status: string;

  pinned?: boolean;

  context?: {
  category?: string;

  component?: 'actuator' | 'dns-updater' | 'scheduler' | 'iam-broker' | 'metadata-proxy' | 'data-service';

  cloudProvider?: 'aws' | 'gcp' | 'azure' | 'linode' | 'byok';

  cluster?: string;

  principalLink?: string;

  fingerprint?: string;

  [x: string]: any;

};

}

