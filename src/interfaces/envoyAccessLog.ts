/* auto-generated */

import { Priority, GrpcService, ApiVersion, Duration, UInt32, RetryPolicy } from './envoyCommon.js';

export interface AccessLog {
  priority?: Priority;

  name?: 'envoy.http_grpc_access_log';

  excludedWorkloads?: string[];

  typed_config?: {
  "@type"?: any;

  common_config?: {
  log_name: string;

  grpc_service?: GrpcService;

  transport_api_version?: ApiVersion;

  buffer_flush_interval?: Duration;

  buffer_size_bytes?: UInt32;

  filter_state_objects_to_log?: string[];

  grpc_stream_retry_policy?: RetryPolicy;

};

  additional_request_headers_to_log?: string[];

  additional_response_headers_to_log?: string[];

  additional_response_trailers_to_log?: string[];

};

}

