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
  var hash = "50a7dc6466473fc6def7a12c9d54ebbedcfa4465";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\strkey.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 21
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 19,
          column: 20
        },
        end: {
          line: 26,
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
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 50
        }
      },
      "5": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 50
        }
      },
      "6": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 53
        }
      },
      "7": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 46
        }
      },
      "8": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 50
        }
      },
      "9": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 53
        }
      },
      "10": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 119,
          column: 51
        }
      },
      "11": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 128,
          column: 42
        }
      },
      "12": {
        start: {
          line: 137,
          column: 4
        },
        end: {
          line: 137,
          column: 45
        }
      },
      "13": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 43
        }
      },
      "14": {
        start: {
          line: 155,
          column: 4
        },
        end: {
          line: 155,
          column: 46
        }
      },
      "15": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 164,
          column: 46
        }
      },
      "16": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 49
        }
      },
      "17": {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 182,
          column: 45
        }
      },
      "18": {
        start: {
          line: 186,
          column: 4
        },
        end: {
          line: 186,
          column: 35
        }
      },
      "19": {
        start: {
          line: 207,
          column: 2
        },
        end: {
          line: 209,
          column: 3
        }
      },
      "20": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 208,
          column: 17
        }
      },
      "21": {
        start: {
          line: 212,
          column: 2
        },
        end: {
          line: 237,
          column: 3
        }
      },
      "22": {
        start: {
          line: 218,
          column: 6
        },
        end: {
          line: 220,
          column: 7
        }
      },
      "23": {
        start: {
          line: 219,
          column: 8
        },
        end: {
          line: 219,
          column: 21
        }
      },
      "24": {
        start: {
          line: 221,
          column: 6
        },
        end: {
          line: 221,
          column: 12
        }
      },
      "25": {
        start: {
          line: 224,
          column: 6
        },
        end: {
          line: 226,
          column: 7
        }
      },
      "26": {
        start: {
          line: 225,
          column: 8
        },
        end: {
          line: 225,
          column: 21
        }
      },
      "27": {
        start: {
          line: 227,
          column: 6
        },
        end: {
          line: 227,
          column: 12
        }
      },
      "28": {
        start: {
          line: 230,
          column: 6
        },
        end: {
          line: 232,
          column: 7
        }
      },
      "29": {
        start: {
          line: 231,
          column: 8
        },
        end: {
          line: 231,
          column: 21
        }
      },
      "30": {
        start: {
          line: 233,
          column: 6
        },
        end: {
          line: 233,
          column: 12
        }
      },
      "31": {
        start: {
          line: 236,
          column: 6
        },
        end: {
          line: 236,
          column: 19
        }
      },
      "32": {
        start: {
          line: 239,
          column: 16
        },
        end: {
          line: 239,
          column: 18
        }
      },
      "33": {
        start: {
          line: 240,
          column: 2
        },
        end: {
          line: 246,
          column: 3
        }
      },
      "34": {
        start: {
          line: 241,
          column: 4
        },
        end: {
          line: 241,
          column: 52
        }
      },
      "35": {
        start: {
          line: 244,
          column: 4
        },
        end: {
          line: 244,
          column: 68
        }
      },
      "36": {
        start: {
          line: 245,
          column: 4
        },
        end: {
          line: 245,
          column: 17
        }
      },
      "37": {
        start: {
          line: 249,
          column: 2
        },
        end: {
          line: 268,
          column: 3
        }
      },
      "38": {
        start: {
          line: 254,
          column: 6
        },
        end: {
          line: 254,
          column: 35
        }
      },
      "39": {
        start: {
          line: 257,
          column: 6
        },
        end: {
          line: 257,
          column: 35
        }
      },
      "40": {
        start: {
          line: 260,
          column: 6
        },
        end: {
          line: 264,
          column: 8
        }
      },
      "41": {
        start: {
          line: 267,
          column: 6
        },
        end: {
          line: 267,
          column: 19
        }
      },
      "42": {
        start: {
          line: 275,
          column: 2
        },
        end: {
          line: 278,
          column: 3
        }
      },
      "43": {
        start: {
          line: 276,
          column: 4
        },
        end: {
          line: 276,
          column: 54
        }
      },
      "44": {
        start: {
          line: 277,
          column: 4
        },
        end: {
          line: 277,
          column: 67
        }
      },
      "45": {
        start: {
          line: 280,
          column: 18
        },
        end: {
          line: 280,
          column: 40
        }
      },
      "46": {
        start: {
          line: 281,
          column: 22
        },
        end: {
          line: 281,
          column: 32
        }
      },
      "47": {
        start: {
          line: 282,
          column: 18
        },
        end: {
          line: 282,
          column: 38
        }
      },
      "48": {
        start: {
          line: 283,
          column: 15
        },
        end: {
          line: 283,
          column: 31
        }
      },
      "49": {
        start: {
          line: 284,
          column: 19
        },
        end: {
          line: 284,
          column: 36
        }
      },
      "50": {
        start: {
          line: 287,
          column: 2
        },
        end: {
          line: 290,
          column: 3
        }
      },
      "51": {
        start: {
          line: 288,
          column: 4
        },
        end: {
          line: 288,
          column: 71
        }
      },
      "52": {
        start: {
          line: 289,
          column: 4
        },
        end: {
          line: 289,
          column: 46
        }
      },
      "53": {
        start: {
          line: 292,
          column: 26
        },
        end: {
          line: 292,
          column: 55
        }
      },
      "54": {
        start: {
          line: 294,
          column: 2
        },
        end: {
          line: 299,
          column: 3
        }
      },
      "55": {
        start: {
          line: 295,
          column: 14
        },
        end: {
          line: 296,
          column: 63
        }
      },
      "56": {
        start: {
          line: 297,
          column: 4
        },
        end: {
          line: 297,
          column: 42
        }
      },
      "57": {
        start: {
          line: 298,
          column: 4
        },
        end: {
          line: 298,
          column: 25
        }
      },
      "58": {
        start: {
          line: 301,
          column: 2
        },
        end: {
          line: 305,
          column: 3
        }
      },
      "59": {
        start: {
          line: 302,
          column: 14
        },
        end: {
          line: 302,
          column: 85
        }
      },
      "60": {
        start: {
          line: 303,
          column: 4
        },
        end: {
          line: 303,
          column: 42
        }
      },
      "61": {
        start: {
          line: 304,
          column: 4
        },
        end: {
          line: 304,
          column: 25
        }
      },
      "62": {
        start: {
          line: 307,
          column: 27
        },
        end: {
          line: 307,
          column: 53
        }
      },
      "63": {
        start: {
          line: 308,
          column: 2
        },
        end: {
          line: 311,
          column: 3
        }
      },
      "64": {
        start: {
          line: 309,
          column: 4
        },
        end: {
          line: 309,
          column: 99
        }
      },
      "65": {
        start: {
          line: 310,
          column: 4
        },
        end: {
          line: 310,
          column: 40
        }
      },
      "66": {
        start: {
          line: 312,
          column: 21
        },
        end: {
          line: 312,
          column: 45
        }
      },
      "67": {
        start: {
          line: 314,
          column: 2
        },
        end: {
          line: 314,
          column: 20
        }
      },
      "68": {
        start: {
          line: 319,
          column: 2
        },
        end: {
          line: 321,
          column: 3
        }
      },
      "69": {
        start: {
          line: 320,
          column: 4
        },
        end: {
          line: 320,
          column: 47
        }
      },
      "70": {
        start: {
          line: 323,
          column: 22
        },
        end: {
          line: 323,
          column: 51
        }
      },
      "71": {
        start: {
          line: 325,
          column: 2
        },
        end: {
          line: 330,
          column: 3
        }
      },
      "72": {
        start: {
          line: 326,
          column: 16
        },
        end: {
          line: 327,
          column: 63
        }
      },
      "73": {
        start: {
          line: 328,
          column: 4
        },
        end: {
          line: 328,
          column: 42
        }
      },
      "74": {
        start: {
          line: 329,
          column: 4
        },
        end: {
          line: 329,
          column: 25
        }
      },
      "75": {
        start: {
          line: 333,
          column: 2
        },
        end: {
          line: 333,
          column: 34
        }
      },
      "76": {
        start: {
          line: 335,
          column: 24
        },
        end: {
          line: 335,
          column: 57
        }
      },
      "77": {
        start: {
          line: 337,
          column: 18
        },
        end: {
          line: 337,
          column: 61
        }
      },
      "78": {
        start: {
          line: 339,
          column: 19
        },
        end: {
          line: 339,
          column: 45
        }
      },
      "79": {
        start: {
          line: 340,
          column: 20
        },
        end: {
          line: 340,
          column: 61
        }
      },
      "80": {
        start: {
          line: 342,
          column: 2
        },
        end: {
          line: 342,
          column: 34
        }
      },
      "81": {
        start: {
          line: 348,
          column: 15
        },
        end: {
          line: 348,
          column: 34
        }
      },
      "82": {
        start: {
          line: 349,
          column: 17
        },
        end: {
          line: 349,
          column: 38
        }
      },
      "83": {
        start: {
          line: 353,
          column: 22
        },
        end: {
          line: 353,
          column: 49
        }
      },
      "84": {
        start: {
          line: 357,
          column: 14
        },
        end: {
          line: 357,
          column: 31
        }
      },
      "85": {
        start: {
          line: 358,
          column: 20
        },
        end: {
          line: 358,
          column: 58
        }
      },
      "86": {
        start: {
          line: 361,
          column: 19
        },
        end: {
          line: 361,
          column: 41
        }
      },
      "87": {
        start: {
          line: 364,
          column: 18
        },
        end: {
          line: 364,
          column: 42
        }
      },
      "88": {
        start: {
          line: 366,
          column: 2
        },
        end: {
          line: 366,
          column: 54
        }
      },
      "89": {
        start: {
          line: 370,
          column: 20
        },
        end: {
          line: 370,
          column: 51
        }
      },
      "90": {
        start: {
          line: 379,
          column: 2
        },
        end: {
          line: 379,
          column: 18
        }
      },
      "91": {
        start: {
          line: 384,
          column: 19
        },
        end: {
          line: 417,
          column: 3
        }
      },
      "92": {
        start: {
          line: 419,
          column: 14
        },
        end: {
          line: 419,
          column: 17
        }
      },
      "93": {
        start: {
          line: 421,
          column: 2
        },
        end: {
          line: 426,
          column: 3
        }
      },
      "94": {
        start: {
          line: 421,
          column: 15
        },
        end: {
          line: 421,
          column: 16
        }
      },
      "95": {
        start: {
          line: 422,
          column: 17
        },
        end: {
          line: 422,
          column: 27
        }
      },
      "96": {
        start: {
          line: 423,
          column: 24
        },
        end: {
          line: 423,
          column: 43
        }
      },
      "97": {
        start: {
          line: 424,
          column: 4
        },
        end: {
          line: 424,
          column: 49
        }
      },
      "98": {
        start: {
          line: 425,
          column: 4
        },
        end: {
          line: 425,
          column: 20
        }
      },
      "99": {
        start: {
          line: 428,
          column: 20
        },
        end: {
          line: 428,
          column: 37
        }
      },
      "100": {
        start: {
          line: 429,
          column: 2
        },
        end: {
          line: 429,
          column: 30
        }
      },
      "101": {
        start: {
          line: 430,
          column: 2
        },
        end: {
          line: 430,
          column: 37
        }
      },
      "102": {
        start: {
          line: 433,
          column: 2
        },
        end: {
          line: 433,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        loc: {
          start: {
            line: 40,
            column: 38
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 40
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
            line: 269,
            column: 1
          }
        },
        line: 203
      },
      "18": {
        name: "decodeCheck",
        decl: {
          start: {
            line: 271,
            column: 16
          },
          end: {
            line: 271,
            column: 27
          }
        },
        loc: {
          start: {
            line: 271,
            column: 54
          },
          end: {
            line: 315,
            column: 1
          }
        },
        line: 271
      },
      "19": {
        name: "encodeCheck",
        decl: {
          start: {
            line: 317,
            column: 16
          },
          end: {
            line: 317,
            column: 27
          }
        },
        loc: {
          start: {
            line: 317,
            column: 51
          },
          end: {
            line: 343,
            column: 1
          }
        },
        line: 317
      },
      "20": {
        name: "calculateChecksum",
        decl: {
          start: {
            line: 346,
            column: 9
          },
          end: {
            line: 346,
            column: 26
          }
        },
        loc: {
          start: {
            line: 346,
            column: 36
          },
          end: {
            line: 380,
            column: 1
          }
        },
        line: 346
      },
      "21": {
        name: "calculateChecksum2",
        decl: {
          start: {
            line: 382,
            column: 9
          },
          end: {
            line: 382,
            column: 27
          }
        },
        loc: {
          start: {
            line: 382,
            column: 37
          },
          end: {
            line: 434,
            column: 1
          }
        },
        line: 382
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 207,
            column: 2
          },
          end: {
            line: 209,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 207,
            column: 2
          },
          end: {
            line: 209,
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
        line: 207
      },
      "1": {
        loc: {
          start: {
            line: 212,
            column: 2
          },
          end: {
            line: 237,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 214,
            column: 4
          },
          end: {
            line: 214,
            column: 28
          }
        }, {
          start: {
            line: 215,
            column: 4
          },
          end: {
            line: 215,
            column: 29
          }
        }, {
          start: {
            line: 216,
            column: 4
          },
          end: {
            line: 216,
            column: 21
          }
        }, {
          start: {
            line: 217,
            column: 4
          },
          end: {
            line: 221,
            column: 12
          }
        }, {
          start: {
            line: 223,
            column: 4
          },
          end: {
            line: 227,
            column: 12
          }
        }, {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 233,
            column: 12
          }
        }, {
          start: {
            line: 235,
            column: 4
          },
          end: {
            line: 236,
            column: 19
          }
        }],
        line: 212
      },
      "2": {
        loc: {
          start: {
            line: 218,
            column: 6
          },
          end: {
            line: 220,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 218,
            column: 6
          },
          end: {
            line: 220,
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
        line: 218
      },
      "3": {
        loc: {
          start: {
            line: 224,
            column: 6
          },
          end: {
            line: 226,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 224,
            column: 6
          },
          end: {
            line: 226,
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
        line: 224
      },
      "4": {
        loc: {
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 232,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 230,
            column: 6
          },
          end: {
            line: 232,
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
        line: 230
      },
      "5": {
        loc: {
          start: {
            line: 230,
            column: 10
          },
          end: {
            line: 230,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 230,
            column: 10
          },
          end: {
            line: 230,
            column: 29
          }
        }, {
          start: {
            line: 230,
            column: 33
          },
          end: {
            line: 230,
            column: 53
          }
        }],
        line: 230
      },
      "6": {
        loc: {
          start: {
            line: 249,
            column: 2
          },
          end: {
            line: 268,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 250,
            column: 4
          },
          end: {
            line: 250,
            column: 28
          }
        }, {
          start: {
            line: 251,
            column: 4
          },
          end: {
            line: 251,
            column: 29
          }
        }, {
          start: {
            line: 252,
            column: 4
          },
          end: {
            line: 252,
            column: 21
          }
        }, {
          start: {
            line: 253,
            column: 4
          },
          end: {
            line: 254,
            column: 35
          }
        }, {
          start: {
            line: 256,
            column: 4
          },
          end: {
            line: 257,
            column: 35
          }
        }, {
          start: {
            line: 259,
            column: 4
          },
          end: {
            line: 264,
            column: 8
          }
        }, {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 267,
            column: 19
          }
        }],
        line: 249
      },
      "7": {
        loc: {
          start: {
            line: 263,
            column: 8
          },
          end: {
            line: 263,
            column: 69
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 263,
            column: 8
          },
          end: {
            line: 263,
            column: 36
          }
        }, {
          start: {
            line: 263,
            column: 40
          },
          end: {
            line: 263,
            column: 69
          }
        }],
        line: 263
      },
      "8": {
        loc: {
          start: {
            line: 275,
            column: 2
          },
          end: {
            line: 278,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 275,
            column: 2
          },
          end: {
            line: 278,
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
        line: 275
      },
      "9": {
        loc: {
          start: {
            line: 287,
            column: 2
          },
          end: {
            line: 290,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 287,
            column: 2
          },
          end: {
            line: 290,
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
        line: 287
      },
      "10": {
        loc: {
          start: {
            line: 294,
            column: 2
          },
          end: {
            line: 299,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 294,
            column: 2
          },
          end: {
            line: 299,
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
        line: 294
      },
      "11": {
        loc: {
          start: {
            line: 301,
            column: 2
          },
          end: {
            line: 305,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 301,
            column: 2
          },
          end: {
            line: 305,
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
        line: 301
      },
      "12": {
        loc: {
          start: {
            line: 308,
            column: 2
          },
          end: {
            line: 311,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 308,
            column: 2
          },
          end: {
            line: 311,
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
        line: 308
      },
      "13": {
        loc: {
          start: {
            line: 319,
            column: 2
          },
          end: {
            line: 321,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 319,
            column: 2
          },
          end: {
            line: 321,
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
        line: 319
      },
      "14": {
        loc: {
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 319,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 319,
            column: 6
          },
          end: {
            line: 319,
            column: 18
          }
        }, {
          start: {
            line: 319,
            column: 22
          },
          end: {
            line: 319,
            column: 39
          }
        }],
        line: 319
      },
      "15": {
        loc: {
          start: {
            line: 325,
            column: 2
          },
          end: {
            line: 330,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 325,
            column: 2
          },
          end: {
            line: 330,
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
        line: 325
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
      "102": 0
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
      "20": 0,
      "21": 0
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
    hash: "50a7dc6466473fc6def7a12c9d54ebbedcfa4465"
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
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      // console.log('data in encodeEd25519PublicKey', data)
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
      // console.log(publicKey, 'publicKey in isvalidEd25519PublicKey')
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
      cov_2gr7gos3mq().s[5]++;
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
      cov_2gr7gos3mq().s[6]++;
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
      cov_2gr7gos3mq().s[7]++;
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
      cov_2gr7gos3mq().s[8]++;
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
      cov_2gr7gos3mq().s[9]++;
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
      cov_2gr7gos3mq().s[10]++;
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
      cov_2gr7gos3mq().s[11]++;
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
      cov_2gr7gos3mq().s[12]++;
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
      cov_2gr7gos3mq().s[13]++;
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
      cov_2gr7gos3mq().s[14]++;
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
      cov_2gr7gos3mq().s[15]++;
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
      cov_2gr7gos3mq().s[16]++;
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
      cov_2gr7gos3mq().s[17]++;
      return isValid('signedPayload', address);
    }
  }, {
    key: "getVersionByteForPrefix",
    value: function getVersionByteForPrefix(address) {
      cov_2gr7gos3mq().f[16]++;
      cov_2gr7gos3mq().s[18]++;
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
  cov_2gr7gos3mq().s[19]++;
  // console.log(encoded, 'encoded in isValid')
  // console.log(JSON.stringify(encoded), 'JSON.stringify(encoded) in isValid');
  // console.log(typeof encoded, 'typeof encoded in isValid')
  if (!(0, _isString["default"])(encoded)) {
    cov_2gr7gos3mq().b[0][0]++;
    cov_2gr7gos3mq().s[20]++;
    return false;
  } else {
    cov_2gr7gos3mq().b[0][1]++;
  }
  // console.log(versionByteName, 'versionByteName in isValid')
  // basic length checks on the strkey lengths
  cov_2gr7gos3mq().s[21]++;
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
      cov_2gr7gos3mq().s[22]++;
      if (encoded.length !== 56) {
        cov_2gr7gos3mq().b[2][0]++;
        cov_2gr7gos3mq().s[23]++;
        return false;
      } else {
        cov_2gr7gos3mq().b[2][1]++;
      }
      cov_2gr7gos3mq().s[24]++;
      break;
    case 'med25519PublicKey':
      cov_2gr7gos3mq().b[1][4]++;
      cov_2gr7gos3mq().s[25]++;
      if (encoded.length !== 69) {
        cov_2gr7gos3mq().b[3][0]++;
        cov_2gr7gos3mq().s[26]++;
        return false;
      } else {
        cov_2gr7gos3mq().b[3][1]++;
      }
      cov_2gr7gos3mq().s[27]++;
      break;
    case 'signedPayload':
      cov_2gr7gos3mq().b[1][5]++;
      cov_2gr7gos3mq().s[28]++;
      if ((cov_2gr7gos3mq().b[5][0]++, encoded.length < 56) || (cov_2gr7gos3mq().b[5][1]++, encoded.length > 165)) {
        cov_2gr7gos3mq().b[4][0]++;
        cov_2gr7gos3mq().s[29]++;
        return false;
      } else {
        cov_2gr7gos3mq().b[4][1]++;
      }
      cov_2gr7gos3mq().s[30]++;
      break;
    default:
      cov_2gr7gos3mq().b[1][6]++;
      cov_2gr7gos3mq().s[31]++;
      return false;
  }
  var decoded = (cov_2gr7gos3mq().s[32]++, '');
  cov_2gr7gos3mq().s[33]++;
  try {
    cov_2gr7gos3mq().s[34]++;
    decoded = decodeCheck(versionByteName, encoded);
    // console.log('back from decoded is,', decoded)
  } catch (err) {
    cov_2gr7gos3mq().s[35]++;
    console.log('there was an error in decodeCheck, and it is', err);
    cov_2gr7gos3mq().s[36]++;
    return false;
  }

  // basic length checks on the resulting buffer sizes
  cov_2gr7gos3mq().s[37]++;
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
      cov_2gr7gos3mq().s[38]++;
      return decoded.length === 32;
    case 'med25519PublicKey':
      cov_2gr7gos3mq().b[6][4]++;
      cov_2gr7gos3mq().s[39]++;
      return decoded.length === 40;
    // +8 bytes for the ID

    case 'signedPayload':
      cov_2gr7gos3mq().b[6][5]++;
      cov_2gr7gos3mq().s[40]++;
      return (
        // 32 for the signer, +4 for the payload size, then either +4 for the
        // min or +64 for the max payload
        (cov_2gr7gos3mq().b[7][0]++, decoded.length >= 32 + 4 + 4) && (cov_2gr7gos3mq().b[7][1]++, decoded.length <= 32 + 4 + 64)
      );
    default:
      cov_2gr7gos3mq().b[6][6]++;
      cov_2gr7gos3mq().s[41]++;
      return false;
  }
}
function decodeCheck(versionByteName, encoded) {
  cov_2gr7gos3mq().f[18]++;
  cov_2gr7gos3mq().s[42]++;
  // console.log(encoded, 'encoded in decodeCheck')
  // console.log(typeof encoded, 'typeof encoded in decodeCheck')

  if (!(0, _isString["default"])(encoded)) {
    cov_2gr7gos3mq().b[8][0]++;
    cov_2gr7gos3mq().s[43]++;
    console.log('the type was invalid in decodeCheck');
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
    console.log('there was an error with base32.encode in decodeCheck');
    cov_2gr7gos3mq().s[52]++;
    throw new Error('invalid encoded string');
  } else {
    cov_2gr7gos3mq().b[9][1]++;
  }
  var expectedVersion = (cov_2gr7gos3mq().s[53]++, versionBytes[versionByteName]);
  cov_2gr7gos3mq().s[54]++;
  if ((0, _isUndefined["default"])(expectedVersion)) {
    cov_2gr7gos3mq().b[10][0]++;
    var err = (cov_2gr7gos3mq().s[55]++, "".concat(versionByteName, " is not a valid version byte name. ") + "Expected one of ".concat(Object.keys(versionBytes).join(', ')));
    cov_2gr7gos3mq().s[56]++;
    console.log(err, 'err in decodeCheck');
    cov_2gr7gos3mq().s[57]++;
    throw new Error(err);
  } else {
    cov_2gr7gos3mq().b[10][1]++;
  }
  cov_2gr7gos3mq().s[58]++;
  if (versionByte !== expectedVersion) {
    cov_2gr7gos3mq().b[11][0]++;
    var _err = (cov_2gr7gos3mq().s[59]++, "invalid version byte. expected ".concat(expectedVersion, ", got ").concat(versionByte));
    cov_2gr7gos3mq().s[60]++;
    console.log(_err, 'err in decodeCheck');
    cov_2gr7gos3mq().s[61]++;
    throw new Error(_err);
  } else {
    cov_2gr7gos3mq().b[11][1]++;
  }
  var expectedChecksum = (cov_2gr7gos3mq().s[62]++, calculateChecksum(payload));
  cov_2gr7gos3mq().s[63]++;
  if (!(0, _checksum.verifyChecksum)(expectedChecksum, checksum)) {
    cov_2gr7gos3mq().b[12][0]++;
    cov_2gr7gos3mq().s[64]++;
    console.log("in DecodeCheck - invalid checksum. expected ".concat(expectedChecksum, ", got ").concat(checksum));
    cov_2gr7gos3mq().s[65]++;
    throw new Error("invalid checksum");
  } else {
    cov_2gr7gos3mq().b[12][1]++;
  }
  var returndata = (cov_2gr7gos3mq().s[66]++, _BrowserBuffer["default"].from(data));
  // console.log('the return data in decodecheck is', returndata)
  cov_2gr7gos3mq().s[67]++;
  return returndata;
}
function encodeCheck(versionByteName, data) {
  cov_2gr7gos3mq().f[19]++;
  cov_2gr7gos3mq().s[68]++;
  if ((cov_2gr7gos3mq().b[14][0]++, (0, _isNull["default"])(data)) || (cov_2gr7gos3mq().b[14][1]++, (0, _isUndefined["default"])(data))) {
    cov_2gr7gos3mq().b[13][0]++;
    cov_2gr7gos3mq().s[69]++;
    throw new Error('cannot encode null data');
  } else {
    cov_2gr7gos3mq().b[13][1]++;
  }
  var versionByte = (cov_2gr7gos3mq().s[70]++, versionBytes[versionByteName]);
  cov_2gr7gos3mq().s[71]++;
  if (versionByte === undefined) {
    cov_2gr7gos3mq().b[15][0]++;
    var err = (cov_2gr7gos3mq().s[72]++, "".concat(versionByteName, " is not a valid version byte name. ") + "Expected one of ".concat(Object.keys(versionBytes).join(', ')));
    cov_2gr7gos3mq().s[73]++;
    console.log(err, 'err in encodeCheck');
    cov_2gr7gos3mq().s[74]++;
    throw new Error(err);
  } else {
    cov_2gr7gos3mq().b[15][1]++;
  }
  // console.log('it wasn not undefined')
  cov_2gr7gos3mq().s[75]++;
  data = _BrowserBuffer["default"].from(data);
  var versionBuffer = (cov_2gr7gos3mq().s[76]++, _BrowserBuffer["default"].from([versionByte]));
  var payload = (cov_2gr7gos3mq().s[77]++, _BrowserBuffer["default"].concat([versionBuffer, data]));
  var checksum = (cov_2gr7gos3mq().s[78]++, calculateChecksum(payload));
  var unencoded = (cov_2gr7gos3mq().s[79]++, _BrowserBuffer["default"].concat([payload, checksum]));
  cov_2gr7gos3mq().s[80]++;
  return _base["default"].encode(unencoded);
}

// Computes the CRC16-XModem checksum of `payload` in little-endian order
function calculateChecksum(payload) {
  cov_2gr7gos3mq().f[20]++;
  // console.log(JSON.stringify(payload), 'JSON.stringify(payload) in calculateChecksum');
  var bold = (cov_2gr7gos3mq().s[81]++, "font-weight: bold");
  var normal = (cov_2gr7gos3mq().s[82]++, "font-weight: normal");
  // console.log(payload)
  // console.log('%cpayload in calculateChecksum%c', bold, normal); // <Buffer 30 73 76 fd e8 8e 4c d6 1c c0 fb 29 4a 17 86 b3 f1 d0 61 f5 f2 f1 ca 57 46 5f aa 93 22 11 b9 46 d6> payload in calculateChecksum
  // console.log(typeof payload, 'typeof payload in calculateChecksum') // object typeof payload in calculateChecksum
  var payloadcopy = (cov_2gr7gos3mq().s[83]++, _BrowserBuffer["default"].from(payload));
  // console.log(typeof payloadcopy, 'typeof payloadcopy in calculateChecksum') // object typeof payloadcopy in calculateChecksum
  // console.log(payloadcopy, 'payload copy')
  // console.log(JSON.stringify(payloadcopy), 'JSON.stringify(payloadcopy')
  var enc = (cov_2gr7gos3mq().s[84]++, new TextEncoder());
  var uintarray = (cov_2gr7gos3mq().s[85]++, Uint8Array.from(enc.encode('astring')));
  // console.log(console.log(uintarray, 'uintarray in calculateChecksum'))
  // console.log(JSON.stringify(uintarray), 'JSON.stringify(uintarray) in calculateChecksum')
  var checksum = (cov_2gr7gos3mq().s[86]++, _BrowserBuffer["default"].alloc(2));

  // console.log('checksum after alloc', checksum) // <Buffer 00 00> checksum after alloc
  var crccalc = (cov_2gr7gos3mq().s[87]++, _crc["default"].crc16xmodem(payload));
  // console.log(crccalc, 'crccalc in calculateChecksum') // 26624 crccalc in calculateChecksum
  cov_2gr7gos3mq().s[88]++;
  checksum.writeUInt16LE(_crc["default"].crc16xmodem(payload), 0);
  // console.log(checksum, 'checksum in calculateChecksumafter writeUInt16LE'); // <Buffer 00 68> checksum in calculateChecksumafter writeUInt16LE
  // console.log('buf to string output', checksum.toString()) // 0068 buf to string output
  // const checksum3 = calculateChecksum2(payload);
  var checksum2 = (cov_2gr7gos3mq().s[89]++, calculateChecksum2(payloadcopy));

  // console.log('checksum2 after calculateChecksum2', checksum2)

  // try the new way
  cov_2gr7gos3mq().s[90]++;
  return checksum;
}
function calculateChecksum2(payload) {
  cov_2gr7gos3mq().f[21]++;
  // console.log(payload, 'payload in calculateChecksum2')
  var crcTable = (cov_2gr7gos3mq().s[91]++, [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50A5, 0x60C6, 0x70E7, 0x8108, 0x9129, 0xA14A, 0xB16B, 0xC18C, 0xD1AD, 0xE1CE, 0xF1EF, 0x1231, 0x0210, 0x3273, 0x2252, 0x52B5, 0x4294, 0x72F7, 0x62D6, 0x9339, 0x8318, 0xB37B, 0xA35A, 0xD3BD, 0xC39C, 0xF3FF, 0xE3DE, 0x2462, 0x3443, 0x0420, 0x1401, 0x64E6, 0x74C7, 0x44A4, 0x5485, 0xA56A, 0xB54B, 0x8528, 0x9509, 0xE5EE, 0xF5CF, 0xC5AC, 0xD58D, 0x3653, 0x2672, 0x1611, 0x0630, 0x76D7, 0x66F6, 0x5695, 0x46B4, 0xB75B, 0xA77A, 0x9719, 0x8738, 0xF7DF, 0xE7FE, 0xD79D, 0xC7BC, 0x48C4, 0x58E5, 0x6886, 0x78A7, 0x0840, 0x1861, 0x2802, 0x3823, 0xC9CC, 0xD9ED, 0xE98E, 0xF9AF, 0x8948, 0x9969, 0xA90A, 0xB92B, 0x5AF5, 0x4AD4, 0x7AB7, 0x6A96, 0x1A71, 0x0A50, 0x3A33, 0x2A12, 0xDBFD, 0xCBDC, 0xFBBF, 0xEB9E, 0x9B79, 0x8B58, 0xBB3B, 0xAB1A, 0x6CA6, 0x7C87, 0x4CE4, 0x5CC5, 0x2C22, 0x3C03, 0x0C60, 0x1C41, 0xEDAE, 0xFD8F, 0xCDEC, 0xDDCD, 0xAD2A, 0xBD0B, 0x8D68, 0x9D49, 0x7E97, 0x6EB6, 0x5ED5, 0x4EF4, 0x3E13, 0x2E32, 0x1E51, 0x0E70, 0xFF9F, 0xEFBE, 0xDFDD, 0xCFFC, 0xBF1B, 0xAF3A, 0x9F59, 0x8F78, 0x9188, 0x81A9, 0xB1CA, 0xA1EB, 0xD10C, 0xC12D, 0xF14E, 0xE16F, 0x1080, 0x00A1, 0x30C2, 0x20E3, 0x5004, 0x4025, 0x7046, 0x6067, 0x83B9, 0x9398, 0xA3FB, 0xB3DA, 0xC33D, 0xD31C, 0xE37F, 0xF35E, 0x02B1, 0x1290, 0x22F3, 0x32D2, 0x4235, 0x5214, 0x6277, 0x7256, 0xB5EA, 0xA5CB, 0x95A8, 0x8589, 0xF56E, 0xE54F, 0xD52C, 0xC50D, 0x34E2, 0x24C3, 0x14A0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405, 0xA7DB, 0xB7FA, 0x8799, 0x97B8, 0xE75F, 0xF77E, 0xC71D, 0xD73C, 0x26D3, 0x36F2, 0x0691, 0x16B0, 0x6657, 0x7676, 0x4615, 0x5634, 0xD94C, 0xC96D, 0xF90E, 0xE92F, 0x99C8, 0x89E9, 0xB98A, 0xA9AB, 0x5844, 0x4865, 0x7806, 0x6827, 0x18C0, 0x08E1, 0x3882, 0x28A3, 0xCB7D, 0xDB5C, 0xEB3F, 0xFB1E, 0x8BF9, 0x9BD8, 0xABBB, 0xBB9A, 0x4A75, 0x5A54, 0x6A37, 0x7A16, 0x0AF1, 0x1AD0, 0x2AB3, 0x3A92, 0xFD2E, 0xED0F, 0xDD6C, 0xCD4D, 0xBDAA, 0xAD8B, 0x9DE8, 0x8DC9, 0x7C26, 0x6C07, 0x5C64, 0x4C45, 0x3CA2, 0x2C83, 0x1CE0, 0x0CC1, 0xEF1F, 0xFF3E, 0xCF5D, 0xDF7C, 0xAF9B, 0xBFBA, 0x8FD9, 0x9FF8, 0x6E17, 0x7E36, 0x4E55, 0x5E74, 0x2E93, 0x3EB2, 0x0ED1, 0x1EF0]);
  var crc16 = (cov_2gr7gos3mq().s[92]++, 0x0);
  cov_2gr7gos3mq().s[93]++;
  for (var i = (cov_2gr7gos3mq().s[94]++, 0); i < payload.length; i++) {
    var _byte = (cov_2gr7gos3mq().s[95]++, payload[i]);
    var lookupIndex = (cov_2gr7gos3mq().s[96]++, crc16 >> 8 ^ _byte);
    cov_2gr7gos3mq().s[97]++;
    crc16 = crc16 << 8 ^ crcTable[lookupIndex];
    cov_2gr7gos3mq().s[98]++;
    crc16 &= 0xffff;
  }
  var checksum2 = (cov_2gr7gos3mq().s[99]++, new Uint8Array(2));
  cov_2gr7gos3mq().s[100]++;
  checksum2[0] = crc16 & 0xff;
  cov_2gr7gos3mq().s[101]++;
  checksum2[1] = crc16 >> 8 & 0xff;

  // console.log(checksum2, 'checksum2 right before return');
  cov_2gr7gos3mq().s[102]++;
  return checksum2;
}

/*

function calculateChecksum2(payload) {
  console.log('in calculateChecksum2', payload)
  const crcTable = [
    0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50A5, 0x60C6, 0x70E7,
    0x8108, 0x9129, 0xA14A, 0xB16B, 0xC18C, 0xD1AD, 0xE1CE, 0xF1EF,
    0x1231, 0x0210, 0x3273, 0x2252, 0x52B5, 0x4294, 0x72F7, 0x62D6,
    0x9339, 0x8318, 0xB37B, 0xA35A, 0xD3BD, 0xC39C, 0xF3FF, 0xE3DE,
    0x2462, 0x3443, 0x0420, 0x1401, 0x64E6, 0x74C7, 0x44A4, 0x5485,
    0xA56A, 0xB54B, 0x8528, 0x9509, 0xE5EE, 0xF5CF, 0xC5AC, 0xD58D,
    0x3653, 0x2672, 0x1611, 0x0630, 0x76D7, 0x66F6, 0x5695, 0x46B4,
    0xB75B, 0xA77A, 0x9719, 0x8738, 0xF7DF, 0xE7FE, 0xD79D, 0xC7BC,
    0x48C4, 0x58E5, 0x6886, 0x78A7, 0x0840, 0x1861, 0x2802, 0x3823,
    0xC9CC, 0xD9ED, 0xE98E, 0xF9AF, 0x8948, 0x9969, 0xA90A, 0xB92B,
    0x5AF5, 0x4AD4, 0x7AB7, 0x6A96, 0x1A71, 0x0A50, 0x3A33, 0x2A12,
    0xDBFD, 0xCBDC, 0xFBBF, 0xEB9E, 0x9B79, 0x8B58, 0xBB3B, 0xAB1A,
    0x6CA6, 0x7C87, 0x4CE4, 0x5CC5, 0x2C22, 0x3C03, 0x0C60, 0x1C41,
    0xEDAE, 0xFD8F, 0xCDEC, 0xDDCD, 0xAD2A, 0xBD0B, 0x8D68, 0x9D49,
    0x7E97, 0x6EB6, 0x5ED5, 0x4EF4, 0x3E13, 0x2E32, 0x1E51, 0x0E70,
    0xFF9F, 0xEFBE, 0xDFDD, 0xCFFC, 0xBF1B, 0xAF3A, 0x9F59, 0x8F78,
    0x9188, 0x81A9, 0xB1CA, 0xA1EB, 0xD10C, 0xC12D, 0xF14E, 0xE16F,
    0x1080, 0x00A1, 0x30C2, 0x20E3, 0x5004, 0x4025, 0x7046, 0x6067,
    0x83B9, 0x9398, 0xA3FB, 0xB3DA, 0xC33D, 0xD31C, 0xE37F, 0xF35E,
    0x02B1, 0x1290, 0x22F3, 0x32D2, 0x4235, 0x5214, 0x6277, 0x7256,
    0xB5EA, 0xA5CB, 0x95A8, 0x8589, 0xF56E, 0xE54F, 0xD52C, 0xC50D,
    0x34E2, 0x24C3, 0x14A0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
    0xA7DB, 0xB7FA, 0x8799, 0x97B8, 0xE75F, 0xF77E, 0xC71D, 0xD73C,
    0x26D3, 0x36F2, 0x0691, 0x16B0, 0x6657, 0x7676, 0x4615, 0x5634,
    0xD94C, 0xC96D, 0xF90E, 0xE92F, 0x99C8, 0x89E9, 0xB98A, 0xA9AB,
    0x5844, 0x4865, 0x7806, 0x6827, 0x18C0, 0x08E1, 0x3882, 0x28A3,
    0xCB7D, 0xDB5C, 0xEB3F, 0xFB1E, 0x8BF9, 0x9BD8, 0xABBB, 0xBB9A,
    0x4A75, 0x5A54, 0x6A37, 0x7A16, 0x0AF1, 0x1AD0, 0x2AB3, 0x3A92,
    0xFD2E, 0xED0F, 0xDD6C, 0xCD4D, 0xBDAA, 0xAD8B, 0x9DE8, 0x8DC9,
    0x7C26, 0x6C07, 0x5C64, 0x4C45, 0x3CA2, 0x2C83, 0x1CE0, 0x0CC1,
    0xEF1F, 0xFF3E, 0xCF5D, 0xDF7C, 0xAF9B, 0xBFBA, 0x8FD9, 0x9FF8,
    0x6E17, 0x7E36, 0x4E55, 0x5E74, 0x2E93, 0x3EB2, 0x0ED1, 0x1EF0
  ];

  let crc16 = 0x0;

  for (let i = 0; i < payload.length; i++) {
    const byte = payload[i];
    console.log(byte, 'byte iteration ', i)
    const lookupIndex = (crc16 >> 8) ^ byte;
    crc16 = (crc16 << 8) ^ crcTable[lookupIndex];
    crc16 &= 0xffff;
  }
  const checksum2 = new Uint8Array(2);
  checksum2[0] = crc16 & 0xff;
  checksum2[1] = (crc16 >> 8) & 0xff;
  console.log(checksum2, 'checksum2 right before return')
  console.log(crc16, 'crc16 right before return')

  return checksum2;
}

*/