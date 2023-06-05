class BrowserBuffer extends Uint8Array {
  constructor(input, encodingOrOffset, length) {
    console.log('TYPEOF input:', typeof input)
    // console.log(input)
    if (typeof input === 'number') {
      super(input);
    }
    else if (typeof input === 'string') {
      let data;
      if (typeof encodingOrOffset === 'string') {
        data = BrowserBuffer.decode(input, encodingOrOffset);
      } else {
        data = new TextEncoder().encode(input);
      }
      super(data);
    }
    else if (typeof input === 'object' && input instanceof ArrayBuffer) {
      super(input, encodingOrOffset, length);
    }
    else if (BrowserBuffer.isBuffer(input)) {
      const clonedData = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
      super(clonedData);
    }
    else {
      throw new Error(`Unsupported data type ${typeof input} ${input}`);
    }
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
    buffer.fill(fill);
    return buffer;
  }
  static from(input, encodingOrOffset, length) {
    // console.log(input, 'input from', typeof input)
    // console.log(encodingOrOffset, 'encodingOrOffset from')
    if (Array.isArray(input)) {
      return new BrowserBuffer(new Uint8Array(input));
    }
    /*
    if (typeof input === 'string') {
      if (encodingOrOffset === 'hex') {
        // console.log('the encoding was hex and the input was: ', input)
        const bytes = this.hexToBytes(input);
        return new BrowserBuffer(bytes);
      }
      if (encodingOrOffset === 'utf8' || encodingOrOffset === 'base64') {
        return new BrowserBuffer(this.decode(input, encodingOrOffset));
      }

      throw new Error('Unsupported encoding type');

    }
    */
    if (typeof input === 'string') {
      if ( encodingOrOffset === undefined) {
        encodingOrOffset = 'utf8';
      }
      if (encodingOrOffset === 'hex') {
        return new BrowserBuffer(this.decodeHex(input));
      }
      if (encodingOrOffset === 'utf8') {
        let utf8Encoder = new TextEncoder(); // TextEncoder is built into modern browsers
        let byteArray = utf8Encoder.encode(input);
        return new BrowserBuffer(byteArray);
      }
      if (encodingOrOffset === 'base64') {
        return new BrowserBuffer(this.decodeBase64(input));
      } if (encodingOrOffset === 'ascii') {
        let utf8Encoder = new TextEncoder(); // TextEncoder is built into modern browsers
        let byteArray = utf8Encoder.encode(input);
        return new BrowserBuffer(byteArray);
      }
      throw new Error(`Unsupported encoding type ${encodingOrOffset}, ${input}, ${typeof input}`);
    }

    if (typeof input === 'number') {
      return BrowserBuffer.alloc(input);
    }

    if (typeof input === 'object' && (Array.isArray(input) || input instanceof ArrayBuffer || input instanceof Uint8Array)) {
      if (typeof encodingOrOffset === 'function') {
        const mapfn = encodingOrOffset;
        const arrayLike = Array.from(input, mapfn);
        return new BrowserBuffer(arrayLike);
      }
      return new BrowserBuffer(input, encodingOrOffset, length);
    }

    throw new Error(`Unsupported data type ${typeof input} ${input}`);
  }
  static hexToBytes = (hex) => {
    let bytes = [];

    for (let c = 0; c < hex.length; c += 2) {
      bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    // console.log(bytes, 'bytesfrom hextobytes')
    return bytes;
  };

  static decodeHex(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return bytes;
  }

  static decode(string, encoding) {
    switch (encoding) {
      case 'utf8':
        return new TextDecoder().decode(string);
      case 'base64':
        return BrowserBuffer.decodeBase64(string);
      case 'ascii':
        return new TextDecoder().decode(string);
      case 'hex':
        return BrowserBuffer.decodeHex(string);
      default:
        throw new Error(`Unsupported encoding type ${string}, ${encoding}`);
    }
  }

  static decodeBase64(base64) {
    console.log('decoding base64', base64)
    const binaryString = atob(base64);
    const len = binaryString.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  static concat(list, totalLength) {
    if (!Array.isArray(list)) {
      throw new Error("Concat function takes an array as argument");
    }

    if (list.length === 0) {
      return new BrowserBuffer(0);
    }
    if (list.length === 1) {
      return list[0];
    }

    if (totalLength === undefined) {
      totalLength = list.reduce((acc, item) => acc + item.length, 0);
    }

    let buffer = new BrowserBuffer(totalLength);
    let pos = 0;
    for (let i = 0; i < list.length; i += 1) {
      let item = list[i];
      item.copy(buffer, pos);
      pos += item.length;
    }

    return buffer;
  }

  writeUInt16LE(value, offset) {
    if (offset < 0 || offset + 2 > this.length) {
      throw new Error('Index out of range');
    }
    this[offset] = value & 0xff; // Write the low byte
    this[offset + 1] = (value >> 8) & 0xff; // Write the high byte
  }

  fill(value, offset = 0, end = this.length, encoding = 'utf8') {
    if (typeof value === 'number') {
      super.fill(value, offset, end);
    } else if (typeof value === 'string') {
      const fillBuffer = BrowserBuffer.from(value, encoding);
      super.fill(fillBuffer[0], offset, end);
    } else {
      throw new Error('Unsupported fill type');
    }
    return this;
  }

  _matchAtIndex(index, searchBuffer, searchLength = searchBuffer.length) {
    for (let j = 0; j < searchLength; j += 1) {
      if (index + j >= this.length || this[index + j] !== searchBuffer[j]) {
        return false;
      }
    }
    return true;
  }

  slice(start = 0, end = this.length) {
    const slicedData = super.slice(start, end);
    return new BrowserBuffer(slicedData.buffer);
  }

  copy(targetBuffer, targetStart = 0, sourceStart = 0, sourceEnd = this.length) {
    const sourceData = this.slice(sourceStart, sourceEnd);
    targetBuffer.set(sourceData, targetStart);
    return sourceData.length;
  }

  compare(otherBuffer, targetStart = 0, targetEnd = otherBuffer.length, sourceStart = 0, sourceEnd = this.length) {
    const targetData = otherBuffer.slice(targetStart, targetEnd);
    const sourceData = this.slice(sourceStart, sourceEnd);
    return sourceData.every((value, i) => value === targetData[i]) ? 0 : 1;
  }

  indexOf(value, byteOffset = 0, encoding = 'utf8') {
    const searchBuffer = BrowserBuffer.from(value, encoding);
    const searchLength = searchBuffer.length;

    for (let i = byteOffset; i < this.length - searchLength + 1; i += 1) {
      if (this._matchAtIndex(i, searchBuffer, searchLength)) {
        return i;
      }
    }
    return -1;
  }

  lastIndexOf(value, byteOffset = this.length - 1, encoding = 'utf8') {
    const searchBuffer = BrowserBuffer.from(value, encoding);
    const searchLength = searchBuffer.length;

    for (let i = byteOffset; i >= searchLength - 1; i -= 1) {
      if (this._matchAtIndex(i, searchBuffer, searchLength)) {
        return i - searchLength + 1;
      }
    }
    return -1;
  }

  equals(otherBuffer) {
    if (!(otherBuffer instanceof BrowserBuffer)) {
      throw new Error('Argument must be a BrowserBuffer');
    }
    return this.every((value, i) => value === otherBuffer[i]);
  }

  toString(encoding = 'utf8') {
    if (encoding === 'hex') {
        let hex = '';
        for (let i = 0; i < this.byteLength; i++) {
            let byte = this[i].toString(16);
            hex += (byte.length === 1 ? '0' : '') + byte;
        }
        return hex;
    } 
    if (encoding === 'utf8') {
        let utf8Decoder = new TextDecoder();
        return utf8Decoder.decode(this);
    } 
    if (encoding === 'base64') {
        let binary = '';
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (let i = 0; i < this.byteLength; i++) {
            binary += chars.charAt(this[i] >> 2) + chars.charAt(((this[i] & 3) << 4) | (this[i + 1] >> 4));
            if (i < this.byteLength - 2) {
                binary += chars.charAt(((this[i + 1] & 15) << 2) | (this[i + 2] >> 6)) + chars.charAt(this[i + 2] & 63);
            } else if (i < this.byteLength - 1) {
                binary += chars.charAt((this[i + 1] & 15) << 2) + "=";
            } else {
                binary += "==";
            }
            i += 2;
        }
        console.log('returning binary, ', binary)
        return binary;
    }
    throw new Error(`Unsupported encoding: ${encoding}, ${this}}`);
}


  toHex() {
    let hex = '';
    for (let i = 0; i < this.length; i += 1) {
      const part = this[i].toString(16);
      hex += part.length < 2 ? `0${part}` : part;
    }
    return hex;
  }

  toBase64() {
    let binary = '';
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
      binary += String.fromCharCode(this[i]);
    }
    return btoa(binary);
  }
}

export default BrowserBuffer;
