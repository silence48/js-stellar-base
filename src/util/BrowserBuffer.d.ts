declare class BrowserBuffer {
    constructor(input: number | string | object, encodingOrOffset?: string | number, length?: number);
  
    static of(...items: any[]): BrowserBuffer;
    static from(input: string | object, encodingOrOffset?: string | Function, length?: number): BrowserBuffer;
    static alloc(size: number, fill?: number | string): BrowserBuffer;
    static concat(list: BrowserBuffer[], totalLength?: number): BrowserBuffer;
    static decode(string: string, encoding: string): BrowserBuffer;
    static decodeBase64(string: string): BrowserBuffer;
    static decodeHex(string: string): BrowserBuffer;
    static isBuffer(obj: any): boolean;
  
    length: number;
    data: Uint8Array;
  
    toString(encoding?: string): string;
    toHex(): string;
    toBase64(): string;
  
    equals(otherBuffer: BrowserBuffer): boolean;
    slice(start?: number, end?: number): BrowserBuffer;
    copy(targetBuffer: BrowserBuffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    compare(otherBuffer: BrowserBuffer, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number): number;
    fill(value: any, offset?: number, end?: number, encoding?: string): this;
    indexOf(value: string | number | Uint8Array | BrowserBuffer, byteOffset?: number, encoding?: string): number;
    lastIndexOf(value: string | number | Uint8Array | BrowserBuffer, byteOffset?: number, encoding?: string): number;
    
  }
  
  export default BrowserBuffer;
  