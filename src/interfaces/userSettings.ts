/* auto-generated */

import { Links } from './base.js';

export interface UserSettings {
  kind?: 'userSettings';

  version?: number;

  created?: Date;

  lastModified?: Date;

  links?: Links;

  global?: UserSettingsGlobal;

  orgs?: {
  [x: string]: UserSettingsOrg;

};

}

export interface UserSettingsGlobal {
  [x: string]: any;

}

export interface UserSettingsOrg {
  [x: string]: any;

}

