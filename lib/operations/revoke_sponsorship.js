"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revokeAccountSponsorship = revokeAccountSponsorship;
exports.revokeClaimableBalanceSponsorship = revokeClaimableBalanceSponsorship;
exports.revokeDataSponsorship = revokeDataSponsorship;
exports.revokeLiquidityPoolSponsorship = revokeLiquidityPoolSponsorship;
exports.revokeOfferSponsorship = revokeOfferSponsorship;
exports.revokeSignerSponsorship = revokeSignerSponsorship;
exports.revokeTrustlineSponsorship = revokeTrustlineSponsorship;
var _isString = _interopRequireDefault(require("lodash/isString"));
var _xdr = _interopRequireDefault(require("../xdr"));
var _strkey = require("../strkey");
var _keypair = require("../keypair");
var _asset = require("../asset");
var _liquidity_pool_id = require("../liquidity_pool_id");
var _BrowserBuffer = _interopRequireDefault(require("../util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_2g9vyalfml() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\revoke_sponsorship.js";
  var hash = "bad8e1ad82d3c88ddafacd9a5e23735194b04705";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\revoke_sponsorship.js",
    statementMap: {
      "0": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 27,
          column: 3
        }
      },
      "1": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 42
        }
      },
      "2": {
        start: {
          line: 29,
          column: 20
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "3": {
        start: {
          line: 34,
          column: 13
        },
        end: {
          line: 34,
          column: 76
        }
      },
      "4": {
        start: {
          line: 35,
          column: 23
        },
        end: {
          line: 35,
          column: 25
        }
      },
      "5": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 62
        }
      },
      "6": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 44
        }
      },
      "7": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
          column: 41
        }
      },
      "8": {
        start: {
          line: 64,
          column: 2
        },
        end: {
          line: 66,
          column: 3
        }
      },
      "9": {
        start: {
          line: 65,
          column: 4
        },
        end: {
          line: 65,
          column: 42
        }
      },
      "10": {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 75,
          column: 3
        }
      },
      "11": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 46
        }
      },
      "12": {
        start: {
          line: 71,
          column: 9
        },
        end: {
          line: 75,
          column: 3
        }
      },
      "13": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 37
        }
      },
      "14": {
        start: {
          line: 74,
          column: 4
        },
        end: {
          line: 74,
          column: 69
        }
      },
      "15": {
        start: {
          line: 77,
          column: 20
        },
        end: {
          line: 82,
          column: 3
        }
      },
      "16": {
        start: {
          line: 83,
          column: 13
        },
        end: {
          line: 83,
          column: 76
        }
      },
      "17": {
        start: {
          line: 84,
          column: 23
        },
        end: {
          line: 84,
          column: 25
        }
      },
      "18": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 85,
          column: 62
        }
      },
      "19": {
        start: {
          line: 86,
          column: 2
        },
        end: {
          line: 86,
          column: 44
        }
      },
      "20": {
        start: {
          line: 88,
          column: 2
        },
        end: {
          line: 88,
          column: 41
        }
      },
      "21": {
        start: {
          line: 110,
          column: 2
        },
        end: {
          line: 112,
          column: 3
        }
      },
      "22": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 41
        }
      },
      "23": {
        start: {
          line: 113,
          column: 2
        },
        end: {
          line: 115,
          column: 3
        }
      },
      "24": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 42
        }
      },
      "25": {
        start: {
          line: 117,
          column: 20
        },
        end: {
          line: 122,
          column: 3
        }
      },
      "26": {
        start: {
          line: 123,
          column: 13
        },
        end: {
          line: 123,
          column: 76
        }
      },
      "27": {
        start: {
          line: 124,
          column: 23
        },
        end: {
          line: 124,
          column: 25
        }
      },
      "28": {
        start: {
          line: 125,
          column: 2
        },
        end: {
          line: 125,
          column: 62
        }
      },
      "29": {
        start: {
          line: 126,
          column: 2
        },
        end: {
          line: 126,
          column: 44
        }
      },
      "30": {
        start: {
          line: 128,
          column: 2
        },
        end: {
          line: 128,
          column: 41
        }
      },
      "31": {
        start: {
          line: 150,
          column: 2
        },
        end: {
          line: 152,
          column: 3
        }
      },
      "32": {
        start: {
          line: 151,
          column: 4
        },
        end: {
          line: 151,
          column: 42
        }
      },
      "33": {
        start: {
          line: 153,
          column: 2
        },
        end: {
          line: 155,
          column: 3
        }
      },
      "34": {
        start: {
          line: 154,
          column: 4
        },
        end: {
          line: 154,
          column: 66
        }
      },
      "35": {
        start: {
          line: 157,
          column: 20
        },
        end: {
          line: 162,
          column: 3
        }
      },
      "36": {
        start: {
          line: 163,
          column: 13
        },
        end: {
          line: 163,
          column: 76
        }
      },
      "37": {
        start: {
          line: 164,
          column: 23
        },
        end: {
          line: 164,
          column: 25
        }
      },
      "38": {
        start: {
          line: 165,
          column: 2
        },
        end: {
          line: 165,
          column: 62
        }
      },
      "39": {
        start: {
          line: 166,
          column: 2
        },
        end: {
          line: 166,
          column: 44
        }
      },
      "40": {
        start: {
          line: 168,
          column: 2
        },
        end: {
          line: 168,
          column: 41
        }
      },
      "41": {
        start: {
          line: 188,
          column: 2
        },
        end: {
          line: 190,
          column: 3
        }
      },
      "42": {
        start: {
          line: 189,
          column: 4
        },
        end: {
          line: 189,
          column: 44
        }
      },
      "43": {
        start: {
          line: 192,
          column: 20
        },
        end: {
          line: 196,
          column: 3
        }
      },
      "44": {
        start: {
          line: 197,
          column: 13
        },
        end: {
          line: 197,
          column: 76
        }
      },
      "45": {
        start: {
          line: 198,
          column: 23
        },
        end: {
          line: 198,
          column: 25
        }
      },
      "46": {
        start: {
          line: 199,
          column: 2
        },
        end: {
          line: 199,
          column: 62
        }
      },
      "47": {
        start: {
          line: 200,
          column: 2
        },
        end: {
          line: 200,
          column: 44
        }
      },
      "48": {
        start: {
          line: 202,
          column: 2
        },
        end: {
          line: 202,
          column: 41
        }
      },
      "49": {
        start: {
          line: 222,
          column: 2
        },
        end: {
          line: 224,
          column: 3
        }
      },
      "50": {
        start: {
          line: 223,
          column: 4
        },
        end: {
          line: 223,
          column: 50
        }
      },
      "51": {
        start: {
          line: 226,
          column: 20
        },
        end: {
          line: 230,
          column: 3
        }
      },
      "52": {
        start: {
          line: 232,
          column: 13
        },
        end: {
          line: 232,
          column: 76
        }
      },
      "53": {
        start: {
          line: 233,
          column: 23
        },
        end: {
          line: 235,
          column: 3
        }
      },
      "54": {
        start: {
          line: 236,
          column: 2
        },
        end: {
          line: 236,
          column: 44
        }
      },
      "55": {
        start: {
          line: 238,
          column: 2
        },
        end: {
          line: 238,
          column: 41
        }
      },
      "56": {
        start: {
          line: 265,
          column: 2
        },
        end: {
          line: 267,
          column: 3
        }
      },
      "57": {
        start: {
          line: 266,
          column: 4
        },
        end: {
          line: 266,
          column: 42
        }
      },
      "58": {
        start: {
          line: 269,
          column: 2
        },
        end: {
          line: 304,
          column: 3
        }
      },
      "59": {
        start: {
          line: 270,
          column: 4
        },
        end: {
          line: 272,
          column: 5
        }
      },
      "60": {
        start: {
          line: 271,
          column: 6
        },
        end: {
          line: 271,
          column: 61
        }
      },
      "61": {
        start: {
          line: 273,
          column: 19
        },
        end: {
          line: 273,
          column: 78
        }
      },
      "62": {
        start: {
          line: 275,
          column: 4
        },
        end: {
          line: 275,
          column: 57
        }
      },
      "63": {
        start: {
          line: 276,
          column: 9
        },
        end: {
          line: 304,
          column: 3
        }
      },
      "64": {
        start: {
          line: 278,
          column: 4
        },
        end: {
          line: 282,
          column: 5
        }
      },
      "65": {
        start: {
          line: 279,
          column: 6
        },
        end: {
          line: 279,
          column: 64
        }
      },
      "66": {
        start: {
          line: 281,
          column: 6
        },
        end: {
          line: 281,
          column: 37
        }
      },
      "67": {
        start: {
          line: 284,
          column: 4
        },
        end: {
          line: 286,
          column: 5
        }
      },
      "68": {
        start: {
          line: 285,
          column: 6
        },
        end: {
          line: 285,
          column: 74
        }
      },
      "69": {
        start: {
          line: 288,
          column: 4
        },
        end: {
          line: 288,
          column: 59
        }
      },
      "70": {
        start: {
          line: 289,
          column: 9
        },
        end: {
          line: 304,
          column: 3
        }
      },
      "71": {
        start: {
          line: 291,
          column: 4
        },
        end: {
          line: 295,
          column: 5
        }
      },
      "72": {
        start: {
          line: 292,
          column: 6
        },
        end: {
          line: 292,
          column: 65
        }
      },
      "73": {
        start: {
          line: 294,
          column: 6
        },
        end: {
          line: 294,
          column: 38
        }
      },
      "74": {
        start: {
          line: 297,
          column: 4
        },
        end: {
          line: 299,
          column: 5
        }
      },
      "75": {
        start: {
          line: 298,
          column: 6
        },
        end: {
          line: 298,
          column: 75
        }
      },
      "76": {
        start: {
          line: 301,
          column: 4
        },
        end: {
          line: 301,
          column: 55
        }
      },
      "77": {
        start: {
          line: 303,
          column: 4
        },
        end: {
          line: 303,
          column: 41
        }
      },
      "78": {
        start: {
          line: 306,
          column: 17
        },
        end: {
          line: 309,
          column: 4
        }
      },
      "79": {
        start: {
          line: 311,
          column: 13
        },
        end: {
          line: 311,
          column: 68
        }
      },
      "80": {
        start: {
          line: 312,
          column: 23
        },
        end: {
          line: 312,
          column: 25
        }
      },
      "81": {
        start: {
          line: 313,
          column: 2
        },
        end: {
          line: 313,
          column: 62
        }
      },
      "82": {
        start: {
          line: 314,
          column: 2
        },
        end: {
          line: 314,
          column: 44
        }
      },
      "83": {
        start: {
          line: 316,
          column: 2
        },
        end: {
          line: 316,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "revokeAccountSponsorship",
        decl: {
          start: {
            line: 24,
            column: 16
          },
          end: {
            line: 24,
            column: 40
          }
        },
        loc: {
          start: {
            line: 24,
            column: 52
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 24
      },
      "1": {
        name: "revokeTrustlineSponsorship",
        decl: {
          start: {
            line: 63,
            column: 16
          },
          end: {
            line: 63,
            column: 42
          }
        },
        loc: {
          start: {
            line: 63,
            column: 54
          },
          end: {
            line: 89,
            column: 1
          }
        },
        line: 63
      },
      "2": {
        name: "revokeOfferSponsorship",
        decl: {
          start: {
            line: 109,
            column: 16
          },
          end: {
            line: 109,
            column: 38
          }
        },
        loc: {
          start: {
            line: 109,
            column: 50
          },
          end: {
            line: 129,
            column: 1
          }
        },
        line: 109
      },
      "3": {
        name: "revokeDataSponsorship",
        decl: {
          start: {
            line: 149,
            column: 16
          },
          end: {
            line: 149,
            column: 37
          }
        },
        loc: {
          start: {
            line: 149,
            column: 49
          },
          end: {
            line: 169,
            column: 1
          }
        },
        line: 149
      },
      "4": {
        name: "revokeClaimableBalanceSponsorship",
        decl: {
          start: {
            line: 187,
            column: 16
          },
          end: {
            line: 187,
            column: 49
          }
        },
        loc: {
          start: {
            line: 187,
            column: 61
          },
          end: {
            line: 203,
            column: 1
          }
        },
        line: 187
      },
      "5": {
        name: "revokeLiquidityPoolSponsorship",
        decl: {
          start: {
            line: 221,
            column: 16
          },
          end: {
            line: 221,
            column: 46
          }
        },
        loc: {
          start: {
            line: 221,
            column: 58
          },
          end: {
            line: 239,
            column: 1
          }
        },
        line: 221
      },
      "6": {
        name: "revokeSignerSponsorship",
        decl: {
          start: {
            line: 264,
            column: 16
          },
          end: {
            line: 264,
            column: 39
          }
        },
        loc: {
          start: {
            line: 264,
            column: 51
          },
          end: {
            line: 317,
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
            line: 24,
            column: 41
          },
          end: {
            line: 24,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 24,
            column: 48
          },
          end: {
            line: 24,
            column: 50
          }
        }],
        line: 24
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 27,
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
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 63,
            column: 43
          },
          end: {
            line: 63,
            column: 52
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 63,
            column: 50
          },
          end: {
            line: 63,
            column: 52
          }
        }],
        line: 63
      },
      "3": {
        loc: {
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 66,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 2
          },
          end: {
            line: 66,
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
        line: 64
      },
      "4": {
        loc: {
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 2
          },
          end: {
            line: 75,
            column: 3
          }
        }, {
          start: {
            line: 71,
            column: 9
          },
          end: {
            line: 75,
            column: 3
          }
        }],
        line: 69
      },
      "5": {
        loc: {
          start: {
            line: 71,
            column: 9
          },
          end: {
            line: 75,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 71,
            column: 9
          },
          end: {
            line: 75,
            column: 3
          }
        }, {
          start: {
            line: 73,
            column: 9
          },
          end: {
            line: 75,
            column: 3
          }
        }],
        line: 71
      },
      "6": {
        loc: {
          start: {
            line: 109,
            column: 39
          },
          end: {
            line: 109,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 109,
            column: 46
          },
          end: {
            line: 109,
            column: 48
          }
        }],
        line: 109
      },
      "7": {
        loc: {
          start: {
            line: 110,
            column: 2
          },
          end: {
            line: 112,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 110,
            column: 2
          },
          end: {
            line: 112,
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
        line: 110
      },
      "8": {
        loc: {
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 115,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 2
          },
          end: {
            line: 115,
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
        line: 113
      },
      "9": {
        loc: {
          start: {
            line: 149,
            column: 38
          },
          end: {
            line: 149,
            column: 47
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 149,
            column: 45
          },
          end: {
            line: 149,
            column: 47
          }
        }],
        line: 149
      },
      "10": {
        loc: {
          start: {
            line: 150,
            column: 2
          },
          end: {
            line: 152,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 150,
            column: 2
          },
          end: {
            line: 152,
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
        line: 150
      },
      "11": {
        loc: {
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 153,
            column: 2
          },
          end: {
            line: 155,
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
        line: 153
      },
      "12": {
        loc: {
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 51
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 153,
            column: 6
          },
          end: {
            line: 153,
            column: 26
          }
        }, {
          start: {
            line: 153,
            column: 30
          },
          end: {
            line: 153,
            column: 51
          }
        }],
        line: 153
      },
      "13": {
        loc: {
          start: {
            line: 187,
            column: 50
          },
          end: {
            line: 187,
            column: 59
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 187,
            column: 57
          },
          end: {
            line: 187,
            column: 59
          }
        }],
        line: 187
      },
      "14": {
        loc: {
          start: {
            line: 188,
            column: 2
          },
          end: {
            line: 190,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 188,
            column: 2
          },
          end: {
            line: 190,
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
        line: 188
      },
      "15": {
        loc: {
          start: {
            line: 221,
            column: 47
          },
          end: {
            line: 221,
            column: 56
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 221,
            column: 54
          },
          end: {
            line: 221,
            column: 56
          }
        }],
        line: 221
      },
      "16": {
        loc: {
          start: {
            line: 222,
            column: 2
          },
          end: {
            line: 224,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 222,
            column: 2
          },
          end: {
            line: 224,
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
        line: 222
      },
      "17": {
        loc: {
          start: {
            line: 264,
            column: 40
          },
          end: {
            line: 264,
            column: 49
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 264,
            column: 47
          },
          end: {
            line: 264,
            column: 49
          }
        }],
        line: 264
      },
      "18": {
        loc: {
          start: {
            line: 265,
            column: 2
          },
          end: {
            line: 267,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 265,
            column: 2
          },
          end: {
            line: 267,
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
        line: 265
      },
      "19": {
        loc: {
          start: {
            line: 269,
            column: 2
          },
          end: {
            line: 304,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 269,
            column: 2
          },
          end: {
            line: 304,
            column: 3
          }
        }, {
          start: {
            line: 276,
            column: 9
          },
          end: {
            line: 304,
            column: 3
          }
        }],
        line: 269
      },
      "20": {
        loc: {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 272,
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
        line: 270
      },
      "21": {
        loc: {
          start: {
            line: 276,
            column: 9
          },
          end: {
            line: 304,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 276,
            column: 9
          },
          end: {
            line: 304,
            column: 3
          }
        }, {
          start: {
            line: 289,
            column: 9
          },
          end: {
            line: 304,
            column: 3
          }
        }],
        line: 276
      },
      "22": {
        loc: {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 282,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 282,
            column: 5
          }
        }, {
          start: {
            line: 280,
            column: 11
          },
          end: {
            line: 282,
            column: 5
          }
        }],
        line: 278
      },
      "23": {
        loc: {
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 286,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 284,
            column: 4
          },
          end: {
            line: 286,
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
        line: 284
      },
      "24": {
        loc: {
          start: {
            line: 284,
            column: 10
          },
          end: {
            line: 284,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 284,
            column: 10
          },
          end: {
            line: 284,
            column: 40
          }
        }, {
          start: {
            line: 284,
            column: 44
          },
          end: {
            line: 284,
            column: 64
          }
        }],
        line: 284
      },
      "25": {
        loc: {
          start: {
            line: 289,
            column: 9
          },
          end: {
            line: 304,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 289,
            column: 9
          },
          end: {
            line: 304,
            column: 3
          }
        }, {
          start: {
            line: 302,
            column: 9
          },
          end: {
            line: 304,
            column: 3
          }
        }],
        line: 289
      },
      "26": {
        loc: {
          start: {
            line: 291,
            column: 4
          },
          end: {
            line: 295,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 291,
            column: 4
          },
          end: {
            line: 295,
            column: 5
          }
        }, {
          start: {
            line: 293,
            column: 11
          },
          end: {
            line: 295,
            column: 5
          }
        }],
        line: 291
      },
      "27": {
        loc: {
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 299,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 297,
            column: 4
          },
          end: {
            line: 299,
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
        line: 297
      },
      "28": {
        loc: {
          start: {
            line: 297,
            column: 10
          },
          end: {
            line: 297,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 297,
            column: 10
          },
          end: {
            line: 297,
            column: 40
          }
        }, {
          start: {
            line: 297,
            column: 44
          },
          end: {
            line: 297,
            column: 64
          }
        }],
        line: 297
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
      "83": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0],
      "14": [0, 0],
      "15": [0],
      "16": [0, 0],
      "17": [0],
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
    hash: "bad8e1ad82d3c88ddafacd9a5e23735194b04705"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2g9vyalfml = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2g9vyalfml();
/**
 * Create a "revoke sponsorship" operation for an account.
 *
 * @function
 * @alias Operation.revokeAccountSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The sponsored account ID.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeAccountSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 * });
 *
 */
function revokeAccountSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2g9vyalfml().b[0][0]++, {});
  cov_2g9vyalfml().f[0]++;
  cov_2g9vyalfml().s[0]++;
  if (!_strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    cov_2g9vyalfml().b[1][0]++;
    cov_2g9vyalfml().s[1]++;
    throw new Error('account is invalid');
  } else {
    cov_2g9vyalfml().b[1][1]++;
  }
  var ledgerKey = (cov_2g9vyalfml().s[2]++, _xdr["default"].LedgerKey.account(new _xdr["default"].LedgerKeyAccount({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId()
  })));
  var op = (cov_2g9vyalfml().s[3]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_2g9vyalfml().s[4]++, {});
  cov_2g9vyalfml().s[5]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_2g9vyalfml().s[6]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2g9vyalfml().s[7]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a trustline.
 *
 * @function
 * @alias Operation.revokeTrustlineSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The account ID which owns the trustline.
 * @param {Asset | LiquidityPoolId} opts.asset - The trustline asset.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeTrustlineSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   asset: new StellarBase.LiquidityPoolId(
 *     'USDUSD',
 *     'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7'
 *   )
 * });
 *
 */
function revokeTrustlineSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2g9vyalfml().b[2][0]++, {});
  cov_2g9vyalfml().f[1]++;
  cov_2g9vyalfml().s[8]++;
  if (!_strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    cov_2g9vyalfml().b[3][0]++;
    cov_2g9vyalfml().s[9]++;
    throw new Error('account is invalid');
  } else {
    cov_2g9vyalfml().b[3][1]++;
  }
  var asset;
  cov_2g9vyalfml().s[10]++;
  if (opts.asset instanceof _asset.Asset) {
    cov_2g9vyalfml().b[4][0]++;
    cov_2g9vyalfml().s[11]++;
    asset = opts.asset.toTrustLineXDRObject();
  } else {
    cov_2g9vyalfml().b[4][1]++;
    cov_2g9vyalfml().s[12]++;
    if (opts.asset instanceof _liquidity_pool_id.LiquidityPoolId) {
      cov_2g9vyalfml().b[5][0]++;
      cov_2g9vyalfml().s[13]++;
      asset = opts.asset.toXDRObject();
    } else {
      cov_2g9vyalfml().b[5][1]++;
      cov_2g9vyalfml().s[14]++;
      throw new TypeError('asset must be an Asset or LiquidityPoolId');
    }
  }
  var ledgerKey = (cov_2g9vyalfml().s[15]++, _xdr["default"].LedgerKey.trustline(new _xdr["default"].LedgerKeyTrustLine({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
    asset: asset
  })));
  var op = (cov_2g9vyalfml().s[16]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_2g9vyalfml().s[17]++, {});
  cov_2g9vyalfml().s[18]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_2g9vyalfml().s[19]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2g9vyalfml().s[20]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for an offer.
 *
 * @function
 * @alias Operation.revokeOfferSponsorship
 * @param {object} opts Options object
 * @param {string} opts.seller - The account ID which created the offer.
 * @param {string} opts.offerId - The offer ID.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeOfferSponsorship({
 *   seller: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   offerId: '1234'
 * });
 *
 */
function revokeOfferSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2g9vyalfml().b[6][0]++, {});
  cov_2g9vyalfml().f[2]++;
  cov_2g9vyalfml().s[21]++;
  if (!_strkey.StrKey.isValidEd25519PublicKey(opts.seller)) {
    cov_2g9vyalfml().b[7][0]++;
    cov_2g9vyalfml().s[22]++;
    throw new Error('seller is invalid');
  } else {
    cov_2g9vyalfml().b[7][1]++;
  }
  cov_2g9vyalfml().s[23]++;
  if (!(0, _isString["default"])(opts.offerId)) {
    cov_2g9vyalfml().b[8][0]++;
    cov_2g9vyalfml().s[24]++;
    throw new Error('offerId is invalid');
  } else {
    cov_2g9vyalfml().b[8][1]++;
  }
  var ledgerKey = (cov_2g9vyalfml().s[25]++, _xdr["default"].LedgerKey.offer(new _xdr["default"].LedgerKeyOffer({
    sellerId: _keypair.Keypair.fromPublicKey(opts.seller).xdrAccountId(),
    offerId: _xdr["default"].Int64.fromString(opts.offerId)
  })));
  var op = (cov_2g9vyalfml().s[26]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_2g9vyalfml().s[27]++, {});
  cov_2g9vyalfml().s[28]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_2g9vyalfml().s[29]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2g9vyalfml().s[30]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a data entry.
 *
 * @function
 * @alias Operation.revokeDataSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The account ID which owns the data entry.
 * @param {string} opts.name - The name of the data entry
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeDataSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   name: 'foo'
 * });
 *
 */
function revokeDataSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2g9vyalfml().b[9][0]++, {});
  cov_2g9vyalfml().f[3]++;
  cov_2g9vyalfml().s[31]++;
  if (!_strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    cov_2g9vyalfml().b[10][0]++;
    cov_2g9vyalfml().s[32]++;
    throw new Error('account is invalid');
  } else {
    cov_2g9vyalfml().b[10][1]++;
  }
  cov_2g9vyalfml().s[33]++;
  if ((cov_2g9vyalfml().b[12][0]++, !(0, _isString["default"])(opts.name)) || (cov_2g9vyalfml().b[12][1]++, opts.name.length > 64)) {
    cov_2g9vyalfml().b[11][0]++;
    cov_2g9vyalfml().s[34]++;
    throw new Error('name must be a string, up to 64 characters');
  } else {
    cov_2g9vyalfml().b[11][1]++;
  }
  var ledgerKey = (cov_2g9vyalfml().s[35]++, _xdr["default"].LedgerKey.data(new _xdr["default"].LedgerKeyData({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
    dataName: opts.name
  })));
  var op = (cov_2g9vyalfml().s[36]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_2g9vyalfml().s[37]++, {});
  cov_2g9vyalfml().s[38]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_2g9vyalfml().s[39]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2g9vyalfml().s[40]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a claimable balance.
 *
 * @function
 * @alias Operation.revokeClaimableBalanceSponsorship
 * @param {object} opts Options object
 * @param {string} opts.balanceId - The sponsored claimable balance ID.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeClaimableBalanceSponsorship({
 *   balanceId: '00000000da0d57da7d4850e7fc10d2a9d0ebc731f7afb40574c03395b17d49149b91f5be',
 * });
 *
 */
function revokeClaimableBalanceSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2g9vyalfml().b[13][0]++, {});
  cov_2g9vyalfml().f[4]++;
  cov_2g9vyalfml().s[41]++;
  if (!(0, _isString["default"])(opts.balanceId)) {
    cov_2g9vyalfml().b[14][0]++;
    cov_2g9vyalfml().s[42]++;
    throw new Error('balanceId is invalid');
  } else {
    cov_2g9vyalfml().b[14][1]++;
  }
  var ledgerKey = (cov_2g9vyalfml().s[43]++, _xdr["default"].LedgerKey.claimableBalance(new _xdr["default"].LedgerKeyClaimableBalance({
    balanceId: _xdr["default"].ClaimableBalanceId.fromXDR(opts.balanceId, 'hex')
  })));
  var op = (cov_2g9vyalfml().s[44]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_2g9vyalfml().s[45]++, {});
  cov_2g9vyalfml().s[46]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_2g9vyalfml().s[47]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2g9vyalfml().s[48]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Creates a "revoke sponsorship" operation for a liquidity pool.
 *
 * @function
 * @alias Operation.revokeLiquidityPoolSponsorship
 * @param {object} opts – Options object.
 * @param {string} opts.liquidityPoolId - The sponsored liquidity pool ID in 'hex' string.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr Operation.
 *
 * @example
 * const op = Operation.revokeLiquidityPoolSponsorship({
 *   liquidityPoolId: 'dd7b1ab831c273310ddbec6f97870aa83c2fbd78ce22aded37ecbf4f3380fac7',
 * });
 *
 */
function revokeLiquidityPoolSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2g9vyalfml().b[15][0]++, {});
  cov_2g9vyalfml().f[5]++;
  cov_2g9vyalfml().s[49]++;
  if (!(0, _isString["default"])(opts.liquidityPoolId)) {
    cov_2g9vyalfml().b[16][0]++;
    cov_2g9vyalfml().s[50]++;
    throw new Error('liquidityPoolId is invalid');
  } else {
    cov_2g9vyalfml().b[16][1]++;
  }
  var ledgerKey = (cov_2g9vyalfml().s[51]++, _xdr["default"].LedgerKey.liquidityPool(new _xdr["default"].LedgerKeyLiquidityPool({
    liquidityPoolId: _xdr["default"].PoolId.fromXDR(opts.liquidityPoolId, 'hex')
  })));
  var op = (cov_2g9vyalfml().s[52]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipLedgerEntry(ledgerKey));
  var opAttributes = (cov_2g9vyalfml().s[53]++, {
    body: _xdr["default"].OperationBody.revokeSponsorship(op)
  });
  cov_2g9vyalfml().s[54]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2g9vyalfml().s[55]++;
  return new _xdr["default"].Operation(opAttributes);
}

/**
 * Create a "revoke sponsorship" operation for a signer.
 *
 * @function
 * @alias Operation.revokeSignerSponsorship
 * @param {object} opts Options object
 * @param {string} opts.account - The account ID where the signer sponsorship is being removed from.
 * @param {object} opts.signer - The signer whose sponsorship is being removed.
 * @param {string} [opts.signer.ed25519PublicKey] - The ed25519 public key of the signer.
 * @param {Buffer|string} [opts.signer.sha256Hash] - sha256 hash (Buffer or hex string).
 * @param {Buffer|string} [opts.signer.preAuthTx] - Hash (Buffer or hex string) of transaction.
 * @param {string} [opts.source] - The source account for the operation. Defaults to the transaction's source account.
 * @returns {xdr.Operation} xdr operation
 *
 * @example
 * const op = Operation.revokeSignerSponsorship({
 *   account: 'GDGU5OAPHNPU5UCLE5RDJHG7PXZFQYWKCFOEXSXNMR6KRQRI5T6XXCD7
 *   signer: {
 *     ed25519PublicKey: 'GCEZWKCA5VLDNRLN3RPRJMRZOX3Z6G5CHCGSNFHEYVXM3XOJMDS674JZ'
 *   }
 * })
 *
 */
