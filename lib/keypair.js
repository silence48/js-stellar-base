"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keypair = void 0;
var _tweetnacl = _interopRequireDefault(require("tweetnacl"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
var _signing = require("./signing");
var _strkey = require("./strkey");
var _hashing = require("./hashing");
var _xdr = _interopRequireDefault(require("./xdr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint no-bitwise: ["error", {"allow": ["^"]}] */
/**
 * `Keypair` represents public (and secret) keys of the account.
 *
 * Currently `Keypair` only supports ed25519 but in a future this class can be abstraction layer for other
 * public-key signature systems.
 *
 * Use more convenient methods to create `Keypair` object:
 * * `{@link Keypair.fromPublicKey}`
 * * `{@link Keypair.fromSecret}`
 * * `{@link Keypair.random}`
 *
 * @constructor
 * @param {object} keys At least one of keys must be provided.
 * @param {string} keys.type Public-key signature system name. (currently only `ed25519` keys are supported)
 * @param {Uint8Array} [keys.publicKey] Raw public key
 * @param {Uint8Array} [keys.secretKey] Raw secret key (32-byte secret seed in ed25519`)
 */
var Keypair = /*#__PURE__*/function () {
  function Keypair(keys) {
    _classCallCheck(this, Keypair);
    if (keys.type !== 'ed25519') {
      throw new Error('Invalid keys type');
    }
    this.type = keys.type;
    if (keys.secretKey) {
      // Probably should make a copy here...
      keys.secretKey = _BrowserBuffer["default"].from(keys.secretKey);
      if (keys.secretKey.length !== 32) {
        throw new Error('secretKey length is invalid');
      }
      this._secretSeed = keys.secretKey;
      this._publicKey = (0, _signing.generate)(keys.secretKey);
      this._secretKey = _BrowserBuffer["default"].concat([keys.secretKey, this._publicKey]);
      if (keys.publicKey && !this._publicKey.equals(_BrowserBuffer["default"].from(keys.publicKey))) {
        throw new Error('secretKey does not match publicKey');
      }
    } else {
      this._publicKey = _BrowserBuffer["default"].from(keys.publicKey);
      if (this._publicKey.length !== 32) {
        throw new Error('publicKey length is invalid');
      }
    }
  }

  /**
   * Creates a new `Keypair` instance from secret. This can either be secret key or secret seed depending
   * on underlying public-key signature system. Currently `Keypair` only supports ed25519.
   * @param {string} secret secret key (ex. `SDAKFNYEIAORZKKCYRILFQKLLOCNPL5SWJ3YY5NM3ZH6GJSZGXHZEPQS`)
   * @returns {Keypair}
   */
  _createClass(Keypair, [{
    key: "xdrAccountId",
    value: function xdrAccountId() {
      return new _xdr["default"].AccountId.publicKeyTypeEd25519(this._publicKey);
    }
  }, {
    key: "xdrPublicKey",
    value: function xdrPublicKey() {
      return new _xdr["default"].PublicKey.publicKeyTypeEd25519(this._publicKey);
    }

    /**
     * Creates a {@link xdr.MuxedAccount} object from the public key.
     *
     * You will get a different type of muxed account depending on whether or not
     * you pass an ID.
     *
     * @param  {string} [id] - stringified integer indicating the underlying muxed
     *     ID of the new account object
     *
     * @return {xdr.MuxedAccount}
     */
  }, {
    key: "xdrMuxedAccount",
    value: function xdrMuxedAccount(id) {
      if (!(0, _isUndefined["default"])(id)) {
        if (!(0, _isString["default"])(id)) {
          throw new TypeError("expected string for ID, got ".concat(_typeof(id)));
        }
        return _xdr["default"].MuxedAccount.keyTypeMuxedEd25519(new _xdr["default"].MuxedAccountMed25519({
          id: _xdr["default"].Uint64.fromString(id),
          ed25519: this._publicKey
        }));
      }
      return new _xdr["default"].MuxedAccount.keyTypeEd25519(this._publicKey);
    }

    /**
     * Returns raw public key
     * @returns {Uint8Array}
     */
  }, {
    key: "rawPublicKey",
    value: function rawPublicKey() {
      return this._publicKey;
    }
  }, {
    key: "signatureHint",
    value: function signatureHint() {
      var a = this.xdrAccountId().toXDR();
      return a.slice(a.length - 4);
    }

    /**
     * Returns public key associated with this `Keypair` object.
     * @returns {string}
     */
  }, {
    key: "publicKey",
    value: function publicKey() {
      return _strkey.StrKey.encodeEd25519PublicKey(this._publicKey);
    }

    /**
     * Returns secret key associated with this `Keypair` object
     * @returns {string}
     */
  }, {
    key: "secret",
    value: function secret() {
      if (!this._secretSeed) {
        throw new Error('no secret key available');
      }
      if (this.type === 'ed25519') {
        return _strkey.StrKey.encodeEd25519SecretSeed(this._secretSeed);
      }
      throw new Error('Invalid Keypair type');
    }

    /**
     * Returns raw secret key.
     * @returns {Uint8Array}
     */
  }, {
    key: "rawSecretKey",
    value: function rawSecretKey() {
      return this._secretSeed;
    }

    /**
     * Returns `true` if this `Keypair` object contains secret key and can sign.
     * @returns {boolean}
     */
  }, {
    key: "canSign",
    value: function canSign() {
      return !!this._secretKey;
    }

    /**
     * Signs data.
     * @param {Uint8Array} data Data to sign
     * @returns {Uint8Array}
     */
  }, {
    key: "sign",
    value: function sign(data) {
      if (!this.canSign()) {
        throw new Error('cannot sign: no secret key available');
      }
      return (0, _signing.sign)(data, this._secretKey);
    }

    /**
     * Verifies if `signature` for `data` is valid.
     * @param {Uint8Array} data Signed data
     * @param {Uint8Array} signature Signature
     * @returns {boolean}
     */
  }, {
    key: "verify",
    value: function verify(data, signature) {
      return (0, _signing.verify)(data, signature, this._publicKey);
    }

    /**
     * Returns the decorated signature (hint+sig) for arbitrary data.
     *
     * @param  {Uint8Array} data  arbitrary data to sign
     * @return {xdr.DecoratedSignature}   the raw signature structure which can be
     *     added directly to a transaction envelope
     *
     * @see TransactionBase.addDecoratedSignature
     */
  }, {
    key: "signDecorated",
    value: function signDecorated(data) {
      var signature = this.sign(data);
      var hint = this.signatureHint();
      return new _xdr["default"].DecoratedSignature({
        hint: hint,
        signature: signature
      });
    }

    /**
     * Returns the raw decorated signature (hint+sig) for a signed payload signer.
     *
     *  The hint is defined as the last 4 bytes of the signer key XORed with last
     *  4 bytes of the payload (zero-left-padded if necessary).
     *
     * @param  {Uint8Array} data    data to both sign and treat as the payload
     * @return {xdr.DecoratedSignature}
     *
     * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0040.md#signature-hint
     * @see TransactionBase.addDecoratedSignature
     */
  }, {
    key: "signPayloadDecorated",
    value: function signPayloadDecorated(data) {
      var signature = this.sign(data);
      var keyHint = this.signatureHint();
      var hint = _BrowserBuffer["default"].from(data.slice(-4));
      if (hint.length < 4) {
        // append zeroes as needed
        hint = _BrowserBuffer["default"].concat([hint, _BrowserBuffer["default"].alloc(4 - data.length, 0)]);
      }
      return new _xdr["default"].DecoratedSignature({
        hint: hint.map(function (_byte, i) {
          return _byte ^ keyHint[i];
        }),
        signature: signature
      });
    }
  }], [{
    key: "fromSecret",
    value: function fromSecret(secret) {
      var rawSecret = _strkey.StrKey.decodeEd25519SecretSeed(secret);
      return this.fromRawEd25519Seed(rawSecret);
    }

    /**
     * Creates a new `Keypair` object from ed25519 secret key seed raw bytes.
     *
     * @param {Uint8Array} rawSeed Raw 32-byte ed25519 secret key seed
     * @returns {Keypair}
     */
  }, {
    key: "fromRawEd25519Seed",
    value: function fromRawEd25519Seed(rawSeed) {
      return new this({
        type: 'ed25519',
        secretKey: rawSeed
      });
    }

    /**
     * Returns `Keypair` object representing network master key.
     * @param {string} networkPassphrase passphrase of the target stellar network (e.g. "Public Global Stellar Network ; September 2015").
     * @returns {Keypair}
     */
  }, {
    key: "master",
    value: function master(networkPassphrase) {
      if (!networkPassphrase) {
        throw new Error('No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`.');
      }
      return this.fromRawEd25519Seed((0, _hashing.hash)(networkPassphrase));
    }

    /**
     * Creates a new `Keypair` object from public key.
     * @param {string} publicKey public key (ex. `GB3KJPLFUYN5VL6R3GU3EGCGVCKFDSD7BEDX42HWG5BWFKB3KQGJJRMA`)
     * @returns {Keypair}
     */
  }, {
    key: "fromPublicKey",
    value: function fromPublicKey(publicKey) {
      publicKey = _strkey.StrKey.decodeEd25519PublicKey(publicKey);
      if (publicKey.length !== 32) {
        throw new Error('Invalid Stellar public key');
      }
      return new this({
        type: 'ed25519',
        publicKey: publicKey
      });
    }

    /**
     * Create a random `Keypair` object.
     * @returns {Keypair}
     */
  }, {
    key: "random",
    value: function random() {
      var secret = _tweetnacl["default"].randomBytes(32);
      return this.fromRawEd25519Seed(secret);
    }
  }]);
  return Keypair;
}();
exports.Keypair = Keypair;