/* auto-generated */


export interface LocationDnsMessage {
  org: string;

  gvc: string;

  gvcAlias: string;

  workload: string;

  operation: 'update' | 'delete';

  deleteReason?: string;

  name: string;

  target: string;

  availabilityZone?: string;

}

