declare class BrowserBuffer {
    constructor(input: number, encodingOrOffset?: string | number, length?: number);
    constructor(input: string, encodingOrOffset?: string | number, length?: number);
    constructor(input: ArrayBuffer | Buffer, encodingOrOffset?: string | number, length?: number);
  
    static of(...items: any[]): BrowserBuffer;
    static from(input: string, encodingOrOffset?: string | number, length?: number): BrowserBuffer;
    static from(input: ArrayBuffer | ArrayBufferView | Buffer | BrowserBuffer, encodingOrOffset?: string | number, length?: number): BrowserBuffer;
    static isBuffer(obj: any): boolean;
    static alloc(size: number, fill?: string | number): BrowserBuffer;
  
    fill(value: string | number, offset?: number, end?: number, encoding?: string): BrowserBuffer;
  
    static concat(list: BrowserBuffer[], totalLength?: number): BrowserBuffer;
  
    static decode(string: string, encoding: 'utf8' | 'ascii' | 'base64' | 'hex'): Uint8Array;
    static decodeBase64(string: string): Uint8Array;
    static decodeHex(string: string): Uint8Array;
  
    readonly length: number;
  
    toString(encoding?: 'hex' | 'utf8' | 'ascii' | 'base64'): string;
    equals(otherBuffer: BrowserBuffer): boolean;
    slice(start?: number, end?: number): BrowserBuffer;
    copy(targetBuffer: BrowserBuffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    compare(otherBuffer: BrowserBuffer, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number): number;
    indexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: 'utf8'): number;
    lastIndexOf(value: string | number | Uint8Array, byteOffset?: number, encoding?: 'utf8'): number;
  
    private _matchAtIndex(index: number, searchBuffer: Uint8Array, searchLength?: number): boolean;
  
    toHex(): string;
    toBase64(): string;
    writeUInt16LE(value: number, offset?: number): void;
  }
  
  export default BrowserBuffer;
  