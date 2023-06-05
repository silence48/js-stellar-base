"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Asset = void 0;
var _clone = _interopRequireDefault(require("lodash/clone"));
var _padEnd = _interopRequireDefault(require("lodash/padEnd"));
var _trimEnd = _interopRequireDefault(require("lodash/trimEnd"));
var _xdr = _interopRequireDefault(require("./xdr"));
var _keypair = require("./keypair");
var _strkey = require("./strkey");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_1jktlcbul8() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\asset.js";
  var hash = "e4f0ab7834833b3fb2694c496b591c4ee906d498";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\asset.js",
    statementMap: {
      "0": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "1": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 24,
          column: 8
        }
      },
      "2": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "3": {
        start: {
          line: 27,
          column: 6
        },
        end: {
          line: 27,
          column: 47
        }
      },
      "4": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "5": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 101
        }
      },
      "6": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 70
        }
      },
      "7": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 53
        }
      },
      "8": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "9": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 24
        }
      },
      "10": {
        start: {
          line: 39,
          column: 6
        },
        end: {
          line: 39,
          column: 23
        }
      },
      "11": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 25
        }
      },
      "12": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 28
        }
      },
      "13": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "14": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 64,
          column: 29
        }
      },
      "15": {
        start: {
          line: 66,
          column: 8
        },
        end: {
          line: 66,
          column: 36
        }
      },
      "16": {
        start: {
          line: 69,
          column: 8
        },
        end: {
          line: 69,
          column: 45
        }
      },
      "17": {
        start: {
          line: 70,
          column: 8
        },
        end: {
          line: 70,
          column: 72
        }
      },
      "18": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 71,
          column: 47
        }
      },
      "19": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 38
        }
      },
      "20": {
        start: {
          line: 74,
          column: 8
        },
        end: {
          line: 74,
          column: 73
        }
      },
      "21": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 40
        }
      },
      "22": {
        start: {
          line: 91,
          column: 4
        },
        end: {
          line: 91,
          column: 51
        }
      },
      "23": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 49
        }
      },
      "24": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 37
        }
      },
      "25": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 111,
          column: 5
        }
      },
      "26": {
        start: {
          line: 110,
          column: 6
        },
        end: {
          line: 110,
          column: 40
        }
      },
      "27": {
        start: {
          line: 115,
          column: 4
        },
        end: {
          line: 121,
          column: 5
        }
      },
      "28": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 116,
          column: 30
        }
      },
      "29": {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 117,
          column: 49
        }
      },
      "30": {
        start: {
          line: 119,
          column: 6
        },
        end: {
          line: 119,
          column: 31
        }
      },
      "31": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 120,
          column: 50
        }
      },
      "32": {
        start: {
          line: 124,
          column: 22
        },
        end: {
          line: 124,
          column: 52
        }
      },
      "33": {
        start: {
          line: 125,
          column: 23
        },
        end: {
          line: 125,
          column: 57
        }
      },
      "34": {
        start: {
          line: 128,
          column: 22
        },
        end: {
          line: 131,
          column: 6
        }
      },
      "35": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 133,
          column: 50
        }
      },
      "36": {
        start: {
          line: 140,
          column: 4
        },
        end: {
          line: 140,
          column: 28
        }
      },
      "37": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 30
        }
      },
      "38": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 169,
          column: 5
        }
      },
      "39": {
        start: {
          line: 162,
          column: 8
        },
        end: {
          line: 162,
          column: 24
        }
      },
      "40": {
        start: {
          line: 164,
          column: 8
        },
        end: {
          line: 164,
          column: 34
        }
      },
      "41": {
        start: {
          line: 166,
          column: 8
        },
        end: {
          line: 166,
          column: 35
        }
      },
      "42": {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 168,
          column: 25
        }
      },
      "43": {
        start: {
          line: 176,
          column: 4
        },
        end: {
          line: 178,
          column: 5
        }
      },
      "44": {
        start: {
          line: 177,
          column: 6
        },
        end: {
          line: 177,
          column: 45
        }
      },
      "45": {
        start: {
          line: 180,
          column: 4
        },
        end: {
          line: 182,
          column: 5
        }
      },
      "46": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 181,
          column: 54
        }
      },
      "47": {
        start: {
          line: 184,
          column: 4
        },
        end: {
          line: 184,
          column: 53
        }
      },
      "48": {
        start: {
          line: 191,
          column: 4
        },
        end: {
          line: 191,
          column: 24
        }
      },
      "49": {
        start: {
          line: 199,
          column: 4
        },
        end: {
          line: 199,
          column: 78
        }
      },
      "50": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 205,
          column: 5
        }
      },
      "51": {
        start: {
          line: 204,
          column: 6
        },
        end: {
          line: 204,
          column: 22
        }
      },
      "52": {
        start: {
          line: 207,
          column: 4
        },
        end: {
          line: 207,
          column: 51
        }
      },
      "53": {
        start: {
          line: 225,
          column: 4
        },
        end: {
          line: 227,
          column: 5
        }
      },
      "54": {
        start: {
          line: 226,
          column: 6
        },
        end: {
          line: 226,
          column: 43
        }
      },
      "55": {
        start: {
          line: 228,
          column: 4
        },
        end: {
          line: 230,
          column: 5
        }
      },
      "56": {
        start: {
          line: 229,
          column: 6
        },
        end: {
          line: 229,
          column: 43
        }
      },
      "57": {
        start: {
          line: 232,
          column: 4
        },
        end: {
          line: 234,
          column: 5
        }
      },
      "58": {
        start: {
          line: 233,
          column: 6
        },
        end: {
          line: 233,
          column: 15
        }
      },
      "59": {
        start: {
          line: 237,
          column: 21
        },
        end: {
          line: 237,
          column: 51
        }
      },
      "60": {
        start: {
          line: 238,
          column: 21
        },
        end: {
          line: 238,
          column: 51
        }
      },
      "61": {
        start: {
          line: 239,
          column: 4
        },
        end: {
          line: 241,
          column: 5
        }
      },
      "62": {
        start: {
          line: 240,
          column: 6
        },
        end: {
          line: 240,
          column: 42
        }
      },
      "63": {
        start: {
          line: 244,
          column: 19
        },
        end: {
          line: 244,
          column: 67
        }
      },
      "64": {
        start: {
          line: 245,
          column: 4
        },
        end: {
          line: 247,
          column: 5
        }
      },
      "65": {
        start: {
          line: 246,
          column: 6
        },
        end: {
          line: 246,
          column: 20
        }
      },
      "66": {
        start: {
          line: 250,
          column: 4
        },
        end: {
          line: 250,
          column: 64
        }
      },
      "67": {
        start: {
          line: 265,
          column: 14
        },
        end: {
          line: 265,
          column: 42
        }
      },
      "68": {
        start: {
          line: 267,
          column: 2
        },
        end: {
          line: 272,
          column: 3
        }
      },
      "69": {
        start: {
          line: 267,
          column: 15
        },
        end: {
          line: 267,
          column: 16
        }
      },
      "70": {
        start: {
          line: 268,
          column: 17
        },
        end: {
          line: 268,
          column: 50
        }
      },
      "71": {
        start: {
          line: 269,
          column: 4
        },
        end: {
          line: 271,
          column: 5
        }
      },
      "72": {
        start: {
          line: 270,
          column: 6
        },
        end: {
          line: 270,
          column: 31
        }
      },
      "73": {
        start: {
          line: 274,
          column: 2
        },
        end: {
          line: 276,
          column: 3
        }
      },
      "74": {
        start: {
          line: 275,
          column: 4
        },
        end: {
          line: 275,
          column: 13
        }
      },
      "75": {
        start: {
          line: 277,
          column: 2
        },
        end: {
          line: 277,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 28
          },
          end: {
            line: 43,
            column: 3
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 49,
            column: 3
          }
        },
        loc: {
          start: {
            line: 49,
            column: 18
          },
          end: {
            line: 51,
            column: 3
          }
        },
        line: 49
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 33
          },
          end: {
            line: 76,
            column: 3
          }
        },
        line: 58
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 16
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 82
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 90,
            column: 2
          },
          end: {
            line: 90,
            column: 3
          }
        },
        loc: {
          start: {
            line: 90,
            column: 27
          },
          end: {
            line: 92,
            column: 3
          }
        },
        line: 90
      },
      "5": {
        name: "(anonymous_5)",
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
            column: 25
          },
          end: {
            line: 100,
            column: 3
          }
        },
        line: 98
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 107,
            column: 3
          }
        },
        loc: {
          start: {
            line: 107,
            column: 37
          },
          end: {
            line: 134,
            column: 3
          }
        },
        line: 107
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 139,
            column: 2
          },
          end: {
            line: 139,
            column: 3
          }
        },
        loc: {
          start: {
            line: 139,
            column: 12
          },
          end: {
            line: 141,
            column: 3
          }
        },
        line: 139
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 146,
            column: 2
          },
          end: {
            line: 146,
            column: 3
          }
        },
        loc: {
          start: {
            line: 146,
            column: 14
          },
          end: {
            line: 148,
            column: 3
          }
        },
        line: 146
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 159,
            column: 2
          },
          end: {
            line: 159,
            column: 3
          }
        },
        loc: {
          start: {
            line: 159,
            column: 17
          },
          end: {
            line: 170,
            column: 3
          }
        },
        line: 159
      },
      "10": {
        name: "(anonymous_10)",
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
            column: 20
          },
          end: {
            line: 185,
            column: 3
          }
        },
        line: 175
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 190,
            column: 2
          },
          end: {
            line: 190,
            column: 3
          }
        },
        loc: {
          start: {
            line: 190,
            column: 13
          },
          end: {
            line: 192,
            column: 3
          }
        },
        line: 190
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 198,
            column: 2
          },
          end: {
            line: 198,
            column: 3
          }
        },
        loc: {
          start: {
            line: 198,
            column: 16
          },
          end: {
            line: 200,
            column: 3
          }
        },
        line: 198
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 202,
            column: 2
          },
          end: {
            line: 202,
            column: 3
          }
        },
        loc: {
          start: {
            line: 202,
            column: 13
          },
          end: {
            line: 208,
            column: 3
          }
        },
        line: 202
      },
      "14": {
        name: "(anonymous_14)",
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
            column: 33
          },
          end: {
            line: 251,
            column: 3
          }
        },
        line: 224
      },
      "15": {
        name: "asciiCompare",
        decl: {
          start: {
            line: 264,
            column: 9
          },
          end: {
            line: 264,
            column: 21
          }
        },
        loc: {
          start: {
            line: 264,
            column: 28
          },
          end: {
            line: 278,
            column: 1
          }
        },
        line: 264
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 25,
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
        line: 21
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 28,
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
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 26,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 26,
            column: 44
          }
        }, {
          start: {
            line: 26,
            column: 48
          },
          end: {
            line: 26,
            column: 55
          }
        }],
        line: 26
      },
      "3": {
        loc: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 33,
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
        line: 29
      },
      "4": {
        loc: {
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 57
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 29,
            column: 8
          },
          end: {
            line: 29,
            column: 14
          }
        }, {
          start: {
            line: 29,
            column: 18
          },
          end: {
            line: 29,
            column: 57
          }
        }],
        line: 29
      },
      "5": {
        loc: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 40,
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
            line: 40,
            column: 5
          }
        }, {
          start: {
            line: 38,
            column: 11
          },
          end: {
            line: 40,
            column: 5
          }
        }],
        line: 35
      },
      "6": {
        loc: {
          start: {
            line: 62,
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
            line: 63,
            column: 6
          },
          end: {
            line: 64,
            column: 29
          }
        }, {
          start: {
            line: 65,
            column: 6
          },
          end: {
            line: 66,
            column: 36
          }
        }, {
          start: {
            line: 68,
            column: 6
          },
          end: {
            line: 72,
            column: 38
          }
        }, {
          start: {
            line: 73,
            column: 6
          },
          end: {
            line: 74,
            column: 73
          }
        }],
        line: 62
      },
      "7": {
        loc: {
          start: {
            line: 69,
            column: 15
          },
          end: {
            line: 69,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 69,
            column: 15
          },
          end: {
            line: 69,
            column: 19
          }
        }, {
          start: {
            line: 69,
            column: 23
          },
          end: {
            line: 69,
            column: 44
          }
        }],
        line: 69
      },
      "8": {
        loc: {
          start: {
            line: 107,
            column: 15
          },
          end: {
            line: 107,
            column: 35
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 107,
            column: 26
          },
          end: {
            line: 107,
            column: 35
          }
        }],
        line: 107
      },
      "9": {
        loc: {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
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
        line: 109
      },
      "10": {
        loc: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 121,
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
            line: 121,
            column: 5
          }
        }, {
          start: {
            line: 118,
            column: 11
          },
          end: {
            line: 121,
            column: 5
          }
        }],
        line: 115
      },
      "11": {
        loc: {
          start: {
            line: 124,
            column: 22
          },
          end: {
            line: 124,
            column: 52
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 124,
            column: 46
          },
          end: {
            line: 124,
            column: 47
          }
        }, {
          start: {
            line: 124,
            column: 50
          },
          end: {
            line: 124,
            column: 52
          }
        }],
        line: 124
      },
      "12": {
        loc: {
          start: {
            line: 160,
            column: 4
          },
          end: {
            line: 169,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 161,
            column: 6
          },
          end: {
            line: 162,
            column: 24
          }
        }, {
          start: {
            line: 163,
            column: 6
          },
          end: {
            line: 164,
            column: 34
          }
        }, {
          start: {
            line: 165,
            column: 6
          },
          end: {
            line: 166,
            column: 35
          }
        }, {
          start: {
            line: 167,
            column: 6
          },
          end: {
            line: 168,
            column: 25
          }
        }],
        line: 160
      },
      "13": {
        loc: {
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 178,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 176,
            column: 4
          },
          end: {
            line: 178,
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
        line: 176
      },
      "14": {
        loc: {
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 180,
            column: 4
          },
          end: {
            line: 182,
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
        line: 180
      },
      "15": {
        loc: {
          start: {
            line: 199,
            column: 11
          },
          end: {
            line: 199,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 199,
            column: 11
          },
          end: {
            line: 199,
            column: 40
          }
        }, {
          start: {
            line: 199,
            column: 44
          },
          end: {
            line: 199,
            column: 77
          }
        }],
        line: 199
      },
      "16": {
        loc: {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 205,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 205,
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
        line: 203
      },
      "17": {
        loc: {
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 227,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 225,
            column: 4
          },
          end: {
            line: 227,
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
        line: 225
      },
      "18": {
        loc: {
          start: {
            line: 225,
            column: 8
          },
          end: {
            line: 225,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 225,
            column: 8
          },
          end: {
            line: 225,
            column: 15
          }
        }, {
          start: {
            line: 225,
            column: 19
          },
          end: {
            line: 225,
            column: 45
          }
        }],
        line: 225
      },
      "19": {
        loc: {
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 230,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 228,
            column: 4
          },
          end: {
            line: 230,
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
        line: 228
      },
      "20": {
        loc: {
          start: {
            line: 228,
            column: 8
          },
          end: {
            line: 228,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 228,
            column: 8
          },
          end: {
            line: 228,
            column: 15
          }
        }, {
          start: {
            line: 228,
            column: 19
          },
          end: {
            line: 228,
            column: 45
          }
        }],
        line: 228
      },
      "21": {
        loc: {
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 234,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 232,
            column: 4
          },
          end: {
            line: 234,
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
        line: 232
      },
      "22": {
        loc: {
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 239,
            column: 4
          },
          end: {
            line: 241,
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
        line: 239
      },
      "23": {
        loc: {
          start: {
            line: 240,
            column: 13
          },
          end: {
            line: 240,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 240,
            column: 35
          },
          end: {
            line: 240,
            column: 37
          }
        }, {
          start: {
            line: 240,
            column: 40
          },
          end: {
            line: 240,
            column: 41
          }
        }],
        line: 240
      },
      "24": {
        loc: {
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 247,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 245,
            column: 4
          },
          end: {
            line: 247,
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
        line: 245
      },
      "25": {
        loc: {
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 271,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 269,
            column: 4
          },
          end: {
            line: 271,
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
        line: 269
      },
      "26": {
        loc: {
          start: {
            line: 270,
            column: 13
          },
          end: {
            line: 270,
            column: 30
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 270,
            column: 24
          },
          end: {
            line: 270,
            column: 26
          }
        }, {
          start: {
            line: 270,
            column: 29
          },
          end: {
            line: 270,
            column: 30
          }
        }],
        line: 270
      },
      "27": {
        loc: {
          start: {
            line: 274,
            column: 2
          },
          end: {
            line: 276,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 274,
            column: 2
          },
          end: {
            line: 276,
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
        line: 274
      },
      "28": {
        loc: {
          start: {
            line: 277,
            column: 9
          },
          end: {
            line: 277,
            column: 37
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 277,
            column: 31
          },
          end: {
            line: 277,
            column: 33
          }
        }, {
          start: {
            line: 277,
            column: 36
          },
          end: {
            line: 277,
            column: 37
          }
        }],
        line: 277
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
      "75": 0
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
      "15": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0, 0, 0],
      "7": [0, 0],
      "8": [0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0, 0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e4f0ab7834833b3fb2694c496b591c4ee906d498"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jktlcbul8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1jktlcbul8();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Asset class represents an asset, either the native asset (`XLM`)
 * or an asset code / issuer account ID pair.
 *
 * An asset code describes an asset code and issuer pair. In the case of the native
 * asset XLM, the issuer will be null.
 *
 * @constructor
 * @param {string} code - The asset code.
 * @param {string} issuer - The account ID of the issuer.
 */
var Asset = /*#__PURE__*/function () {
  function Asset(code, issuer) {
    _classCallCheck(this, Asset);
    cov_1jktlcbul8().f[0]++;
    cov_1jktlcbul8().s[0]++;
    if (!/^[a-zA-Z0-9]{1,12}$/.test(code)) {
      cov_1jktlcbul8().b[0][0]++;
      cov_1jktlcbul8().s[1]++;
      throw new Error('Asset code is invalid (maximum alphanumeric, 12 characters at max)');
    } else {
      cov_1jktlcbul8().b[0][1]++;
    }
    cov_1jktlcbul8().s[2]++;
    if ((cov_1jktlcbul8().b[2][0]++, String(code).toLowerCase() !== 'xlm') && (cov_1jktlcbul8().b[2][1]++, !issuer)) {
      cov_1jktlcbul8().b[1][0]++;
      cov_1jktlcbul8().s[3]++;
      throw new Error('Issuer cannot be null');
    } else {
      cov_1jktlcbul8().b[1][1]++;
    }
    cov_1jktlcbul8().s[4]++;
    if ((cov_1jktlcbul8().b[4][0]++, issuer) && (cov_1jktlcbul8().b[4][1]++, !_strkey.StrKey.isValidEd25519PublicKey(issuer))) {
      cov_1jktlcbul8().b[3][0]++;
      cov_1jktlcbul8().s[5]++;
      console.log(!_strkey.StrKey.isValidEd25519PublicKey(issuer), '!StrKey.isValidEd25519PublicKey(issuer)');
      cov_1jktlcbul8().s[6]++;
      console.log(_strkey.StrKey.isValidEd25519PublicKey(issuer), 'without !');
      cov_1jktlcbul8().s[7]++;
      throw new Error("Issuer is invalid ".concat(issuer));
    } else {
      cov_1jktlcbul8().b[3][1]++;
    }
    cov_1jktlcbul8().s[8]++;
    if (String(code).toLowerCase() === 'xlm') {
      cov_1jktlcbul8().b[5][0]++;
      cov_1jktlcbul8().s[9]++;
      // transform all xLM, Xlm, etc. variants -> XLM
      this.code = 'XLM';
    } else {
      cov_1jktlcbul8().b[5][1]++;
      cov_1jktlcbul8().s[10]++;
      this.code = code;
    }
    cov_1jktlcbul8().s[11]++;
    this.issuer = issuer;
  }

  /**
   * Returns an asset object for the native asset.
   * @Return {Asset}
   */
  _createClass(Asset, [{
    key: "toXDRObject",
    value:
    /**
     * Returns the xdr.Asset object for this asset.
     * @returns {xdr.Asset} XDR asset object
     */
    function toXDRObject() {
      cov_1jktlcbul8().f[3]++;
      cov_1jktlcbul8().s[21]++;
      return this._toXDRObject(_xdr["default"].Asset);
    }

    /**
     * Returns the xdr.ChangeTrustAsset object for this asset.
     * @returns {xdr.ChangeTrustAsset} XDR asset object
     */
  }, {
    key: "toChangeTrustXDRObject",
    value: function toChangeTrustXDRObject() {
      cov_1jktlcbul8().f[4]++;
      cov_1jktlcbul8().s[22]++;
      return this._toXDRObject(_xdr["default"].ChangeTrustAsset);
    }

    /**
     * Returns the xdr.TrustLineAsset object for this asset.
     * @returns {xdr.TrustLineAsset} XDR asset object
     */
  }, {
    key: "toTrustLineXDRObject",
    value: function toTrustLineXDRObject() {
      cov_1jktlcbul8().f[5]++;
      cov_1jktlcbul8().s[23]++;
      return this._toXDRObject(_xdr["default"].TrustLineAsset);
    }

    /**
     * Returns the xdr object for this asset.
     * @param {xdr.Asset | xdr.ChangeTrustAsset} xdrAsset - The asset xdr object.
     * @returns {xdr.Asset | xdr.ChangeTrustAsset | xdr.TrustLineAsset} XDR Asset object
     */
  }, {
    key: "_toXDRObject",
    value: function _toXDRObject() {
      var xdrAsset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1jktlcbul8().b[8][0]++, _xdr["default"].Asset);
      cov_1jktlcbul8().f[6]++;
      cov_1jktlcbul8().s[24]++;
      console.log(xdrAsset, 'xdrAsset');
      cov_1jktlcbul8().s[25]++;
      if (this.isNative()) {
        cov_1jktlcbul8().b[9][0]++;
        cov_1jktlcbul8().s[26]++;
        return xdrAsset.assetTypeNative();
      } else {
        cov_1jktlcbul8().b[9][1]++;
      }
      var xdrType;
      var xdrTypeString;
      cov_1jktlcbul8().s[27]++;
      if (this.code.length <= 4) {
        cov_1jktlcbul8().b[10][0]++;
        cov_1jktlcbul8().s[28]++;
        xdrType = _xdr["default"].AlphaNum4;
        cov_1jktlcbul8().s[29]++;
        xdrTypeString = 'assetTypeCreditAlphanum4';
      } else {
        cov_1jktlcbul8().b[10][1]++;
        cov_1jktlcbul8().s[30]++;
        xdrType = _xdr["default"].AlphaNum12;
        cov_1jktlcbul8().s[31]++;
        xdrTypeString = 'assetTypeCreditAlphanum12';
      }

      // pad code with null bytes if necessary
      var padLength = (cov_1jktlcbul8().s[32]++, this.code.length <= 4 ? (cov_1jktlcbul8().b[11][0]++, 4) : (cov_1jktlcbul8().b[11][1]++, 12));
      var paddedCode = (cov_1jktlcbul8().s[33]++, (0, _padEnd["default"])(this.code, padLength, '\0'));

      // eslint-disable-next-line new-cap
      var assetType = (cov_1jktlcbul8().s[34]++, new xdrType({
        assetCode: paddedCode,
        issuer: _keypair.Keypair.fromPublicKey(this.issuer).xdrAccountId()
      }));
      cov_1jktlcbul8().s[35]++;
      return new xdrAsset(xdrTypeString, assetType);
    }

    /**
     * @returns {string} Asset code
     */
  }, {
    key: "getCode",
    value: function getCode() {
      cov_1jktlcbul8().f[7]++;
      cov_1jktlcbul8().s[36]++;
      return (0, _clone["default"])(this.code);
    }

    /**
     * @returns {string} Asset issuer
     */
  }, {
    key: "getIssuer",
    value: function getIssuer() {
      cov_1jktlcbul8().f[8]++;
      cov_1jktlcbul8().s[37]++;
      return (0, _clone["default"])(this.issuer);
    }

    /**
     * @see [Assets concept](https://developers.stellar.org/docs/glossary/assets/)
     * @returns {string} Asset type. Can be one of following types:
     *
     *  - `native`,
     *  - `credit_alphanum4`,
     *  - `credit_alphanum12`, or
     *  - `unknown` as the error case (which should never occur)
     */
  }, {
    key: "getAssetType",
    value: function getAssetType() {
      cov_1jktlcbul8().f[9]++;
      cov_1jktlcbul8().s[38]++;
      switch (this.getRawAssetType()) {
        case _xdr["default"].AssetType.assetTypeNative():
          cov_1jktlcbul8().b[12][0]++;
          cov_1jktlcbul8().s[39]++;
          return 'native';
        case _xdr["default"].AssetType.assetTypeCreditAlphanum4():
          cov_1jktlcbul8().b[12][1]++;
          cov_1jktlcbul8().s[40]++;
          return 'credit_alphanum4';
        case _xdr["default"].AssetType.assetTypeCreditAlphanum12():
          cov_1jktlcbul8().b[12][2]++;
          cov_1jktlcbul8().s[41]++;
          return 'credit_alphanum12';
        default:
          cov_1jktlcbul8().b[12][3]++;
          cov_1jktlcbul8().s[42]++;
          return 'unknown';
      }
    }

    /**
     * @returns {xdr.AssetType}  the raw XDR representation of the asset type
     */
  }, {
    key: "getRawAssetType",
    value: function getRawAssetType() {
      cov_1jktlcbul8().f[10]++;
      cov_1jktlcbul8().s[43]++;
      if (this.isNative()) {
        cov_1jktlcbul8().b[13][0]++;
        cov_1jktlcbul8().s[44]++;
        return _xdr["default"].AssetType.assetTypeNative();
      } else {
        cov_1jktlcbul8().b[13][1]++;
      }
      cov_1jktlcbul8().s[45]++;
      if (this.code.length <= 4) {
        cov_1jktlcbul8().b[14][0]++;
        cov_1jktlcbul8().s[46]++;
        return _xdr["default"].AssetType.assetTypeCreditAlphanum4();
      } else {
        cov_1jktlcbul8().b[14][1]++;
      }
      cov_1jktlcbul8().s[47]++;
      return _xdr["default"].AssetType.assetTypeCreditAlphanum12();
    }

    /**
     * @returns {boolean}  true if this asset object is the native asset.
     */
  }, {
    key: "isNative",
    value: function isNative() {
      cov_1jktlcbul8().f[11]++;
      cov_1jktlcbul8().s[48]++;
      return !this.issuer;
    }

    /**
     * @param {Asset} asset Asset to compare
     * @returns {boolean} true if this asset equals the given asset.
     */
  }, {
    key: "equals",
    value: function equals(asset) {
      cov_1jktlcbul8().f[12]++;
      cov_1jktlcbul8().s[49]++;
      return (cov_1jktlcbul8().b[15][0]++, this.code === asset.getCode()) && (cov_1jktlcbul8().b[15][1]++, this.issuer === asset.getIssuer());
    }
  }, {
    key: "toString",
    value: function toString() {
      cov_1jktlcbul8().f[13]++;
      cov_1jktlcbul8().s[50]++;
      if (this.isNative()) {
        cov_1jktlcbul8().b[16][0]++;
        cov_1jktlcbul8().s[51]++;
        return 'native';
      } else {
        cov_1jktlcbul8().b[16][1]++;
      }
      cov_1jktlcbul8().s[52]++;
      return "".concat(this.getCode(), ":").concat(this.getIssuer());
    }

    /**
     * Compares two assets according to the criteria:
     *
     *  1. First compare the type (native < alphanum4 < alphanum12).
     *  2. If the types are equal, compare the assets codes.
     *  3. If the asset codes are equal, compare the issuers.
     *
     * @param   {Asset} assetA - the first asset
     * @param   {Asset} assetB - the second asset
     * @returns {number} `-1` if assetA < assetB, `0` if assetA == assetB, `1` if assetA > assetB.
     *
     * @static
     * @memberof Asset
     */
  }], [{
    key: "native",
    value: function native() {
      cov_1jktlcbul8().f[1]++;
      cov_1jktlcbul8().s[12]++;
      return new Asset('XLM');
    }

    /**
     * Returns an asset object from its XDR object representation.
     * @param {xdr.Asset} assetXdr - The asset xdr object.
     * @returns {Asset}
     */
  }, {
    key: "fromOperation",
    value: function fromOperation(assetXdr) {
      cov_1jktlcbul8().f[2]++;
      var anum;
      var code;
      var issuer;
      cov_1jktlcbul8().s[13]++;
      switch (assetXdr["switch"]()) {
        case _xdr["default"].AssetType.assetTypeNative():
          cov_1jktlcbul8().b[6][0]++;
          cov_1jktlcbul8().s[14]++;
          return this["native"]();
        case _xdr["default"].AssetType.assetTypeCreditAlphanum4():
          cov_1jktlcbul8().b[6][1]++;
          cov_1jktlcbul8().s[15]++;
          anum = assetXdr.alphaNum4();
        /* falls through */
        case _xdr["default"].AssetType.assetTypeCreditAlphanum12():
          cov_1jktlcbul8().b[6][2]++;
          cov_1jktlcbul8().s[16]++;
          anum = (cov_1jktlcbul8().b[7][0]++, anum) || (cov_1jktlcbul8().b[7][1]++, assetXdr.alphaNum12());
          cov_1jktlcbul8().s[17]++;
          issuer = _strkey.StrKey.encodeEd25519PublicKey(anum.issuer().ed25519());
          cov_1jktlcbul8().s[18]++;
          code = (0, _trimEnd["default"])(anum.assetCode(), '\0');
          cov_1jktlcbul8().s[19]++;
          return new this(code, issuer);
        default:
          cov_1jktlcbul8().b[6][3]++;
          cov_1jktlcbul8().s[20]++;
          throw new Error("Invalid asset type: ".concat(assetXdr["switch"]().name));
      }
    }
  }, {
    key: "compare",
    value: function compare(assetA, assetB) {
      cov_1jktlcbul8().f[14]++;
      cov_1jktlcbul8().s[53]++;
      if ((cov_1jktlcbul8().b[18][0]++, !assetA) || (cov_1jktlcbul8().b[18][1]++, !(assetA instanceof Asset))) {
        cov_1jktlcbul8().b[17][0]++;
        cov_1jktlcbul8().s[54]++;
        throw new Error('assetA is invalid');
      } else {
        cov_1jktlcbul8().b[17][1]++;
      }
      cov_1jktlcbul8().s[55]++;
      if ((cov_1jktlcbul8().b[20][0]++, !assetB) || (cov_1jktlcbul8().b[20][1]++, !(assetB instanceof Asset))) {
        cov_1jktlcbul8().b[19][0]++;
        cov_1jktlcbul8().s[56]++;
        throw new Error('assetB is invalid');
      } else {
        cov_1jktlcbul8().b[19][1]++;
      }
      cov_1jktlcbul8().s[57]++;
      if (assetA.equals(assetB)) {
        cov_1jktlcbul8().b[21][0]++;
        cov_1jktlcbul8().s[58]++;
        return 0;
      } else {
        cov_1jktlcbul8().b[21][1]++;
      }

      // Compare asset types.
      var xdrAtype = (cov_1jktlcbul8().s[59]++, assetA.getRawAssetType().value);
      var xdrBtype = (cov_1jktlcbul8().s[60]++, assetB.getRawAssetType().value);
      cov_1jktlcbul8().s[61]++;
      if (xdrAtype !== xdrBtype) {
        cov_1jktlcbul8().b[22][0]++;
        cov_1jktlcbul8().s[62]++;
        return xdrAtype < xdrBtype ? (cov_1jktlcbul8().b[23][0]++, -1) : (cov_1jktlcbul8().b[23][1]++, 1);
      } else {
        cov_1jktlcbul8().b[22][1]++;
      }

      // Compare asset codes.
      var result = (cov_1jktlcbul8().s[63]++, asciiCompare(assetA.getCode(), assetB.getCode()));
      cov_1jktlcbul8().s[64]++;
      if (result !== 0) {
        cov_1jktlcbul8().b[24][0]++;
        cov_1jktlcbul8().s[65]++;
        return result;
      } else {
        cov_1jktlcbul8().b[24][1]++;
      }

      // Compare asset issuers.
      cov_1jktlcbul8().s[66]++;
      return asciiCompare(assetA.getIssuer(), assetB.getIssuer());
    }
  }]);
  return Asset;
}();
/**
 * Compares two ASCII strings in lexographic order with uppercase precedence.
 *
 * @param   {string} a - the first string to compare
 * @param   {string} b - the second
 * @returns {number} like all `compare()`s:
 *     -1 if `a < b`, 0 if `a == b`, and 1 if `a > b`
 *
 * @warning No type-checks are done on the parameters
 */
exports.Asset = Asset;
function asciiCompare(a, b) {
  cov_1jktlcbul8().f[15]++;
  var len = (cov_1jktlcbul8().s[67]++, Math.min(a.length, b.length));
  cov_1jktlcbul8().s[68]++;
  for (var i = (cov_1jktlcbul8().s[69]++, 0); i < len; i += 1) {
    var diff = (cov_1jktlcbul8().s[70]++, a.charCodeAt(i) - b.charCodeAt(i));
    cov_1jktlcbul8().s[71]++;
    if (diff !== 0) {
      cov_1jktlcbul8().b[25][0]++;
      cov_1jktlcbul8().s[72]++;
      return diff < 0 ? (cov_1jktlcbul8().b[26][0]++, -1) : (cov_1jktlcbul8().b[26][1]++, 1);
    } else {
      cov_1jktlcbul8().b[25][1]++;
    }
  }
  cov_1jktlcbul8().s[73]++;
  if (a.length === b.length) {
    cov_1jktlcbul8().b[27][0]++;
    cov_1jktlcbul8().s[74]++;
    return 0;
  } else {
    cov_1jktlcbul8().b[27][1]++;
  }
  cov_1jktlcbul8().s[75]++;
  return a.length < b.length ? (cov_1jktlcbul8().b[28][0]++, -1) : (cov_1jktlcbul8().b[28][1]++, 1);
}