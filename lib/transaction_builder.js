"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionBuilder = exports.TimeoutInfinite = exports.BASE_FEE = void 0;
exports.isValidDate = isValidDate;
var _jsXdr = require("js-xdr");
var _bignumber = _interopRequireDefault(require("bignumber.js"));
var _clone = _interopRequireDefault(require("lodash/clone"));
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _isArray = _interopRequireDefault(require("lodash/isArray"));
var _xdr = _interopRequireDefault(require("./xdr"));
var _transaction = require("./transaction");
var _fee_bump_transaction = require("./fee_bump_transaction");
var _signerkey = require("./signerkey");
var _memo = require("./memo");
var _decode_encode_muxed_account = require("./util/decode_encode_muxed_account");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_47gaomomq() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\transaction_builder.js";
  var hash = "b562684671b1c6fd90adbfcf3ac4836c4c02829b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\transaction_builder.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 24
        },
        end: {
          line: 25,
          column: 29
        }
      },
      "1": {
        start: {
          line: 32,
          column: 31
        },
        end: {
          line: 32,
          column: 32
        }
      },
      "2": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 118,
          column: 5
        }
      },
      "3": {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 117,
          column: 73
        }
      },
      "4": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 122,
          column: 5
        }
      },
      "5": {
        start: {
          line: 121,
          column: 6
        },
        end: {
          line: 121,
          column: 75
        }
      },
      "6": {
        start: {
          line: 124,
          column: 4
        },
        end: {
          line: 124,
          column: 32
        }
      },
      "7": {
        start: {
          line: 125,
          column: 4
        },
        end: {
          line: 125,
          column: 25
        }
      },
      "8": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 127,
          column: 28
        }
      },
      "9": {
        start: {
          line: 128,
          column: 4
        },
        end: {
          line: 128,
          column: 53
        }
      },
      "10": {
        start: {
          line: 129,
          column: 4
        },
        end: {
          line: 129,
          column: 57
        }
      },
      "11": {
        start: {
          line: 130,
          column: 4
        },
        end: {
          line: 130,
          column: 62
        }
      },
      "12": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 131,
          column: 68
        }
      },
      "13": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 132,
          column: 80
        }
      },
      "14": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 133,
          column: 57
        }
      },
      "15": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 134,
          column: 41
        }
      },
      "16": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 60
        }
      },
      "17": {
        start: {
          line: 147,
          column: 4
        },
        end: {
          line: 147,
          column: 36
        }
      },
      "18": {
        start: {
          line: 148,
          column: 4
        },
        end: {
          line: 148,
          column: 16
        }
      },
      "19": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 157,
          column: 21
        }
      },
      "20": {
        start: {
          line: 158,
          column: 4
        },
        end: {
          line: 158,
          column: 16
        }
      },
      "21": {
        start: {
          line: 193,
          column: 4
        },
        end: {
          line: 197,
          column: 5
        }
      },
      "22": {
        start: {
          line: 194,
          column: 6
        },
        end: {
          line: 196,
          column: 8
        }
      },
      "23": {
        start: {
          line: 199,
          column: 4
        },
        end: {
          line: 201,
          column: 5
        }
      },
      "24": {
        start: {
          line: 200,
          column: 6
        },
        end: {
          line: 200,
          column: 52
        }
      },
      "25": {
        start: {
          line: 203,
          column: 4
        },
        end: {
          line: 218,
          column: 5
        }
      },
      "26": {
        start: {
          line: 204,
          column: 31
        },
        end: {
          line: 204,
          column: 77
        }
      },
      "27": {
        start: {
          line: 205,
          column: 6
        },
        end: {
          line: 212,
          column: 7
        }
      },
      "28": {
        start: {
          line: 206,
          column: 8
        },
        end: {
          line: 206,
          column: 68
        }
      },
      "29": {
        start: {
          line: 208,
          column: 8
        },
        end: {
          line: 211,
          column: 10
        }
      },
      "30": {
        start: {
          line: 214,
          column: 6
        },
        end: {
          line: 217,
          column: 8
        }
      },
      "31": {
        start: {
          line: 220,
          column: 4
        },
        end: {
          line: 220,
          column: 16
        }
      },
      "32": {
        start: {
          line: 242,
          column: 4
        },
        end: {
          line: 244,
          column: 5
        }
      },
      "33": {
        start: {
          line: 243,
          column: 6
        },
        end: {
          line: 243,
          column: 55
        }
      },
      "34": {
        start: {
          line: 245,
          column: 4
        },
        end: {
          line: 247,
          column: 5
        }
      },
      "35": {
        start: {
          line: 246,
          column: 6
        },
        end: {
          line: 246,
          column: 55
        }
      },
      "36": {
        start: {
          line: 249,
          column: 4
        },
        end: {
          line: 253,
          column: 5
        }
      },
      "37": {
        start: {
          line: 250,
          column: 6
        },
        end: {
          line: 252,
          column: 8
        }
      },
      "38": {
        start: {
          line: 256,
          column: 20
        },
        end: {
          line: 256,
          column: 63
        }
      },
      "39": {
        start: {
          line: 257,
          column: 20
        },
        end: {
          line: 257,
          column: 63
        }
      },
      "40": {
        start: {
          line: 258,
          column: 4
        },
        end: {
          line: 260,
          column: 5
        }
      },
      "41": {
        start: {
          line: 259,
          column: 6
        },
        end: {
          line: 259,
          column: 53
        }
      },
      "42": {
        start: {
          line: 261,
          column: 4
        },
        end: {
          line: 263,
          column: 5
        }
      },
      "43": {
        start: {
          line: 262,
          column: 6
        },
        end: {
          line: 262,
          column: 53
        }
      },
      "44": {
        start: {
          line: 264,
          column: 4
        },
        end: {
          line: 266,
          column: 5
        }
      },
      "45": {
        start: {
          line: 265,
          column: 6
        },
        end: {
          line: 265,
          column: 66
        }
      },
      "46": {
        start: {
          line: 268,
          column: 4
        },
        end: {
          line: 268,
          column: 43
        }
      },
      "47": {
        start: {
          line: 270,
          column: 4
        },
        end: {
          line: 270,
          column: 16
        }
      },
      "48": {
        start: {
          line: 289,
          column: 4
        },
        end: {
          line: 293,
          column: 5
        }
      },
      "49": {
        start: {
          line: 290,
          column: 6
        },
        end: {
          line: 292,
          column: 8
        }
      },
      "50": {
        start: {
          line: 295,
          column: 4
        },
        end: {
          line: 297,
          column: 5
        }
      },
      "51": {
        start: {
          line: 296,
          column: 6
        },
        end: {
          line: 296,
          column: 55
        }
      },
      "52": {
        start: {
          line: 298,
          column: 4
        },
        end: {
          line: 300,
          column: 5
        }
      },
      "53": {
        start: {
          line: 299,
          column: 6
        },
        end: {
          line: 299,
          column: 55
        }
      },
      "54": {
        start: {
          line: 301,
          column: 4
        },
        end: {
          line: 303,
          column: 5
        }
      },
      "55": {
        start: {
          line: 302,
          column: 6
        },
        end: {
          line: 302,
          column: 70
        }
      },
      "56": {
        start: {
          line: 305,
          column: 4
        },
        end: {
          line: 305,
          column: 49
        }
      },
      "57": {
        start: {
          line: 307,
          column: 4
        },
        end: {
          line: 307,
          column: 16
        }
      },
      "58": {
        start: {
          line: 328,
          column: 4
        },
        end: {
          line: 332,
          column: 5
        }
      },
      "59": {
        start: {
          line: 329,
          column: 6
        },
        end: {
          line: 331,
          column: 8
        }
      },
      "60": {
        start: {
          line: 334,
          column: 4
        },
        end: {
          line: 334,
          column: 49
        }
      },
      "61": {
        start: {
          line: 336,
          column: 4
        },
        end: {
          line: 336,
          column: 16
        }
      },
      "62": {
        start: {
          line: 352,
          column: 4
        },
        end: {
          line: 354,
          column: 5
        }
      },
      "63": {
        start: {
          line: 353,
          column: 6
        },
        end: {
          line: 353,
          column: 67
        }
      },
      "64": {
        start: {
          line: 355,
          column: 4
        },
        end: {
          line: 359,
          column: 5
        }
      },
      "65": {
        start: {
          line: 356,
          column: 6
        },
        end: {
          line: 358,
          column: 8
        }
      },
      "66": {
        start: {
          line: 361,
          column: 4
        },
        end: {
          line: 363,
          column: 5
        }
      },
      "67": {
        start: {
          line: 362,
          column: 6
        },
        end: {
          line: 362,
          column: 69
        }
      },
      "68": {
        start: {
          line: 365,
          column: 4
        },
        end: {
          line: 365,
          column: 51
        }
      },
      "69": {
        start: {
          line: 367,
          column: 4
        },
        end: {
          line: 367,
          column: 16
        }
      },
      "70": {
        start: {
          line: 383,
          column: 4
        },
        end: {
          line: 387,
          column: 5
        }
      },
      "71": {
        start: {
          line: 384,
          column: 6
        },
        end: {
          line: 386,
          column: 8
        }
      },
      "72": {
        start: {
          line: 389,
          column: 4
        },
        end: {
          line: 391,
          column: 5
        }
      },
      "73": {
        start: {
          line: 390,
          column: 6
        },
        end: {
          line: 390,
          column: 76
        }
      },
      "74": {
        start: {
          line: 393,
          column: 4
        },
        end: {
          line: 393,
          column: 43
        }
      },
      "75": {
        start: {
          line: 395,
          column: 4
        },
        end: {
          line: 395,
          column: 16
        }
      },
      "76": {
        start: {
          line: 409,
          column: 4
        },
        end: {
          line: 411,
          column: 5
        }
      },
      "77": {
        start: {
          line: 410,
          column: 6
        },
        end: {
          line: 410,
          column: 68
        }
      },
      "78": {
        start: {
          line: 413,
          column: 4
        },
        end: {
          line: 417,
          column: 5
        }
      },
      "79": {
        start: {
          line: 414,
          column: 6
        },
        end: {
          line: 416,
          column: 8
        }
      },
      "80": {
        start: {
          line: 419,
          column: 4
        },
        end: {
          line: 421,
          column: 5
        }
      },
      "81": {
        start: {
          line: 420,
          column: 6
        },
        end: {
          line: 420,
          column: 73
        }
      },
      "82": {
        start: {
          line: 423,
          column: 4
        },
        end: {
          line: 423,
          column: 44
        }
      },
      "83": {
        start: {
          line: 425,
          column: 4
        },
        end: {
          line: 425,
          column: 16
        }
      },
      "84": {
        start: {
          line: 437,
          column: 4
        },
        end: {
          line: 437,
          column: 47
        }
      },
      "85": {
        start: {
          line: 438,
          column: 4
        },
        end: {
          line: 438,
          column: 16
        }
      },
      "86": {
        start: {
          line: 447,
          column: 27
        },
        end: {
          line: 447,
          column: 78
        }
      },
      "87": {
        start: {
          line: 448,
          column: 16
        },
        end: {
          line: 450,
          column: 17
        }
      },
      "88": {
        start: {
          line: 451,
          column: 18
        },
        end: {
          line: 455,
          column: 5
        }
      },
      "89": {
        start: {
          line: 457,
          column: 4
        },
        end: {
          line: 465,
          column: 5
        }
      },
      "90": {
        start: {
          line: 462,
          column: 6
        },
        end: {
          line: 464,
          column: 8
        }
      },
      "91": {
        start: {
          line: 467,
          column: 4
        },
        end: {
          line: 469,
          column: 5
        }
      },
      "92": {
        start: {
          line: 468,
          column: 6
        },
        end: {
          line: 468,
          column: 73
        }
      },
      "93": {
        start: {
          line: 470,
          column: 4
        },
        end: {
          line: 472,
          column: 5
        }
      },
      "94": {
        start: {
          line: 471,
          column: 6
        },
        end: {
          line: 471,
          column: 73
        }
      },
      "95": {
        start: {
          line: 474,
          column: 4
        },
        end: {
          line: 476,
          column: 6
        }
      },
      "96": {
        start: {
          line: 477,
          column: 4
        },
        end: {
          line: 479,
          column: 6
        }
      },
      "97": {
        start: {
          line: 481,
          column: 23
        },
        end: {
          line: 481,
          column: 58
        }
      },
      "98": {
        start: {
          line: 483,
          column: 4
        },
        end: {
          line: 517,
          column: 5
        }
      },
      "99": {
        start: {
          line: 484,
          column: 25
        },
        end: {
          line: 484,
          column: 29
        }
      },
      "100": {
        start: {
          line: 485,
          column: 6
        },
        end: {
          line: 487,
          column: 7
        }
      },
      "101": {
        start: {
          line: 486,
          column: 8
        },
        end: {
          line: 486,
          column: 63
        }
      },
      "102": {
        start: {
          line: 489,
          column: 22
        },
        end: {
          line: 489,
          column: 52
        }
      },
      "103": {
        start: {
          line: 490,
          column: 6
        },
        end: {
          line: 490,
          column: 59
        }
      },
      "104": {
        start: {
          line: 492,
          column: 24
        },
        end: {
          line: 496,
          column: 7
        }
      },
      "105": {
        start: {
          line: 498,
          column: 30
        },
        end: {
          line: 498,
          column: 67
        }
      },
      "106": {
        start: {
          line: 501,
          column: 8
        },
        end: {
          line: 503,
          column: 14
        }
      },
      "107": {
        start: {
          line: 505,
          column: 6
        },
        end: {
          line: 514,
          column: 8
        }
      },
      "108": {
        start: {
          line: 516,
          column: 6
        },
        end: {
          line: 516,
          column: 61
        }
      },
      "109": {
        start: {
          line: 519,
          column: 4
        },
        end: {
          line: 519,
          column: 79
        }
      },
      "110": {
        start: {
          line: 520,
          column: 4
        },
        end: {
          line: 520,
          column: 42
        }
      },
      "111": {
        start: {
          line: 522,
          column: 16
        },
        end: {
          line: 522,
          column: 42
        }
      },
      "112": {
        start: {
          line: 523,
          column: 4
        },
        end: {
          line: 523,
          column: 36
        }
      },
      "113": {
        start: {
          line: 524,
          column: 23
        },
        end: {
          line: 526,
          column: 5
        }
      },
      "114": {
        start: {
          line: 528,
          column: 15
        },
        end: {
          line: 528,
          column: 66
        }
      },
      "115": {
        start: {
          line: 530,
          column: 4
        },
        end: {
          line: 530,
          column: 42
        }
      },
      "116": {
        start: {
          line: 532,
          column: 4
        },
        end: {
          line: 532,
          column: 14
        }
      },
      "117": {
        start: {
          line: 536,
          column: 4
        },
        end: {
          line: 542,
          column: 6
        }
      },
      "118": {
        start: {
          line: 575,
          column: 21
        },
        end: {
          line: 575,
          column: 46
        }
      },
      "119": {
        start: {
          line: 576,
          column: 29
        },
        end: {
          line: 576,
          column: 69
        }
      },
      "120": {
        start: {
          line: 577,
          column: 17
        },
        end: {
          line: 577,
          column: 39
        }
      },
      "121": {
        start: {
          line: 580,
          column: 4
        },
        end: {
          line: 584,
          column: 5
        }
      },
      "122": {
        start: {
          line: 581,
          column: 6
        },
        end: {
          line: 583,
          column: 8
        }
      },
      "123": {
        start: {
          line: 586,
          column: 23
        },
        end: {
          line: 586,
          column: 46
        }
      },
      "124": {
        start: {
          line: 589,
          column: 4
        },
        end: {
          line: 593,
          column: 5
        }
      },
      "125": {
        start: {
          line: 590,
          column: 6
        },
        end: {
          line: 592,
          column: 8
        }
      },
      "126": {
        start: {
          line: 595,
          column: 26
        },
        end: {
          line: 595,
          column: 46
        }
      },
      "127": {
        start: {
          line: 596,
          column: 4
        },
        end: {
          line: 615,
          column: 5
        }
      },
      "128": {
        start: {
          line: 597,
          column: 19
        },
        end: {
          line: 597,
          column: 44
        }
      },
      "129": {
        start: {
          line: 598,
          column: 19
        },
        end: {
          line: 608,
          column: 8
        }
      },
      "130": {
        start: {
          line: 609,
          column: 6
        },
        end: {
          line: 614,
          column: 8
        }
      },
      "131": {
        start: {
          line: 618,
          column: 4
        },
        end: {
          line: 622,
          column: 5
        }
      },
      "132": {
        start: {
          line: 619,
          column: 6
        },
        end: {
          line: 619,
          column: 64
        }
      },
      "133": {
        start: {
          line: 621,
          column: 6
        },
        end: {
          line: 621,
          column: 53
        }
      },
      "134": {
        start: {
          line: 624,
          column: 15
        },
        end: {
          line: 631,
          column: 6
        }
      },
      "135": {
        start: {
          line: 632,
          column: 30
        },
        end: {
          line: 635,
          column: 6
        }
      },
      "136": {
        start: {
          line: 636,
          column: 21
        },
        end: {
          line: 638,
          column: 5
        }
      },
      "137": {
        start: {
          line: 640,
          column: 4
        },
        end: {
          line: 640,
          column: 63
        }
      },
      "138": {
        start: {
          line: 656,
          column: 4
        },
        end: {
          line: 658,
          column: 5
        }
      },
      "139": {
        start: {
          line: 657,
          column: 6
        },
        end: {
          line: 657,
          column: 69
        }
      },
      "140": {
        start: {
          line: 660,
          column: 4
        },
        end: {
          line: 662,
          column: 5
        }
      },
      "141": {
        start: {
          line: 661,
          column: 6
        },
        end: {
          line: 661,
          column: 65
        }
      },
      "142": {
        start: {
          line: 664,
          column: 4
        },
        end: {
          line: 664,
          column: 56
        }
      },
      "143": {
        start: {
          line: 676,
          column: 2
        },
        end: {
          line: 676,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 115,
            column: 2
          },
          end: {
            line: 115,
            column: 3
          }
        },
        loc: {
          start: {
            line: 115,
            column: 40
          },
          end: {
            line: 136,
            column: 3
          }
        },
        line: 115
      },
      "1": {
        name: "(anonymous_1)",
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
            column: 26
          },
          end: {
            line: 149,
            column: 3
          }
        },
        line: 146
      },
      "2": {
        name: "(anonymous_2)",
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
            column: 16
          },
          end: {
            line: 159,
            column: 3
          }
        },
        line: 156
      },
      "3": {
        name: "(anonymous_3)",
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
            column: 29
          },
          end: {
            line: 221,
            column: 3
          }
        },
        line: 192
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 240,
            column: 2
          },
          end: {
            line: 240,
            column: 3
          }
        },
        loc: {
          start: {
            line: 240,
            column: 48
          },
          end: {
            line: 271,
            column: 3
          }
        },
        line: 240
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 288,
            column: 2
          },
          end: {
            line: 288,
            column: 3
          }
        },
        loc: {
          start: {
            line: 288,
            column: 40
          },
          end: {
            line: 308,
            column: 3
          }
        },
        line: 288
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 327,
            column: 2
          },
          end: {
            line: 327,
            column: 3
          }
        },
        loc: {
          start: {
            line: 327,
            column: 44
          },
          end: {
            line: 337,
            column: 3
          }
        },
        line: 327
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 351,
            column: 2
          },
          end: {
            line: 351,
            column: 3
          }
        },
        loc: {
          start: {
            line: 351,
            column: 46
          },
          end: {
            line: 368,
            column: 3
          }
        },
        line: 351
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 382,
            column: 2
          },
          end: {
            line: 382,
            column: 3
          }
        },
        loc: {
          start: {
            line: 382,
            column: 38
          },
          end: {
            line: 396,
            column: 3
          }
        },
        line: 382
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 408,
            column: 2
          },
          end: {
            line: 408,
            column: 3
          }
        },
        loc: {
          start: {
            line: 408,
            column: 32
          },
          end: {
            line: 426,
            column: 3
          }
        },
        line: 408
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 436,
            column: 2
          },
          end: {
            line: 436,
            column: 3
          }
        },
        loc: {
          start: {
            line: 436,
            column: 42
          },
          end: {
            line: 439,
            column: 3
          }
        },
        line: 436
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 446,
            column: 2
          },
          end: {
            line: 446,
            column: 3
          }
        },
        loc: {
          start: {
            line: 446,
            column: 10
          },
          end: {
            line: 533,
            column: 3
          }
        },
        line: 446
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 535,
            column: 2
          },
          end: {
            line: 535,
            column: 3
          }
        },
        loc: {
          start: {
            line: 535,
            column: 23
          },
          end: {
            line: 543,
            column: 3
          }
        },
        line: 535
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 569,
            column: 2
          },
          end: {
            line: 569,
            column: 3
          }
        },
        loc: {
          start: {
            line: 574,
            column: 4
          },
          end: {
            line: 641,
            column: 3
          }
        },
        line: 574
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 655,
            column: 2
          },
          end: {
            line: 655,
            column: 3
          }
        },
        loc: {
          start: {
            line: 655,
            column: 46
          },
          end: {
            line: 665,
            column: 3
          }
        },
        line: 655
      },
      "15": {
        name: "isValidDate",
        decl: {
          start: {
            line: 673,
            column: 16
          },
          end: {
            line: 673,
            column: 27
          }
        },
        loc: {
          start: {
            line: 673,
            column: 31
          },
          end: {
            line: 677,
            column: 1
          }
        },
        line: 673
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 115,
            column: 29
          },
          end: {
            line: 115,
            column: 38
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 115,
            column: 36
          },
          end: {
            line: 115,
            column: 38
          }
        }],
        line: 115
      },
      "1": {
        loc: {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 118,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 118,
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
        line: 116
      },
      "2": {
        loc: {
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 122,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 120,
            column: 4
          },
          end: {
            line: 122,
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
        line: 120
      },
      "3": {
        loc: {
          start: {
            line: 128,
            column: 22
          },
          end: {
            line: 128,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 128,
            column: 22
          },
          end: {
            line: 128,
            column: 44
          }
        }, {
          start: {
            line: 128,
            column: 48
          },
          end: {
            line: 128,
            column: 52
          }
        }],
        line: 128
      },
      "4": {
        loc: {
          start: {
            line: 129,
            column: 24
          },
          end: {
            line: 129,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 129,
            column: 24
          },
          end: {
            line: 129,
            column: 48
          }
        }, {
          start: {
            line: 129,
            column: 52
          },
          end: {
            line: 129,
            column: 56
          }
        }],
        line: 129
      },
      "5": {
        loc: {
          start: {
            line: 130,
            column: 30
          },
          end: {
            line: 130,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 130,
            column: 30
          },
          end: {
            line: 130,
            column: 53
          }
        }, {
          start: {
            line: 130,
            column: 57
          },
          end: {
            line: 130,
            column: 61
          }
        }],
        line: 130
      },
      "6": {
        loc: {
          start: {
            line: 131,
            column: 33
          },
          end: {
            line: 131,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 131,
            column: 33
          },
          end: {
            line: 131,
            column: 59
          }
        }, {
          start: {
            line: 131,
            column: 63
          },
          end: {
            line: 131,
            column: 67
          }
        }],
        line: 131
      },
      "7": {
        loc: {
          start: {
            line: 132,
            column: 39
          },
          end: {
            line: 132,
            column: 79
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 132,
            column: 39
          },
          end: {
            line: 132,
            column: 71
          }
        }, {
          start: {
            line: 132,
            column: 75
          },
          end: {
            line: 132,
            column: 79
          }
        }],
        line: 132
      },
      "8": {
        loc: {
          start: {
            line: 133,
            column: 24
          },
          end: {
            line: 133,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 133,
            column: 24
          },
          end: {
            line: 133,
            column: 48
          }
        }, {
          start: {
            line: 133,
            column: 52
          },
          end: {
            line: 133,
            column: 56
          }
        }],
        line: 133
      },
      "9": {
        loc: {
          start: {
            line: 134,
            column: 16
          },
          end: {
            line: 134,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 134,
            column: 16
          },
          end: {
            line: 134,
            column: 25
          }
        }, {
          start: {
            line: 134,
            column: 29
          },
          end: {
            line: 134,
            column: 40
          }
        }],
        line: 134
      },
      "10": {
        loc: {
          start: {
            line: 135,
            column: 29
          },
          end: {
            line: 135,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 135,
            column: 29
          },
          end: {
            line: 135,
            column: 51
          }
        }, {
          start: {
            line: 135,
            column: 55
          },
          end: {
            line: 135,
            column: 59
          }
        }],
        line: 135
      },
      "11": {
        loc: {
          start: {
            line: 193,
            column: 4
          },
          end: {
            line: 197,
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
            line: 197,
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
            line: 193,
            column: 8
          },
          end: {
            line: 193,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 193,
            column: 8
          },
          end: {
            line: 193,
            column: 32
          }
        }, {
          start: {
            line: 193,
            column: 36
          },
          end: {
            line: 193,
            column: 63
          }
        }],
        line: 193
      },
      "13": {
        loc: {
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 201,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 199,
            column: 4
          },
          end: {
            line: 201,
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
        line: 199
      },
      "14": {
        loc: {
          start: {
            line: 203,
            column: 4
          },
          end: {
            line: 218,
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
            line: 218,
            column: 5
          }
        }, {
          start: {
            line: 213,
            column: 11
          },
          end: {
            line: 218,
            column: 5
          }
        }],
        line: 203
      },
      "15": {
        loc: {
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 212,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 205,
            column: 6
          },
          end: {
            line: 212,
            column: 7
          }
        }, {
          start: {
            line: 207,
            column: 13
          },
          end: {
            line: 212,
            column: 7
          }
        }],
        line: 205
      },
      "16": {
        loc: {
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 244,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 242,
            column: 4
          },
          end: {
            line: 244,
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
        line: 242
      },
      "17": {
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
      "18": {
        loc: {
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 253,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 249,
            column: 4
          },
          end: {
            line: 253,
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
        line: 249
      },
      "19": {
        loc: {
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 260,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 258,
            column: 4
          },
          end: {
            line: 260,
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
        line: 258
      },
      "20": {
        loc: {
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 263,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 261,
            column: 4
          },
          end: {
            line: 263,
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
        line: 261
      },
      "21": {
        loc: {
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 266,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 264,
            column: 4
          },
          end: {
            line: 266,
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
        line: 264
      },
      "22": {
        loc: {
          start: {
            line: 264,
            column: 8
          },
          end: {
            line: 264,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 264,
            column: 8
          },
          end: {
            line: 264,
            column: 19
          }
        }, {
          start: {
            line: 264,
            column: 23
          },
          end: {
            line: 264,
            column: 40
          }
        }],
        line: 264
      },
      "23": {
        loc: {
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 293,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 289,
            column: 4
          },
          end: {
            line: 293,
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
        line: 289
      },
      "24": {
        loc: {
          start: {
            line: 295,
            column: 4
          },
          end: {
            line: 297,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 295,
            column: 4
          },
          end: {
            line: 297,
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
        line: 295
      },
      "25": {
        loc: {
          start: {
            line: 298,
            column: 4
          },
          end: {
            line: 300,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 298,
            column: 4
          },
          end: {
            line: 300,
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
        line: 298
      },
      "26": {
        loc: {
          start: {
            line: 301,
            column: 4
          },
          end: {
            line: 303,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 301,
            column: 4
          },
          end: {
            line: 303,
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
        line: 301
      },
      "27": {
        loc: {
          start: {
            line: 301,
            column: 8
          },
          end: {
            line: 301,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 301,
            column: 8
          },
          end: {
            line: 301,
            column: 21
          }
        }, {
          start: {
            line: 301,
            column: 25
          },
          end: {
            line: 301,
            column: 46
          }
        }],
        line: 301
      },
      "28": {
        loc: {
          start: {
            line: 328,
            column: 4
          },
          end: {
            line: 332,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 328,
            column: 4
          },
          end: {
            line: 332,
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
        line: 328
      },
      "29": {
        loc: {
          start: {
            line: 352,
            column: 4
          },
          end: {
            line: 354,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 352,
            column: 4
          },
          end: {
            line: 354,
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
        line: 352
      },
      "30": {
        loc: {
          start: {
            line: 355,
            column: 4
          },
          end: {
            line: 359,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 355,
            column: 4
          },
          end: {
            line: 359,
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
        line: 355
      },
      "31": {
        loc: {
          start: {
            line: 361,
            column: 4
          },
          end: {
            line: 363,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 361,
            column: 4
          },
          end: {
            line: 363,
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
        line: 361
      },
      "32": {
        loc: {
          start: {
            line: 383,
            column: 4
          },
          end: {
            line: 387,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 383,
            column: 4
          },
          end: {
            line: 387,
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
        line: 383
      },
      "33": {
        loc: {
          start: {
            line: 389,
            column: 4
          },
          end: {
            line: 391,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 389,
            column: 4
          },
          end: {
            line: 391,
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
        line: 389
      },
      "34": {
        loc: {
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 411,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 409,
            column: 4
          },
          end: {
            line: 411,
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
        line: 409
      },
      "35": {
        loc: {
          start: {
            line: 413,
            column: 4
          },
          end: {
            line: 417,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 413,
            column: 4
          },
          end: {
            line: 417,
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
        line: 413
      },
      "36": {
        loc: {
          start: {
            line: 419,
            column: 4
          },
          end: {
            line: 421,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 419,
            column: 4
          },
          end: {
            line: 421,
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
        line: 419
      },
      "37": {
        loc: {
          start: {
            line: 454,
            column: 12
          },
          end: {
            line: 454,
            column: 54
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 454,
            column: 24
          },
          end: {
            line: 454,
            column: 47
          }
        }, {
          start: {
            line: 454,
            column: 50
          },
          end: {
            line: 454,
            column: 54
          }
        }],
        line: 454
      },
      "38": {
        loc: {
          start: {
            line: 457,
            column: 4
          },
          end: {
            line: 465,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 457,
            column: 4
          },
          end: {
            line: 465,
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
        line: 457
      },
      "39": {
        loc: {
          start: {
            line: 458,
            column: 6
          },
          end: {
            line: 460,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 458,
            column: 6
          },
          end: {
            line: 458,
            column: 30
          }
        }, {
          start: {
            line: 459,
            column: 6
          },
          end: {
            line: 459,
            column: 52
          }
        }, {
          start: {
            line: 460,
            column: 6
          },
          end: {
            line: 460,
            column: 52
          }
        }],
        line: 458
      },
      "40": {
        loc: {
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 469,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 467,
            column: 4
          },
          end: {
            line: 469,
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
        line: 467
      },
      "41": {
        loc: {
          start: {
            line: 470,
            column: 4
          },
          end: {
            line: 472,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 470,
            column: 4
          },
          end: {
            line: 472,
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
        line: 470
      },
      "42": {
        loc: {
          start: {
            line: 483,
            column: 4
          },
          end: {
            line: 517,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 483,
            column: 4
          },
          end: {
            line: 517,
            column: 5
          }
        }, {
          start: {
            line: 515,
            column: 11
          },
          end: {
            line: 517,
            column: 5
          }
        }],
        line: 483
      },
      "43": {
        loc: {
          start: {
            line: 485,
            column: 6
          },
          end: {
            line: 487,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 485,
            column: 6
          },
          end: {
            line: 487,
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
        line: 485
      },
      "44": {
        loc: {
          start: {
            line: 489,
            column: 22
          },
          end: {
            line: 489,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 489,
            column: 22
          },
          end: {
            line: 489,
            column: 45
          }
        }, {
          start: {
            line: 489,
            column: 49
          },
          end: {
            line: 489,
            column: 52
          }
        }],
        line: 489
      },
      "45": {
        loc: {
          start: {
            line: 493,
            column: 8
          },
          end: {
            line: 495,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 494,
            column: 12
          },
          end: {
            line: 494,
            column: 49
          }
        }, {
          start: {
            line: 495,
            column: 12
          },
          end: {
            line: 495,
            column: 15
          }
        }],
        line: 493
      },
      "46": {
        loc: {
          start: {
            line: 498,
            column: 30
          },
          end: {
            line: 498,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 498,
            column: 30
          },
          end: {
            line: 498,
            column: 62
          }
        }, {
          start: {
            line: 498,
            column: 66
          },
          end: {
            line: 498,
            column: 67
          }
        }],
        line: 498
      },
      "47": {
        loc: {
          start: {
            line: 501,
            column: 8
          },
          end: {
            line: 503,
            column: 14
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 502,
            column: 12
          },
          end: {
            line: 502,
            column: 58
          }
        }, {
          start: {
            line: 503,
            column: 12
          },
          end: {
            line: 503,
            column: 14
          }
        }],
        line: 501
      },
      "48": {
        loc: {
          start: {
            line: 537,
            column: 6
          },
          end: {
            line: 541,
            column: 66
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 537,
            column: 6
          },
          end: {
            line: 537,
            column: 32
          }
        }, {
          start: {
            line: 538,
            column: 6
          },
          end: {
            line: 538,
            column: 38
          }
        }, {
          start: {
            line: 539,
            column: 6
          },
          end: {
            line: 539,
            column: 41
          }
        }, {
          start: {
            line: 540,
            column: 6
          },
          end: {
            line: 540,
            column: 47
          }
        }, {
          start: {
            line: 541,
            column: 7
          },
          end: {
            line: 541,
            column: 33
          }
        }, {
          start: {
            line: 541,
            column: 37
          },
          end: {
            line: 541,
            column: 65
          }
        }],
        line: 537
      },
      "49": {
        loc: {
          start: {
            line: 580,
            column: 4
          },
          end: {
            line: 584,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 580,
            column: 4
          },
          end: {
            line: 584,
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
        line: 580
      },
      "50": {
        loc: {
          start: {
            line: 589,
            column: 4
          },
          end: {
            line: 593,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 589,
            column: 4
          },
          end: {
            line: 593,
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
        line: 589
      },
      "51": {
        loc: {
          start: {
            line: 596,
            column: 4
          },
          end: {
            line: 615,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 596,
            column: 4
          },
          end: {
            line: 615,
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
        line: 596
      },
      "52": {
        loc: {
          start: {
            line: 618,
            column: 4
          },
          end: {
            line: 622,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 618,
            column: 4
          },
          end: {
            line: 622,
            column: 5
          }
        }, {
          start: {
            line: 620,
            column: 11
          },
          end: {
            line: 622,
            column: 5
          }
        }],
        line: 618
      },
      "53": {
        loc: {
          start: {
            line: 656,
            column: 4
          },
          end: {
            line: 658,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 656,
            column: 4
          },
          end: {
            line: 658,
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
        line: 656
      },
      "54": {
        loc: {
          start: {
            line: 660,
            column: 4
          },
          end: {
            line: 662,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 660,
            column: 4
          },
          end: {
            line: 662,
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
        line: 660
      },
      "55": {
        loc: {
          start: {
            line: 676,
            column: 9
          },
          end: {
            line: 676,
            column: 39
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 676,
            column: 9
          },
          end: {
            line: 676,
            column: 26
          }
        }, {
          start: {
            line: 676,
            column: 30
          },
          end: {
            line: 676,
            column: 39
          }
        }],
        line: 676
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
      "143": 0
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
      "0": [0],
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
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0, 0, 0, 0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b562684671b1c6fd90adbfcf3ac4836c4c02829b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_47gaomomq = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_47gaomomq();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Minimum base fee for transactions. If this fee is below the network
 * minimum, the transaction will fail. The more operations in the
 * transaction, the greater the required fee. Use {@link
 * Server#fetchBaseFee} to get an accurate value of minimum transaction
 * fee on the network.
 *
 * @constant
 * @see [Fees](https://developers.stellar.org/docs/glossary/fees/)
 */
var BASE_FEE = (cov_47gaomomq().s[0]++, '100'); // Stroops

/**
 * @constant
 * @see {@link TransactionBuilder#setTimeout}
 * @see [Timeout](https://developers.stellar.org/api/resources/transactions/post/)
 */
exports.BASE_FEE = BASE_FEE;
var TimeoutInfinite = (cov_47gaomomq().s[1]++, 0);

/**
 * <p>Transaction builder helps constructs a new `{@link Transaction}` using the
 * given {@link Account} as the transaction's "source account". The transaction
 * will use the current sequence number of the given account as its sequence
 * number and increment the given account's sequence number by one. The given
 * source account must include a private key for signing the transaction or an
 * error will be thrown.</p>
 *
 * <p>Operations can be added to the transaction via their corresponding builder
 * methods, and each returns the TransactionBuilder object so they can be
 * chained together. After adding the desired operations, call the `build()`
 * method on the `TransactionBuilder` to return a fully constructed `{@link
 * Transaction}` that can be signed. The returned transaction will contain the
 * sequence number of the source account and include the signature from the
 * source account.</p>
 *
 * <p><strong>Be careful about unsubmitted transactions!</strong> When you build
 * a transaction, stellar-sdk automatically increments the source account's
 * sequence number. If you end up not submitting this transaction and submitting
 * another one instead, it'll fail due to the sequence number being wrong. So if
 * you decide not to use a built transaction, make sure to update the source
 * account's sequence number with
 * [Server.loadAccount](https://stellar.github.io/js-stellar-sdk/Server.html#loadAccount)
 * before creating another transaction.</p>
 *
 * <p>The following code example creates a new transaction with {@link
 * Operation.createAccount} and {@link Operation.payment} operations. The
 * Transaction's source account first funds `destinationA`, then sends a payment
 * to `destinationB`. The built transaction is then signed by
 * `sourceKeypair`.</p>
 *
 * ```
 * var transaction = new TransactionBuilder(source, { fee, networkPassphrase: Networks.TESTNET })
 * .addOperation(Operation.createAccount({
 *     destination: destinationA,
 *     startingBalance: "20"
 * })) // <- funds and creates destinationA
 * .addOperation(Operation.payment({
 *     destination: destinationB,
 *     amount: "100",
 *     asset: Asset.native()
 * })) // <- sends 100 XLM to destinationB
 * .setTimeout(30)
 * .build();
 *
 * transaction.sign(sourceKeypair);
 * ```
 *
 * @constructor
 *
 * @param {Account} sourceAccount - source account for this transaction
 * @param {object}  opts          - Options object
 * @param {string}  opts.fee      - max fee you're willing to pay per
 *     operation in this transaction (**in stroops**)
 *
 * @param {object}              [opts.timebounds] - timebounds for the
 *     validity of this transaction
 * @param {number|string|Date}  [opts.timebounds.minTime] - 64-bit UNIX
 *     timestamp or Date object
 * @param {number|string|Date}  [opts.timebounds.maxTime] - 64-bit UNIX
 *     timestamp or Date object
 * @param {object}              [opts.ledgerbounds] - ledger bounds for the
 *     validity of this transaction
 * @param {number}              [opts.ledgerbounds.minLedger] - number of the minimum
 *     ledger sequence
 * @param {number}              [opts.ledgerbounds.maxLedger] - number of the maximum
 *     ledger sequence
 * @param {string}              [opts.minAccountSequence] - number for
 *     the minimum account sequence
 * @param {number}              [opts.minAccountSequenceAge] - number of
 *     seconds for the minimum account sequence age
 * @param {number}              [opts.minAccountSequenceLedgerGap] - number of
 *     ledgers for the minimum account sequence ledger gap
 * @param {string[]}            [opts.extraSigners] - list of the extra signers
 *     required for this transaction
 * @param {Memo}                [opts.memo] - memo for the transaction
 * @param {string}              [opts.networkPassphrase] passphrase of the
 *     target Stellar network (e.g. "Public Global Stellar Network ; September
 *     2015" for the pubnet)
 */
exports.TimeoutInfinite = TimeoutInfinite;
var TransactionBuilder = /*#__PURE__*/function () {
  function TransactionBuilder(sourceAccount) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (cov_47gaomomq().b[0][0]++, {});
    _classCallCheck(this, TransactionBuilder);
    cov_47gaomomq().f[0]++;
    cov_47gaomomq().s[2]++;
    if (!sourceAccount) {
      cov_47gaomomq().b[1][0]++;
      cov_47gaomomq().s[3]++;
      throw new Error('must specify source account for the transaction');
    } else {
      cov_47gaomomq().b[1][1]++;
    }
    cov_47gaomomq().s[4]++;
    if ((0, _isUndefined["default"])(opts.fee)) {
      cov_47gaomomq().b[2][0]++;
      cov_47gaomomq().s[5]++;
      throw new Error('must specify fee for the transaction (in stroops)');
    } else {
      cov_47gaomomq().b[2][1]++;
    }
    cov_47gaomomq().s[6]++;
    this.source = sourceAccount;
    cov_47gaomomq().s[7]++;
    this.operations = [];
    cov_47gaomomq().s[8]++;
    this.baseFee = opts.fee;
    cov_47gaomomq().s[9]++;
    this.timebounds = (cov_47gaomomq().b[3][0]++, (0, _clone["default"])(opts.timebounds)) || (cov_47gaomomq().b[3][1]++, null);
    cov_47gaomomq().s[10]++;
    this.ledgerbounds = (cov_47gaomomq().b[4][0]++, (0, _clone["default"])(opts.ledgerbounds)) || (cov_47gaomomq().b[4][1]++, null);
    cov_47gaomomq().s[11]++;
    this.minAccountSequence = (cov_47gaomomq().b[5][0]++, opts.minAccountSequence) || (cov_47gaomomq().b[5][1]++, null);
    cov_47gaomomq().s[12]++;
    this.minAccountSequenceAge = (cov_47gaomomq().b[6][0]++, opts.minAccountSequenceAge) || (cov_47gaomomq().b[6][1]++, null);
    cov_47gaomomq().s[13]++;
    this.minAccountSequenceLedgerGap = (cov_47gaomomq().b[7][0]++, opts.minAccountSequenceLedgerGap) || (cov_47gaomomq().b[7][1]++, null);
    cov_47gaomomq().s[14]++;
    this.extraSigners = (cov_47gaomomq().b[8][0]++, (0, _clone["default"])(opts.extraSigners)) || (cov_47gaomomq().b[8][1]++, null);
    cov_47gaomomq().s[15]++;
    this.memo = (cov_47gaomomq().b[9][0]++, opts.memo) || (cov_47gaomomq().b[9][1]++, _memo.Memo.none());
    cov_47gaomomq().s[16]++;
    this.networkPassphrase = (cov_47gaomomq().b[10][0]++, opts.networkPassphrase) || (cov_47gaomomq().b[10][1]++, null);
  }

  /**
   * Adds an operation to the transaction.
   *
   * @param {xdr.Operation} operation   The xdr operation object, use {@link
   *     Operation} static methods.
   *
   * @returns {TransactionBuilder}
   */
  _createClass(TransactionBuilder, [{
    key: "addOperation",
    value: function addOperation(operation) {
      cov_47gaomomq().f[1]++;
      cov_47gaomomq().s[17]++;
      this.operations.push(operation);
      cov_47gaomomq().s[18]++;
      return this;
    }

    /**
     * Adds a memo to the transaction.
     * @param {Memo} memo {@link Memo} object
     * @returns {TransactionBuilder}
     */
  }, {
    key: "addMemo",
    value: function addMemo(memo) {
      cov_47gaomomq().f[2]++;
      cov_47gaomomq().s[19]++;
      this.memo = memo;
      cov_47gaomomq().s[20]++;
      return this;
    }

    /**
     * Sets a timeout precondition on the transaction.
     *
     *  Because of the distributed nature of the Stellar network it is possible
     *  that the status of your transaction will be determined after a long time
     *  if the network is highly congested. If you want to be sure to receive the
     *  status of the transaction within a given period you should set the {@link
     *  TimeBounds} with `maxTime` on the transaction (this is what `setTimeout`
     *  does internally; if there's `minTime` set but no `maxTime` it will be
     *  added).
     *
     *  A call to `TransactionBuilder.setTimeout` is **required** if Transaction
     *  does not have `max_time` set. If you don't want to set timeout, use
     *  `{@link TimeoutInfinite}`. In general you should set `{@link
     *  TimeoutInfinite}` only in smart contracts.
     *
     *  Please note that Horizon may still return <code>504 Gateway Timeout</code>
     *  error, even for short timeouts. In such case you need to resubmit the same
     *  transaction again without making any changes to receive a status. This
     *  method is using the machine system time (UTC), make sure it is set
     *  correctly.
     *
     * @param {number} timeoutSeconds   Number of seconds the transaction is good.
     *     Can't be negative. If the value is {@link TimeoutInfinite}, the
     *     transaction is good indefinitely.
     *
     * @returns {TransactionBuilder}
     *
     * @see {@link TimeoutInfinite}
     * @see https://developers.stellar.org/docs/tutorials/handling-errors/
     */
  }, {
    key: "setTimeout",
    value: function setTimeout(timeoutSeconds) {
      cov_47gaomomq().f[3]++;
      cov_47gaomomq().s[21]++;
      if ((cov_47gaomomq().b[12][0]++, this.timebounds !== null) && (cov_47gaomomq().b[12][1]++, this.timebounds.maxTime > 0)) {
        cov_47gaomomq().b[11][0]++;
        cov_47gaomomq().s[22]++;
        throw new Error('TimeBounds.max_time has been already set - setting timeout would overwrite it.');
      } else {
        cov_47gaomomq().b[11][1]++;
      }
      cov_47gaomomq().s[23]++;
      if (timeoutSeconds < 0) {
        cov_47gaomomq().b[13][0]++;
        cov_47gaomomq().s[24]++;
        throw new Error('timeout cannot be negative');
      } else {
        cov_47gaomomq().b[13][1]++;
      }
      cov_47gaomomq().s[25]++;
      if (timeoutSeconds > 0) {
        cov_47gaomomq().b[14][0]++;
        var timeoutTimestamp = (cov_47gaomomq().s[26]++, Math.floor(Date.now() / 1000) + timeoutSeconds);
        cov_47gaomomq().s[27]++;
        if (this.timebounds === null) {
          cov_47gaomomq().b[15][0]++;
          cov_47gaomomq().s[28]++;
          this.timebounds = {
            minTime: 0,
            maxTime: timeoutTimestamp
          };
        } else {
          cov_47gaomomq().b[15][1]++;
          cov_47gaomomq().s[29]++;
          this.timebounds = {
            minTime: this.timebounds.minTime,
            maxTime: timeoutTimestamp
          };
        }
      } else {
        cov_47gaomomq().b[14][1]++;
        cov_47gaomomq().s[30]++;
        this.timebounds = {
          minTime: 0,
          maxTime: 0
        };
      }
      cov_47gaomomq().s[31]++;
      return this;
    }

    /**
     * If you want to prepare a transaction which will become valid at some point
     * in the future, or be invalid after some time, you can set a timebounds
     * precondition. Internally this will set the `minTime`, and `maxTime`
     * preconditions. Conflicts with `setTimeout`, so use one or the other.
     *
     * @param {Date|number} minEpochOrDate  Either a JS Date object, or a number
     *     of UNIX epoch seconds. The transaction is valid after this timestamp.
     *     Can't be negative. If the value is `0`, the transaction is valid
     *     immediately.
     * @param {Date|number} maxEpochOrDate  Either a JS Date object, or a number
     *     of UNIX epoch seconds. The transaction is valid until this timestamp.
     *     Can't be negative. If the value is `0`, the transaction is valid
     *     indefinitely.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setTimebounds",
    value: function setTimebounds(minEpochOrDate, maxEpochOrDate) {
      cov_47gaomomq().f[4]++;
      cov_47gaomomq().s[32]++;
      // Force it to a date type
      if (typeof minEpochOrDate === 'number') {
        cov_47gaomomq().b[16][0]++;
        cov_47gaomomq().s[33]++;
        minEpochOrDate = new Date(minEpochOrDate * 1000);
      } else {
        cov_47gaomomq().b[16][1]++;
      }
      cov_47gaomomq().s[34]++;
      if (typeof maxEpochOrDate === 'number') {
        cov_47gaomomq().b[17][0]++;
        cov_47gaomomq().s[35]++;
        maxEpochOrDate = new Date(maxEpochOrDate * 1000);
      } else {
        cov_47gaomomq().b[17][1]++;
      }
      cov_47gaomomq().s[36]++;
      if (this.timebounds !== null) {
        cov_47gaomomq().b[18][0]++;
        cov_47gaomomq().s[37]++;
        throw new Error('TimeBounds has been already set - setting timebounds would overwrite it.');
      } else {
        cov_47gaomomq().b[18][1]++;
      }

      // Convert that date to the epoch seconds
      var minTime = (cov_47gaomomq().s[38]++, Math.floor(minEpochOrDate.valueOf() / 1000));
      var maxTime = (cov_47gaomomq().s[39]++, Math.floor(maxEpochOrDate.valueOf() / 1000));
      cov_47gaomomq().s[40]++;
      if (minTime < 0) {
        cov_47gaomomq().b[19][0]++;
        cov_47gaomomq().s[41]++;
        throw new Error('min_time cannot be negative');
      } else {
        cov_47gaomomq().b[19][1]++;
      }
      cov_47gaomomq().s[42]++;
      if (maxTime < 0) {
        cov_47gaomomq().b[20][0]++;
        cov_47gaomomq().s[43]++;
        throw new Error('max_time cannot be negative');
      } else {
        cov_47gaomomq().b[20][1]++;
      }
      cov_47gaomomq().s[44]++;
      if ((cov_47gaomomq().b[22][0]++, maxTime > 0) && (cov_47gaomomq().b[22][1]++, minTime > maxTime)) {
        cov_47gaomomq().b[21][0]++;
        cov_47gaomomq().s[45]++;
        throw new Error('min_time cannot be greater than max_time');
      } else {
        cov_47gaomomq().b[21][1]++;
      }
      cov_47gaomomq().s[46]++;
      this.timebounds = {
        minTime: minTime,
        maxTime: maxTime
      };
      cov_47gaomomq().s[47]++;
      return this;
    }

    /**
     * If you want to prepare a transaction which will only be valid within some
     * range of ledgers, you can set a ledgerbounds precondition.
     * Internally this will set the `minLedger` and `maxLedger` preconditions.
     *
     * @param {number} minLedger  The minimum ledger this transaction is valid at
     *     or after. Cannot be negative. If the value is `0` (the default), the
     *     transaction is valid immediately.
     *
     * @param {number} maxLedger  The maximum ledger this transaction is valid
     *     before. Cannot be negative. If the value is `0`, the transaction is
     *     valid indefinitely.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setLedgerbounds",
    value: function setLedgerbounds(minLedger, maxLedger) {
      cov_47gaomomq().f[5]++;
      cov_47gaomomq().s[48]++;
      if (this.ledgerbounds !== null) {
        cov_47gaomomq().b[23][0]++;
        cov_47gaomomq().s[49]++;
        throw new Error('LedgerBounds has been already set - setting ledgerbounds would overwrite it.');
      } else {
        cov_47gaomomq().b[23][1]++;
      }
      cov_47gaomomq().s[50]++;
      if (minLedger < 0) {
        cov_47gaomomq().b[24][0]++;
        cov_47gaomomq().s[51]++;
        throw new Error('min_ledger cannot be negative');
      } else {
        cov_47gaomomq().b[24][1]++;
      }
      cov_47gaomomq().s[52]++;
      if (maxLedger < 0) {
        cov_47gaomomq().b[25][0]++;
        cov_47gaomomq().s[53]++;
        throw new Error('max_ledger cannot be negative');
      } else {
        cov_47gaomomq().b[25][1]++;
      }
      cov_47gaomomq().s[54]++;
      if ((cov_47gaomomq().b[27][0]++, maxLedger > 0) && (cov_47gaomomq().b[27][1]++, minLedger > maxLedger)) {
        cov_47gaomomq().b[26][0]++;
        cov_47gaomomq().s[55]++;
        throw new Error('min_ledger cannot be greater than max_ledger');
      } else {
        cov_47gaomomq().b[26][1]++;
      }
      cov_47gaomomq().s[56]++;
      this.ledgerbounds = {
        minLedger: minLedger,
        maxLedger: maxLedger
      };
      cov_47gaomomq().s[57]++;
      return this;
    }

    /**
     * If you want to prepare a transaction which will be valid only while the
     * account sequence number is
     *
     *     minAccountSequence <= sourceAccountSequence < tx.seqNum
     *
     * Note that after execution the account's sequence number is always raised to
     * `tx.seqNum`. Internally this will set the `minAccountSequence`
     * precondition.
     *
     * @param {string} minAccountSequence   The minimum source account sequence
     *     number this transaction is valid for. If the value is `0` (the
     *     default), the transaction is valid when `sourceAccount's sequence
     *     number == tx.seqNum- 1`.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setMinAccountSequence",
    value: function setMinAccountSequence(minAccountSequence) {
      cov_47gaomomq().f[6]++;
      cov_47gaomomq().s[58]++;
      if (this.minAccountSequence !== null) {
        cov_47gaomomq().b[28][0]++;
        cov_47gaomomq().s[59]++;
        throw new Error('min_account_sequence has been already set - setting min_account_sequence would overwrite it.');
      } else {
        cov_47gaomomq().b[28][1]++;
      }
      cov_47gaomomq().s[60]++;
      this.minAccountSequence = minAccountSequence;
      cov_47gaomomq().s[61]++;
      return this;
    }

    /**
     * For the transaction to be valid, the current ledger time must be at least
     * `minAccountSequenceAge` greater than sourceAccount's `sequenceTime`.
     * Internally this will set the `minAccountSequenceAge` precondition.
     *
     * @param {number} durationInSeconds  The minimum amount of time between
     *     source account sequence time and the ledger time when this transaction
     *     will become valid. If the value is `0`, the transaction is unrestricted
     *     by the account sequence age. Cannot be negative.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setMinAccountSequenceAge",
    value: function setMinAccountSequenceAge(durationInSeconds) {
      cov_47gaomomq().f[7]++;
      cov_47gaomomq().s[62]++;
      if (typeof durationInSeconds !== 'number') {
        cov_47gaomomq().b[29][0]++;
        cov_47gaomomq().s[63]++;
        throw new Error('min_account_sequence_age must be a number');
      } else {
        cov_47gaomomq().b[29][1]++;
      }
      cov_47gaomomq().s[64]++;
      if (this.minAccountSequenceAge !== null) {
        cov_47gaomomq().b[30][0]++;
        cov_47gaomomq().s[65]++;
        throw new Error('min_account_sequence_age has been already set - setting min_account_sequence_age would overwrite it.');
      } else {
        cov_47gaomomq().b[30][1]++;
      }
      cov_47gaomomq().s[66]++;
      if (durationInSeconds < 0) {
        cov_47gaomomq().b[31][0]++;
        cov_47gaomomq().s[67]++;
        throw new Error('min_account_sequence_age cannot be negative');
      } else {
        cov_47gaomomq().b[31][1]++;
      }
      cov_47gaomomq().s[68]++;
      this.minAccountSequenceAge = durationInSeconds;
      cov_47gaomomq().s[69]++;
      return this;
    }

    /**
     * For the transaction to be valid, the current ledger number must be at least
     * `minAccountSequenceLedgerGap` greater than sourceAccount's ledger sequence.
     * Internally this will set the `minAccountSequenceLedgerGap` precondition.
     *
     * @param {number} gap  The minimum number of ledgers between source account
     *     sequence and the ledger number when this transaction will become valid.
     *     If the value is `0`, the transaction is unrestricted by the account
     *     sequence ledger. Cannot be negative.
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setMinAccountSequenceLedgerGap",
    value: function setMinAccountSequenceLedgerGap(gap) {
      cov_47gaomomq().f[8]++;
      cov_47gaomomq().s[70]++;
      if (this.minAccountSequenceLedgerGap !== null) {
        cov_47gaomomq().b[32][0]++;
        cov_47gaomomq().s[71]++;
        throw new Error('min_account_sequence_ledger_gap has been already set - setting min_account_sequence_ledger_gap would overwrite it.');
      } else {
        cov_47gaomomq().b[32][1]++;
      }
      cov_47gaomomq().s[72]++;
      if (gap < 0) {
        cov_47gaomomq().b[33][0]++;
        cov_47gaomomq().s[73]++;
        throw new Error('min_account_sequence_ledger_gap cannot be negative');
      } else {
        cov_47gaomomq().b[33][1]++;
      }
      cov_47gaomomq().s[74]++;
      this.minAccountSequenceLedgerGap = gap;
      cov_47gaomomq().s[75]++;
      return this;
    }

    /**
     * For the transaction to be valid, there must be a signature corresponding to
     * every Signer in this array, even if the signature is not otherwise required
     * by the sourceAccount or operations. Internally this will set the
     * `extraSigners` precondition.
     *
     * @param {string[]} extraSigners   required extra signers (as {@link StrKey}s)
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setExtraSigners",
    value: function setExtraSigners(extraSigners) {
      cov_47gaomomq().f[9]++;
      cov_47gaomomq().s[76]++;
      if (!(0, _isArray["default"])(extraSigners)) {
        cov_47gaomomq().b[34][0]++;
        cov_47gaomomq().s[77]++;
        throw new Error('extra_signers must be an array of strings.');
      } else {
        cov_47gaomomq().b[34][1]++;
      }
      cov_47gaomomq().s[78]++;
      if (this.extraSigners !== null) {
        cov_47gaomomq().b[35][0]++;
        cov_47gaomomq().s[79]++;
        throw new Error('extra_signers has been already set - setting extra_signers would overwrite it.');
      } else {
        cov_47gaomomq().b[35][1]++;
      }
      cov_47gaomomq().s[80]++;
      if (extraSigners.length > 2) {
        cov_47gaomomq().b[36][0]++;
        cov_47gaomomq().s[81]++;
        throw new Error('extra_signers cannot be longer than 2 elements.');
      } else {
        cov_47gaomomq().b[36][1]++;
      }
      cov_47gaomomq().s[82]++;
      this.extraSigners = (0, _clone["default"])(extraSigners);
      cov_47gaomomq().s[83]++;
      return this;
    }

    /**
     * Set network nassphrase for the Transaction that will be built.
     *
     * @param {string} networkPassphrase    passphrase of the target Stellar
     *     network (e.g. "Public Global Stellar Network ; September 2015").
     *
     * @returns {TransactionBuilder}
     */
  }, {
    key: "setNetworkPassphrase",
    value: function setNetworkPassphrase(networkPassphrase) {
      cov_47gaomomq().f[10]++;
      cov_47gaomomq().s[84]++;
      this.networkPassphrase = networkPassphrase;
      cov_47gaomomq().s[85]++;
      return this;
    }

    /**
     * This will build the transaction.
     * It will also increment the source account's sequence number by 1.
     * @returns {Transaction} This method will return the built {@link Transaction}.
     */
  }, {
    key: "build",
    value: function build() {
      cov_47gaomomq().f[11]++;
      var sequenceNumber = (cov_47gaomomq().s[86]++, new _bignumber["default"](this.source.sequenceNumber()).plus(1));
      var fee = (cov_47gaomomq().s[87]++, new _bignumber["default"](this.baseFee).times(this.operations.length).toNumber());
      var attrs = (cov_47gaomomq().s[88]++, {
        fee: fee,
        seqNum: _xdr["default"].SequenceNumber.fromString(sequenceNumber.toString()),
        memo: this.memo ? (cov_47gaomomq().b[37][0]++, this.memo.toXDRObject()) : (cov_47gaomomq().b[37][1]++, null)
      });
      cov_47gaomomq().s[89]++;
      if ((cov_47gaomomq().b[39][0]++, this.timebounds === null) || (cov_47gaomomq().b[39][1]++, typeof this.timebounds.minTime === 'undefined') || (cov_47gaomomq().b[39][2]++, typeof this.timebounds.maxTime === 'undefined')) {
        cov_47gaomomq().b[38][0]++;
        cov_47gaomomq().s[90]++;
        throw new Error('TimeBounds has to be set or you must call setTimeout(TimeoutInfinite).');
      } else {
        cov_47gaomomq().b[38][1]++;
      }
      cov_47gaomomq().s[91]++;
      if (isValidDate(this.timebounds.minTime)) {
        cov_47gaomomq().b[40][0]++;
        cov_47gaomomq().s[92]++;
        this.timebounds.minTime = this.timebounds.minTime.getTime() / 1000;
      } else {
        cov_47gaomomq().b[40][1]++;
      }
      cov_47gaomomq().s[93]++;
      if (isValidDate(this.timebounds.maxTime)) {
        cov_47gaomomq().b[41][0]++;
        cov_47gaomomq().s[94]++;
        this.timebounds.maxTime = this.timebounds.maxTime.getTime() / 1000;
      } else {
        cov_47gaomomq().b[41][1]++;
      }
      cov_47gaomomq().s[95]++;
      this.timebounds.minTime = _jsXdr.UnsignedHyper.fromString(this.timebounds.minTime.toString());
      cov_47gaomomq().s[96]++;
      this.timebounds.maxTime = _jsXdr.UnsignedHyper.fromString(this.timebounds.maxTime.toString());
      var timeBounds = (cov_47gaomomq().s[97]++, new _xdr["default"].TimeBounds(this.timebounds));
      cov_47gaomomq().s[98]++;
      if (this.hasV2Preconditions()) {
        cov_47gaomomq().b[42][0]++;
        var ledgerBounds = (cov_47gaomomq().s[99]++, null);
        cov_47gaomomq().s[100]++;
        if (this.ledgerbounds !== null) {
          cov_47gaomomq().b[43][0]++;
          cov_47gaomomq().s[101]++;
          ledgerBounds = new _xdr["default"].LedgerBounds(this.ledgerbounds);
        } else {
          cov_47gaomomq().b[43][1]++;
        }
        var minSeqNum = (cov_47gaomomq().s[102]++, (cov_47gaomomq().b[44][0]++, this.minAccountSequence) || (cov_47gaomomq().b[44][1]++, '0'));
        cov_47gaomomq().s[103]++;
        minSeqNum = _xdr["default"].SequenceNumber.fromString(minSeqNum);
        var minSeqAge = (cov_47gaomomq().s[104]++, _jsXdr.UnsignedHyper.fromString(this.minAccountSequenceAge !== null ? (cov_47gaomomq().b[45][0]++, this.minAccountSequenceAge.toString()) : (cov_47gaomomq().b[45][1]++, '0')));
        var minSeqLedgerGap = (cov_47gaomomq().s[105]++, (cov_47gaomomq().b[46][0]++, this.minAccountSequenceLedgerGap) || (cov_47gaomomq().b[46][1]++, 0));
        var extraSigners = (cov_47gaomomq().s[106]++, this.extraSigners !== null ? (cov_47gaomomq().b[47][0]++, this.extraSigners.map(_signerkey.SignerKey.decodeAddress)) : (cov_47gaomomq().b[47][1]++, []));
        cov_47gaomomq().s[107]++;
        attrs.cond = _xdr["default"].Preconditions.precondV2(new _xdr["default"].PreconditionsV2({
          timeBounds: timeBounds,
          ledgerBounds: ledgerBounds,
          minSeqNum: minSeqNum,
          minSeqAge: minSeqAge,
          minSeqLedgerGap: minSeqLedgerGap,
          extraSigners: extraSigners
        }));
      } else {
        cov_47gaomomq().b[42][1]++;
        cov_47gaomomq().s[108]++;
        attrs.cond = _xdr["default"].Preconditions.precondTime(timeBounds);
      }
      cov_47gaomomq().s[109]++;
      attrs.sourceAccount = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(this.source.accountId());
      cov_47gaomomq().s[110]++;
      attrs.ext = new _xdr["default"].TransactionExt(0);
      var xtx = (cov_47gaomomq().s[111]++, new _xdr["default"].Transaction(attrs));
      cov_47gaomomq().s[112]++;
      xtx.operations(this.operations);
      var txEnvelope = (cov_47gaomomq().s[113]++, new _xdr["default"].TransactionEnvelope.envelopeTypeTx(new _xdr["default"].TransactionV1Envelope({
        tx: xtx
      })));
      var tx = (cov_47gaomomq().s[114]++, new _transaction.Transaction(txEnvelope, this.networkPassphrase));
      cov_47gaomomq().s[115]++;
      this.source.incrementSequenceNumber();
      cov_47gaomomq().s[116]++;
      return tx;
    }
  }, {
    key: "hasV2Preconditions",
    value: function hasV2Preconditions() {
      cov_47gaomomq().f[12]++;
      cov_47gaomomq().s[117]++;
      return (cov_47gaomomq().b[48][0]++, this.ledgerbounds !== null) || (cov_47gaomomq().b[48][1]++, this.minAccountSequence !== null) || (cov_47gaomomq().b[48][2]++, this.minAccountSequenceAge !== null) || (cov_47gaomomq().b[48][3]++, this.minAccountSequenceLedgerGap !== null) || (cov_47gaomomq().b[48][4]++, this.extraSigners !== null) && (cov_47gaomomq().b[48][5]++, this.extraSigners.length > 0);
    }

    /**
     * Builds a {@link FeeBumpTransaction}, enabling you to resubmit an existing
     * transaction with a higher fee.
     *
     * @param {Keypair|string}  feeSource - account paying for the transaction,
     *     in the form of either a Keypair (only the public key is used) or
     *     an account ID (in G... or M... form, but refer to `withMuxing`)
     * @param {string}          baseFee   - max fee willing to pay per operation
     *     in inner transaction (**in stroops**)
     * @param {Transaction}     innerTx   - {@link Transaction} to be bumped by
     *     the fee bump transaction
     * @param {string}          networkPassphrase - passphrase of the target
     *     Stellar network (e.g. "Public Global Stellar Network ; September 2015",
     *     see {@link Networks})
     *
     * @todo Alongside the next major version bump, this type signature can be
     *       changed to be less awkward: accept a MuxedAccount as the `feeSource`
     *       rather than a keypair or string.
     *
     * @note Your fee-bump amount should be >= 10x the original fee.
     * @see  https://developers.stellar.org/docs/glossary/fee-bumps/#replace-by-fee
     *
     * @returns {FeeBumpTransaction}
     */
  }], [{
    key: "buildFeeBumpTransaction",
    value: function buildFeeBumpTransaction(feeSource, baseFee, innerTx, networkPassphrase) {
      cov_47gaomomq().f[13]++;
      var innerOps = (cov_47gaomomq().s[118]++, innerTx.operations.length);
      var innerBaseFeeRate = (cov_47gaomomq().s[119]++, new _bignumber["default"](innerTx.fee).div(innerOps));
      var base = (cov_47gaomomq().s[120]++, new _bignumber["default"](baseFee));

      // The fee rate for fee bump is at least the fee rate of the inner transaction
      cov_47gaomomq().s[121]++;
      if (base.lt(innerBaseFeeRate)) {
        cov_47gaomomq().b[49][0]++;
        cov_47gaomomq().s[122]++;
        throw new Error("Invalid baseFee, it should be at least ".concat(innerBaseFeeRate, " stroops."));
      } else {
        cov_47gaomomq().b[49][1]++;
      }
      var minBaseFee = (cov_47gaomomq().s[123]++, new _bignumber["default"](BASE_FEE));

      // The fee rate is at least the minimum fee
      cov_47gaomomq().s[124]++;
      if (base.lt(minBaseFee)) {
        cov_47gaomomq().b[50][0]++;
        cov_47gaomomq().s[125]++;
        throw new Error("Invalid baseFee, it should be at least ".concat(minBaseFee, " stroops."));
      } else {
        cov_47gaomomq().b[50][1]++;
      }
      var innerTxEnvelope = (cov_47gaomomq().s[126]++, innerTx.toEnvelope());
      cov_47gaomomq().s[127]++;
      if (innerTxEnvelope["switch"]() === _xdr["default"].EnvelopeType.envelopeTypeTxV0()) {
        cov_47gaomomq().b[51][0]++;
        var v0Tx = (cov_47gaomomq().s[128]++, innerTxEnvelope.v0().tx());
        var v1Tx = (cov_47gaomomq().s[129]++, new _xdr["default"].Transaction({
          sourceAccount: new _xdr["default"].MuxedAccount.keyTypeEd25519(v0Tx.sourceAccountEd25519()),
          fee: v0Tx.fee(),
          seqNum: v0Tx.seqNum(),
          cond: _xdr["default"].Preconditions.precondTime(v0Tx.timeBounds()),
          memo: v0Tx.memo(),
          operations: v0Tx.operations(),
          ext: new _xdr["default"].TransactionExt(0)
        }));
        cov_47gaomomq().s[130]++;
        innerTxEnvelope = new _xdr["default"].TransactionEnvelope.envelopeTypeTx(new _xdr["default"].TransactionV1Envelope({
          tx: v1Tx,
          signatures: innerTxEnvelope.v0().signatures()
        }));
      } else {
        cov_47gaomomq().b[51][1]++;
      }
      var feeSourceAccount;
      cov_47gaomomq().s[131]++;
      if ((0, _isString["default"])(feeSource)) {
        cov_47gaomomq().b[52][0]++;
        cov_47gaomomq().s[132]++;
        feeSourceAccount = (0, _decode_encode_muxed_account.decodeAddressToMuxedAccount)(feeSource);
      } else {
        cov_47gaomomq().b[52][1]++;
        cov_47gaomomq().s[133]++;
        feeSourceAccount = feeSource.xdrMuxedAccount();
      }
      var tx = (cov_47gaomomq().s[134]++, new _xdr["default"].FeeBumpTransaction({
        feeSource: feeSourceAccount,
        fee: _xdr["default"].Int64.fromString(base.times(innerOps + 1).toString()),
        innerTx: _xdr["default"].FeeBumpTransactionInnerTx.envelopeTypeTx(innerTxEnvelope.v1()),
        ext: new _xdr["default"].FeeBumpTransactionExt(0)
      }));
      var feeBumpTxEnvelope = (cov_47gaomomq().s[135]++, new _xdr["default"].FeeBumpTransactionEnvelope({
        tx: tx,
        signatures: []
      }));
      var envelope = (cov_47gaomomq().s[136]++, new _xdr["default"].TransactionEnvelope.envelopeTypeTxFeeBump(feeBumpTxEnvelope));
      cov_47gaomomq().s[137]++;
      return new _fee_bump_transaction.FeeBumpTransaction(envelope, networkPassphrase);
    }

    /**
     * Build a {@link Transaction} or {@link FeeBumpTransaction} from an
     * xdr.TransactionEnvelope.
     *
     * @param {string|xdr.TransactionEnvelope} envelope - The transaction envelope
     *     object or base64 encoded string.
     * @param {string} networkPassphrase - The network passphrase of the target
     *     Stellar network (e.g. "Public Global Stellar Network ; September
     *     2015"), see {@link Networks}.
     *
     * @returns {Transaction|FeeBumpTransaction}
     */
  }, {
    key: "fromXDR",
    value: function fromXDR(envelope, networkPassphrase) {
      cov_47gaomomq().f[14]++;
      cov_47gaomomq().s[138]++;
      if (typeof envelope === 'string') {
        cov_47gaomomq().b[53][0]++;
        cov_47gaomomq().s[139]++;
        envelope = _xdr["default"].TransactionEnvelope.fromXDR(envelope, 'base64');
      } else {
        cov_47gaomomq().b[53][1]++;
      }
      cov_47gaomomq().s[140]++;
      if (envelope["switch"]() === _xdr["default"].EnvelopeType.envelopeTypeTxFeeBump()) {
        cov_47gaomomq().b[54][0]++;
        cov_47gaomomq().s[141]++;
        return new _fee_bump_transaction.FeeBumpTransaction(envelope, networkPassphrase);
      } else {
        cov_47gaomomq().b[54][1]++;
      }
      cov_47gaomomq().s[142]++;
      return new _transaction.Transaction(envelope, networkPassphrase);
    }
  }]);
  return TransactionBuilder;
}();
/**
 * Checks whether a provided object is a valid Date.
 * @argument {Date} d date object
 * @returns {boolean}
 */
exports.TransactionBuilder = TransactionBuilder;
function isValidDate(d) {
  cov_47gaomomq().f[15]++;
  cov_47gaomomq().s[143]++;
  // isnan is okay here because it correctly checks for invalid date objects
  // eslint-disable-next-line no-restricted-globals
  return (cov_47gaomomq().b[55][0]++, d instanceof Date) && (cov_47gaomomq().b[55][1]++, !isNaN(d));
}