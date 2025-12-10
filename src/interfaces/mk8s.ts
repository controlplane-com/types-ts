/* auto-generated */

import { GenericProvider } from './mk8sGeneric';
import { HetznerProvider } from './mk8sHetzner';
import { AwsProvider } from './mk8sAws';
import { LinodeProvider } from './mk8sLinode';
import { OblivusProvider } from './mk8sOblivus';
import { LambdalabsProvider } from './mk8sLambdalabs';
import { PaperspaceProvider } from './mk8sPaperspace';
import { EphemeralProvider } from './mk8sEphemeral';
import { TritonProvider } from './mk8sTriton';
import { AzureProvider } from './mk8sAzure';
import { DigitalOceanProvider } from './mk8sDigitalOcean';
import { GcpProvider } from './mk8sGcp';
import { NonCustomizableAddonConfig, AzureAddonConfig, MetricsAddonConfig, LogsAddonConfig, RegistryMirrorConfig, NvidiaAddonConfig, AwsEFSAddonConfig, AwsECRAddonConfig, AwsELBAddonConfig, AzureACRAddonConfig, ByokAddonConfig, DashboardAddonStatus, AwsWorkloadIdentityAddonStatus, MetricsAddonStatus, LogsAddonStatus, AwsTrustPolicyConfig } from './mk8sAddons';
import { Name, Kind, Tags, Links } from './base';

export interface Mk8sSpec {
  version: '1.26.0' | '1.26.4' | '1.27.3' | '1.28.2' | '1.28.4' | '1.29.7' | '1.30.3' | '1.31.5' | '1.31.13' | '1.32.1' | '1.32.9' | '1.33.5' | '1.34.2';

  firewall?: {
  sourceCIDR: string;

  description?: string;

}[];

  provider: {
  generic?: GenericProvider;

  hetzner?: HetznerProvider;

  aws?: AwsProvider;

  linode?: LinodeProvider;

  oblivus?: OblivusProvider;

  lambdalabs?: LambdalabsProvider;

  paperspace?: PaperspaceProvider;

  ephemeral?: EphemeralProvider;

  triton?: TritonProvider;

  azure?: AzureProvider;

  digitalocean?: DigitalOceanProvider;

  gcp?: GcpProvider;

};

  addOns?: {
  dashboard?: NonCustomizableAddonConfig;

  headlamp?: NonCustomizableAddonConfig;

  azureWorkloadIdentity?: AzureAddonConfig;

  awsWorkloadIdentity?: NonCustomizableAddonConfig;

  localPathStorage?: NonCustomizableAddonConfig;

  metrics?: MetricsAddonConfig;

  logs?: LogsAddonConfig;

  registryMirror?: RegistryMirrorConfig;

  nvidia?: NvidiaAddonConfig;

  awsEFS?: AwsEFSAddonConfig;

  awsECR?: AwsECRAddonConfig;

  awsELB?: AwsELBAddonConfig;

  azureACR?: AzureACRAddonConfig;

  sysbox?: NonCustomizableAddonConfig;

  byok?: ByokAddonConfig;

};

}

export interface Mk8sStatus {
  oidcProviderUrl?: string;

  serverUrl?: string;

  homeLocation?: string;

  addOns?: {
  dashboard?: DashboardAddonStatus;

  headlamp?: DashboardAddonStatus;

  awsWorkloadIdentity?: AwsWorkloadIdentityAddonStatus;

  metrics?: MetricsAddonStatus;

  logs?: LogsAddonStatus;

  awsECR?: AwsTrustPolicyConfig;

  awsEFS?: AwsTrustPolicyConfig;

  awsELB?: AwsTrustPolicyConfig;

};

}

export interface Mk8sCluster {
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
  version: '1.26.0' | '1.26.4' | '1.27.3' | '1.28.2' | '1.28.4' | '1.29.7' | '1.30.3' | '1.31.5' | '1.31.13' | '1.32.1' | '1.32.9' | '1.33.5' | '1.34.2';

  firewall?: {
  sourceCIDR: string;

  description?: string;

}[];

  provider: {
  generic?: GenericProvider;

  hetzner?: HetznerProvider;

  aws?: AwsProvider;

  linode?: LinodeProvider;

  oblivus?: OblivusProvider;

  lambdalabs?: LambdalabsProvider;

  paperspace?: PaperspaceProvider;

  ephemeral?: EphemeralProvider;

  triton?: TritonProvider;

  azure?: AzureProvider;

  digitalocean?: DigitalOceanProvider;

  gcp?: GcpProvider;

};

  addOns?: {
  dashboard?: NonCustomizableAddonConfig;

  headlamp?: NonCustomizableAddonConfig;

  azureWorkloadIdentity?: AzureAddonConfig;

  awsWorkloadIdentity?: NonCustomizableAddonConfig;

  localPathStorage?: NonCustomizableAddonConfig;

  metrics?: MetricsAddonConfig;

  logs?: LogsAddonConfig;

  registryMirror?: RegistryMirrorConfig;

  nvidia?: NvidiaAddonConfig;

  awsEFS?: AwsEFSAddonConfig;

  awsECR?: AwsECRAddonConfig;

  awsELB?: AwsELBAddonConfig;

  azureACR?: AzureACRAddonConfig;

  sysbox?: NonCustomizableAddonConfig;

  byok?: ByokAddonConfig;

};

};

  alias?: string;

  status?: Mk8sStatus;

}

