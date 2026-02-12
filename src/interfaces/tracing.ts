/* auto-generated */


export interface LightstepTracing {
  endpoint: string;

  credentials?: string;

}

export interface OpenTelemetry {
  endpoint: string;

}

export interface Tracing {
  sampling: number;

  lightstep?: {
  endpoint: string;

  credentials?: string;

};

  customTags?: {
  [x: string]: TracingCustomTag;

};

  provider?: {
  otel?: {
  endpoint: string;

};

  lightstep?: {
  endpoint: string;

  credentials?: string;

};

  controlplane?: {
};

};

}

export interface TracingCustomTag {
  literal?: {
  value?: string;

};

}

