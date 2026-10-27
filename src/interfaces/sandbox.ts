/* auto-generated */


export type SandboxIde = 'vscode' | 'cursor' | 'ssh' | 'browser';

export interface SandboxScaling {
  maxSessions?: number;

  minWorkers?: number;

  maxWorkers?: number;

  idleDeleteDelay?: number;

}

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

  scaling?: {
  maxSessions?: number;

  minWorkers?: number;

  maxWorkers?: number;

  idleDeleteDelay?: number;

};

  ttl?: string;

}

export type SandboxType = 'dev' | 'worker';

