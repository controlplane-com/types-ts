/* auto-generated */

import { Cpu, Memory } from './workload';

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

export interface HttpHeaderValue {
  values?: string[];

  secrets?: string[];

  files?: string[];

}

export interface ByokAddonConfig {
  ignoreUpdates?: boolean;

  location: string;

  config?: {
  actuator?: {
  minCpu?: Cpu;

  maxCpu?: Cpu;

  minMemory?: Memory;

  maxMemory?: Memory;

  logLevel?: 'trace' | 'info' | 'error';

  env?: {
  [x: string]: string;

};

};

  middlebox?: {
  enabled?: boolean;

  bandwidthAlertMbps?: number;

  port?: number;

  ip?: string;

};

  common?: {
  deploymentReplicas?: number;

  pdb?: {
  maxUnavailable?: number;

};

};

  longhorn?: {
  numberOfReplicas?: number;

  replicas?: number;

  isDefault?: boolean;

};

  byok?: {
  noDefaultStorageClasses?: boolean;

};

  ingress?: {
  cpu?: Cpu;

  memory?: Memory;

  targetPercent?: number;

};

  istio?: {
  istiod?: {
  replicas?: number;

  minCpu?: Cpu;

  maxCpu?: Cpu;

  minMemory?: Memory;

  maxMemory?: Memory;

  pdb?: number;

};

  ingressgateway?: {
  replicas?: number;

  maxCpu?: Cpu;

  maxMemory?: Memory;

};

  sidecar?: {
  minCpu?: Cpu;

  minMemory?: Memory;

};

};

  logSplitter?: {
  minCpu?: Cpu;

  maxCpu?: Cpu;

  minMemory?: Memory;

  maxMemory?: Memory;

  memBufferSize?: string;

  perPodRate?: number;

};

  monitoring?: {
  minMemory?: Memory;

  maxMemory?: Memory;

  kubeStateMetrics?: {
  minMemory?: Memory;

};

  prometheus?: {
  main?: {
  storage?: Memory;

};

};

  remoteWrite?: {
  basic_auth?: {
  username?: string;

  username_file?: string;

  password?: string;

  password_file?: string;

};

  authorization?: {
  type?: string;

  credentials?: string;

  credentials_file?: string;

};

  oauth2?: {
  [x: string]: any;

};

  follow_redirects?: boolean;

  enable_http2?: boolean;

  tls_config?: {
  [x: string]: any;

};

  proxy_url?: string;

  no_proxy?: string;

  proxy_from_environment?: boolean;

  proxy_connect_header?: {
  [x: string]: string[];

};

  http_headers?: {
  [x: string]: HttpHeaderValue;

};

  url?: string;

  remote_timeout?: string;

  headers?: {
  [x: string]: string;

};

  write_relabel_configs?: {
  [x: string]: any;

}[];

  name?: string;

  send_exemplars?: boolean;

  send_native_histograms?: boolean;

  sigv4?: {
  [x: string]: any;

};

  azuread?: {
  [x: string]: any;

};

  google_iam?: {
  [x: string]: any;

};

  queue_config?: {
  [x: string]: any;

};

}[];

  externalLabels?: {
  [x: string]: string;

};

};

  redis?: {
  minCpu?: Cpu;

  maxCpu?: Cpu;

  minMemory?: Memory;

  maxMemory?: Memory;

  storage?: Memory;

};

  redisHa?: {
  minCpu?: Cpu;

  maxCpu?: Cpu;

  minMemory?: Memory;

  maxMemory?: Memory;

  storage?: number;

};

  redisSentinel?: {
  minCpu?: Cpu;

  maxCpu?: Cpu;

  minMemory?: Memory;

  maxMemory?: Memory;

  storage?: number;

};

  tempoAgent?: {
  minCpu?: Cpu;

  minMemory?: Memory;

};

  internalDns?: {
  minCpu?: Cpu;

  maxCpu?: Cpu;

  minMemory?: Memory;

  maxMemory?: Memory;

};

};

}