function revokeSignerSponsorship() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_2g9vyalfml().b[17][0]++, {});
  cov_2g9vyalfml().f[6]++;
  cov_2g9vyalfml().s[56]++;
  if (!_strkey.StrKey.isValidEd25519PublicKey(opts.account)) {
    cov_2g9vyalfml().b[18][0]++;
    cov_2g9vyalfml().s[57]++;
    throw new Error('account is invalid');
  } else {
    cov_2g9vyalfml().b[18][1]++;
  }
  var key;
  cov_2g9vyalfml().s[58]++;
  if (opts.signer.ed25519PublicKey) {
    cov_2g9vyalfml().b[19][0]++;
    cov_2g9vyalfml().s[59]++;
    if (!_strkey.StrKey.isValidEd25519PublicKey(opts.signer.ed25519PublicKey)) {
      cov_2g9vyalfml().b[20][0]++;
      cov_2g9vyalfml().s[60]++;
      throw new Error('signer.ed25519PublicKey is invalid.');
    } else {
      cov_2g9vyalfml().b[20][1]++;
    }
    var rawKey = (cov_2g9vyalfml().s[61]++, _strkey.StrKey.decodeEd25519PublicKey(opts.signer.ed25519PublicKey));
    cov_2g9vyalfml().s[62]++;
    key = new _xdr["default"].SignerKey.signerKeyTypeEd25519(rawKey);
  } else {
    cov_2g9vyalfml().b[19][1]++;
    cov_2g9vyalfml().s[63]++;
    if (opts.signer.preAuthTx) {
      cov_2g9vyalfml().b[21][0]++;
      var buffer;
      cov_2g9vyalfml().s[64]++;
      if ((0, _isString["default"])(opts.signer.preAuthTx)) {
        cov_2g9vyalfml().b[22][0]++;
        cov_2g9vyalfml().s[65]++;
        buffer = _BrowserBuffer["default"].from(opts.signer.preAuthTx, 'hex');
      } else {
        cov_2g9vyalfml().b[22][1]++;
        cov_2g9vyalfml().s[66]++;
        buffer = opts.signer.preAuthTx;
      }
      cov_2g9vyalfml().s[67]++;
      if (!((cov_2g9vyalfml().b[24][0]++, _BrowserBuffer["default"].isBuffer(buffer)) && (cov_2g9vyalfml().b[24][1]++, buffer.length === 32))) {
        cov_2g9vyalfml().b[23][0]++;
        cov_2g9vyalfml().s[68]++;
        throw new Error('signer.preAuthTx must be 32 bytes BrowserBuffer.');
      } else {
        cov_2g9vyalfml().b[23][1]++;
      }
      cov_2g9vyalfml().s[69]++;
      key = new _xdr["default"].SignerKey.signerKeyTypePreAuthTx(buffer);
    } else {
      cov_2g9vyalfml().b[21][1]++;
      cov_2g9vyalfml().s[70]++;
      if (opts.signer.sha256Hash) {
        cov_2g9vyalfml().b[25][0]++;
        var _buffer;
        cov_2g9vyalfml().s[71]++;
        if ((0, _isString["default"])(opts.signer.sha256Hash)) {
          cov_2g9vyalfml().b[26][0]++;
          cov_2g9vyalfml().s[72]++;
          _buffer = _BrowserBuffer["default"].from(opts.signer.sha256Hash, 'hex');
        } else {
          cov_2g9vyalfml().b[26][1]++;
          cov_2g9vyalfml().s[73]++;
          _buffer = opts.signer.sha256Hash;
        }
        cov_2g9vyalfml().s[74]++;
        if (!((cov_2g9vyalfml().b[28][0]++, _BrowserBuffer["default"].isBuffer(_buffer)) && (cov_2g9vyalfml().b[28][1]++, _buffer.length === 32))) {
          cov_2g9vyalfml().b[27][0]++;
          cov_2g9vyalfml().s[75]++;
          throw new Error('signer.sha256Hash must be 32 bytes BrowserBuffer.');
        } else {
          cov_2g9vyalfml().b[27][1]++;
        }
        cov_2g9vyalfml().s[76]++;
        key = new _xdr["default"].SignerKey.signerKeyTypeHashX(_buffer);
      } else {
        cov_2g9vyalfml().b[25][1]++;
        cov_2g9vyalfml().s[77]++;
        throw new Error('signer is invalid');
      }
    }
  }
  var signer = (cov_2g9vyalfml().s[78]++, new _xdr["default"].RevokeSponsorshipOpSigner({
    accountId: _keypair.Keypair.fromPublicKey(opts.account).xdrAccountId(),
    signerKey: key
  }));
  var op = (cov_2g9vyalfml().s[79]++, _xdr["default"].RevokeSponsorshipOp.revokeSponsorshipSigner(signer));
  var opAttributes = (cov_2g9vyalfml().s[80]++, {});
  cov_2g9vyalfml().s[81]++;
  opAttributes.body = _xdr["default"].OperationBody.revokeSponsorship(op);
  cov_2g9vyalfml().s[82]++;
  this.setSourceAccount(opAttributes, opts);
  cov_2g9vyalfml().s[83]++;
  return new _xdr["default"].Operation(opAttributes);
}