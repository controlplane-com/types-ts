/* auto-generated */


export interface KedaTrigger {
  type: string;

  metadata?: {
  [x: string]: string | any;

};

  name?: string;

  useCachedMetrics?: boolean;

  metricType?: 'AverageValue' | 'Value' | 'Utilization';

  authenticationRef?: {
  name: string;

};

}

export interface DefaultOptions {
  autoscaling?: {
  metric?: 'concurrency' | 'cpu' | 'memory' | 'rps' | 'latency' | 'keda' | 'disabled';

  multi?: {
  metric?: any;

  target?: number;

}[];

  metricPercentile?: 'p50' | 'p75' | 'p99';

  target?: number;

  maxScale?: number;

  minScale?: number;

  scaleToZeroDelay?: number;

  maxConcurrency?: number;

  keda?: {
  triggers?: KedaTrigger[];

  advanced?: {
  scalingModifiers?: {
  target?: string;

  activationTarget?: string;

  metricType?: 'AverageValue' | 'Value' | 'Utilization';

  formula?: string;

};

};

  fallback?: {
  failureThreshold: number;

  replicas: number;

  behavior?: 'static' | 'currentReplicas' | 'currentReplicasIfHigher' | 'currentReplicasIfLower';

};

  pollingInterval?: number;

  cooldownPeriod?: number;

  initialCooldownPeriod?: number;

};

};

  timeoutSeconds?: number;

  capacityAI?: boolean;

  capacityAIUpdateMinutes?: number;

  spot?: boolean;

  debug?: boolean;

  suspend?: boolean;

  multiZone?: {
  enabled?: boolean;

};

}

export type LocalOptions = ({
  autoscaling?: {
  metric?: 'concurrency' | 'cpu' | 'memory' | 'rps' | 'latency' | 'keda' | 'disabled';

  multi?: {
  metric?: any;

  target?: number;

}[];

  metricPercentile?: 'p50' | 'p75' | 'p99';

  target?: number;

  maxScale?: number;

  minScale?: number;

  scaleToZeroDelay?: number;

  maxConcurrency?: number;

  keda?: {
  triggers?: KedaTrigger[];

  advanced?: {
  scalingModifiers?: {
  target?: string;

  activationTarget?: string;

  metricType?: 'AverageValue' | 'Value' | 'Utilization';

  formula?: string;

};

};

  fallback?: {
  failureThreshold: number;

  replicas: number;

  behavior?: 'static' | 'currentReplicas' | 'currentReplicasIfHigher' | 'currentReplicasIfLower';

};

  pollingInterval?: number;

  cooldownPeriod?: number;

  initialCooldownPeriod?: number;

};

};

  timeoutSeconds?: number;

  capacityAI?: boolean;

  capacityAIUpdateMinutes?: number;

  spot?: boolean;

  debug?: boolean;

  suspend?: boolean;

  multiZone?: {
  enabled?: boolean;

};

  location: string;

})[];

