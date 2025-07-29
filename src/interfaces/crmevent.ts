/* auto-generated */


export interface CrmEvent {
  id?: string;

  created?: Date;

  delivered?: Date;

  payload?: {
  orgCreated?: {
  version: number;

  name: string;

  accountId: string;

};

  orgUserCreated?: {
  version: number;

  org: string;

  accountId: string;

  email: string;

};

  orgUserRemoved?: {
  version: number;

  org: string;

  accountId: string;

  email: string;

};

  accountCreated?: {
  version: number;

  name: string;

  id: string;

};

  accountUserCreated?: {
  version: number;

  accountId: string;

  email: string;

};

  accountUserRemoved?: {
  version: number;

  accountId: string;

  email: string;

};

};

}

