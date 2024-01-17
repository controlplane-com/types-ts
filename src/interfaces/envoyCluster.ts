/* auto-generated */

import { Struct, TransportSocket, ConfigSource, Duration, UInt32, Locality, Address, AdditionalAddress, HealthStatus, FractionalPercent, HealthCheck, RoutingPriority, Percent, UpstreamHttpProtocolOptions, HttpProtocolOptions, Http1ProtocolOptions, Http2ProtocolOptions, TimeInterval, DnsResolutionConfig, TypedExtensionConfig, BindConfig, UInt64, RuntimeDouble, HealthStatusSet, TcpKeepalive, ExtensionConfigSource } from './envoyCommon';

export interface Metadata {
  filter_metadata?: {
  [x: string]: Struct;

};

  typed_filter_metadata?: {
  [x: string]: any;

};

}

export interface Cluster {
  name: string;

  transport_socket_matches?: {
  name: string;

  match?: Struct;

  transport_socket?: TransportSocket;

}[];

  alt_stat_name?: string;

  type?: 'STATIC' | 'STRICT_DNS' | 'LOGICAL_DNS' | 'EDS' | 'ORIGINAL_DST';

  cluster_type?: {
  name: string;

  typed_config?: any;

};

  eds_cluster_config?: {
  eds_config?: ConfigSource;

  service_name?: string;

};

  connect_timeout?: Duration;

  per_connection_buffer_limit_bytes?: UInt32;

  lb_policy?: 'ROUND_ROBIN' | 'LEAST_REQUEST' | 'RING_HASH' | 'RANDOM' | 'MAGLEV' | 'CLUSTER_PROVIDED' | 'LOAD_BALANCING_POLICY_CONFIG';

  load_assignment?: {
  cluster_name: string;

  endpoints?: {
  locality?: Locality;

  lb_endpoints?: {
  endpoint?: {
  address?: Address;

  health_check_config?: {
  port_value?: number;

  hostname?: string;

  address?: Address;

  disable_active_health_check?: boolean;

};

  hostname?: string;

  additional_addresses?: AdditionalAddress[];

};

  health_status?: HealthStatus;

  metadata?: Metadata;

  load_balancing_weight?: number;

}[];

  load_balancing_weight?: number;

  priority?: UInt32;

}[];

  policy?: {
  drop_overloads?: {
  category: string;

  drop_percentage?: FractionalPercent;

}[];

  overprovisioning_factor?: UInt32;

  endpoint_stale_after?: Duration;

  weighted_priority_health?: boolean;

};

};

  health_checks?: HealthCheck[];

  max_requests_per_connection?: UInt32;

  circuit_breakers?: {
  thresholds?: {
  priority?: RoutingPriority;

  max_connections?: UInt32;

  max_pending_requests?: UInt32;

  max_requests?: UInt32;

  retry_budget?: {
  budget_percent?: Percent;

  min_retry_concurrency?: UInt32;

};

  track_remaining?: boolean;

  max_connection_pools?: UInt32;

}[];

  per_host_thresholds?: {
  priority?: RoutingPriority;

  max_connections?: UInt32;

  max_pending_requests?: UInt32;

  max_requests?: UInt32;

  retry_budget?: {
  budget_percent?: Percent;

  min_retry_concurrency?: UInt32;

};

  track_remaining?: boolean;

  max_connection_pools?: UInt32;

}[];

};

  upstream_http_protocol_options?: UpstreamHttpProtocolOptions;

  common_http_protocol_options?: HttpProtocolOptions;

  http_protocol_options?: Http1ProtocolOptions;

  http2_protocol_options?: Http2ProtocolOptions;

  typed_extension_protocol_options?: {
  [x: string]: any;

}[];

  dns_refresh_rate?: Duration;

  dns_failure_refresh_rate?: TimeInterval;

  respect_dns_ttl?: boolean;

  dns_lookup_family?: 'AUTO' | 'V4_ONLY' | 'V6_ONLY' | 'V4_PREFERRED' | 'ALL';

  dns_resolvers?: Address[];

  use_tcp_for_dns_lookups?: boolean;

