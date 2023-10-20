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

  lightstep?: LightstepTracing;

  provider?: {
  otel?: OpenTelemetry;

  lightstep?: LightstepTracing;

};

}

