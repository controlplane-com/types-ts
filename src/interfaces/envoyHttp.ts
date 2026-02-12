/* auto-generated */

import { Priority, StringMatcher, RuntimeFractionalPercent, UInt32, GrpcService, ListStringMatcher, HeaderValue, HttpStatus, FractionalPercent, RuntimeFeatureFlag, ApiVersion, DurationRestricted, Duration, RetryPolicy, Empty, RouteMatch, RouteMatchRestricted, HeaderValueOption, DataSource, GoogleCallCredentials, Struct } from './envoyCommon.js';

export interface BufferSettings {
  max_request_bytes?: number;

  allow_partial_message?: boolean;

  pack_as_bytes?: boolean;

}

export interface ConnectRpc {
  priority?: Priority;

  excludedWorkloads?: string[];

  name: 'envoy.filters.http.connect_grpc_bridge';

  typed_config?: {
  "@type": 'type.googleapis.com/envoy.extensions.filters.http.connect_grpc_bridge.v3.FilterConfig';

};

}

export interface Cors {
  priority?: Priority;

  excludedWorkloads?: string[];

  name: 'envoy.filters.http.cors';

  typed_config?: {
  allow_origin_string_match?: StringMatcher[];

  allow_methods?: string;

  allow_headers?: string;

  expose_headers?: string;

  max_age?: string;

  allow_credentials?: boolean;

  filter_enabled?: RuntimeFractionalPercent;

  shadow_enabled?: RuntimeFractionalPercent;

  allow_private_network_access?: boolean;

  "@type": 'type.googleapis.com/envoy.extensions.filters.http.cors.v3.Cors';

};

}

export interface Descriptor {
  key: string;

  value?: string;

  rate_limit?: {
  name?: string;

  replaces?: {
  name?: string;

}[];

  unit?: 'second' | 'minute' | 'hour' | 'day';

  requests_per_unit?: UInt32;

};

  shadow_mode?: string;

  detailed_metric?: string;

}

export interface ExtAuthz {
  priority?: Priority;

  excludedWorkloads?: string[];

  name: 'envoy.filters.http.ext_authz';

  typed_config?: {
  grpc_service?: GrpcService;

  http_service?: {
  server_uri?: HttpUri;

  path_prefix?: string;

  authorization_request?: {
  allowed_headers?: ListStringMatcher;

  headers_to_add?: HeaderValue[];

};

  authorization_response?: {
  allowed_upstream_headers?: ListStringMatcher;

  allowed_upstream_headers_to_append?: ListStringMatcher;

  allowed_client_headers?: ListStringMatcher;

  allowed_client_headers_on_success?: ListStringMatcher;

  dynamic_metadata_from_headers?: ListStringMatcher;

};

};

  failure_mode_allow?: boolean;

  failure_mode_allow_header_add?: boolean;

  with_request_body?: BufferSettings;

  clear_route_cache?: boolean;

  status_on_error?: HttpStatus;

  metadata_context_namespaces?: string[];

  typed_metadata_context_namespaces?: string[];

  route_metadata_context_namespaces?: string[];

  route_typed_metadata_context_namespaces?: string[];

  filter_enabled?: FractionalPercent;

  deny_at_disable?: RuntimeFeatureFlag;

  include_peer_certificate?: boolean;

  stat_prefix?: string;

  bootstrap_metadata_labels_key?: string;

  allowed_headers?: ListStringMatcher;

  include_tls_session?: boolean;

  charge_cluster_response_stats?: boolean;

  transport_api_version?: ApiVersion;

  "@type": 'type.googleapis.com/envoy.extensions.filters.http.ext_authz.v3.ExtAuthz';

};

}

export interface GrpcJsonTranscoder {
  priority?: Priority;

  excludedWorkloads?: string[];

  name: 'envoy.filters.http.grpc_json_transcoder';

