/* auto-generated */

import { Name, Kind, Tags, Links } from './base';

export interface Opaque {
  payload?: string | string;

  encoding?: 'plain' | 'base64';

}

export interface AwsKey {
  accessKey: string;

  secretKey: string;

  roleArn?: string;

  externalId?: string;

}

export interface EcrPull {
  accessKey: string;

  secretKey: string;

  roleArn?: string;

  externalId?: string;

  repos?: string[];

}

export interface UsernamePassword {
  username: string;

  password: string;

  encoding?: 'plain' | 'base64';

}

export interface AzureConnector {
  url: string;

  code: string;

}

export interface Tls {
  key?: string;

  cert: string;

  chain?: string;

}

export interface KeyPair {
  secretKey: string;

  publicKey?: string;

  passphrase?: string;

}

export interface Dictionary {
  [x: string]: string;

}

export interface NatsAccount {
  accountId: string;

  privateKey: string;

}

export type SecretData = Opaque | Tls | string | AwsKey | EcrPull | string | UsernamePassword | KeyPair | Dictionary | string | AzureConnector | NatsAccount;

export interface Secret {
  id?: string;

  name?: Name;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  type?: 'opaque' | 'tls' | 'gcp' | 'aws' | 'ecr' | 'userpass' | 'keypair' | 'azure-sdk' | 'azure-connector' | 'docker' | 'dictionary' | 'nats-account';

  data?: SecretData;

}

