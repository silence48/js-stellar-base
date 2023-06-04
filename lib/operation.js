"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operation = exports.AuthRevocableFlag = exports.AuthRequiredFlag = exports.AuthImmutableFlag = exports.AuthClawbackEnabledFlag = void 0;
var _jsXdr = require("js-xdr");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _trimEnd = _interopRequireDefault(require("lodash/trimEnd"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _isNumber = _interopRequireDefault(require("lodash/isNumber"));
var _isFinite = _interopRequireDefault(require("lodash/isFinite"));
var _continued_fraction = require("./util/continued_fraction");
var _asset = require("./asset");
var _liquidity_pool_asset = require("./liquidity_pool_asset");
var _claimant = require("./claimant");
var _strkey = require("./strkey");
var _liquidity_pool_id = require("./liquidity_pool_id");
var _xdr = _interopRequireDefault(require("./xdr"));
var ops = _interopRequireWildcard(require("./operations/index"));
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1jzfu96gqr() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operation.js";
  var hash = "757a6b148f0586f5b2f43ee8c12c051e16b1e711";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operation.js",
    statementMap: {
      "0": {
        start: {
          line: 23,
          column: 12
        },
        end: {
          line: 23,
          column: 20
        }
      },
      "1": {
        start: {
          line: 24,
          column: 18
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "2": {
        start: {
          line: 34,
          column: 32
        },
        end: {
          line: 34,
          column: 38
        }
      },
      "3": {
        start: {
          line: 42,
          column: 33
        },
        end: {
          line: 42,
          column: 39
        }
      },
      "4": {
        start: {
          line: 50,
          column: 33
        },
        end: {
          line: 50,
          column: 39
        }
      },
      "5": {
        start: {
          line: 60,
          column: 39
        },
        end: {
          line: 60,
          column: 45
        }
      },
      "6": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 106,
          column: 5
        }
      },
      "7": {
        start: {
          line: 101,
          column: 6
        },
        end: {
          line: 105,
          column: 7
        }
      },
      "8": {
        start: {
          line: 102,
          column: 8
        },
        end: {
          line: 102,
          column: 78
        }
      },
      "9": {
        start: {
          line: 104,
          column: 8
        },
        end: {
          line: 104,
          column: 53
        }
      },
      "10": {
        start: {
          line: 117,
          column: 19
        },
        end: {
          line: 117,
          column: 21
        }
      },
      "11": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 120,
          column: 5
        }
      },
      "12": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 77
        }
      },
      "13": {
        start: {
          line: 122,
          column: 18
        },
        end: {
          line: 122,
          column: 42
        }
      },
      "14": {
        start: {
          line: 123,
          column: 26
        },
        end: {
          line: 123,
          column: 56
        }
      },
      "15": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 379,
          column: 5
        }
      },
      "16": {
        start: {
          line: 127,
          column: 8
        },
        end: {
          line: 127,
          column: 38
        }
      },
      "17": {
        start: {
          line: 128,
          column: 8
        },
        end: {
          line: 128,
          column: 69
        }
      },
      "18": {
        start: {
          line: 129,
          column: 8
        },
        end: {
          line: 129,
          column: 78
        }
      },
      "19": {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 130,
          column: 14
        }
      },
      "20": {
        start: {
          line: 133,
          column: 8
        },
        end: {
          line: 133,
          column: 32
        }
      },
      "21": {
        start: {
          line: 134,
          column: 8
        },
        end: {
          line: 134,
          column: 78
        }
      },
      "22": {
        start: {
          line: 135,
          column: 8
        },
        end: {
          line: 135,
          column: 58
        }
      },
      "23": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 136,
          column: 60
        }
      },
      "24": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 137,
          column: 14
        }
      },
      "25": {
        start: {
          line: 140,
          column: 8
        },
        end: {
          line: 140,
          column: 49
        }
      },
      "26": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 141,
          column: 66
        }
      },
      "27": {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 142,
          column: 62
        }
      },
      "28": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 78
        }
      },
      "29": {
        start: {
          line: 144,
          column: 8
        },
        end: {
          line: 144,
          column: 66
        }
      },
      "30": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 68
        }
      },
      "31": {
        start: {
          line: 146,
          column: 8
        },
        end: {
          line: 146,
          column: 25
        }
      },
      "32": {
        start: {
          line: 148,
          column: 21
        },
        end: {
          line: 148,
          column: 33
        }
      },
      "33": {
        start: {
          line: 151,
          column: 8
        },
        end: {
          line: 153,
          column: 11
        }
      },
      "34": {
        start: {
          line: 152,
          column: 10
        },
        end: {
          line: 152,
          column: 63
        }
      },
      "35": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 14
        }
      },
      "36": {
        start: {
          line: 157,
          column: 8
        },
        end: {
          line: 157,
          column: 46
        }
      },
      "37": {
        start: {
          line: 158,
          column: 8
        },
        end: {
          line: 158,
          column: 66
        }
      },
      "38": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 68
        }
      },
      "39": {
        start: {
          line: 160,
          column: 8
        },
        end: {
          line: 160,
          column: 78
        }
      },
      "40": {
        start: {
          line: 161,
          column: 8
        },
        end: {
          line: 161,
          column: 66
        }
      },
      "41": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 162,
          column: 62
        }
      },
      "42": {
        start: {
          line: 163,
          column: 8
        },
        end: {
          line: 163,
          column: 25
        }
      },
      "43": {
        start: {
          line: 165,
          column: 21
        },
        end: {
          line: 165,
          column: 33
        }
      },
      "44": {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 170,
          column: 11
        }
      },
      "45": {
        start: {
          line: 169,
          column: 10
        },
        end: {
          line: 169,
          column: 63
        }
      },
      "46": {
        start: {
          line: 171,
          column: 8
        },
        end: {
          line: 171,
          column: 14
        }
      },
      "47": {
        start: {
          line: 174,
          column: 8
        },
        end: {
          line: 174,
          column: 36
        }
      },
      "48": {
        start: {
          line: 175,
          column: 8
        },
        end: {
          line: 182,
          column: 9
        }
      },
      "49": {
        start: {
          line: 177,
          column: 12
        },
        end: {
          line: 177,
          column: 73
        }
      },
      "50": {
        start: {
          line: 178,
          column: 12
        },
        end: {
          line: 178,
          column: 18
        }
      },
      "51": {
        start: {
          line: 180,
          column: 12
        },
        end: {
          line: 180,
          column: 60
        }
      },
      "52": {
        start: {
          line: 181,
          column: 12
        },
        end: {
          line: 181,
          column: 18
        }
      },
      "53": {
        start: {
          line: 183,
          column: 8
        },
        end: {
          line: 183,
          column: 58
        }
      },
      "54": {
        start: {
          line: 184,
          column: 8
        },
        end: {
          line: 184,
          column: 14
        }
      },
      "55": {
        start: {
          line: 187,
          column: 8
        },
        end: {
          line: 187,
          column: 35
        }
      },
      "56": {
        start: {
          line: 188,
          column: 8
        },
        end: {
          line: 188,
          column: 61
        }
      },
      "57": {
        start: {
          line: 189,
          column: 8
        },
        end: {
          line: 189,
          column: 60
        }
      },
      "58": {
        start: {
          line: 190,
          column: 8
        },
        end: {
          line: 190,
          column: 59
        }
      },
      "59": {
        start: {
          line: 191,
          column: 8
        },
        end: {
          line: 191,
          column: 45
        }
      },
      "60": {
        start: {
          line: 192,
          column: 8
        },
        end: {
          line: 192,
          column: 14
        }
      },
      "61": {
        start: {
          line: 195,
          column: 8
        },
        end: {
          line: 195,
          column: 35
        }
      },
      "62": {
        start: {
          line: 196,
          column: 8
        },
        end: {
          line: 198,
          column: 9
        }
      },
      "63": {
        start: {
          line: 197,
          column: 10
        },
        end: {
          line: 197,
          column: 75
        }
      },
      "64": {
        start: {
          line: 200,
          column: 8
        },
        end: {
          line: 200,
          column: 47
        }
      },
      "65": {
        start: {
          line: 201,
          column: 8
        },
        end: {
          line: 201,
          column: 43
        }
      },
      "66": {
        start: {
          line: 202,
          column: 8
        },
        end: {
          line: 202,
          column: 51
        }
      },
      "67": {
        start: {
          line: 203,
          column: 8
        },
        end: {
          line: 203,
          column: 51
        }
      },
      "68": {
        start: {
          line: 204,
          column: 8
        },
        end: {
          line: 204,
          column: 51
        }
      },
      "69": {
        start: {
          line: 205,
          column: 8
        },
        end: {
          line: 205,
          column: 53
        }
      },
      "70": {
        start: {
          line: 207,
          column: 8
        },
        end: {
          line: 210,
          column: 24
        }
      },
      "71": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 230,
          column: 9
        }
      },
      "72": {
        start: {
          line: 213,
          column: 25
        },
        end: {
          line: 213,
          column: 27
        }
      },
      "73": {
        start: {
          line: 214,
          column: 22
        },
        end: {
          line: 214,
          column: 48
        }
      },
      "74": {
        start: {
          line: 215,
          column: 10
        },
        end: {
          line: 226,
          column: 11
        }
      },
      "75": {
        start: {
          line: 216,
          column: 12
        },
        end: {
          line: 216,
          column: 79
        }
      },
      "76": {
        start: {
          line: 217,
          column: 17
        },
        end: {
          line: 226,
          column: 11
        }
      },
      "77": {
        start: {
          line: 218,
          column: 12
        },
        end: {
          line: 218,
          column: 64
        }
      },
      "78": {
        start: {
          line: 219,
          column: 17
        },
        end: {
          line: 226,
          column: 11
        }
      },
      "79": {
        start: {
          line: 220,
          column: 12
        },
        end: {
          line: 220,
          column: 61
        }
      },
      "80": {
        start: {
          line: 221,
          column: 17
        },
        end: {
          line: 226,
          column: 11
        }
      },
      "81": {
        start: {
          line: 222,
          column: 34
        },
        end: {
          line: 222,
          column: 77
        }
      },
      "82": {
        start: {
          line: 223,
          column: 12
        },
        end: {
          line: 225,
          column: 14
        }
      },
      "83": {
        start: {
          line: 228,
          column: 10
        },
        end: {
          line: 228,
          column: 50
        }
      },
      "84": {
        start: {
          line: 229,
          column: 10
        },
        end: {
          line: 229,
          column: 33
        }
      },
      "85": {
        start: {
          line: 231,
          column: 8
        },
        end: {
          line: 231,
          column: 14
        }
      },
      "86": {
        start: {
          line: 236,
          column: 8
        },
        end: {
          line: 236,
          column: 40
        }
      },
      "87": {
        start: {
          line: 237,
          column: 8
        },
        end: {
          line: 237,
          column: 62
        }
      },
      "88": {
        start: {
          line: 238,
          column: 8
        },
        end: {
          line: 238,
          column: 60
        }
      },
      "89": {
        start: {
          line: 239,
          column: 8
        },
        end: {
          line: 239,
          column: 60
        }
      },
      "90": {
        start: {
          line: 240,
          column: 8
        },
        end: {
          line: 240,
          column: 57
        }
      },
      "91": {
        start: {
          line: 241,
          column: 8
        },
        end: {
          line: 241,
          column: 52
        }
      },
      "92": {
        start: {
          line: 242,
          column: 8
        },
        end: {
          line: 242,
          column: 14
        }
      },
      "93": {
        start: {
          line: 245,
          column: 8
        },
        end: {
          line: 245,
          column: 39
        }
      },
      "94": {
        start: {
          line: 246,
          column: 8
        },
        end: {
          line: 246,
          column: 62
        }
      },
      "95": {
        start: {
          line: 247,
          column: 8
        },
        end: {
          line: 247,
          column: 60
        }
      },
      "96": {
        start: {
          line: 248,
          column: 8
        },
        end: {
          line: 248,
          column: 66
        }
      },
      "97": {
        start: {
          line: 249,
          column: 8
        },
        end: {
          line: 249,
          column: 57
        }
      },
      "98": {
        start: {
          line: 250,
          column: 8
        },
        end: {
          line: 250,
          column: 52
        }
      },
      "99": {
        start: {
          line: 251,
          column: 8
        },
        end: {
          line: 251,
          column: 14
        }
      },
      "100": {
        start: {
          line: 256,
          column: 8
        },
        end: {
          line: 256,
          column: 47
        }
      },
      "101": {
        start: {
          line: 257,
          column: 8
        },
        end: {
          line: 257,
          column: 62
        }
      },
      "102": {
        start: {
          line: 258,
          column: 8
        },
        end: {
          line: 258,
          column: 60
        }
      },
      "103": {
        start: {
          line: 259,
          column: 8
        },
        end: {
          line: 259,
          column: 60
        }
      },
      "104": {
        start: {
          line: 260,
          column: 8
        },
        end: {
          line: 260,
          column: 57
        }
      },
      "105": {
        start: {
          line: 261,
          column: 8
        },
        end: {
          line: 261,
          column: 14
        }
      },
      "106": {
        start: {
          line: 264,
          column: 8
        },
        end: {
          line: 264,
          column: 37
        }
      },
      "107": {
        start: {
          line: 265,
          column: 8
        },
        end: {
          line: 265,
          column: 64
        }
      },
      "108": {
        start: {
          line: 266,
          column: 8
        },
        end: {
          line: 266,
          column: 14
        }
      },
      "109": {
        start: {
          line: 269,
          column: 8
        },
        end: {
          line: 269,
          column: 35
        }
      },
      "110": {
        start: {
          line: 271,
          column: 8
        },
        end: {
          line: 271,
          column: 57
        }
      },
      "111": {
        start: {
          line: 272,
          column: 8
        },
        end: {
          line: 272,
          column: 41
        }
      },
      "112": {
        start: {
          line: 273,
          column: 8
        },
        end: {
          line: 273,
          column: 14
        }
      },
      "113": {
        start: {
          line: 276,
          column: 8
        },
        end: {
          line: 276,
          column: 34
        }
      },
      "114": {
        start: {
          line: 277,
          column: 8
        },
        end: {
          line: 277,
          column: 14
        }
      },
      "115": {
        start: {
          line: 280,
          column: 8
        },
        end: {
          line: 280,
          column: 37
        }
      },
      "116": {
        start: {
          line: 281,
          column: 8
        },
        end: {
          line: 281,
          column: 50
        }
      },
      "117": {
        start: {
          line: 282,
          column: 8
        },
        end: {
          line: 282,
          column: 14
        }
      },
      "118": {
        start: {
          line: 285,
          column: 8
        },
        end: {
          line: 285,
          column: 47
        }
      },
      "119": {
        start: {
          line: 286,
          column: 8
        },
        end: {
          line: 286,
          column: 58
        }
      },
      "120": {
        start: {
          line: 287,
          column: 8
        },
        end: {
          line: 287,
          column: 60
        }
      },
      "121": {
        start: {
          line: 288,
          column: 8
        },
        end: {
          line: 288,
          column: 30
        }
      },
      "122": {
        start: {
          line: 289,
          column: 8
        },
        end: {
          line: 291,
          column: 11
        }
      },
      "123": {
        start: {
          line: 290,
          column: 10
        },
        end: {
          line: 290,
          column: 60
        }
      },
      "124": {
        start: {
          line: 292,
          column: 8
        },
        end: {
          line: 292,
          column: 14
        }
      },
      "125": {
        start: {
          line: 295,
          column: 8
        },
        end: {
          line: 295,
          column: 46
        }
      },
      "126": {
        start: {
          line: 296,
          column: 8
        },
        end: {
          line: 296,
          column: 46
        }
      },
      "127": {
        start: {
          line: 297,
          column: 8
        },
        end: {
          line: 297,
          column: 14
        }
      },
      "128": {
        start: {
          line: 300,
          column: 8
        },
        end: {
          line: 300,
          column: 54
        }
      },
      "129": {
        start: {
          line: 301,
          column: 8
        },
        end: {
          line: 301,
          column: 69
        }
      },
      "130": {
        start: {
          line: 302,
          column: 8
        },
        end: {
          line: 302,
          column: 14
        }
      },
      "131": {
        start: {
          line: 305,
          column: 8
        },
        end: {
          line: 305,
          column: 52
        }
      },
      "132": {
        start: {
          line: 306,
          column: 8
        },
        end: {
          line: 306,
          column: 14
        }
      },
      "133": {
        start: {
          line: 309,
          column: 8
        },
        end: {
          line: 309,
          column: 52
        }
      },
      "134": {
        start: {
          line: 310,
          column: 8
        },
        end: {
          line: 310,
          column: 14
        }
      },
      "135": {
        start: {
          line: 313,
          column: 8
        },
        end: {
          line: 313,
          column: 33
        }
      },
      "136": {
        start: {
          line: 314,
          column: 8
        },
        end: {
          line: 314,
          column: 60
        }
      },
      "137": {
        start: {
          line: 315,
          column: 8
        },
        end: {
          line: 315,
          column: 64
        }
      },
      "138": {
        start: {
          line: 316,
          column: 8
        },
        end: {
          line: 316,
          column: 58
        }
      },
      "139": {
        start: {
          line: 317,
          column: 8
        },
        end: {
          line: 317,
          column: 14
        }
      },
      "140": {
        start: {
          line: 320,
          column: 8
        },
        end: {
          line: 320,
          column: 49
        }
      },
      "141": {
        start: {
          line: 321,
          column: 8
        },
        end: {
          line: 321,
          column: 46
        }
      },
      "142": {
        start: {
          line: 322,
          column: 8
        },
        end: {
          line: 322,
          column: 14
        }
      },
      "143": {
        start: {
          line: 325,
          column: 8
        },
        end: {
          line: 325,
          column: 42
        }
      },
      "144": {
        start: {
          line: 326,
          column: 8
        },
        end: {
          line: 326,
          column: 58
        }
      },
      "145": {
        start: {
          line: 327,
          column: 8
        },
        end: {
          line: 327,
          column: 61
        }
      },
      "146": {
        start: {
          line: 331,
          column: 23
        },
        end: {
          line: 331,
          column: 41
        }
      },
      "147": {
        start: {
          line: 332,
          column: 21
        },
        end: {
          line: 332,
          column: 37
        }
      },
      "148": {
        start: {
          line: 334,
          column: 24
        },
        end: {
          line: 339,
          column: 9
        }
      },
      "149": {
        start: {
          line: 341,
          column: 29
        },
        end: {
          line: 350,
          column: 9
        }
      },
      "150": {
        start: {
          line: 342,
          column: 22
        },
        end: {
          line: 342,
          column: 40
        }
      },
      "151": {
        start: {
          line: 343,
          column: 10
        },
        end: {
          line: 345,
          column: 11
        }
      },
      "152": {
        start: {
          line: 344,
          column: 12
        },
        end: {
          line: 344,
          column: 24
        }
      },
      "153": {
        start: {
          line: 346,
          column: 10
        },
        end: {
          line: 348,
          column: 11
        }
      },
      "154": {
        start: {
          line: 347,
          column: 12
        },
        end: {
          line: 347,
          column: 25
        }
      },
      "155": {
        start: {
          line: 349,
          column: 10
        },
        end: {
          line: 349,
          column: 27
        }
      },
      "156": {
        start: {
          line: 352,
          column: 8
        },
        end: {
          line: 352,
          column: 26
        }
      },
      "157": {
        start: {
          line: 353,
          column: 8
        },
        end: {
          line: 355,
          column: 11
        }
      },
      "158": {
        start: {
          line: 354,
          column: 10
        },
        end: {
          line: 354,
          column: 58
        }
      },
      "159": {
        start: {
          line: 357,
          column: 8
        },
        end: {
          line: 357,
          column: 14
        }
      },
      "160": {
        start: {
          line: 360,
          column: 8
        },
        end: {
          line: 360,
          column: 45
        }
      },
      "161": {
        start: {
          line: 361,
          column: 8
        },
        end: {
          line: 361,
          column: 73
        }
      },
      "162": {
        start: {
          line: 362,
          column: 8
        },
        end: {
          line: 362,
          column: 68
        }
      },
      "163": {
        start: {
          line: 363,
          column: 8
        },
        end: {
          line: 363,
          column: 68
        }
      },
      "164": {
        start: {
          line: 364,
          column: 8
        },
        end: {
          line: 364,
          column: 63
        }
      },
      "165": {
        start: {
          line: 365,
          column: 8
        },
        end: {
          line: 365,
          column: 63
        }
      },
      "166": {
        start: {
          line: 366,
          column: 8
        },
        end: {
          line: 366,
          column: 14
        }
      },
      "167": {
        start: {
          line: 369,
          column: 8
        },
        end: {
          line: 369,
          column: 46
        }
      },
      "168": {
        start: {
          line: 370,
          column: 8
        },
        end: {
          line: 370,
          column: 73
        }
      },
      "169": {
        start: {
          line: 371,
          column: 8
        },
        end: {
          line: 371,
          column: 60
        }
      },
      "170": {
        start: {
          line: 372,
          column: 8
        },
        end: {
          line: 372,
          column: 68
        }
      },
      "171": {
        start: {
          line: 373,
          column: 8
        },
        end: {
          line: 373,
          column: 68
        }
      },
      "172": {
        start: {
          line: 374,
          column: 8
        },
        end: {
          line: 374,
          column: 14
        }
      },
      "173": {
        start: {
          line: 377,
          column: 8
        },
        end: {
          line: 377,
          column: 63
        }
      },
      "174": {
        start: {
          line: 380,
          column: 4
        },
        end: {
          line: 380,
          column: 18
        }
      },
      "175": {
        start: {
          line: 399,
          column: 4
        },
        end: {
          line: 401,
          column: 5
        }
      },
      "176": {
        start: {
          line: 400,
          column: 6
        },
        end: {
          line: 400,
          column: 19
        }
      },
      "177": {
        start: {
          line: 404,
          column: 4
        },
        end: {
          line: 408,
          column: 5
        }
      },
      "178": {
        start: {
          line: 405,
          column: 6
        },
        end: {
          line: 405,
          column: 36
        }
      },
      "179": {
        start: {
          line: 407,
          column: 6
        },
        end: {
          line: 407,
          column: 19
        }
      },
      "180": {
        start: {
          line: 410,
          column: 4
        },
        end: {
          line: 424,
          column: 5
        }
      },
      "181": {
        start: {
          line: 423,
          column: 6
        },
        end: {
          line: 423,
          column: 19
        }
      },
      "182": {
        start: {
          line: 426,
          column: 4
        },
        end: {
          line: 426,
          column: 16
        }
      },
      "183": {
        start: {
          line: 430,
          column: 4
        },
        end: {
          line: 430,
          column: 125
        }
      },
      "184": {
        start: {
          line: 444,
          column: 4
        },
        end: {
          line: 446,
          column: 5
        }
      },
      "185": {
        start: {
          line: 445,
          column: 6
        },
        end: {
          line: 445,
          column: 23
        }
      },
      "186": {
        start: {
          line: 448,
          column: 4
        },
        end: {
          line: 450,
          column: 5
        }
      },
      "187": {
        start: {
          line: 449,
          column: 6
        },
        end: {
          line: 449,
          column: 32
        }
      },
      "188": {
        start: {
          line: 452,
          column: 4
        },
        end: {
          line: 462,
          column: 5
        }
      },
      "189": {
        start: {
          line: 454,
          column: 8
        },
        end: {
          line: 454,
          column: 52
        }
      },
      "190": {
        start: {
          line: 456,
          column: 8
        },
        end: {
          line: 456,
          column: 58
        }
      },
      "191": {
        start: {
          line: 459,
          column: 8
        },
        end: {
          line: 459,
          column: 21
        }
      },
      "192": {
        start: {
          line: 461,
          column: 8
        },
        end: {
          line: 461,
          column: 52
        }
      },
      "193": {
        start: {
          line: 470,
          column: 19
        },
        end: {
          line: 470,
          column: 50
        }
      },
      "194": {
        start: {
          line: 471,
          column: 4
        },
        end: {
          line: 471,
          column: 47
        }
      },
      "195": {
        start: {
          line: 480,
          column: 4
        },
        end: {
          line: 480,
          column: 52
        }
      },
      "196": {
        start: {
          line: 491,
          column: 14
        },
        end: {
          line: 491,
          column: 38
        }
      },
      "197": {
        start: {
          line: 492,
          column: 4
        },
        end: {
          line: 492,
          column: 54
        }
      },
      "198": {
        start: {
          line: 504,
          column: 4
        },
        end: {
          line: 512,
          column: 5
        }
      },
      "199": {
        start: {
          line: 505,
          column: 6
        },
        end: {
          line: 505,
          column: 39
        }
      },
      "200": {
        start: {
          line: 507,
          column: 21
        },
        end: {
          line: 507,
          column: 34
        }
      },
      "201": {
        start: {
          line: 508,
          column: 6
        },
        end: {
          line: 511,
          column: 9
        }
      },
      "202": {
        start: {
          line: 514,
          column: 4
        },
        end: {
          line: 516,
          column: 5
        }
      },
      "203": {
        start: {
          line: 515,
          column: 6
        },
        end: {
          line: 515,
          column: 48
        }
      },
      "204": {
        start: {
          line: 518,
          column: 4
        },
        end: {
          line: 518,
          column: 21
        }
      },
      "205": {
        start: {
          line: 523,
          column: 2
        },
        end: {
          line: 591,
          column: 3
        }
      },
      "206": {
        start: {
          line: 525,
          column: 24
        },
        end: {
          line: 525,
          column: 41
        }
      },
      "207": {
        start: {
          line: 526,
          column: 6
        },
        end: {
          line: 579,
          column: 7
        }
      },
      "208": {
        start: {
          line: 528,
          column: 10
        },
        end: {
          line: 528,
          column: 51
        }
      },
      "209": {
        start: {
          line: 529,
          column: 10
        },
        end: {
          line: 529,
          column: 79
        }
      },
      "210": {
        start: {
          line: 530,
          column: 10
        },
        end: {
          line: 530,
          column: 16
        }
      },
      "211": {
        start: {
          line: 533,
          column: 10
        },
        end: {
          line: 533,
          column: 53
        }
      },
      "212": {
        start: {
          line: 534,
          column: 10
        },
        end: {
          line: 536,
          column: 12
        }
      },
      "213": {
        start: {
          line: 537,
          column: 27
        },
        end: {
          line: 537,
          column: 56
        }
      },
      "214": {
        start: {
          line: 538,
          column: 10
        },
        end: {
          line: 545,
          column: 11
        }
      },
      "215": {
        start: {
          line: 540,
          column: 14
        },
        end: {
          line: 540,
          column: 69
        }
      },
      "216": {
        start: {
          line: 541,
          column: 14
        },
        end: {
          line: 541,
          column: 20
        }
      },
      "217": {
        start: {
          line: 543,
          column: 14
        },
        end: {
          line: 543,
          column: 59
        }
      },
      "218": {
        start: {
          line: 544,
          column: 14
        },
        end: {
          line: 544,
          column: 20
        }
      },
      "219": {
        start: {
          line: 546,
          column: 10
        },
        end: {
          line: 546,
          column: 16
        }
      },
      "220": {
        start: {
          line: 549,
          column: 10
        },
        end: {
          line: 549,
          column: 49
        }
      },
      "221": {
        start: {
          line: 550,
          column: 10
        },
        end: {
          line: 550,
          column: 75
        }
      },
      "222": {
        start: {
          line: 551,
          column: 10
        },
        end: {
          line: 551,
          column: 66
        }
      },
      "223": {
        start: {
          line: 552,
          column: 10
        },
        end: {
          line: 552,
          column: 16
        }
      },
      "224": {
        start: {
          line: 555,
          column: 10
        },
        end: {
          line: 555,
          column: 48
        }
      },
      "225": {
        start: {
          line: 556,
          column: 10
        },
        end: {
          line: 556,
          column: 76
        }
      },
      "226": {
        start: {
          line: 557,
          column: 10
        },
        end: {
          line: 557,
          column: 70
        }
      },
      "227": {
        start: {
          line: 558,
          column: 10
        },
        end: {
          line: 558,
          column: 16
        }
      },
      "228": {
        start: {
          line: 561,
          column: 10
        },
        end: {
          line: 561,
          column: 60
        }
      },
      "229": {
        start: {
          line: 562,
          column: 10
        },
        end: {
          line: 565,
          column: 26
        }
      },
      "230": {
        start: {
          line: 566,
          column: 10
        },
        end: {
          line: 566,
          column: 16
        }
      },
      "231": {
        start: {
          line: 569,
          column: 10
        },
        end: {
          line: 569,
          column: 57
        }
      },
      "232": {
        start: {
          line: 570,
          column: 10
        },
        end: {
          line: 573,
          column: 29
        }
      },
      "233": {
        start: {
          line: 574,
          column: 10
        },
        end: {
          line: 574,
          column: 16
        }
      },
      "234": {
        start: {
          line: 577,
          column: 10
        },
        end: {
          line: 577,
          column: 71
        }
      },
      "235": {
        start: {
          line: 580,
          column: 6
        },
        end: {
          line: 580,
          column: 12
        }
      },
      "236": {
        start: {
          line: 583,
          column: 6
        },
        end: {
          line: 583,
          column: 46
        }
      },
      "237": {
        start: {
          line: 584,
          column: 6
        },
        end: {
          line: 584,
          column: 70
        }
      },
      "238": {
        start: {
          line: 585,
          column: 6
        },
        end: {
          line: 585,
          column: 78
        }
      },
      "239": {
        start: {
          line: 586,
          column: 6
        },
        end: {
          line: 586,
          column: 12
        }
      },
      "240": {
        start: {
          line: 589,
          column: 6
        },
        end: {
          line: 589,
          column: 75
        }
      },
      "241": {
        start: {
          line: 595,
          column: 16
        },
        end: {
          line: 595,
          column: 18
        }
      },
      "242": {
        start: {
          line: 596,
          column: 2
        },
        end: {
          line: 614,
          column: 3
        }
      },
      "243": {
        start: {
          line: 598,
          column: 6
        },
        end: {
          line: 600,
          column: 8
        }
      },
      "244": {
        start: {
          line: 601,
          column: 6
        },
        end: {
          line: 601,
          column: 12
        }
      },
      "245": {
        start: {
          line: 604,
          column: 6
        },
        end: {
          line: 604,
          column: 62
        }
      },
      "246": {
        start: {
          line: 605,
          column: 6
        },
        end: {
          line: 605,
          column: 12
        }
      },
      "247": {
        start: {
          line: 608,
          column: 6
        },
        end: {
          line: 608,
          column: 59
        }
      },
      "248": {
        start: {
          line: 609,
          column: 6
        },
        end: {
          line: 609,
          column: 12
        }
      },
      "249": {
        start: {
          line: 612,
          column: 6
        },
        end: {
          line: 612,
          column: 71
        }
      },
      "250": {
        start: {
          line: 616,
          column: 2
        },
        end: {
          line: 616,
          column: 15
        }
      },
      "251": {
        start: {
          line: 620,
          column: 2
        },
        end: {
          line: 620,
          column: 60
        }
      },
      "252": {
        start: {
          line: 624,
          column: 0
        },
        end: {
          line: 624,
          column: 42
        }
      },
      "253": {
        start: {
          line: 625,
          column: 0
        },
        end: {
          line: 625,
          column: 38
        }
      },
      "254": {
        start: {
          line: 626,
          column: 0
        },
        end: {
          line: 626,
          column: 42
        }
      },
      "255": {
        start: {
          line: 627,
          column: 0
        },
        end: {
          line: 627,
          column: 40
        }
      },
      "256": {
        start: {
          line: 628,
          column: 0
        },
        end: {
          line: 628,
          column: 44
        }
      },
      "257": {
        start: {
          line: 629,
          column: 0
        },
        end: {
          line: 629,
          column: 62
        }
      },
      "258": {
        start: {
          line: 630,
          column: 0
        },
        end: {
          line: 630,
          column: 60
        }
      },
      "259": {
        start: {
          line: 631,
          column: 0
        },
        end: {
          line: 631,
          column: 66
        }
      },
      "260": {
        start: {
          line: 632,
          column: 0
        },
        end: {
          line: 632,
          column: 62
        }
      },
      "261": {
        start: {
          line: 633,
          column: 0
        },
        end: {
          line: 633,
          column: 36
        }
      },
      "262": {
        start: {
          line: 634,
          column: 0
        },
        end: {
          line: 634,
          column: 38
        }
      },
      "263": {
        start: {
          line: 635,
          column: 0
        },
        end: {
          line: 635,
          column: 48
        }
      },
      "264": {
        start: {
          line: 636,
          column: 0
        },
        end: {
          line: 636,
          column: 46
        }
      },
      "265": {
        start: {
          line: 637,
          column: 0
        },
        end: {
          line: 637,
          column: 66
        }
      },
      "266": {
        start: {
          line: 638,
          column: 0
        },
        end: {
          line: 638,
          column: 60
        }
      },
      "267": {
        start: {
          line: 639,
          column: 0
        },
        end: {
          line: 639,
          column: 32
        }
      },
      "268": {
        start: {
          line: 640,
          column: 0
        },
        end: {
          line: 640,
          column: 38
        }
      },
      "269": {
        start: {
          line: 641,
          column: 0
        },
        end: {
          line: 641,
          column: 76
        }
      },
      "270": {
        start: {
          line: 642,
          column: 0
        },
        end: {
          line: 642,
          column: 72
        }
      },
      "271": {
        start: {
          line: 643,
          column: 0
        },
        end: {
          line: 643,
          column: 66
        }
      },
      "272": {
        start: {
          line: 644,
          column: 0
        },
        end: {
          line: 644,
          column: 70
        }
      },
      "273": {
        start: {
          line: 645,
          column: 0
        },
        end: {
          line: 645,
          column: 62
        }
      },
      "274": {
        start: {
          line: 646,
          column: 0
        },
        end: {
          line: 646,
          column: 60
        }
      },
      "275": {
        start: {
          line: 647,
          column: 0
        },
        end: {
          line: 648,
          column: 40
        }
      },
      "276": {
        start: {
          line: 649,
          column: 0
        },
        end: {
          line: 649,
          column: 78
        }
      },
      "277": {
        start: {
          line: 650,
          column: 0
        },
        end: {
          line: 650,
          column: 64
        }
      },
      "278": {
        start: {
          line: 651,
          column: 0
        },
        end: {
          line: 651,
          column: 34
        }
      },
      "279": {
        start: {
          line: 652,
          column: 0
        },
        end: {
          line: 652,
          column: 52
        }
      },
      "280": {
        start: {
          line: 653,
          column: 0
        },
        end: {
          line: 653,
          column: 58
        }
      },
      "281": {
        start: {
          line: 654,
          column: 0
        },
        end: {
          line: 654,
          column: 60
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 99,
            column: 2
          },
          end: {
            line: 99,
            column: 3
          }
        },
        loc: {
          start: {
            line: 99,
            column: 46
          },
          end: {
            line: 107,
            column: 3
          }
        },
        line: 99
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 116,
            column: 2
          },
          end: {
            line: 116,
            column: 3
          }
        },
        loc: {
          start: {
            line: 116,
            column: 34
          },
          end: {
            line: 381,
            column: 3
          }
        },
        line: 116
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 151,
            column: 34
          },
          end: {
            line: 151,
            column: 35
          }
        },
        loc: {
          start: {
            line: 151,
            column: 47
          },
          end: {
            line: 153,
            column: 9
          }
        },
        line: 151
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 168,
            column: 34
          },
          end: {
            line: 168,
            column: 35
          }
        },
        loc: {
          start: {
            line: 168,
            column: 47
          },
          end: {
            line: 170,
            column: 9
          }
        },
        line: 168
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 289,
            column: 34
          },
          end: {
            line: 289,
            column: 35
          }
        },
        loc: {
          start: {
            line: 289,
            column: 48
          },
          end: {
            line: 291,
            column: 9
          }
        },
        line: 289
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 341,
            column: 29
          },
          end: {
            line: 341,
            column: 30
          }
        },
        loc: {
          start: {
            line: 341,
            column: 38
          },
          end: {
            line: 350,
            column: 9
          }
        },
        line: 341
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 353,
            column: 37
          },
          end: {
            line: 353,
            column: 38
          }
        },
        loc: {
          start: {
            line: 353,
            column: 51
          },
          end: {
            line: 355,
            column: 9
          }
        },
        line: 353
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 398,
            column: 2
          },
          end: {
            line: 398,
            column: 3
          }
        },
        loc: {
          start: {
            line: 398,
            column: 49
          },
          end: {
            line: 427,
            column: 3
          }
        },
        line: 398
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 429,
            column: 2
          },
          end: {
            line: 429,
            column: 3
          }
        },
        loc: {
          start: {
            line: 429,
            column: 47
          },
          end: {
            line: 431,
            column: 3
          }
        },
        line: 429
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 443,
            column: 2
          },
          end: {
            line: 443,
            column: 3
          }
        },
        loc: {
          start: {
            line: 443,
            column: 69
          },
          end: {
            line: 463,
            column: 3
          }
        },
        line: 443
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 469,
            column: 2
          },
          end: {
            line: 469,
            column: 3
          }
        },
        loc: {
          start: {
            line: 469,
            column: 29
          },
          end: {
            line: 472,
            column: 3
          }
        },
        line: 469
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 479,
            column: 2
          },
          end: {
            line: 479,
            column: 3
          }
        },
        loc: {
          start: {
            line: 479,
            column: 31
          },
          end: {
            line: 481,
            column: 3
          }
        },
        line: 479
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 490,
            column: 2
          },
          end: {
            line: 490,
            column: 3
          }
        },
        loc: {
          start: {
            line: 490,
            column: 30
          },
          end: {
            line: 493,
            column: 3
          }
        },
        line: 490
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 502,
            column: 2
          },
          end: {
            line: 502,
            column: 3
          }
        },
        loc: {
          start: {
            line: 502,
            column: 28
          },
          end: {
            line: 519,
            column: 3
          }
        },
        line: 502
      },
      "14": {
        name: "extractRevokeSponshipDetails",
        decl: {
          start: {
            line: 522,
            column: 9
          },
          end: {
            line: 522,
            column: 37
          }
        },
        loc: {
          start: {
            line: 522,
            column: 53
          },
          end: {
            line: 592,
            column: 1
          }
        },
        line: 522
      },
      "15": {
        name: "convertXDRSignerKeyToObject",
        decl: {
          start: {
            line: 594,
            column: 9
          },
          end: {
            line: 594,
            column: 36
          }
        },
        loc: {
          start: {
            line: 594,
            column: 48
          },
          end: {
            line: 617,
            column: 1
          }
        },
        line: 594
      },
      "16": {
        name: "accountIdtoAddress",
        decl: {
          start: {
            line: 619,
            column: 9
          },
          end: {
            line: 619,
            column: 27
          }
        },
        loc: {
          start: {
            line: 619,
            column: 39
          },
          end: {
            line: 621,
            column: 1
          }
        },
        line: 619
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 106,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 106,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 100
      },
      "1": {
        loc: {
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 118,
            column: 4
          },
          end: {
            line: 120,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 118
      },
      "2": {
        loc: {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 379,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 126,
            column: 6
          },
          end: {
            line: 131,
            column: 7
          }
        }, {
          start: {
            line: 132,
            column: 6
          },
          end: {
            line: 138,
            column: 7
          }
        }, {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 155,
            column: 7
          }
        }, {
          start: {
            line: 156,
            column: 6
          },
          end: {
            line: 172,
            column: 7
          }
        }, {
          start: {
            line: 173,
            column: 6
          },
          end: {
            line: 185,
            column: 7
          }
        }, {
          start: {
            line: 186,
            column: 6
          },
          end: {
            line: 193,
            column: 7
          }
        }, {
          start: {
            line: 194,
            column: 6
          },
          end: {
            line: 232,
            column: 7
          }
        }, {
          start: {
            line: 234,
            column: 6
          },
          end: {
            line: 234,
            column: 25
          }
        }, {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 243,
            column: 7
          }
        }, {
          start: {
            line: 244,
            column: 6
          },
          end: {
            line: 252,
            column: 7
          }
        }, {
          start: {
            line: 254,
            column: 6
          },
          end: {
            line: 254,
            column: 32
          }
        }, {
          start: {
            line: 255,
            column: 6
          },
          end: {
            line: 262,
            column: 7
          }
        }, {
          start: {
            line: 263,
            column: 6
          },
          end: {
            line: 267,
            column: 7
          }
        }, {
          start: {
            line: 268,
            column: 6
          },
          end: {
            line: 274,
            column: 7
          }
        }, {
          start: {
            line: 275,
            column: 6
          },
          end: {
            line: 278,
            column: 7
          }
        }, {
          start: {
            line: 279,
            column: 6
          },
          end: {
            line: 283,
            column: 7
          }
        }, {
          start: {
            line: 284,
            column: 6
          },
          end: {
            line: 293,
            column: 7
          }
        }, {
          start: {
            line: 294,
            column: 6
          },
          end: {
            line: 298,
            column: 7
          }
        }, {
          start: {
            line: 299,
            column: 6
          },
          end: {
            line: 303,
            column: 7
          }
        }, {
          start: {
            line: 304,
            column: 6
          },
          end: {
            line: 307,
            column: 7
          }
        }, {
          start: {
            line: 308,
            column: 6
          },
          end: {
            line: 311,
            column: 7
          }
        }, {
          start: {
            line: 312,
            column: 6
          },
          end: {
            line: 318,
            column: 7
          }
        }, {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 323,
            column: 7
          }
        }, {
          start: {
            line: 324,
            column: 6
          },
          end: {
            line: 358,
            column: 7
          }
        }, {
          start: {
            line: 359,
            column: 6
          },
          end: {
            line: 367,
            column: 7
          }
        }, {
          start: {
            line: 368,
            column: 6
          },
          end: {
            line: 375,
            column: 7
          }
        }, {
          start: {
            line: 376,
            column: 6
          },
          end: {
            line: 378,
            column: 7
          }
        }],
        line: 125
      },
      "3": {
        loc: {
          start: {
            line: 175,
            column: 8
          },
          end: {
            line: 182,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 176,
            column: 10
          },
          end: {
            line: 178,
            column: 18
          }
        }, {
          start: {
            line: 179,
            column: 10
          },
          end: {
            line: 181,
            column: 18
          }
        }],
        line: 175
      },
      "4": {
        loc: {
          start: {
            line: 196,
            column: 8
          },
          end: {
            line: 198,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 196,
            column: 8
          },
          end: {
            line: 198,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 196
      },
      "5": {
        loc: {
          start: {
            line: 208,
            column: 10
          },
          end: {
            line: 210,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 209,
            column: 14
          },
          end: {
            line: 209,
            column: 50
          }
        }, {
          start: {
            line: 210,
            column: 14
          },
          end: {
            line: 210,
            column: 23
          }
        }],
        line: 208
      },
      "6": {
        loc: {
          start: {
            line: 212,
            column: 8
          },
          end: {
            line: 230,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 212,
            column: 8
          },
          end: {
            line: 230,
            column: 9
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 212
      },
      "7": {
        loc: {
          start: {
            line: 215,
            column: 10
          },
          end: {
            line: 226,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 215,
            column: 10
          },
          end: {
            line: 226,
            column: 11
          }
        }, {
          start: {
            line: 217,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        }],
        line: 215
      },
      "8": {
        loc: {
          start: {
            line: 217,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 217,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        }, {
          start: {
            line: 219,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        }],
        line: 217
      },
      "9": {
        loc: {
          start: {
            line: 219,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 219,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        }, {
          start: {
            line: 221,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        }],
        line: 219
      },
      "10": {
        loc: {
          start: {
            line: 221,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 17
          },
          end: {
            line: 226,
            column: 11
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 221
      },
      "11": {
        loc: {
          start: {
            line: 343,
            column: 10
          },
          end: {
            line: 345,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 343,
            column: 10
          },
          end: {
            line: 345,
            column: 11
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 343
      },
      "12": {
        loc: {
          start: {
            line: 346,
            column: 10
          },
          end: {
            line: 348,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 346,
            column: 10
          },
          end: {
            line: 348,
            column: 11
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 346
      },
      "13": {
        loc: {
          start: {
            line: 398,
            column: 30
          },
          end: {
            line: 398,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 398,
            column: 42
          },
          end: {
            line: 398,
            column: 47
          }
        }],
        line: 398
      },
      "14": {
        loc: {
          start: {
            line: 399,
            column: 4
          },
          end: {
            line: 401,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 399,
            column: 4
          },
          end: {
            line: 401,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 399
      },
      "15": {
        loc: {
          start: {
            line: 410,
            column: 4
          },
          end: {
            line: 424,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 410,
            column: 4
          },
          end: {
            line: 424,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 410
      },
      "16": {
        loc: {
          start: {
            line: 412,
            column: 6
          },
          end: {
            line: 421,
            column: 24
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 412,
            column: 7
          },
          end: {
            line: 412,
            column: 17
          }
        }, {
          start: {
            line: 412,
            column: 21
          },
          end: {
            line: 412,
            column: 36
          }
        }, {
          start: {
            line: 414,
            column: 6
          },
          end: {
            line: 414,
            column: 25
          }
        }, {
          start: {
            line: 416,
            column: 6
          },
          end: {
            line: 416,
            column: 63
          }
        }, {
          start: {
            line: 418,
            column: 6
          },
          end: {
            line: 418,
            column: 32
          }
        }, {
          start: {
            line: 420,
            column: 6
          },
          end: {
            line: 420,
            column: 20
          }
        }, {
          start: {
            line: 421,
            column: 6
          },
          end: {
            line: 421,
            column: 24
          }
        }],
        line: 412
      },
      "17": {
        loc: {
          start: {
            line: 443,
            column: 45
          },
          end: {
            line: 443,
            column: 67
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 443,
            column: 63
          },
          end: {
            line: 443,
            column: 67
          }
        }],
        line: 443
      },
      "18": {
        loc: {
          start: {
            line: 444,
            column: 4
          },
          end: {
            line: 446,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 444,
            column: 4
          },
          end: {
            line: 446,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 444
      },
      "19": {
        loc: {
          start: {
            line: 448,
            column: 4
          },
          end: {
            line: 450,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 448,
            column: 4
          },
          end: {
            line: 450,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 448
      },
      "20": {
        loc: {
          start: {
            line: 452,
            column: 4
          },
          end: {
            line: 462,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 453,
            column: 6
          },
          end: {
            line: 454,
            column: 52
          }
        }, {
          start: {
            line: 455,
            column: 6
          },
          end: {
            line: 456,
            column: 58
          }
        }, {
          start: {
            line: 457,
            column: 6
          },
          end: {
            line: 459,
            column: 21
          }
        }, {
          start: {
            line: 460,
            column: 6
          },
          end: {
            line: 461,
            column: 52
          }
        }],
        line: 452
      },
      "21": {
        loc: {
          start: {
            line: 453,
            column: 11
          },
          end: {
            line: 453,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 453,
            column: 11
          },
          end: {
            line: 453,
            column: 27
          }
        }, {
          start: {
            line: 453,
            column: 31
          },
          end: {
            line: 453,
            column: 47
          }
        }, {
          start: {
            line: 453,
            column: 51
          },
          end: {
            line: 453,
            column: 66
          }
        }],
        line: 453
      },
      "22": {
        loc: {
          start: {
            line: 457,
            column: 11
          },
          end: {
            line: 458,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 457,
            column: 11
          },
          end: {
            line: 457,
            column: 27
          }
        }, {
          start: {
            line: 458,
            column: 9
          },
          end: {
            line: 458,
            column: 24
          }
        }, {
          start: {
            line: 458,
            column: 28
          },
          end: {
            line: 458,
            column: 56
          }
        }],
        line: 457
      },
      "23": {
        loc: {
          start: {
            line: 504,
            column: 4
          },
          end: {
            line: 512,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 504,
            column: 4
          },
          end: {
            line: 512,
            column: 5
          }
        }, {
          start: {
            line: 506,
            column: 11
          },
          end: {
            line: 512,
            column: 5
          }
        }],
        line: 504
      },
      "24": {
        loc: {
          start: {
            line: 504,
            column: 8
          },
          end: {
            line: 504,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 504,
            column: 8
          },
          end: {
            line: 504,
            column: 15
          }
        }, {
          start: {
            line: 504,
            column: 19
          },
          end: {
            line: 504,
            column: 26
          }
        }],
        line: 504
      },
      "25": {
        loc: {
          start: {
            line: 514,
            column: 4
          },
          end: {
            line: 516,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 514,
            column: 4
          },
          end: {
            line: 516,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 514
      },
      "26": {
        loc: {
          start: {
            line: 514,
            column: 8
          },
          end: {
            line: 514,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 514,
            column: 8
          },
          end: {
            line: 514,
            column: 25
          }
        }, {
          start: {
            line: 514,
            column: 29
          },
          end: {
            line: 514,
            column: 46
          }
        }],
        line: 514
      },
      "27": {
        loc: {
          start: {
            line: 523,
            column: 2
          },
          end: {
            line: 591,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 524,
            column: 4
          },
          end: {
            line: 581,
            column: 5
          }
        }, {
          start: {
            line: 582,
            column: 4
          },
          end: {
            line: 587,
            column: 5
          }
        }, {
          start: {
            line: 588,
            column: 4
          },
          end: {
            line: 590,
            column: 5
          }
        }],
        line: 523
      },
      "28": {
        loc: {
          start: {
            line: 526,
            column: 6
          },
          end: {
            line: 579,
            column: 7
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 527,
            column: 8
          },
          end: {
            line: 531,
            column: 9
          }
        }, {
          start: {
            line: 532,
            column: 8
          },
          end: {
            line: 547,
            column: 9
          }
        }, {
          start: {
            line: 548,
            column: 8
          },
          end: {
            line: 553,
            column: 9
          }
        }, {
          start: {
            line: 554,
            column: 8
          },
          end: {
            line: 559,
            column: 9
          }
        }, {
          start: {
            line: 560,
            column: 8
          },
          end: {
            line: 567,
            column: 9
          }
        }, {
          start: {
            line: 568,
            column: 8
          },
          end: {
            line: 575,
            column: 9
          }
        }, {
          start: {
            line: 576,
            column: 8
          },
          end: {
            line: 578,
            column: 9
          }
        }],
        line: 526
      },
      "29": {
        loc: {
          start: {
            line: 538,
            column: 10
          },
          end: {
            line: 545,
            column: 11
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 539,
            column: 12
          },
          end: {
            line: 541,
            column: 20
          }
        }, {
          start: {
            line: 542,
            column: 12
          },
          end: {
            line: 544,
            column: 20
          }
        }],
        line: 538
      },
      "30": {
        loc: {
          start: {
            line: 596,
            column: 2
          },
          end: {
            line: 614,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 597,
            column: 4
          },
          end: {
            line: 602,
            column: 5
          }
        }, {
          start: {
            line: 603,
            column: 4
          },
          end: {
            line: 606,
            column: 5
          }
        }, {
          start: {
            line: 607,
            column: 4
          },
          end: {
            line: 610,
            column: 5
          }
        }, {
          start: {
            line: 611,
            column: 4
          },
          end: {
            line: 613,
            column: 5
          }
        }],
        line: 596
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0, 0, 0, 0, 0, 0],
      "17": [0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0, 0, 0],
      "21": [0, 0, 0],
      "22": [0, 0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0, 0],
      "28": [0, 0, 0, 0, 0, 0, 0],
      "29": [0, 0],
      "30": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "757a6b148f0586f5b2f43ee8c12c051e16b1e711"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jzfu96gqr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1jzfu96gqr();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint-disable no-bitwise */
var ONE = (cov_1jzfu96gqr().s[0]++, 10000000);
var MAX_INT64 = (cov_1jzfu96gqr().s[1]++, '9223372036854775807');

/**
 * When set using `{@link Operation.setOptions}` option, requires the issuing
 * account to give other accounts permission before they can hold the issuing
 * account’s credit.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
var AuthRequiredFlag = (cov_1jzfu96gqr().s[2]++, 1 << 0);
/**
 * When set using `{@link Operation.setOptions}` option, allows the issuing
 * account to revoke its credit held by other accounts.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
exports.AuthRequiredFlag = AuthRequiredFlag;
var AuthRevocableFlag = (cov_1jzfu96gqr().s[3]++, 1 << 1);
/**
 * When set using `{@link Operation.setOptions}` option, then none of the
 * authorization flags can be set and the account can never be deleted.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
exports.AuthRevocableFlag = AuthRevocableFlag;
var AuthImmutableFlag = (cov_1jzfu96gqr().s[4]++, 1 << 2);

/**
 * When set using `{@link Operation.setOptions}` option, then any trustlines
 * created by this account can have a ClawbackOp operation submitted for the
 * corresponding asset.
 *
 * @constant
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
exports.AuthImmutableFlag = AuthImmutableFlag;
var AuthClawbackEnabledFlag = (cov_1jzfu96gqr().s[5]++, 1 << 3);

/**
 * `Operation` class represents [operations](https://developers.stellar.org/docs/glossary/operations/) in Stellar network.
 * Use one of static methods to create operations:
 * * `{@link Operation.createAccount}`
 * * `{@link Operation.payment}`
 * * `{@link Operation.pathPaymentStrictReceive}`
 * * `{@link Operation.pathPaymentStrictSend}`
 * * `{@link Operation.manageSellOffer}`
 * * `{@link Operation.manageBuyOffer}`
 * * `{@link Operation.createPassiveSellOffer}`
 * * `{@link Operation.setOptions}`
 * * `{@link Operation.changeTrust}`
 * * `{@link Operation.allowTrust}`
 * * `{@link Operation.accountMerge}`
 * * `{@link Operation.inflation}`
 * * `{@link Operation.manageData}`
 * * `{@link Operation.bumpSequence}`
 * * `{@link Operation.createClaimableBalance}`
 * * `{@link Operation.claimClaimableBalance}`
 * * `{@link Operation.beginSponsoringFutureReserves}`
 * * `{@link Operation.endSponsoringFutureReserves}`
 * * `{@link Operation.revokeAccountSponsorship}`
 * * `{@link Operation.revokeTrustlineSponsorship}`
 * * `{@link Operation.revokeOfferSponsorship}`
 * * `{@link Operation.revokeDataSponsorship}`
 * * `{@link Operation.revokeClaimableBalanceSponsorship}`
 * * `{@link Operation.revokeLiquidityPoolSponsorship}`
 * * `{@link Operation.revokeSignerSponsorship}`
 * * `{@link Operation.clawback}`
 * * `{@link Operation.clawbackClaimableBalance}`
 * * `{@link Operation.setTrustLineFlags}`
 * * `{@link Operation.liquidityPoolDeposit}`
 * * `{@link Operation.liquidityPoolWithdraw}`
 *
 * @class Operation
 */
exports.AuthClawbackEnabledFlag = AuthClawbackEnabledFlag;
var Operation = /*#__PURE__*/function () {
  function Operation() {
    _classCallCheck(this, Operation);
  }
  _createClass(Operation, null, [{
    key: "setSourceAccount",
    value: function setSourceAccount(opAttributes, opts) {
      cov_1jzfu96gqr().f[0]++;
      cov_1jzfu96gqr().s[6]++;
      if (opts.source) {
        cov_1jzfu96gqr().b[0][0]++;
        cov_1jzfu96gqr().s[7]++;
        try {
          cov_1jzfu96gqr().s[8]++;
          opAttributes.sourceAccount = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(opts.source);
        } catch (e) {
          cov_1jzfu96gqr().s[9]++;
          throw new Error('Source address is invalid');
        }
      } else {
        cov_1jzfu96gqr().b[0][1]++;
      }
    }

    /**
     * Deconstructs the raw XDR operation object into the structured object that
     * was used to create the operation (i.e. the `opts` parameter to most ops).
     *
     * @param {xdr.Operation}   operation - An XDR Operation.
     * @return {Operation}
     */
  }, {
    key: "fromXDRObject",
    value: function fromXDRObject(operation) {
      cov_1jzfu96gqr().f[1]++;
      var result = (cov_1jzfu96gqr().s[10]++, {});
      cov_1jzfu96gqr().s[11]++;
      if (operation.sourceAccount()) {
        cov_1jzfu96gqr().b[1][0]++;
        cov_1jzfu96gqr().s[12]++;
        result.source = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(operation.sourceAccount());
      } else {
        cov_1jzfu96gqr().b[1][1]++;
      }
      var attrs = (cov_1jzfu96gqr().s[13]++, operation.body().value());
      var operationName = (cov_1jzfu96gqr().s[14]++, operation.body()["switch"]().name);
      cov_1jzfu96gqr().s[15]++;
      switch (operationName) {
        case 'createAccount':
          cov_1jzfu96gqr().b[2][0]++;
          {
            cov_1jzfu96gqr().s[16]++;
            result.type = 'createAccount';
            cov_1jzfu96gqr().s[17]++;
            result.destination = accountIdtoAddress(attrs.destination());
            cov_1jzfu96gqr().s[18]++;
            result.startingBalance = this._fromXDRAmount(attrs.startingBalance());
            cov_1jzfu96gqr().s[19]++;
            break;
          }
        case 'payment':
          cov_1jzfu96gqr().b[2][1]++;
          {
            cov_1jzfu96gqr().s[20]++;
            result.type = 'payment';
            cov_1jzfu96gqr().s[21]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.destination());
            cov_1jzfu96gqr().s[22]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_1jzfu96gqr().s[23]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_1jzfu96gqr().s[24]++;
            break;
          }
        case 'pathPaymentStrictReceive':
          cov_1jzfu96gqr().b[2][2]++;
          {
            cov_1jzfu96gqr().s[25]++;
            result.type = 'pathPaymentStrictReceive';
            cov_1jzfu96gqr().s[26]++;
            result.sendAsset = _asset.Asset.fromOperation(attrs.sendAsset());
            cov_1jzfu96gqr().s[27]++;
            result.sendMax = this._fromXDRAmount(attrs.sendMax());
            cov_1jzfu96gqr().s[28]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.destination());
            cov_1jzfu96gqr().s[29]++;
            result.destAsset = _asset.Asset.fromOperation(attrs.destAsset());
            cov_1jzfu96gqr().s[30]++;
            result.destAmount = this._fromXDRAmount(attrs.destAmount());
            cov_1jzfu96gqr().s[31]++;
            result.path = [];
            var path = (cov_1jzfu96gqr().s[32]++, attrs.path());

            // note that Object.values isn't supported by node 6!
            cov_1jzfu96gqr().s[33]++;
            Object.keys(path).forEach(function (pathKey) {
              cov_1jzfu96gqr().f[2]++;
              cov_1jzfu96gqr().s[34]++;
              result.path.push(_asset.Asset.fromOperation(path[pathKey]));
            });
            cov_1jzfu96gqr().s[35]++;
            break;
          }
        case 'pathPaymentStrictSend':
          cov_1jzfu96gqr().b[2][3]++;
          {
            cov_1jzfu96gqr().s[36]++;
            result.type = 'pathPaymentStrictSend';
            cov_1jzfu96gqr().s[37]++;
            result.sendAsset = _asset.Asset.fromOperation(attrs.sendAsset());
            cov_1jzfu96gqr().s[38]++;
            result.sendAmount = this._fromXDRAmount(attrs.sendAmount());
            cov_1jzfu96gqr().s[39]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.destination());
            cov_1jzfu96gqr().s[40]++;
            result.destAsset = _asset.Asset.fromOperation(attrs.destAsset());
            cov_1jzfu96gqr().s[41]++;
            result.destMin = this._fromXDRAmount(attrs.destMin());
            cov_1jzfu96gqr().s[42]++;
            result.path = [];
            var _path = (cov_1jzfu96gqr().s[43]++, attrs.path());

            // note that Object.values isn't supported by node 6!
            cov_1jzfu96gqr().s[44]++;
            Object.keys(_path).forEach(function (pathKey) {
              cov_1jzfu96gqr().f[3]++;
              cov_1jzfu96gqr().s[45]++;
              result.path.push(_asset.Asset.fromOperation(_path[pathKey]));
            });
            cov_1jzfu96gqr().s[46]++;
            break;
          }
        case 'changeTrust':
          cov_1jzfu96gqr().b[2][4]++;
          {
            cov_1jzfu96gqr().s[47]++;
            result.type = 'changeTrust';
            cov_1jzfu96gqr().s[48]++;
            switch (attrs.line()["switch"]()) {
              case _xdr["default"].AssetType.assetTypePoolShare():
                cov_1jzfu96gqr().b[3][0]++;
                cov_1jzfu96gqr().s[49]++;
                result.line = _liquidity_pool_asset.LiquidityPoolAsset.fromOperation(attrs.line());
                cov_1jzfu96gqr().s[50]++;
                break;
              default:
                cov_1jzfu96gqr().b[3][1]++;
                cov_1jzfu96gqr().s[51]++;
                result.line = _asset.Asset.fromOperation(attrs.line());
                cov_1jzfu96gqr().s[52]++;
                break;
            }
            cov_1jzfu96gqr().s[53]++;
            result.limit = this._fromXDRAmount(attrs.limit());
            cov_1jzfu96gqr().s[54]++;
            break;
          }
        case 'allowTrust':
          cov_1jzfu96gqr().b[2][5]++;
          {
            cov_1jzfu96gqr().s[55]++;
            result.type = 'allowTrust';
            cov_1jzfu96gqr().s[56]++;
            result.trustor = accountIdtoAddress(attrs.trustor());
            cov_1jzfu96gqr().s[57]++;
            result.assetCode = attrs.asset().value().toString();
            cov_1jzfu96gqr().s[58]++;
            result.assetCode = (0, _trimEnd["default"])(result.assetCode, '\0');
            cov_1jzfu96gqr().s[59]++;
            result.authorize = attrs.authorize();
            cov_1jzfu96gqr().s[60]++;
            break;
          }
        case 'setOptions':
          cov_1jzfu96gqr().b[2][6]++;
          {
            cov_1jzfu96gqr().s[61]++;
            result.type = 'setOptions';
            cov_1jzfu96gqr().s[62]++;
            if (attrs.inflationDest()) {
              cov_1jzfu96gqr().b[4][0]++;
              cov_1jzfu96gqr().s[63]++;
              result.inflationDest = accountIdtoAddress(attrs.inflationDest());
            } else {
              cov_1jzfu96gqr().b[4][1]++;
            }
            cov_1jzfu96gqr().s[64]++;
            result.clearFlags = attrs.clearFlags();
            cov_1jzfu96gqr().s[65]++;
            result.setFlags = attrs.setFlags();
            cov_1jzfu96gqr().s[66]++;
            result.masterWeight = attrs.masterWeight();
            cov_1jzfu96gqr().s[67]++;
            result.lowThreshold = attrs.lowThreshold();
            cov_1jzfu96gqr().s[68]++;
            result.medThreshold = attrs.medThreshold();
            cov_1jzfu96gqr().s[69]++;
            result.highThreshold = attrs.highThreshold();
            // home_domain is checked by iscntrl in stellar-core
            cov_1jzfu96gqr().s[70]++;
            result.homeDomain = attrs.homeDomain() !== undefined ? (cov_1jzfu96gqr().b[5][0]++, attrs.homeDomain().toString('ascii')) : (cov_1jzfu96gqr().b[5][1]++, undefined);
            cov_1jzfu96gqr().s[71]++;
            if (attrs.signer()) {
              cov_1jzfu96gqr().b[6][0]++;
              var signer = (cov_1jzfu96gqr().s[72]++, {});
              var arm = (cov_1jzfu96gqr().s[73]++, attrs.signer().key().arm());
              cov_1jzfu96gqr().s[74]++;
              if (arm === 'ed25519') {
                cov_1jzfu96gqr().b[7][0]++;
                cov_1jzfu96gqr().s[75]++;
                signer.ed25519PublicKey = accountIdtoAddress(attrs.signer().key());
              } else {
                cov_1jzfu96gqr().b[7][1]++;
                cov_1jzfu96gqr().s[76]++;
                if (arm === 'preAuthTx') {
                  cov_1jzfu96gqr().b[8][0]++;
                  cov_1jzfu96gqr().s[77]++;
                  signer.preAuthTx = attrs.signer().key().preAuthTx();
                } else {
                  cov_1jzfu96gqr().b[8][1]++;
                  cov_1jzfu96gqr().s[78]++;
                  if (arm === 'hashX') {
                    cov_1jzfu96gqr().b[9][0]++;
                    cov_1jzfu96gqr().s[79]++;
                    signer.sha256Hash = attrs.signer().key().hashX();
                  } else {
                    cov_1jzfu96gqr().b[9][1]++;
                    cov_1jzfu96gqr().s[80]++;
                    if (arm === 'ed25519SignedPayload') {
                      cov_1jzfu96gqr().b[10][0]++;
                      var signedPayload = (cov_1jzfu96gqr().s[81]++, attrs.signer().key().ed25519SignedPayload());
                      cov_1jzfu96gqr().s[82]++;
                      signer.ed25519SignedPayload = _strkey.StrKey.encodeSignedPayload(signedPayload.toXDR());
                    } else {
                      cov_1jzfu96gqr().b[10][1]++;
                    }
                  }
                }
              }
              cov_1jzfu96gqr().s[83]++;
              signer.weight = attrs.signer().weight();
              cov_1jzfu96gqr().s[84]++;
              result.signer = signer;
            } else {
              cov_1jzfu96gqr().b[6][1]++;
            }
            cov_1jzfu96gqr().s[85]++;
            break;
          }
        // the next case intentionally falls through!
        case 'manageOffer':
          cov_1jzfu96gqr().b[2][7]++;
        case 'manageSellOffer':
          cov_1jzfu96gqr().b[2][8]++;
          {
            cov_1jzfu96gqr().s[86]++;
            result.type = 'manageSellOffer';
            cov_1jzfu96gqr().s[87]++;
            result.selling = _asset.Asset.fromOperation(attrs.selling());
            cov_1jzfu96gqr().s[88]++;
            result.buying = _asset.Asset.fromOperation(attrs.buying());
            cov_1jzfu96gqr().s[89]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_1jzfu96gqr().s[90]++;
            result.price = this._fromXDRPrice(attrs.price());
            cov_1jzfu96gqr().s[91]++;
            result.offerId = attrs.offerId().toString();
            cov_1jzfu96gqr().s[92]++;
            break;
          }
        case 'manageBuyOffer':
          cov_1jzfu96gqr().b[2][9]++;
          {
            cov_1jzfu96gqr().s[93]++;
            result.type = 'manageBuyOffer';
            cov_1jzfu96gqr().s[94]++;
            result.selling = _asset.Asset.fromOperation(attrs.selling());
            cov_1jzfu96gqr().s[95]++;
            result.buying = _asset.Asset.fromOperation(attrs.buying());
            cov_1jzfu96gqr().s[96]++;
            result.buyAmount = this._fromXDRAmount(attrs.buyAmount());
            cov_1jzfu96gqr().s[97]++;
            result.price = this._fromXDRPrice(attrs.price());
            cov_1jzfu96gqr().s[98]++;
            result.offerId = attrs.offerId().toString();
            cov_1jzfu96gqr().s[99]++;
            break;
          }
        // the next case intentionally falls through!
        case 'createPassiveOffer':
          cov_1jzfu96gqr().b[2][10]++;
        case 'createPassiveSellOffer':
          cov_1jzfu96gqr().b[2][11]++;
          {
            cov_1jzfu96gqr().s[100]++;
            result.type = 'createPassiveSellOffer';
            cov_1jzfu96gqr().s[101]++;
            result.selling = _asset.Asset.fromOperation(attrs.selling());
            cov_1jzfu96gqr().s[102]++;
            result.buying = _asset.Asset.fromOperation(attrs.buying());
            cov_1jzfu96gqr().s[103]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_1jzfu96gqr().s[104]++;
            result.price = this._fromXDRPrice(attrs.price());
            cov_1jzfu96gqr().s[105]++;
            break;
          }
        case 'accountMerge':
          cov_1jzfu96gqr().b[2][12]++;
          {
            cov_1jzfu96gqr().s[106]++;
            result.type = 'accountMerge';
            cov_1jzfu96gqr().s[107]++;
            result.destination = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs);
            cov_1jzfu96gqr().s[108]++;
            break;
          }
        case 'manageData':
          cov_1jzfu96gqr().b[2][13]++;
          {
            cov_1jzfu96gqr().s[109]++;
            result.type = 'manageData';
            // manage_data.name is checked by iscntrl in stellar-core
            cov_1jzfu96gqr().s[110]++;
            result.name = attrs.dataName().toString('ascii');
            cov_1jzfu96gqr().s[111]++;
            result.value = attrs.dataValue();
            cov_1jzfu96gqr().s[112]++;
            break;
          }
        case 'inflation':
          cov_1jzfu96gqr().b[2][14]++;
          {
            cov_1jzfu96gqr().s[113]++;
            result.type = 'inflation';
            cov_1jzfu96gqr().s[114]++;
            break;
          }
        case 'bumpSequence':
          cov_1jzfu96gqr().b[2][15]++;
          {
            cov_1jzfu96gqr().s[115]++;
            result.type = 'bumpSequence';
            cov_1jzfu96gqr().s[116]++;
            result.bumpTo = attrs.bumpTo().toString();
            cov_1jzfu96gqr().s[117]++;
            break;
          }
        case 'createClaimableBalance':
          cov_1jzfu96gqr().b[2][16]++;
          {
            cov_1jzfu96gqr().s[118]++;
            result.type = 'createClaimableBalance';
            cov_1jzfu96gqr().s[119]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_1jzfu96gqr().s[120]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_1jzfu96gqr().s[121]++;
            result.claimants = [];
            cov_1jzfu96gqr().s[122]++;
            attrs.claimants().forEach(function (claimant) {
              cov_1jzfu96gqr().f[4]++;
              cov_1jzfu96gqr().s[123]++;
              result.claimants.push(_claimant.Claimant.fromXDR(claimant));
            });
            cov_1jzfu96gqr().s[124]++;
            break;
          }
        case 'claimClaimableBalance':
          cov_1jzfu96gqr().b[2][17]++;
          {
            cov_1jzfu96gqr().s[125]++;
            result.type = 'claimClaimableBalance';
            cov_1jzfu96gqr().s[126]++;
            result.balanceId = attrs.toXDR('hex');
            cov_1jzfu96gqr().s[127]++;
            break;
          }
        case 'beginSponsoringFutureReserves':
          cov_1jzfu96gqr().b[2][18]++;
          {
            cov_1jzfu96gqr().s[128]++;
            result.type = 'beginSponsoringFutureReserves';
            cov_1jzfu96gqr().s[129]++;
            result.sponsoredId = accountIdtoAddress(attrs.sponsoredId());
            cov_1jzfu96gqr().s[130]++;
            break;
          }
        case 'endSponsoringFutureReserves':
          cov_1jzfu96gqr().b[2][19]++;
          {
            cov_1jzfu96gqr().s[131]++;
            result.type = 'endSponsoringFutureReserves';
            cov_1jzfu96gqr().s[132]++;
            break;
          }
        case 'revokeSponsorship':
          cov_1jzfu96gqr().b[2][20]++;
          {
            cov_1jzfu96gqr().s[133]++;
            extractRevokeSponshipDetails(attrs, result);
            cov_1jzfu96gqr().s[134]++;
            break;
          }
        case 'clawback':
          cov_1jzfu96gqr().b[2][21]++;
          {
            cov_1jzfu96gqr().s[135]++;
            result.type = 'clawback';
            cov_1jzfu96gqr().s[136]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_1jzfu96gqr().s[137]++;
            result.from = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(attrs.from());
            cov_1jzfu96gqr().s[138]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_1jzfu96gqr().s[139]++;
            break;
          }
        case 'clawbackClaimableBalance':
          cov_1jzfu96gqr().b[2][22]++;
          {
            cov_1jzfu96gqr().s[140]++;
            result.type = 'clawbackClaimableBalance';
            cov_1jzfu96gqr().s[141]++;
            result.balanceId = attrs.toXDR('hex');
            cov_1jzfu96gqr().s[142]++;
            break;
          }
        case 'setTrustLineFlags':
          cov_1jzfu96gqr().b[2][23]++;
          {
            cov_1jzfu96gqr().s[143]++;
            result.type = 'setTrustLineFlags';
            cov_1jzfu96gqr().s[144]++;
            result.asset = _asset.Asset.fromOperation(attrs.asset());
            cov_1jzfu96gqr().s[145]++;
            result.trustor = accountIdtoAddress(attrs.trustor());

            // Convert from the integer-bitwised flag into a sensible object that
            // indicates true/false for each flag that's on/off.
            var clears = (cov_1jzfu96gqr().s[146]++, attrs.clearFlags());
            var sets = (cov_1jzfu96gqr().s[147]++, attrs.setFlags());
            var mapping = (cov_1jzfu96gqr().s[148]++, {
              authorized: _xdr["default"].TrustLineFlags.authorizedFlag(),
              authorizedToMaintainLiabilities: _xdr["default"].TrustLineFlags.authorizedToMaintainLiabilitiesFlag(),
              clawbackEnabled: _xdr["default"].TrustLineFlags.trustlineClawbackEnabledFlag()
            });
            cov_1jzfu96gqr().s[149]++;
            var getFlagValue = function getFlagValue(key) {
              cov_1jzfu96gqr().f[5]++;
              var bit = (cov_1jzfu96gqr().s[150]++, mapping[key].value);
              cov_1jzfu96gqr().s[151]++;
              if (sets & bit) {
                cov_1jzfu96gqr().b[11][0]++;
                cov_1jzfu96gqr().s[152]++;
                return true;
              } else {
                cov_1jzfu96gqr().b[11][1]++;
              }
              cov_1jzfu96gqr().s[153]++;
              if (clears & bit) {
                cov_1jzfu96gqr().b[12][0]++;
                cov_1jzfu96gqr().s[154]++;
                return false;
              } else {
                cov_1jzfu96gqr().b[12][1]++;
              }
              cov_1jzfu96gqr().s[155]++;
              return undefined;
            };
            cov_1jzfu96gqr().s[156]++;
            result.flags = {};
            cov_1jzfu96gqr().s[157]++;
            Object.keys(mapping).forEach(function (flagName) {
              cov_1jzfu96gqr().f[6]++;
              cov_1jzfu96gqr().s[158]++;
              result.flags[flagName] = getFlagValue(flagName);
            });
            cov_1jzfu96gqr().s[159]++;
            break;
          }
        case 'liquidityPoolDeposit':
          cov_1jzfu96gqr().b[2][24]++;
          {
            cov_1jzfu96gqr().s[160]++;
            result.type = 'liquidityPoolDeposit';
            cov_1jzfu96gqr().s[161]++;
            result.liquidityPoolId = attrs.liquidityPoolId().toString('hex');
            cov_1jzfu96gqr().s[162]++;
            result.maxAmountA = this._fromXDRAmount(attrs.maxAmountA());
            cov_1jzfu96gqr().s[163]++;
            result.maxAmountB = this._fromXDRAmount(attrs.maxAmountB());
            cov_1jzfu96gqr().s[164]++;
            result.minPrice = this._fromXDRPrice(attrs.minPrice());
            cov_1jzfu96gqr().s[165]++;
            result.maxPrice = this._fromXDRPrice(attrs.maxPrice());
            cov_1jzfu96gqr().s[166]++;
            break;
          }
        case 'liquidityPoolWithdraw':
          cov_1jzfu96gqr().b[2][25]++;
          {
            cov_1jzfu96gqr().s[167]++;
            result.type = 'liquidityPoolWithdraw';
            cov_1jzfu96gqr().s[168]++;
            result.liquidityPoolId = attrs.liquidityPoolId().toString('hex');
            cov_1jzfu96gqr().s[169]++;
            result.amount = this._fromXDRAmount(attrs.amount());
            cov_1jzfu96gqr().s[170]++;
            result.minAmountA = this._fromXDRAmount(attrs.minAmountA());
            cov_1jzfu96gqr().s[171]++;
            result.minAmountB = this._fromXDRAmount(attrs.minAmountB());
            cov_1jzfu96gqr().s[172]++;
            break;
          }
        default:
          cov_1jzfu96gqr().b[2][26]++;
          {
            cov_1jzfu96gqr().s[173]++;
            throw new Error("Unknown operation: ".concat(operationName));
          }
      }
      cov_1jzfu96gqr().s[174]++;
      return result;
    }

    /**
     * Validates that a given amount is possible for a Stellar asset.
     *
     * Specifically, this means that the amount is well, a valid number, but also
     * that it is within the int64 range and has no more than 7 decimal levels of
     * precision.
     *
     * Note that while smart contracts allow larger amounts, this is oriented
     * towards validating the standard Stellar operations.
     *
     * @param {string} value          the amount to validate
     * @param {[boolean]} allowZero   whether or not zero is valid (default: no)
     *
     * @returns {boolean}
     */
  }, {
    key: "isValidAmount",
    value: function isValidAmount(value) {
      var allowZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_1jzfu96gqr().b[13][0]++, false);
      cov_1jzfu96gqr().f[7]++;
      cov_1jzfu96gqr().s[175]++;
      if (!(0, _isString["default"])(value)) {
        cov_1jzfu96gqr().b[14][0]++;
        cov_1jzfu96gqr().s[176]++;
        return false;
      } else {
        cov_1jzfu96gqr().b[14][1]++;
      }
      var amount;
      cov_1jzfu96gqr().s[177]++;
      try {
        cov_1jzfu96gqr().s[178]++;
        amount = new _bignumber["default"](value);
      } catch (e) {
        cov_1jzfu96gqr().s[179]++;
        return false;
      }
      cov_1jzfu96gqr().s[180]++;
      if (
      // == 0
      (cov_1jzfu96gqr().b[16][0]++, !allowZero) && (cov_1jzfu96gqr().b[16][1]++, amount.isZero()) || (cov_1jzfu96gqr().b[16][2]++,
      // < 0
      amount.isNegative()) || (cov_1jzfu96gqr().b[16][3]++,
      // > Max value
      amount.times(ONE).gt(new _bignumber["default"](MAX_INT64).toString())) || (cov_1jzfu96gqr().b[16][4]++,
      // Decimal places (max 7)
      amount.decimalPlaces() > 7) || (cov_1jzfu96gqr().b[16][5]++,
      // NaN or Infinity
      amount.isNaN()) || (cov_1jzfu96gqr().b[16][6]++, !amount.isFinite())) {
        cov_1jzfu96gqr().b[15][0]++;
        cov_1jzfu96gqr().s[181]++;
        return false;
      } else {
        cov_1jzfu96gqr().b[15][1]++;
      }
      cov_1jzfu96gqr().s[182]++;
      return true;
    }
  }, {
    key: "constructAmountRequirementsError",
    value: function constructAmountRequirementsError(arg) {
      cov_1jzfu96gqr().f[8]++;
      cov_1jzfu96gqr().s[183]++;
      return "".concat(arg, " argument must be of type String, represent a positive number and have at most 7 digits after the decimal");
    }

    /**
     * Returns value converted to uint32 value or undefined.
     * If `value` is not `Number`, `String` or `Undefined` then throws an error.
     * Used in {@link Operation.setOptions}.
     * @private
     * @param {string} name Name of the property (used in error message only)
     * @param {*} value Value to check
     * @param {function(value, name)} isValidFunction Function to check other constraints (the argument will be a `Number`)
     * @returns {undefined|Number}
     */
  }, {
    key: "_checkUnsignedIntValue",
    value: function _checkUnsignedIntValue(name, value) {
      var isValidFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1jzfu96gqr().b[17][0]++, null);
      cov_1jzfu96gqr().f[9]++;
      cov_1jzfu96gqr().s[184]++;
      if ((0, _isUndefined["default"])(value)) {
        cov_1jzfu96gqr().b[18][0]++;
        cov_1jzfu96gqr().s[185]++;
        return undefined;
      } else {
        cov_1jzfu96gqr().b[18][1]++;
      }
      cov_1jzfu96gqr().s[186]++;
      if ((0, _isString["default"])(value)) {
        cov_1jzfu96gqr().b[19][0]++;
        cov_1jzfu96gqr().s[187]++;
        value = parseFloat(value);
      } else {
        cov_1jzfu96gqr().b[19][1]++;
      }
      cov_1jzfu96gqr().s[188]++;
      switch (true) {
        case (cov_1jzfu96gqr().b[21][0]++, !(0, _isNumber["default"])(value)) || (cov_1jzfu96gqr().b[21][1]++, !(0, _isFinite["default"])(value)) || (cov_1jzfu96gqr().b[21][2]++, value % 1 !== 0):
          cov_1jzfu96gqr().b[20][0]++;
          cov_1jzfu96gqr().s[189]++;
          throw new Error("".concat(name, " value is invalid"));
        case value < 0:
          cov_1jzfu96gqr().b[20][1]++;
          cov_1jzfu96gqr().s[190]++;
          throw new Error("".concat(name, " value must be unsigned"));
        case (cov_1jzfu96gqr().b[22][0]++, !isValidFunction) || (cov_1jzfu96gqr().b[22][1]++, isValidFunction) && (cov_1jzfu96gqr().b[22][2]++, isValidFunction(value, name)):
          cov_1jzfu96gqr().b[20][2]++;
          cov_1jzfu96gqr().s[191]++;
          return value;
        default:
          cov_1jzfu96gqr().b[20][3]++;
          cov_1jzfu96gqr().s[192]++;
          throw new Error("".concat(name, " value is invalid"));
      }
    }
    /**
     * @private
     * @param {string|BigNumber} value Value
     * @returns {Hyper} XDR amount
     */
  }, {
    key: "_toXDRAmount",
    value: function _toXDRAmount(value) {
      cov_1jzfu96gqr().f[10]++;
      var amount = (cov_1jzfu96gqr().s[193]++, new _bignumber["default"](value).times(ONE));
      cov_1jzfu96gqr().s[194]++;
      return _jsXdr.Hyper.fromString(amount.toString());
    }

    /**
     * @private
     * @param {string|BigNumber} value XDR amount
     * @returns {BigNumber} Number
     */
  }, {
    key: "_fromXDRAmount",
    value: function _fromXDRAmount(value) {
      cov_1jzfu96gqr().f[11]++;
      cov_1jzfu96gqr().s[195]++;
      return new _bignumber["default"](value).div(ONE).toFixed(7);
    }

    /**
     * @private
     * @param {object} price Price object
     * @param {function} price.n numerator function that returns a value
     * @param {function} price.d denominator function that returns a value
     * @returns {BigNumber} Big string
     */
  }, {
    key: "_fromXDRPrice",
    value: function _fromXDRPrice(price) {
      cov_1jzfu96gqr().f[12]++;
      var n = (cov_1jzfu96gqr().s[196]++, new _bignumber["default"](price.n()));
      cov_1jzfu96gqr().s[197]++;
      return n.div(new _bignumber["default"](price.d())).toString();
    }

    /**
     * @private
     * @param {object} price Price object
     * @param {function} price.n numerator function that returns a value
     * @param {function} price.d denominator function that returns a value
     * @returns {object} XDR price object
     */
  }, {
    key: "_toXDRPrice",
    value: function _toXDRPrice(price) {
      cov_1jzfu96gqr().f[13]++;
      var xdrObject;
      cov_1jzfu96gqr().s[198]++;
      if ((cov_1jzfu96gqr().b[24][0]++, price.n) && (cov_1jzfu96gqr().b[24][1]++, price.d)) {
        cov_1jzfu96gqr().b[23][0]++;
        cov_1jzfu96gqr().s[199]++;
        xdrObject = new _xdr["default"].Price(price);
      } else {
        cov_1jzfu96gqr().b[23][1]++;
        var approx = (cov_1jzfu96gqr().s[200]++, (0, _continued_fraction.best_r)(price));
        cov_1jzfu96gqr().s[201]++;
        xdrObject = new _xdr["default"].Price({
          n: parseInt(approx[0], 10),
          d: parseInt(approx[1], 10)
        });
      }
      cov_1jzfu96gqr().s[202]++;
      if ((cov_1jzfu96gqr().b[26][0]++, xdrObject.n() < 0) || (cov_1jzfu96gqr().b[26][1]++, xdrObject.d() < 0)) {
        cov_1jzfu96gqr().b[25][0]++;
        cov_1jzfu96gqr().s[203]++;
        throw new Error('price must be positive');
      } else {
        cov_1jzfu96gqr().b[25][1]++;
      }
      cov_1jzfu96gqr().s[204]++;
      return xdrObject;
    }
  }]);
  return Operation;
}();
exports.Operation = Operation;
function extractRevokeSponshipDetails(attrs, result) {
  cov_1jzfu96gqr().f[14]++;
  cov_1jzfu96gqr().s[205]++;
  switch (attrs["switch"]().name) {
    case 'revokeSponsorshipLedgerEntry':
      cov_1jzfu96gqr().b[27][0]++;
      {
        var ledgerKey = (cov_1jzfu96gqr().s[206]++, attrs.ledgerKey());
        cov_1jzfu96gqr().s[207]++;
        switch (ledgerKey["switch"]().name) {
          case _xdr["default"].LedgerEntryType.account().name:
            cov_1jzfu96gqr().b[28][0]++;
            {
              cov_1jzfu96gqr().s[208]++;
              result.type = 'revokeAccountSponsorship';
              cov_1jzfu96gqr().s[209]++;
              result.account = accountIdtoAddress(ledgerKey.account().accountId());
              cov_1jzfu96gqr().s[210]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.trustline().name:
            cov_1jzfu96gqr().b[28][1]++;
            {
              cov_1jzfu96gqr().s[211]++;
              result.type = 'revokeTrustlineSponsorship';
              cov_1jzfu96gqr().s[212]++;
              result.account = accountIdtoAddress(ledgerKey.trustLine().accountId());
              var xdrAsset = (cov_1jzfu96gqr().s[213]++, ledgerKey.trustLine().asset());
              cov_1jzfu96gqr().s[214]++;
              switch (xdrAsset["switch"]()) {
                case _xdr["default"].AssetType.assetTypePoolShare():
                  cov_1jzfu96gqr().b[29][0]++;
                  cov_1jzfu96gqr().s[215]++;
                  result.asset = _liquidity_pool_id.LiquidityPoolId.fromOperation(xdrAsset);
                  cov_1jzfu96gqr().s[216]++;
                  break;
                default:
                  cov_1jzfu96gqr().b[29][1]++;
                  cov_1jzfu96gqr().s[217]++;
                  result.asset = _asset.Asset.fromOperation(xdrAsset);
                  cov_1jzfu96gqr().s[218]++;
                  break;
              }
              cov_1jzfu96gqr().s[219]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.offer().name:
            cov_1jzfu96gqr().b[28][2]++;
            {
              cov_1jzfu96gqr().s[220]++;
              result.type = 'revokeOfferSponsorship';
              cov_1jzfu96gqr().s[221]++;
              result.seller = accountIdtoAddress(ledgerKey.offer().sellerId());
              cov_1jzfu96gqr().s[222]++;
              result.offerId = ledgerKey.offer().offerId().toString();
              cov_1jzfu96gqr().s[223]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.data().name:
            cov_1jzfu96gqr().b[28][3]++;
            {
              cov_1jzfu96gqr().s[224]++;
              result.type = 'revokeDataSponsorship';
              cov_1jzfu96gqr().s[225]++;
              result.account = accountIdtoAddress(ledgerKey.data().accountId());
              cov_1jzfu96gqr().s[226]++;
              result.name = ledgerKey.data().dataName().toString('ascii');
              cov_1jzfu96gqr().s[227]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.claimableBalance().name:
            cov_1jzfu96gqr().b[28][4]++;
            {
              cov_1jzfu96gqr().s[228]++;
              result.type = 'revokeClaimableBalanceSponsorship';
              cov_1jzfu96gqr().s[229]++;
              result.balanceId = ledgerKey.claimableBalance().balanceId().toXDR('hex');
              cov_1jzfu96gqr().s[230]++;
              break;
            }
          case _xdr["default"].LedgerEntryType.liquidityPool().name:
            cov_1jzfu96gqr().b[28][5]++;
            {
              cov_1jzfu96gqr().s[231]++;
              result.type = 'revokeLiquidityPoolSponsorship';
              cov_1jzfu96gqr().s[232]++;
              result.liquidityPoolId = ledgerKey.liquidityPool().liquidityPoolId().toString('hex');
              cov_1jzfu96gqr().s[233]++;
              break;
            }
          default:
            cov_1jzfu96gqr().b[28][6]++;
            {
              cov_1jzfu96gqr().s[234]++;
              throw new Error("Unknown ledgerKey: ".concat(attrs["switch"]().name));
            }
        }
        cov_1jzfu96gqr().s[235]++;
        break;
      }
    case 'revokeSponsorshipSigner':
      cov_1jzfu96gqr().b[27][1]++;
      {
        cov_1jzfu96gqr().s[236]++;
        result.type = 'revokeSignerSponsorship';
        cov_1jzfu96gqr().s[237]++;
        result.account = accountIdtoAddress(attrs.signer().accountId());
        cov_1jzfu96gqr().s[238]++;
        result.signer = convertXDRSignerKeyToObject(attrs.signer().signerKey());
        cov_1jzfu96gqr().s[239]++;
        break;
      }
    default:
      cov_1jzfu96gqr().b[27][2]++;
      {
        cov_1jzfu96gqr().s[240]++;
        throw new Error("Unknown revokeSponsorship: ".concat(attrs["switch"]().name));
      }
  }
}
function convertXDRSignerKeyToObject(signerKey) {
  cov_1jzfu96gqr().f[15]++;
  var attrs = (cov_1jzfu96gqr().s[241]++, {});
  cov_1jzfu96gqr().s[242]++;
  switch (signerKey["switch"]().name) {
    case _xdr["default"].SignerKeyType.signerKeyTypeEd25519().name:
      cov_1jzfu96gqr().b[30][0]++;
      {
        cov_1jzfu96gqr().s[243]++;
        attrs.ed25519PublicKey = _strkey.StrKey.encodeEd25519PublicKey(signerKey.ed25519());
        cov_1jzfu96gqr().s[244]++;
        break;
      }
    case _xdr["default"].SignerKeyType.signerKeyTypePreAuthTx().name:
      cov_1jzfu96gqr().b[30][1]++;
      {
        cov_1jzfu96gqr().s[245]++;
        attrs.preAuthTx = signerKey.preAuthTx().toString('hex');
        cov_1jzfu96gqr().s[246]++;
        break;
      }
    case _xdr["default"].SignerKeyType.signerKeyTypeHashX().name:
      cov_1jzfu96gqr().b[30][2]++;
      {
        cov_1jzfu96gqr().s[247]++;
        attrs.sha256Hash = signerKey.hashX().toString('hex');
        cov_1jzfu96gqr().s[248]++;
        break;
      }
    default:
      cov_1jzfu96gqr().b[30][3]++;
      {
        cov_1jzfu96gqr().s[249]++;
        throw new Error("Unknown signerKey: ".concat(signerKey["switch"]().name));
      }
  }
  cov_1jzfu96gqr().s[250]++;
  return attrs;
}
function accountIdtoAddress(accountId) {
  cov_1jzfu96gqr().f[16]++;
  cov_1jzfu96gqr().s[251]++;
  return _strkey.StrKey.encodeEd25519PublicKey(accountId.ed25519());
}

// Attach all imported operations as static methods on the Operation class
cov_1jzfu96gqr().s[252]++;
Operation.accountMerge = ops.accountMerge;
cov_1jzfu96gqr().s[253]++;
Operation.allowTrust = ops.allowTrust;
cov_1jzfu96gqr().s[254]++;
Operation.bumpSequence = ops.bumpSequence;
cov_1jzfu96gqr().s[255]++;
Operation.changeTrust = ops.changeTrust;
cov_1jzfu96gqr().s[256]++;
Operation.createAccount = ops.createAccount;
cov_1jzfu96gqr().s[257]++;
Operation.createClaimableBalance = ops.createClaimableBalance;
cov_1jzfu96gqr().s[258]++;
Operation.claimClaimableBalance = ops.claimClaimableBalance;
cov_1jzfu96gqr().s[259]++;
Operation.clawbackClaimableBalance = ops.clawbackClaimableBalance;
cov_1jzfu96gqr().s[260]++;
Operation.createPassiveSellOffer = ops.createPassiveSellOffer;
cov_1jzfu96gqr().s[261]++;
Operation.inflation = ops.inflation;
cov_1jzfu96gqr().s[262]++;
Operation.manageData = ops.manageData;
cov_1jzfu96gqr().s[263]++;
Operation.manageSellOffer = ops.manageSellOffer;
cov_1jzfu96gqr().s[264]++;
Operation.manageBuyOffer = ops.manageBuyOffer;
cov_1jzfu96gqr().s[265]++;
Operation.pathPaymentStrictReceive = ops.pathPaymentStrictReceive;
cov_1jzfu96gqr().s[266]++;
Operation.pathPaymentStrictSend = ops.pathPaymentStrictSend;
cov_1jzfu96gqr().s[267]++;
Operation.payment = ops.payment;
cov_1jzfu96gqr().s[268]++;
Operation.setOptions = ops.setOptions;
cov_1jzfu96gqr().s[269]++;
Operation.beginSponsoringFutureReserves = ops.beginSponsoringFutureReserves;
cov_1jzfu96gqr().s[270]++;
Operation.endSponsoringFutureReserves = ops.endSponsoringFutureReserves;
cov_1jzfu96gqr().s[271]++;
Operation.revokeAccountSponsorship = ops.revokeAccountSponsorship;
cov_1jzfu96gqr().s[272]++;
Operation.revokeTrustlineSponsorship = ops.revokeTrustlineSponsorship;
cov_1jzfu96gqr().s[273]++;
Operation.revokeOfferSponsorship = ops.revokeOfferSponsorship;
cov_1jzfu96gqr().s[274]++;
Operation.revokeDataSponsorship = ops.revokeDataSponsorship;
cov_1jzfu96gqr().s[275]++;
Operation.revokeClaimableBalanceSponsorship = ops.revokeClaimableBalanceSponsorship;
cov_1jzfu96gqr().s[276]++;
Operation.revokeLiquidityPoolSponsorship = ops.revokeLiquidityPoolSponsorship;
cov_1jzfu96gqr().s[277]++;
Operation.revokeSignerSponsorship = ops.revokeSignerSponsorship;
cov_1jzfu96gqr().s[278]++;
Operation.clawback = ops.clawback;
cov_1jzfu96gqr().s[279]++;
Operation.setTrustLineFlags = ops.setTrustLineFlags;
cov_1jzfu96gqr().s[280]++;
Operation.liquidityPoolDeposit = ops.liquidityPoolDeposit;
cov_1jzfu96gqr().s[281]++;
Operation.liquidityPoolWithdraw = ops.liquidityPoolWithdraw;