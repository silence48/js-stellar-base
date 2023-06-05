export default class BrowserBuffer extends Uint8Array {
    constructor(input: string | number | ArrayBuffer | Uint8Array, encodingOrOffset?: string | number, length?: number);
  
    static isBuffer(obj: any): boolean;
    static isNodeBuffer(obj: any): boolean;
  
    static alloc(size: number, fill?: string | number): BrowserBuffer;
    static from(input: any, encodingOrOffset?: any, length?: any): BrowserBuffer;
  
    static decode(string: string, encoding: string): any;
    static decodeBase64(base64: string): Uint8Array;
    static decodeHex(hex: string): Uint8Array;
    static hexToBytes(hex: string): number[];
    static concat(list: any[], totalLength?: number): BrowserBuffer;
  
    writeUInt16LE(value: number, offset: number): void;
    fill(value: string | number, offset?: number, end?: number, encoding?: string): this;
  
    slice(start?: number, end?: number): BrowserBuffer;
    copy(targetBuffer: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
    compare(otherBuffer: Uint8Array, targetStart?: number, targetEnd?: number, sourceStart?: number, sourceEnd?: number): number;
    indexOf(value: any, byteOffset?: number, encoding?: string): number;
    lastIndexOf(value: any, byteOffset?: number, encoding?: string): number;
    equals(otherBuffer: BrowserBuffer): boolean;
  
    toString(encoding?: string): string;
    toHex(): string;
    toBase64(): string;
  }
  