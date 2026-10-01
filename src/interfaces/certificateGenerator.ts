/* auto-generated */

import { Name, Kind, Tags, Links } from './base.js';

export interface AcmeChallenge {
  http01?: Http01Challenge;

  dns01?: Dns01Challenge;

}

export interface AcmeGenerator {
  server: string;

  email?: string;

  externalAccountBinding?: {
  keyId: string;

  secretLink: string;

};

  challenge: {
  http01?: Http01Challenge;

  dns01?: Dns01Challenge;

};

}

export interface AzureDnsDns01 {
  resourceGroupName: string;

  hostedZoneName?: string;

  secretLink: string;

}

export interface CertificateGenerator {
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
  provider: 'acme';

  acme?: {
  server: string;

  email?: string;

  externalAccountBinding?: {
  keyId: string;

  secretLink: string;

};

  challenge: {
  http01?: Http01Challenge;

  dns01?: Dns01Challenge;

};

};

};

  status?: CertificateGeneratorStatus;

}

export type CertificateGeneratorProvider = 'acme';

export interface CertificateGeneratorSpec {
  provider: 'acme';

  acme?: {
  server: string;

  email?: string;

  externalAccountBinding?: {
  keyId: string;

  secretLink: string;

};

  challenge: {
  http01?: Http01Challenge;

  dns01?: Dns01Challenge;

};

};

}

export interface CertificateGeneratorStatus {
  ready?: boolean;

  message?: string;

  lastUpdated?: Date;

}

export interface CloudDnsDns01 {
  project: string;

  secretLink: string;

}

export interface CloudflareDns01 {
  secretLink: string;

}

export interface Dns01Challenge {
  provider: 'route53' | 'cloudDns' | 'azureDns' | 'cloudflare';

  route53?: {
  region: string;

  hostedZoneId?: string;

  secretLink: string;

};

  cloudDns?: {
  project: string;

  secretLink: string;

};

  azureDns?: {
  resourceGroupName: string;

  hostedZoneName?: string;

  secretLink: string;

};

  cloudflare?: {
  secretLink: string;

};

}

export type Dns01Provider = 'route53' | 'cloudDns' | 'azureDns' | 'cloudflare';

export interface ExternalAccountBinding {
  keyId: string;

  secretLink: string;

}

export interface Http01Challenge {
}

export interface Route53Dns01 {
  region: string;

  hostedZoneId?: string;

  secretLink: string;

}

