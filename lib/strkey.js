"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StrKey = void 0;
exports.decodeCheck = decodeCheck;
exports.encodeCheck = encodeCheck;
var _base = _interopRequireDefault(require("base32.js"));
var _crc = _interopRequireDefault(require("crc"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _isNull = _interopRequireDefault(require("lodash/isNull"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _checksum = require("./util/checksum");
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2gr7gos3mq() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\strkey.js";
  var hash = "2fd8a4320e7660eb6afe61de3ae84f68d60b81e1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\strkey.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 21
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "1": {
        start: {
          line: 20,
          column: 20
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "2": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 49
        }
      },
      "3": {
        start: {
          line: 55,
          column: 4
        },
        end: {
          line: 55,
          column: 49
        }
      },
      "4": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 66
        }
      },
      "5": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 50
        }
      },
      "6": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 50
        }
      },
      "7": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 53
        }
      },
      "8": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 46
        }
      },
      "9": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 50
        }
      },
      "10": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 53
        }
      },
      "11": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 51
        }
      },
      "12": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 128,
          column: 42
        }
      },
      "13": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 45
        }
      },
      "14": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 43
        }
      },
      "15": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 155,
          column: 46
        }
      },
      "16": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 164,
          column: 46
        }
      },
      "17": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 49
        }
      },
      "18": {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 182,
          column: 45
        }
      },
      "19": {
        start: {
          line: 186,
          column: 4
        },
        end: {
          line: 186,
          column: 35
        }
      },
      "20": {
        start: {
          line: 204,
          column: 2
        },
        end: {
          line: 204,
          column: 44
        }
      },
      "21": {
        start: {
          line: 205,
          column: 2
        },
        end: {
          line: 207,
          column: 3
        }
      },
      "22": {
        start: {
          line: 206,
          column: 4
        },
        end: {
          line: 206,
          column: 17
        }
      },
      "23": {
        start: {
          line: 210,
          column: 2
        },
        end: {
          line: 234,
          column: 3
        }
      },
      "24": {
        start: {
          line: 215,
          column: 6
        },
        end: {
          line: 217,
          column: 7
        }
      },
      "25": {
        start: {
          line: 216,
          column: 8
        },
        end: {
          line: 216,
          column: 21
        }
      },
      "26": {
        start: {
          line: 218,
          column: 6
        },
        end: {
          line: 218,
          column: 12
        }
      },
      "27": {
        start: {
          line: 221,
          column: 6
        },
        end: {
          line: 223,
          column: 7
        }
      },
      "28": {
        start: {
          line: 222,
          column: 8
        },
        end: {
          line: 222,
          column: 21
        }
      },
      "29": {
        start: {
          line: 224,
          column: 6
        },
        end: {
          line: 224,
          column: 12
        }
      },
      "30": {
        start: {
          line: 227,
          column: 6
        },
        end: {
          line: 229,
          column: 7
        }
      },
      "31": {
        start: {
          line: 228,
          column: 8
        },
        end: {
          line: 228,
          column: 21
        }
      },
      "32": {
        start: {
          line: 230,
          column: 6
        },
        end: {
          line: 230,
          column: 12
        }
      },
      "33": {
        start: {
          line: 233,
          column: 6
        },
        end: {
          line: 233,
          column: 19
        }
      },
      "34": {
        start: {
          line: 236,
          column: 16
        },
        end: {
          line: 236,
          column: 18
        }
      },
      "35": {
        start: {
          line: 237,
          column: 2
        },
        end: {
          line: 241,
          column: 3
        }
      },
      "36": {
        start: {
          line: 238,
          column: 4
        },
        end: {
          line: 238,
          column: 52
        }
      },
      "37": {
        start: {
          line: 240,
          column: 4
        },
        end: {
          line: 240,
          column: 17
        }
      },
      "38": {
        start: {
          line: 244,
          column: 2
        },
        end: {
          line: 263,
          column: 3
        }
      },
      "39": {
        start: {
          line: 249,
          column: 6
        },
        end: {
          line: 249,
          column: 35
        }
      },
      "40": {
        start: {
          line: 252,
          column: 6
        },
        end: {
          line: 252,
          column: 35
        }
      },
      "41": {
        start: {
          line: 255,
          column: 6
        },
        end: {
          line: 259,
          column: 8
        }
      },
      "42": {
        start: {
          line: 262,
          column: 6
        },
        end: {
          line: 262,
          column: 19
        }
      },
      "43": {
        start: {
          line: 267,
          column: 2
        },
        end: {
          line: 269,
          column: 3
        }
      },
      "44": {
        start: {
          line: 268,
          column: 4
        },
        end: {
          line: 268,
          column: 67
        }
      },
      "45": {
        start: {
          line: 271,
          column: 18
        },
        end: {
          line: 271,
          column: 40
        }
      },
      "46": {
        start: {
          line: 272,
          column: 22
        },
        end: {
          line: 272,
          column: 32
        }
      },
      "47": {
        start: {
          line: 273,
          column: 18
        },
        end: {
          line: 273,
          column: 38
        }
      },
      "48": {
        start: {
          line: 274,
          column: 15
        },
        end: {
          line: 274,
          column: 31
        }
      },
      "49": {
        start: {
          line: 275,
          column: 19
        },
        end: {
          line: 275,
          column: 36
        }
      },
      "50": {
        start: {
          line: 277,
          column: 2
        },
        end: {
          line: 279,
          column: 3
        }
      },
      "51": {
        start: {
          line: 278,
          column: 4
        },
        end: {
          line: 278,
          column: 46
        }
      },
      "52": {
        start: {
          line: 281,
          column: 26
        },
        end: {
          line: 281,
          column: 55
        }
      },
      "53": {
        start: {
          line: 283,
          column: 2
        },
        end: {
          line: 288,
          column: 3
        }
      },
      "54": {
        start: {
          line: 284,
          column: 4
        },
        end: {
          line: 287,
          column: 6
        }
      },
      "55": {
        start: {
          line: 290,
          column: 2
        },
        end: {
          line: 294,
          column: 3
        }
      },
      "56": {
        start: {
          line: 291,
          column: 4
        },
        end: {
          line: 293,
          column: 6
        }
      },
      "57": {
        start: {
          line: 296,
          column: 27
        },
        end: {
          line: 296,
          column: 53
        }
      },
      "58": {
        start: {
          line: 298,
          column: 2
        },
        end: {
          line: 300,
          column: 3
        }
      },
      "59": {
        start: {
          line: 299,
          column: 4
        },
        end: {
          line: 299,
          column: 40
        }
      },
      "60": {
        start: {
          line: 302,
          column: 2
        },
        end: {
          line: 302,
          column: 34
        }
      },
      "61": {
        start: {
          line: 306,
          column: 2
        },
        end: {
          line: 308,
          column: 3
        }
      },
      "62": {
        start: {
          line: 307,
          column: 4
        },
        end: {
          line: 307,
          column: 47
        }
      },
      "63": {
        start: {
          line: 310,
          column: 22
        },
        end: {
          line: 310,
          column: 51
        }
      },
      "64": {
        start: {
          line: 312,
          column: 2
        },
        end: {
          line: 317,
          column: 3
        }
      },
      "65": {
        start: {
          line: 313,
          column: 4
        },
        end: {
          line: 316,
          column: 6
        }
      },
      "66": {
        start: {
          line: 318,
          column: 2
        },
        end: {
          line: 318,
          column: 34
        }
      },
      "67": {
        start: {
          line: 320,
          column: 24
        },
        end: {
          line: 320,
          column: 57
        }
      },
      "68": {
        start: {
          line: 321,
          column: 18
        },
        end: {
          line: 321,
          column: 61
        }
      },
      "69": {
        start: {
          line: 322,
          column: 19
        },
        end: {
          line: 322,
          column: 45
        }
      },
      "70": {
        start: {
          line: 323,
          column: 20
        },
        end: {
          line: 323,
          column: 61
        }
      },
      "71": {
        start: {
          line: 325,
          column: 2
        },
        end: {
          line: 325,
          column: 34
        }
      },
      "72": {
        start: {
          line: 330,
          column: 19
        },
        end: {
          line: 330,
          column: 41
        }
      },
      "73": {
        start: {
          line: 331,
          column: 2
        },
        end: {
          line: 331,
          column: 54
        }
      },
      "74": {
        start: {
          line: 332,
          column: 2
        },
        end: {
          line: 332,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 41,
            column: 3
          }
        },
        loc: {
          start: {
            line: 41,
            column: 38
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 41
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 54,
            column: 2
          },
          end: {
            line: 54,
            column: 3
          }
        },
        loc: {
          start: {
            line: 54,
            column: 38
          },
          end: {
            line: 56,
            column: 3
          }
        },
        line: 54
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 63,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        loc: {
          start: {
            line: 63,
            column: 44
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 63
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 73,
            column: 2
          },
          end: {
            line: 73,
            column: 3
          }
        },
        loc: {
          start: {
            line: 73,
            column: 39
          },
          end: {
            line: 75,
            column: 3
          }
        },
        line: 73
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 82,
            column: 2
          },
          end: {
            line: 82,
            column: 3
          }
        },
        loc: {
          start: {
            line: 82,
            column: 42
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 82
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 91,
            column: 3
          }
        },
        loc: {
          start: {
            line: 91,
            column: 40
          },
          end: {
            line: 93,
            column: 3
          }
        },
        line: 91
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 100,
            column: 2
          },
          end: {
            line: 100,
            column: 3
          }
        },
        loc: {
          start: {
            line: 100,
            column: 39
          },
          end: {
            line: 102,
            column: 3
          }
        },
        line: 100
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 109,
            column: 2
          },
          end: {
            line: 109,
            column: 3
          }
        },
        loc: {
          start: {
            line: 109,
            column: 42
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 109
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 118,
            column: 2
          },
          end: {
            line: 118,
            column: 3
          }
        },
        loc: {
          start: {
            line: 118,
            column: 45
          },
          end: {
            line: 120,
            column: 3
          }
        },
        line: 118
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 127,
            column: 2
          },
          end: {
            line: 127,
            column: 3
          }
        },
        loc: {
          start: {
            line: 127,
            column: 31
          },
          end: {
            line: 129,
            column: 3
          }
        },
        line: 127
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 136,
            column: 2
          },
          end: {
            line: 136,
            column: 3
          }
        },
        loc: {
          start: {
            line: 136,
            column: 34
          },
          end: {
            line: 138,
            column: 3
          }
        },
        line: 136
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 145,
            column: 2
          },
          end: {
            line: 145,
            column: 3
          }
        },
        loc: {
          start: {
            line: 145,
            column: 32
          },
          end: {
            line: 147,
            column: 3
          }
        },
        line: 145
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 154,
            column: 2
          },
          end: {
            line: 154,
            column: 3
          }
        },
        loc: {
          start: {
            line: 154,
            column: 35
          },
          end: {
            line: 156,
            column: 3
          }
        },
        line: 154
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 163,
            column: 2
          },
          end: {
            line: 163,
            column: 3
          }
        },
        loc: {
          start: {
            line: 163,
            column: 35
          },
          end: {
            line: 165,
            column: 3
          }
        },
        line: 163
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 172,
            column: 2
          },
          end: {
            line: 172,
            column: 3
          }
        },
        loc: {
          start: {
            line: 172,
            column: 38
          },
          end: {
            line: 174,
            column: 3
          }
        },
        line: 172
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 181,
            column: 2
          },
          end: {
            line: 181,
            column: 3
          }
        },
        loc: {
          start: {
            line: 181,
            column: 39
          },
          end: {
            line: 183,
            column: 3
          }
        },
        line: 181
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 185,
            column: 2
          },
          end: {
            line: 185,
            column: 3
          }
        },
        loc: {
          start: {
            line: 185,
            column: 42
          },
          end: {
            line: 187,
            column: 3
          }
        },
        line: 185
      },
      "17": {
        name: "isValid",
        decl: {
          start: {
            line: 203,
            column: 9
          },
          end: {
            line: 203,
            column: 16
          }
        },
        loc: {
          start: {
            line: 203,
            column: 43
          },
          end: {
            line: 264,
            column: 1
          }
        },
        line: 203
      },
      "18": {
        name: "decodeCheck",
        decl: {
          start: {
            line: 266,
            column: 16
          },
          end: {
            line: 266,
            column: 27
          }
        },
        loc: {
          start: {
            line: 266,
            column: 54
          },
          end: {
            line: 303,
            column: 1
          }
        },
        line: 266
      },
      "19": {
        name: "encodeCheck",
        decl: {
          start: {
            line: 305,
            column: 16
          },
          end: {
            line: 305,
            column: 27
          }
        },
        loc: {
          start: {
            line: 305,
            column: 51
          },
          end: {
            line: 326,
            column: 1
          }
        },
        line: 305
      },
      "20": {
        name: "calculateChecksum",
        decl: {
          start: {
            line: 329,
            column: 9
          },
          end: {
            line: 329,
            column: 26
          }
        },
        loc: {
          start: {
            line: 329,
            column: 36
          },
          end: {
            line: 333,
            column: 1
          }
        },
        line: 329
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 205,
            column: 2
          },
          end: {
            line: 207,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 205,
            column: 2
          },
          end: {
            line: 207,
            column: 3
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
        line: 205
      },
      "1": {
        loc: {
          start: {
            line: 210,
            column: 2
          },
          end: {
            line: 234,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 211,
            column: 4
          },
          end: {
            line: 211,
            column: 28
          }
        }, {
          start: {
            line: 212,
            column: 4
          },
          end: {
            line: 212,
            column: 29
          }
        }, {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 21
          }
        }, {
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 218,
            column: 12
          }
        }, {
          start: {
            line: 220,
            column: 4
          },
          end: {
            line: 224,
            column: 12
          }
        }, {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 230,
            column: 12
          }
        }, {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 233,
            column: 19
          }
        }],
        line: 210
      },
      "2": {
        loc: {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 217,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 217,
            column: 7
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
        line: 215
      },
      "3": {
        loc: {
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 223,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 221,
            column: 6
          },
          end: {
            line: 223,
            column: 7
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
      "4": {
        loc: {
          start: {
            line: 227,
            column: 6
          },
          end: {
            line: 229,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 227,
            column: 6
          },
          end: {
            line: 229,
            column: 7
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
        line: 227
      },
      "5": {
        loc: {
          start: {
            line: 227,
            column: 10
          },
          end: {
            line: 227,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 227,
            column: 10
          },
          end: {
            line: 227,
            column: 29
          }
        }, {
          start: {
            line: 227,
            column: 33
          },
          end: {
            line: 227,
            column: 53
          }
        }],
        line: 227
      },
      "6": {
        loc: {
          start: {
            line: 244,
            column: 2
          },
          end: {
            line: 263,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 245,
            column: 28
          }
        }, {
          start: {
            line: 246,
            column: 4
          },
          end: {
            line: 246,
            column: 29
          }
        }, {
          start: {
            line: 247,
            column: 4
          },
          end: {
            line: 247,
            column: 21
          }
        }, {
          start: {
            line: 248,
            column: 4
          },
          end: {
            line: 249,
            column: 35
          }
        }, {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 252,
            column: 35
          }
        }, {
          start: {
            line: 254,
            column: 4
          },
          end: {
            line: 259,
            column: 8
          }
        }, {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 262,
            column: 19
          }
        }],
        line: 244
      },
      "7": {
        loc: {
          start: {
            line: 258,
            column: 8
          },
          end: {
            line: 258,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 258,
            column: 8
          },
          end: {
            line: 258,
            column: 36
          }
        }, {
          start: {
            line: 258,
            column: 40
          },
          end: {
            line: 258,
            column: 69
          }
        }],
        line: 258
      },
      "8": {
        loc: {
          start: {
            line: 267,
            column: 2
          },
          end: {
            line: 269,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 267,
            column: 2
          },
          end: {
            line: 269,
            column: 3
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
        line: 267
      },
      "9": {
        loc: {
          start: {
            line: 277,
            column: 2
          },
          end: {
            line: 279,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 277,
            column: 2
          },
          end: {
            line: 279,
            column: 3
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
        line: 277
      },
      "10": {
        loc: {
          start: {
            line: 283,
            column: 2
          },
          end: {
            line: 288,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 283,
            column: 2
          },
          end: {
            line: 288,
            column: 3
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
        line: 283
      },
      "11": {
        loc: {
          start: {
            line: 290,
            column: 2
          },
          end: {
            line: 294,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 290,
            column: 2
          },
          end: {
            line: 294,
            column: 3
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
        line: 290
      },
      "12": {
        loc: {
          start: {
            line: 298,
            column: 2
          },
          end: {
            line: 300,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 298,
            column: 2
          },
          end: {
            line: 300,
            column: 3
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
        line: 298
      },
      "13": {
        loc: {
          start: {
            line: 306,
            column: 2
          },
          end: {
            line: 308,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 306,
            column: 2
          },
          end: {
            line: 308,
            column: 3
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
        line: 306
      },
      "14": {
        loc: {
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 306,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 306,
            column: 6
          },
          end: {
            line: 306,
            column: 18
          }
        }, {
          start: {
            line: 306,
            column: 22
          },
          end: {
            line: 306,
            column: 39
          }
        }],
        line: 306
      },
      "15": {
        loc: {
          start: {
            line: 312,
            column: 2
          },
          end: {
            line: 317,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 312,
            column: 2
          },
          end: {
            line: 317,
            column: 3
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
        line: 312
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
      "74": 0
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
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0, 0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0, 0, 0, 0, 0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2fd8a4320e7660eb6afe61de3ae84f68d60b81e1"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gr7gos3mq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2gr7gos3mq();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /* eslint no-bitwise: ["error", {"allow": ["<<"]}] */
var versionBytes = (cov_2gr7gos3mq().s[0]++, {
  ed25519PublicKey: 6 << 3,
  // G (when encoded in base32)
  ed25519SecretSeed: 18 << 3,
  // S
  med25519PublicKey: 12 << 3,
  // M
  preAuthTx: 19 << 3,
  // T
  sha256Hash: 23 << 3,
  // X
  signedPayload: 15 << 3 // P
});

var strkeyTypes = (cov_2gr7gos3mq().s[1]++, {
  G: 'ed25519PublicKey',
  S: 'ed25519SecretSeed',
  M: 'med25519PublicKey',
  T: 'preAuthTx',
  X: 'sha256Hash',
  P: 'signedPayload'
});

/**
 * StrKey is a helper class that allows encoding and decoding Stellar keys
 * to/from strings, i.e. between their binary (Buffer, xdr.PublicKey, etc.) and
 * string (i.e. "GABCD...", etc.) representations.
 */
var StrKey = /*#__PURE__*/function () {
  function StrKey() {
    _classCallCheck(this, StrKey);
  }
  _createClass(StrKey, null, [{
    key: "encodeEd25519PublicKey",
    value:
    /**
     * Encodes `data` to strkey ed25519 public key.
     *
     * @param   {Buffer} data   raw data to encode
     * @returns {string}        "G..." representation of the key
     */
    function encodeEd25519PublicKey(data) {
      cov_2gr7gos3mq().f[0]++;
      cov_2gr7gos3mq().s[2]++;
      return encodeCheck('ed25519PublicKey', data);
    }

    /**
     * Decodes strkey ed25519 public key to raw data.
     *
     * If the parameter is a muxed account key ("M..."), this will only encode it
     * as a basic Ed25519 key (as if in "G..." format).
     *
     * @param   {string} data   "G..." (or "M...") key representation to decode
     * @returns {Buffer}        raw key
     */
  }, {
    key: "decodeEd25519PublicKey",
    value: function decodeEd25519PublicKey(data) {
      cov_2gr7gos3mq().f[1]++;
      cov_2gr7gos3mq().s[3]++;
      return decodeCheck('ed25519PublicKey', data);
    }

    /**
     * Returns true if the given Stellar public key is a valid ed25519 public key.
     * @param {string} publicKey public key to check
     * @returns {boolean}
     */
  }, {
    key: "isValidEd25519PublicKey",
    value: function isValidEd25519PublicKey(publicKey) {
      cov_2gr7gos3mq().f[2]++;
      cov_2gr7gos3mq().s[4]++;
      console.log(publicKey, 'publicKey in isvalidEd25519PublicKey');
      cov_2gr7gos3mq().s[5]++;
      return isValid('ed25519PublicKey', publicKey);
    }

    /**
     * Encodes data to strkey ed25519 seed.
     * @param {Buffer} data data to encode
     * @returns {string}
     */
  }, {
    key: "encodeEd25519SecretSeed",
    value: function encodeEd25519SecretSeed(data) {
      cov_2gr7gos3mq().f[3]++;
      cov_2gr7gos3mq().s[6]++;
      return encodeCheck('ed25519SecretSeed', data);
    }

    /**
     * Decodes strkey ed25519 seed to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeEd25519SecretSeed",
    value: function decodeEd25519SecretSeed(address) {
      cov_2gr7gos3mq().f[4]++;
      cov_2gr7gos3mq().s[7]++;
      return decodeCheck('ed25519SecretSeed', address);
    }

    /**
     * Returns true if the given Stellar secret key is a valid ed25519 secret seed.
     * @param {string} seed seed to check
     * @returns {boolean}
     */
  }, {
    key: "isValidEd25519SecretSeed",
    value: function isValidEd25519SecretSeed(seed) {
      cov_2gr7gos3mq().f[5]++;
      cov_2gr7gos3mq().s[8]++;
      return isValid('ed25519SecretSeed', seed);
    }

    /**
     * Encodes data to strkey med25519 public key.
     * @param {Buffer} data data to encode
     * @returns {string}
     */
  }, {
    key: "encodeMed25519PublicKey",
    value: function encodeMed25519PublicKey(data) {
      cov_2gr7gos3mq().f[6]++;
      cov_2gr7gos3mq().s[9]++;
      return encodeCheck('med25519PublicKey', data);
    }

    /**
     * Decodes strkey med25519 public key to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeMed25519PublicKey",
    value: function decodeMed25519PublicKey(address) {
      cov_2gr7gos3mq().f[7]++;
      cov_2gr7gos3mq().s[10]++;
      return decodeCheck('med25519PublicKey', address);
    }

    /**
     * Returns true if the given Stellar public key is a valid med25519 public key.
     * @param {string} publicKey public key to check
     * @returns {boolean}
     */
  }, {
    key: "isValidMed25519PublicKey",
    value: function isValidMed25519PublicKey(publicKey) {
      cov_2gr7gos3mq().f[8]++;
      cov_2gr7gos3mq().s[11]++;
      return isValid('med25519PublicKey', publicKey);
    }

    /**
     * Encodes data to strkey preAuthTx.
     * @param {Buffer} data data to encode
     * @returns {string}
     */
  }, {
    key: "encodePreAuthTx",
    value: function encodePreAuthTx(data) {
      cov_2gr7gos3mq().f[9]++;
      cov_2gr7gos3mq().s[12]++;
      return encodeCheck('preAuthTx', data);
    }

    /**
     * Decodes strkey PreAuthTx to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodePreAuthTx",
    value: function decodePreAuthTx(address) {
      cov_2gr7gos3mq().f[10]++;
      cov_2gr7gos3mq().s[13]++;
      return decodeCheck('preAuthTx', address);
    }

    /**
     * Encodes data to strkey sha256 hash.
     * @param {Buffer} data data to encode
     * @returns {string}
     */
  }, {
    key: "encodeSha256Hash",
    value: function encodeSha256Hash(data) {
      cov_2gr7gos3mq().f[11]++;
      cov_2gr7gos3mq().s[14]++;
      return encodeCheck('sha256Hash', data);
    }

    /**
     * Decodes strkey sha256 hash to raw data.
     * @param {string} address data to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeSha256Hash",
    value: function decodeSha256Hash(address) {
      cov_2gr7gos3mq().f[12]++;
      cov_2gr7gos3mq().s[15]++;
      return decodeCheck('sha256Hash', address);
    }

    /**
     * Encodes raw data to strkey signed payload (P...).
     * @param   {Buffer} data  data to encode
     * @returns {string}
     */
  }, {
    key: "encodeSignedPayload",
    value: function encodeSignedPayload(data) {
      cov_2gr7gos3mq().f[13]++;
      cov_2gr7gos3mq().s[16]++;
      return encodeCheck('signedPayload', data);
    }

    /**
     * Decodes strkey signed payload (P...) to raw data.
     * @param   {string} address  address to decode
     * @returns {Buffer}
     */
  }, {
    key: "decodeSignedPayload",
    value: function decodeSignedPayload(address) {
      cov_2gr7gos3mq().f[14]++;
      cov_2gr7gos3mq().s[17]++;
      return decodeCheck('signedPayload', address);
    }

    /**
     * Checks validity of alleged signed payload (P...) strkey address.
     * @param   {string} address  signer key to check
     * @returns {boolean}
     */
  }, {
    key: "isValidSignedPayload",
    value: function isValidSignedPayload(address) {
      cov_2gr7gos3mq().f[15]++;
      cov_2gr7gos3mq().s[18]++;
      return isValid('signedPayload', address);
    }
  }, {
    key: "getVersionByteForPrefix",
    value: function getVersionByteForPrefix(address) {
      cov_2gr7gos3mq().f[16]++;
      cov_2gr7gos3mq().s[19]++;
      return strkeyTypes[address[0]];
    }
  }]);
  return StrKey;
}();
/**
 * Sanity-checks whether or not a strkey *appears* valid.
 *
 * @param  {string}  versionByteName the type of strkey to expect in `encoded`
 * @param  {string}  encoded         the strkey to validate
 *
 * @return {Boolean} whether or not the `encoded` strkey appears valid for the
 *     `versionByteName` strkey type (see `versionBytes`, above).
 *
 * @note This isn't a *definitive* check of validity, but rather a best-effort
 *     check based on (a) input length, (b) whether or not it can be decoded,
 *     and (c) output length.
 */
exports.StrKey = StrKey;
function isValid(versionByteName, encoded) {
  cov_2gr7gos3mq().f[17]++;
  cov_2gr7gos3mq().s[20]++;
  console.log(encoded, 'encoded in isValid');
  cov_2gr7gos3mq().s[21]++;
  if (!(0, _isString["default"])(encoded)) {
    cov_2gr7gos3mq().b[0][0]++;
    cov_2gr7gos3mq().s[22]++;
    return false;
  } else {
    cov_2gr7gos3mq().b[0][1]++;
  }

  // basic length checks on the strkey lengths
  cov_2gr7gos3mq().s[23]++;
  switch (versionByteName) {
    case 'ed25519PublicKey':
      cov_2gr7gos3mq().b[1][0]++;
    // falls through
    case 'ed25519SecretSeed':
      cov_2gr7gos3mq().b[1][1]++;
    // falls through
    case 'preAuthTx':
      cov_2gr7gos3mq().b[1][2]++;
    // falls through
    case 'sha256Hash':
      cov_2gr7gos3mq().b[1][3]++;
      cov_2gr7gos3mq().s[24]++;
      if (encoded.length !== 56) {
        cov_2gr7gos3mq().b[2][0]++;
        cov_2gr7gos3mq().s[25]++;
        return false;
      } else {
        cov_2gr7gos3mq().b[2][1]++;
      }
      cov_2gr7gos3mq().s[26]++;
      break;
    case 'med25519PublicKey':
      cov_2gr7gos3mq().b[1][4]++;
      cov_2gr7gos3mq().s[27]++;
      if (encoded.length !== 69) {
        cov_2gr7gos3mq().b[3][0]++;
        cov_2gr7gos3mq().s[28]++;
        return false;
      } else {
        cov_2gr7gos3mq().b[3][1]++;
      }
      cov_2gr7gos3mq().s[29]++;
      break;
    case 'signedPayload':
      cov_2gr7gos3mq().b[1][5]++;
      cov_2gr7gos3mq().s[30]++;
      if ((cov_2gr7gos3mq().b[5][0]++, encoded.length < 56) || (cov_2gr7gos3mq().b[5][1]++, encoded.length > 165)) {
        cov_2gr7gos3mq().b[4][0]++;
        cov_2gr7gos3mq().s[31]++;
        return false;
      } else {
        cov_2gr7gos3mq().b[4][1]++;
      }
      cov_2gr7gos3mq().s[32]++;
      break;
    default:
      cov_2gr7gos3mq().b[1][6]++;
      cov_2gr7gos3mq().s[33]++;
      return false;
  }
  var decoded = (cov_2gr7gos3mq().s[34]++, '');
  cov_2gr7gos3mq().s[35]++;
  try {
    cov_2gr7gos3mq().s[36]++;
    decoded = decodeCheck(versionByteName, encoded);
  } catch (err) {
    cov_2gr7gos3mq().s[37]++;
    return false;
  }

  // basic length checks on the resulting buffer sizes
  cov_2gr7gos3mq().s[38]++;
  switch (versionByteName) {
    case 'ed25519PublicKey':
      cov_2gr7gos3mq().b[6][0]++;
    // falls through
    case 'ed25519SecretSeed':
      cov_2gr7gos3mq().b[6][1]++;
    // falls through
    case 'preAuthTx':
      cov_2gr7gos3mq().b[6][2]++;
    // falls through
    case 'sha256Hash':
      cov_2gr7gos3mq().b[6][3]++;
      cov_2gr7gos3mq().s[39]++;
      return decoded.length === 32;
    case 'med25519PublicKey':
      cov_2gr7gos3mq().b[6][4]++;
      cov_2gr7gos3mq().s[40]++;
      return decoded.length === 40;
    // +8 bytes for the ID

    case 'signedPayload':
      cov_2gr7gos3mq().b[6][5]++;
      cov_2gr7gos3mq().s[41]++;
      return (
        // 32 for the signer, +4 for the payload size, then either +4 for the
        // min or +64 for the max payload
        (cov_2gr7gos3mq().b[7][0]++, decoded.length >= 32 + 4 + 4) && (cov_2gr7gos3mq().b[7][1]++, decoded.length <= 32 + 4 + 64)
      );
    default:
      cov_2gr7gos3mq().b[6][6]++;
      cov_2gr7gos3mq().s[42]++;
      return false;
  }
}
function decodeCheck(versionByteName, encoded) {
  cov_2gr7gos3mq().f[18]++;
  cov_2gr7gos3mq().s[43]++;
  if (!(0, _isString["default"])(encoded)) {
    cov_2gr7gos3mq().b[8][0]++;
    cov_2gr7gos3mq().s[44]++;
    throw new TypeError('encoded argument must be of type String');
  } else {
    cov_2gr7gos3mq().b[8][1]++;
  }
  var decoded = (cov_2gr7gos3mq().s[45]++, _base["default"].decode(encoded));
  var versionByte = (cov_2gr7gos3mq().s[46]++, decoded[0]);
  var payload = (cov_2gr7gos3mq().s[47]++, decoded.slice(0, -2));
  var data = (cov_2gr7gos3mq().s[48]++, payload.slice(1));
  var checksum = (cov_2gr7gos3mq().s[49]++, decoded.slice(-2));
  cov_2gr7gos3mq().s[50]++;
  if (encoded !== _base["default"].encode(decoded)) {
    cov_2gr7gos3mq().b[9][0]++;
    cov_2gr7gos3mq().s[51]++;
    throw new Error('invalid encoded string');
  } else {
    cov_2gr7gos3mq().b[9][1]++;
  }
  var expectedVersion = (cov_2gr7gos3mq().s[52]++, versionBytes[versionByteName]);
  cov_2gr7gos3mq().s[53]++;
  if ((0, _isUndefined["default"])(expectedVersion)) {
    cov_2gr7gos3mq().b[10][0]++;
    cov_2gr7gos3mq().s[54]++;
    throw new Error("".concat(versionByteName, " is not a valid version byte name. ") + "Expected one of ".concat(Object.keys(versionBytes).join(', ')));
  } else {
    cov_2gr7gos3mq().b[10][1]++;
  }
  cov_2gr7gos3mq().s[55]++;
  if (versionByte !== expectedVersion) {
    cov_2gr7gos3mq().b[11][0]++;
    cov_2gr7gos3mq().s[56]++;
    throw new Error("invalid version byte. expected ".concat(expectedVersion, ", got ").concat(versionByte));
  } else {
    cov_2gr7gos3mq().b[11][1]++;
  }
  var expectedChecksum = (cov_2gr7gos3mq().s[57]++, calculateChecksum(payload));
  cov_2gr7gos3mq().s[58]++;
  if (!(0, _checksum.verifyChecksum)(expectedChecksum, checksum)) {
    cov_2gr7gos3mq().b[12][0]++;
    cov_2gr7gos3mq().s[59]++;
    throw new Error("invalid checksum");
  } else {
    cov_2gr7gos3mq().b[12][1]++;
  }
  cov_2gr7gos3mq().s[60]++;
  return _BrowserBuffer["default"].from(data);
}
function encodeCheck(versionByteName, data) {
  cov_2gr7gos3mq().f[19]++;
  cov_2gr7gos3mq().s[61]++;
  if ((cov_2gr7gos3mq().b[14][0]++, (0, _isNull["default"])(data)) || (cov_2gr7gos3mq().b[14][1]++, (0, _isUndefined["default"])(data))) {
    cov_2gr7gos3mq().b[13][0]++;
    cov_2gr7gos3mq().s[62]++;
    throw new Error('cannot encode null data');
  } else {
    cov_2gr7gos3mq().b[13][1]++;
  }
  var versionByte = (cov_2gr7gos3mq().s[63]++, versionBytes[versionByteName]);
  cov_2gr7gos3mq().s[64]++;
  if ((0, _isUndefined["default"])(versionByte)) {
    cov_2gr7gos3mq().b[15][0]++;
    cov_2gr7gos3mq().s[65]++;
    throw new Error("".concat(versionByteName, " is not a valid version byte name. ") + "Expected one of ".concat(Object.keys(versionBytes).join(', ')));
  } else {
    cov_2gr7gos3mq().b[15][1]++;
  }
  cov_2gr7gos3mq().s[66]++;
  data = _BrowserBuffer["default"].from(data);
  var versionBuffer = (cov_2gr7gos3mq().s[67]++, _BrowserBuffer["default"].from([versionByte]));
  var payload = (cov_2gr7gos3mq().s[68]++, _BrowserBuffer["default"].concat([versionBuffer, data]));
  var checksum = (cov_2gr7gos3mq().s[69]++, calculateChecksum(payload));
  var unencoded = (cov_2gr7gos3mq().s[70]++, _BrowserBuffer["default"].concat([payload, checksum]));
  cov_2gr7gos3mq().s[71]++;
  return _base["default"].encode(unencoded);
}

// Computes the CRC16-XModem checksum of `payload` in little-endian order
function calculateChecksum(payload) {
  cov_2gr7gos3mq().f[20]++;
  var checksum = (cov_2gr7gos3mq().s[72]++, _BrowserBuffer["default"].alloc(2));
  cov_2gr7gos3mq().s[73]++;
  checksum.writeUInt16LE(_crc["default"].crc16xmodem(payload), 0);
  cov_2gr7gos3mq().s[74]++;
  return checksum;
}