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
function cov_20palfju0r() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\keypair.js";
  var hash = "869fee22bbe24c961b2fd4be9d16085c351120c4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\keypair.js",
    statementMap: {
      "0": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 37,
          column: 5
        }
      },
      "1": {
        start: {
          line: 36,
          column: 6
        },
        end: {
          line: 36,
          column: 43
        }
      },
      "2": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 26
        }
      },
      "3": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 65,
          column: 5
        }
      },
      "4": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 58
        }
      },
      "5": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 47,
          column: 7
        }
      },
      "6": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 55
        }
      },
      "7": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 49,
          column: 40
        }
      },
      "8": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 49
        }
      },
      "9": {
        start: {
          line: 51,
          column: 6
        },
        end: {
          line: 51,
          column: 80
        }
      },
      "10": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 58,
          column: 7
        }
      },
      "11": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 62
        }
      },
      "12": {
        start: {
          line: 60,
          column: 6
        },
        end: {
          line: 60,
          column: 59
        }
      },
      "13": {
        start: {
          line: 62,
          column: 6
        },
        end: {
          line: 64,
          column: 7
        }
      },
      "14": {
        start: {
          line: 63,
          column: 8
        },
        end: {
          line: 63,
          column: 55
        }
      },
      "15": {
        start: {
          line: 75,
          column: 22
        },
        end: {
          line: 75,
          column: 60
        }
      },
      "16": {
        start: {
          line: 76,
          column: 4
        },
        end: {
          line: 76,
          column: 46
        }
      },
      "17": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 61
        }
      },
      "18": {
        start: {
          line: 95,
          column: 4
        },
        end: {
          line: 99,
          column: 5
        }
      },
      "19": {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 98,
          column: 8
        }
      },
      "20": {
        start: {
          line: 101,
          column: 4
        },
        end: {
          line: 101,
          column: 60
        }
      },
      "21": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 57
        }
      },
      "22": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 113,
          column: 5
        }
      },
      "23": {
        start: {
          line: 112,
          column: 6
        },
        end: {
          line: 112,
          column: 52
        }
      },
      "24": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 52
        }
      },
      "25": {
        start: {
          line: 122,
          column: 19
        },
        end: {
          line: 122,
          column: 39
        }
      },
      "26": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 123,
          column: 43
        }
      },
      "27": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 67
        }
      },
      "28": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 67
        }
      },
      "29": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 157,
          column: 5
        }
      },
      "30": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 149,
          column: 7
        }
      },
      "31": {
        start: {
          line: 148,
          column: 8
        },
        end: {
          line: 148,
          column: 72
        }
      },
      "32": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 156,
          column: 8
        }
      },
      "33": {
        start: {
          line: 159,
          column: 4
        },
        end: {
          line: 159,
          column: 64
        }
      },
      "34": {
        start: {
          line: 167,
          column: 4
        },
        end: {
          line: 167,
          column: 27
        }
      },
      "35": {
        start: {
          line: 171,
          column: 14
        },
        end: {
          line: 171,
          column: 41
        }
      },
      "36": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 33
        }
      },
      "37": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 181,
          column: 58
        }
      },
      "38": {
        start: {
          line: 189,
          column: 4
        },
        end: {
          line: 191,
          column: 5
        }
      },
      "39": {
        start: {
          line: 190,
          column: 6
        },
        end: {
          line: 190,
          column: 49
        }
      },
      "40": {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 195,
          column: 5
        }
      },
      "41": {
        start: {
          line: 194,
          column: 6
        },
        end: {
          line: 194,
          column: 62
        }
      },
      "42": {
        start: {
          line: 197,
          column: 4
        },
        end: {
          line: 197,
          column: 44
        }
      },
      "43": {
        start: {
          line: 205,
          column: 4
        },
        end: {
          line: 205,
          column: 28
        }
      },
      "44": {
        start: {
          line: 213,
          column: 4
        },
        end: {
          line: 213,
          column: 29
        }
      },
      "45": {
        start: {
          line: 222,
          column: 4
        },
        end: {
          line: 224,
          column: 5
        }
      },
      "46": {
        start: {
          line: 223,
          column: 6
        },
        end: {
          line: 223,
          column: 62
        }
      },
      "47": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 226,
          column: 39
        }
      },
      "48": {
        start: {
          line: 236,
          column: 4
        },
        end: {
          line: 236,
          column: 52
        }
      },
      "49": {
        start: {
          line: 249,
          column: 22
        },
        end: {
          line: 249,
          column: 37
        }
      },
      "50": {
        start: {
          line: 250,
          column: 17
        },
        end: {
          line: 250,
          column: 37
        }
      },
      "51": {
        start: {
          line: 252,
          column: 4
        },
        end: {
          line: 252,
          column: 59
        }
      },
      "52": {
        start: {
          line: 268,
          column: 22
        },
        end: {
          line: 268,
          column: 37
        }
      },
      "53": {
        start: {
          line: 269,
          column: 20
        },
        end: {
          line: 269,
          column: 40
        }
      },
      "54": {
        start: {
          line: 271,
          column: 15
        },
        end: {
          line: 271,
          column: 49
        }
      },
      "55": {
        start: {
          line: 272,
          column: 4
        },
        end: {
          line: 275,
          column: 5
        }
      },
      "56": {
        start: {
          line: 274,
          column: 6
        },
        end: {
          line: 274,
          column: 83
        }
      },
      "57": {
        start: {
          line: 277,
          column: 4
        },
        end: {
          line: 280,
          column: 7
        }
      },
      "58": {
        start: {
          line: 278,
          column: 34
        },
        end: {
          line: 278,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 34,
            column: 2
          },
          end: {
            line: 34,
            column: 3
          }
        },
        loc: {
          start: {
            line: 34,
            column: 20
          },
          end: {
            line: 66,
            column: 3
          }
        },
        line: 34
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 74,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        loc: {
          start: {
            line: 74,
            column: 28
          },
          end: {
            line: 77,
            column: 3
          }
        },
        line: 74
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 85,
            column: 2
          },
          end: {
            line: 85,
            column: 3
          }
        },
        loc: {
          start: {
            line: 85,
            column: 37
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 85
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 94,
            column: 2
          },
          end: {
            line: 94,
            column: 3
          }
        },
        loc: {
          start: {
            line: 94,
            column: 35
          },
          end: {
            line: 102,
            column: 3
          }
        },
        line: 94
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 34
          },
          end: {
            line: 115,
            column: 3
          }
        },
        line: 109
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 121,
            column: 2
          },
          end: {
            line: 121,
            column: 3
          }
        },
        loc: {
          start: {
            line: 121,
            column: 18
          },
          end: {
            line: 124,
            column: 3
          }
        },
        line: 121
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 126,
            column: 2
          },
          end: {
            line: 126,
            column: 3
          }
        },
        loc: {
          start: {
            line: 126,
            column: 17
          },
          end: {
            line: 128,
            column: 3
          }
        },
        line: 126
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 130,
            column: 2
          },
          end: {
            line: 130,
            column: 3
          }
        },
        loc: {
          start: {
            line: 130,
            column: 17
          },
          end: {
            line: 132,
            column: 3
          }
        },
        line: 130
      },
      "8": {
        name: "(anonymous_8)",
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
            column: 22
          },
          end: {
            line: 160,
            column: 3
          }
        },
        line: 145
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 166,
            column: 2
          },
          end: {
            line: 166,
            column: 3
          }
        },
        loc: {
          start: {
            line: 166,
            column: 17
          },
          end: {
            line: 168,
            column: 3
          }
        },
        line: 166
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 170,
            column: 2
          },
          end: {
            line: 170,
            column: 3
          }
        },
        loc: {
          start: {
            line: 170,
            column: 18
          },
          end: {
            line: 174,
            column: 3
          }
        },
        line: 170
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 180,
            column: 2
          },
          end: {
            line: 180,
            column: 3
          }
        },
        loc: {
          start: {
            line: 180,
            column: 14
          },
          end: {
            line: 182,
            column: 3
          }
        },
        line: 180
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 188,
            column: 2
          },
          end: {
            line: 188,
            column: 3
          }
        },
        loc: {
          start: {
            line: 188,
            column: 11
          },
          end: {
            line: 198,
            column: 3
          }
        },
        line: 188
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 204,
            column: 2
          },
          end: {
            line: 204,
            column: 3
          }
        },
        loc: {
          start: {
            line: 204,
            column: 17
          },
          end: {
            line: 206,
            column: 3
          }
        },
        line: 204
      },
      "14": {
        name: "(anonymous_14)",
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
            column: 12
          },
          end: {
            line: 214,
            column: 3
          }
        },
        line: 212
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 221,
            column: 2
          },
          end: {
            line: 221,
            column: 3
          }
        },
        loc: {
          start: {
            line: 221,
            column: 13
          },
          end: {
            line: 227,
            column: 3
          }
        },
        line: 221
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 235,
            column: 2
          },
          end: {
            line: 235,
            column: 3
          }
        },
        loc: {
          start: {
            line: 235,
            column: 26
          },
          end: {
            line: 237,
            column: 3
          }
        },
        line: 235
      },
      "17": {
        name: "(anonymous_17)",
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
            column: 22
          },
          end: {
            line: 253,
            column: 3
          }
        },
        line: 248
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 267,
            column: 2
          },
          end: {
            line: 267,
            column: 3
          }
        },
        loc: {
          start: {
            line: 267,
            column: 29
          },
          end: {
            line: 281,
            column: 3
          }
        },
        line: 267
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 278,
            column: 21
          },
          end: {
            line: 278,
            column: 22
          }
        },
        loc: {
          start: {
            line: 278,
            column: 34
          },
          end: {
            line: 278,
            column: 51
          }
        },
        line: 278
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 37,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 37,
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
        line: 35
      },
      "1": {
        loc: {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        }, {
          start: {
            line: 59,
            column: 11
          },
          end: {
            line: 65,
            column: 5
          }
        }],
        line: 41
      },
      "2": {
        loc: {
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 47,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 45,
            column: 6
          },
          end: {
            line: 47,
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
        line: 45
      },
      "3": {
        loc: {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 58,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 58,
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
        line: 53
      },
      "4": {
        loc: {
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 55,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 54,
            column: 8
          },
          end: {
            line: 54,
            column: 22
          }
        }, {
          start: {
            line: 55,
            column: 8
          },
          end: {
            line: 55,
            column: 67
          }
        }],
        line: 54
      },
      "5": {
        loc: {
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 64,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 62,
            column: 6
          },
          end: {
            line: 64,
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
        line: 62
      },
      "6": {
        loc: {
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 99,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 95,
            column: 4
          },
          end: {
            line: 99,
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
        line: 95
      },
      "7": {
        loc: {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 113,
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
            line: 113,
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
      "8": {
        loc: {
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 157,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 146,
            column: 4
          },
          end: {
            line: 157,
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
        line: 146
      },
      "9": {
        loc: {
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 149,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 147,
            column: 6
          },
          end: {
            line: 149,
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
        line: 147
      },
      "10": {
        loc: {
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 191,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 189,
            column: 4
          },
          end: {
            line: 191,
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
        line: 189
      },
      "11": {
        loc: {
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 195,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 195,
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
        line: 193
      },
      "12": {
        loc: {
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 224,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 222,
            column: 4
          },
          end: {
            line: 224,
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
        line: 222
      },
      "13": {
        loc: {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 275,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 275,
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
        line: 272
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
      "58": 0
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
      "19": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
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
      "13": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "869fee22bbe24c961b2fd4be9d16085c351120c4"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20palfju0r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_20palfju0r();
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
    cov_20palfju0r().f[0]++;
    cov_20palfju0r().s[0]++;
    if (keys.type !== 'ed25519') {
      cov_20palfju0r().b[0][0]++;
      cov_20palfju0r().s[1]++;
      throw new Error('Invalid keys type');
    } else {
      cov_20palfju0r().b[0][1]++;
    }
    cov_20palfju0r().s[2]++;
    this.type = keys.type;
    cov_20palfju0r().s[3]++;
    if (keys.secretKey) {
      cov_20palfju0r().b[1][0]++;
      cov_20palfju0r().s[4]++;
      // Probably should make a copy here...
      keys.secretKey = _BrowserBuffer["default"].from(keys.secretKey);
      cov_20palfju0r().s[5]++;
      if (keys.secretKey.length !== 32) {
        cov_20palfju0r().b[2][0]++;
        cov_20palfju0r().s[6]++;
        throw new Error('secretKey length is invalid');
      } else {
        cov_20palfju0r().b[2][1]++;
      }
      cov_20palfju0r().s[7]++;
      this._secretSeed = keys.secretKey;
      cov_20palfju0r().s[8]++;
      this._publicKey = (0, _signing.generate)(keys.secretKey);
      cov_20palfju0r().s[9]++;
      this._secretKey = _BrowserBuffer["default"].concat([keys.secretKey, this._publicKey]);
      cov_20palfju0r().s[10]++;
      if ((cov_20palfju0r().b[4][0]++, keys.publicKey) && (cov_20palfju0r().b[4][1]++, !this._publicKey.equals(_BrowserBuffer["default"].from(keys.publicKey)))) {
        cov_20palfju0r().b[3][0]++;
        cov_20palfju0r().s[11]++;
        throw new Error('secretKey does not match publicKey');
      } else {
        cov_20palfju0r().b[3][1]++;
      }
    } else {
      cov_20palfju0r().b[1][1]++;
      cov_20palfju0r().s[12]++;
      this._publicKey = _BrowserBuffer["default"].from(keys.publicKey);
      cov_20palfju0r().s[13]++;
      if (this._publicKey.length !== 32) {
        cov_20palfju0r().b[5][0]++;
        cov_20palfju0r().s[14]++;
        throw new Error('publicKey length is invalid');
      } else {
        cov_20palfju0r().b[5][1]++;
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
      cov_20palfju0r().f[6]++;
      cov_20palfju0r().s[27]++;
      return new _xdr["default"].AccountId.publicKeyTypeEd25519(this._publicKey);
    }
  }, {
    key: "xdrPublicKey",
    value: function xdrPublicKey() {
      cov_20palfju0r().f[7]++;
      cov_20palfju0r().s[28]++;
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
      cov_20palfju0r().f[8]++;
      cov_20palfju0r().s[29]++;
      if (!(0, _isUndefined["default"])(id)) {
        cov_20palfju0r().b[8][0]++;
        cov_20palfju0r().s[30]++;
        if (!(0, _isString["default"])(id)) {
          cov_20palfju0r().b[9][0]++;
          cov_20palfju0r().s[31]++;
          throw new TypeError("expected string for ID, got ".concat(_typeof(id)));
        } else {
          cov_20palfju0r().b[9][1]++;
        }
        cov_20palfju0r().s[32]++;
        return _xdr["default"].MuxedAccount.keyTypeMuxedEd25519(new _xdr["default"].MuxedAccountMed25519({
          id: _xdr["default"].Uint64.fromString(id),
          ed25519: this._publicKey
        }));
      } else {
        cov_20palfju0r().b[8][1]++;
      }
      cov_20palfju0r().s[33]++;
      return new _xdr["default"].MuxedAccount.keyTypeEd25519(this._publicKey);
    }

    /**
     * Returns raw public key
     * @returns {Uint8Array}
     */
  }, {
    key: "rawPublicKey",
    value: function rawPublicKey() {
      cov_20palfju0r().f[9]++;
      cov_20palfju0r().s[34]++;
      return this._publicKey;
    }
  }, {
    key: "signatureHint",
    value: function signatureHint() {
      cov_20palfju0r().f[10]++;
      var a = (cov_20palfju0r().s[35]++, this.xdrAccountId().toXDR());
      cov_20palfju0r().s[36]++;
      return a.slice(a.length - 4);
    }

    /**
     * Returns public key associated with this `Keypair` object.
     * @returns {string}
     */
  }, {
    key: "publicKey",
    value: function publicKey() {
      cov_20palfju0r().f[11]++;
      cov_20palfju0r().s[37]++;
      return _strkey.StrKey.encodeEd25519PublicKey(this._publicKey);
    }

    /**
     * Returns secret key associated with this `Keypair` object
     * @returns {string}
     */
  }, {
    key: "secret",
    value: function secret() {
      cov_20palfju0r().f[12]++;
      cov_20palfju0r().s[38]++;
      if (!this._secretSeed) {
        cov_20palfju0r().b[10][0]++;
        cov_20palfju0r().s[39]++;
        throw new Error('no secret key available');
      } else {
        cov_20palfju0r().b[10][1]++;
      }
      cov_20palfju0r().s[40]++;
      if (this.type === 'ed25519') {
        cov_20palfju0r().b[11][0]++;
        cov_20palfju0r().s[41]++;
        return _strkey.StrKey.encodeEd25519SecretSeed(this._secretSeed);
      } else {
        cov_20palfju0r().b[11][1]++;
      }
      cov_20palfju0r().s[42]++;
      throw new Error('Invalid Keypair type');
    }

    /**
     * Returns raw secret key.
     * @returns {Uint8Array}
     */
  }, {
    key: "rawSecretKey",
    value: function rawSecretKey() {
      cov_20palfju0r().f[13]++;
      cov_20palfju0r().s[43]++;
      return this._secretSeed;
    }

    /**
     * Returns `true` if this `Keypair` object contains secret key and can sign.
     * @returns {boolean}
     */
  }, {
    key: "canSign",
    value: function canSign() {
      cov_20palfju0r().f[14]++;
      cov_20palfju0r().s[44]++;
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
      cov_20palfju0r().f[15]++;
      cov_20palfju0r().s[45]++;
      if (!this.canSign()) {
        cov_20palfju0r().b[12][0]++;
        cov_20palfju0r().s[46]++;
        throw new Error('cannot sign: no secret key available');
      } else {
        cov_20palfju0r().b[12][1]++;
      }
      cov_20palfju0r().s[47]++;
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
      cov_20palfju0r().f[16]++;
      cov_20palfju0r().s[48]++;
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
      cov_20palfju0r().f[17]++;
      var signature = (cov_20palfju0r().s[49]++, this.sign(data));
      var hint = (cov_20palfju0r().s[50]++, this.signatureHint());
      cov_20palfju0r().s[51]++;
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
      cov_20palfju0r().f[18]++;
      var signature = (cov_20palfju0r().s[52]++, this.sign(data));
      var keyHint = (cov_20palfju0r().s[53]++, this.signatureHint());
      var hint = (cov_20palfju0r().s[54]++, _BrowserBuffer["default"].from(data.slice(-4)));
      cov_20palfju0r().s[55]++;
      if (hint.length < 4) {
        cov_20palfju0r().b[13][0]++;
        cov_20palfju0r().s[56]++;
        // append zeroes as needed
        hint = _BrowserBuffer["default"].concat([hint, _BrowserBuffer["default"].alloc(4 - data.length, 0)]);
      } else {
        cov_20palfju0r().b[13][1]++;
      }
      cov_20palfju0r().s[57]++;
      return new _xdr["default"].DecoratedSignature({
        hint: hint.map(function (_byte, i) {
          cov_20palfju0r().f[19]++;
          cov_20palfju0r().s[58]++;
          return _byte ^ keyHint[i];
        }),
        signature: signature
      });
    }
  }], [{
    key: "fromSecret",
    value: function fromSecret(secret) {
      cov_20palfju0r().f[1]++;
      var rawSecret = (cov_20palfju0r().s[15]++, _strkey.StrKey.decodeEd25519SecretSeed(secret));
      cov_20palfju0r().s[16]++;
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
      cov_20palfju0r().f[2]++;
      cov_20palfju0r().s[17]++;
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
      cov_20palfju0r().f[3]++;
      cov_20palfju0r().s[18]++;
      if (!networkPassphrase) {
        cov_20palfju0r().b[6][0]++;
        cov_20palfju0r().s[19]++;
        throw new Error('No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`.');
      } else {
        cov_20palfju0r().b[6][1]++;
      }
      cov_20palfju0r().s[20]++;
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
      cov_20palfju0r().f[4]++;
      cov_20palfju0r().s[21]++;
      publicKey = _strkey.StrKey.decodeEd25519PublicKey(publicKey);
      cov_20palfju0r().s[22]++;
      if (publicKey.length !== 32) {
        cov_20palfju0r().b[7][0]++;
        cov_20palfju0r().s[23]++;
        throw new Error('Invalid Stellar public key');
      } else {
        cov_20palfju0r().b[7][1]++;
      }
      cov_20palfju0r().s[24]++;
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
      cov_20palfju0r().f[5]++;
      var secret = (cov_20palfju0r().s[25]++, _tweetnacl["default"].randomBytes(32));
      cov_20palfju0r().s[26]++;
      return this.fromRawEd25519Seed(secret);
    }
  }]);
  return Keypair;
}();
exports.Keypair = Keypair;