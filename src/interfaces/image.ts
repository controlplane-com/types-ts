/* auto-generated */

import { Kind, Tags, Links } from './base.js';

export interface Image {
  id?: string;

  name?: string;

  kind?: Kind;

  version?: number;

  created?: Date;

  lastModified?: Date;

  tags?: Tags;

  links?: Links;

  repository?: string;

  tag?: string;

  manifest?: {
  [x: string]: any;

};

  digest?: string;

}

export interface ImageSummary {
  kind?: Kind;

  links?: Links;

  repositories?: {
  name?: string;

  tagsCount?: number;

}[];

}

