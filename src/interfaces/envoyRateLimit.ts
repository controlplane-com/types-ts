/* auto-generated */

import { RetryPolicy, DataSource, Empty, GoogleCallCredentials, Struct, ApiVersion, Duration, HttpStatus, HeaderValueOption } from './envoyCommon';

export interface RateLimitService {
  grpc_service: {
  envoy_grpc?: {
  cluster_name: string;

  authority?: string;

  retry_policy?: RetryPolicy;

};

  google_grpc?: {
  target_uri: string;

  channel_credentials?: {
  ssl_credentials?: {
  root_certs?: DataSource;

  private_key?: DataSource;

  cert_chain?: DataSource;

};

  google_default?: Empty;

};

  call_credentials?: GoogleCallCredentials[];

  stat_prefix: string;

  credentials_factory_name?: string;

  config?: Struct;

};

  timeout?: string | {
  seconds?: number;

  nanos?: number;

};

};

  transport_api_version?: ApiVersion;

}

export interface RateLimit {
  domain: string;

  stage?: number;

  request_type?: 'internal' | 'external' | 'both';

  timeout?: Duration;

  failure_mode_deny?: boolean;

  rate_limited_as_resource_exhausted?: boolean;

  rate_limit_service?: RateLimitService;

  enable_x_ratelimit_headers?: 'OFF' | 'DRAFT_VERSION_03';

  disable_x_envoy_ratelimited_header?: boolean;

  rate_limited_status?: HttpStatus;

  response_headers?: HeaderValueOption[];

  status_on_error?: HttpStatus;

  stat_prefix?: string;

}

