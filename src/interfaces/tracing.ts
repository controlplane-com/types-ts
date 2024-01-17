/* auto-generated */


export interface LightstepTracing {
  endpoint: string;

  credentials?: string;

}

export interface OpenTelemetry {
  endpoint: string;

}

export interface TracingCustomTag {
  literal?: {
  value?: string;

};

}

export interface Tracing {
  sampling: number;

  lightstep?: LightstepTracing;

  customTags?: {
  [x: string]: TracingCustomTag;

};

  provider?: {
  otel?: OpenTelemetry;

  lightstep?: LightstepTracing;

  controlplane?: {
};

};

}

