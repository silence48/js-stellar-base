"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BrowserBuffer = /*#__PURE__*/function () {
  function BrowserBuffer(input, encodingOrOffset, length) {
    _classCallCheck(this, BrowserBuffer);
    if (typeof input === 'number') {
      this.data = new Uint8Array(input);
      this.data.fill(0);
    } else if (typeof input === 'string') {
      if (typeof encodingOrOffset === 'string') {
        this.data = BrowserBuffer.decode(input, encodingOrOffset);
      } else {
        this.data = new TextEncoder().encode(input);
      }
    } else if (_typeof(input) === 'object' && input instanceof ArrayBuffer) {
      this.data = new Uint8Array(input, encodingOrOffset, length);
    } else {
      throw new Error('Unsupported data type');
    }
  }
  _createClass(BrowserBuffer, [{
    key: "length",
    get: function get() {
      return this.data.length;
    }
  }, {
    key: "toString",
    value: function toString() {
      var encoding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'utf8';
      switch (encoding) {
        case 'hex':
          return this.toHex();
        case 'utf8':
        case 'ascii':
          // Treat 'ascii' encoding the same as 'utf8'
          return new TextDecoder().decode(this);
        case 'base64':
          return this.toBase64();
        default:
          throw new Error('Unsupported encoding type');
      }
    }
  }, {
    key: "equals",
    value: function equals(otherBuffer) {
      if (!(otherBuffer instanceof BrowserBuffer)) {
        throw new Error('Argument must be a BrowserBuffer');
      }
      return this.data.every(function (value, i) {
        return value === otherBuffer.data[i];
      });
    }
  }, {
    key: "slice",
    value: function slice() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data.length;
      return new BrowserBuffer(this.data.slice(start, end));
    }
  }, {
    key: "copy",
    value: function copy(targetBuffer) {
      var targetStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var sourceStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var sourceEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.data.length;
      var sourceData = this.data.slice(sourceStart, sourceEnd);
      targetBuffer.data.set(sourceData, targetStart);
      return sourceData.length;
    }
  }, {
    key: "compare",
    value: function compare(otherBuffer) {
      var targetStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var targetEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : otherBuffer.data.length;
      var sourceStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var sourceEnd = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.data.length;
      var targetData = otherBuffer.data.slice(targetStart, targetEnd);
      var sourceData = this.data.slice(sourceStart, sourceEnd);
      return sourceData.every(function (value, i) {
        return value === targetData[i];
      }) ? 0 : 1;
    }
  }, {
    key: "fill",
    value: function fill(value) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.data.length;
      var encoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'utf8';
      var fillBuffer = BrowserBuffer.from(value, encoding);
      for (var i = offset; i < end; i += 1) {
        this.data[i] = fillBuffer[i % fillBuffer.length];
      }
      return this;
    }
  }, {
    key: "indexOf",
    value: function indexOf(value) {
      var byteOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'utf8';
      var searchBuffer = BrowserBuffer.from(value, encoding);
      var searchLength = searchBuffer.length;
      for (var i = byteOffset; i < this.data.length - searchLength + 1; i += 1) {
        if (this._matchAtIndex(i, searchBuffer)) {
          return i;
        }
      }
      return -1;
    }
  }, {
    key: "lastIndexOf",
    value: function lastIndexOf(value) {
      var byteOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.data.length - 1;
      var encoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'utf8';
      var searchBuffer = BrowserBuffer.from(value, encoding);
      var searchLength = searchBuffer.length;
      for (var i = byteOffset; i >= searchLength - 1; i -= 1) {
        if (this._matchAtIndex(i, searchBuffer, searchLength)) {
          return i - searchLength + 1;
        }
      }
      return -1;
    }
  }, {
    key: "_matchAtIndex",
    value: function _matchAtIndex(index, searchBuffer) {
      var searchLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : searchBuffer.length;
      for (var j = 0; j < searchLength; j += 1) {
        if (this.data[index + j] !== searchBuffer[j]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "toHex",
    value: function toHex() {
      var hex = '';
      for (var i = 0; i < this.length; i += 1) {
        var part = this[i].toString(16);
        hex += part.length < 2 ? "0".concat(part) : part;
      }
      return hex;
    }
  }, {
    key: "toBase64",
    value: function toBase64() {
      var binary = '';
      var len = this.byteLength;
      for (var i = 0; i < len; i += 1) {
        binary += String.fromCharCode(this[i]);
      }
      return btoa(binary);
    }
  }], [{
    key: "of",
    value: function of() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }
      return new BrowserBuffer(items);
    }
  }, {
    key: "from",
    value: function from(input, encodingOrOffset, length) {
      if (typeof input === 'string') {
        return new BrowserBuffer(input, encodingOrOffset);
      }
      if (_typeof(input) === 'object' && (Array.isArray(input) || input instanceof ArrayBuffer)) {
        if (typeof encodingOrOffset === 'function') {
          var mapfn = encodingOrOffset;
          var arrayLike = Array.from(input, mapfn);
          return new BrowserBuffer(arrayLike);
        }
        return new BrowserBuffer(input, encodingOrOffset, length);
      }
      throw new Error('Unsupported data type');
    }
  }, {
    key: "alloc",
    value: function alloc(size) {
      var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var buffer = new BrowserBuffer(size);
      if (typeof fill === 'string') {
        var fillBuffer = BrowserBuffer.from(fill, 'utf8');
        for (var i = 0; i < buffer.length; i += 1) {
          buffer[i] = fillBuffer[i % fillBuffer.length];
        }
      } else {
        buffer.fill(fill);
      }
      return buffer;
    }
  }, {
    key: "concat",
    value: function concat(list, totalLength) {
      if (typeof totalLength === 'undefined') {
        totalLength = list.reduce(function (total, buf) {
          return total + buf.length;
        }, 0);
      }
      var buffer = BrowserBuffer.alloc(totalLength);
      var offset = 0;
      list.forEach(function (buf) {
        buffer.set(buf, offset);
        offset += buf.length;
      });
      return buffer;
    }
  }, {
    key: "decode",
    value: function decode(string, encoding) {
      switch (encoding) {
        case 'utf8':
          return new TextEncoder().encode(string);
        case 'base64':
          return this.decodeBase64(string);
        case 'hex':
          return this.decodeHex(string);
        default:
          throw new Error('Unsupported encoding type');
      }
    }
  }, {
    key: "decodeBase64",
    value: function decodeBase64(string) {
      var binaryString = atob(string);
      var bytes = new Uint8Array(binaryString.length);
      for (var i = 0; i < binaryString.length; i += 1) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
    }
  }, {
    key: "decodeHex",
    value: function decodeHex(string) {
      var size = string.length / 2;
      var array = new Uint8Array(size);
      for (var i = 0; i < size; i += 1) {
        array[i] = parseInt(string.substr(i * 2, 2), 16);
      }
      return array;
    }
  }, {
    key: "isBuffer",
    value: function isBuffer(obj) {
      return obj instanceof BrowserBuffer || obj instanceof Uint8Array;
    }
  }]);
  return BrowserBuffer;
}();
var _default = BrowserBuffer;
exports["default"] = _default;