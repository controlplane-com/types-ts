/* auto-generated */


export interface AdditionalAddress {
  address?: Address;

}

export interface Address {
  socket_address?: SocketAddress;

  pipe?: Pipe;

  envoy_internal_address?: EnvoyInternalAddress;

}

export interface ApiConfigSource {
  api_type?: ApiType;

  transport_api_version?: ApiVersion;

  cluster_names?: string[];

  grpc_services?: GrpcService[];

  refresh_delay?: Duration;

  request_timeout?: Duration;

  rate_limit_settings?: RateLimitSettings;

  set_node_on_first_message_only?: boolean;

  config_validators?: TypedExtensionConfig[];

}

export type ApiType = 'DEPRECATED_AND_UNAVAILABLE_DO_NOT_USE' | 'REST' | 'GRPC' | 'DELTA_GRPC';

export type ApiVersion = 'AUTO' | 'V2' | 'V3';

export interface BindConfig {
  source_address?: SocketAddress;

  freebind?: boolean;

  socket_options?: SocketOption[];

  extra_source_addresses?: ExtraSourceAddress[];

  additional_source_addresses?: SocketAddress[];

  local_address_selector?: TypedExtensionConfig;

}

export type CodecClientType = 'HTTP1' | 'HTTP2';

export interface ConfigSource {
  path?: string;

  path_config_source?: PathConfigSource;

  api_config_source?: ApiConfigSource;

  initial_fetch_timeout?: Duration;

  resource_api_version?: ApiVersion;

}

export interface CustomHealthCheck {
  name: string;

  typed_config?: any;

}

export interface DataSource {
  filename?: string;

  inline_bytes?: any /* TODO: binary*/;

  inline_string?: string;

  environment_variable?: string;

}

export interface DnsResolutionConfig {
  resolvers?: Address[];

  dns_resolver_options?: DnsResolverOptions;

}

export interface DnsResolverOptions {
  use_tcp_for_dns_lookups?: boolean;

  no_default_search_domain?: boolean;

}

export interface DoubleMatcher {
  range?: DoubleRange;

  exact?: number;

}

export interface DoubleRange {
  start?: number;

  end?: number;

}

export type Duration = string | {
  seconds?: number;

  nanos?: number;

};

export type DurationRestricted = string;

export interface Empty {
}

export interface EnvoyInternalAddress {
  server_listener_name: string;

  endpoint_id?: string;

}

export interface ExtensionConfigSource {
  config_source?: ConfigSource;

  default_config?: any;

  apply_default_config_without_warming?: boolean;

  type_urls?: string[];

}

export interface ExtraSourceAddress {
  address?: Address;

  socket_options?: SocketOptionsOverride;

}

export interface FractionalPercent {
  numerator?: number;

  denominator?: number;

}

export interface GoogleCallCredentials {
  access_token?: string;

  google_compute_engine?: Empty;

  google_refresh_token?: string;

  service_account_jwt_access?: {
  json_key?: string;

  token_lifetime_seconds?: number;

};

  google_iam?: {
  authorization_token?: string;

  authority_selector?: string;

};

  from_plugin?: {
  name?: string;

  typed_config?: any;

};

  sts_service?: {
  token_exchange_service_uri?: string;

  resource?: string;

  audience?: string;

  scope?: string;

  requested_token_type?: string;

  subject_token_path: string;

  subject_token_type: string;

  actor_token_path?: string;

  actor_token_type?: string;

};

}

export interface GrpcHealthCheck {
  service_name?: string;

  authority?: string;

  initial_metadata?: HeaderValueOption[];

}

export interface GrpcService {
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

}

export type HeaderAppendAction = 'APPEND_IF_EXISTS_OR_ADD' | 'ADD_IF_ABSENT' | 'OVERWRITE_IF_EXISTS_OR_ADD' | 'OVERWRITE_IF_EXISTS';

export interface HeaderMatcher {
  name: string;

  safe_regex_match?: RegexMatcher;

  range_match?: IntRange;

  present_match?: boolean;

  string_match?: StringMatcher;

  invert_match?: boolean;

  treat_missing_header_as_empty?: boolean;

}

export interface HeaderValue {
  key: string;

  value?: string;

  raw_value?: any /* TODO: binary*/;

}

export interface HeaderValueOption {
  header?: HeaderValue;

  append?: boolean;

  append_action?: HeaderAppendAction;

  keep_empty_value?: boolean;

}

export interface HealthCheck {
  timeout?: Duration;

  interval?: Duration;

  initial_jitter?: Duration;

  interval_jitter?: Duration;

  interval_jitter_percent?: UInt32;

  unhealthy_threshold?: UInt32;

