/* auto-generated */


export interface UserEvent {
  id?: string;

  created?: Date;

  delivered?: Date;

  payload?: {
  userCreated?: {
  version: number;

  accountId: string;

  email: string;

};

  userRemoved?: {
  version: number;

  accountId: string;

  email: string;

};

};

}