  typed_config?: {
  proto_descriptor?: string;

  proto_descriptor_bin?: any /* TODO: binary*/;

  services?: string[];

  print_options?: {
  add_whitespace?: boolean;

  always_print_primitive_fields?: boolean;

  always_print_enums_as_ints?: boolean;

  preserve_proto_field_names?: boolean;

  stream_newline_delimited?: boolean;

};

  match_incoming_request_route?: boolean;

  ignored_query_parameters?: string[];

  auto_mapping?: boolean;

  ignore_unknown_query_parameters?: boolean;

  convert_grpc_status?: boolean;

  url_unescape_spec?: 'ALL_CHARACTERS_EXCEPT_RESERVED' | 'ALL_CHARACTERS_EXCEPT_SLASH' | 'ALL_CHARACTERS';

  query_param_unescape_plus?: boolean;

  match_unregistered_custom_verb?: boolean;

  request_validation_options?: {
  reject_unknown_method?: boolean;

  reject_unknown_query_parameters?: boolean;

  reject_binding_body_field_collisions?: boolean;

};

  case_insensitive_enum_parsing?: boolean;

  max_request_body_size?: UInt32;

  max_response_body_size?: UInt32;

  "@type": 'type.googleapis.com/envoy.extensions.filters.http.grpc_json_transcoder.v3.GrpcJsonTranscoder';

};

}

export interface GrpcWeb {
  priority?: Priority;

  excludedWorkloads?: string[];

  name: 'envoy.filters.http.grpc_web';

  typed_config?: {
  "@type": 'type.googleapis.com/envoy.extensions.filters.http.grpc_web.v3.GrpcWeb';

};

}

export type HttpFilter = ExtAuthz | JwtAuthn | GrpcWeb | ConnectRpc | GrpcJsonTranscoder | Cors | RateLimit;

export interface HttpUri {
  uri: string;

  cluster: string;

  timeout: string | {
  seconds?: number;

  nanos?: number;

};

}

export interface HttpUriRestricted {
  uri: string;

  cluster: string;

  timeout?: DurationRestricted;

}

export interface JwtAuthn {
  priority?: Priority;

  excludedWorkloads?: string[];

  name: 'envoy.filters.http.jwt_authn';

  typed_config?: {
  providers?: {
  [x: string]: JwtProvider;

};

  rules?: JwtRequirementRuleRestricted[];

  filter_state_rules?: {
  name: string;

  requires?: JwtRequirementMap;

};

  bypass_cors_preflight?: boolean;

  requirement_map?: {
  [x: string]: JwtRequirement;

};

  "@type": 'type.googleapis.com/envoy.extensions.filters.http.jwt_authn.v3.JwtAuthentication';

};

}

export interface JwtProvider {
  issuer?: string;

  audiences?: string[];

  claim_to_headers?: {
  header_name: string;

  claim_name: string;

}[];

  remote_jwks?: {
  http_uri?: HttpUri;

  cache_duration?: Duration;

  async_fetch?: {
  fast_listener?: boolean;

  failed_refetch_duration?: Duration;

};

  retry_policy?: RetryPolicy;

};

}

export interface JwtProviderUIRestricted {
  issuer?: string;

  audiences?: string[];

  claim_to_headers?: {
  header_name: string;

  claim_name: string;

}[];

  remote_jwks?: {
  http_uri?: HttpUriRestricted;

  cache_duration?: DurationRestricted;

};

}

export interface JwtRequirement {
  provider_name?: string;

  provider_and_audiences?: {
  provider_name?: string;

  audiences?: string[];

};

  requires_any?: {
  requirements?: any[];

};

  requires_all?: {
  requirements?: any[];

};

  allow_missing_or_failed?: Empty;

  allow_missing?: Empty;

}

export interface JwtRequirementMap {
  [x: string]: JwtRequirement;

}

export interface JwtRequirementRestricted {
  provider_name?: string;

}

export interface JwtRequirementRule {
  match?: RouteMatch;

  requires?: JwtRequirement;

  requirement_name?: string;

}

export interface JwtRequirementRuleRestricted {
  match?: RouteMatchRestricted;

  requires?: JwtRequirementRestricted;

}

export interface RateLimit {
  priority?: Priority;

  excludedWorkloads?: string[];

  name: 'envoy.filters.http.ratelimit';

  typed_config?: {
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

  response_headers_to_add?: HeaderValueOption[];

  status_on_error?: HttpStatus;

  stat_prefix?: string;

  "@type": 'type.googleapis.com/envoy.extensions.filters.http.ratelimit.v3.RateLimit';

};

}

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

  initial_metadata?: HeaderValue[];

};

  transport_api_version?: ApiVersion;

}

