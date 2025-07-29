/* auto-generated */


export interface KedaTrigger {
  type: string;

  metadata?: {
  [x: string]: string;

};

  name?: string;

  useCachedMetrics?: boolean;

  metricType?: 'AverageValue' | 'Value' | 'Utilization';

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

};

};

  timeoutSeconds?: number;

  capacityAI?: boolean;

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

};

};

  timeoutSeconds?: number;

  capacityAI?: boolean;

  spot?: boolean;

  debug?: boolean;

  suspend?: boolean;

  multiZone?: {
  enabled?: boolean;

};

  location: string;

})[];

