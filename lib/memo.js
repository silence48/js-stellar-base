"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemoText = exports.MemoReturn = exports.MemoNone = exports.MemoID = exports.MemoHash = exports.Memo = void 0;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _clone = _interopRequireDefault(require("lodash/clone"));
var _jsXdr = require("js-xdr");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _xdr = _interopRequireDefault(require("./xdr"));
var _BrowserBuffer = _interopRequireDefault(require("./util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_sftbodbgn() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\memo.js";
  var hash = "854d1a797f8621a11fe73a29dfc8dacc2b026d6b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\memo.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 24
        },
        end: {
          line: 12,
          column: 30
        }
      },
      "1": {
        start: {
          line: 16,
          column: 22
        },
        end: {
          line: 16,
          column: 26
        }
      },
      "2": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 20,
          column: 30
        }
      },
      "3": {
        start: {
          line: 24,
          column: 24
        },
        end: {
          line: 24,
          column: 30
        }
      },
      "4": {
        start: {
          line: 28,
          column: 26
        },
        end: {
          line: 28,
          column: 34
        }
      },
      "5": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 22
        }
      },
      "6": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 24
        }
      },
      "7": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 62,
          column: 5
        }
      },
      "8": {
        start: {
          line: 45,
          column: 8
        },
        end: {
          line: 45,
          column: 14
        }
      },
      "9": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 47,
          column: 37
        }
      },
      "10": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 14
        }
      },
      "11": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 50,
          column: 39
        }
      },
      "12": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 14
        }
      },
      "13": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 39
        }
      },
      "14": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 58,
          column: 9
        }
      },
      "15": {
        start: {
          line: 57,
          column: 10
        },
        end: {
          line: 57,
          column: 57
        }
      },
      "16": {
        start: {
          line: 59,
          column: 8
        },
        end: {
          line: 59,
          column: 14
        }
      },
      "17": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 61,
          column: 45
        }
      },
      "18": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 29
        }
      },
      "19": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 41
        }
      },
      "20": {
        start: {
          line: 84,
          column: 4
        },
        end: {
          line: 95,
          column: 5
        }
      },
      "21": {
        start: {
          line: 86,
          column: 8
        },
        end: {
          line: 86,
          column: 20
        }
      },
      "22": {
        start: {
          line: 89,
          column: 8
        },
        end: {
          line: 89,
          column: 34
        }
      },
      "23": {
        start: {
          line: 92,
          column: 8
        },
        end: {
          line: 92,
          column: 47
        }
      },
      "24": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 45
        }
      },
      "25": {
        start: {
          line: 99,
          column: 4
        },
        end: {
          line: 99,
          column: 41
        }
      },
      "26": {
        start: {
          line: 103,
          column: 18
        },
        end: {
          line: 103,
          column: 72
        }
      },
      "27": {
        start: {
          line: 105,
          column: 4
        },
        end: {
          line: 107,
          column: 5
        }
      },
      "28": {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 106,
          column: 18
        }
      },
      "29": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 114,
          column: 5
        }
      },
      "30": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 111,
          column: 36
        }
      },
      "31": {
        start: {
          line: 113,
          column: 6
        },
        end: {
          line: 113,
          column: 18
        }
      },
      "32": {
        start: {
          line: 117,
          column: 4
        },
        end: {
          line: 119,
          column: 5
        }
      },
      "33": {
        start: {
          line: 118,
          column: 6
        },
        end: {
          line: 118,
          column: 18
        }
      },
      "34": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 124,
          column: 5
        }
      },
      "35": {
        start: {
          line: 123,
          column: 6
        },
        end: {
          line: 123,
          column: 18
        }
      },
      "36": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 130,
          column: 5
        }
      },
      "37": {
        start: {
          line: 129,
          column: 6
        },
        end: {
          line: 129,
          column: 71
        }
      },
      "38": {
        start: {
          line: 134,
          column: 18
        },
        end: {
          line: 136,
          column: 5
        }
      },
      "39": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 140,
          column: 5
        }
      },
      "40": {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 139,
          column: 18
        }
      },
      "41": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "42": {
        start: {
          line: 144,
          column: 6
        },
        end: {
          line: 146,
          column: 7
        }
      },
      "43": {
        start: {
          line: 145,
          column: 8
        },
        end: {
          line: 145,
          column: 20
        }
      },
      "44": {
        start: {
          line: 147,
          column: 6
        },
        end: {
          line: 147,
          column: 53
        }
      },
      "45": {
        start: {
          line: 148,
          column: 11
        },
        end: {
          line: 152,
          column: 5
        }
      },
      "46": {
        start: {
          line: 149,
          column: 6
        },
        end: {
          line: 149,
          column: 46
        }
      },
      "47": {
        start: {
          line: 151,
          column: 6
        },
        end: {
          line: 151,
          column: 18
        }
      },
      "48": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 156,
          column: 5
        }
      },
      "49": {
        start: {
          line: 155,
          column: 6
        },
        end: {
          line: 155,
          column: 18
        }
      },
      "50": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 164,
          column: 30
        }
      },
      "51": {
        start: {
          line: 173,
          column: 4
        },
        end: {
          line: 173,
          column: 36
        }
      },
      "52": {
        start: {
          line: 182,
          column: 4
        },
        end: {
          line: 182,
          column: 32
        }
      },
      "53": {
        start: {
          line: 191,
          column: 4
        },
        end: {
          line: 191,
          column: 36
        }
      },
      "54": {
        start: {
          line: 200,
          column: 4
        },
        end: {
          line: 200,
          column: 38
        }
      },
      "55": {
        start: {
          line: 208,
          column: 4
        },
        end: {
          line: 221,
          column: 5
        }
      },
      "56": {
        start: {
          line: 210,
          column: 8
        },
        end: {
          line: 210,
          column: 35
        }
      },
      "57": {
        start: {
          line: 212,
          column: 8
        },
        end: {
          line: 212,
          column: 70
        }
      },
      "58": {
        start: {
          line: 214,
          column: 8
        },
        end: {
          line: 214,
          column: 46
        }
      },
      "59": {
        start: {
          line: 216,
          column: 8
        },
        end: {
          line: 216,
          column: 46
        }
      },
      "60": {
        start: {
          line: 218,
          column: 8
        },
        end: {
          line: 218,
          column: 48
        }
      },
      "61": {
        start: {
          line: 220,
          column: 8
        },
        end: {
          line: 220,
          column: 20
        }
      },
      "62": {
        start: {
          line: 230,
          column: 4
        },
        end: {
          line: 241,
          column: 5
        }
      },
      "63": {
        start: {
          line: 232,
          column: 8
        },
        end: {
          line: 232,
          column: 50
        }
      },
      "64": {
        start: {
          line: 234,
          column: 8
        },
        end: {
          line: 234,
          column: 41
        }
      },
      "65": {
        start: {
          line: 236,
          column: 8
        },
        end: {
          line: 236,
          column: 41
        }
      },
      "66": {
        start: {
          line: 238,
          column: 8
        },
        end: {
          line: 238,
          column: 43
        }
      },
      "67": {
        start: {
          line: 240,
          column: 8
        },
        end: {
          line: 240,
          column: 14
        }
      },
      "68": {
        start: {
          line: 243,
          column: 4
        },
        end: {
          line: 245,
          column: 5
        }
      },
      "69": {
        start: {
          line: 244,
          column: 6
        },
        end: {
          line: 244,
          column: 25
        }
      },
      "70": {
        start: {
          line: 247,
          column: 4
        },
        end: {
          line: 247,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 39,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        loc: {
          start: {
            line: 39,
            column: 34
          },
          end: {
            line: 63,
            column: 3
          }
        },
        line: 39
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 68,
            column: 2
          },
          end: {
            line: 68,
            column: 3
          }
        },
        loc: {
          start: {
            line: 68,
            column: 13
          },
          end: {
            line: 70,
            column: 3
          }
        },
        line: 68
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 72,
            column: 2
          },
          end: {
            line: 72,
            column: 3
          }
        },
        loc: {
          start: {
            line: 72,
            column: 17
          },
          end: {
            line: 74,
            column: 3
          }
        },
        line: 72
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 83,
            column: 2
          },
          end: {
            line: 83,
            column: 3
          }
        },
        loc: {
          start: {
            line: 83,
            column: 14
          },
          end: {
            line: 96,
            column: 3
          }
        },
        line: 83
      },
      "4": {
        name: "(anonymous_4)",
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
            column: 19
          },
          end: {
            line: 100,
            column: 3
          }
        },
        line: 98
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 102,
            column: 2
          },
          end: {
            line: 102,
            column: 3
          }
        },
        loc: {
          start: {
            line: 102,
            column: 33
          },
          end: {
            line: 125,
            column: 3
          }
        },
        line: 102
      },
      "6": {
        name: "(anonymous_6)",
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
            column: 35
          },
          end: {
            line: 131,
            column: 3
          }
        },
        line: 127
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 133,
            column: 2
          },
          end: {
            line: 133,
            column: 3
          }
        },
        loc: {
          start: {
            line: 133,
            column: 35
          },
          end: {
            line: 157,
            column: 3
          }
        },
        line: 133
      },
      "8": {
        name: "(anonymous_8)",
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
            column: 16
          },
          end: {
            line: 165,
            column: 3
          }
        },
        line: 163
      },
      "9": {
        name: "(anonymous_9)",
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
            column: 20
          },
          end: {
            line: 174,
            column: 3
          }
        },
        line: 172
      },
      "10": {
        name: "(anonymous_10)",
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
            column: 16
          },
          end: {
            line: 183,
            column: 3
          }
        },
        line: 181
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
            column: 20
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
            line: 199,
            column: 2
          },
          end: {
            line: 199,
            column: 3
          }
        },
        loc: {
          start: {
            line: 199,
            column: 22
          },
          end: {
            line: 201,
            column: 3
          }
        },
        line: 199
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 207,
            column: 2
          },
          end: {
            line: 207,
            column: 3
          }
        },
        loc: {
          start: {
            line: 207,
            column: 16
          },
          end: {
            line: 222,
            column: 3
          }
        },
        line: 207
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 229,
            column: 2
          },
          end: {
            line: 229,
            column: 3
          }
        },
        loc: {
          start: {
            line: 229,
            column: 31
          },
          end: {
            line: 248,
            column: 3
          }
        },
        line: 229
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 39,
            column: 20
          },
          end: {
            line: 39,
            column: 32
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 39,
            column: 28
          },
          end: {
            line: 39,
            column: 32
          }
        }],
        line: 39
      },
      "1": {
        loc: {
          start: {
            line: 43,
            column: 4
          },
          end: {
            line: 62,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 45,
            column: 14
          }
        }, {
          start: {
            line: 46,
            column: 6
          },
          end: {
            line: 48,
            column: 14
          }
        }, {
          start: {
            line: 49,
            column: 6
          },
          end: {
            line: 51,
            column: 14
          }
        }, {
          start: {
            line: 52,
            column: 6
          },
          end: {
            line: 52,
            column: 20
          }
        }, {
          start: {
            line: 53,
            column: 6
          },
          end: {
            line: 59,
            column: 14
          }
        }, {
          start: {
            line: 60,
            column: 6
          },
          end: {
            line: 61,
            column: 45
          }
        }],
        line: 43
      },
      "2": {
        loc: {
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 58,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 8
          },
          end: {
            line: 58,
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
        line: 56
      },
      "3": {
        loc: {
          start: {
            line: 84,
            column: 4
          },
          end: {
            line: 95,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 85,
            column: 6
          },
          end: {
            line: 86,
            column: 20
          }
        }, {
          start: {
            line: 87,
            column: 6
          },
          end: {
            line: 87,
            column: 18
          }
        }, {
          start: {
            line: 88,
            column: 6
          },
          end: {
            line: 89,
            column: 34
          }
        }, {
          start: {
            line: 90,
            column: 6
          },
          end: {
            line: 90,
            column: 20
          }
        }, {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 92,
            column: 47
          }
        }, {
          start: {
            line: 93,
            column: 6
          },
          end: {
            line: 94,
            column: 45
          }
        }],
        line: 84
      },
      "4": {
        loc: {
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 105,
            column: 4
          },
          end: {
            line: 107,
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
        line: 105
      },
      "5": {
        loc: {
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 119,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 117,
            column: 4
          },
          end: {
            line: 119,
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
        line: 117
      },
      "6": {
        loc: {
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 122,
            column: 4
          },
          end: {
            line: 124,
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
        line: 122
      },
      "7": {
        loc: {
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 130,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 128,
            column: 4
          },
          end: {
            line: 130,
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
        line: 128
      },
      "8": {
        loc: {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 140,
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
        line: 138
      },
      "9": {
        loc: {
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 138,
            column: 8
          },
          end: {
            line: 138,
            column: 22
          }
        }, {
          start: {
            line: 138,
            column: 26
          },
          end: {
            line: 138,
            column: 44
          }
        }],
        line: 138
      },
      "10": {
        loc: {
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 143,
            column: 4
          },
          end: {
            line: 152,
            column: 5
          }
        }, {
          start: {
            line: 148,
            column: 11
          },
          end: {
            line: 152,
            column: 5
          }
        }],
        line: 143
      },
      "11": {
        loc: {
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 146,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 144,
            column: 6
          },
          end: {
            line: 146,
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
        line: 144
      },
      "12": {
        loc: {
          start: {
            line: 148,
            column: 11
          },
          end: {
            line: 152,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 148,
            column: 11
          },
          end: {
            line: 152,
            column: 5
          }
        }, {
          start: {
            line: 150,
            column: 11
          },
          end: {
            line: 152,
            column: 5
          }
        }],
        line: 148
      },
      "13": {
        loc: {
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 4
          },
          end: {
            line: 156,
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
        line: 154
      },
      "14": {
        loc: {
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 154,
            column: 8
          },
          end: {
            line: 154,
            column: 27
          }
        }, {
          start: {
            line: 154,
            column: 31
          },
          end: {
            line: 154,
            column: 56
          }
        }],
        line: 154
      },
      "15": {
        loc: {
          start: {
            line: 208,
            column: 4
          },
          end: {
            line: 221,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 209,
            column: 6
          },
          end: {
            line: 210,
            column: 35
          }
        }, {
          start: {
            line: 211,
            column: 6
          },
          end: {
            line: 212,
            column: 70
          }
        }, {
          start: {
            line: 213,
            column: 6
          },
          end: {
            line: 214,
            column: 46
          }
        }, {
          start: {
            line: 215,
            column: 6
          },
          end: {
            line: 216,
            column: 46
          }
        }, {
          start: {
            line: 217,
            column: 6
          },
          end: {
            line: 218,
            column: 48
          }
        }, {
          start: {
            line: 219,
            column: 6
          },
          end: {
            line: 220,
            column: 20
          }
        }],
        line: 208
      },
      "16": {
        loc: {
          start: {
            line: 230,
            column: 4
          },
          end: {
            line: 241,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 231,
            column: 6
          },
          end: {
            line: 232,
            column: 50
          }
        }, {
          start: {
            line: 233,
            column: 6
          },
          end: {
            line: 234,
            column: 41
          }
        }, {
          start: {
            line: 235,
            column: 6
          },
          end: {
            line: 236,
            column: 41
          }
        }, {
          start: {
            line: 237,
            column: 6
          },
          end: {
            line: 238,
            column: 43
          }
        }, {
          start: {
            line: 239,
            column: 6
          },
          end: {
            line: 240,
            column: 14
          }
        }],
        line: 230
      },
      "17": {
        loc: {
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 245,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 243,
            column: 4
          },
          end: {
            line: 245,
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
        line: 243
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
      "70": 0
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
      "14": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0],
      "2": [0, 0],
      "3": [0, 0, 0, 0, 0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0, 0, 0, 0, 0],
      "16": [0, 0, 0, 0, 0],
      "17": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "854d1a797f8621a11fe73a29dfc8dacc2b026d6b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_sftbodbgn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_sftbodbgn();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Type of {@link Memo}.
 */
var MemoNone = (cov_sftbodbgn().s[0]++, 'none');
/**
 * Type of {@link Memo}.
 */
exports.MemoNone = MemoNone;
var MemoID = (cov_sftbodbgn().s[1]++, 'id');
/**
 * Type of {@link Memo}.
 */
exports.MemoID = MemoID;
var MemoText = (cov_sftbodbgn().s[2]++, 'text');
/**
 * Type of {@link Memo}.
 */
exports.MemoText = MemoText;
var MemoHash = (cov_sftbodbgn().s[3]++, 'hash');
/**
 * Type of {@link Memo}.
 */
exports.MemoHash = MemoHash;
var MemoReturn = (cov_sftbodbgn().s[4]++, 'return');

/**
 * `Memo` represents memos attached to transactions.
 *
 * @param {string} type - `MemoNone`, `MemoID`, `MemoText`, `MemoHash` or `MemoReturn`
 * @param {*} value - `string` for `MemoID`, `MemoText`, buffer of hex string for `MemoHash` or `MemoReturn`
 * @see [Transactions concept](https://developers.stellar.org/docs/glossary/transactions/)
 * @class Memo
 */
exports.MemoReturn = MemoReturn;
var Memo = /*#__PURE__*/function () {
  function Memo(type) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_sftbodbgn().b[0][0]++, null);
    _classCallCheck(this, Memo);
    cov_sftbodbgn().f[0]++;
    cov_sftbodbgn().s[5]++;
    this._type = type;
    cov_sftbodbgn().s[6]++;
    this._value = value;
    cov_sftbodbgn().s[7]++;
    switch (this._type) {
      case MemoNone:
        cov_sftbodbgn().b[1][0]++;
        cov_sftbodbgn().s[8]++;
        break;
      case MemoID:
        cov_sftbodbgn().b[1][1]++;
        cov_sftbodbgn().s[9]++;
        Memo._validateIdValue(value);
        cov_sftbodbgn().s[10]++;
        break;
      case MemoText:
        cov_sftbodbgn().b[1][2]++;
        cov_sftbodbgn().s[11]++;
        Memo._validateTextValue(value);
        cov_sftbodbgn().s[12]++;
        break;
      case MemoHash:
        cov_sftbodbgn().b[1][3]++;
      case MemoReturn:
        cov_sftbodbgn().b[1][4]++;
        cov_sftbodbgn().s[13]++;
        Memo._validateHashValue(value);
        // We want MemoHash and MemoReturn to have BrowserBuffer as a value
        cov_sftbodbgn().s[14]++;
        if ((0, _isString["default"])(value)) {
          cov_sftbodbgn().b[2][0]++;
          cov_sftbodbgn().s[15]++;
          this._value = _BrowserBuffer["default"].from(value, 'hex');
        } else {
          cov_sftbodbgn().b[2][1]++;
        }
        cov_sftbodbgn().s[16]++;
        break;
      default:
        cov_sftbodbgn().b[1][5]++;
        cov_sftbodbgn().s[17]++;
        throw new Error('Invalid memo type');
    }
  }

  /**
   * Contains memo type: `MemoNone`, `MemoID`, `MemoText`, `MemoHash` or `MemoReturn`
   */
  _createClass(Memo, [{
    key: "type",
    get: function get() {
      cov_sftbodbgn().f[1]++;
      cov_sftbodbgn().s[18]++;
      return (0, _clone["default"])(this._type);
    },
    set: function set(type) {
      cov_sftbodbgn().f[2]++;
      cov_sftbodbgn().s[19]++;
      throw new Error('Memo is immutable');
    }

    /**
     * Contains memo value:
     * * `null` for `MemoNone`,
     * * `string` for `MemoID`,
     * * `Buffer` for `MemoText` after decoding using `fromXDRObject`, original value otherwise,
     * * `Buffer` for `MemoHash`, `MemoReturn`.
     */
  }, {
    key: "value",
    get: function get() {
      cov_sftbodbgn().f[3]++;
      cov_sftbodbgn().s[20]++;
      switch (this._type) {
        case MemoNone:
          cov_sftbodbgn().b[3][0]++;
          cov_sftbodbgn().s[21]++;
          return null;
        case MemoID:
          cov_sftbodbgn().b[3][1]++;
        case MemoText:
          cov_sftbodbgn().b[3][2]++;
          cov_sftbodbgn().s[22]++;
          return (0, _clone["default"])(this._value);
        case MemoHash:
          cov_sftbodbgn().b[3][3]++;
        case MemoReturn:
          cov_sftbodbgn().b[3][4]++;
          cov_sftbodbgn().s[23]++;
          return _BrowserBuffer["default"].from(this._value);
        default:
          cov_sftbodbgn().b[3][5]++;
          cov_sftbodbgn().s[24]++;
          throw new Error('Invalid memo type');
      }
    },
    set: function set(value) {
      cov_sftbodbgn().f[4]++;
      cov_sftbodbgn().s[25]++;
      throw new Error('Memo is immutable');
    }
  }, {
    key: "toXDRObject",
    value:
    /**
     * Returns XDR memo object.
     * @returns {xdr.Memo}
     */
    function toXDRObject() {
      cov_sftbodbgn().f[13]++;
      cov_sftbodbgn().s[55]++;
      switch (this._type) {
        case MemoNone:
          cov_sftbodbgn().b[15][0]++;
          cov_sftbodbgn().s[56]++;
          return _xdr["default"].Memo.memoNone();
        case MemoID:
          cov_sftbodbgn().b[15][1]++;
          cov_sftbodbgn().s[57]++;
          return _xdr["default"].Memo.memoId(_jsXdr.UnsignedHyper.fromString(this._value));
        case MemoText:
          cov_sftbodbgn().b[15][2]++;
          cov_sftbodbgn().s[58]++;
          return _xdr["default"].Memo.memoText(this._value);
        case MemoHash:
          cov_sftbodbgn().b[15][3]++;
          cov_sftbodbgn().s[59]++;
          return _xdr["default"].Memo.memoHash(this._value);
        case MemoReturn:
          cov_sftbodbgn().b[15][4]++;
          cov_sftbodbgn().s[60]++;
          return _xdr["default"].Memo.memoReturn(this._value);
        default:
          cov_sftbodbgn().b[15][5]++;
          cov_sftbodbgn().s[61]++;
          return null;
      }
    }

    /**
     * Returns {@link Memo} from XDR memo object.
     * @param {xdr.Memo} object XDR memo object
     * @returns {Memo}
     */
  }], [{
    key: "_validateIdValue",
    value: function _validateIdValue(value) {
      cov_sftbodbgn().f[5]++;
      var error = (cov_sftbodbgn().s[26]++, new Error("Expects a int64 as a string. Got ".concat(value)));
      cov_sftbodbgn().s[27]++;
      if (!(0, _isString["default"])(value)) {
        cov_sftbodbgn().b[4][0]++;
        cov_sftbodbgn().s[28]++;
        throw error;
      } else {
        cov_sftbodbgn().b[4][1]++;
      }
      var number;
      cov_sftbodbgn().s[29]++;
      try {
        cov_sftbodbgn().s[30]++;
        number = new _bignumber["default"](value);
      } catch (e) {
        cov_sftbodbgn().s[31]++;
        throw error;
      }

      // Infinity
      cov_sftbodbgn().s[32]++;
      if (!number.isFinite()) {
        cov_sftbodbgn().b[5][0]++;
        cov_sftbodbgn().s[33]++;
        throw error;
      } else {
        cov_sftbodbgn().b[5][1]++;
      }

      // NaN
      cov_sftbodbgn().s[34]++;
      if (number.isNaN()) {
        cov_sftbodbgn().b[6][0]++;
        cov_sftbodbgn().s[35]++;
        throw error;
      } else {
        cov_sftbodbgn().b[6][1]++;
      }
    }
  }, {
    key: "_validateTextValue",
    value: function _validateTextValue(value) {
      cov_sftbodbgn().f[6]++;
      cov_sftbodbgn().s[36]++;
      if (!_xdr["default"].Memo.armTypeForArm('text').isValid(value)) {
        cov_sftbodbgn().b[7][0]++;
        cov_sftbodbgn().s[37]++;
        throw new Error('Expects string, array or buffer, max 28 bytes');
      } else {
        cov_sftbodbgn().b[7][1]++;
      }
    }
  }, {
    key: "_validateHashValue",
    value: function _validateHashValue(value) {
      cov_sftbodbgn().f[7]++;
      var error = (cov_sftbodbgn().s[38]++, new Error("Expects a 32 byte hash value or hex encoded string. Got ".concat(value)));
      cov_sftbodbgn().s[39]++;
      if ((cov_sftbodbgn().b[9][0]++, value === null) || (cov_sftbodbgn().b[9][1]++, (0, _isUndefined["default"])(value))) {
        cov_sftbodbgn().b[8][0]++;
        cov_sftbodbgn().s[40]++;
        throw error;
      } else {
        cov_sftbodbgn().b[8][1]++;
      }
      var valueBuffer;
      cov_sftbodbgn().s[41]++;
      if ((0, _isString["default"])(value)) {
        cov_sftbodbgn().b[10][0]++;
        cov_sftbodbgn().s[42]++;
        if (!/^[0-9A-Fa-f]{64}$/g.test(value)) {
          cov_sftbodbgn().b[11][0]++;
          cov_sftbodbgn().s[43]++;
          throw error;
        } else {
          cov_sftbodbgn().b[11][1]++;
        }
        cov_sftbodbgn().s[44]++;
        valueBuffer = _BrowserBuffer["default"].from(value, 'hex');
      } else {
        cov_sftbodbgn().b[10][1]++;
        cov_sftbodbgn().s[45]++;
        if (_BrowserBuffer["default"].isBuffer(value)) {
          cov_sftbodbgn().b[12][0]++;
          cov_sftbodbgn().s[46]++;
          valueBuffer = _BrowserBuffer["default"].from(value);
        } else {
          cov_sftbodbgn().b[12][1]++;
          cov_sftbodbgn().s[47]++;
          throw error;
        }
      }
      cov_sftbodbgn().s[48]++;
      if ((cov_sftbodbgn().b[14][0]++, !valueBuffer.length) || (cov_sftbodbgn().b[14][1]++, valueBuffer.length !== 32)) {
        cov_sftbodbgn().b[13][0]++;
        cov_sftbodbgn().s[49]++;
        throw error;
      } else {
        cov_sftbodbgn().b[13][1]++;
      }
    }

    /**
     * Returns an empty memo (`MemoNone`).
     * @returns {Memo}
     */
  }, {
    key: "none",
    value: function none() {
      cov_sftbodbgn().f[8]++;
      cov_sftbodbgn().s[50]++;
      return new Memo(MemoNone);
    }

    /**
     * Creates and returns a `MemoText` memo.
     * @param {string} text - memo text
     * @returns {Memo}
     */
  }, {
    key: "text",
    value: function text(_text) {
      cov_sftbodbgn().f[9]++;
      cov_sftbodbgn().s[51]++;
      return new Memo(MemoText, _text);
    }

    /**
     * Creates and returns a `MemoID` memo.
     * @param {string} id - 64-bit number represented as a string
     * @returns {Memo}
     */
  }, {
    key: "id",
    value: function id(_id) {
      cov_sftbodbgn().f[10]++;
      cov_sftbodbgn().s[52]++;
      return new Memo(MemoID, _id);
    }

    /**
     * Creates and returns a `MemoHash` memo.
     * @param {array|string} hash - 32 byte hash or hex encoded string
     * @returns {Memo}
     */
  }, {
    key: "hash",
    value: function hash(_hash) {
      cov_sftbodbgn().f[11]++;
      cov_sftbodbgn().s[53]++;
      return new Memo(MemoHash, _hash);
    }

    /**
     * Creates and returns a `MemoReturn` memo.
     * @param {array|string} hash - 32 byte hash or hex encoded string
     * @returns {Memo}
     */
  }, {
    key: "return",
    value: function _return(hash) {
      cov_sftbodbgn().f[12]++;
      cov_sftbodbgn().s[54]++;
      return new Memo(MemoReturn, hash);
    }
  }, {
    key: "fromXDRObject",
    value: function fromXDRObject(object) {
      cov_sftbodbgn().f[14]++;
      cov_sftbodbgn().s[62]++;
      switch (object.arm()) {
        case 'id':
          cov_sftbodbgn().b[16][0]++;
          cov_sftbodbgn().s[63]++;
          return Memo.id(object.value().toString());
        case 'text':
          cov_sftbodbgn().b[16][1]++;
          cov_sftbodbgn().s[64]++;
          return Memo.text(object.value());
        case 'hash':
          cov_sftbodbgn().b[16][2]++;
          cov_sftbodbgn().s[65]++;
          return Memo.hash(object.value());
        case 'retHash':
          cov_sftbodbgn().b[16][3]++;
          cov_sftbodbgn().s[66]++;
          return Memo["return"](object.value());
        default:
          cov_sftbodbgn().b[16][4]++;
          cov_sftbodbgn().s[67]++;
          break;
      }
      cov_sftbodbgn().s[68]++;
      if (typeof object.value() === 'undefined') {
        cov_sftbodbgn().b[17][0]++;
        cov_sftbodbgn().s[69]++;
        return Memo.none();
      } else {
        cov_sftbodbgn().b[17][1]++;
      }
      cov_sftbodbgn().s[70]++;
      throw new Error('Unknown type');
    }
  }]);
  return Memo;
}();
exports.Memo = Memo;