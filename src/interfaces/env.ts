/* auto-generated */


export type EnvCollection = EnvVar[];

export type EnvFromCollection = EnvFromSource[];

export interface EnvFromSource {
  secretRef: {
  name: string;

};

}

export type EnvName = string;

export interface EnvVar {
  name: string;

  value?: string;

}

