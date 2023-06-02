
class BrowserBuffer extends Uint8Array {
  constructor(input, encodingOrOffset, length) {
    if (typeof input === 'number') {
      super(input);
      this.fill(0);
    } else if (typeof input === 'string') {
      if (typeof encodingOrOffset === 'string') {
        super(BrowserBuffer.decode(input, encodingOrOffset));
      } else {
        super(new TextEncoder().encode(input));
      }
    } else if (typeof input === 'object' && input instanceof ArrayBuffer) {
      super(input, encodingOrOffset, length);
    } else {
      throw new Error('Unsupported data type');
    }
  }

  static from(input, encodingOrOffset, length) {
    return new BrowserBuffer(input, encodingOrOffset, length);
  }

  static alloc(size, fill = 0) {
    const buffer = new BrowserBuffer(size);
    buffer.fill(fill);
    return buffer;
  }

  static concat(list, totalLength) {
    if (typeof totalLength === 'undefined') {
      totalLength = list.reduce((total, buf) => total + buf.length, 0);
    }
    const buffer = BrowserBuffer.alloc(totalLength);
    let offset = 0;
    for (let buf of list) {
      buffer.set(buf, offset);
      offset += buf.length;
    }
    return buffer;
  }

  static decode(string, encoding) {
    switch (encoding) {
      case 'utf8':
        return new TextEncoder().encode(string);
      case 'base64':
        const binaryString = atob(string);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
      case 'hex':
        const size = string.length / 2;
        const array = new Uint8Array(size);
        for (let i = 0; i < size; i++) {
          array[i] = parseInt(string.substr(i * 2, 2), 16);
        }
        return array;
      default:
        throw new Error('Unsupported encoding type');
    }
  }
}

export default BrowserBuffer;




export function Uint8ArrayAlloc(size, fill = 0) {
  const buffer = new Uint8Array(size);
  buffer.fill(fill);
  return buffer;
}

export function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

export function concatTypedArrays(a, b) { // a, b TypedArray of same type
    var c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

export function concatArrayTypedArrays(arrays) {
  const totalLength = arrays.reduce((total, arr) => total + arr.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

export function Uint8equals(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function Uint8ArrayFromUknown(data) {
  if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  } else if (Array.isArray(data)) {
    return new Uint8Array(data);
  } else if (typeof data === 'string') {
    // Convert string to byte array
    const encoder = new TextEncoder(); // This is UTF-8 by default
    return encoder.encode(data);
  } else {
    throw new Error('Unsupported data type');
  }
}