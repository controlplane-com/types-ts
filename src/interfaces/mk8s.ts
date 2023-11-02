/* auto-generated */

import { GenericProvider } from './mk8sGeneric';
import { HetznerProvider } from './mk8sHetzner';
import { AwsProvider } from './mk8sAws';
import { LinodeProvider } from './mk8sLinode';
import { OblivusProvider } from './mk8sOblivus';
import { LambdalabsProvider } from './mk8sLambdalabs';
import { PaperspaceProvider } from './mk8sPaperspace';
import { NonCustomizableAddonConfig, AzureAddonConfig, MetricsAddonConfig, LogsAddonConfig, NvidiaAddonConfig, DashboardAddonStatus, AwsWorkloadIdentityAddonStatus, MetricsAddonStatus, LogsAddonStatus } from './mk8sAddons';
import { Name, Kind, Tags, Links } from './base';

export interface Mk8sSpec {
  version: '1.26.0' | '1.26.4' | '1.27.3' | '1.28.2';

  provider: {
  generic?: GenericProvider;

  hetzner?: HetznerProvider;

  aws?: AwsProvider;

  linode?: LinodeProvider;

  oblivus?: OblivusProvider;

  lambdalabs?: LambdalabsProvider;

  paperspace?: PaperspaceProvider;

};

  addOns?: {
  dashboard?: NonCustomizableAddonConfig;

  azureWorkloadIdentity?: AzureAddonConfig;

  awsWorkloadIdentity?: NonCustomizableAddonConfig;

  localPathStorage?: NonCustomizableAddonConfig;

  metrics?: MetricsAddonConfig;

  logs?: LogsAddonConfig;

  nvidia?: NvidiaAddonConfig;

};

}

export interface Mk8sStatus {
  oidcProviderUrl?: string;

  serverUrl?: string;

  homeLocation?: string;

  addOns?: {
  dashboard?: DashboardAddonStatus;

  awsWorkloadIdentity?: AwsWorkloadIdentityAddonStatus;

  metrics?: MetricsAddonStatus;

  logs?: LogsAddonStatus;

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
  version: '1.26.0' | '1.26.4' | '1.27.3' | '1.28.2';

  provider: {
  generic?: GenericProvider;

  hetzner?: HetznerProvider;

  aws?: AwsProvider;

  linode?: LinodeProvider;

  oblivus?: OblivusProvider;

  lambdalabs?: LambdalabsProvider;

  paperspace?: PaperspaceProvider;

};

  addOns?: {
  dashboard?: NonCustomizableAddonConfig;

  azureWorkloadIdentity?: AzureAddonConfig;

  awsWorkloadIdentity?: NonCustomizableAddonConfig;

  localPathStorage?: NonCustomizableAddonConfig;

  metrics?: MetricsAddonConfig;

  logs?: LogsAddonConfig;

  nvidia?: NvidiaAddonConfig;

};

};

  alias?: string;

  status?: Mk8sStatus;

}

