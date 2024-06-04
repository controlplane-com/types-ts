/* auto-generated */

import { LocalLink, Kind, Tags, Links } from './base';

export interface Route {
  replacePrefix?: string;

  regex?: string;

  prefix?: string;

  workloadLink: string;

  port?: number;

  hostPrefix?: string;

}

export interface ExternalPortTLS {
  minProtocolVersion?: 'TLSV1_2' | 'TLSV1_1' | 'TLSV1_0';

  cipherSuites?: ('ECDHE-ECDSA-AES256-GCM-SHA384' | 'ECDHE-ECDSA-CHACHA20-POLY1305' | 'ECDHE-ECDSA-AES128-GCM-SHA256' | 'ECDHE-RSA-AES256-GCM-SHA384' | 'ECDHE-RSA-CHACHA20-POLY1305' | 'ECDHE-RSA-AES128-GCM-SHA256' | 'AES256-GCM-SHA384' | 'AES128-GCM-SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_CHACHA20_POLY1305_SHA256' | 'TLS_AES_256_GCM_SHA384' | 'TLS_AES_128_GCM_SHA256' | 'DES-CBC3-SHA' | 'ECDHE-RSA-AES128-SHA' | 'ECDHE-RSA-AES256-SHA' | 'AES128-SHA' | 'AES256-SHA')[];

  clientCertificate?: {
  secretLink?: string;

};

  serverCertificate?: {
  secretLink?: string;

};

}

export interface ExternalPort {
  number?: number;

  protocol?: 'http' | 'http2' | 'tcp';

  routes?: Route[];

  cors?: {
  allowOrigins?: {
  exact?: string;

}[];

  allowMethods?: string[];

  allowHeaders?: string[];

  exposeHeaders?: string[];

  maxAge?: string;

  allowCredentials?: boolean;

};

  tls?: {
  minProtocolVersion?: 'TLSV1_2' | 'TLSV1_1' | 'TLSV1_0';

  cipherSuites?: ('ECDHE-ECDSA-AES256-GCM-SHA384' | 'ECDHE-ECDSA-CHACHA20-POLY1305' | 'ECDHE-ECDSA-AES128-GCM-SHA256' | 'ECDHE-RSA-AES256-GCM-SHA384' | 'ECDHE-RSA-CHACHA20-POLY1305' | 'ECDHE-RSA-AES128-GCM-SHA256' | 'AES256-GCM-SHA384' | 'AES128-GCM-SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_CHACHA20_POLY1305_SHA256' | 'TLS_AES_256_GCM_SHA384' | 'TLS_AES_128_GCM_SHA256' | 'DES-CBC3-SHA' | 'ECDHE-RSA-AES128-SHA' | 'ECDHE-RSA-AES256-SHA' | 'AES128-SHA' | 'AES256-SHA')[];

  clientCertificate?: {
  secretLink?: string;

};

  serverCertificate?: {
  secretLink?: string;

};

};

}

export interface DomainSpec {
  dnsMode?: 'cname' | 'ns';

  gvcLink?: string;

  acceptAllHosts?: boolean;

  ports?: ExternalPort[];

}

export interface DnsConfigRecord {
  type?: string;

  ttl?: number;

  host?: string;

  value?: string;

}

export interface DomainStatus {
  endpoints?: {
  url: string;

  workloadLink?: LocalLink;

}[];

  status?: 'initializing' | 'ready' | 'pendingDnsConfig' | 'pendingCertificate' | 'usedByGvc' | 'warning';

  warning?: string;

  locations?: ({
  name: string;

  certificateStatus?: 'initializing' | 'ready' | 'pendingDnsConfig' | 'pendingCertificate' | 'ignored';

})[];

  fingerprint?: string;

  dnsConfig?: DnsConfigRecord[];

}

export interface Domain {
  id?: string;

  kind?: Kind;

  version?: number;

  description?: string;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  name?: string;

  spec?: DomainSpec;

  status?: DomainStatus;

}