  dns_resolution_config?: DnsResolutionConfig;

  typed_dns_resolver_config?: TypedExtensionConfig;

  wait_for_warm_on_init?: boolean;

  outlier_detection?: {
  consecutive_5xx?: UInt32;

  interval?: Duration;

  base_ejection_time?: Duration;

  max_ejection_percent?: UInt32;

  enforcing_consecutive5xx?: UInt32;

  enforcing_success_rate?: UInt32;

  success_rate_minimum_hosts?: UInt32;

  success_rate_request_volume?: UInt32;

  success_rate_stdev_factor?: UInt32;

  consecutive_gateway_failure?: UInt32;

  enforcing_consecutive_gateway_failure?: UInt32;

  split_external_local_origin_errors?: boolean;

  consecutive_local_origin_failure?: UInt32;

  enforcing_consecutive_local_origin_failure?: UInt32;

  enforcing_local_origin_success_rate?: UInt32;

  failure_percentage_threshold?: UInt32;

  enforcing_failure_percentage?: UInt32;

  enforcing_failure_percentage_local_origin?: UInt32;

  failure_percentage_minimum_hosts?: UInt32;

  failure_percentage_request_volume?: UInt32;

  max_ejection_time?: Duration;

  max_ejection_time_jitter?: Duration;

  successful_active_health_check_uneject_host?: boolean;

};

  cleanup_interval?: Duration;

  upstream_bind_config?: BindConfig;

  lb_subset_config?: {
  fallback_policy?: 'NO_FALLBACK' | 'ANY_ENDPOINT' | 'DEFAULT_SUBSET';

  default_subset?: Struct;

  locality_weight_aware?: boolean;

  scale_locality_weight?: boolean;

  panic_mode_any?: boolean;

  list_as_any?: boolean;

  metadata_fallback_policy?: 'METADATA_NO_FALLBACK' | 'FALLBACK_LIST';

};

  ring_hash_lb_config?: {
  minimum_ring_size?: UInt64;

  hash_function?: 'XX_HASH' | 'MURMUR_HASH_2';

  maximum_ring_size?: UInt64;

};

  maglev_lb_config?: {
  table_size?: UInt64;

};

  least_request_lb_config?: {
  choice_count?: UInt64;

  active_request_bias?: RuntimeDouble;

  slow_start_config?: {
  slow_start_window?: Duration;

  aggression?: RuntimeDouble;

  min_weight_percent?: Percent;

};

};

  common_lb_config?: {
  healthy_panic_threshold?: Percent;

  zone_aware_lb_config?: {
  routing_enabled?: Percent;

  min_cluster_size?: UInt64;

  fail_traffic_on_panic?: boolean;

};

  update_merge_window?: Duration;

  ignore_new_hosts_until_first_hc?: boolean;

  close_connections_on_host_set_change?: boolean;

  consistent_hashing_lb_config?: {
  use_hostname_for_hashing?: boolean;

  hash_balance_factor?: UInt32;

};

  override_host_status?: HealthStatusSet;

};

  transport_socket?: TransportSocket;

  metadata?: Metadata;

  protocol_selection?: 'USE_CONFIGURED_PROTOCOL' | 'USE_DOWNSTREAM_PROTOCOL';

  upstream_connection_options?: {
  tcp_keepalive?: TcpKeepalive;

  set_local_interface_name_on_upstream_connections?: boolean;

};

  close_connections_on_host_health_failure?: boolean;

  ignore_health_on_host_removal?: boolean;

  filters?: {
  name: string;

  typed_config?: any;

  config_discovery?: ExtensionConfigSource;

}[];

  load_balancing_policy?: {
  policies?: {
  typed_extension_config?: TypedExtensionConfig;

}[];

};

  track_timeout_budgets?: boolean;

  upstream_config?: TypedExtensionConfig;

  track_cluster_stats?: {
  timeout_budgets?: boolean;

  request_response_sizes?: boolean;

  per_endpoint_stats?: boolean;

};

  preconnect_policy?: {
  per_upstream_preconnect_ratio?: number;

  predictive_preconnect_ratio?: number;

};

  connection_pool_per_downstream_connection?: boolean;

}

