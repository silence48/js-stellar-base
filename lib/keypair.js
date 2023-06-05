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
  var hash = "12449611c1bb92b61c43cb71c2383ec75a713129";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\keypair.js",
    statementMap: {
      "0": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "1": {
        start: {
          line: 35,
          column: 6
        },
        end: {
          line: 35,
          column: 43
        }
      },
      "2": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 26
        }
      },
      "3": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 69,
          column: 5
        }
      },
      "4": {
        start: {
          line: 42,
          column: 6
        },
        end: {
          line: 42,
          column: 33
        }
      },
      "5": {
        start: {
          line: 43,
          column: 6
        },
        end: {
          line: 43,
          column: 40
        }
      },
      "6": {
        start: {
          line: 44,
          column: 22
        },
        end: {
          line: 44,
          column: 42
        }
      },
      "7": {
        start: {
          line: 47,
          column: 6
        },
        end: {
          line: 47,
          column: 58
        }
      },
      "8": {
        start: {
          line: 49,
          column: 6
        },
        end: {
          line: 51,
          column: 7
        }
      },
      "9": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 55
        }
      },
      "10": {
        start: {
          line: 53,
          column: 6
        },
        end: {
          line: 53,
          column: 40
        }
      },
      "11": {
        start: {
          line: 54,
          column: 6
        },
        end: {
          line: 54,
          column: 49
        }
      },
      "12": {
        start: {
          line: 55,
          column: 6
        },
        end: {
          line: 55,
          column: 80
        }
      },
      "13": {
        start: {
          line: 57,
          column: 6
        },
        end: {
          line: 62,
          column: 7
        }
      },
      "14": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 61,
          column: 62
        }
      },
      "15": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 59
        }
      },
      "16": {
        start: {
          line: 66,
          column: 6
        },
        end: {
          line: 68,
          column: 7
        }
      },
      "17": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 55
        }
      },
      "18": {
        start: {
          line: 79,
          column: 22
        },
        end: {
          line: 79,
          column: 60
        }
      },
      "19": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 46
        }
      },
      "20": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 90,
          column: 61
        }
      },
      "21": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 103,
          column: 5
        }
      },
      "22": {
        start: {
          line: 100,
          column: 6
        },
        end: {
          line: 102,
          column: 8
        }
      },
      "23": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 105,
          column: 60
        }
      },
      "24": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 57
        }
      },
      "25": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 117,
          column: 5
        }
      },
      "26": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 116,
          column: 52
        }
      },
      "27": {
        start: {
          line: 118,
          column: 4
        },
        end: {
          line: 118,
          column: 52
        }
      },
      "28": {
        start: {
          line: 126,
          column: 19
        },
        end: {
          line: 126,
          column: 39
        }
      },
      "29": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 43
        }
      },
      "30": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 67
        }
      },
      "31": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 67
        }
      },
      "32": {
        start: {
          line: 150,
          column: 4
        },
        end: {
          line: 161,
          column: 5
        }
      },
      "33": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 153,
          column: 7
        }
      },
      "34": {
        start: {
          line: 152,
          column: 8
        },
        end: {
          line: 152,
          column: 72
        }
      },
      "35": {
        start: {
          line: 155,
          column: 6
        },
        end: {
          line: 160,
          column: 8
        }
      },
      "36": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 163,
          column: 64
        }
      },
      "37": {
        start: {
          line: 171,
          column: 4
        },
        end: {
          line: 171,
          column: 27
        }
      },
      "38": {
        start: {
          line: 175,
          column: 14
        },
        end: {
          line: 175,
          column: 41
        }
      },
      "39": {
        start: {
          line: 177,
          column: 4
        },
        end: {
          line: 177,
          column: 33
        }
      },
      "40": {
        start: {
          line: 185,
          column: 4
        },
        end: {
          line: 185,
          column: 58
        }
      },
      "41": {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 195,
          column: 5
        }
      },
      "42": {
        start: {
          line: 194,
          column: 6
        },
        end: {
          line: 194,
          column: 49
        }
      },
      "43": {
        start: {
          line: 197,
          column: 4
        },
        end: {
          line: 199,
          column: 5
        }
      },
      "44": {
        start: {
          line: 198,
          column: 6
        },
        end: {
          line: 198,
          column: 62
        }
      },
      "45": {
        start: {
          line: 201,
          column: 4
        },
        end: {
          line: 201,
          column: 44
        }
      },
      "46": {
        start: {
          line: 209,
          column: 4
        },
        end: {
          line: 209,
          column: 28
        }
      },
      "47": {
        start: {
          line: 217,
          column: 4
        },
        end: {
          line: 217,
          column: 29
        }
      },
      "48": {
        start: {
          line: 226,
          column: 4
        },
        end: {
          line: 228,
          column: 5
        }
      },
      "49": {
        start: {
          line: 227,
          column: 6
        },
        end: {
          line: 227,
          column: 62
        }
      },
      "50": {
        start: {
          line: 230,
          column: 4
        },
        end: {
          line: 230,
          column: 39
        }
      },
      "51": {
        start: {
          line: 240,
          column: 4
        },
        end: {
          line: 240,
          column: 52
        }
      },
      "52": {
        start: {
          line: 253,
          column: 22
        },
        end: {
          line: 253,
          column: 37
        }
      },
      "53": {
        start: {
          line: 254,
          column: 17
        },
        end: {
          line: 254,
          column: 37
        }
      },
      "54": {
        start: {
          line: 256,
          column: 4
        },
        end: {
          line: 256,
          column: 59
        }
      },
      "55": {
        start: {
          line: 272,
          column: 22
        },
        end: {
          line: 272,
          column: 37
        }
      },
      "56": {
        start: {
          line: 273,
          column: 20
        },
        end: {
          line: 273,
          column: 40
        }
      },
      "57": {
        start: {
          line: 275,
          column: 15
        },
        end: {
          line: 275,
          column: 49
        }
      },
      "58": {
        start: {
          line: 276,
          column: 4
        },
        end: {
          line: 279,
          column: 5
        }
      },
      "59": {
        start: {
          line: 278,
          column: 6
        },
        end: {
          line: 278,
          column: 83
        }
      },
      "60": {
        start: {
          line: 281,
          column: 4
        },
        end: {
          line: 284,
          column: 7
        }
      },
      "61": {
        start: {
          line: 282,
          column: 34
        },
        end: {
          line: 282,
          column: 51
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 20
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 33
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 28
          },
          end: {
            line: 81,
            column: 3
          }
        },
        line: 78
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 89,
            column: 2
          },
          end: {
            line: 89,
            column: 3
          }
        },
        loc: {
          start: {
            line: 89,
            column: 37
          },
          end: {
            line: 91,
            column: 3
          }
        },
        line: 89
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 98,
            column: 2
          },
          end: {
            line: 98,
            column: 3
          }
        },
        loc: {
          start: {
            line: 98,
            column: 35
          },
          end: {
            line: 106,
            column: 3
          }
        },
        line: 98
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 113,
            column: 3
          }
        },
        loc: {
          start: {
            line: 113,
            column: 34
          },
          end: {
            line: 119,
            column: 3
          }
        },
        line: 113
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 125,
            column: 2
          },
          end: {
            line: 125,
            column: 3
          }
        },
        loc: {
          start: {
            line: 125,
            column: 18
          },
          end: {
            line: 128,
            column: 3
          }
        },
        line: 125
      },
      "6": {
        name: "(anonymous_6)",
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
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 134,
            column: 2
          },
          end: {
            line: 134,
            column: 3
          }
        },
        loc: {
          start: {
            line: 134,
            column: 17
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 134
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 149,
            column: 3
          }
        },
        loc: {
          start: {
            line: 149,
            column: 22
          },
          end: {
            line: 164,
            column: 3
          }
        },
        line: 149
      },
      "9": {
        name: "(anonymous_9)",
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
            column: 17
          },
          end: {
            line: 172,
            column: 3
          }
        },
        line: 170
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 174,
            column: 2
          },
          end: {
            line: 174,
            column: 3
          }
        },
        loc: {
          start: {
            line: 174,
            column: 18
          },
          end: {
            line: 178,
            column: 3
          }
        },
        line: 174
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 184,
            column: 2
          },
          end: {
            line: 184,
            column: 3
          }
        },
        loc: {
          start: {
            line: 184,
            column: 14
          },
          end: {
            line: 186,
            column: 3
          }
        },
        line: 184
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 192,
            column: 2
          },
          end: {
            line: 192,
            column: 3
          }
        },
        loc: {
          start: {
            line: 192,
            column: 11
          },
          end: {
            line: 202,
            column: 3
          }
        },
        line: 192
      },
      "13": {
        name: "(anonymous_13)",
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
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 216,
            column: 2
          },
          end: {
            line: 216,
            column: 3
          }
        },
        loc: {
          start: {
            line: 216,
            column: 12
          },
          end: {
            line: 218,
            column: 3
          }
        },
        line: 216
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 225,
            column: 2
          },
          end: {
            line: 225,
            column: 3
          }
        },
        loc: {
          start: {
            line: 225,
            column: 13
          },
          end: {
            line: 231,
            column: 3
          }
        },
        line: 225
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 239,
            column: 2
          },
          end: {
            line: 239,
            column: 3
          }
        },
        loc: {
          start: {
            line: 239,
            column: 26
          },
          end: {
            line: 241,
            column: 3
          }
        },
        line: 239
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 252,
            column: 2
          },
          end: {
            line: 252,
            column: 3
          }
        },
        loc: {
          start: {
            line: 252,
            column: 22
          },
          end: {
            line: 257,
            column: 3
          }
        },
        line: 252
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 271,
            column: 2
          },
          end: {
            line: 271,
            column: 3
          }
        },
        loc: {
          start: {
            line: 271,
            column: 29
          },
          end: {
            line: 285,
            column: 3
          }
        },
        line: 271
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 282,
            column: 21
          },
          end: {
            line: 282,
            column: 22
          }
        },
        loc: {
          start: {
            line: 282,
            column: 34
          },
          end: {
            line: 282,
            column: 51
          }
        },
        line: 282
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 34,
            column: 4
          },
          end: {
            line: 36,
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
        line: 34
      },
      "1": {
        loc: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 69,
            column: 5
          }
        }, {
          start: {
            line: 63,
            column: 11
          },
          end: {
            line: 69,
            column: 5
          }
        }],
        line: 40
      },
      "2": {
        loc: {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 51,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 51,
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
        line: 49
      },
      "3": {
        loc: {
          start: {
            line: 57,
            column: 6
          },
          end: {
            line: 62,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 6
          },
          end: {
            line: 62,
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
        line: 57
      },
      "4": {
        loc: {
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 59,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 58,
            column: 8
          },
          end: {
            line: 58,
            column: 22
          }
        }, {
          start: {
            line: 59,
            column: 8
          },
          end: {
            line: 59,
            column: 67
          }
        }],
        line: 58
      },
      "5": {
        loc: {
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 68,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 6
          },
          end: {
            line: 68,
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
        line: 66
      },
      "6": {
        loc: {
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 103,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 99,
            column: 4
          },
          end: {
            line: 103,
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
        line: 99
      },
      "7": {
        loc: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 117,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 117,
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
        line: 115
      },
      "8": {
        loc: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 161,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 161,
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
        line: 150
      },
      "9": {
        loc: {
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 153,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 151,
            column: 6
          },
          end: {
            line: 153,
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
        line: 151
      },
      "10": {
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
      "11": {
        loc: {
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 199,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 197,
            column: 4
          },
          end: {
            line: 199,
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
        line: 197
      },
      "12": {
        loc: {
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 228,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 226,
            column: 4
          },
          end: {
            line: 228,
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
        line: 226
      },
      "13": {
        loc: {
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 279,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 279,
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
        line: 276
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
      "61": 0
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
    hash: "12449611c1bb92b61c43cb71c2383ec75a713129"
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
 * @param {BrowserBuffer} [keys.publicKey] Raw public key
 * @param {BrowserBuffer} [keys.secretKey] Raw secret key (32-byte secret seed in ed25519`)
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
      console.log(keys.secretKey);
      cov_20palfju0r().s[5]++;
      console.log(_typeof(keys.secretKey));
      var message = (cov_20palfju0r().s[6]++, JSON.stringify(keys));
      cov_20palfju0r().s[7]++;
      keys.secretKey = _BrowserBuffer["default"].from(keys.secretKey);
      cov_20palfju0r().s[8]++;
      if (keys.secretKey.length !== 32) {
        cov_20palfju0r().b[2][0]++;
        cov_20palfju0r().s[9]++;
        throw new Error('secretKey length is invalid');
      } else {
        cov_20palfju0r().b[2][1]++;
      }
      cov_20palfju0r().s[10]++;
      this._secretSeed = keys.secretKey;
      cov_20palfju0r().s[11]++;
      this._publicKey = (0, _signing.generate)(keys.secretKey);
      cov_20palfju0r().s[12]++;
      this._secretKey = _BrowserBuffer["default"].concat([keys.secretKey, this._publicKey]);
      cov_20palfju0r().s[13]++;
      if ((cov_20palfju0r().b[4][0]++, keys.publicKey) && (cov_20palfju0r().b[4][1]++, !this._publicKey.equals(_BrowserBuffer["default"].from(keys.publicKey)))) {
        cov_20palfju0r().b[3][0]++;
        cov_20palfju0r().s[14]++;
        throw new Error('secretKey does not match publicKey');
      } else {
        cov_20palfju0r().b[3][1]++;
      }
    } else {
      cov_20palfju0r().b[1][1]++;
      cov_20palfju0r().s[15]++;
      this._publicKey = _BrowserBuffer["default"].from(keys.publicKey);
      cov_20palfju0r().s[16]++;
      if (this._publicKey.length !== 32) {
        cov_20palfju0r().b[5][0]++;
        cov_20palfju0r().s[17]++;
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
      cov_20palfju0r().s[30]++;
      return new _xdr["default"].AccountId.publicKeyTypeEd25519(this._publicKey);
    }
  }, {
    key: "xdrPublicKey",
    value: function xdrPublicKey() {
      cov_20palfju0r().f[7]++;
      cov_20palfju0r().s[31]++;
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
      cov_20palfju0r().s[32]++;
      if (!(0, _isUndefined["default"])(id)) {
        cov_20palfju0r().b[8][0]++;
        cov_20palfju0r().s[33]++;
        if (!(0, _isString["default"])(id)) {
          cov_20palfju0r().b[9][0]++;
          cov_20palfju0r().s[34]++;
          throw new TypeError("expected string for ID, got ".concat(_typeof(id)));
        } else {
          cov_20palfju0r().b[9][1]++;
        }
        cov_20palfju0r().s[35]++;
        return _xdr["default"].MuxedAccount.keyTypeMuxedEd25519(new _xdr["default"].MuxedAccountMed25519({
          id: _xdr["default"].Uint64.fromString(id),
          ed25519: this._publicKey
        }));
      } else {
        cov_20palfju0r().b[8][1]++;
      }
      cov_20palfju0r().s[36]++;
      return new _xdr["default"].MuxedAccount.keyTypeEd25519(this._publicKey);
    }

    /**
     * Returns raw public key
     * @returns {BrowserBuffer}
     */
  }, {
    key: "rawPublicKey",
    value: function rawPublicKey() {
      cov_20palfju0r().f[9]++;
      cov_20palfju0r().s[37]++;
      return this._publicKey;
    }
  }, {
    key: "signatureHint",
    value: function signatureHint() {
      cov_20palfju0r().f[10]++;
      var a = (cov_20palfju0r().s[38]++, this.xdrAccountId().toXDR());
      cov_20palfju0r().s[39]++;
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
      cov_20palfju0r().s[40]++;
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
      cov_20palfju0r().s[41]++;
      if (!this._secretSeed) {
        cov_20palfju0r().b[10][0]++;
        cov_20palfju0r().s[42]++;
        throw new Error('no secret key available');
      } else {
        cov_20palfju0r().b[10][1]++;
      }
      cov_20palfju0r().s[43]++;
      if (this.type === 'ed25519') {
        cov_20palfju0r().b[11][0]++;
        cov_20palfju0r().s[44]++;
        return _strkey.StrKey.encodeEd25519SecretSeed(this._secretSeed);
      } else {
        cov_20palfju0r().b[11][1]++;
      }
      cov_20palfju0r().s[45]++;
      throw new Error('Invalid Keypair type');
    }

    /**
     * Returns raw secret key.
     * @returns {BrowserBuffer}
     */
  }, {
    key: "rawSecretKey",
    value: function rawSecretKey() {
      cov_20palfju0r().f[13]++;
      cov_20palfju0r().s[46]++;
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
      cov_20palfju0r().s[47]++;
      return !!this._secretKey;
    }

    /**
     * Signs data.
     * @param {BrowserBuffer} data Data to sign
     * @returns {BrowserBuffer}
     */
  }, {
    key: "sign",
    value: function sign(data) {
      cov_20palfju0r().f[15]++;
      cov_20palfju0r().s[48]++;
      if (!this.canSign()) {
        cov_20palfju0r().b[12][0]++;
        cov_20palfju0r().s[49]++;
        throw new Error('cannot sign: no secret key available');
      } else {
        cov_20palfju0r().b[12][1]++;
      }
      cov_20palfju0r().s[50]++;
      return (0, _signing.sign)(data, this._secretKey);
    }

    /**
     * Verifies if `signature` for `data` is valid.
     * @param {BrowserBuffer} data Signed data
     * @param {BrowserBuffer} signature Signature
     * @returns {boolean}
     */
  }, {
    key: "verify",
    value: function verify(data, signature) {
      cov_20palfju0r().f[16]++;
      cov_20palfju0r().s[51]++;
      return (0, _signing.verify)(data, signature, this._publicKey);
    }

    /**
     * Returns the decorated signature (hint+sig) for arbitrary data.
     *
     * @param  {BrowserBuffer} data  arbitrary data to sign
     * @return {xdr.DecoratedSignature}   the raw signature structure which can be
     *     added directly to a transaction envelope
     *
     * @see TransactionBase.addDecoratedSignature
     */
  }, {
    key: "signDecorated",
    value: function signDecorated(data) {
      cov_20palfju0r().f[17]++;
      var signature = (cov_20palfju0r().s[52]++, this.sign(data));
      var hint = (cov_20palfju0r().s[53]++, this.signatureHint());
      cov_20palfju0r().s[54]++;
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
     * @param  {BrowserBuffer} data    data to both sign and treat as the payload
     * @return {xdr.DecoratedSignature}
     *
     * @see https://github.com/stellar/stellar-protocol/blob/master/core/cap-0040.md#signature-hint
     * @see TransactionBase.addDecoratedSignature
     */
  }, {
    key: "signPayloadDecorated",
    value: function signPayloadDecorated(data) {
      cov_20palfju0r().f[18]++;
      var signature = (cov_20palfju0r().s[55]++, this.sign(data));
      var keyHint = (cov_20palfju0r().s[56]++, this.signatureHint());
      var hint = (cov_20palfju0r().s[57]++, _BrowserBuffer["default"].from(data.slice(-4)));
      cov_20palfju0r().s[58]++;
      if (hint.length < 4) {
        cov_20palfju0r().b[13][0]++;
        cov_20palfju0r().s[59]++;
        // append zeroes as needed
        hint = _BrowserBuffer["default"].concat([hint, _BrowserBuffer["default"].alloc(4 - data.length, 0)]);
      } else {
        cov_20palfju0r().b[13][1]++;
      }
      cov_20palfju0r().s[60]++;
      return new _xdr["default"].DecoratedSignature({
        hint: hint.map(function (_byte, i) {
          cov_20palfju0r().f[19]++;
          cov_20palfju0r().s[61]++;
          return _byte ^ keyHint[i];
        }),
        signature: signature
      });
    }
  }], [{
    key: "fromSecret",
    value: function fromSecret(secret) {
      cov_20palfju0r().f[1]++;
      var rawSecret = (cov_20palfju0r().s[18]++, _strkey.StrKey.decodeEd25519SecretSeed(secret));
      cov_20palfju0r().s[19]++;
      return this.fromRawEd25519Seed(rawSecret);
    }

    /**
     * Creates a new `Keypair` object from ed25519 secret key seed raw bytes.
     *
     * @param {BrowserBuffer} rawSeed Raw 32-byte ed25519 secret key seed
     * @returns {Keypair}
     */
  }, {
    key: "fromRawEd25519Seed",
    value: function fromRawEd25519Seed(rawSeed) {
      cov_20palfju0r().f[2]++;
      cov_20palfju0r().s[20]++;
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
      cov_20palfju0r().s[21]++;
      if (!networkPassphrase) {
        cov_20palfju0r().b[6][0]++;
        cov_20palfju0r().s[22]++;
        throw new Error('No network selected. Please pass a network argument, e.g. `Keypair.master(Networks.PUBLIC)`.');
      } else {
        cov_20palfju0r().b[6][1]++;
      }
      cov_20palfju0r().s[23]++;
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
      cov_20palfju0r().s[24]++;
      publicKey = _strkey.StrKey.decodeEd25519PublicKey(publicKey);
      cov_20palfju0r().s[25]++;
      if (publicKey.length !== 32) {
        cov_20palfju0r().b[7][0]++;
        cov_20palfju0r().s[26]++;
        throw new Error('Invalid Stellar public key');
      } else {
        cov_20palfju0r().b[7][1]++;
      }
      cov_20palfju0r().s[27]++;
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
      var secret = (cov_20palfju0r().s[28]++, _tweetnacl["default"].randomBytes(32));
      cov_20palfju0r().s[29]++;
      return this.fromRawEd25519Seed(secret);
    }
  }]);
  return Keypair;
}();
exports.Keypair = Keypair;