  healthy_threshold?: UInt32;

  reuse_connection?: boolean;

  http_health_check?: HttpHealthCheck;

  tcp_health_check?: TcpHealthCheck;

  grpc_health_check?: GrpcHealthCheck;

  custom_health_check?: CustomHealthCheck;

  no_traffic_interval?: Duration;

  no_traffic_healthy_interval?: Duration;

  unhealthy_interval?: Duration;

  healthy_edge_interval?: Duration;

  event_log_path?: string;

  event_logger?: TypedExtensionConfig[];

  always_log_health_check_failures?: boolean;

  tls_options?: HealthCheckTlsOptions;

  transport_socket_match_criteria?: Struct;

}

export interface HealthCheckPayload {
  text?: string;

  binary?: any /* TODO: binary*/;

}

export interface HealthCheckTlsOptions {
  alpn_protocols?: string[];

}

export type HealthStatus = 'UNKNOWN' | 'HEALTHY' | 'UNHEALTHY' | 'DRAINING' | 'TIMEOUT' | 'DEGRADED';

export interface HealthStatusSet {
  statuses?: HealthStatus[];

}

export interface Http1ProtocolOptions {
  allow_absolute_url?: boolean;

  accept_http_10?: boolean;

  default_host_for_http_10?: string;

  header_key_format?: {
  proper_case_words?: {
  interval?: Duration;

  timeout?: Duration;

  interval_jitter?: Percent;

  connection_idle_interval?: Duration;

};

  stateful_formatter?: TypedExtensionConfig;

};

  enable_trailers?: boolean;

  allow_chunked_length?: boolean;

  override_stream_error_on_invalid_http_message?: boolean;

  send_fully_qualified_url?: boolean;

}

export interface Http2ProtocolOptions {
  hpack_table_size?: UInt32;

  max_concurrent_streams?: UInt32;

  initial_stream_window_size?: UInt32;

  initial_connection_window_size?: UInt32;

  allow_connect?: boolean;

  max_outbound_frames?: UInt32;

  max_outbound_control_frames?: UInt32;

  max_consecutive_inbound_frames_with_empty_payload?: UInt32;

  max_inbound_priority_frames_per_stream?: UInt32;

  max_inbound_window_update_frames_per_data_frame_sent?: UInt32;

  stream_error_on_invalid_http_messaging?: boolean;

  override_stream_error_on_invalid_http_message?: boolean;

  connection_keepalive?: KeepaliveSettings;

}

export interface HttpHealthCheck {
  host?: string;

  path: string;

  receive?: HealthCheckPayload[];

  response_buffer_size?: UInt64;

  request_headers_to_add?: HeaderValueOption[];

  request_headers_to_remove?: string[];

  expected_statuses?: IntRange[];

  retriable_statuses?: IntRange[];

  codec_client_type?: CodecClientType;

  service_name_matcher?: StringMatcher;

  method?: RequestMethod;

}

export interface HttpProtocolOptions {
  idle_timeout?: Duration;

  max_connection_duration?: Duration;

  max_headers_count?: UInt32;

  max_stream_duration?: Duration;

  headers_with_underscores_action?: 'ALLOW' | 'REJECT_REQUEST' | 'DROP_HEADER';

}

export interface HttpStatus {
  code?: StatusCode;

}

export interface IntRange {
  start?: number;

  end?: number;

}

export interface KeepaliveSettings {
  interval?: Duration;

  timeout: string | {
  seconds?: number;

  nanos?: number;

};

  interval_jitter?: Percent;

  connection_idle_interval?: Duration;

}

export interface ListStringMatcher {
  patterns?: StringMatcher[];

}

export type ListValue = any[];

export interface Locality {
  region?: string;

  zone?: string;

  sub_zone?: string;

}

export interface MetadataMatcher {
  filter: string;

  path?: {
  key: string;

}[];

  value: {
  null_match?: any;

  double_match?: DoubleMatcher;

  string_match?: StringMatcher;

  bool_match?: boolean;

  present_match?: boolean;

};

  invert?: boolean;

}

export interface PathConfigSource {
  path: string;

  watched_directory?: WatchedDirectory;

}

export type Percent = number;

export interface Pipe {
  path: string;

  mode?: number;

}

export type Port = number;

export type Priority = number;

export interface QueryParameterMatcher {
  name: string;

  string_match?: StringMatcher;

  present_match?: boolean;

}

export interface RateLimitSettings {
  max_tokens?: UInt32;

  fill_rate?: number;

}

export interface RegexMatcher {
  google_re2?: {
  max_program_size?: number;

};

  regex: string;

}

export type RequestMethod = 'METHOD_UNSPECIFIED' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';

