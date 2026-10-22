/* auto-generated */


export type SandboxIde = 'vscode' | 'cursor' | 'ssh' | 'browser';

export interface SandboxSpec {
  ide?: SandboxIde;

  type?: SandboxType;

  password?: string;

  token?: string;

  volume?: {
  initialCapacity?: number;

};

  appPort?: number;

  scaleToZeroDelay?: number;

  ttl?: string;

}

export type SandboxType = 'dev' | 'worker';

