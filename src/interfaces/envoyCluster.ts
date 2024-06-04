/* auto-generated */

import { Struct } from './envoyCommon';

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

  excludedWorkloads?: string[];

  transport_socket_matches?: any;

  alt_stat_name?: any;

  type?: 'STATIC' | 'STRICT_DNS' | 'LOGICAL_DNS' | 'EDS' | 'ORIGINAL_DST';

  cluster_type?: any;

  eds_cluster_config?: any;

  connect_timeout?: any;

  per_connection_buffer_limit_bytes?: any;

  lb_policy?: any;

  load_assignment?: {
  cluster_name: string;

  endpoints?: any;

  policy?: any;

};

  health_checks?: any;

  max_requests_per_connection?: any;

  circuit_breakers?: any;

  upstream_http_protocol_options?: any;

  common_http_protocol_options?: any;

  http_protocol_options?: any;

  http2_protocol_options?: any;

  typed_extension_protocol_options?: any;

  dns_refresh_rate?: any;

  dns_failure_refresh_rate?: any;

  respect_dns_ttl?: any;

  dns_lookup_family?: any;

  dns_resolvers?: any;

  use_tcp_for_dns_lookups?: any;

  dns_resolution_config?: any;

  typed_dns_resolver_config?: any;

  wait_for_warm_on_init?: any;

  outlier_detection?: any;

  cleanup_interval?: any;

  upstream_bind_config?: any;

  lb_subset_config?: any;

  ring_hash_lb_config?: any;

  maglev_lb_config?: any;

  least_request_lb_config?: any;

  common_lb_config?: any;

  transport_socket?: any;

  metadata?: any;

  protocol_selection?: any;

  upstream_connection_options?: any;

  close_connections_on_host_health_failure?: any;

  ignore_health_on_host_removal?: any;

  filters?: any;

  load_balancing_policy?: any;

  track_timeout_budgets?: any;

  upstream_config?: any;

  track_cluster_stats?: any;

  preconnect_policy?: any;

  connection_pool_per_downstream_connection?: any;

}

