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
    } else {
      throw new Error('Unsupported data type');
    }
  }
  static of(...items) {
    return new BrowserBuffer(items);
  }

  static from(input, encodingOrOffset, length) {
    if (typeof input === 'string') {
      return new BrowserBuffer(input, encodingOrOffset);
    } else if (typeof input === 'object') {
      if (Array.isArray(input) || input instanceof ArrayBuffer) {
        if (typeof encodingOrOffset === 'function') {
          let mapfn = encodingOrOffset;
          let arrayLike = Array.from(input, mapfn);
          return new BrowserBuffer(arrayLike);
        } else {
          return new BrowserBuffer(input, encodingOrOffset, length);
        }
      } else {
        throw new Error('Unsupported data type');
      }
    } else {
      throw new Error('Unsupported data type');
    }
  }

  static alloc(size, fill = 0) {
    const buffer = new BrowserBuffer(size);
    if (typeof fill === 'string') {
        const fillBuffer = BrowserBuffer.from(fill, 'utf8');
        for (let i = 0; i < buffer.length; i++) {
            buffer[i] = fillBuffer[i % fillBuffer.length];
        }
    } else {
        buffer.fill(fill);
    }
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
  get length() {
    return this.data.length;
  }

  static isBuffer(obj) {
    return obj instanceof BrowserBuffer || obj instanceof Uint8Array;
  }

  toString(encoding = 'utf8') {
    switch (encoding) {
      case 'hex':
        let hex = '';
        for (let i = 0; i < this.length; i++) {
          let part = this[i].toString(16);
          hex += part.length < 2 ? '0' + part : part;
        }
        return hex;
      case 'utf8':
        return new TextDecoder().decode(this);
      case 'ascii': // Treat 'ascii' encoding the same as 'utf8'
        return new TextDecoder().decode(this);
      case 'base64':
        let binary = '';
        const len = this.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(this[i]);
        }
        return btoa(binary);
      default:
        throw new Error('Unsupported encoding type');
    }
  }
}

export default BrowserBuffer;