export interface RetryPolicy {
  retry_back_off?: TimeInterval;

  num_retries?: number;

}

export interface RouteMatch {
  prefix?: string;

  path?: string;

  safe_regex?: RegexMatcher;

  path_separated_prefix?: string;

  path_match_policy?: TypedExtensionConfig;

  case_sensitive?: boolean;

  runtime_fraction?: RuntimeFractionalPercent;

  headers?: HeaderMatcher[];

  query_parameters?: QueryParameterMatcher[];

  grpc?: {
  presented?: boolean;

  validated?: boolean;

};

  tls_context?: {
  presented?: boolean;

  validated?: boolean;

};

  dynamic_metadata?: MetadataMatcher[];

}

export interface RouteMatchRestricted {
  prefix?: string;

  headers?: HeaderMatcher[];

}

export type RoutingPriority = 'DEFAULT' | 'HIGH';

export interface RuntimeDouble {
  default_value?: number;

  runtime_key: string;

}

export interface RuntimeFeatureFlag {
  default_value: boolean;

  runtime_key: string;

}

export interface RuntimeFractionalPercent {
  default_value?: FractionalPercent;

  runtime_key: string;

}

export interface SocketAddress {
  protocol?: 'TCP' | 'UDP';

  address: string;

  port_value?: number;

  named_port?: string;

  resolver_name?: any;

  ipv4_compat?: boolean;

}

export interface SocketOption {
  description?: string;

  level?: number;

  name?: number;

  int_value?: number;

  buf_value?: any /* TODO: binary*/;

  state?: 'STATE_PREBIND' | 'STATE_BOUND' | 'STATE_LISTENING';

}

export interface SocketOptionsOverride {
  socket_options?: SocketOption[];

}

export type StatusCode = 'Empty' | 'Continue' | 'OK' | 'Created' | 'Accepted' | 'NonAuthoritativeInformation' | 'NoContent' | 'ResetContent' | 'PartialContent' | 'MultiStatus' | 'AlradyReported' | 'IMUsed' | 'MultipleChoices' | 'MovedPermanently' | 'Found' | 'SeeOther' | 'NotModified' | 'UseProxy' | 'TemporaryRedirect' | 'PermanentRedirect' | 'BadRequest' | 'Unauthroized' | 'PaymentRequired' | 'Forbidden' | 'NotFound' | 'MethodNotAllowed' | 'NotAcceptable' | 'ProxyAuthenticationRequired' | 'RequestTimeout' | 'Conflict' | 'Gone' | 'LengthRequired' | 'PreconditionFailed' | 'PayloadTooLarge' | 'URITooLong' | 'UnsupportedMediaType' | 'RangeNotSatisfiable' | 'ExpectationFailed' | 'MisdirectedRequest' | 'UnprocessableEntity' | 'Locked' | 'FailedDependency' | 'UpgradeRequired' | 'PreconditionRequired' | 'TooManyRequests' | 'RequestHeaderFieldsTooLarge' | 'InternalServerError' | 'NotImplemented' | 'BadGateway' | 'ServiceUnavailable' | 'GatewayTimeout' | 'HTTPVersionNotSupported' | 'VariantAlsoNegotiates' | 'InsufficientStorage' | 'LoopDetected' | 'NotExtended' | 'NetworkAuthenticationRequired';

export interface StringMatcher {
  exact?: string;

  prefix?: string;

  suffix?: string;

  safe_regex?: RegexMatcher;

  contains?: string;

  ignore_case?: boolean;

}

export interface Struct {
  [x: string]: any;

}

export interface TcpHealthCheck {
  send?: HealthCheckPayload;

  receive?: HealthCheckPayload[];

}

export interface TcpKeepalive {
  keepalive_probes?: UInt32;

  keepalive_time?: UInt32;

  keepalive_interval?: UInt32;

}

export interface TimeInterval {
  base_interval: string | {
  seconds?: number;

  nanos?: number;

};

  max_interval?: Duration;

}

export interface TransportSocket {
  name: string;

  typed_config?: {
  "@type"?: 'type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext';

  sni?: string;

};

}

export interface TypedExtensionConfig {
  name: string;

  typed_config?: any;

}

export type UInt32 = number;

export type UInt64 = number;

export interface UpstreamHttpProtocolOptions {
  auto_sni?: boolean;

  auto_san_validation?: boolean;

  override_auto_sni_header?: string;

}

export interface ValueMatcher {
  null_match?: any;

  double_match?: DoubleMatcher;

  string_match?: StringMatcher;

  bool_match?: boolean;

  present_match?: boolean;

}

export interface WatchedDirectory {
  path: string;

}

