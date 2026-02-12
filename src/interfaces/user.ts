/* auto-generated */

import { ApiError, Tags, Links } from './base.js';

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

