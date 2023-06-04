"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transaction = void 0;
var _map = _interopRequireDefault(require("lodash/map"));
var _xdr = _interopRequireDefault(require("./xdr"));
var _hashing = require("./hashing");
var _strkey = require("./strkey");
var _operation = require("./operation");
var _memo = require("./memo");
var _transaction_base = require("./transaction_base");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1wxmir8xki() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\transaction.js";
  var hash = "711f66f0bb3283cb42d3a0479d524191bc363e44";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\transaction.js",
    statementMap: {
      "0": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "1": {
        start: {
          line: 39,
          column: 21
        },
        end: {
          line: 39,
          column: 59
        }
      },
      "2": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 40,
          column: 57
        }
      },
      "3": {
        start: {
          line: 43,
          column: 25
        },
        end: {
          line: 43,
          column: 42
        }
      },
      "4": {
        start: {
          line: 44,
          column: 4
        },
        end: {
          line: 53,
          column: 5
        }
      },
      "5": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 52,
          column: 8
        }
      },
      "6": {
        start: {
          line: 55,
          column: 23
        },
        end: {
          line: 55,
          column: 39
        }
      },
      "7": {
        start: {
          line: 56,
          column: 15
        },
        end: {
          line: 56,
          column: 30
        }
      },
      "8": {
        start: {
          line: 57,
          column: 16
        },
        end: {
          line: 57,
          column: 35
        }
      },
      "9": {
        start: {
          line: 58,
          column: 23
        },
        end: {
          line: 58,
          column: 62
        }
      },
      "10": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 60,
          column: 50
        }
      },
      "11": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 38
        }
      },
      "12": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 27
        }
      },
      "13": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 64,
          column: 44
        }
      },
      "14": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "15": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 70,
          column: 10
        }
      },
      "16": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 71,
          column: 14
        }
      },
      "17": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 76
        }
      },
      "18": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 14
        }
      },
      "19": {
        start: {
          line: 77,
          column: 15
        },
        end: {
          line: 77,
          column: 19
        }
      },
      "20": {
        start: {
          line: 78,
          column: 21
        },
        end: {
          line: 78,
          column: 25
        }
      },
      "21": {
        start: {
          line: 79,
          column: 4
        },
        end: {
          line: 102,
          column: 5
        }
      },
      "22": {
        start: {
          line: 81,
          column: 8
        },
        end: {
          line: 81,
          column: 37
        }
      },
      "23": {
        start: {
          line: 82,
          column: 8
        },
        end: {
          line: 82,
          column: 14
        }
      },
      "24": {
        start: {
          line: 85,
          column: 8
        },
        end: {
          line: 97,
          column: 9
        }
      },
      "25": {
        start: {
          line: 87,
          column: 12
        },
        end: {
          line: 87,
          column: 48
        }
      },
      "26": {
        start: {
          line: 88,
          column: 12
        },
        end: {
          line: 88,
          column: 18
        }
      },
      "27": {
        start: {
          line: 91,
          column: 12
        },
        end: {
          line: 91,
          column: 34
        }
      },
      "28": {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 92,
          column: 43
        }
      },
      "29": {
        start: {
          line: 93,
          column: 12
        },
        end: {
          line: 93,
          column: 18
        }
      },
      "30": {
        start: {
          line: 96,
          column: 12
        },
        end: {
          line: 96,
          column: 18
        }
      },
      "31": {
        start: {
          line: 98,
          column: 8
        },
        end: {
          line: 98,
          column: 14
        }
      },
      "32": {
        start: {
          line: 101,
          column: 8
        },
        end: {
          line: 101,
          column: 14
        }
      },
      "33": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 109,
          column: 5
        }
      },
      "34": {
        start: {
          line: 105,
          column: 6
        },
        end: {
          line: 108,
          column: 8
        }
      },
      "35": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 128,
          column: 5
        }
      },
      "36": {
        start: {
          line: 112,
          column: 27
        },
        end: {
          line: 112,
          column: 46
        }
      },
      "37": {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 118,
          column: 7
        }
      },
      "38": {
        start: {
          line: 114,
          column: 8
        },
        end: {
          line: 117,
          column: 10
        }
      },
      "39": {
        start: {
          line: 120,
          column: 21
        },
        end: {
          line: 120,
          column: 37
        }
      },
      "40": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 123,
          column: 7
        }
      },
      "41": {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 122,
          column: 53
        }
      },
      "42": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 125,
          column: 53
        }
      },
      "43": {
        start: {
          line: 126,
          column: 6
        },
        end: {
          line: 126,
          column: 65
        }
      },
      "44": {
        start: {
          line: 127,
          column: 6
        },
        end: {
          line: 127,
          column: 47
        }
      },
      "45": {
        start: {
          line: 130,
          column: 23
        },
        end: {
          line: 130,
          column: 44
        }
      },
      "46": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 76
        }
      },
      "47": {
        start: {
          line: 131,
          column: 47
        },
        end: {
          line: 131,
          column: 74
        }
      },
      "48": {
        start: {
          line: 141,
          column: 4
        },
        end: {
          line: 141,
          column: 28
        }
      },
      "49": {
        start: {
          line: 144,
          column: 4
        },
        end: {
          line: 144,
          column: 48
        }
      },
      "50": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 30
        }
      },
      "51": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 157,
          column: 48
        }
      },
      "52": {
        start: {
          line: 165,
          column: 4
        },
        end: {
          line: 165,
          column: 36
        }
      },
      "53": {
        start: {
          line: 168,
          column: 4
        },
        end: {
          line: 168,
          column: 48
        }
      },
      "54": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 176,
          column: 39
        }
      },
      "55": {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 179,
          column: 48
        }
      },
      "56": {
        start: {
          line: 187,
          column: 4
        },
        end: {
          line: 187,
          column: 45
        }
      },
      "57": {
        start: {
          line: 190,
          column: 4
        },
        end: {
          line: 190,
          column: 48
        }
      },
      "58": {
        start: {
          line: 198,
          column: 4
        },
        end: {
          line: 198,
          column: 30
        }
      },
      "59": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 201,
          column: 48
        }
      },
      "60": {
        start: {
          line: 209,
          column: 4
        },
        end: {
          line: 209,
          column: 26
        }
      },
      "61": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 213,
          column: 48
        }
      },
      "62": {
        start: {
          line: 221,
          column: 4
        },
        end: {
          line: 221,
          column: 24
        }
      },
      "63": {
        start: {
          line: 225,
          column: 4
        },
        end: {
          line: 225,
          column: 48
        }
      },
      "64": {
        start: {
          line: 233,
          column: 4
        },
        end: {
          line: 233,
          column: 28
        }
      },
      "65": {
        start: {
          line: 237,
          column: 4
        },
        end: {
          line: 237,
          column: 48
        }
      },
      "66": {
        start: {
          line: 245,
          column: 4
        },
        end: {
          line: 245,
          column: 42
        }
      },
      "67": {
        start: {
          line: 249,
          column: 4
        },
        end: {
          line: 249,
          column: 48
        }
      },
      "68": {
        start: {
          line: 262,
          column: 13
        },
        end: {
          line: 262,
          column: 20
        }
      },
      "69": {
        start: {
          line: 266,
          column: 4
        },
        end: {
          line: 276,
          column: 5
        }
      },
      "70": {
        start: {
          line: 267,
          column: 6
        },
        end: {
          line: 275,
          column: 8
        }
      },
      "71": {
        start: {
          line: 279,
          column: 6
        },
        end: {
          line: 279,
          column: 77
        }
      },
      "72": {
        start: {
          line: 281,
          column: 24
        },
        end: {
          line: 284,
          column: 6
        }
      },
      "73": {
        start: {
          line: 286,
          column: 4
        },
        end: {
          line: 286,
          column: 31
        }
      },
      "74": {
        start: {
          line: 294,
          column: 18
        },
        end: {
          line: 294,
          column: 33
        }
      },
      "75": {
        start: {
          line: 295,
          column: 23
        },
        end: {
          line: 295,
          column: 46
        }
      },
      "76": {
        start: {
          line: 298,
          column: 4
        },
        end: {
          line: 319,
          column: 5
        }
      },
      "77": {
        start: {
          line: 300,
          column: 8
        },
        end: {
          line: 305,
          column: 10
        }
      },
      "78": {
        start: {
          line: 306,
          column: 8
        },
        end: {
          line: 306,
          column: 14
        }
      },
      "79": {
        start: {
          line: 308,
          column: 8
        },
        end: {
          line: 313,
          column: 10
        }
      },
      "80": {
        start: {
          line: 314,
          column: 8
        },
        end: {
          line: 314,
          column: 14
        }
      },
      "81": {
        start: {
          line: 316,
          column: 8
        },
        end: {
          line: 318,
          column: 10
        }
      },
      "82": {
        start: {
          line: 321,
          column: 4
        },
        end: {
          line: 321,
          column: 20
        }
      },
      "83": {
        start: {
          line: 339,
          column: 4
        },
        end: {
          line: 345,
          column: 5
        }
      },
      "84": {
        start: {
          line: 344,
          column: 6
        },
        end: {
          line: 344,
          column: 54
        }
      },
      "85": {
        start: {
          line: 347,
          column: 13
        },
        end: {
          line: 347,
          column: 37
        }
      },
      "86": {
        start: {
          line: 348,
          column: 4
        },
        end: {
          line: 354,
          column: 5
        }
      },
      "87": {
        start: {
          line: 349,
          column: 6
        },
        end: {
          line: 349,
          column: 48
        }
      },
      "88": {
        start: {
          line: 351,
          column: 6
        },
        end: {
          line: 353,
          column: 8
        }
      },
      "89": {
        start: {
          line: 357,
          column: 20
        },
        end: {
          line: 359,
          column: 5
        }
      },
      "90": {
        start: {
          line: 360,
          column: 24
        },
        end: {
          line: 366,
          column: 5
        }
      },
      "91": {
        start: {
          line: 368,
          column: 21
        },
        end: {
          line: 368,
          column: 51
        }
      },
      "92": {
        start: {
          line: 369,
          column: 22
        },
        end: {
          line: 369,
          column: 79
        }
      },
      "93": {
        start: {
          line: 370,
          column: 4
        },
        end: {
          line: 370,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 37,
            column: 43
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 37
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 131,
            column: 39
          },
          end: {
            line: 131,
            column: 40
          }
        },
        loc: {
          start: {
            line: 131,
            column: 47
          },
          end: {
            line: 131,
            column: 74
          }
        },
        line: 131
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 140,
            column: 2
          },
          end: {
            line: 140,
            column: 3
          }
        },
        loc: {
          start: {
            line: 140,
            column: 19
          },
          end: {
            line: 142,
            column: 3
          }
        },
        line: 140
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 143,
            column: 2
          },
          end: {
            line: 143,
            column: 3
          }
        },
        loc: {
          start: {
            line: 143,
            column: 24
          },
          end: {
            line: 145,
            column: 3
          }
        },
        line: 143
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 153,
            column: 3
          }
        },
        loc: {
          start: {
            line: 153,
            column: 21
          },
          end: {
            line: 155,
            column: 3
          }
        },
        line: 153
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 156,
            column: 2
          },
          end: {
            line: 156,
            column: 3
          }
        },
        loc: {
          start: {
            line: 156,
            column: 26
          },
          end: {
            line: 158,
            column: 3
          }
        },
        line: 156
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 164,
            column: 2
          },
          end: {
            line: 164,
            column: 3
          }
        },
        loc: {
          start: {
            line: 164,
            column: 27
          },
          end: {
            line: 166,
            column: 3
          }
        },
        line: 164
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 167,
            column: 2
          },
          end: {
            line: 167,
            column: 3
          }
        },
        loc: {
          start: {
            line: 167,
            column: 32
          },
          end: {
            line: 169,
            column: 3
          }
        },
        line: 167
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 175,
            column: 2
          },
          end: {
            line: 175,
            column: 3
          }
        },
        loc: {
          start: {
            line: 175,
            column: 30
          },
          end: {
            line: 177,
            column: 3
          }
        },
        line: 175
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 178,
            column: 2
          },
          end: {
            line: 178,
            column: 3
          }
        },
        loc: {
          start: {
            line: 178,
            column: 35
          },
          end: {
            line: 180,
            column: 3
          }
        },
        line: 178
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 186,
            column: 2
          },
          end: {
            line: 186,
            column: 3
          }
        },
        loc: {
          start: {
            line: 186,
            column: 36
          },
          end: {
            line: 188,
            column: 3
          }
        },
        line: 186
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 189,
            column: 2
          },
          end: {
            line: 189,
            column: 3
          }
        },
        loc: {
          start: {
            line: 189,
            column: 41
          },
          end: {
            line: 191,
            column: 3
          }
        },
        line: 189
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 197,
            column: 2
          },
          end: {
            line: 197,
            column: 3
          }
        },
        loc: {
          start: {
            line: 197,
            column: 21
          },
          end: {
            line: 199,
            column: 3
          }
        },
        line: 197
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 200,
            column: 2
          },
          end: {
            line: 200,
            column: 3
          }
        },
        loc: {
          start: {
            line: 200,
            column: 26
          },
          end: {
            line: 202,
            column: 3
          }
        },
        line: 200
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 208,
            column: 2
          },
          end: {
            line: 208,
            column: 3
          }
        },
        loc: {
          start: {
            line: 208,
            column: 17
          },
          end: {
            line: 210,
            column: 3
          }
        },
        line: 208
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 212,
            column: 2
          },
          end: {
            line: 212,
            column: 3
          }
        },
        loc: {
          start: {
            line: 212,
            column: 22
          },
          end: {
            line: 214,
            column: 3
          }
        },
        line: 212
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 220,
            column: 2
          },
          end: {
            line: 220,
            column: 3
          }
        },
        loc: {
          start: {
            line: 220,
            column: 15
          },
          end: {
            line: 222,
            column: 3
          }
        },
        line: 220
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 224,
            column: 2
          },
          end: {
            line: 224,
            column: 3
          }
        },
        loc: {
          start: {
            line: 224,
            column: 20
          },
          end: {
            line: 226,
            column: 3
          }
        },
        line: 224
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 232,
            column: 2
          },
          end: {
            line: 232,
            column: 3
          }
        },
        loc: {
          start: {
            line: 232,
            column: 19
          },
          end: {
            line: 234,
            column: 3
          }
        },
        line: 232
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 236,
            column: 2
          },
          end: {
            line: 236,
            column: 3
          }
        },
        loc: {
          start: {
            line: 236,
            column: 24
          },
          end: {
            line: 238,
            column: 3
          }
        },
        line: 236
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 244,
            column: 2
          },
          end: {
            line: 244,
            column: 3
          }
        },
        loc: {
          start: {
            line: 244,
            column: 13
          },
          end: {
            line: 246,
            column: 3
          }
        },
        line: 244
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 248,
            column: 2
          },
          end: {
            line: 248,
            column: 3
          }
        },
        loc: {
          start: {
            line: 248,
            column: 18
          },
          end: {
            line: 250,
            column: 3
          }
        },
        line: 248
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 261,
            column: 2
          },
          end: {
            line: 261,
            column: 3
          }
        },
        loc: {
          start: {
            line: 261,
            column: 18
          },
          end: {
            line: 287,
            column: 3
          }
        },
        line: 261
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 293,
            column: 2
          },
          end: {
            line: 293,
            column: 3
          }
        },
        loc: {
          start: {
            line: 293,
            column: 15
          },
          end: {
            line: 322,
            column: 3
          }
        },
        line: 293
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 337,
            column: 2
          },
          end: {
            line: 337,
            column: 3
          }
        },
        loc: {
          start: {
            line: 337,
            column: 33
          },
          end: {
            line: 371,
            column: 3
          }
        },
        line: 337
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 41,
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
        line: 38
      },
      "1": {
        loc: {
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 53,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 53,
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
        line: 44
      },
      "2": {
        loc: {
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 47,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 46,
            column: 8
          },
          end: {
            line: 46,
            column: 60
          }
        }, {
          start: {
            line: 47,
            column: 8
          },
          end: {
            line: 47,
            column: 58
          }
        }],
        line: 46
      },
      "3": {
        loc: {
          start: {
            line: 58,
            column: 24
          },
          end: {
            line: 58,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 58,
            column: 24
          },
          end: {
            line: 58,
            column: 47
          }
        }, {
          start: {
            line: 58,
            column: 51
          },
          end: {
            line: 58,
            column: 53
          }
        }],
        line: 58
      },
      "4": {
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 67,
            column: 6
          },
          end: {
            line: 71,
            column: 14
          }
        }, {
          start: {
            line: 72,
            column: 6
          },
          end: {
            line: 74,
            column: 14
          }
        }],
        line: 66
      },
      "5": {
        loc: {
          start: {
            line: 79,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 80,
            column: 6
          },
          end: {
            line: 82,
            column: 14
          }
        }, {
          start: {
            line: 84,
            column: 6
          },
          end: {
            line: 98,
            column: 14
          }
        }, {
          start: {
            line: 100,
            column: 6
          },
          end: {
            line: 101,
            column: 14
          }
        }],
        line: 79
      },
      "6": {
        loc: {
          start: {
            line: 85,
            column: 8
          },
          end: {
            line: 97,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 86,
            column: 10
          },
          end: {
            line: 88,
            column: 18
          }
        }, {
          start: {
            line: 90,
            column: 10
          },
          end: {
            line: 93,
            column: 18
          }
        }, {
          start: {
            line: 95,
            column: 10
          },
          end: {
            line: 96,
            column: 18
          }
        }],
        line: 85
      },
      "7": {
        loc: {
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 104,
            column: 4
          },
          end: {
            line: 109,
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
        line: 104
      },
      "8": {
        loc: {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 128,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 128,
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
        line: 111
      },
      "9": {
        loc: {
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 118,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 6
          },
          end: {
            line: 118,
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
        line: 113
      },
      "10": {
        loc: {
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 123,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 121,
            column: 6
          },
          end: {
            line: 123,
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
        line: 121
      },
      "11": {
        loc: {
          start: {
            line: 130,
            column: 23
          },
          end: {
            line: 130,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 130,
            column: 23
          },
          end: {
            line: 130,
            column: 38
          }
        }, {
          start: {
            line: 130,
            column: 42
          },
          end: {
            line: 130,
            column: 44
          }
        }],
        line: 130
      },
      "12": {
        loc: {
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 276,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 266,
            column: 4
          },
          end: {
            line: 276,
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
        line: 266
      },
      "13": {
        loc: {
          start: {
            line: 298,
            column: 4
          },
          end: {
            line: 319,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 299,
            column: 6
          },
          end: {
            line: 306,
            column: 14
          }
        }, {
          start: {
            line: 307,
            column: 6
          },
          end: {
            line: 314,
            column: 14
          }
        }, {
          start: {
            line: 315,
            column: 6
          },
          end: {
            line: 318,
            column: 10
          }
        }],
        line: 298
      },
      "14": {
        loc: {
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 345,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 339,
            column: 4
          },
          end: {
            line: 345,
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
        line: 339
      },
      "15": {
        loc: {
          start: {
            line: 340,
            column: 6
          },
          end: {
            line: 342,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 340,
            column: 6
          },
          end: {
            line: 340,
            column: 32
          }
        }, {
          start: {
            line: 341,
            column: 6
          },
          end: {
            line: 341,
            column: 17
          }
        }, {
          start: {
            line: 342,
            column: 6
          },
          end: {
            line: 342,
            column: 39
          }
        }],
        line: 340
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
      "93": 0
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
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0],
      "6": [0, 0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0, 0],
      "14": [0, 0],
      "15": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "711f66f0bb3283cb42d3a0479d524191bc363e44"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1wxmir8xki = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1wxmir8xki();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Use {@link TransactionBuilder} to build a transaction object. If you have an
 * object or base64-encoded string of the transaction envelope XDR, use {@link
 * TransactionBuilder.fromXDR}.
 *
 * Once a Transaction has been created, its attributes and operations should not
 * be changed. You should only add signatures (using {@link Transaction#sign})
 * to a Transaction object before submitting to the network or forwarding on to
 * additional signers.
 *
 * @constructor
 *
 * @param {string|xdr.TransactionEnvelope} envelope - transaction envelope
 *     object or base64 encoded string
 * @param {string}  [networkPassphrase] - passphrase of the target stellar
 *     network (e.g. "Public Global Stellar Network ; September 2015")
 *
 * @extends TransactionBase
 */
var Transaction = /*#__PURE__*/function (_TransactionBase) {
  _inherits(Transaction, _TransactionBase);
  var _super = _createSuper(Transaction);
  function Transaction(envelope, networkPassphrase) {
    var _this;
    _classCallCheck(this, Transaction);
    cov_1wxmir8xki().f[0]++;
    cov_1wxmir8xki().s[0]++;
    if (typeof envelope === 'string') {
      cov_1wxmir8xki().b[0][0]++;
      var buffer = (cov_1wxmir8xki().s[1]++, _BrowserBuffer["default"].from(envelope, 'base64'));
      cov_1wxmir8xki().s[2]++;
      envelope = _xdr["default"].TransactionEnvelope.fromXDR(buffer);
    } else {
      cov_1wxmir8xki().b[0][1]++;
    }
    var envelopeType = (cov_1wxmir8xki().s[3]++, envelope["switch"]());
    cov_1wxmir8xki().s[4]++;
    if (!((cov_1wxmir8xki().b[2][0]++, envelopeType === _xdr["default"].EnvelopeType.envelopeTypeTxV0()) || (cov_1wxmir8xki().b[2][1]++, envelopeType === _xdr["default"].EnvelopeType.envelopeTypeTx()))) {
      cov_1wxmir8xki().b[1][0]++;
      cov_1wxmir8xki().s[5]++;
      throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an ".concat(envelopeType.name, "."));
    } else {
      cov_1wxmir8xki().b[1][1]++;
    }
    var txEnvelope = (cov_1wxmir8xki().s[6]++, envelope.value());
    var tx = (cov_1wxmir8xki().s[7]++, txEnvelope.tx());
    var fee = (cov_1wxmir8xki().s[8]++, tx.fee().toString());
    var signatures = (cov_1wxmir8xki().s[9]++, ((cov_1wxmir8xki().b[3][0]++, txEnvelope.signatures()) || (cov_1wxmir8xki().b[3][1]++, [])).slice());
    cov_1wxmir8xki().s[10]++;
    _this = _super.call(this, tx, signatures, fee, networkPassphrase);
    cov_1wxmir8xki().s[11]++;
    _this._envelopeType = envelopeType;
    cov_1wxmir8xki().s[12]++;
    _this._memo = tx.memo();
    cov_1wxmir8xki().s[13]++;
    _this._sequence = tx.seqNum().toString();
    cov_1wxmir8xki().s[14]++;
    switch (_this._envelopeType) {
      case _xdr["default"].EnvelopeType.envelopeTypeTxV0():
        cov_1wxmir8xki().b[4][0]++;
        cov_1wxmir8xki().s[15]++;
        _this._source = _strkey.StrKey.encodeEd25519PublicKey(_this.tx.sourceAccountEd25519());
        cov_1wxmir8xki().s[16]++;
        break;
      default:
        cov_1wxmir8xki().b[4][1]++;
        cov_1wxmir8xki().s[17]++;
        _this._source = (0, _decode_encode_muxed_account.encodeMuxedAccountToAddress)(_this.tx.sourceAccount());
        cov_1wxmir8xki().s[18]++;
        break;
    }
    var cond = (cov_1wxmir8xki().s[19]++, null);
    var timeBounds = (cov_1wxmir8xki().s[20]++, null);
    cov_1wxmir8xki().s[21]++;
    switch (_this._envelopeType) {
      case _xdr["default"].EnvelopeType.envelopeTypeTxV0():
        cov_1wxmir8xki().b[5][0]++;
        cov_1wxmir8xki().s[22]++;
        timeBounds = tx.timeBounds();
        cov_1wxmir8xki().s[23]++;
        break;
      case _xdr["default"].EnvelopeType.envelopeTypeTx():
        cov_1wxmir8xki().b[5][1]++;
        cov_1wxmir8xki().s[24]++;
        switch (tx.cond()["switch"]()) {
          case _xdr["default"].PreconditionType.precondTime():
            cov_1wxmir8xki().b[6][0]++;
            cov_1wxmir8xki().s[25]++;
            timeBounds = tx.cond().timeBounds();
            cov_1wxmir8xki().s[26]++;
            break;
          case _xdr["default"].PreconditionType.precondV2():
            cov_1wxmir8xki().b[6][1]++;
            cov_1wxmir8xki().s[27]++;
            cond = tx.cond().v2();
            cov_1wxmir8xki().s[28]++;
            timeBounds = cond.timeBounds();
            cov_1wxmir8xki().s[29]++;
            break;
          default:
            cov_1wxmir8xki().b[6][2]++;
            cov_1wxmir8xki().s[30]++;
            break;
        }
        cov_1wxmir8xki().s[31]++;
        break;
      default:
        cov_1wxmir8xki().b[5][2]++;
        cov_1wxmir8xki().s[32]++;
        break;
    }
    cov_1wxmir8xki().s[33]++;
    if (timeBounds) {
      cov_1wxmir8xki().b[7][0]++;
      cov_1wxmir8xki().s[34]++;
      _this._timeBounds = {
        minTime: timeBounds.minTime().toString(),
        maxTime: timeBounds.maxTime().toString()
      };
    } else {
      cov_1wxmir8xki().b[7][1]++;
    }
    cov_1wxmir8xki().s[35]++;
    if (cond) {
      cov_1wxmir8xki().b[8][0]++;
      var ledgerBounds = (cov_1wxmir8xki().s[36]++, cond.ledgerBounds());
      cov_1wxmir8xki().s[37]++;
      if (ledgerBounds) {
        cov_1wxmir8xki().b[9][0]++;
        cov_1wxmir8xki().s[38]++;
        _this._ledgerBounds = {
          minLedger: ledgerBounds.minLedger(),
          maxLedger: ledgerBounds.maxLedger()
        };
      } else {
        cov_1wxmir8xki().b[9][1]++;
      }
      var minSeq = (cov_1wxmir8xki().s[39]++, cond.minSeqNum());
      cov_1wxmir8xki().s[40]++;
      if (minSeq) {
        cov_1wxmir8xki().b[10][0]++;
        cov_1wxmir8xki().s[41]++;
        _this._minAccountSequence = minSeq.toString();
      } else {
        cov_1wxmir8xki().b[10][1]++;
      }
      cov_1wxmir8xki().s[42]++;
      _this._minAccountSequenceAge = cond.minSeqAge();
      cov_1wxmir8xki().s[43]++;
      _this._minAccountSequenceLedgerGap = cond.minSeqLedgerGap();
      cov_1wxmir8xki().s[44]++;
      _this._extraSigners = cond.extraSigners();
    } else {
      cov_1wxmir8xki().b[8][1]++;
    }
    var operations = (cov_1wxmir8xki().s[45]++, (cov_1wxmir8xki().b[11][0]++, tx.operations()) || (cov_1wxmir8xki().b[11][1]++, []));
    cov_1wxmir8xki().s[46]++;
    _this._operations = (0, _map["default"])(operations, function (op) {
      cov_1wxmir8xki().f[1]++;
      cov_1wxmir8xki().s[47]++;
      return _operation.Operation.fromXDRObject(op);
    });
    return _this;
  }

  /**
   * @type {object}
   * @property {string} 64 bit unix timestamp
   * @property {string} 64 bit unix timestamp
   * @readonly
   */
  _createClass(Transaction, [{
    key: "timeBounds",
    get: function get() {
      cov_1wxmir8xki().f[2]++;
      cov_1wxmir8xki().s[48]++;
      return this._timeBounds;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[3]++;
      cov_1wxmir8xki().s[49]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {object}
     * @property {number} minLedger - smallest ledger bound (uint32)
     * @property {number} maxLedger - largest ledger bound (or 0 for inf)
     * @readonly
     */
  }, {
    key: "ledgerBounds",
    get: function get() {
      cov_1wxmir8xki().f[4]++;
      cov_1wxmir8xki().s[50]++;
      return this._ledgerBounds;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[5]++;
      cov_1wxmir8xki().s[51]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string} 64 bit account sequence
     * @readonly
     */
  }, {
    key: "minAccountSequence",
    get: function get() {
      cov_1wxmir8xki().f[6]++;
      cov_1wxmir8xki().s[52]++;
      return this._minAccountSequence;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[7]++;
      cov_1wxmir8xki().s[53]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {number} 64 bit number of seconds
     * @readonly
     */
  }, {
    key: "minAccountSequenceAge",
    get: function get() {
      cov_1wxmir8xki().f[8]++;
      cov_1wxmir8xki().s[54]++;
      return this._minAccountSequenceAge;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[9]++;
      cov_1wxmir8xki().s[55]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {number} 32 bit number of ledgers
     * @readonly
     */
  }, {
    key: "minAccountSequenceLedgerGap",
    get: function get() {
      cov_1wxmir8xki().f[10]++;
      cov_1wxmir8xki().s[56]++;
      return this._minAccountSequenceLedgerGap;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[11]++;
      cov_1wxmir8xki().s[57]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string[]}   array of extra signers (@{link StrKey}s)
     * @readonly
     */
  }, {
    key: "extraSigners",
    get: function get() {
      cov_1wxmir8xki().f[12]++;
      cov_1wxmir8xki().s[58]++;
      return this._extraSigners;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[13]++;
      cov_1wxmir8xki().s[59]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "sequence",
    get: function get() {
      cov_1wxmir8xki().f[14]++;
      cov_1wxmir8xki().s[60]++;
      return this._sequence;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[15]++;
      cov_1wxmir8xki().s[61]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "source",
    get: function get() {
      cov_1wxmir8xki().f[16]++;
      cov_1wxmir8xki().s[62]++;
      return this._source;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[17]++;
      cov_1wxmir8xki().s[63]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {Array.<xdr.Operation>}
     * @readonly
     */
  }, {
    key: "operations",
    get: function get() {
      cov_1wxmir8xki().f[18]++;
      cov_1wxmir8xki().s[64]++;
      return this._operations;
    },
    set: function set(value) {
      cov_1wxmir8xki().f[19]++;
      cov_1wxmir8xki().s[65]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * @type {string}
     * @readonly
     */
  }, {
    key: "memo",
    get: function get() {
      cov_1wxmir8xki().f[20]++;
      cov_1wxmir8xki().s[66]++;
      return _memo.Memo.fromXDRObject(this._memo);
    },
    set: function set(value) {
      cov_1wxmir8xki().f[21]++;
      cov_1wxmir8xki().s[67]++;
      throw new Error('Transaction is immutable');
    }

    /**
     * Returns the "signature base" of this transaction, which is the value
     * that, when hashed, should be signed to create a signature that
     * validators on the Stellar Network will accept.
     *
     * It is composed of a 4 prefix bytes followed by the xdr-encoded form
     * of this transaction.
     * @returns {Buffer}
     */
  }, {
    key: "signatureBase",
    value: function signatureBase() {
      cov_1wxmir8xki().f[22]++;
      var tx = (cov_1wxmir8xki().s[68]++, this.tx);

      // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
      // we need a Transaction to generate the signature base
      cov_1wxmir8xki().s[69]++;
      if (this._envelopeType === _xdr["default"].EnvelopeType.envelopeTypeTxV0()) {
        cov_1wxmir8xki().b[12][0]++;
        cov_1wxmir8xki().s[70]++;
        tx = _xdr["default"].Transaction.fromXDR(_BrowserBuffer["default"].concat([
        // TransactionV0 is a transaction with the AccountID discriminant
        // stripped off, we need to put it back to build a valid transaction
        // which we can use to build a TransactionSignaturePayloadTaggedTransaction
        _xdr["default"].PublicKeyType.publicKeyTypeEd25519().toXDR(), tx.toXDR()]));
      } else {
        cov_1wxmir8xki().b[12][1]++;
      }
      var taggedTransaction = (cov_1wxmir8xki().s[71]++, new _xdr["default"].TransactionSignaturePayloadTaggedTransaction.envelopeTypeTx(tx));
      var txSignature = (cov_1wxmir8xki().s[72]++, new _xdr["default"].TransactionSignaturePayload({
        networkId: _xdr["default"].Hash.fromXDR((0, _hashing.hash)(this.networkPassphrase)),
        taggedTransaction: taggedTransaction
      }));
      cov_1wxmir8xki().s[73]++;
      return txSignature.toXDR();
    }

    /**
     * To envelope returns a xdr.TransactionEnvelope which can be submitted to the network.
     * @returns {xdr.TransactionEnvelope}
     */
  }, {
    key: "toEnvelope",
    value: function toEnvelope() {
      cov_1wxmir8xki().f[23]++;
      var rawTx = (cov_1wxmir8xki().s[74]++, this.tx.toXDR());
      var signatures = (cov_1wxmir8xki().s[75]++, this.signatures.slice()); // make a copy of the signatures

      var envelope;
      cov_1wxmir8xki().s[76]++;
      switch (this._envelopeType) {
        case _xdr["default"].EnvelopeType.envelopeTypeTxV0():
          cov_1wxmir8xki().b[13][0]++;
          cov_1wxmir8xki().s[77]++;
          envelope = new _xdr["default"].TransactionEnvelope.envelopeTypeTxV0(new _xdr["default"].TransactionV0Envelope({
            tx: _xdr["default"].TransactionV0.fromXDR(rawTx),
            // make a copy of tx
            signatures: signatures
          }));
          cov_1wxmir8xki().s[78]++;
          break;
        case _xdr["default"].EnvelopeType.envelopeTypeTx():
          cov_1wxmir8xki().b[13][1]++;
          cov_1wxmir8xki().s[79]++;
          envelope = new _xdr["default"].TransactionEnvelope.envelopeTypeTx(new _xdr["default"].TransactionV1Envelope({
            tx: _xdr["default"].Transaction.fromXDR(rawTx),
            // make a copy of tx
            signatures: signatures
          }));
          cov_1wxmir8xki().s[80]++;
          break;
        default:
          cov_1wxmir8xki().b[13][2]++;
          cov_1wxmir8xki().s[81]++;
          throw new Error("Invalid TransactionEnvelope: expected an envelopeTypeTxV0 or envelopeTypeTx but received an ".concat(this._envelopeType.name, "."));
      }
      cov_1wxmir8xki().s[82]++;
      return envelope;
    }

    /**
     * Calculate the claimable balance ID for an operation within the transaction.
     *
     * @param   {integer}  opIndex   the index of the CreateClaimableBalance op
     * @returns {string}   a hex string representing the claimable balance ID
     *
     * @throws {RangeError}   for invalid `opIndex` value
     * @throws {TypeError}    if op at `opIndex` is not `CreateClaimableBalance`
     * @throws for general XDR un/marshalling failures
     *
     * @see https://github.com/stellar/go/blob/d712346e61e288d450b0c08038c158f8848cc3e4/txnbuild/transaction.go#L392-L435
     *
     */
  }, {
    key: "getClaimableBalanceId",
    value: function getClaimableBalanceId(opIndex) {
      cov_1wxmir8xki().f[24]++;
      cov_1wxmir8xki().s[83]++;
      // Validate and then extract the operation from the transaction.
      if ((cov_1wxmir8xki().b[15][0]++, !Number.isInteger(opIndex)) || (cov_1wxmir8xki().b[15][1]++, opIndex < 0) || (cov_1wxmir8xki().b[15][2]++, opIndex >= this.operations.length)) {
        cov_1wxmir8xki().b[14][0]++;
        cov_1wxmir8xki().s[84]++;
        throw new RangeError('invalid operation index');
      } else {
        cov_1wxmir8xki().b[14][1]++;
      }
      var op = (cov_1wxmir8xki().s[85]++, this.operations[opIndex]);
      cov_1wxmir8xki().s[86]++;
      try {
        cov_1wxmir8xki().s[87]++;
        op = _operation.Operation.createClaimableBalance(op);
      } catch (err) {
        cov_1wxmir8xki().s[88]++;
        throw new TypeError("expected createClaimableBalance, got ".concat(op.type, ": ").concat(err));
      }

      // Always use the transaction's *unmuxed* source.
      var account = (cov_1wxmir8xki().s[89]++, _strkey.StrKey.decodeEd25519PublicKey((0, _decode_encode_muxed_account.extractBaseAddress)(this.source)));
      var operationId = (cov_1wxmir8xki().s[90]++, _xdr["default"].HashIdPreimage.envelopeTypeOpId(new _xdr["default"].HashIdPreimageOperationId({
        sourceAccount: _xdr["default"].AccountId.publicKeyTypeEd25519(account),
        seqNum: _xdr["default"].SequenceNumber.fromString(this.sequence),
        opNum: opIndex
      })));
      var opIdHash = (cov_1wxmir8xki().s[91]++, (0, _hashing.hash)(operationId.toXDR('raw')));
      var balanceId = (cov_1wxmir8xki().s[92]++, _xdr["default"].ClaimableBalanceId.claimableBalanceIdTypeV0(opIdHash));
      cov_1wxmir8xki().s[93]++;
      return balanceId.toXDR('hex');
    }
  }]);
  return Transaction;
}(_transaction_base.TransactionBase);
exports.Transaction = Transaction;