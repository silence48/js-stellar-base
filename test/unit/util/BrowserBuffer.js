class BrowserBuffer {
  constructor(input, encodingOrOffset, length) {
    if (typeof input === 'number') {
      this.data = new Uint8Array(input);
      this.data.fill(0);
    } else if (typeof input === 'string') {
      if (typeof encodingOrOffset === 'string') {
        this.data = BrowserBuffer.decode(input, encodingOrOffset);
      } else {
        this.data = new TextEncoder().encode(input);
      }
    } else if (typeof input === 'object' && input instanceof ArrayBuffer) {
      this.data = new Uint8Array(input, encodingOrOffset, length);
    } else if (BrowserBuffer.isBuffer(input)) {
      this.data = new Uint8Array(input);
    } else {
      throw new Error('Unsupported data type');
    }
  }
  /*
  constructor(input, encodingOrOffset, length) {
    if (typeof input === 'number') {
      this.data = new Uint8Array(input);
      this.data.fill(0);
    } else if (typeof input === 'string') {
      if (typeof encodingOrOffset === 'string') {
        this.data = BrowserBuffer.decode(input, encodingOrOffset);
      } else {
        this.data = new TextEncoder().encode(input);
      }
    } else if (typeof input === 'object' && input instanceof ArrayBuffer) {
      this.data = new Uint8Array(input, encodingOrOffset, length);
    } else if (BrowserBuffer.isBuffer(input)) {
      this.data = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
    } else {
      throw new Error('Unsupported data type');
    }
  }
  
  constructor(input, encodingOrOffset, length) {
    console.log('trying to make a browserbuffer', input, encodingOrOffset, length)
    console.log(`typeof input: ${typeof input}`)
    console.log(`type of data is ${typeof input.data}`)
    if (typeof input === 'number') {
      this.data = new Uint8Array(input);
      this.data.fill(0);
    } else if (typeof input === 'string') {
      if (typeof encodingOrOffset === 'string') {
        this.data = BrowserBuffer.decode(input, encodingOrOffset);
      } else {
        this.data = new TextEncoder().encode(input);
      }
    } else if (typeof input === 'object' && input instanceof ArrayBuffer) {
      this.data = new Uint8Array(input, encodingOrOffset, length);
    } else if (BrowserBuffer.isBuffer(input)) {
      this.data = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
    } else {
      throw new Error('Unsupported data type');
    }
  }
*/

  static of(...items) {
    return new BrowserBuffer(items);
  }

  static from(input, encodingOrOffset, length) {
    if (typeof input === 'string') {
      return new BrowserBuffer(input, encodingOrOffset);
    }
  
    if (BrowserBuffer.isBuffer(input)) {
      return new BrowserBuffer(input);
    }
  
    if (typeof input === 'object' && (Array.isArray(input) || input instanceof ArrayBuffer)) {
      if (typeof encodingOrOffset === 'function') {
        const mapfn = encodingOrOffset;
        const arrayLike = Array.from(input, mapfn);
        return new BrowserBuffer(arrayLike);
      }
      return new BrowserBuffer(input, encodingOrOffset, length);
    }
  
    throw new Error('Unsupported data type');
  }

  static isBuffer(obj) {
    return obj instanceof BrowserBuffer || obj instanceof Uint8Array || BrowserBuffer.isNodeBuffer(obj);
  }

  static isNodeBuffer(obj) {
    return typeof obj === 'object' &&
      typeof obj.constructor === 'function' &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj);
  }

  static alloc(size, fill = 0) {
    const buffer = new BrowserBuffer(size);
    if (typeof fill === 'string') {
      const fillBuffer = BrowserBuffer.from(fill, 'utf8');
      for (let i = 0; i < buffer.length; i += 1) {
        buffer.data[i] = fillBuffer.data[i % fillBuffer.length];
      }
    } else {
      buffer.data.fill(fill);
    }
    return buffer;
  }

  fill(value, offset = 0, end = this.data.length, encoding = 'utf8') {
    const fillBuffer = BrowserBuffer.from(value, encoding);
    for (let i = offset; i < end; i += 1) {
      this.data[i] = fillBuffer[i % fillBuffer.length];
    }
    return this;
  }

  static concat(list, totalLength) {
    if (typeof totalLength === 'undefined') {
      totalLength = list.reduce((total, buf) => total + buf.length, 0);
    }
    const buffer = BrowserBuffer.alloc(totalLength);
    let offset = 0;
    list.forEach(buf => {
      buffer.set(buf, offset);
      offset += buf.length;
    });
    return buffer;
  }

  static decode(string, encoding) {
    switch (encoding) {
      case 'utf8':
        return new TextEncoder().encode(string);
      case 'ascii':
        return new TextEncoder().encode(string);
      case 'base64':
        return this.decodeBase64(string);
      case 'hex':
        return this.decodeHex(string);
      default:
        throw new Error('Unsupported encoding type');
    }
  }

  static decodeBase64(string) {
    const binaryString = atob(string);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i += 1) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  static decodeHex(string) {
    const size = string.length / 2;
    const array = new Uint8Array(size);
    for (let i = 0; i < size; i += 1) {
      array[i] = parseInt(string.substr(i * 2, 2), 16);
    }
    return array;
  }

  get length() {
    return this.data.length;
  }

  toString(encoding = 'utf8') {
    switch (encoding) {
      case 'hex':
        return this.toHex();
      case 'utf8':
        return new TextDecoder().decode(this.data.buffer);
      case 'ascii': // Treat 'ascii' encoding the same as 'utf8'
        return new TextDecoder().decode(this.data.buffer);
      case 'base64':
        return this.toBase64();
      default:
        throw new Error('Unsupported encoding type');
    }
  }

  equals(otherBuffer) {
    if (!(otherBuffer instanceof BrowserBuffer)) {
      throw new Error('Argument must be a BrowserBuffer');
    }
    return this.data.every((value, i) => value === otherBuffer.data[i]);
  }

  slice(start = 0, end = this.data.length) {
    return new BrowserBuffer(this.data.slice(start, end));
  }

  copy(targetBuffer, targetStart = 0, sourceStart = 0, sourceEnd = this.data.length) {
    const sourceData = this.data.slice(sourceStart, sourceEnd);
    targetBuffer.set(sourceData, targetStart);
    return sourceData.length;
  }

  compare(otherBuffer, targetStart = 0, targetEnd = otherBuffer.data.length, sourceStart = 0, sourceEnd = this.data.length) {
    const targetData = otherBuffer.data.slice(targetStart, targetEnd);
    const sourceData = this.data.slice(sourceStart, sourceEnd);
    return sourceData.every((value, i) => value === targetData[i]) ? 0 : 1;
  }

  indexOf(value, byteOffset = 0, encoding = 'utf8') {
    const searchBuffer = BrowserBuffer.from(value, encoding);
    const searchLength = searchBuffer.length;

    for (let i = byteOffset; i < this.data.length - searchLength + 1; i += 1) {
      if (this._matchAtIndex(i, searchBuffer)) {
        return i;
      }
    }
    return -1;
  }

  lastIndexOf(value, byteOffset = this.data.length - 1, encoding = 'utf8') {
    const searchBuffer = BrowserBuffer.from(value, encoding);
    const searchLength = searchBuffer.length;

    for (let i = byteOffset; i >= searchLength - 1; i -= 1) {
      if (this._matchAtIndex(i, searchBuffer, searchLength)) {
        return i - searchLength + 1;
      }
    }
    return -1;
  }

  _matchAtIndex(index, searchBuffer, searchLength = searchBuffer.length) {
    for (let j = 0; j < searchLength; j += 1) {
      if (this.data[index + j] !== searchBuffer[j]) {
        return false;
      }
    }
    return true;
  }

  toHex() {
    let hex = '';
    for (let i = 0; i < this.length; i += 1) {
      const part = this.data[i].toString(16);
      hex += part.length < 2 ? `0${part}` : part;
    }
    return hex;
  }

  toBase64() {
    let binary = '';
    const len = this.data.byteLength;
    for (let i = 0; i < len; i += 1) {
      binary += String.fromCharCode(this.data[i]);
    }
    return btoa(binary);
  }

  writeUInt16LE(value, offset = 0) {
    this.data[offset] = value & 0xff;
    this.data[offset + 1] = (value >> 8) & 0xff;
  }
}

export default BrowserBuffer;
