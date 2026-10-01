/* auto-generated */


export type SandboxIde = 'vscode' | 'cursor' | 'ssh' | 'browser';

export interface SandboxSpec {
  ide?: SandboxIde;

  appPort?: number;

  volume?: {
  size?: number;

};

  scaleToZeroDelay?: number;

  ttl?: string;

}

export interface SandboxVolume {
  size?: number;

}

