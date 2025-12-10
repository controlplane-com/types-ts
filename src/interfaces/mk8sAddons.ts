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

};

  common?: {
  deploymentReplicas?: number;

  pdb?: {
  maxUnavailable?: number;

};

};

  longhorn?: {
  replicas?: number;

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

  [x: string]: any;

};

}

