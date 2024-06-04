/* auto-generated */


export type EnvName = string;

export interface EnvVar {
  name: string;

  value?: string;

  fieldRef?: 'metadata.name' | 'metadata.namespace' | 'spec.nodeName' | 'status.hostIP' | 'status.podIP' | 'status.podIPs';

}

export type EnvCollection = EnvVar[];

