/* auto-generated */


export interface Options {
  autoscaling?: {
  metric?: 'concurrency' | 'cpu' | 'rps' | 'latency' | 'disabled';

  metricPercentile?: any;

  target?: number;

  maxScale?: number;

  minScale?: number;

  scaleToZeroDelay?: number;

  maxConcurrency?: number;

};

  timeoutSeconds?: number;

  capacityAI?: boolean;

  spot?: boolean;

  debug?: boolean;

  suspend?: boolean;

}

export type DefaultOptions = any;

export type LocalOptions = any[];

