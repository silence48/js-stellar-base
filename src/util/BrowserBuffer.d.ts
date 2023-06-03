export default class BrowserBuffer {
    constructor(input: string | ArrayBuffer | number | ArrayLike<number> | Iterable<number>, encodingOrOffset?: string | number | ((v: number, k: number) => number), length?: number);
    
    static of(...items: number[]): BrowserBuffer;
    
    static from(input: ArrayLike<number> | Iterable<number> | string | ArrayBuffer, encodingOrOffset?: string | number, length?: number): BrowserBuffer;
    
    static alloc(size: number, fill?: number | string): BrowserBuffer;
    
    static concat(list: (BrowserBuffer | Uint8Array)[], totalLength?: number): BrowserBuffer;
    
    static decode(string: string, encoding: 'utf8' | 'base64' | 'hex'): Uint8Array;
    
    static isBuffer(obj: any): boolean;
    
    toString(encoding: 'utf8' | 'ascii' | 'base64' | 'hex'): string;
  }
  
  //export = BrowserBuffer;



  