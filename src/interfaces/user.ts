/* auto-generated */

import { Tags, Links, ApiError } from './base';

export interface User {
  id?: string;

  name?: string;

  kind?: 'user';

  version?: number;

  tags?: Tags;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  idp?: string;

  email?: string;

}

export interface InviteRequest {
  emails?: string[];

}

export interface InviteResponse {
  errors?: {
  [x: string]: ApiError;

};

  invitations?: {
  [x: string]: string;

};

}

