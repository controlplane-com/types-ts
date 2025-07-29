/* auto-generated */


export type RegularExpression = string;

export interface FlexibleAddonConfig {
  [x: string]: string;

}

export interface NonCustomizableAddonConfig {
}

export interface AzureAddonConfig {
  tenantId?: string;

}

export interface AwsEFSAddonConfig {
  roleArn: string;

}

export interface MetricsAddonConfig {
  kubeState?: boolean;

  coreDns?: boolean;

  kubelet?: boolean;

  apiserver?: boolean;

  nodeExporter?: boolean;

  cadvisor?: boolean;

  scrapeAnnotated?: {
  intervalSeconds?: number;

  includeNamespaces?: RegularExpression;

  excludeNamespaces?: RegularExpression;

  retainLabels?: RegularExpression;

};

}

export interface RegistryMirrorConfig {
  mirrors?: ({
  registry: string | '*';

  mirrors?: string[];

})[];

}

export interface MetricsAddonStatus {
  prometheusEndpoint?: string;

  remoteWriteConfig?: {
  [x: string]: any;

};

}

export interface LogsAddonConfig {
  auditEnabled?: boolean;

  includeNamespaces?: RegularExpression;

  excludeNamespaces?: RegularExpression;

  docker?: boolean;

  kubelet?: boolean;

  kernel?: boolean;

  events?: boolean;

}

export interface LogsAddonStatus {
  lokiAddress?: string;

}

export interface DashboardAddonStatus {
  url?: string;

}

export interface AwsWorkloadIdentityAddonStatus {
  oidcProviderConfig?: {
  providerUrl?: string;

  audience?: string;

};

  trustPolicy?: {
  [x: string]: any;

};

}

export interface AwsTrustPolicyConfig {
  trustPolicy?: {
  [x: string]: any;

};

}

export interface NvidiaAddonConfig {
  taintGPUNodes?: boolean;

}

export interface AwsECRAddonConfig {
  roleArn?: string;

}

export interface AwsELBAddonConfig {
  roleArn?: string;

}

export interface AzureACRAddonConfig {
  clientId: string;

}

