"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOptions = setOptions;
var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _BrowserBuffer = _interopRequireDefault(require("../util/BrowserBuffer"));
var _xdr = _interopRequireDefault(require("../xdr"));
var _keypair = require("../keypair");
var _strkey = require("../strkey");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function cov_dkdc7d38o() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\operations\\set_options.js";
  var hash = "cf509673bc6d21b554dd0c84c5bf5ac86f5565e2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\operations\\set_options.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "1": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 16
        }
      },
      "2": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 61
        }
      },
      "3": {
        start: {
          line: 54,
          column: 21
        },
        end: {
          line: 54,
          column: 23
        }
      },
      "4": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 63,
          column: 3
        }
      },
      "5": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 59,
          column: 5
        }
      },
      "6": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 50
        }
      },
      "7": {
        start: {
          line: 60,
          column: 4
        },
        end: {
          line: 62,
          column: 21
        }
      },
      "8": {
        start: {
          line: 65,
          column: 2
        },
        end: {
          line: 68,
          column: 4
        }
      },
      "9": {
        start: {
          line: 69,
          column: 2
        },
        end: {
          line: 69,
          column: 79
        }
      },
      "10": {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 74,
          column: 4
        }
      },
      "11": {
        start: {
          line: 75,
          column: 2
        },
        end: {
          line: 79,
          column: 4
        }
      },
      "12": {
        start: {
          line: 80,
          column: 2
        },
        end: {
          line: 84,
          column: 4
        }
      },
      "13": {
        start: {
          line: 85,
          column: 2
        },
        end: {
          line: 89,
          column: 4
        }
      },
      "14": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 93,
          column: 3
        }
      },
      "15": {
        start: {
          line: 92,
          column: 4
        },
        end: {
          line: 92,
          column: 70
        }
      },
      "16": {
        start: {
          line: 94,
          column: 2
        },
        end: {
          line: 94,
          column: 42
        }
      },
      "17": {
        start: {
          line: 96,
          column: 2
        },
        end: {
          line: 179,
          column: 3
        }
      },
      "18": {
        start: {
          line: 97,
          column: 19
        },
        end: {
          line: 101,
          column: 5
        }
      },
      "19": {
        start: {
          line: 104,
          column: 20
        },
        end: {
          line: 104,
          column: 21
        }
      },
      "20": {
        start: {
          line: 106,
          column: 4
        },
        end: {
          line: 117,
          column: 5
        }
      },
      "21": {
        start: {
          line: 107,
          column: 6
        },
        end: {
          line: 109,
          column: 7
        }
      },
      "22": {
        start: {
          line: 108,
          column: 8
        },
        end: {
          line: 108,
          column: 63
        }
      },
      "23": {
        start: {
          line: 110,
          column: 21
        },
        end: {
          line: 112,
          column: 7
        }
      },
      "24": {
        start: {
          line: 115,
          column: 6
        },
        end: {
          line: 115,
          column: 59
        }
      },
      "25": {
        start: {
          line: 116,
          column: 6
        },
        end: {
          line: 116,
          column: 21
        }
      },
      "26": {
        start: {
          line: 119,
          column: 4
        },
        end: {
          line: 136,
          column: 5
        }
      },
      "27": {
        start: {
          line: 120,
          column: 6
        },
        end: {
          line: 122,
          column: 7
        }
      },
      "28": {
        start: {
          line: 121,
          column: 8
        },
        end: {
          line: 121,
          column: 81
        }
      },
      "29": {
        start: {
          line: 124,
          column: 6
        },
        end: {
          line: 131,
          column: 7
        }
      },
      "30": {
        start: {
          line: 130,
          column: 8
        },
        end: {
          line: 130,
          column: 76
        }
      },
      "31": {
        start: {
          line: 134,
          column: 6
        },
        end: {
          line: 134,
          column: 76
        }
      },
      "32": {
        start: {
          line: 135,
          column: 6
        },
        end: {
          line: 135,
          column: 21
        }
      },
      "33": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 155,
          column: 5
        }
      },
      "34": {
        start: {
          line: 139,
          column: 6
        },
        end: {
          line: 141,
          column: 7
        }
      },
      "35": {
        start: {
          line: 140,
          column: 8
        },
        end: {
          line: 140,
          column: 83
        }
      },
      "36": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 150,
          column: 7
        }
      },
      "37": {
        start: {
          line: 149,
          column: 8
        },
        end: {
          line: 149,
          column: 77
        }
      },
      "38": {
        start: {
          line: 153,
          column: 6
        },
        end: {
          line: 153,
          column: 73
        }
      },
      "39": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 154,
          column: 21
        }
      },
      "40": {
        start: {
          line: 157,
          column: 4
        },
        end: {
          line: 170,
          column: 5
        }
      },
      "41": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 160,
          column: 7
        }
      },
      "42": {
        start: {
          line: 159,
          column: 8
        },
        end: {
          line: 159,
          column: 67
        }
      },
      "43": {
        start: {
          line: 161,
          column: 21
        },
        end: {
          line: 163,
          column: 7
        }
      },
      "44": {
        start: {
          line: 165,
          column: 8
        },
        end: {
          line: 165,
          column: 57
        }
      },
      "45": {
        start: {
          line: 168,
          column: 6
        },
        end: {
          line: 168,
          column: 78
        }
      },
      "46": {
        start: {
          line: 169,
          column: 6
        },
        end: {
          line: 169,
          column: 21
        }
      },
      "47": {
        start: {
          line: 172,
          column: 4
        },
        end: {
          line: 176,
          column: 5
        }
      },
      "48": {
        start: {
          line: 173,
          column: 6
        },
        end: {
          line: 175,
          column: 8
        }
      },
      "49": {
        start: {
          line: 178,
          column: 4
        },
        end: {
          line: 178,
          column: 56
        }
      },
      "50": {
        start: {
          line: 181,
          column: 23
        },
        end: {
          line: 181,
          column: 55
        }
      },
      "51": {
        start: {
          line: 183,
          column: 23
        },
        end: {
          line: 183,
          column: 25
        }
      },
      "52": {
        start: {
          line: 184,
          column: 2
        },
        end: {
          line: 184,
          column: 65
        }
      },
      "53": {
        start: {
          line: 185,
          column: 2
        },
        end: {
          line: 185,
          column: 44
        }
      },
      "54": {
        start: {
          line: 187,
          column: 2
        },
        end: {
          line: 187,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "weightCheckFunction",
        decl: {
          start: {
            line: 11,
            column: 9
          },
          end: {
            line: 11,
            column: 28
          }
        },
        loc: {
          start: {
            line: 11,
            column: 42
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 11
      },
      "1": {
        name: "setOptions",
        decl: {
          start: {
            line: 53,
            column: 16
          },
          end: {
            line: 53,
            column: 26
          }
        },
        loc: {
          start: {
            line: 53,
            column: 33
          },
          end: {
            line: 188,
            column: 1
          }
        },
        line: 53
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 14,
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
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 32
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 6
          },
          end: {
            line: 12,
            column: 16
          }
        }, {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 32
          }
        }],
        line: 12
      },
      "2": {
        loc: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 63,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 63,
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
        line: 56
      },
      "3": {
        loc: {
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 59,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 4
          },
          end: {
            line: 59,
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
        line: 57
      },
      "4": {
        loc: {
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 93,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 2
          },
          end: {
            line: 93,
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
        line: 91
      },
      "5": {
        loc: {
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 65
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 91,
            column: 6
          },
          end: {
            line: 91,
            column: 35
          }
        }, {
          start: {
            line: 91,
            column: 39
          },
          end: {
            line: 91,
            column: 65
          }
        }],
        line: 91
      },
      "6": {
        loc: {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 179,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 179,
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
        line: 96
      },
      "7": {
        loc: {
          start: {
            line: 106,
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
            line: 106,
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
        line: 106
      },
      "8": {
        loc: {
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 109,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 107,
            column: 6
          },
          end: {
            line: 109,
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
        line: 107
      },
      "9": {
        loc: {
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 136,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 119,
            column: 4
          },
          end: {
            line: 136,
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
        line: 119
      },
      "10": {
        loc: {
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 122,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 120,
            column: 6
          },
          end: {
            line: 122,
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
        line: 120
      },
      "11": {
        loc: {
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 131,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 124,
            column: 6
          },
          end: {
            line: 131,
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
        line: 124
      },
      "12": {
        loc: {
          start: {
            line: 126,
            column: 10
          },
          end: {
            line: 127,
            column: 45
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 126,
            column: 10
          },
          end: {
            line: 126,
            column: 55
          }
        }, {
          start: {
            line: 127,
            column: 10
          },
          end: {
            line: 127,
            column: 45
          }
        }],
        line: 126
      },
      "13": {
        loc: {
          start: {
            line: 138,
            column: 4
          },
          end: {
            line: 155,
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
            line: 155,
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
      "14": {
        loc: {
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 141,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 139,
            column: 6
          },
          end: {
            line: 141,
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
        line: 139
      },
      "15": {
        loc: {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 150,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 150,
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
        line: 143
      },
      "16": {
        loc: {
          start: {
            line: 145,
            column: 10
          },
          end: {
            line: 146,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 145,
            column: 10
          },
          end: {
            line: 145,
            column: 56
          }
        }, {
          start: {
            line: 146,
            column: 10
          },
          end: {
            line: 146,
            column: 46
          }
        }],
        line: 145
      },
      "17": {
        loc: {
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 170,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 157,
            column: 4
          },
          end: {
            line: 170,
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
        line: 157
      },
      "18": {
        loc: {
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 160,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 158,
            column: 6
          },
          end: {
            line: 160,
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
        line: 158
      },
      "19": {
        loc: {
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 176,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 172,
            column: 4
          },
          end: {
            line: 176,
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
        line: 172
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
      "54": 0
    },
    f: {
      "0": 0,
      "1": 0
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
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cf509673bc6d21b554dd0c84c5bf5ac86f5565e2"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_dkdc7d38o = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_dkdc7d38o();
/* eslint-disable no-param-reassign */
function weightCheckFunction(value, name) {
  cov_dkdc7d38o().f[0]++;
  cov_dkdc7d38o().s[0]++;
  if ((cov_dkdc7d38o().b[1][0]++, value >= 0) && (cov_dkdc7d38o().b[1][1]++, value <= 255)) {
    cov_dkdc7d38o().b[0][0]++;
    cov_dkdc7d38o().s[1]++;
    return true;
  } else {
    cov_dkdc7d38o().b[0][1]++;
  }
  cov_dkdc7d38o().s[2]++;
  throw new Error("".concat(name, " value must be between 0 and 255"));
}

/**
 * Returns an XDR SetOptionsOp. A "set options" operations set or clear account flags,
 * set the account's inflation destination, and/or add new signers to the account.
 * The flags used in `opts.clearFlags` and `opts.setFlags` can be the following:
 *   - `{@link AuthRequiredFlag}`
 *   - `{@link AuthRevocableFlag}`
 *   - `{@link AuthImmutableFlag}`
 *   - `{@link AuthClawbackEnabledFlag}`
 *
 * It's possible to set/clear multiple flags at once using logical or.
 *
 * @function
 * @alias Operation.setOptions
 *
 * @param {object} opts Options object
 * @param {string} [opts.inflationDest] - Set this account ID as the account's inflation destination.
 * @param {(number|string)} [opts.clearFlags] - Bitmap integer for which account flags to clear.
 * @param {(number|string)} [opts.setFlags] - Bitmap integer for which account flags to set.
 * @param {number|string} [opts.masterWeight] - The master key weight.
 * @param {number|string} [opts.lowThreshold] - The sum weight for the low threshold.
 * @param {number|string} [opts.medThreshold] - The sum weight for the medium threshold.
 * @param {number|string} [opts.highThreshold] - The sum weight for the high threshold.
 * @param {object} [opts.signer] - Add or remove a signer from the account. The signer is
 *                                 deleted if the weight is 0. Only one of `ed25519PublicKey`, `sha256Hash`, `preAuthTx` should be defined.
 * @param {string} [opts.signer.ed25519PublicKey] - The ed25519 public key of the signer.
 * @param {Buffer|string} [opts.signer.sha256Hash] - sha256 hash (Buffer or hex string) of preimage that will unlock funds. Preimage should be used as signature of future transaction.
 * @param {Buffer|string} [opts.signer.preAuthTx] - Hash (Buffer or hex string) of transaction that will unlock funds.
 * @param {string} [opts.signer.ed25519SignedPayload] - Signed payload signer (ed25519 public key + raw payload) for atomic transaction signature disclosure.
 * @param {number|string} [opts.signer.weight] - The weight of the new signer (0 to delete or 1-255)
 * @param {string} [opts.homeDomain] - sets the home domain used for reverse federation lookup.
 * @param {string} [opts.source] - The source account (defaults to transaction source).
 *
 * @returns {xdr.SetOptionsOp}  XDR operation
 * @see [Account flags](https://developers.stellar.org/docs/glossary/accounts/#flags)
 */
function setOptions(opts) {
  cov_dkdc7d38o().f[1]++;
  var attributes = (cov_dkdc7d38o().s[3]++, {});
  cov_dkdc7d38o().s[4]++;
  if (opts.inflationDest) {
    cov_dkdc7d38o().b[2][0]++;
    cov_dkdc7d38o().s[5]++;
    if (!_strkey.StrKey.isValidEd25519PublicKey(opts.inflationDest)) {
      cov_dkdc7d38o().b[3][0]++;
      cov_dkdc7d38o().s[6]++;
      throw new Error('inflationDest is invalid');
    } else {
      cov_dkdc7d38o().b[3][1]++;
    }
    cov_dkdc7d38o().s[7]++;
    attributes.inflationDest = _keypair.Keypair.fromPublicKey(opts.inflationDest).xdrAccountId();
  } else {
    cov_dkdc7d38o().b[2][1]++;
  }
  cov_dkdc7d38o().s[8]++;
  attributes.clearFlags = this._checkUnsignedIntValue('clearFlags', opts.clearFlags);
  cov_dkdc7d38o().s[9]++;
  attributes.setFlags = this._checkUnsignedIntValue('setFlags', opts.setFlags);
  cov_dkdc7d38o().s[10]++;
  attributes.masterWeight = this._checkUnsignedIntValue('masterWeight', opts.masterWeight, weightCheckFunction);
  cov_dkdc7d38o().s[11]++;
  attributes.lowThreshold = this._checkUnsignedIntValue('lowThreshold', opts.lowThreshold, weightCheckFunction);
  cov_dkdc7d38o().s[12]++;
  attributes.medThreshold = this._checkUnsignedIntValue('medThreshold', opts.medThreshold, weightCheckFunction);
  cov_dkdc7d38o().s[13]++;
  attributes.highThreshold = this._checkUnsignedIntValue('highThreshold', opts.highThreshold, weightCheckFunction);
  cov_dkdc7d38o().s[14]++;
  if ((cov_dkdc7d38o().b[5][0]++, !(0, _isUndefined["default"])(opts.homeDomain)) && (cov_dkdc7d38o().b[5][1]++, !(0, _isString["default"])(opts.homeDomain))) {
    cov_dkdc7d38o().b[4][0]++;
    cov_dkdc7d38o().s[15]++;
    throw new TypeError('homeDomain argument must be of type String');
  } else {
    cov_dkdc7d38o().b[4][1]++;
  }
  cov_dkdc7d38o().s[16]++;
  attributes.homeDomain = opts.homeDomain;
  cov_dkdc7d38o().s[17]++;
  if (opts.signer) {
    cov_dkdc7d38o().b[6][0]++;
    var weight = (cov_dkdc7d38o().s[18]++, this._checkUnsignedIntValue('signer.weight', opts.signer.weight, weightCheckFunction));
    var key;
    var setValues = (cov_dkdc7d38o().s[19]++, 0);
    cov_dkdc7d38o().s[20]++;
    if (opts.signer.ed25519PublicKey) {
      cov_dkdc7d38o().b[7][0]++;
      cov_dkdc7d38o().s[21]++;
      if (!_strkey.StrKey.isValidEd25519PublicKey(opts.signer.ed25519PublicKey)) {
        cov_dkdc7d38o().b[8][0]++;
        cov_dkdc7d38o().s[22]++;
        throw new Error('signer.ed25519PublicKey is invalid.');
      } else {
        cov_dkdc7d38o().b[8][1]++;
      }
      var rawKey = (cov_dkdc7d38o().s[23]++, _strkey.StrKey.decodeEd25519PublicKey(opts.signer.ed25519PublicKey));

      // eslint-disable-next-line new-cap
      cov_dkdc7d38o().s[24]++;
      key = new _xdr["default"].SignerKey.signerKeyTypeEd25519(rawKey);
      cov_dkdc7d38o().s[25]++;
      setValues += 1;
    } else {
      cov_dkdc7d38o().b[7][1]++;
    }
    cov_dkdc7d38o().s[26]++;
    if (opts.signer.preAuthTx) {
      cov_dkdc7d38o().b[9][0]++;
      cov_dkdc7d38o().s[27]++;
      if ((0, _isString["default"])(opts.signer.preAuthTx)) {
        cov_dkdc7d38o().b[10][0]++;
        cov_dkdc7d38o().s[28]++;
        opts.signer.preAuthTx = _BrowserBuffer["default"].from(opts.signer.preAuthTx, 'hex');
      } else {
        cov_dkdc7d38o().b[10][1]++;
      }
      cov_dkdc7d38o().s[29]++;
      if (!((cov_dkdc7d38o().b[12][0]++, _BrowserBuffer["default"].isBuffer(opts.signer.preAuthTx)) && (cov_dkdc7d38o().b[12][1]++, opts.signer.preAuthTx.length === 32))) {
        cov_dkdc7d38o().b[11][0]++;
        cov_dkdc7d38o().s[30]++;
        throw new Error('signer.preAuthTx must be 32 bytes BrowserBuffer.');
      } else {
        cov_dkdc7d38o().b[11][1]++;
      }

      // eslint-disable-next-line new-cap
      cov_dkdc7d38o().s[31]++;
      key = new _xdr["default"].SignerKey.signerKeyTypePreAuthTx(opts.signer.preAuthTx);
      cov_dkdc7d38o().s[32]++;
      setValues += 1;
    } else {
      cov_dkdc7d38o().b[9][1]++;
    }
    cov_dkdc7d38o().s[33]++;
    if (opts.signer.sha256Hash) {
      cov_dkdc7d38o().b[13][0]++;
      cov_dkdc7d38o().s[34]++;
      if ((0, _isString["default"])(opts.signer.sha256Hash)) {
        cov_dkdc7d38o().b[14][0]++;
        cov_dkdc7d38o().s[35]++;
        opts.signer.sha256Hash = _BrowserBuffer["default"].from(opts.signer.sha256Hash, 'hex');
      } else {
        cov_dkdc7d38o().b[14][1]++;
      }
      cov_dkdc7d38o().s[36]++;
      if (!((cov_dkdc7d38o().b[16][0]++, _BrowserBuffer["default"].isBuffer(opts.signer.sha256Hash)) && (cov_dkdc7d38o().b[16][1]++, opts.signer.sha256Hash.length === 32))) {
        cov_dkdc7d38o().b[15][0]++;
        cov_dkdc7d38o().s[37]++;
        throw new Error('signer.sha256Hash must be 32 bytes BrowserBuffer.');
      } else {
        cov_dkdc7d38o().b[15][1]++;
      }

      // eslint-disable-next-line new-cap
      cov_dkdc7d38o().s[38]++;
      key = new _xdr["default"].SignerKey.signerKeyTypeHashX(opts.signer.sha256Hash);
      cov_dkdc7d38o().s[39]++;
      setValues += 1;
    } else {
      cov_dkdc7d38o().b[13][1]++;
    }
    cov_dkdc7d38o().s[40]++;
    if (opts.signer.ed25519SignedPayload) {
      cov_dkdc7d38o().b[17][0]++;
      cov_dkdc7d38o().s[41]++;
      if (!_strkey.StrKey.isValidSignedPayload(opts.signer.ed25519SignedPayload)) {
        cov_dkdc7d38o().b[18][0]++;
        cov_dkdc7d38o().s[42]++;
        throw new Error('signer.ed25519SignedPayload is invalid.');
      } else {
        cov_dkdc7d38o().b[18][1]++;
      }
      var _rawKey = (cov_dkdc7d38o().s[43]++, _strkey.StrKey.decodeSignedPayload(opts.signer.ed25519SignedPayload));
      var signedPayloadXdr = (cov_dkdc7d38o().s[44]++, _xdr["default"].SignerKeyEd25519SignedPayload.fromXDR(_rawKey));

      // eslint-disable-next-line new-cap
      cov_dkdc7d38o().s[45]++;
      key = _xdr["default"].SignerKey.signerKeyTypeEd25519SignedPayload(signedPayloadXdr);
      cov_dkdc7d38o().s[46]++;
      setValues += 1;
    } else {
      cov_dkdc7d38o().b[17][1]++;
    }
    cov_dkdc7d38o().s[47]++;
    if (setValues !== 1) {
      cov_dkdc7d38o().b[19][0]++;
      cov_dkdc7d38o().s[48]++;
      throw new Error('Signer object must contain exactly one of signer.ed25519PublicKey, signer.sha256Hash, signer.preAuthTx.');
    } else {
      cov_dkdc7d38o().b[19][1]++;
    }
    cov_dkdc7d38o().s[49]++;
    attributes.signer = new _xdr["default"].Signer({
      key: key,
      weight: weight
    });
  } else {
    cov_dkdc7d38o().b[6][1]++;
  }
  var setOptionsOp = (cov_dkdc7d38o().s[50]++, new _xdr["default"].SetOptionsOp(attributes));
  var opAttributes = (cov_dkdc7d38o().s[51]++, {});
  cov_dkdc7d38o().s[52]++;
  opAttributes.body = _xdr["default"].OperationBody.setOptions(setOptionsOp);
  cov_dkdc7d38o().s[53]++;
  this.setSourceAccount(opAttributes, opts);
  cov_dkdc7d38o().s[54]++;
  return new _xdr["default"].Operation(opAttributes);
}