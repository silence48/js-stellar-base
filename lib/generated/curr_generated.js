"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var XDR = _interopRequireWildcard(require("js-xdr"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function cov_1racd7g41m() {
  var path = "F:\\stellardesign\\js-stellar-base\\src\\generated\\curr_generated.js";
  var hash = "4e397c9ffe4d7befff8643d393e6bf7fb00b0357";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "F:\\stellardesign\\js-stellar-base\\src\\generated\\curr_generated.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 7156,
          column: 2
        }
      },
      "1": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 38
        }
      },
      "2": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "3": {
        start: {
          line: 44,
          column: 0
        },
        end: {
          line: 49,
          column: 3
        }
      },
      "4": {
        start: {
          line: 61,
          column: 0
        },
        end: {
          line: 65,
          column: 3
        }
      },
      "5": {
        start: {
          line: 80,
          column: 0
        },
        end: {
          line: 87,
          column: 3
        }
      },
      "6": {
        start: {
          line: 101,
          column: 0
        },
        end: {
          line: 107,
          column: 3
        }
      },
      "7": {
        start: {
          line: 119,
          column: 0
        },
        end: {
          line: 123,
          column: 3
        }
      },
      "8": {
        start: {
          line: 160,
          column: 0
        },
        end: {
          line: 175,
          column: 3
        }
      },
      "9": {
        start: {
          line: 219,
          column: 0
        },
        end: {
          line: 223,
          column: 3
        }
      },
      "10": {
        start: {
          line: 234,
          column: 0
        },
        end: {
          line: 237,
          column: 3
        }
      },
      "11": {
        start: {
          line: 249,
          column: 0
        },
        end: {
          line: 253,
          column: 3
        }
      },
      "12": {
        start: {
          line: 260,
          column: 0
        },
        end: {
          line: 260,
          column: 50
        }
      },
      "13": {
        start: {
          line: 267,
          column: 0
        },
        end: {
          line: 267,
          column: 41
        }
      },
      "14": {
        start: {
          line: 274,
          column: 0
        },
        end: {
          line: 274,
          column: 40
        }
      },
      "15": {
        start: {
          line: 281,
          column: 0
        },
        end: {
          line: 281,
          column: 40
        }
      },
      "16": {
        start: {
          line: 288,
          column: 0
        },
        end: {
          line: 288,
          column: 51
        }
      },
      "17": {
        start: {
          line: 295,
          column: 0
        },
        end: {
          line: 295,
          column: 47
        }
      },
      "18": {
        start: {
          line: 302,
          column: 0
        },
        end: {
          line: 302,
          column: 46
        }
      },
      "19": {
        start: {
          line: 309,
          column: 0
        },
        end: {
          line: 309,
          column: 44
        }
      },
      "20": {
        start: {
          line: 316,
          column: 0
        },
        end: {
          line: 316,
          column: 42
        }
      },
      "21": {
        start: {
          line: 323,
          column: 0
        },
        end: {
          line: 323,
          column: 41
        }
      },
      "22": {
        start: {
          line: 330,
          column: 0
        },
        end: {
          line: 330,
          column: 43
        }
      },
      "23": {
        start: {
          line: 343,
          column: 0
        },
        end: {
          line: 348,
          column: 3
        }
      },
      "24": {
        start: {
          line: 364,
          column: 0
        },
        end: {
          line: 375,
          column: 3
        }
      },
      "25": {
        start: {
          line: 386,
          column: 0
        },
        end: {
          line: 389,
          column: 3
        }
      },
      "26": {
        start: {
          line: 400,
          column: 0
        },
        end: {
          line: 403,
          column: 3
        }
      },
      "27": {
        start: {
          line: 422,
          column: 0
        },
        end: {
          line: 434,
          column: 3
        }
      },
      "28": {
        start: {
          line: 445,
          column: 0
        },
        end: {
          line: 448,
          column: 3
        }
      },
      "29": {
        start: {
          line: 459,
          column: 0
        },
        end: {
          line: 462,
          column: 3
        }
      },
      "30": {
        start: {
          line: 475,
          column: 0
        },
        end: {
          line: 480,
          column: 3
        }
      },
      "31": {
        start: {
          line: 495,
          column: 0
        },
        end: {
          line: 502,
          column: 3
        }
      },
      "32": {
        start: {
          line: 513,
          column: 0
        },
        end: {
          line: 516,
          column: 3
        }
      },
      "33": {
        start: {
          line: 539,
          column: 0
        },
        end: {
          line: 544,
          column: 3
        }
      },
      "34": {
        start: {
          line: 551,
          column: 0
        },
        end: {
          line: 551,
          column: 37
        }
      },
      "35": {
        start: {
          line: 558,
          column: 0
        },
        end: {
          line: 558,
          column: 41
        }
      },
      "36": {
        start: {
          line: 565,
          column: 0
        },
        end: {
          line: 565,
          column: 29
        }
      },
      "37": {
        start: {
          line: 572,
          column: 0
        },
        end: {
          line: 572,
          column: 74
        }
      },
      "38": {
        start: {
          line: 590,
          column: 0
        },
        end: {
          line: 594,
          column: 3
        }
      },
      "39": {
        start: {
          line: 607,
          column: 0
        },
        end: {
          line: 617,
          column: 3
        }
      },
      "40": {
        start: {
          line: 638,
          column: 0
        },
        end: {
          line: 643,
          column: 3
        }
      },
      "41": {
        start: {
          line: 656,
          column: 0
        },
        end: {
          line: 666,
          column: 3
        }
      },
      "42": {
        start: {
          line: 685,
          column: 0
        },
        end: {
          line: 688,
          column: 3
        }
      },
      "43": {
        start: {
          line: 701,
          column: 0
        },
        end: {
          line: 711,
          column: 3
        }
      },
      "44": {
        start: {
          line: 745,
          column: 0
        },
        end: {
          line: 756,
          column: 3
        }
      },
      "45": {
        start: {
          line: 773,
          column: 0
        },
        end: {
          line: 777,
          column: 3
        }
      },
      "46": {
        start: {
          line: 784,
          column: 0
        },
        end: {
          line: 784,
          column: 37
        }
      },
      "47": {
        start: {
          line: 791,
          column: 0
        },
        end: {
          line: 791,
          column: 41
        }
      },
      "48": {
        start: {
          line: 798,
          column: 0
        },
        end: {
          line: 798,
          column: 41
        }
      },
      "49": {
        start: {
          line: 808,
          column: 0
        },
        end: {
          line: 810,
          column: 3
        }
      },
      "50": {
        start: {
          line: 832,
          column: 0
        },
        end: {
          line: 846,
          column: 3
        }
      },
      "51": {
        start: {
          line: 857,
          column: 0
        },
        end: {
          line: 865,
          column: 3
        }
      },
      "52": {
        start: {
          line: 882,
          column: 0
        },
        end: {
          line: 885,
          column: 3
        }
      },
      "53": {
        start: {
          line: 898,
          column: 0
        },
        end: {
          line: 908,
          column: 3
        }
      },
      "54": {
        start: {
          line: 927,
          column: 0
        },
        end: {
          line: 930,
          column: 3
        }
      },
      "55": {
        start: {
          line: 955,
          column: 0
        },
        end: {
          line: 965,
          column: 3
        }
      },
      "56": {
        start: {
          line: 1003,
          column: 0
        },
        end: {
          line: 1010,
          column: 3
        }
      },
      "57": {
        start: {
          line: 1022,
          column: 0
        },
        end: {
          line: 1024,
          column: 3
        }
      },
      "58": {
        start: {
          line: 1031,
          column: 0
        },
        end: {
          line: 1031,
          column: 38
        }
      },
      "59": {
        start: {
          line: 1042,
          column: 0
        },
        end: {
          line: 1050,
          column: 3
        }
      },
      "60": {
        start: {
          line: 1080,
          column: 0
        },
        end: {
          line: 1089,
          column: 3
        }
      },
      "61": {
        start: {
          line: 1100,
          column: 0
        },
        end: {
          line: 1108,
          column: 3
        }
      },
      "62": {
        start: {
          line: 1128,
          column: 0
        },
        end: {
          line: 1133,
          column: 3
        }
      },
      "63": {
        start: {
          line: 1148,
          column: 0
        },
        end: {
          line: 1155,
          column: 3
        }
      },
      "64": {
        start: {
          line: 1177,
          column: 0
        },
        end: {
          line: 1195,
          column: 3
        }
      },
      "65": {
        start: {
          line: 1205,
          column: 0
        },
        end: {
          line: 1207,
          column: 3
        }
      },
      "66": {
        start: {
          line: 1218,
          column: 0
        },
        end: {
          line: 1221,
          column: 3
        }
      },
      "67": {
        start: {
          line: 1236,
          column: 0
        },
        end: {
          line: 1245,
          column: 3
        }
      },
      "68": {
        start: {
          line: 1255,
          column: 0
        },
        end: {
          line: 1257,
          column: 3
        }
      },
      "69": {
        start: {
          line: 1268,
          column: 0
        },
        end: {
          line: 1277,
          column: 3
        }
      },
      "70": {
        start: {
          line: 1289,
          column: 0
        },
        end: {
          line: 1291,
          column: 3
        }
      },
      "71": {
        start: {
          line: 1298,
          column: 0
        },
        end: {
          line: 1298,
          column: 47
        }
      },
      "72": {
        start: {
          line: 1309,
          column: 0
        },
        end: {
          line: 1317,
          column: 3
        }
      },
      "73": {
        start: {
          line: 1334,
          column: 0
        },
        end: {
          line: 1337,
          column: 3
        }
      },
      "74": {
        start: {
          line: 1350,
          column: 0
        },
        end: {
          line: 1360,
          column: 3
        }
      },
      "75": {
        start: {
          line: 1390,
          column: 0
        },
        end: {
          line: 1396,
          column: 3
        }
      },
      "76": {
        start: {
          line: 1408,
          column: 0
        },
        end: {
          line: 1412,
          column: 3
        }
      },
      "77": {
        start: {
          line: 1428,
          column: 0
        },
        end: {
          line: 1434,
          column: 3
        }
      },
      "78": {
        start: {
          line: 1454,
          column: 0
        },
        end: {
          line: 1463,
          column: 3
        }
      },
      "79": {
        start: {
          line: 1489,
          column: 0
        },
        end: {
          line: 1492,
          column: 3
        }
      },
      "80": {
        start: {
          line: 1503,
          column: 0
        },
        end: {
          line: 1511,
          column: 3
        }
      },
      "81": {
        start: {
          line: 1528,
          column: 0
        },
        end: {
          line: 1531,
          column: 3
        }
      },
      "82": {
        start: {
          line: 1552,
          column: 0
        },
        end: {
          line: 1571,
          column: 3
        }
      },
      "83": {
        start: {
          line: 1584,
          column: 0
        },
        end: {
          line: 1594,
          column: 3
        }
      },
      "84": {
        start: {
          line: 1631,
          column: 0
        },
        end: {
          line: 1635,
          column: 3
        }
      },
      "85": {
        start: {
          line: 1645,
          column: 0
        },
        end: {
          line: 1647,
          column: 3
        }
      },
      "86": {
        start: {
          line: 1658,
          column: 0
        },
        end: {
          line: 1661,
          column: 3
        }
      },
      "87": {
        start: {
          line: 1672,
          column: 0
        },
        end: {
          line: 1675,
          column: 3
        }
      },
      "88": {
        start: {
          line: 1686,
          column: 0
        },
        end: {
          line: 1689,
          column: 3
        }
      },
      "89": {
        start: {
          line: 1699,
          column: 0
        },
        end: {
          line: 1701,
          column: 3
        }
      },
      "90": {
        start: {
          line: 1711,
          column: 0
        },
        end: {
          line: 1713,
          column: 3
        }
      },
      "91": {
        start: {
          line: 1760,
          column: 0
        },
        end: {
          line: 1779,
          column: 3
        }
      },
      "92": {
        start: {
          line: 1796,
          column: 0
        },
        end: {
          line: 1805,
          column: 3
        }
      },
      "93": {
        start: {
          line: 1812,
          column: 0
        },
        end: {
          line: 1812,
          column: 47
        }
      },
      "94": {
        start: {
          line: 1823,
          column: 0
        },
        end: {
          line: 1826,
          column: 3
        }
      },
      "95": {
        start: {
          line: 1837,
          column: 0
        },
        end: {
          line: 1840,
          column: 3
        }
      },
      "96": {
        start: {
          line: 1853,
          column: 0
        },
        end: {
          line: 1863,
          column: 3
        }
      },
      "97": {
        start: {
          line: 1891,
          column: 0
        },
        end: {
          line: 1896,
          column: 3
        }
      },
      "98": {
        start: {
          line: 1903,
          column: 0
        },
        end: {
          line: 1903,
          column: 43
        }
      },
      "99": {
        start: {
          line: 1915,
          column: 0
        },
        end: {
          line: 1919,
          column: 3
        }
      },
      "100": {
        start: {
          line: 1930,
          column: 0
        },
        end: {
          line: 1938,
          column: 3
        }
      },
      "101": {
        start: {
          line: 1955,
          column: 0
        },
        end: {
          line: 1958,
          column: 3
        }
      },
      "102": {
        start: {
          line: 1971,
          column: 0
        },
        end: {
          line: 1981,
          column: 3
        }
      },
      "103": {
        start: {
          line: 2026,
          column: 0
        },
        end: {
          line: 2042,
          column: 3
        }
      },
      "104": {
        start: {
          line: 2056,
          column: 0
        },
        end: {
          line: 2062,
          column: 3
        }
      },
      "105": {
        start: {
          line: 2081,
          column: 0
        },
        end: {
          line: 2098,
          column: 3
        }
      },
      "106": {
        start: {
          line: 2113,
          column: 0
        },
        end: {
          line: 2118,
          column: 3
        }
      },
      "107": {
        start: {
          line: 2129,
          column: 0
        },
        end: {
          line: 2137,
          column: 3
        }
      },
      "108": {
        start: {
          line: 2156,
          column: 0
        },
        end: {
          line: 2159,
          column: 3
        }
      },
      "109": {
        start: {
          line: 2176,
          column: 0
        },
        end: {
          line: 2190,
          column: 3
        }
      },
      "110": {
        start: {
          line: 2202,
          column: 0
        },
        end: {
          line: 2204,
          column: 3
        }
      },
      "111": {
        start: {
          line: 2215,
          column: 0
        },
        end: {
          line: 2218,
          column: 3
        }
      },
      "112": {
        start: {
          line: 2233,
          column: 0
        },
        end: {
          line: 2242,
          column: 3
        }
      },
      "113": {
        start: {
          line: 2253,
          column: 0
        },
        end: {
          line: 2262,
          column: 3
        }
      },
      "114": {
        start: {
          line: 2273,
          column: 0
        },
        end: {
          line: 2276,
          column: 3
        }
      },
      "115": {
        start: {
          line: 2287,
          column: 0
        },
        end: {
          line: 2290,
          column: 3
        }
      },
      "116": {
        start: {
          line: 2302,
          column: 0
        },
        end: {
          line: 2311,
          column: 3
        }
      },
      "117": {
        start: {
          line: 2322,
          column: 0
        },
        end: {
          line: 2325,
          column: 3
        }
      },
      "118": {
        start: {
          line: 2335,
          column: 0
        },
        end: {
          line: 2337,
          column: 3
        }
      },
      "119": {
        start: {
          line: 2350,
          column: 0
        },
        end: {
          line: 2360,
          column: 3
        }
      },
      "120": {
        start: {
          line: 2381,
          column: 0
        },
        end: {
          line: 2385,
          column: 3
        }
      },
      "121": {
        start: {
          line: 2396,
          column: 0
        },
        end: {
          line: 2404,
          column: 3
        }
      },
      "122": {
        start: {
          line: 2423,
          column: 0
        },
        end: {
          line: 2427,
          column: 3
        }
      },
      "123": {
        start: {
          line: 2438,
          column: 0
        },
        end: {
          line: 2446,
          column: 3
        }
      },
      "124": {
        start: {
          line: 2465,
          column: 0
        },
        end: {
          line: 2469,
          column: 3
        }
      },
      "125": {
        start: {
          line: 2480,
          column: 0
        },
        end: {
          line: 2483,
          column: 3
        }
      },
      "126": {
        start: {
          line: 2494,
          column: 0
        },
        end: {
          line: 2497,
          column: 3
        }
      },
      "127": {
        start: {
          line: 2508,
          column: 0
        },
        end: {
          line: 2517,
          column: 3
        }
      },
      "128": {
        start: {
          line: 2530,
          column: 0
        },
        end: {
          line: 2535,
          column: 3
        }
      },
      "129": {
        start: {
          line: 2552,
          column: 0
        },
        end: {
          line: 2567,
          column: 3
        }
      },
      "130": {
        start: {
          line: 2574,
          column: 0
        },
        end: {
          line: 2574,
          column: 93
        }
      },
      "131": {
        start: {
          line: 2584,
          column: 0
        },
        end: {
          line: 2586,
          column: 3
        }
      },
      "132": {
        start: {
          line: 2597,
          column: 0
        },
        end: {
          line: 2600,
          column: 3
        }
      },
      "133": {
        start: {
          line: 2614,
          column: 0
        },
        end: {
          line: 2618,
          column: 3
        }
      },
      "134": {
        start: {
          line: 2633,
          column: 0
        },
        end: {
          line: 2646,
          column: 3
        }
      },
      "135": {
        start: {
          line: 2658,
          column: 0
        },
        end: {
          line: 2662,
          column: 3
        }
      },
      "136": {
        start: {
          line: 2673,
          column: 0
        },
        end: {
          line: 2676,
          column: 3
        }
      },
      "137": {
        start: {
          line: 2699,
          column: 0
        },
        end: {
          line: 2705,
          column: 3
        }
      },
      "138": {
        start: {
          line: 2728,
          column: 0
        },
        end: {
          line: 2734,
          column: 3
        }
      },
      "139": {
        start: {
          line: 2747,
          column: 0
        },
        end: {
          line: 2758,
          column: 3
        }
      },
      "140": {
        start: {
          line: 2772,
          column: 0
        },
        end: {
          line: 2778,
          column: 3
        }
      },
      "141": {
        start: {
          line: 2789,
          column: 0
        },
        end: {
          line: 2792,
          column: 3
        }
      },
      "142": {
        start: {
          line: 2802,
          column: 0
        },
        end: {
          line: 2804,
          column: 3
        }
      },
      "143": {
        start: {
          line: 2816,
          column: 0
        },
        end: {
          line: 2820,
          column: 3
        }
      },
      "144": {
        start: {
          line: 2838,
          column: 0
        },
        end: {
          line: 2848,
          column: 3
        }
      },
      "145": {
        start: {
          line: 2855,
          column: 0
        },
        end: {
          line: 2855,
          column: 52
        }
      },
      "146": {
        start: {
          line: 2865,
          column: 0
        },
        end: {
          line: 2867,
          column: 3
        }
      },
      "147": {
        start: {
          line: 2878,
          column: 0
        },
        end: {
          line: 2881,
          column: 3
        }
      },
      "148": {
        start: {
          line: 2894,
          column: 0
        },
        end: {
          line: 2905,
          column: 3
        }
      },
      "149": {
        start: {
          line: 2924,
          column: 0
        },
        end: {
          line: 2928,
          column: 3
        }
      },
      "150": {
        start: {
          line: 2965,
          column: 0
        },
        end: {
          line: 2985,
          column: 3
        }
      },
      "151": {
        start: {
          line: 2996,
          column: 0
        },
        end: {
          line: 2999,
          column: 3
        }
      },
      "152": {
        start: {
          line: 3009,
          column: 0
        },
        end: {
          line: 3011,
          column: 3
        }
      },
      "153": {
        start: {
          line: 3025,
          column: 0
        },
        end: {
          line: 3031,
          column: 3
        }
      },
      "154": {
        start: {
          line: 3042,
          column: 0
        },
        end: {
          line: 3045,
          column: 3
        }
      },
      "155": {
        start: {
          line: 3052,
          column: 0
        },
        end: {
          line: 3052,
          column: 51
        }
      },
      "156": {
        start: {
          line: 3066,
          column: 0
        },
        end: {
          line: 3072,
          column: 3
        }
      },
      "157": {
        start: {
          line: 3083,
          column: 0
        },
        end: {
          line: 3086,
          column: 3
        }
      },
      "158": {
        start: {
          line: 3112,
          column: 0
        },
        end: {
          line: 3128,
          column: 3
        }
      },
      "159": {
        start: {
          line: 3135,
          column: 0
        },
        end: {
          line: 3135,
          column: 71
        }
      },
      "160": {
        start: {
          line: 3149,
          column: 0
        },
        end: {
          line: 3154,
          column: 3
        }
      },
      "161": {
        start: {
          line: 3165,
          column: 0
        },
        end: {
          line: 3174,
          column: 3
        }
      },
      "162": {
        start: {
          line: 3181,
          column: 0
        },
        end: {
          line: 3181,
          column: 45
        }
      },
      "163": {
        start: {
          line: 3188,
          column: 0
        },
        end: {
          line: 3188,
          column: 105
        }
      },
      "164": {
        start: {
          line: 3198,
          column: 0
        },
        end: {
          line: 3200,
          column: 3
        }
      },
      "165": {
        start: {
          line: 3207,
          column: 0
        },
        end: {
          line: 3207,
          column: 45
        }
      },
      "166": {
        start: {
          line: 3214,
          column: 0
        },
        end: {
          line: 3214,
          column: 105
        }
      },
      "167": {
        start: {
          line: 3224,
          column: 0
        },
        end: {
          line: 3226,
          column: 3
        }
      },
      "168": {
        start: {
          line: 3281,
          column: 0
        },
        end: {
          line: 3325,
          column: 3
        }
      },
      "169": {
        start: {
          line: 3337,
          column: 0
        },
        end: {
          line: 3341,
          column: 3
        }
      },
      "170": {
        start: {
          line: 3357,
          column: 0
        },
        end: {
          line: 3366,
          column: 3
        }
      },
      "171": {
        start: {
          line: 3377,
          column: 0
        },
        end: {
          line: 3386,
          column: 3
        }
      },
      "172": {
        start: {
          line: 3397,
          column: 0
        },
        end: {
          line: 3400,
          column: 3
        }
      },
      "173": {
        start: {
          line: 3417,
          column: 0
        },
        end: {
          line: 3428,
          column: 3
        }
      },
      "174": {
        start: {
          line: 3439,
          column: 0
        },
        end: {
          line: 3442,
          column: 3
        }
      },
      "175": {
        start: {
          line: 3475,
          column: 0
        },
        end: {
          line: 3500,
          column: 3
        }
      },
      "176": {
        start: {
          line: 3511,
          column: 0
        },
        end: {
          line: 3514,
          column: 3
        }
      },
      "177": {
        start: {
          line: 3526,
          column: 0
        },
        end: {
          line: 3530,
          column: 3
        }
      },
      "178": {
        start: {
          line: 3549,
          column: 0
        },
        end: {
          line: 3556,
          column: 3
        }
      },
      "179": {
        start: {
          line: 3575,
          column: 0
        },
        end: {
          line: 3582,
          column: 3
        }
      },
      "180": {
        start: {
          line: 3598,
          column: 0
        },
        end: {
          line: 3604,
          column: 3
        }
      },
      "181": {
        start: {
          line: 3621,
          column: 0
        },
        end: {
          line: 3627,
          column: 3
        }
      },
      "182": {
        start: {
          line: 3640,
          column: 0
        },
        end: {
          line: 3645,
          column: 3
        }
      },
      "183": {
        start: {
          line: 3670,
          column: 0
        },
        end: {
          line: 3680,
          column: 3
        }
      },
      "184": {
        start: {
          line: 3702,
          column: 0
        },
        end: {
          line: 3716,
          column: 3
        }
      },
      "185": {
        start: {
          line: 3729,
          column: 0
        },
        end: {
          line: 3732,
          column: 3
        }
      },
      "186": {
        start: {
          line: 3746,
          column: 0
        },
        end: {
          line: 3750,
          column: 3
        }
      },
      "187": {
        start: {
          line: 3761,
          column: 0
        },
        end: {
          line: 3764,
          column: 3
        }
      },
      "188": {
        start: {
          line: 3774,
          column: 0
        },
        end: {
          line: 3776,
          column: 3
        }
      },
      "189": {
        start: {
          line: 3788,
          column: 0
        },
        end: {
          line: 3792,
          column: 3
        }
      },
      "190": {
        start: {
          line: 3802,
          column: 0
        },
        end: {
          line: 3804,
          column: 3
        }
      },
      "191": {
        start: {
          line: 3814,
          column: 0
        },
        end: {
          line: 3816,
          column: 3
        }
      },
      "192": {
        start: {
          line: 3827,
          column: 0
        },
        end: {
          line: 3830,
          column: 3
        }
      },
      "193": {
        start: {
          line: 3841,
          column: 0
        },
        end: {
          line: 3844,
          column: 3
        }
      },
      "194": {
        start: {
          line: 3861,
          column: 0
        },
        end: {
          line: 3872,
          column: 3
        }
      },
      "195": {
        start: {
          line: 3884,
          column: 0
        },
        end: {
          line: 3888,
          column: 3
        }
      },
      "196": {
        start: {
          line: 3898,
          column: 0
        },
        end: {
          line: 3900,
          column: 3
        }
      },
      "197": {
        start: {
          line: 3914,
          column: 0
        },
        end: {
          line: 3919,
          column: 3
        }
      },
      "198": {
        start: {
          line: 3926,
          column: 0
        },
        end: {
          line: 3926,
          column: 40
        }
      },
      "199": {
        start: {
          line: 3940,
          column: 0
        },
        end: {
          line: 3946,
          column: 3
        }
      },
      "200": {
        start: {
          line: 3959,
          column: 0
        },
        end: {
          line: 3964,
          column: 3
        }
      },
      "201": {
        start: {
          line: 4021,
          column: 0
        },
        end: {
          line: 4074,
          column: 3
        }
      },
      "202": {
        start: {
          line: 4140,
          column: 0
        },
        end: {
          line: 4143,
          column: 3
        }
      },
      "203": {
        start: {
          line: 4155,
          column: 0
        },
        end: {
          line: 4159,
          column: 3
        }
      },
      "204": {
        start: {
          line: 4173,
          column: 0
        },
        end: {
          line: 4179,
          column: 3
        }
      },
      "205": {
        start: {
          line: 4204,
          column: 0
        },
        end: {
          line: 4215,
          column: 3
        }
      },
      "206": {
        start: {
          line: 4229,
          column: 0
        },
        end: {
          line: 4235,
          column: 3
        }
      },
      "207": {
        start: {
          line: 4254,
          column: 0
        },
        end: {
          line: 4270,
          column: 3
        }
      },
      "208": {
        start: {
          line: 4281,
          column: 0
        },
        end: {
          line: 4284,
          column: 3
        }
      },
      "209": {
        start: {
          line: 4295,
          column: 0
        },
        end: {
          line: 4298,
          column: 3
        }
      },
      "210": {
        start: {
          line: 4336,
          column: 0
        },
        end: {
          line: 4343,
          column: 3
        }
      },
      "211": {
        start: {
          line: 4355,
          column: 0
        },
        end: {
          line: 4359,
          column: 3
        }
      },
      "212": {
        start: {
          line: 4374,
          column: 0
        },
        end: {
          line: 4386,
          column: 3
        }
      },
      "213": {
        start: {
          line: 4393,
          column: 0
        },
        end: {
          line: 4393,
          column: 33
        }
      },
      "214": {
        start: {
          line: 4404,
          column: 0
        },
        end: {
          line: 4412,
          column: 3
        }
      },
      "215": {
        start: {
          line: 4433,
          column: 0
        },
        end: {
          line: 4441,
          column: 3
        }
      },
      "216": {
        start: {
          line: 4454,
          column: 0
        },
        end: {
          line: 4457,
          column: 3
        }
      },
      "217": {
        start: {
          line: 4468,
          column: 0
        },
        end: {
          line: 4476,
          column: 3
        }
      },
      "218": {
        start: {
          line: 4508,
          column: 0
        },
        end: {
          line: 4516,
          column: 3
        }
      },
      "219": {
        start: {
          line: 4529,
          column: 0
        },
        end: {
          line: 4532,
          column: 3
        }
      },
      "220": {
        start: {
          line: 4543,
          column: 0
        },
        end: {
          line: 4552,
          column: 3
        }
      },
      "221": {
        start: {
          line: 4563,
          column: 0
        },
        end: {
          line: 4571,
          column: 3
        }
      },
      "222": {
        start: {
          line: 4594,
          column: 0
        },
        end: {
          line: 4599,
          column: 3
        }
      },
      "223": {
        start: {
          line: 4612,
          column: 0
        },
        end: {
          line: 4615,
          column: 3
        }
      },
      "224": {
        start: {
          line: 4630,
          column: 0
        },
        end: {
          line: 4643,
          column: 3
        }
      },
      "225": {
        start: {
          line: 4657,
          column: 0
        },
        end: {
          line: 4668,
          column: 3
        }
      },
      "226": {
        start: {
          line: 4687,
          column: 0
        },
        end: {
          line: 4690,
          column: 3
        }
      },
      "227": {
        start: {
          line: 4702,
          column: 0
        },
        end: {
          line: 4706,
          column: 3
        }
      },
      "228": {
        start: {
          line: 4726,
          column: 0
        },
        end: {
          line: 4733,
          column: 3
        }
      },
      "229": {
        start: {
          line: 4753,
          column: 0
        },
        end: {
          line: 4760,
          column: 3
        }
      },
      "230": {
        start: {
          line: 4778,
          column: 0
        },
        end: {
          line: 4784,
          column: 3
        }
      },
      "231": {
        start: {
          line: 4799,
          column: 0
        },
        end: {
          line: 4812,
          column: 3
        }
      },
      "232": {
        start: {
          line: 4830,
          column: 0
        },
        end: {
          line: 4836,
          column: 3
        }
      },
      "233": {
        start: {
          line: 4852,
          column: 0
        },
        end: {
          line: 4864,
          column: 3
        }
      },
      "234": {
        start: {
          line: 4886,
          column: 0
        },
        end: {
          line: 4897,
          column: 3
        }
      },
      "235": {
        start: {
          line: 4918,
          column: 0
        },
        end: {
          line: 4935,
          column: 3
        }
      },
      "236": {
        start: {
          line: 4969,
          column: 0
        },
        end: {
          line: 4983,
          column: 3
        }
      },
      "237": {
        start: {
          line: 4995,
          column: 0
        },
        end: {
          line: 4999,
          column: 3
        }
      },
      "238": {
        start: {
          line: 5010,
          column: 0
        },
        end: {
          line: 5013,
          column: 3
        }
      },
      "239": {
        start: {
          line: 5044,
          column: 0
        },
        end: {
          line: 5066,
          column: 3
        }
      },
      "240": {
        start: {
          line: 5099,
          column: 0
        },
        end: {
          line: 5113,
          column: 3
        }
      },
      "241": {
        start: {
          line: 5124,
          column: 0
        },
        end: {
          line: 5127,
          column: 3
        }
      },
      "242": {
        start: {
          line: 5157,
          column: 0
        },
        end: {
          line: 5179,
          column: 3
        }
      },
      "243": {
        start: {
          line: 5211,
          column: 0
        },
        end: {
          line: 5225,
          column: 3
        }
      },
      "244": {
        start: {
          line: 5237,
          column: 0
        },
        end: {
          line: 5241,
          column: 3
        }
      },
      "245": {
        start: {
          line: 5255,
          column: 0
        },
        end: {
          line: 5266,
          column: 3
        }
      },
      "246": {
        start: {
          line: 5287,
          column: 0
        },
        end: {
          line: 5290,
          column: 3
        }
      },
      "247": {
        start: {
          line: 5314,
          column: 0
        },
        end: {
          line: 5335,
          column: 3
        }
      },
      "248": {
        start: {
          line: 5364,
          column: 0
        },
        end: {
          line: 5378,
          column: 3
        }
      },
      "249": {
        start: {
          line: 5402,
          column: 0
        },
        end: {
          line: 5423,
          column: 3
        }
      },
      "250": {
        start: {
          line: 5446,
          column: 0
        },
        end: {
          line: 5458,
          column: 3
        }
      },
      "251": {
        start: {
          line: 5480,
          column: 0
        },
        end: {
          line: 5498,
          column: 3
        }
      },
      "252": {
        start: {
          line: 5522,
          column: 0
        },
        end: {
          line: 5532,
          column: 3
        }
      },
      "253": {
        start: {
          line: 5552,
          column: 0
        },
        end: {
          line: 5568,
          column: 3
        }
      },
      "254": {
        start: {
          line: 5588,
          column: 0
        },
        end: {
          line: 5596,
          column: 3
        }
      },
      "255": {
        start: {
          line: 5614,
          column: 0
        },
        end: {
          line: 5628,
          column: 3
        }
      },
      "256": {
        start: {
          line: 5648,
          column: 0
        },
        end: {
          line: 5657,
          column: 3
        }
      },
      "257": {
        start: {
          line: 5676,
          column: 0
        },
        end: {
          line: 5692,
          column: 3
        }
      },
      "258": {
        start: {
          line: 5705,
          column: 0
        },
        end: {
          line: 5708,
          column: 3
        }
      },
      "259": {
        start: {
          line: 5719,
          column: 0
        },
        end: {
          line: 5722,
          column: 3
        }
      },
      "260": {
        start: {
          line: 5735,
          column: 0
        },
        end: {
          line: 5745,
          column: 3
        }
      },
      "261": {
        start: {
          line: 5763,
          column: 0
        },
        end: {
          line: 5769,
          column: 3
        }
      },
      "262": {
        start: {
          line: 5785,
          column: 0
        },
        end: {
          line: 5797,
          column: 3
        }
      },
      "263": {
        start: {
          line: 5810,
          column: 0
        },
        end: {
          line: 5813,
          column: 3
        }
      },
      "264": {
        start: {
          line: 5826,
          column: 0
        },
        end: {
          line: 5835,
          column: 3
        }
      },
      "265": {
        start: {
          line: 5850,
          column: 0
        },
        end: {
          line: 5857,
          column: 3
        }
      },
      "266": {
        start: {
          line: 5875,
          column: 0
        },
        end: {
          line: 5889,
          column: 3
        }
      },
      "267": {
        start: {
          line: 5904,
          column: 0
        },
        end: {
          line: 5911,
          column: 3
        }
      },
      "268": {
        start: {
          line: 5928,
          column: 0
        },
        end: {
          line: 5941,
          column: 3
        }
      },
      "269": {
        start: {
          line: 5957,
          column: 0
        },
        end: {
          line: 5962,
          column: 3
        }
      },
      "270": {
        start: {
          line: 5978,
          column: 0
        },
        end: {
          line: 5989,
          column: 3
        }
      },
      "271": {
        start: {
          line: 6003,
          column: 0
        },
        end: {
          line: 6006,
          column: 3
        }
      },
      "272": {
        start: {
          line: 6020,
          column: 0
        },
        end: {
          line: 6029,
          column: 3
        }
      },
      "273": {
        start: {
          line: 6047,
          column: 0
        },
        end: {
          line: 6054,
          column: 3
        }
      },
      "274": {
        start: {
          line: 6071,
          column: 0
        },
        end: {
          line: 6084,
          column: 3
        }
      },
      "275": {
        start: {
          line: 6101,
          column: 0
        },
        end: {
          line: 6107,
          column: 3
        }
      },
      "276": {
        start: {
          line: 6123,
          column: 0
        },
        end: {
          line: 6135,
          column: 3
        }
      },
      "277": {
        start: {
          line: 6151,
          column: 0
        },
        end: {
          line: 6156,
          column: 3
        }
      },
      "278": {
        start: {
          line: 6172,
          column: 0
        },
        end: {
          line: 6183,
          column: 3
        }
      },
      "279": {
        start: {
          line: 6202,
          column: 0
        },
        end: {
          line: 6209,
          column: 3
        }
      },
      "280": {
        start: {
          line: 6226,
          column: 0
        },
        end: {
          line: 6239,
          column: 3
        }
      },
      "281": {
        start: {
          line: 6263,
          column: 0
        },
        end: {
          line: 6272,
          column: 3
        }
      },
      "282": {
        start: {
          line: 6291,
          column: 0
        },
        end: {
          line: 6306,
          column: 3
        }
      },
      "283": {
        start: {
          line: 6327,
          column: 0
        },
        end: {
          line: 6334,
          column: 3
        }
      },
      "284": {
        start: {
          line: 6351,
          column: 0
        },
        end: {
          line: 6364,
          column: 3
        }
      },
      "285": {
        start: {
          line: 6381,
          column: 0
        },
        end: {
          line: 6389,
          column: 3
        }
      },
      "286": {
        start: {
          line: 6446,
          column: 0
        },
        end: {
          line: 6501,
          column: 3
        }
      },
      "287": {
        start: {
          line: 6570,
          column: 0
        },
        end: {
          line: 6585,
          column: 3
        }
      },
      "288": {
        start: {
          line: 6617,
          column: 0
        },
        end: {
          line: 6636,
          column: 3
        }
      },
      "289": {
        start: {
          line: 6665,
          column: 0
        },
        end: {
          line: 6689,
          column: 3
        }
      },
      "290": {
        start: {
          line: 6700,
          column: 0
        },
        end: {
          line: 6708,
          column: 3
        }
      },
      "291": {
        start: {
          line: 6752,
          column: 0
        },
        end: {
          line: 6756,
          column: 3
        }
      },
      "292": {
        start: {
          line: 6767,
          column: 0
        },
        end: {
          line: 6770,
          column: 3
        }
      },
      "293": {
        start: {
          line: 6801,
          column: 0
        },
        end: {
          line: 6828,
          column: 3
        }
      },
      "294": {
        start: {
          line: 6839,
          column: 0
        },
        end: {
          line: 6847,
          column: 3
        }
      },
      "295": {
        start: {
          line: 6892,
          column: 0
        },
        end: {
          line: 6896,
          column: 3
        }
      },
      "296": {
        start: {
          line: 6903,
          column: 0
        },
        end: {
          line: 6903,
          column: 36
        }
      },
      "297": {
        start: {
          line: 6910,
          column: 0
        },
        end: {
          line: 6910,
          column: 39
        }
      },
      "298": {
        start: {
          line: 6917,
          column: 0
        },
        end: {
          line: 6917,
          column: 34
        }
      },
      "299": {
        start: {
          line: 6924,
          column: 0
        },
        end: {
          line: 6924,
          column: 32
        }
      },
      "300": {
        start: {
          line: 6931,
          column: 0
        },
        end: {
          line: 6931,
          column: 36
        }
      },
      "301": {
        start: {
          line: 6938,
          column: 0
        },
        end: {
          line: 6938,
          column: 34
        }
      },
      "302": {
        start: {
          line: 6949,
          column: 0
        },
        end: {
          line: 6957,
          column: 3
        }
      },
      "303": {
        start: {
          line: 6973,
          column: 0
        },
        end: {
          line: 6979,
          column: 3
        }
      },
      "304": {
        start: {
          line: 6989,
          column: 0
        },
        end: {
          line: 6991,
          column: 3
        }
      },
      "305": {
        start: {
          line: 7004,
          column: 0
        },
        end: {
          line: 7009,
          column: 3
        }
      },
      "306": {
        start: {
          line: 7020,
          column: 0
        },
        end: {
          line: 7029,
          column: 3
        }
      },
      "307": {
        start: {
          line: 7042,
          column: 0
        },
        end: {
          line: 7045,
          column: 3
        }
      },
      "308": {
        start: {
          line: 7070,
          column: 0
        },
        end: {
          line: 7085,
          column: 3
        }
      },
      "309": {
        start: {
          line: 7092,
          column: 0
        },
        end: {
          line: 7092,
          column: 44
        }
      },
      "310": {
        start: {
          line: 7099,
          column: 0
        },
        end: {
          line: 7099,
          column: 44
        }
      },
      "311": {
        start: {
          line: 7106,
          column: 0
        },
        end: {
          line: 7106,
          column: 47
        }
      },
      "312": {
        start: {
          line: 7116,
          column: 0
        },
        end: {
          line: 7118,
          column: 3
        }
      },
      "313": {
        start: {
          line: 7128,
          column: 0
        },
        end: {
          line: 7130,
          column: 3
        }
      },
      "314": {
        start: {
          line: 7140,
          column: 0
        },
        end: {
          line: 7142,
          column: 3
        }
      },
      "315": {
        start: {
          line: 7152,
          column: 0
        },
        end: {
          line: 7154,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 23
          },
          end: {
            line: 10,
            column: 24
          }
        },
        loc: {
          start: {
            line: 10,
            column: 30
          },
          end: {
            line: 7156,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
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
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0,
      "282": 0,
      "283": 0,
      "284": 0,
      "285": 0,
      "286": 0,
      "287": 0,
      "288": 0,
      "289": 0,
      "290": 0,
      "291": 0,
      "292": 0,
      "293": 0,
      "294": 0,
      "295": 0,
      "296": 0,
      "297": 0,
      "298": 0,
      "299": 0,
      "300": 0,
      "301": 0,
      "302": 0,
      "303": 0,
      "304": 0,
      "305": 0,
      "306": 0,
      "307": 0,
      "308": 0,
      "309": 0,
      "310": 0,
      "311": 0,
      "312": 0,
      "313": 0,
      "314": 0,
      "315": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4e397c9ffe4d7befff8643d393e6bf7fb00b0357"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1racd7g41m = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1racd7g41m(); // Automatically generated by xdrgen
// DO NOT EDIT or your changes may be overwritten
/* jshint maxstatements:2147483647  */
/* jshint esnext:true  */
var types = (cov_1racd7g41m().s[0]++, XDR.config(function (xdr) {
  cov_1racd7g41m().f[0]++;
  cov_1racd7g41m().s[1]++;
  // === xdr source ============================================================
  //
  //   typedef opaque Value<>;
  //
  // ===========================================================================
  xdr.typedef("Value", xdr.varOpaque());

  // === xdr source ============================================================
  //
  //   struct SCPBallot
  //   {
  //       uint32 counter; // n
  //       Value value;    // x
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[2]++;
  xdr.struct("ScpBallot", [["counter", xdr.lookup("Uint32")], ["value", xdr.lookup("Value")]]);

  // === xdr source ============================================================
  //
  //   enum SCPStatementType
  //   {
  //       SCP_ST_PREPARE = 0,
  //       SCP_ST_CONFIRM = 1,
  //       SCP_ST_EXTERNALIZE = 2,
  //       SCP_ST_NOMINATE = 3
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[3]++;
  xdr["enum"]("ScpStatementType", {
    scpStPrepare: 0,
    scpStConfirm: 1,
    scpStExternalize: 2,
    scpStNominate: 3
  });

  // === xdr source ============================================================
  //
  //   struct SCPNomination
  //   {
  //       Hash quorumSetHash; // D
  //       Value votes<>;      // X
  //       Value accepted<>;   // Y
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[4]++;
  xdr.struct("ScpNomination", [["quorumSetHash", xdr.lookup("Hash")], ["votes", xdr.varArray(xdr.lookup("Value"), 2147483647)], ["accepted", xdr.varArray(xdr.lookup("Value"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               Hash quorumSetHash;       // D
  //               SCPBallot ballot;         // b
  //               SCPBallot* prepared;      // p
  //               SCPBallot* preparedPrime; // p'
  //               uint32 nC;                // c.n
  //               uint32 nH;                // h.n
  //           }
  //
  // ===========================================================================
  cov_1racd7g41m().s[5]++;
  xdr.struct("ScpStatementPrepare", [["quorumSetHash", xdr.lookup("Hash")], ["ballot", xdr.lookup("ScpBallot")], ["prepared", xdr.option(xdr.lookup("ScpBallot"))], ["preparedPrime", xdr.option(xdr.lookup("ScpBallot"))], ["nC", xdr.lookup("Uint32")], ["nH", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               SCPBallot ballot;   // b
  //               uint32 nPrepared;   // p.n
  //               uint32 nCommit;     // c.n
  //               uint32 nH;          // h.n
  //               Hash quorumSetHash; // D
  //           }
  //
  // ===========================================================================
  cov_1racd7g41m().s[6]++;
  xdr.struct("ScpStatementConfirm", [["ballot", xdr.lookup("ScpBallot")], ["nPrepared", xdr.lookup("Uint32")], ["nCommit", xdr.lookup("Uint32")], ["nH", xdr.lookup("Uint32")], ["quorumSetHash", xdr.lookup("Hash")]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               SCPBallot commit;         // c
  //               uint32 nH;                // h.n
  //               Hash commitQuorumSetHash; // D used before EXTERNALIZE
  //           }
  //
  // ===========================================================================
  cov_1racd7g41m().s[7]++;
  xdr.struct("ScpStatementExternalize", [["commit", xdr.lookup("ScpBallot")], ["nH", xdr.lookup("Uint32")], ["commitQuorumSetHash", xdr.lookup("Hash")]]);

  // === xdr source ============================================================
  //
  //   union switch (SCPStatementType type)
  //       {
  //       case SCP_ST_PREPARE:
  //           struct
  //           {
  //               Hash quorumSetHash;       // D
  //               SCPBallot ballot;         // b
  //               SCPBallot* prepared;      // p
  //               SCPBallot* preparedPrime; // p'
  //               uint32 nC;                // c.n
  //               uint32 nH;                // h.n
  //           } prepare;
  //       case SCP_ST_CONFIRM:
  //           struct
  //           {
  //               SCPBallot ballot;   // b
  //               uint32 nPrepared;   // p.n
  //               uint32 nCommit;     // c.n
  //               uint32 nH;          // h.n
  //               Hash quorumSetHash; // D
  //           } confirm;
  //       case SCP_ST_EXTERNALIZE:
  //           struct
  //           {
  //               SCPBallot commit;         // c
  //               uint32 nH;                // h.n
  //               Hash commitQuorumSetHash; // D used before EXTERNALIZE
  //           } externalize;
  //       case SCP_ST_NOMINATE:
  //           SCPNomination nominate;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[8]++;
  xdr.union("ScpStatementPledges", {
    switchOn: xdr.lookup("ScpStatementType"),
    switchName: "type",
    switches: [["scpStPrepare", "prepare"], ["scpStConfirm", "confirm"], ["scpStExternalize", "externalize"], ["scpStNominate", "nominate"]],
    arms: {
      prepare: xdr.lookup("ScpStatementPrepare"),
      confirm: xdr.lookup("ScpStatementConfirm"),
      externalize: xdr.lookup("ScpStatementExternalize"),
      nominate: xdr.lookup("ScpNomination")
    }
  });

  // === xdr source ============================================================
  //
  //   struct SCPStatement
  //   {
  //       NodeID nodeID;    // v
  //       uint64 slotIndex; // i
  //   
  //       union switch (SCPStatementType type)
  //       {
  //       case SCP_ST_PREPARE:
  //           struct
  //           {
  //               Hash quorumSetHash;       // D
  //               SCPBallot ballot;         // b
  //               SCPBallot* prepared;      // p
  //               SCPBallot* preparedPrime; // p'
  //               uint32 nC;                // c.n
  //               uint32 nH;                // h.n
  //           } prepare;
  //       case SCP_ST_CONFIRM:
  //           struct
  //           {
  //               SCPBallot ballot;   // b
  //               uint32 nPrepared;   // p.n
  //               uint32 nCommit;     // c.n
  //               uint32 nH;          // h.n
  //               Hash quorumSetHash; // D
  //           } confirm;
  //       case SCP_ST_EXTERNALIZE:
  //           struct
  //           {
  //               SCPBallot commit;         // c
  //               uint32 nH;                // h.n
  //               Hash commitQuorumSetHash; // D used before EXTERNALIZE
  //           } externalize;
  //       case SCP_ST_NOMINATE:
  //           SCPNomination nominate;
  //       }
  //       pledges;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[9]++;
  xdr.struct("ScpStatement", [["nodeId", xdr.lookup("NodeId")], ["slotIndex", xdr.lookup("Uint64")], ["pledges", xdr.lookup("ScpStatementPledges")]]);

  // === xdr source ============================================================
  //
  //   struct SCPEnvelope
  //   {
  //       SCPStatement statement;
  //       Signature signature;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[10]++;
  xdr.struct("ScpEnvelope", [["statement", xdr.lookup("ScpStatement")], ["signature", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   struct SCPQuorumSet
  //   {
  //       uint32 threshold;
  //       NodeID validators<>;
  //       SCPQuorumSet innerSets<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[11]++;
  xdr.struct("ScpQuorumSet", [["threshold", xdr.lookup("Uint32")], ["validators", xdr.varArray(xdr.lookup("NodeId"), 2147483647)], ["innerSets", xdr.varArray(xdr.lookup("ScpQuorumSet"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   typedef PublicKey AccountID;
  //
  // ===========================================================================
  cov_1racd7g41m().s[12]++;
  xdr.typedef("AccountId", xdr.lookup("PublicKey"));

  // === xdr source ============================================================
  //
  //   typedef opaque Thresholds[4];
  //
  // ===========================================================================
  cov_1racd7g41m().s[13]++;
  xdr.typedef("Thresholds", xdr.opaque(4));

  // === xdr source ============================================================
  //
  //   typedef string string32<32>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[14]++;
  xdr.typedef("String32", xdr.string(32));

  // === xdr source ============================================================
  //
  //   typedef string string64<64>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[15]++;
  xdr.typedef("String64", xdr.string(64));

  // === xdr source ============================================================
  //
  //   typedef int64 SequenceNumber;
  //
  // ===========================================================================
  cov_1racd7g41m().s[16]++;
  xdr.typedef("SequenceNumber", xdr.lookup("Int64"));

  // === xdr source ============================================================
  //
  //   typedef uint64 TimePoint;
  //
  // ===========================================================================
  cov_1racd7g41m().s[17]++;
  xdr.typedef("TimePoint", xdr.lookup("Uint64"));

  // === xdr source ============================================================
  //
  //   typedef uint64 Duration;
  //
  // ===========================================================================
  cov_1racd7g41m().s[18]++;
  xdr.typedef("Duration", xdr.lookup("Uint64"));

  // === xdr source ============================================================
  //
  //   typedef opaque DataValue<64>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[19]++;
  xdr.typedef("DataValue", xdr.varOpaque(64));

  // === xdr source ============================================================
  //
  //   typedef Hash PoolID;
  //
  // ===========================================================================
  cov_1racd7g41m().s[20]++;
  xdr.typedef("PoolId", xdr.lookup("Hash"));

  // === xdr source ============================================================
  //
  //   typedef opaque AssetCode4[4];
  //
  // ===========================================================================
  cov_1racd7g41m().s[21]++;
  xdr.typedef("AssetCode4", xdr.opaque(4));

  // === xdr source ============================================================
  //
  //   typedef opaque AssetCode12[12];
  //
  // ===========================================================================
  cov_1racd7g41m().s[22]++;
  xdr.typedef("AssetCode12", xdr.opaque(12));

  // === xdr source ============================================================
  //
  //   enum AssetType
  //   {
  //       ASSET_TYPE_NATIVE = 0,
  //       ASSET_TYPE_CREDIT_ALPHANUM4 = 1,
  //       ASSET_TYPE_CREDIT_ALPHANUM12 = 2,
  //       ASSET_TYPE_POOL_SHARE = 3
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[23]++;
  xdr["enum"]("AssetType", {
    assetTypeNative: 0,
    assetTypeCreditAlphanum4: 1,
    assetTypeCreditAlphanum12: 2,
    assetTypePoolShare: 3
  });

  // === xdr source ============================================================
  //
  //   union AssetCode switch (AssetType type)
  //   {
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AssetCode4 assetCode4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AssetCode12 assetCode12;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[24]++;
  xdr.union("AssetCode", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeCreditAlphanum4", "assetCode4"], ["assetTypeCreditAlphanum12", "assetCode12"]],
    arms: {
      assetCode4: xdr.lookup("AssetCode4"),
      assetCode12: xdr.lookup("AssetCode12")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AlphaNum4
  //   {
  //       AssetCode4 assetCode;
  //       AccountID issuer;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[25]++;
  xdr.struct("AlphaNum4", [["assetCode", xdr.lookup("AssetCode4")], ["issuer", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   struct AlphaNum12
  //   {
  //       AssetCode12 assetCode;
  //       AccountID issuer;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[26]++;
  xdr.struct("AlphaNum12", [["assetCode", xdr.lookup("AssetCode12")], ["issuer", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   union Asset switch (AssetType type)
  //   {
  //   case ASSET_TYPE_NATIVE: // Not credit
  //       void;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AlphaNum4 alphaNum4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AlphaNum12 alphaNum12;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[27]++;
  xdr.union("Asset", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeNative", xdr["void"]()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"]],
    arms: {
      alphaNum4: xdr.lookup("AlphaNum4"),
      alphaNum12: xdr.lookup("AlphaNum12")
    }
  });

  // === xdr source ============================================================
  //
  //   struct Price
  //   {
  //       int32 n; // numerator
  //       int32 d; // denominator
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[28]++;
  xdr.struct("Price", [["n", xdr.lookup("Int32")], ["d", xdr.lookup("Int32")]]);

  // === xdr source ============================================================
  //
  //   struct Liabilities
  //   {
  //       int64 buying;
  //       int64 selling;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[29]++;
  xdr.struct("Liabilities", [["buying", xdr.lookup("Int64")], ["selling", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   enum ThresholdIndexes
  //   {
  //       THRESHOLD_MASTER_WEIGHT = 0,
  //       THRESHOLD_LOW = 1,
  //       THRESHOLD_MED = 2,
  //       THRESHOLD_HIGH = 3
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[30]++;
  xdr["enum"]("ThresholdIndices", {
    thresholdMasterWeight: 0,
    thresholdLow: 1,
    thresholdMed: 2,
    thresholdHigh: 3
  });

  // === xdr source ============================================================
  //
  //   enum LedgerEntryType
  //   {
  //       ACCOUNT = 0,
  //       TRUSTLINE = 1,
  //       OFFER = 2,
  //       DATA = 3,
  //       CLAIMABLE_BALANCE = 4,
  //       LIQUIDITY_POOL = 5
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[31]++;
  xdr["enum"]("LedgerEntryType", {
    account: 0,
    trustline: 1,
    offer: 2,
    data: 3,
    claimableBalance: 4,
    liquidityPool: 5
  });

  // === xdr source ============================================================
  //
  //   struct Signer
  //   {
  //       SignerKey key;
  //       uint32 weight; // really only need 1 byte
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[32]++;
  xdr.struct("Signer", [["key", xdr.lookup("SignerKey")], ["weight", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   enum AccountFlags
  //   { // masks for each flag
  //   
  //       // Flags set on issuer accounts
  //       // TrustLines are created with authorized set to "false" requiring
  //       // the issuer to set it for each TrustLine
  //       AUTH_REQUIRED_FLAG = 0x1,
  //       // If set, the authorized flag in TrustLines can be cleared
  //       // otherwise, authorization cannot be revoked
  //       AUTH_REVOCABLE_FLAG = 0x2,
  //       // Once set, causes all AUTH_* flags to be read-only
  //       AUTH_IMMUTABLE_FLAG = 0x4,
  //       // Trustlines are created with clawback enabled set to "true",
  //       // and claimable balances created from those trustlines are created
  //       // with clawback enabled set to "true"
  //       AUTH_CLAWBACK_ENABLED_FLAG = 0x8
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[33]++;
  xdr["enum"]("AccountFlags", {
    authRequiredFlag: 1,
    authRevocableFlag: 2,
    authImmutableFlag: 4,
    authClawbackEnabledFlag: 8
  });

  // === xdr source ============================================================
  //
  //   const MASK_ACCOUNT_FLAGS = 0x7;
  //
  // ===========================================================================
  cov_1racd7g41m().s[34]++;
  xdr["const"]("MASK_ACCOUNT_FLAGS", 0x7);

  // === xdr source ============================================================
  //
  //   const MASK_ACCOUNT_FLAGS_V17 = 0xF;
  //
  // ===========================================================================
  cov_1racd7g41m().s[35]++;
  xdr["const"]("MASK_ACCOUNT_FLAGS_V17", 0xF);

  // === xdr source ============================================================
  //
  //   const MAX_SIGNERS = 20;
  //
  // ===========================================================================
  cov_1racd7g41m().s[36]++;
  xdr["const"]("MAX_SIGNERS", 20);

  // === xdr source ============================================================
  //
  //   typedef AccountID* SponsorshipDescriptor;
  //
  // ===========================================================================
  cov_1racd7g41m().s[37]++;
  xdr.typedef("SponsorshipDescriptor", xdr.option(xdr.lookup("AccountId")));

  // === xdr source ============================================================
  //
  //   struct AccountEntryExtensionV3
  //   {
  //       // We can use this to add more fields, or because it is first, to
  //       // change AccountEntryExtensionV3 into a union.
  //       ExtensionPoint ext;
  //   
  //       // Ledger number at which `seqNum` took on its present value.
  //       uint32 seqLedger;
  //   
  //       // Time at which `seqNum` took on its present value.
  //       TimePoint seqTime;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[38]++;
  xdr.struct("AccountEntryExtensionV3", [["ext", xdr.lookup("ExtensionPoint")], ["seqLedger", xdr.lookup("Uint32")], ["seqTime", xdr.lookup("TimePoint")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 3:
  //           AccountEntryExtensionV3 v3;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[39]++;
  xdr.union("AccountEntryExtensionV2Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [3, "v3"]],
    arms: {
      v3: xdr.lookup("AccountEntryExtensionV3")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AccountEntryExtensionV2
  //   {
  //       uint32 numSponsored;
  //       uint32 numSponsoring;
  //       SponsorshipDescriptor signerSponsoringIDs<MAX_SIGNERS>;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 3:
  //           AccountEntryExtensionV3 v3;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[40]++;
  xdr.struct("AccountEntryExtensionV2", [["numSponsored", xdr.lookup("Uint32")], ["numSponsoring", xdr.lookup("Uint32")], ["signerSponsoringIDs", xdr.varArray(xdr.lookup("SponsorshipDescriptor"), xdr.lookup("MAX_SIGNERS"))], ["ext", xdr.lookup("AccountEntryExtensionV2Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 2:
  //           AccountEntryExtensionV2 v2;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[41]++;
  xdr.union("AccountEntryExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [2, "v2"]],
    arms: {
      v2: xdr.lookup("AccountEntryExtensionV2")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AccountEntryExtensionV1
  //   {
  //       Liabilities liabilities;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 2:
  //           AccountEntryExtensionV2 v2;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[42]++;
  xdr.struct("AccountEntryExtensionV1", [["liabilities", xdr.lookup("Liabilities")], ["ext", xdr.lookup("AccountEntryExtensionV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           AccountEntryExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[43]++;
  xdr.union("AccountEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("AccountEntryExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct AccountEntry
  //   {
  //       AccountID accountID;      // master public key for this account
  //       int64 balance;            // in stroops
  //       SequenceNumber seqNum;    // last sequence number used for this account
  //       uint32 numSubEntries;     // number of sub-entries this account has
  //                                 // drives the reserve
  //       AccountID* inflationDest; // Account to vote for during inflation
  //       uint32 flags;             // see AccountFlags
  //   
  //       string32 homeDomain; // can be used for reverse federation and memo lookup
  //   
  //       // fields used for signatures
  //       // thresholds stores unsigned bytes: [weight of master|low|medium|high]
  //       Thresholds thresholds;
  //   
  //       Signer signers<MAX_SIGNERS>; // possible signers for this account
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           AccountEntryExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[44]++;
  xdr.struct("AccountEntry", [["accountId", xdr.lookup("AccountId")], ["balance", xdr.lookup("Int64")], ["seqNum", xdr.lookup("SequenceNumber")], ["numSubEntries", xdr.lookup("Uint32")], ["inflationDest", xdr.option(xdr.lookup("AccountId"))], ["flags", xdr.lookup("Uint32")], ["homeDomain", xdr.lookup("String32")], ["thresholds", xdr.lookup("Thresholds")], ["signers", xdr.varArray(xdr.lookup("Signer"), xdr.lookup("MAX_SIGNERS"))], ["ext", xdr.lookup("AccountEntryExt")]]);

  // === xdr source ============================================================
  //
  //   enum TrustLineFlags
  //   {
  //       // issuer has authorized account to perform transactions with its credit
  //       AUTHORIZED_FLAG = 1,
  //       // issuer has authorized account to maintain and reduce liabilities for its
  //       // credit
  //       AUTHORIZED_TO_MAINTAIN_LIABILITIES_FLAG = 2,
  //       // issuer has specified that it may clawback its credit, and that claimable
  //       // balances created with its credit may also be clawed back
  //       TRUSTLINE_CLAWBACK_ENABLED_FLAG = 4
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[45]++;
  xdr["enum"]("TrustLineFlags", {
    authorizedFlag: 1,
    authorizedToMaintainLiabilitiesFlag: 2,
    trustlineClawbackEnabledFlag: 4
  });

  // === xdr source ============================================================
  //
  //   const MASK_TRUSTLINE_FLAGS = 1;
  //
  // ===========================================================================
  cov_1racd7g41m().s[46]++;
  xdr["const"]("MASK_TRUSTLINE_FLAGS", 1);

  // === xdr source ============================================================
  //
  //   const MASK_TRUSTLINE_FLAGS_V13 = 3;
  //
  // ===========================================================================
  cov_1racd7g41m().s[47]++;
  xdr["const"]("MASK_TRUSTLINE_FLAGS_V13", 3);

  // === xdr source ============================================================
  //
  //   const MASK_TRUSTLINE_FLAGS_V17 = 7;
  //
  // ===========================================================================
  cov_1racd7g41m().s[48]++;
  xdr["const"]("MASK_TRUSTLINE_FLAGS_V17", 7);

  // === xdr source ============================================================
  //
  //   enum LiquidityPoolType
  //   {
  //       LIQUIDITY_POOL_CONSTANT_PRODUCT = 0
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[49]++;
  xdr["enum"]("LiquidityPoolType", {
    liquidityPoolConstantProduct: 0
  });

  // === xdr source ============================================================
  //
  //   union TrustLineAsset switch (AssetType type)
  //   {
  //   case ASSET_TYPE_NATIVE: // Not credit
  //       void;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AlphaNum4 alphaNum4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AlphaNum12 alphaNum12;
  //   
  //   case ASSET_TYPE_POOL_SHARE:
  //       PoolID liquidityPoolID;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[50]++;
  xdr.union("TrustLineAsset", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeNative", xdr["void"]()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"], ["assetTypePoolShare", "liquidityPoolId"]],
    arms: {
      alphaNum4: xdr.lookup("AlphaNum4"),
      alphaNum12: xdr.lookup("AlphaNum12"),
      liquidityPoolId: xdr.lookup("PoolId")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[51]++;
  xdr.union("TrustLineEntryExtensionV2Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TrustLineEntryExtensionV2
  //   {
  //       int32 liquidityPoolUseCount;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[52]++;
  xdr.struct("TrustLineEntryExtensionV2", [["liquidityPoolUseCount", xdr.lookup("Int32")], ["ext", xdr.lookup("TrustLineEntryExtensionV2Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //
  // ===========================================================================
  cov_1racd7g41m().s[53]++;
  xdr.union("TrustLineEntryV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [2, "v2"]],
    arms: {
      v2: xdr.lookup("TrustLineEntryExtensionV2")
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               Liabilities liabilities;
  //   
  //               union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //               ext;
  //           }
  //
  // ===========================================================================
  cov_1racd7g41m().s[54]++;
  xdr.struct("TrustLineEntryV1", [["liabilities", xdr.lookup("Liabilities")], ["ext", xdr.lookup("TrustLineEntryV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           struct
  //           {
  //               Liabilities liabilities;
  //   
  //               union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //               ext;
  //           } v1;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[55]++;
  xdr.union("TrustLineEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("TrustLineEntryV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TrustLineEntry
  //   {
  //       AccountID accountID;  // account this trustline belongs to
  //       TrustLineAsset asset; // type of asset (with issuer)
  //       int64 balance;        // how much of this asset the user has.
  //                             // Asset defines the unit for this;
  //   
  //       int64 limit;  // balance cannot be above this
  //       uint32 flags; // see TrustLineFlags
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           struct
  //           {
  //               Liabilities liabilities;
  //   
  //               union switch (int v)
  //               {
  //               case 0:
  //                   void;
  //               case 2:
  //                   TrustLineEntryExtensionV2 v2;
  //               }
  //               ext;
  //           } v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[56]++;
  xdr.struct("TrustLineEntry", [["accountId", xdr.lookup("AccountId")], ["asset", xdr.lookup("TrustLineAsset")], ["balance", xdr.lookup("Int64")], ["limit", xdr.lookup("Int64")], ["flags", xdr.lookup("Uint32")], ["ext", xdr.lookup("TrustLineEntryExt")]]);

  // === xdr source ============================================================
  //
  //   enum OfferEntryFlags
  //   {
  //       // an offer with this flag will not act on and take a reverse offer of equal
  //       // price
  //       PASSIVE_FLAG = 1
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[57]++;
  xdr["enum"]("OfferEntryFlags", {
    passiveFlag: 1
  });

  // === xdr source ============================================================
  //
  //   const MASK_OFFERENTRY_FLAGS = 1;
  //
  // ===========================================================================
  cov_1racd7g41m().s[58]++;
  xdr["const"]("MASK_OFFERENTRY_FLAGS", 1);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[59]++;
  xdr.union("OfferEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct OfferEntry
  //   {
  //       AccountID sellerID;
  //       int64 offerID;
  //       Asset selling; // A
  //       Asset buying;  // B
  //       int64 amount;  // amount of A
  //   
  //       /* price for this offer:
  //           price of A in terms of B
  //           price=AmountB/AmountA=priceNumerator/priceDenominator
  //           price is after fees
  //       */
  //       Price price;
  //       uint32 flags; // see OfferEntryFlags
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[60]++;
  xdr.struct("OfferEntry", [["sellerId", xdr.lookup("AccountId")], ["offerId", xdr.lookup("Int64")], ["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")], ["flags", xdr.lookup("Uint32")], ["ext", xdr.lookup("OfferEntryExt")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[61]++;
  xdr.union("DataEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct DataEntry
  //   {
  //       AccountID accountID; // account this data belongs to
  //       string64 dataName;
  //       DataValue dataValue;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[62]++;
  xdr.struct("DataEntry", [["accountId", xdr.lookup("AccountId")], ["dataName", xdr.lookup("String64")], ["dataValue", xdr.lookup("DataValue")], ["ext", xdr.lookup("DataEntryExt")]]);

  // === xdr source ============================================================
  //
  //   enum ClaimPredicateType
  //   {
  //       CLAIM_PREDICATE_UNCONDITIONAL = 0,
  //       CLAIM_PREDICATE_AND = 1,
  //       CLAIM_PREDICATE_OR = 2,
  //       CLAIM_PREDICATE_NOT = 3,
  //       CLAIM_PREDICATE_BEFORE_ABSOLUTE_TIME = 4,
  //       CLAIM_PREDICATE_BEFORE_RELATIVE_TIME = 5
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[63]++;
  xdr["enum"]("ClaimPredicateType", {
    claimPredicateUnconditional: 0,
    claimPredicateAnd: 1,
    claimPredicateOr: 2,
    claimPredicateNot: 3,
    claimPredicateBeforeAbsoluteTime: 4,
    claimPredicateBeforeRelativeTime: 5
  });

  // === xdr source ============================================================
  //
  //   union ClaimPredicate switch (ClaimPredicateType type)
  //   {
  //   case CLAIM_PREDICATE_UNCONDITIONAL:
  //       void;
  //   case CLAIM_PREDICATE_AND:
  //       ClaimPredicate andPredicates<2>;
  //   case CLAIM_PREDICATE_OR:
  //       ClaimPredicate orPredicates<2>;
  //   case CLAIM_PREDICATE_NOT:
  //       ClaimPredicate* notPredicate;
  //   case CLAIM_PREDICATE_BEFORE_ABSOLUTE_TIME:
  //       int64 absBefore; // Predicate will be true if closeTime < absBefore
  //   case CLAIM_PREDICATE_BEFORE_RELATIVE_TIME:
  //       int64 relBefore; // Seconds since closeTime of the ledger in which the
  //                        // ClaimableBalanceEntry was created
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[64]++;
  xdr.union("ClaimPredicate", {
    switchOn: xdr.lookup("ClaimPredicateType"),
    switchName: "type",
    switches: [["claimPredicateUnconditional", xdr["void"]()], ["claimPredicateAnd", "andPredicates"], ["claimPredicateOr", "orPredicates"], ["claimPredicateNot", "notPredicate"], ["claimPredicateBeforeAbsoluteTime", "absBefore"], ["claimPredicateBeforeRelativeTime", "relBefore"]],
    arms: {
      andPredicates: xdr.varArray(xdr.lookup("ClaimPredicate"), 2),
      orPredicates: xdr.varArray(xdr.lookup("ClaimPredicate"), 2),
      notPredicate: xdr.option(xdr.lookup("ClaimPredicate")),
      absBefore: xdr.lookup("Int64"),
      relBefore: xdr.lookup("Int64")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimantType
  //   {
  //       CLAIMANT_TYPE_V0 = 0
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[65]++;
  xdr["enum"]("ClaimantType", {
    claimantTypeV0: 0
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID destination;    // The account that can use this condition
  //           ClaimPredicate predicate; // Claimable if predicate is true
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[66]++;
  xdr.struct("ClaimantV0", [["destination", xdr.lookup("AccountId")], ["predicate", xdr.lookup("ClaimPredicate")]]);

  // === xdr source ============================================================
  //
  //   union Claimant switch (ClaimantType type)
  //   {
  //   case CLAIMANT_TYPE_V0:
  //       struct
  //       {
  //           AccountID destination;    // The account that can use this condition
  //           ClaimPredicate predicate; // Claimable if predicate is true
  //       } v0;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[67]++;
  xdr.union("Claimant", {
    switchOn: xdr.lookup("ClaimantType"),
    switchName: "type",
    switches: [["claimantTypeV0", "v0"]],
    arms: {
      v0: xdr.lookup("ClaimantV0")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimableBalanceIDType
  //   {
  //       CLAIMABLE_BALANCE_ID_TYPE_V0 = 0
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[68]++;
  xdr["enum"]("ClaimableBalanceIdType", {
    claimableBalanceIdTypeV0: 0
  });

  // === xdr source ============================================================
  //
  //   union ClaimableBalanceID switch (ClaimableBalanceIDType type)
  //   {
  //   case CLAIMABLE_BALANCE_ID_TYPE_V0:
  //       Hash v0;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[69]++;
  xdr.union("ClaimableBalanceId", {
    switchOn: xdr.lookup("ClaimableBalanceIdType"),
    switchName: "type",
    switches: [["claimableBalanceIdTypeV0", "v0"]],
    arms: {
      v0: xdr.lookup("Hash")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimableBalanceFlags
  //   {
  //       // If set, the issuer account of the asset held by the claimable balance may
  //       // clawback the claimable balance
  //       CLAIMABLE_BALANCE_CLAWBACK_ENABLED_FLAG = 0x1
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[70]++;
  xdr["enum"]("ClaimableBalanceFlags", {
    claimableBalanceClawbackEnabledFlag: 1
  });

  // === xdr source ============================================================
  //
  //   const MASK_CLAIMABLE_BALANCE_FLAGS = 0x1;
  //
  // ===========================================================================
  cov_1racd7g41m().s[71]++;
  xdr["const"]("MASK_CLAIMABLE_BALANCE_FLAGS", 0x1);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[72]++;
  xdr.union("ClaimableBalanceEntryExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct ClaimableBalanceEntryExtensionV1
  //   {
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   
  //       uint32 flags; // see ClaimableBalanceFlags
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[73]++;
  xdr.struct("ClaimableBalanceEntryExtensionV1", [["ext", xdr.lookup("ClaimableBalanceEntryExtensionV1Ext")], ["flags", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           ClaimableBalanceEntryExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[74]++;
  xdr.union("ClaimableBalanceEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("ClaimableBalanceEntryExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ClaimableBalanceEntry
  //   {
  //       // Unique identifier for this ClaimableBalanceEntry
  //       ClaimableBalanceID balanceID;
  //   
  //       // List of claimants with associated predicate
  //       Claimant claimants<10>;
  //   
  //       // Any asset including native
  //       Asset asset;
  //   
  //       // Amount of asset
  //       int64 amount;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           ClaimableBalanceEntryExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[75]++;
  xdr.struct("ClaimableBalanceEntry", [["balanceId", xdr.lookup("ClaimableBalanceId")], ["claimants", xdr.varArray(xdr.lookup("Claimant"), 10)], ["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["ext", xdr.lookup("ClaimableBalanceEntryExt")]]);

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolConstantProductParameters
  //   {
  //       Asset assetA; // assetA < assetB
  //       Asset assetB;
  //       int32 fee; // Fee is in basis points, so the actual rate is (fee/100)%
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[76]++;
  xdr.struct("LiquidityPoolConstantProductParameters", [["assetA", xdr.lookup("Asset")], ["assetB", xdr.lookup("Asset")], ["fee", xdr.lookup("Int32")]]);

  // === xdr source ============================================================
  //
  //   struct
  //           {
  //               LiquidityPoolConstantProductParameters params;
  //   
  //               int64 reserveA;        // amount of A in the pool
  //               int64 reserveB;        // amount of B in the pool
  //               int64 totalPoolShares; // total number of pool shares issued
  //               int64 poolSharesTrustLineCount; // number of trust lines for the
  //                                               // associated pool shares
  //           }
  //
  // ===========================================================================
  cov_1racd7g41m().s[77]++;
  xdr.struct("LiquidityPoolEntryConstantProduct", [["params", xdr.lookup("LiquidityPoolConstantProductParameters")], ["reserveA", xdr.lookup("Int64")], ["reserveB", xdr.lookup("Int64")], ["totalPoolShares", xdr.lookup("Int64")], ["poolSharesTrustLineCount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union switch (LiquidityPoolType type)
  //       {
  //       case LIQUIDITY_POOL_CONSTANT_PRODUCT:
  //           struct
  //           {
  //               LiquidityPoolConstantProductParameters params;
  //   
  //               int64 reserveA;        // amount of A in the pool
  //               int64 reserveB;        // amount of B in the pool
  //               int64 totalPoolShares; // total number of pool shares issued
  //               int64 poolSharesTrustLineCount; // number of trust lines for the
  //                                               // associated pool shares
  //           } constantProduct;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[78]++;
  xdr.union("LiquidityPoolEntryBody", {
    switchOn: xdr.lookup("LiquidityPoolType"),
    switchName: "type",
    switches: [["liquidityPoolConstantProduct", "constantProduct"]],
    arms: {
      constantProduct: xdr.lookup("LiquidityPoolEntryConstantProduct")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolEntry
  //   {
  //       PoolID liquidityPoolID;
  //   
  //       union switch (LiquidityPoolType type)
  //       {
  //       case LIQUIDITY_POOL_CONSTANT_PRODUCT:
  //           struct
  //           {
  //               LiquidityPoolConstantProductParameters params;
  //   
  //               int64 reserveA;        // amount of A in the pool
  //               int64 reserveB;        // amount of B in the pool
  //               int64 totalPoolShares; // total number of pool shares issued
  //               int64 poolSharesTrustLineCount; // number of trust lines for the
  //                                               // associated pool shares
  //           } constantProduct;
  //       }
  //       body;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[79]++;
  xdr.struct("LiquidityPoolEntry", [["liquidityPoolId", xdr.lookup("PoolId")], ["body", xdr.lookup("LiquidityPoolEntryBody")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[80]++;
  xdr.union("LedgerEntryExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct LedgerEntryExtensionV1
  //   {
  //       SponsorshipDescriptor sponsoringID;
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[81]++;
  xdr.struct("LedgerEntryExtensionV1", [["sponsoringId", xdr.lookup("SponsorshipDescriptor")], ["ext", xdr.lookup("LedgerEntryExtensionV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (LedgerEntryType type)
  //       {
  //       case ACCOUNT:
  //           AccountEntry account;
  //       case TRUSTLINE:
  //           TrustLineEntry trustLine;
  //       case OFFER:
  //           OfferEntry offer;
  //       case DATA:
  //           DataEntry data;
  //       case CLAIMABLE_BALANCE:
  //           ClaimableBalanceEntry claimableBalance;
  //       case LIQUIDITY_POOL:
  //           LiquidityPoolEntry liquidityPool;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[82]++;
  xdr.union("LedgerEntryData", {
    switchOn: xdr.lookup("LedgerEntryType"),
    switchName: "type",
    switches: [["account", "account"], ["trustline", "trustLine"], ["offer", "offer"], ["data", "data"], ["claimableBalance", "claimableBalance"], ["liquidityPool", "liquidityPool"]],
    arms: {
      account: xdr.lookup("AccountEntry"),
      trustLine: xdr.lookup("TrustLineEntry"),
      offer: xdr.lookup("OfferEntry"),
      data: xdr.lookup("DataEntry"),
      claimableBalance: xdr.lookup("ClaimableBalanceEntry"),
      liquidityPool: xdr.lookup("LiquidityPoolEntry")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerEntryExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[83]++;
  xdr.union("LedgerEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("LedgerEntryExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LedgerEntry
  //   {
  //       uint32 lastModifiedLedgerSeq; // ledger the LedgerEntry was last changed
  //   
  //       union switch (LedgerEntryType type)
  //       {
  //       case ACCOUNT:
  //           AccountEntry account;
  //       case TRUSTLINE:
  //           TrustLineEntry trustLine;
  //       case OFFER:
  //           OfferEntry offer;
  //       case DATA:
  //           DataEntry data;
  //       case CLAIMABLE_BALANCE:
  //           ClaimableBalanceEntry claimableBalance;
  //       case LIQUIDITY_POOL:
  //           LiquidityPoolEntry liquidityPool;
  //       }
  //       data;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerEntryExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[84]++;
  xdr.struct("LedgerEntry", [["lastModifiedLedgerSeq", xdr.lookup("Uint32")], ["data", xdr.lookup("LedgerEntryData")], ["ext", xdr.lookup("LedgerEntryExt")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[85]++;
  xdr.struct("LedgerKeyAccount", [["accountId", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //           TrustLineAsset asset;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[86]++;
  xdr.struct("LedgerKeyTrustLine", [["accountId", xdr.lookup("AccountId")], ["asset", xdr.lookup("TrustLineAsset")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID sellerID;
  //           int64 offerID;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[87]++;
  xdr.struct("LedgerKeyOffer", [["sellerId", xdr.lookup("AccountId")], ["offerId", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //           string64 dataName;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[88]++;
  xdr.struct("LedgerKeyData", [["accountId", xdr.lookup("AccountId")], ["dataName", xdr.lookup("String64")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           ClaimableBalanceID balanceID;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[89]++;
  xdr.struct("LedgerKeyClaimableBalance", [["balanceId", xdr.lookup("ClaimableBalanceId")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           PoolID liquidityPoolID;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[90]++;
  xdr.struct("LedgerKeyLiquidityPool", [["liquidityPoolId", xdr.lookup("PoolId")]]);

  // === xdr source ============================================================
  //
  //   union LedgerKey switch (LedgerEntryType type)
  //   {
  //   case ACCOUNT:
  //       struct
  //       {
  //           AccountID accountID;
  //       } account;
  //   
  //   case TRUSTLINE:
  //       struct
  //       {
  //           AccountID accountID;
  //           TrustLineAsset asset;
  //       } trustLine;
  //   
  //   case OFFER:
  //       struct
  //       {
  //           AccountID sellerID;
  //           int64 offerID;
  //       } offer;
  //   
  //   case DATA:
  //       struct
  //       {
  //           AccountID accountID;
  //           string64 dataName;
  //       } data;
  //   
  //   case CLAIMABLE_BALANCE:
  //       struct
  //       {
  //           ClaimableBalanceID balanceID;
  //       } claimableBalance;
  //   
  //   case LIQUIDITY_POOL:
  //       struct
  //       {
  //           PoolID liquidityPoolID;
  //       } liquidityPool;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[91]++;
  xdr.union("LedgerKey", {
    switchOn: xdr.lookup("LedgerEntryType"),
    switchName: "type",
    switches: [["account", "account"], ["trustline", "trustLine"], ["offer", "offer"], ["data", "data"], ["claimableBalance", "claimableBalance"], ["liquidityPool", "liquidityPool"]],
    arms: {
      account: xdr.lookup("LedgerKeyAccount"),
      trustLine: xdr.lookup("LedgerKeyTrustLine"),
      offer: xdr.lookup("LedgerKeyOffer"),
      data: xdr.lookup("LedgerKeyData"),
      claimableBalance: xdr.lookup("LedgerKeyClaimableBalance"),
      liquidityPool: xdr.lookup("LedgerKeyLiquidityPool")
    }
  });

  // === xdr source ============================================================
  //
  //   enum EnvelopeType
  //   {
  //       ENVELOPE_TYPE_TX_V0 = 0,
  //       ENVELOPE_TYPE_SCP = 1,
  //       ENVELOPE_TYPE_TX = 2,
  //       ENVELOPE_TYPE_AUTH = 3,
  //       ENVELOPE_TYPE_SCPVALUE = 4,
  //       ENVELOPE_TYPE_TX_FEE_BUMP = 5,
  //       ENVELOPE_TYPE_OP_ID = 6,
  //       ENVELOPE_TYPE_POOL_REVOKE_OP_ID = 7
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[92]++;
  xdr["enum"]("EnvelopeType", {
    envelopeTypeTxV0: 0,
    envelopeTypeScp: 1,
    envelopeTypeTx: 2,
    envelopeTypeAuth: 3,
    envelopeTypeScpvalue: 4,
    envelopeTypeTxFeeBump: 5,
    envelopeTypeOpId: 6,
    envelopeTypePoolRevokeOpId: 7
  });

  // === xdr source ============================================================
  //
  //   typedef opaque UpgradeType<128>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[93]++;
  xdr.typedef("UpgradeType", xdr.varOpaque(128));

  // === xdr source ============================================================
  //
  //   enum StellarValueType
  //   {
  //       STELLAR_VALUE_BASIC = 0,
  //       STELLAR_VALUE_SIGNED = 1
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[94]++;
  xdr["enum"]("StellarValueType", {
    stellarValueBasic: 0,
    stellarValueSigned: 1
  });

  // === xdr source ============================================================
  //
  //   struct LedgerCloseValueSignature
  //   {
  //       NodeID nodeID;       // which node introduced the value
  //       Signature signature; // nodeID's signature
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[95]++;
  xdr.struct("LedgerCloseValueSignature", [["nodeId", xdr.lookup("NodeId")], ["signature", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   union switch (StellarValueType v)
  //       {
  //       case STELLAR_VALUE_BASIC:
  //           void;
  //       case STELLAR_VALUE_SIGNED:
  //           LedgerCloseValueSignature lcValueSignature;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[96]++;
  xdr.union("StellarValueExt", {
    switchOn: xdr.lookup("StellarValueType"),
    switchName: "v",
    switches: [["stellarValueBasic", xdr["void"]()], ["stellarValueSigned", "lcValueSignature"]],
    arms: {
      lcValueSignature: xdr.lookup("LedgerCloseValueSignature")
    }
  });

  // === xdr source ============================================================
  //
  //   struct StellarValue
  //   {
  //       Hash txSetHash;      // transaction set to apply to previous ledger
  //       TimePoint closeTime; // network close time
  //   
  //       // upgrades to apply to the previous ledger (usually empty)
  //       // this is a vector of encoded 'LedgerUpgrade' so that nodes can drop
  //       // unknown steps during consensus if needed.
  //       // see notes below on 'LedgerUpgrade' for more detail
  //       // max size is dictated by number of upgrade types (+ room for future)
  //       UpgradeType upgrades<6>;
  //   
  //       // reserved for future use
  //       union switch (StellarValueType v)
  //       {
  //       case STELLAR_VALUE_BASIC:
  //           void;
  //       case STELLAR_VALUE_SIGNED:
  //           LedgerCloseValueSignature lcValueSignature;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[97]++;
  xdr.struct("StellarValue", [["txSetHash", xdr.lookup("Hash")], ["closeTime", xdr.lookup("TimePoint")], ["upgrades", xdr.varArray(xdr.lookup("UpgradeType"), 6)], ["ext", xdr.lookup("StellarValueExt")]]);

  // === xdr source ============================================================
  //
  //   const MASK_LEDGER_HEADER_FLAGS = 0x7;
  //
  // ===========================================================================
  cov_1racd7g41m().s[98]++;
  xdr["const"]("MASK_LEDGER_HEADER_FLAGS", 0x7);

  // === xdr source ============================================================
  //
  //   enum LedgerHeaderFlags
  //   {
  //       DISABLE_LIQUIDITY_POOL_TRADING_FLAG = 0x1,
  //       DISABLE_LIQUIDITY_POOL_DEPOSIT_FLAG = 0x2,
  //       DISABLE_LIQUIDITY_POOL_WITHDRAWAL_FLAG = 0x4
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[99]++;
  xdr["enum"]("LedgerHeaderFlags", {
    disableLiquidityPoolTradingFlag: 1,
    disableLiquidityPoolDepositFlag: 2,
    disableLiquidityPoolWithdrawalFlag: 4
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[100]++;
  xdr.union("LedgerHeaderExtensionV1Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct LedgerHeaderExtensionV1
  //   {
  //       uint32 flags; // LedgerHeaderFlags
  //   
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[101]++;
  xdr.struct("LedgerHeaderExtensionV1", [["flags", xdr.lookup("Uint32")], ["ext", xdr.lookup("LedgerHeaderExtensionV1Ext")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerHeaderExtensionV1 v1;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[102]++;
  xdr.union("LedgerHeaderExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "v1"]],
    arms: {
      v1: xdr.lookup("LedgerHeaderExtensionV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct LedgerHeader
  //   {
  //       uint32 ledgerVersion;    // the protocol version of the ledger
  //       Hash previousLedgerHash; // hash of the previous ledger header
  //       StellarValue scpValue;   // what consensus agreed to
  //       Hash txSetResultHash;    // the TransactionResultSet that led to this ledger
  //       Hash bucketListHash;     // hash of the ledger state
  //   
  //       uint32 ledgerSeq; // sequence number of this ledger
  //   
  //       int64 totalCoins; // total number of stroops in existence.
  //                         // 10,000,000 stroops in 1 XLM
  //   
  //       int64 feePool;       // fees burned since last inflation run
  //       uint32 inflationSeq; // inflation sequence number
  //   
  //       uint64 idPool; // last used global ID, used for generating objects
  //   
  //       uint32 baseFee;     // base fee per operation in stroops
  //       uint32 baseReserve; // account base reserve in stroops
  //   
  //       uint32 maxTxSetSize; // maximum size a transaction set can be
  //   
  //       Hash skipList[4]; // hashes of ledgers in the past. allows you to jump back
  //                         // in time without walking the chain back ledger by ledger
  //                         // each slot contains the oldest ledger that is mod of
  //                         // either 50  5000  50000 or 500000 depending on index
  //                         // skipList[0] mod(50), skipList[1] mod(5000), etc
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           LedgerHeaderExtensionV1 v1;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[103]++;
  xdr.struct("LedgerHeader", [["ledgerVersion", xdr.lookup("Uint32")], ["previousLedgerHash", xdr.lookup("Hash")], ["scpValue", xdr.lookup("StellarValue")], ["txSetResultHash", xdr.lookup("Hash")], ["bucketListHash", xdr.lookup("Hash")], ["ledgerSeq", xdr.lookup("Uint32")], ["totalCoins", xdr.lookup("Int64")], ["feePool", xdr.lookup("Int64")], ["inflationSeq", xdr.lookup("Uint32")], ["idPool", xdr.lookup("Uint64")], ["baseFee", xdr.lookup("Uint32")], ["baseReserve", xdr.lookup("Uint32")], ["maxTxSetSize", xdr.lookup("Uint32")], ["skipList", xdr.array(xdr.lookup("Hash"), 4)], ["ext", xdr.lookup("LedgerHeaderExt")]]);

  // === xdr source ============================================================
  //
  //   enum LedgerUpgradeType
  //   {
  //       LEDGER_UPGRADE_VERSION = 1,
  //       LEDGER_UPGRADE_BASE_FEE = 2,
  //       LEDGER_UPGRADE_MAX_TX_SET_SIZE = 3,
  //       LEDGER_UPGRADE_BASE_RESERVE = 4,
  //       LEDGER_UPGRADE_FLAGS = 5
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[104]++;
  xdr["enum"]("LedgerUpgradeType", {
    ledgerUpgradeVersion: 1,
    ledgerUpgradeBaseFee: 2,
    ledgerUpgradeMaxTxSetSize: 3,
    ledgerUpgradeBaseReserve: 4,
    ledgerUpgradeFlags: 5
  });

  // === xdr source ============================================================
  //
  //   union LedgerUpgrade switch (LedgerUpgradeType type)
  //   {
  //   case LEDGER_UPGRADE_VERSION:
  //       uint32 newLedgerVersion; // update ledgerVersion
  //   case LEDGER_UPGRADE_BASE_FEE:
  //       uint32 newBaseFee; // update baseFee
  //   case LEDGER_UPGRADE_MAX_TX_SET_SIZE:
  //       uint32 newMaxTxSetSize; // update maxTxSetSize
  //   case LEDGER_UPGRADE_BASE_RESERVE:
  //       uint32 newBaseReserve; // update baseReserve
  //   case LEDGER_UPGRADE_FLAGS:
  //       uint32 newFlags; // update flags
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[105]++;
  xdr.union("LedgerUpgrade", {
    switchOn: xdr.lookup("LedgerUpgradeType"),
    switchName: "type",
    switches: [["ledgerUpgradeVersion", "newLedgerVersion"], ["ledgerUpgradeBaseFee", "newBaseFee"], ["ledgerUpgradeMaxTxSetSize", "newMaxTxSetSize"], ["ledgerUpgradeBaseReserve", "newBaseReserve"], ["ledgerUpgradeFlags", "newFlags"]],
    arms: {
      newLedgerVersion: xdr.lookup("Uint32"),
      newBaseFee: xdr.lookup("Uint32"),
      newMaxTxSetSize: xdr.lookup("Uint32"),
      newBaseReserve: xdr.lookup("Uint32"),
      newFlags: xdr.lookup("Uint32")
    }
  });

  // === xdr source ============================================================
  //
  //   enum BucketEntryType
  //   {
  //       METAENTRY =
  //           -1, // At-and-after protocol 11: bucket metadata, should come first.
  //       LIVEENTRY = 0, // Before protocol 11: created-or-updated;
  //                      // At-and-after protocol 11: only updated.
  //       DEADENTRY = 1,
  //       INITENTRY = 2 // At-and-after protocol 11: only created.
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[106]++;
  xdr["enum"]("BucketEntryType", {
    metaentry: -1,
    liveentry: 0,
    deadentry: 1,
    initentry: 2
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[107]++;
  xdr.union("BucketMetadataExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct BucketMetadata
  //   {
  //       // Indicates the protocol version used to create / merge this bucket.
  //       uint32 ledgerVersion;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[108]++;
  xdr.struct("BucketMetadata", [["ledgerVersion", xdr.lookup("Uint32")], ["ext", xdr.lookup("BucketMetadataExt")]]);

  // === xdr source ============================================================
  //
  //   union BucketEntry switch (BucketEntryType type)
  //   {
  //   case LIVEENTRY:
  //   case INITENTRY:
  //       LedgerEntry liveEntry;
  //   
  //   case DEADENTRY:
  //       LedgerKey deadEntry;
  //   case METAENTRY:
  //       BucketMetadata metaEntry;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[109]++;
  xdr.union("BucketEntry", {
    switchOn: xdr.lookup("BucketEntryType"),
    switchName: "type",
    switches: [["liveentry", "liveEntry"], ["initentry", "liveEntry"], ["deadentry", "deadEntry"], ["metaentry", "metaEntry"]],
    arms: {
      liveEntry: xdr.lookup("LedgerEntry"),
      deadEntry: xdr.lookup("LedgerKey"),
      metaEntry: xdr.lookup("BucketMetadata")
    }
  });

  // === xdr source ============================================================
  //
  //   enum TxSetComponentType
  //   {
  //     // txs with effective fee <= bid derived from a base fee (if any).
  //     // If base fee is not specified, no discount is applied.
  //     TXSET_COMP_TXS_MAYBE_DISCOUNTED_FEE = 0
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[110]++;
  xdr["enum"]("TxSetComponentType", {
    txsetCompTxsMaybeDiscountedFee: 0
  });

  // === xdr source ============================================================
  //
  //   struct
  //     {
  //       int64* baseFee;
  //       TransactionEnvelope txs<>;
  //     }
  //
  // ===========================================================================
  cov_1racd7g41m().s[111]++;
  xdr.struct("TxSetComponentTxsMaybeDiscountedFee", [["baseFee", xdr.option(xdr.lookup("Int64"))], ["txes", xdr.varArray(xdr.lookup("TransactionEnvelope"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union TxSetComponent switch (TxSetComponentType type)
  //   {
  //   case TXSET_COMP_TXS_MAYBE_DISCOUNTED_FEE:
  //     struct
  //     {
  //       int64* baseFee;
  //       TransactionEnvelope txs<>;
  //     } txsMaybeDiscountedFee;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[112]++;
  xdr.union("TxSetComponent", {
    switchOn: xdr.lookup("TxSetComponentType"),
    switchName: "type",
    switches: [["txsetCompTxsMaybeDiscountedFee", "txsMaybeDiscountedFee"]],
    arms: {
      txsMaybeDiscountedFee: xdr.lookup("TxSetComponentTxsMaybeDiscountedFee")
    }
  });

  // === xdr source ============================================================
  //
  //   union TransactionPhase switch (int v)
  //   {
  //   case 0:
  //       TxSetComponent v0Components<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[113]++;
  xdr.union("TransactionPhase", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "v0Components"]],
    arms: {
      v0Components: xdr.varArray(xdr.lookup("TxSetComponent"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionSet
  //   {
  //       Hash previousLedgerHash;
  //       TransactionEnvelope txs<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[114]++;
  xdr.struct("TransactionSet", [["previousLedgerHash", xdr.lookup("Hash")], ["txes", xdr.varArray(xdr.lookup("TransactionEnvelope"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct TransactionSetV1
  //   {
  //       Hash previousLedgerHash;
  //       TransactionPhase phases<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[115]++;
  xdr.struct("TransactionSetV1", [["previousLedgerHash", xdr.lookup("Hash")], ["phases", xdr.varArray(xdr.lookup("TransactionPhase"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union GeneralizedTransactionSet switch (int v)
  //   {
  //   // We consider the legacy TransactionSet to be v0.
  //   case 1:
  //       TransactionSetV1 v1TxSet;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[116]++;
  xdr.union("GeneralizedTransactionSet", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[1, "v1TxSet"]],
    arms: {
      v1TxSet: xdr.lookup("TransactionSetV1")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionResultPair
  //   {
  //       Hash transactionHash;
  //       TransactionResult result; // result for the transaction
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[117]++;
  xdr.struct("TransactionResultPair", [["transactionHash", xdr.lookup("Hash")], ["result", xdr.lookup("TransactionResult")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionResultSet
  //   {
  //       TransactionResultPair results<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[118]++;
  xdr.struct("TransactionResultSet", [["results", xdr.varArray(xdr.lookup("TransactionResultPair"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           GeneralizedTransactionSet generalizedTxSet;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[119]++;
  xdr.union("TransactionHistoryEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()], [1, "generalizedTxSet"]],
    arms: {
      generalizedTxSet: xdr.lookup("GeneralizedTransactionSet")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionHistoryEntry
  //   {
  //       uint32 ledgerSeq;
  //       TransactionSet txSet;
  //   
  //       // when v != 0, txSet must be empty
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       case 1:
  //           GeneralizedTransactionSet generalizedTxSet;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[120]++;
  xdr.struct("TransactionHistoryEntry", [["ledgerSeq", xdr.lookup("Uint32")], ["txSet", xdr.lookup("TransactionSet")], ["ext", xdr.lookup("TransactionHistoryEntryExt")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[121]++;
  xdr.union("TransactionHistoryResultEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TransactionHistoryResultEntry
  //   {
  //       uint32 ledgerSeq;
  //       TransactionResultSet txResultSet;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[122]++;
  xdr.struct("TransactionHistoryResultEntry", [["ledgerSeq", xdr.lookup("Uint32")], ["txResultSet", xdr.lookup("TransactionResultSet")], ["ext", xdr.lookup("TransactionHistoryResultEntryExt")]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[123]++;
  xdr.union("LedgerHeaderHistoryEntryExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct LedgerHeaderHistoryEntry
  //   {
  //       Hash hash;
  //       LedgerHeader header;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[124]++;
  xdr.struct("LedgerHeaderHistoryEntry", [["hash", xdr.lookup("Hash")], ["header", xdr.lookup("LedgerHeader")], ["ext", xdr.lookup("LedgerHeaderHistoryEntryExt")]]);

  // === xdr source ============================================================
  //
  //   struct LedgerSCPMessages
  //   {
  //       uint32 ledgerSeq;
  //       SCPEnvelope messages<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[125]++;
  xdr.struct("LedgerScpMessages", [["ledgerSeq", xdr.lookup("Uint32")], ["messages", xdr.varArray(xdr.lookup("ScpEnvelope"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct SCPHistoryEntryV0
  //   {
  //       SCPQuorumSet quorumSets<>; // additional quorum sets used by ledgerMessages
  //       LedgerSCPMessages ledgerMessages;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[126]++;
  xdr.struct("ScpHistoryEntryV0", [["quorumSets", xdr.varArray(xdr.lookup("ScpQuorumSet"), 2147483647)], ["ledgerMessages", xdr.lookup("LedgerScpMessages")]]);

  // === xdr source ============================================================
  //
  //   union SCPHistoryEntry switch (int v)
  //   {
  //   case 0:
  //       SCPHistoryEntryV0 v0;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[127]++;
  xdr.union("ScpHistoryEntry", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "v0"]],
    arms: {
      v0: xdr.lookup("ScpHistoryEntryV0")
    }
  });

  // === xdr source ============================================================
  //
  //   enum LedgerEntryChangeType
  //   {
  //       LEDGER_ENTRY_CREATED = 0, // entry was added to the ledger
  //       LEDGER_ENTRY_UPDATED = 1, // entry was modified in the ledger
  //       LEDGER_ENTRY_REMOVED = 2, // entry was removed from the ledger
  //       LEDGER_ENTRY_STATE = 3    // value of the entry
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[128]++;
  xdr["enum"]("LedgerEntryChangeType", {
    ledgerEntryCreated: 0,
    ledgerEntryUpdated: 1,
    ledgerEntryRemoved: 2,
    ledgerEntryState: 3
  });

  // === xdr source ============================================================
  //
  //   union LedgerEntryChange switch (LedgerEntryChangeType type)
  //   {
  //   case LEDGER_ENTRY_CREATED:
  //       LedgerEntry created;
  //   case LEDGER_ENTRY_UPDATED:
  //       LedgerEntry updated;
  //   case LEDGER_ENTRY_REMOVED:
  //       LedgerKey removed;
  //   case LEDGER_ENTRY_STATE:
  //       LedgerEntry state;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[129]++;
  xdr.union("LedgerEntryChange", {
    switchOn: xdr.lookup("LedgerEntryChangeType"),
    switchName: "type",
    switches: [["ledgerEntryCreated", "created"], ["ledgerEntryUpdated", "updated"], ["ledgerEntryRemoved", "removed"], ["ledgerEntryState", "state"]],
    arms: {
      created: xdr.lookup("LedgerEntry"),
      updated: xdr.lookup("LedgerEntry"),
      removed: xdr.lookup("LedgerKey"),
      state: xdr.lookup("LedgerEntry")
    }
  });

  // === xdr source ============================================================
  //
  //   typedef LedgerEntryChange LedgerEntryChanges<>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[130]++;
  xdr.typedef("LedgerEntryChanges", xdr.varArray(xdr.lookup("LedgerEntryChange"), 2147483647));

  // === xdr source ============================================================
  //
  //   struct OperationMeta
  //   {
  //       LedgerEntryChanges changes;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[131]++;
  xdr.struct("OperationMeta", [["changes", xdr.lookup("LedgerEntryChanges")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionMetaV1
  //   {
  //       LedgerEntryChanges txChanges; // tx level changes if any
  //       OperationMeta operations<>;   // meta for each operation
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[132]++;
  xdr.struct("TransactionMetaV1", [["txChanges", xdr.lookup("LedgerEntryChanges")], ["operations", xdr.varArray(xdr.lookup("OperationMeta"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct TransactionMetaV2
  //   {
  //       LedgerEntryChanges txChangesBefore; // tx level changes before operations
  //                                           // are applied if any
  //       OperationMeta operations<>;         // meta for each operation
  //       LedgerEntryChanges txChangesAfter;  // tx level changes after operations are
  //                                           // applied if any
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[133]++;
  xdr.struct("TransactionMetaV2", [["txChangesBefore", xdr.lookup("LedgerEntryChanges")], ["operations", xdr.varArray(xdr.lookup("OperationMeta"), 2147483647)], ["txChangesAfter", xdr.lookup("LedgerEntryChanges")]]);

  // === xdr source ============================================================
  //
  //   union TransactionMeta switch (int v)
  //   {
  //   case 0:
  //       OperationMeta operations<>;
  //   case 1:
  //       TransactionMetaV1 v1;
  //   case 2:
  //       TransactionMetaV2 v2;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[134]++;
  xdr.union("TransactionMeta", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "operations"], [1, "v1"], [2, "v2"]],
    arms: {
      operations: xdr.varArray(xdr.lookup("OperationMeta"), 2147483647),
      v1: xdr.lookup("TransactionMetaV1"),
      v2: xdr.lookup("TransactionMetaV2")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionResultMeta
  //   {
  //       TransactionResultPair result;
  //       LedgerEntryChanges feeProcessing;
  //       TransactionMeta txApplyProcessing;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[135]++;
  xdr.struct("TransactionResultMeta", [["result", xdr.lookup("TransactionResultPair")], ["feeProcessing", xdr.lookup("LedgerEntryChanges")], ["txApplyProcessing", xdr.lookup("TransactionMeta")]]);

  // === xdr source ============================================================
  //
  //   struct UpgradeEntryMeta
  //   {
  //       LedgerUpgrade upgrade;
  //       LedgerEntryChanges changes;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[136]++;
  xdr.struct("UpgradeEntryMeta", [["upgrade", xdr.lookup("LedgerUpgrade")], ["changes", xdr.lookup("LedgerEntryChanges")]]);

  // === xdr source ============================================================
  //
  //   struct LedgerCloseMetaV0
  //   {
  //       LedgerHeaderHistoryEntry ledgerHeader;
  //       // NB: txSet is sorted in "Hash order"
  //       TransactionSet txSet;
  //   
  //       // NB: transactions are sorted in apply order here
  //       // fees for all transactions are processed first
  //       // followed by applying transactions
  //       TransactionResultMeta txProcessing<>;
  //   
  //       // upgrades are applied last
  //       UpgradeEntryMeta upgradesProcessing<>;
  //   
  //       // other misc information attached to the ledger close
  //       SCPHistoryEntry scpInfo<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[137]++;
  xdr.struct("LedgerCloseMetaV0", [["ledgerHeader", xdr.lookup("LedgerHeaderHistoryEntry")], ["txSet", xdr.lookup("TransactionSet")], ["txProcessing", xdr.varArray(xdr.lookup("TransactionResultMeta"), 2147483647)], ["upgradesProcessing", xdr.varArray(xdr.lookup("UpgradeEntryMeta"), 2147483647)], ["scpInfo", xdr.varArray(xdr.lookup("ScpHistoryEntry"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   struct LedgerCloseMetaV1
  //   {
  //       LedgerHeaderHistoryEntry ledgerHeader;
  //   
  //       GeneralizedTransactionSet txSet;
  //   
  //       // NB: transactions are sorted in apply order here
  //       // fees for all transactions are processed first
  //       // followed by applying transactions
  //       TransactionResultMeta txProcessing<>;
  //   
  //       // upgrades are applied last
  //       UpgradeEntryMeta upgradesProcessing<>;
  //   
  //       // other misc information attached to the ledger close
  //       SCPHistoryEntry scpInfo<>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[138]++;
  xdr.struct("LedgerCloseMetaV1", [["ledgerHeader", xdr.lookup("LedgerHeaderHistoryEntry")], ["txSet", xdr.lookup("GeneralizedTransactionSet")], ["txProcessing", xdr.varArray(xdr.lookup("TransactionResultMeta"), 2147483647)], ["upgradesProcessing", xdr.varArray(xdr.lookup("UpgradeEntryMeta"), 2147483647)], ["scpInfo", xdr.varArray(xdr.lookup("ScpHistoryEntry"), 2147483647)]]);

  // === xdr source ============================================================
  //
  //   union LedgerCloseMeta switch (int v)
  //   {
  //   case 0:
  //       LedgerCloseMetaV0 v0;
  //   case 1:
  //       LedgerCloseMetaV1 v1;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[139]++;
  xdr.union("LedgerCloseMeta", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, "v0"], [1, "v1"]],
    arms: {
      v0: xdr.lookup("LedgerCloseMetaV0"),
      v1: xdr.lookup("LedgerCloseMetaV1")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ErrorCode
  //   {
  //       ERR_MISC = 0, // Unspecific error
  //       ERR_DATA = 1, // Malformed data
  //       ERR_CONF = 2, // Misconfiguration error
  //       ERR_AUTH = 3, // Authentication failure
  //       ERR_LOAD = 4  // System overloaded
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[140]++;
  xdr["enum"]("ErrorCode", {
    errMisc: 0,
    errData: 1,
    errConf: 2,
    errAuth: 3,
    errLoad: 4
  });

  // === xdr source ============================================================
  //
  //   struct Error
  //   {
  //       ErrorCode code;
  //       string msg<100>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[141]++;
  xdr.struct("Error", [["code", xdr.lookup("ErrorCode")], ["msg", xdr.string(100)]]);

  // === xdr source ============================================================
  //
  //   struct SendMore
  //   {
  //       uint32 numMessages;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[142]++;
  xdr.struct("SendMore", [["numMessages", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct AuthCert
  //   {
  //       Curve25519Public pubkey;
  //       uint64 expiration;
  //       Signature sig;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[143]++;
  xdr.struct("AuthCert", [["pubkey", xdr.lookup("Curve25519Public")], ["expiration", xdr.lookup("Uint64")], ["sig", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   struct Hello
  //   {
  //       uint32 ledgerVersion;
  //       uint32 overlayVersion;
  //       uint32 overlayMinVersion;
  //       Hash networkID;
  //       string versionStr<100>;
  //       int listeningPort;
  //       NodeID peerID;
  //       AuthCert cert;
  //       uint256 nonce;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[144]++;
  xdr.struct("Hello", [["ledgerVersion", xdr.lookup("Uint32")], ["overlayVersion", xdr.lookup("Uint32")], ["overlayMinVersion", xdr.lookup("Uint32")], ["networkId", xdr.lookup("Hash")], ["versionStr", xdr.string(100)], ["listeningPort", xdr["int"]()], ["peerId", xdr.lookup("NodeId")], ["cert", xdr.lookup("AuthCert")], ["nonce", xdr.lookup("Uint256")]]);

  // === xdr source ============================================================
  //
  //   const AUTH_MSG_FLAG_PULL_MODE_REQUESTED = 100;
  //
  // ===========================================================================
  cov_1racd7g41m().s[145]++;
  xdr["const"]("AUTH_MSG_FLAG_PULL_MODE_REQUESTED", 100);

  // === xdr source ============================================================
  //
  //   struct Auth
  //   {
  //       int flags;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[146]++;
  xdr.struct("Auth", [["flags", xdr["int"]()]]);

  // === xdr source ============================================================
  //
  //   enum IPAddrType
  //   {
  //       IPv4 = 0,
  //       IPv6 = 1
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[147]++;
  xdr["enum"]("IpAddrType", {
    iPv4: 0,
    iPv6: 1
  });

  // === xdr source ============================================================
  //
  //   union switch (IPAddrType type)
  //       {
  //       case IPv4:
  //           opaque ipv4[4];
  //       case IPv6:
  //           opaque ipv6[16];
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[148]++;
  xdr.union("PeerAddressIp", {
    switchOn: xdr.lookup("IpAddrType"),
    switchName: "type",
    switches: [["iPv4", "ipv4"], ["iPv6", "ipv6"]],
    arms: {
      ipv4: xdr.opaque(4),
      ipv6: xdr.opaque(16)
    }
  });

  // === xdr source ============================================================
  //
  //   struct PeerAddress
  //   {
  //       union switch (IPAddrType type)
  //       {
  //       case IPv4:
  //           opaque ipv4[4];
  //       case IPv6:
  //           opaque ipv6[16];
  //       }
  //       ip;
  //       uint32 port;
  //       uint32 numFailures;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[149]++;
  xdr.struct("PeerAddress", [["ip", xdr.lookup("PeerAddressIp")], ["port", xdr.lookup("Uint32")], ["numFailures", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   enum MessageType
  //   {
  //       ERROR_MSG = 0,
  //       AUTH = 2,
  //       DONT_HAVE = 3,
  //   
  //       GET_PEERS = 4, // gets a list of peers this guy knows about
  //       PEERS = 5,
  //   
  //       GET_TX_SET = 6, // gets a particular txset by hash
  //       TX_SET = 7,
  //       GENERALIZED_TX_SET = 17,
  //   
  //       TRANSACTION = 8, // pass on a tx you have heard about
  //   
  //       // SCP
  //       GET_SCP_QUORUMSET = 9,
  //       SCP_QUORUMSET = 10,
  //       SCP_MESSAGE = 11,
  //       GET_SCP_STATE = 12,
  //   
  //       // new messages
  //       HELLO = 13,
  //   
  //       SURVEY_REQUEST = 14,
  //       SURVEY_RESPONSE = 15,
  //   
  //       SEND_MORE = 16,
  //       FLOOD_ADVERT = 18,
  //       FLOOD_DEMAND = 19
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[150]++;
  xdr["enum"]("MessageType", {
    errorMsg: 0,
    auth: 2,
    dontHave: 3,
    getPeers: 4,
    peers: 5,
    getTxSet: 6,
    txSet: 7,
    generalizedTxSet: 17,
    transaction: 8,
    getScpQuorumset: 9,
    scpQuorumset: 10,
    scpMessage: 11,
    getScpState: 12,
    hello: 13,
    surveyRequest: 14,
    surveyResponse: 15,
    sendMore: 16,
    floodAdvert: 18,
    floodDemand: 19
  });

  // === xdr source ============================================================
  //
  //   struct DontHave
  //   {
  //       MessageType type;
  //       uint256 reqHash;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[151]++;
  xdr.struct("DontHave", [["type", xdr.lookup("MessageType")], ["reqHash", xdr.lookup("Uint256")]]);

  // === xdr source ============================================================
  //
  //   enum SurveyMessageCommandType
  //   {
  //       SURVEY_TOPOLOGY = 0
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[152]++;
  xdr["enum"]("SurveyMessageCommandType", {
    surveyTopology: 0
  });

  // === xdr source ============================================================
  //
  //   struct SurveyRequestMessage
  //   {
  //       NodeID surveyorPeerID;
  //       NodeID surveyedPeerID;
  //       uint32 ledgerNum;
  //       Curve25519Public encryptionKey;
  //       SurveyMessageCommandType commandType;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[153]++;
  xdr.struct("SurveyRequestMessage", [["surveyorPeerId", xdr.lookup("NodeId")], ["surveyedPeerId", xdr.lookup("NodeId")], ["ledgerNum", xdr.lookup("Uint32")], ["encryptionKey", xdr.lookup("Curve25519Public")], ["commandType", xdr.lookup("SurveyMessageCommandType")]]);

  // === xdr source ============================================================
  //
  //   struct SignedSurveyRequestMessage
  //   {
  //       Signature requestSignature;
  //       SurveyRequestMessage request;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[154]++;
  xdr.struct("SignedSurveyRequestMessage", [["requestSignature", xdr.lookup("Signature")], ["request", xdr.lookup("SurveyRequestMessage")]]);

  // === xdr source ============================================================
  //
  //   typedef opaque EncryptedBody<64000>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[155]++;
  xdr.typedef("EncryptedBody", xdr.varOpaque(64000));

  // === xdr source ============================================================
  //
  //   struct SurveyResponseMessage
  //   {
  //       NodeID surveyorPeerID;
  //       NodeID surveyedPeerID;
  //       uint32 ledgerNum;
  //       SurveyMessageCommandType commandType;
  //       EncryptedBody encryptedBody;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[156]++;
  xdr.struct("SurveyResponseMessage", [["surveyorPeerId", xdr.lookup("NodeId")], ["surveyedPeerId", xdr.lookup("NodeId")], ["ledgerNum", xdr.lookup("Uint32")], ["commandType", xdr.lookup("SurveyMessageCommandType")], ["encryptedBody", xdr.lookup("EncryptedBody")]]);

  // === xdr source ============================================================
  //
  //   struct SignedSurveyResponseMessage
  //   {
  //       Signature responseSignature;
  //       SurveyResponseMessage response;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[157]++;
  xdr.struct("SignedSurveyResponseMessage", [["responseSignature", xdr.lookup("Signature")], ["response", xdr.lookup("SurveyResponseMessage")]]);

  // === xdr source ============================================================
  //
  //   struct PeerStats
  //   {
  //       NodeID id;
  //       string versionStr<100>;
  //       uint64 messagesRead;
  //       uint64 messagesWritten;
  //       uint64 bytesRead;
  //       uint64 bytesWritten;
  //       uint64 secondsConnected;
  //   
  //       uint64 uniqueFloodBytesRecv;
  //       uint64 duplicateFloodBytesRecv;
  //       uint64 uniqueFetchBytesRecv;
  //       uint64 duplicateFetchBytesRecv;
  //   
  //       uint64 uniqueFloodMessageRecv;
  //       uint64 duplicateFloodMessageRecv;
  //       uint64 uniqueFetchMessageRecv;
  //       uint64 duplicateFetchMessageRecv;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[158]++;
  xdr.struct("PeerStats", [["id", xdr.lookup("NodeId")], ["versionStr", xdr.string(100)], ["messagesRead", xdr.lookup("Uint64")], ["messagesWritten", xdr.lookup("Uint64")], ["bytesRead", xdr.lookup("Uint64")], ["bytesWritten", xdr.lookup("Uint64")], ["secondsConnected", xdr.lookup("Uint64")], ["uniqueFloodBytesRecv", xdr.lookup("Uint64")], ["duplicateFloodBytesRecv", xdr.lookup("Uint64")], ["uniqueFetchBytesRecv", xdr.lookup("Uint64")], ["duplicateFetchBytesRecv", xdr.lookup("Uint64")], ["uniqueFloodMessageRecv", xdr.lookup("Uint64")], ["duplicateFloodMessageRecv", xdr.lookup("Uint64")], ["uniqueFetchMessageRecv", xdr.lookup("Uint64")], ["duplicateFetchMessageRecv", xdr.lookup("Uint64")]]);

  // === xdr source ============================================================
  //
  //   typedef PeerStats PeerStatList<25>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[159]++;
  xdr.typedef("PeerStatList", xdr.varArray(xdr.lookup("PeerStats"), 25));

  // === xdr source ============================================================
  //
  //   struct TopologyResponseBody
  //   {
  //       PeerStatList inboundPeers;
  //       PeerStatList outboundPeers;
  //   
  //       uint32 totalInboundPeerCount;
  //       uint32 totalOutboundPeerCount;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[160]++;
  xdr.struct("TopologyResponseBody", [["inboundPeers", xdr.lookup("PeerStatList")], ["outboundPeers", xdr.lookup("PeerStatList")], ["totalInboundPeerCount", xdr.lookup("Uint32")], ["totalOutboundPeerCount", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   union SurveyResponseBody switch (SurveyMessageCommandType type)
  //   {
  //   case SURVEY_TOPOLOGY:
  //       TopologyResponseBody topologyResponseBody;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[161]++;
  xdr.union("SurveyResponseBody", {
    switchOn: xdr.lookup("SurveyMessageCommandType"),
    switchName: "type",
    switches: [["surveyTopology", "topologyResponseBody"]],
    arms: {
      topologyResponseBody: xdr.lookup("TopologyResponseBody")
    }
  });

  // === xdr source ============================================================
  //
  //   const TX_ADVERT_VECTOR_MAX_SIZE = 1000;
  //
  // ===========================================================================
  cov_1racd7g41m().s[162]++;
  xdr["const"]("TX_ADVERT_VECTOR_MAX_SIZE", 1000);

  // === xdr source ============================================================
  //
  //   typedef Hash TxAdvertVector<TX_ADVERT_VECTOR_MAX_SIZE>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[163]++;
  xdr.typedef("TxAdvertVector", xdr.varArray(xdr.lookup("Hash"), xdr.lookup("TX_ADVERT_VECTOR_MAX_SIZE")));

  // === xdr source ============================================================
  //
  //   struct FloodAdvert
  //   {
  //       TxAdvertVector txHashes;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[164]++;
  xdr.struct("FloodAdvert", [["txHashes", xdr.lookup("TxAdvertVector")]]);

  // === xdr source ============================================================
  //
  //   const TX_DEMAND_VECTOR_MAX_SIZE = 1000;
  //
  // ===========================================================================
  cov_1racd7g41m().s[165]++;
  xdr["const"]("TX_DEMAND_VECTOR_MAX_SIZE", 1000);

  // === xdr source ============================================================
  //
  //   typedef Hash TxDemandVector<TX_DEMAND_VECTOR_MAX_SIZE>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[166]++;
  xdr.typedef("TxDemandVector", xdr.varArray(xdr.lookup("Hash"), xdr.lookup("TX_DEMAND_VECTOR_MAX_SIZE")));

  // === xdr source ============================================================
  //
  //   struct FloodDemand
  //   {
  //       TxDemandVector txHashes;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[167]++;
  xdr.struct("FloodDemand", [["txHashes", xdr.lookup("TxDemandVector")]]);

  // === xdr source ============================================================
  //
  //   union StellarMessage switch (MessageType type)
  //   {
  //   case ERROR_MSG:
  //       Error error;
  //   case HELLO:
  //       Hello hello;
  //   case AUTH:
  //       Auth auth;
  //   case DONT_HAVE:
  //       DontHave dontHave;
  //   case GET_PEERS:
  //       void;
  //   case PEERS:
  //       PeerAddress peers<100>;
  //   
  //   case GET_TX_SET:
  //       uint256 txSetHash;
  //   case TX_SET:
  //       TransactionSet txSet;
  //   case GENERALIZED_TX_SET:
  //       GeneralizedTransactionSet generalizedTxSet;
  //   
  //   case TRANSACTION:
  //       TransactionEnvelope transaction;
  //   
  //   case SURVEY_REQUEST:
  //       SignedSurveyRequestMessage signedSurveyRequestMessage;
  //   
  //   case SURVEY_RESPONSE:
  //       SignedSurveyResponseMessage signedSurveyResponseMessage;
  //   
  //   // SCP
  //   case GET_SCP_QUORUMSET:
  //       uint256 qSetHash;
  //   case SCP_QUORUMSET:
  //       SCPQuorumSet qSet;
  //   case SCP_MESSAGE:
  //       SCPEnvelope envelope;
  //   case GET_SCP_STATE:
  //       uint32 getSCPLedgerSeq; // ledger seq requested ; if 0, requests the latest
  //   case SEND_MORE:
  //       SendMore sendMoreMessage;
  //   
  //   // Pull mode
  //   case FLOOD_ADVERT:
  //        FloodAdvert floodAdvert;
  //   case FLOOD_DEMAND:
  //        FloodDemand floodDemand;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[168]++;
  xdr.union("StellarMessage", {
    switchOn: xdr.lookup("MessageType"),
    switchName: "type",
    switches: [["errorMsg", "error"], ["hello", "hello"], ["auth", "auth"], ["dontHave", "dontHave"], ["getPeers", xdr["void"]()], ["peers", "peers"], ["getTxSet", "txSetHash"], ["txSet", "txSet"], ["generalizedTxSet", "generalizedTxSet"], ["transaction", "transaction"], ["surveyRequest", "signedSurveyRequestMessage"], ["surveyResponse", "signedSurveyResponseMessage"], ["getScpQuorumset", "qSetHash"], ["scpQuorumset", "qSet"], ["scpMessage", "envelope"], ["getScpState", "getScpLedgerSeq"], ["sendMore", "sendMoreMessage"], ["floodAdvert", "floodAdvert"], ["floodDemand", "floodDemand"]],
    arms: {
      error: xdr.lookup("Error"),
      hello: xdr.lookup("Hello"),
      auth: xdr.lookup("Auth"),
      dontHave: xdr.lookup("DontHave"),
      peers: xdr.varArray(xdr.lookup("PeerAddress"), 100),
      txSetHash: xdr.lookup("Uint256"),
      txSet: xdr.lookup("TransactionSet"),
      generalizedTxSet: xdr.lookup("GeneralizedTransactionSet"),
      transaction: xdr.lookup("TransactionEnvelope"),
      signedSurveyRequestMessage: xdr.lookup("SignedSurveyRequestMessage"),
      signedSurveyResponseMessage: xdr.lookup("SignedSurveyResponseMessage"),
      qSetHash: xdr.lookup("Uint256"),
      qSet: xdr.lookup("ScpQuorumSet"),
      envelope: xdr.lookup("ScpEnvelope"),
      getScpLedgerSeq: xdr.lookup("Uint32"),
      sendMoreMessage: xdr.lookup("SendMore"),
      floodAdvert: xdr.lookup("FloodAdvert"),
      floodDemand: xdr.lookup("FloodDemand")
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           uint64 sequence;
  //           StellarMessage message;
  //           HmacSha256Mac mac;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[169]++;
  xdr.struct("AuthenticatedMessageV0", [["sequence", xdr.lookup("Uint64")], ["message", xdr.lookup("StellarMessage")], ["mac", xdr.lookup("HmacSha256Mac")]]);

  // === xdr source ============================================================
  //
  //   union AuthenticatedMessage switch (uint32 v)
  //   {
  //   case 0:
  //       struct
  //       {
  //           uint64 sequence;
  //           StellarMessage message;
  //           HmacSha256Mac mac;
  //       } v0;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[170]++;
  xdr.union("AuthenticatedMessage", {
    switchOn: xdr.lookup("Uint32"),
    switchName: "v",
    switches: [[0, "v0"]],
    arms: {
      v0: xdr.lookup("AuthenticatedMessageV0")
    }
  });

  // === xdr source ============================================================
  //
  //   union LiquidityPoolParameters switch (LiquidityPoolType type)
  //   {
  //   case LIQUIDITY_POOL_CONSTANT_PRODUCT:
  //       LiquidityPoolConstantProductParameters constantProduct;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[171]++;
  xdr.union("LiquidityPoolParameters", {
    switchOn: xdr.lookup("LiquidityPoolType"),
    switchName: "type",
    switches: [["liquidityPoolConstantProduct", "constantProduct"]],
    arms: {
      constantProduct: xdr.lookup("LiquidityPoolConstantProductParameters")
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           uint64 id;
  //           uint256 ed25519;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[172]++;
  xdr.struct("MuxedAccountMed25519", [["id", xdr.lookup("Uint64")], ["ed25519", xdr.lookup("Uint256")]]);

  // === xdr source ============================================================
  //
  //   union MuxedAccount switch (CryptoKeyType type)
  //   {
  //   case KEY_TYPE_ED25519:
  //       uint256 ed25519;
  //   case KEY_TYPE_MUXED_ED25519:
  //       struct
  //       {
  //           uint64 id;
  //           uint256 ed25519;
  //       } med25519;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[173]++;
  xdr.union("MuxedAccount", {
    switchOn: xdr.lookup("CryptoKeyType"),
    switchName: "type",
    switches: [["keyTypeEd25519", "ed25519"], ["keyTypeMuxedEd25519", "med25519"]],
    arms: {
      ed25519: xdr.lookup("Uint256"),
      med25519: xdr.lookup("MuxedAccountMed25519")
    }
  });

  // === xdr source ============================================================
  //
  //   struct DecoratedSignature
  //   {
  //       SignatureHint hint;  // last 4 bytes of the public key, used as a hint
  //       Signature signature; // actual signature
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[174]++;
  xdr.struct("DecoratedSignature", [["hint", xdr.lookup("SignatureHint")], ["signature", xdr.lookup("Signature")]]);

  // === xdr source ============================================================
  //
  //   enum OperationType
  //   {
  //       CREATE_ACCOUNT = 0,
  //       PAYMENT = 1,
  //       PATH_PAYMENT_STRICT_RECEIVE = 2,
  //       MANAGE_SELL_OFFER = 3,
  //       CREATE_PASSIVE_SELL_OFFER = 4,
  //       SET_OPTIONS = 5,
  //       CHANGE_TRUST = 6,
  //       ALLOW_TRUST = 7,
  //       ACCOUNT_MERGE = 8,
  //       INFLATION = 9,
  //       MANAGE_DATA = 10,
  //       BUMP_SEQUENCE = 11,
  //       MANAGE_BUY_OFFER = 12,
  //       PATH_PAYMENT_STRICT_SEND = 13,
  //       CREATE_CLAIMABLE_BALANCE = 14,
  //       CLAIM_CLAIMABLE_BALANCE = 15,
  //       BEGIN_SPONSORING_FUTURE_RESERVES = 16,
  //       END_SPONSORING_FUTURE_RESERVES = 17,
  //       REVOKE_SPONSORSHIP = 18,
  //       CLAWBACK = 19,
  //       CLAWBACK_CLAIMABLE_BALANCE = 20,
  //       SET_TRUST_LINE_FLAGS = 21,
  //       LIQUIDITY_POOL_DEPOSIT = 22,
  //       LIQUIDITY_POOL_WITHDRAW = 23
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[175]++;
  xdr["enum"]("OperationType", {
    createAccount: 0,
    payment: 1,
    pathPaymentStrictReceive: 2,
    manageSellOffer: 3,
    createPassiveSellOffer: 4,
    setOptions: 5,
    changeTrust: 6,
    allowTrust: 7,
    accountMerge: 8,
    inflation: 9,
    manageData: 10,
    bumpSequence: 11,
    manageBuyOffer: 12,
    pathPaymentStrictSend: 13,
    createClaimableBalance: 14,
    claimClaimableBalance: 15,
    beginSponsoringFutureReserves: 16,
    endSponsoringFutureReserves: 17,
    revokeSponsorship: 18,
    clawback: 19,
    clawbackClaimableBalance: 20,
    setTrustLineFlags: 21,
    liquidityPoolDeposit: 22,
    liquidityPoolWithdraw: 23
  });

  // === xdr source ============================================================
  //
  //   struct CreateAccountOp
  //   {
  //       AccountID destination; // account to create
  //       int64 startingBalance; // amount they end up with
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[176]++;
  xdr.struct("CreateAccountOp", [["destination", xdr.lookup("AccountId")], ["startingBalance", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct PaymentOp
  //   {
  //       MuxedAccount destination; // recipient of the payment
  //       Asset asset;              // what they end up with
  //       int64 amount;             // amount they end up with
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[177]++;
  xdr.struct("PaymentOp", [["destination", xdr.lookup("MuxedAccount")], ["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct PathPaymentStrictReceiveOp
  //   {
  //       Asset sendAsset; // asset we pay with
  //       int64 sendMax;   // the maximum amount of sendAsset to
  //                        // send (excluding fees).
  //                        // The operation will fail if can't be met
  //   
  //       MuxedAccount destination; // recipient of the payment
  //       Asset destAsset;          // what they end up with
  //       int64 destAmount;         // amount they end up with
  //   
  //       Asset path<5>; // additional hops it must go through to get there
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[178]++;
  xdr.struct("PathPaymentStrictReceiveOp", [["sendAsset", xdr.lookup("Asset")], ["sendMax", xdr.lookup("Int64")], ["destination", xdr.lookup("MuxedAccount")], ["destAsset", xdr.lookup("Asset")], ["destAmount", xdr.lookup("Int64")], ["path", xdr.varArray(xdr.lookup("Asset"), 5)]]);

  // === xdr source ============================================================
  //
  //   struct PathPaymentStrictSendOp
  //   {
  //       Asset sendAsset;  // asset we pay with
  //       int64 sendAmount; // amount of sendAsset to send (excluding fees)
  //   
  //       MuxedAccount destination; // recipient of the payment
  //       Asset destAsset;          // what they end up with
  //       int64 destMin;            // the minimum amount of dest asset to
  //                                 // be received
  //                                 // The operation will fail if it can't be met
  //   
  //       Asset path<5>; // additional hops it must go through to get there
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[179]++;
  xdr.struct("PathPaymentStrictSendOp", [["sendAsset", xdr.lookup("Asset")], ["sendAmount", xdr.lookup("Int64")], ["destination", xdr.lookup("MuxedAccount")], ["destAsset", xdr.lookup("Asset")], ["destMin", xdr.lookup("Int64")], ["path", xdr.varArray(xdr.lookup("Asset"), 5)]]);

  // === xdr source ============================================================
  //
  //   struct ManageSellOfferOp
  //   {
  //       Asset selling;
  //       Asset buying;
  //       int64 amount; // amount being sold. if set to 0, delete the offer
  //       Price price;  // price of thing being sold in terms of what you are buying
  //   
  //       // 0=create a new offer, otherwise edit an existing offer
  //       int64 offerID;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[180]++;
  xdr.struct("ManageSellOfferOp", [["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")], ["offerId", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ManageBuyOfferOp
  //   {
  //       Asset selling;
  //       Asset buying;
  //       int64 buyAmount; // amount being bought. if set to 0, delete the offer
  //       Price price;     // price of thing being bought in terms of what you are
  //                        // selling
  //   
  //       // 0=create a new offer, otherwise edit an existing offer
  //       int64 offerID;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[181]++;
  xdr.struct("ManageBuyOfferOp", [["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["buyAmount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")], ["offerId", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct CreatePassiveSellOfferOp
  //   {
  //       Asset selling; // A
  //       Asset buying;  // B
  //       int64 amount;  // amount taker gets
  //       Price price;   // cost of A in terms of B
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[182]++;
  xdr.struct("CreatePassiveSellOfferOp", [["selling", xdr.lookup("Asset")], ["buying", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["price", xdr.lookup("Price")]]);

  // === xdr source ============================================================
  //
  //   struct SetOptionsOp
  //   {
  //       AccountID* inflationDest; // sets the inflation destination
  //   
  //       uint32* clearFlags; // which flags to clear
  //       uint32* setFlags;   // which flags to set
  //   
  //       // account threshold manipulation
  //       uint32* masterWeight; // weight of the master account
  //       uint32* lowThreshold;
  //       uint32* medThreshold;
  //       uint32* highThreshold;
  //   
  //       string32* homeDomain; // sets the home domain
  //   
  //       // Add, update or remove a signer for the account
  //       // signer is deleted if the weight is 0
  //       Signer* signer;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[183]++;
  xdr.struct("SetOptionsOp", [["inflationDest", xdr.option(xdr.lookup("AccountId"))], ["clearFlags", xdr.option(xdr.lookup("Uint32"))], ["setFlags", xdr.option(xdr.lookup("Uint32"))], ["masterWeight", xdr.option(xdr.lookup("Uint32"))], ["lowThreshold", xdr.option(xdr.lookup("Uint32"))], ["medThreshold", xdr.option(xdr.lookup("Uint32"))], ["highThreshold", xdr.option(xdr.lookup("Uint32"))], ["homeDomain", xdr.option(xdr.lookup("String32"))], ["signer", xdr.option(xdr.lookup("Signer"))]]);

  // === xdr source ============================================================
  //
  //   union ChangeTrustAsset switch (AssetType type)
  //   {
  //   case ASSET_TYPE_NATIVE: // Not credit
  //       void;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM4:
  //       AlphaNum4 alphaNum4;
  //   
  //   case ASSET_TYPE_CREDIT_ALPHANUM12:
  //       AlphaNum12 alphaNum12;
  //   
  //   case ASSET_TYPE_POOL_SHARE:
  //       LiquidityPoolParameters liquidityPool;
  //   
  //       // add other asset types here in the future
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[184]++;
  xdr.union("ChangeTrustAsset", {
    switchOn: xdr.lookup("AssetType"),
    switchName: "type",
    switches: [["assetTypeNative", xdr["void"]()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"], ["assetTypePoolShare", "liquidityPool"]],
    arms: {
      alphaNum4: xdr.lookup("AlphaNum4"),
      alphaNum12: xdr.lookup("AlphaNum12"),
      liquidityPool: xdr.lookup("LiquidityPoolParameters")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ChangeTrustOp
  //   {
  //       ChangeTrustAsset line;
  //   
  //       // if limit is set to 0, deletes the trust line
  //       int64 limit;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[185]++;
  xdr.struct("ChangeTrustOp", [["line", xdr.lookup("ChangeTrustAsset")], ["limit", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct AllowTrustOp
  //   {
  //       AccountID trustor;
  //       AssetCode asset;
  //   
  //       // One of 0, AUTHORIZED_FLAG, or AUTHORIZED_TO_MAINTAIN_LIABILITIES_FLAG
  //       uint32 authorize;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[186]++;
  xdr.struct("AllowTrustOp", [["trustor", xdr.lookup("AccountId")], ["asset", xdr.lookup("AssetCode")], ["authorize", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct ManageDataOp
  //   {
  //       string64 dataName;
  //       DataValue* dataValue; // set to null to clear
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[187]++;
  xdr.struct("ManageDataOp", [["dataName", xdr.lookup("String64")], ["dataValue", xdr.option(xdr.lookup("DataValue"))]]);

  // === xdr source ============================================================
  //
  //   struct BumpSequenceOp
  //   {
  //       SequenceNumber bumpTo;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[188]++;
  xdr.struct("BumpSequenceOp", [["bumpTo", xdr.lookup("SequenceNumber")]]);

  // === xdr source ============================================================
  //
  //   struct CreateClaimableBalanceOp
  //   {
  //       Asset asset;
  //       int64 amount;
  //       Claimant claimants<10>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[189]++;
  xdr.struct("CreateClaimableBalanceOp", [["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")], ["claimants", xdr.varArray(xdr.lookup("Claimant"), 10)]]);

  // === xdr source ============================================================
  //
  //   struct ClaimClaimableBalanceOp
  //   {
  //       ClaimableBalanceID balanceID;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[190]++;
  xdr.struct("ClaimClaimableBalanceOp", [["balanceId", xdr.lookup("ClaimableBalanceId")]]);

  // === xdr source ============================================================
  //
  //   struct BeginSponsoringFutureReservesOp
  //   {
  //       AccountID sponsoredID;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[191]++;
  xdr.struct("BeginSponsoringFutureReservesOp", [["sponsoredId", xdr.lookup("AccountId")]]);

  // === xdr source ============================================================
  //
  //   enum RevokeSponsorshipType
  //   {
  //       REVOKE_SPONSORSHIP_LEDGER_ENTRY = 0,
  //       REVOKE_SPONSORSHIP_SIGNER = 1
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[192]++;
  xdr["enum"]("RevokeSponsorshipType", {
    revokeSponsorshipLedgerEntry: 0,
    revokeSponsorshipSigner: 1
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID accountID;
  //           SignerKey signerKey;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[193]++;
  xdr.struct("RevokeSponsorshipOpSigner", [["accountId", xdr.lookup("AccountId")], ["signerKey", xdr.lookup("SignerKey")]]);

  // === xdr source ============================================================
  //
  //   union RevokeSponsorshipOp switch (RevokeSponsorshipType type)
  //   {
  //   case REVOKE_SPONSORSHIP_LEDGER_ENTRY:
  //       LedgerKey ledgerKey;
  //   case REVOKE_SPONSORSHIP_SIGNER:
  //       struct
  //       {
  //           AccountID accountID;
  //           SignerKey signerKey;
  //       } signer;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[194]++;
  xdr.union("RevokeSponsorshipOp", {
    switchOn: xdr.lookup("RevokeSponsorshipType"),
    switchName: "type",
    switches: [["revokeSponsorshipLedgerEntry", "ledgerKey"], ["revokeSponsorshipSigner", "signer"]],
    arms: {
      ledgerKey: xdr.lookup("LedgerKey"),
      signer: xdr.lookup("RevokeSponsorshipOpSigner")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ClawbackOp
  //   {
  //       Asset asset;
  //       MuxedAccount from;
  //       int64 amount;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[195]++;
  xdr.struct("ClawbackOp", [["asset", xdr.lookup("Asset")], ["from", xdr.lookup("MuxedAccount")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ClawbackClaimableBalanceOp
  //   {
  //       ClaimableBalanceID balanceID;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[196]++;
  xdr.struct("ClawbackClaimableBalanceOp", [["balanceId", xdr.lookup("ClaimableBalanceId")]]);

  // === xdr source ============================================================
  //
  //   struct SetTrustLineFlagsOp
  //   {
  //       AccountID trustor;
  //       Asset asset;
  //   
  //       uint32 clearFlags; // which flags to clear
  //       uint32 setFlags;   // which flags to set
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[197]++;
  xdr.struct("SetTrustLineFlagsOp", [["trustor", xdr.lookup("AccountId")], ["asset", xdr.lookup("Asset")], ["clearFlags", xdr.lookup("Uint32")], ["setFlags", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   const LIQUIDITY_POOL_FEE_V18 = 30;
  //
  // ===========================================================================
  cov_1racd7g41m().s[198]++;
  xdr["const"]("LIQUIDITY_POOL_FEE_V18", 30);

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolDepositOp
  //   {
  //       PoolID liquidityPoolID;
  //       int64 maxAmountA; // maximum amount of first asset to deposit
  //       int64 maxAmountB; // maximum amount of second asset to deposit
  //       Price minPrice;   // minimum depositA/depositB
  //       Price maxPrice;   // maximum depositA/depositB
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[199]++;
  xdr.struct("LiquidityPoolDepositOp", [["liquidityPoolId", xdr.lookup("PoolId")], ["maxAmountA", xdr.lookup("Int64")], ["maxAmountB", xdr.lookup("Int64")], ["minPrice", xdr.lookup("Price")], ["maxPrice", xdr.lookup("Price")]]);

  // === xdr source ============================================================
  //
  //   struct LiquidityPoolWithdrawOp
  //   {
  //       PoolID liquidityPoolID;
  //       int64 amount;     // amount of pool shares to withdraw
  //       int64 minAmountA; // minimum amount of first asset to withdraw
  //       int64 minAmountB; // minimum amount of second asset to withdraw
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[200]++;
  xdr.struct("LiquidityPoolWithdrawOp", [["liquidityPoolId", xdr.lookup("PoolId")], ["amount", xdr.lookup("Int64")], ["minAmountA", xdr.lookup("Int64")], ["minAmountB", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountOp createAccountOp;
  //       case PAYMENT:
  //           PaymentOp paymentOp;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveOp pathPaymentStrictReceiveOp;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferOp manageSellOfferOp;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           CreatePassiveSellOfferOp createPassiveSellOfferOp;
  //       case SET_OPTIONS:
  //           SetOptionsOp setOptionsOp;
  //       case CHANGE_TRUST:
  //           ChangeTrustOp changeTrustOp;
  //       case ALLOW_TRUST:
  //           AllowTrustOp allowTrustOp;
  //       case ACCOUNT_MERGE:
  //           MuxedAccount destination;
  //       case INFLATION:
  //           void;
  //       case MANAGE_DATA:
  //           ManageDataOp manageDataOp;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceOp bumpSequenceOp;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferOp manageBuyOfferOp;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendOp pathPaymentStrictSendOp;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceOp createClaimableBalanceOp;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceOp claimClaimableBalanceOp;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesOp beginSponsoringFutureReservesOp;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           void;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipOp revokeSponsorshipOp;
  //       case CLAWBACK:
  //           ClawbackOp clawbackOp;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceOp clawbackClaimableBalanceOp;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsOp setTrustLineFlagsOp;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositOp liquidityPoolDepositOp;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawOp liquidityPoolWithdrawOp;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[201]++;
  xdr.union("OperationBody", {
    switchOn: xdr.lookup("OperationType"),
    switchName: "type",
    switches: [["createAccount", "createAccountOp"], ["payment", "paymentOp"], ["pathPaymentStrictReceive", "pathPaymentStrictReceiveOp"], ["manageSellOffer", "manageSellOfferOp"], ["createPassiveSellOffer", "createPassiveSellOfferOp"], ["setOptions", "setOptionsOp"], ["changeTrust", "changeTrustOp"], ["allowTrust", "allowTrustOp"], ["accountMerge", "destination"], ["inflation", xdr["void"]()], ["manageData", "manageDataOp"], ["bumpSequence", "bumpSequenceOp"], ["manageBuyOffer", "manageBuyOfferOp"], ["pathPaymentStrictSend", "pathPaymentStrictSendOp"], ["createClaimableBalance", "createClaimableBalanceOp"], ["claimClaimableBalance", "claimClaimableBalanceOp"], ["beginSponsoringFutureReserves", "beginSponsoringFutureReservesOp"], ["endSponsoringFutureReserves", xdr["void"]()], ["revokeSponsorship", "revokeSponsorshipOp"], ["clawback", "clawbackOp"], ["clawbackClaimableBalance", "clawbackClaimableBalanceOp"], ["setTrustLineFlags", "setTrustLineFlagsOp"], ["liquidityPoolDeposit", "liquidityPoolDepositOp"], ["liquidityPoolWithdraw", "liquidityPoolWithdrawOp"]],
    arms: {
      createAccountOp: xdr.lookup("CreateAccountOp"),
      paymentOp: xdr.lookup("PaymentOp"),
      pathPaymentStrictReceiveOp: xdr.lookup("PathPaymentStrictReceiveOp"),
      manageSellOfferOp: xdr.lookup("ManageSellOfferOp"),
      createPassiveSellOfferOp: xdr.lookup("CreatePassiveSellOfferOp"),
      setOptionsOp: xdr.lookup("SetOptionsOp"),
      changeTrustOp: xdr.lookup("ChangeTrustOp"),
      allowTrustOp: xdr.lookup("AllowTrustOp"),
      destination: xdr.lookup("MuxedAccount"),
      manageDataOp: xdr.lookup("ManageDataOp"),
      bumpSequenceOp: xdr.lookup("BumpSequenceOp"),
      manageBuyOfferOp: xdr.lookup("ManageBuyOfferOp"),
      pathPaymentStrictSendOp: xdr.lookup("PathPaymentStrictSendOp"),
      createClaimableBalanceOp: xdr.lookup("CreateClaimableBalanceOp"),
      claimClaimableBalanceOp: xdr.lookup("ClaimClaimableBalanceOp"),
      beginSponsoringFutureReservesOp: xdr.lookup("BeginSponsoringFutureReservesOp"),
      revokeSponsorshipOp: xdr.lookup("RevokeSponsorshipOp"),
      clawbackOp: xdr.lookup("ClawbackOp"),
      clawbackClaimableBalanceOp: xdr.lookup("ClawbackClaimableBalanceOp"),
      setTrustLineFlagsOp: xdr.lookup("SetTrustLineFlagsOp"),
      liquidityPoolDepositOp: xdr.lookup("LiquidityPoolDepositOp"),
      liquidityPoolWithdrawOp: xdr.lookup("LiquidityPoolWithdrawOp")
    }
  });

  // === xdr source ============================================================
  //
  //   struct Operation
  //   {
  //       // sourceAccount is the account used to run the operation
  //       // if not set, the runtime defaults to "sourceAccount" specified at
  //       // the transaction level
  //       MuxedAccount* sourceAccount;
  //   
  //       union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountOp createAccountOp;
  //       case PAYMENT:
  //           PaymentOp paymentOp;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveOp pathPaymentStrictReceiveOp;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferOp manageSellOfferOp;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           CreatePassiveSellOfferOp createPassiveSellOfferOp;
  //       case SET_OPTIONS:
  //           SetOptionsOp setOptionsOp;
  //       case CHANGE_TRUST:
  //           ChangeTrustOp changeTrustOp;
  //       case ALLOW_TRUST:
  //           AllowTrustOp allowTrustOp;
  //       case ACCOUNT_MERGE:
  //           MuxedAccount destination;
  //       case INFLATION:
  //           void;
  //       case MANAGE_DATA:
  //           ManageDataOp manageDataOp;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceOp bumpSequenceOp;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferOp manageBuyOfferOp;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendOp pathPaymentStrictSendOp;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceOp createClaimableBalanceOp;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceOp claimClaimableBalanceOp;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesOp beginSponsoringFutureReservesOp;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           void;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipOp revokeSponsorshipOp;
  //       case CLAWBACK:
  //           ClawbackOp clawbackOp;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceOp clawbackClaimableBalanceOp;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsOp setTrustLineFlagsOp;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositOp liquidityPoolDepositOp;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawOp liquidityPoolWithdrawOp;
  //       }
  //       body;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[202]++;
  xdr.struct("Operation", [["sourceAccount", xdr.option(xdr.lookup("MuxedAccount"))], ["body", xdr.lookup("OperationBody")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum;
  //           uint32 opNum;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[203]++;
  xdr.struct("HashIdPreimageOperationId", [["sourceAccount", xdr.lookup("AccountId")], ["seqNum", xdr.lookup("SequenceNumber")], ["opNum", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum;
  //           uint32 opNum;
  //           PoolID liquidityPoolID;
  //           Asset asset;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[204]++;
  xdr.struct("HashIdPreimageRevokeId", [["sourceAccount", xdr.lookup("AccountId")], ["seqNum", xdr.lookup("SequenceNumber")], ["opNum", xdr.lookup("Uint32")], ["liquidityPoolId", xdr.lookup("PoolId")], ["asset", xdr.lookup("Asset")]]);

  // === xdr source ============================================================
  //
  //   union HashIDPreimage switch (EnvelopeType type)
  //   {
  //   case ENVELOPE_TYPE_OP_ID:
  //       struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum;
  //           uint32 opNum;
  //       } operationID;
  //   case ENVELOPE_TYPE_POOL_REVOKE_OP_ID:
  //       struct
  //       {
  //           AccountID sourceAccount;
  //           SequenceNumber seqNum;
  //           uint32 opNum;
  //           PoolID liquidityPoolID;
  //           Asset asset;
  //       } revokeID;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[205]++;
  xdr.union("HashIdPreimage", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeOpId", "operationId"], ["envelopeTypePoolRevokeOpId", "revokeId"]],
    arms: {
      operationId: xdr.lookup("HashIdPreimageOperationId"),
      revokeId: xdr.lookup("HashIdPreimageRevokeId")
    }
  });

  // === xdr source ============================================================
  //
  //   enum MemoType
  //   {
  //       MEMO_NONE = 0,
  //       MEMO_TEXT = 1,
  //       MEMO_ID = 2,
  //       MEMO_HASH = 3,
  //       MEMO_RETURN = 4
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[206]++;
  xdr["enum"]("MemoType", {
    memoNone: 0,
    memoText: 1,
    memoId: 2,
    memoHash: 3,
    memoReturn: 4
  });

  // === xdr source ============================================================
  //
  //   union Memo switch (MemoType type)
  //   {
  //   case MEMO_NONE:
  //       void;
  //   case MEMO_TEXT:
  //       string text<28>;
  //   case MEMO_ID:
  //       uint64 id;
  //   case MEMO_HASH:
  //       Hash hash; // the hash of what to pull from the content server
  //   case MEMO_RETURN:
  //       Hash retHash; // the hash of the tx you are rejecting
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[207]++;
  xdr.union("Memo", {
    switchOn: xdr.lookup("MemoType"),
    switchName: "type",
    switches: [["memoNone", xdr["void"]()], ["memoText", "text"], ["memoId", "id"], ["memoHash", "hash"], ["memoReturn", "retHash"]],
    arms: {
      text: xdr.string(28),
      id: xdr.lookup("Uint64"),
      hash: xdr.lookup("Hash"),
      retHash: xdr.lookup("Hash")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TimeBounds
  //   {
  //       TimePoint minTime;
  //       TimePoint maxTime; // 0 here means no maxTime
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[208]++;
  xdr.struct("TimeBounds", [["minTime", xdr.lookup("TimePoint")], ["maxTime", xdr.lookup("TimePoint")]]);

  // === xdr source ============================================================
  //
  //   struct LedgerBounds
  //   {
  //       uint32 minLedger;
  //       uint32 maxLedger; // 0 here means no maxLedger
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[209]++;
  xdr.struct("LedgerBounds", [["minLedger", xdr.lookup("Uint32")], ["maxLedger", xdr.lookup("Uint32")]]);

  // === xdr source ============================================================
  //
  //   struct PreconditionsV2
  //   {
  //       TimeBounds* timeBounds;
  //   
  //       // Transaction only valid for ledger numbers n such that
  //       // minLedger <= n < maxLedger (if maxLedger == 0, then
  //       // only minLedger is checked)
  //       LedgerBounds* ledgerBounds;
  //   
  //       // If NULL, only valid when sourceAccount's sequence number
  //       // is seqNum - 1.  Otherwise, valid when sourceAccount's
  //       // sequence number n satisfies minSeqNum <= n < tx.seqNum.
  //       // Note that after execution the account's sequence number
  //       // is always raised to tx.seqNum, and a transaction is not
  //       // valid if tx.seqNum is too high to ensure replay protection.
  //       SequenceNumber* minSeqNum;
  //   
  //       // For the transaction to be valid, the current ledger time must
  //       // be at least minSeqAge greater than sourceAccount's seqTime.
  //       Duration minSeqAge;
  //   
  //       // For the transaction to be valid, the current ledger number
  //       // must be at least minSeqLedgerGap greater than sourceAccount's
  //       // seqLedger.
  //       uint32 minSeqLedgerGap;
  //   
  //       // For the transaction to be valid, there must be a signature
  //       // corresponding to every Signer in this array, even if the
  //       // signature is not otherwise required by the sourceAccount or
  //       // operations.
  //       SignerKey extraSigners<2>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[210]++;
  xdr.struct("PreconditionsV2", [["timeBounds", xdr.option(xdr.lookup("TimeBounds"))], ["ledgerBounds", xdr.option(xdr.lookup("LedgerBounds"))], ["minSeqNum", xdr.option(xdr.lookup("SequenceNumber"))], ["minSeqAge", xdr.lookup("Duration")], ["minSeqLedgerGap", xdr.lookup("Uint32")], ["extraSigners", xdr.varArray(xdr.lookup("SignerKey"), 2)]]);

  // === xdr source ============================================================
  //
  //   enum PreconditionType
  //   {
  //       PRECOND_NONE = 0,
  //       PRECOND_TIME = 1,
  //       PRECOND_V2 = 2
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[211]++;
  xdr["enum"]("PreconditionType", {
    precondNone: 0,
    precondTime: 1,
    precondV2: 2
  });

  // === xdr source ============================================================
  //
  //   union Preconditions switch (PreconditionType type)
  //   {
  //   case PRECOND_NONE:
  //       void;
  //   case PRECOND_TIME:
  //       TimeBounds timeBounds;
  //   case PRECOND_V2:
  //       PreconditionsV2 v2;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[212]++;
  xdr.union("Preconditions", {
    switchOn: xdr.lookup("PreconditionType"),
    switchName: "type",
    switches: [["precondNone", xdr["void"]()], ["precondTime", "timeBounds"], ["precondV2", "v2"]],
    arms: {
      timeBounds: xdr.lookup("TimeBounds"),
      v2: xdr.lookup("PreconditionsV2")
    }
  });

  // === xdr source ============================================================
  //
  //   const MAX_OPS_PER_TX = 100;
  //
  // ===========================================================================
  cov_1racd7g41m().s[213]++;
  xdr["const"]("MAX_OPS_PER_TX", 100);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[214]++;
  xdr.union("TransactionV0Ext", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TransactionV0
  //   {
  //       uint256 sourceAccountEd25519;
  //       uint32 fee;
  //       SequenceNumber seqNum;
  //       TimeBounds* timeBounds;
  //       Memo memo;
  //       Operation operations<MAX_OPS_PER_TX>;
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[215]++;
  xdr.struct("TransactionV0", [["sourceAccountEd25519", xdr.lookup("Uint256")], ["fee", xdr.lookup("Uint32")], ["seqNum", xdr.lookup("SequenceNumber")], ["timeBounds", xdr.option(xdr.lookup("TimeBounds"))], ["memo", xdr.lookup("Memo")], ["operations", xdr.varArray(xdr.lookup("Operation"), xdr.lookup("MAX_OPS_PER_TX"))], ["ext", xdr.lookup("TransactionV0Ext")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionV0Envelope
  //   {
  //       TransactionV0 tx;
  //       /* Each decorated signature is a signature over the SHA256 hash of
  //        * a TransactionSignaturePayload */
  //       DecoratedSignature signatures<20>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[216]++;
  xdr.struct("TransactionV0Envelope", [["tx", xdr.lookup("TransactionV0")], ["signatures", xdr.varArray(xdr.lookup("DecoratedSignature"), 20)]]);

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[217]++;
  xdr.union("TransactionExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct Transaction
  //   {
  //       // account used to run the transaction
  //       MuxedAccount sourceAccount;
  //   
  //       // the fee the sourceAccount will pay
  //       uint32 fee;
  //   
  //       // sequence number to consume in the account
  //       SequenceNumber seqNum;
  //   
  //       // validity conditions
  //       Preconditions cond;
  //   
  //       Memo memo;
  //   
  //       Operation operations<MAX_OPS_PER_TX>;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[218]++;
  xdr.struct("Transaction", [["sourceAccount", xdr.lookup("MuxedAccount")], ["fee", xdr.lookup("Uint32")], ["seqNum", xdr.lookup("SequenceNumber")], ["cond", xdr.lookup("Preconditions")], ["memo", xdr.lookup("Memo")], ["operations", xdr.varArray(xdr.lookup("Operation"), xdr.lookup("MAX_OPS_PER_TX"))], ["ext", xdr.lookup("TransactionExt")]]);

  // === xdr source ============================================================
  //
  //   struct TransactionV1Envelope
  //   {
  //       Transaction tx;
  //       /* Each decorated signature is a signature over the SHA256 hash of
  //        * a TransactionSignaturePayload */
  //       DecoratedSignature signatures<20>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[219]++;
  xdr.struct("TransactionV1Envelope", [["tx", xdr.lookup("Transaction")], ["signatures", xdr.varArray(xdr.lookup("DecoratedSignature"), 20)]]);

  // === xdr source ============================================================
  //
  //   union switch (EnvelopeType type)
  //       {
  //       case ENVELOPE_TYPE_TX:
  //           TransactionV1Envelope v1;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[220]++;
  xdr.union("FeeBumpTransactionInnerTx", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeTx", "v1"]],
    arms: {
      v1: xdr.lookup("TransactionV1Envelope")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[221]++;
  xdr.union("FeeBumpTransactionExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct FeeBumpTransaction
  //   {
  //       MuxedAccount feeSource;
  //       int64 fee;
  //       union switch (EnvelopeType type)
  //       {
  //       case ENVELOPE_TYPE_TX:
  //           TransactionV1Envelope v1;
  //       }
  //       innerTx;
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[222]++;
  xdr.struct("FeeBumpTransaction", [["feeSource", xdr.lookup("MuxedAccount")], ["fee", xdr.lookup("Int64")], ["innerTx", xdr.lookup("FeeBumpTransactionInnerTx")], ["ext", xdr.lookup("FeeBumpTransactionExt")]]);

  // === xdr source ============================================================
  //
  //   struct FeeBumpTransactionEnvelope
  //   {
  //       FeeBumpTransaction tx;
  //       /* Each decorated signature is a signature over the SHA256 hash of
  //        * a TransactionSignaturePayload */
  //       DecoratedSignature signatures<20>;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[223]++;
  xdr.struct("FeeBumpTransactionEnvelope", [["tx", xdr.lookup("FeeBumpTransaction")], ["signatures", xdr.varArray(xdr.lookup("DecoratedSignature"), 20)]]);

  // === xdr source ============================================================
  //
  //   union TransactionEnvelope switch (EnvelopeType type)
  //   {
  //   case ENVELOPE_TYPE_TX_V0:
  //       TransactionV0Envelope v0;
  //   case ENVELOPE_TYPE_TX:
  //       TransactionV1Envelope v1;
  //   case ENVELOPE_TYPE_TX_FEE_BUMP:
  //       FeeBumpTransactionEnvelope feeBump;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[224]++;
  xdr.union("TransactionEnvelope", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeTxV0", "v0"], ["envelopeTypeTx", "v1"], ["envelopeTypeTxFeeBump", "feeBump"]],
    arms: {
      v0: xdr.lookup("TransactionV0Envelope"),
      v1: xdr.lookup("TransactionV1Envelope"),
      feeBump: xdr.lookup("FeeBumpTransactionEnvelope")
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (EnvelopeType type)
  //       {
  //       // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
  //       case ENVELOPE_TYPE_TX:
  //           Transaction tx;
  //       case ENVELOPE_TYPE_TX_FEE_BUMP:
  //           FeeBumpTransaction feeBump;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[225]++;
  xdr.union("TransactionSignaturePayloadTaggedTransaction", {
    switchOn: xdr.lookup("EnvelopeType"),
    switchName: "type",
    switches: [["envelopeTypeTx", "tx"], ["envelopeTypeTxFeeBump", "feeBump"]],
    arms: {
      tx: xdr.lookup("Transaction"),
      feeBump: xdr.lookup("FeeBumpTransaction")
    }
  });

  // === xdr source ============================================================
  //
  //   struct TransactionSignaturePayload
  //   {
  //       Hash networkId;
  //       union switch (EnvelopeType type)
  //       {
  //       // Backwards Compatibility: Use ENVELOPE_TYPE_TX to sign ENVELOPE_TYPE_TX_V0
  //       case ENVELOPE_TYPE_TX:
  //           Transaction tx;
  //       case ENVELOPE_TYPE_TX_FEE_BUMP:
  //           FeeBumpTransaction feeBump;
  //       }
  //       taggedTransaction;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[226]++;
  xdr.struct("TransactionSignaturePayload", [["networkId", xdr.lookup("Hash")], ["taggedTransaction", xdr.lookup("TransactionSignaturePayloadTaggedTransaction")]]);

  // === xdr source ============================================================
  //
  //   enum ClaimAtomType
  //   {
  //       CLAIM_ATOM_TYPE_V0 = 0,
  //       CLAIM_ATOM_TYPE_ORDER_BOOK = 1,
  //       CLAIM_ATOM_TYPE_LIQUIDITY_POOL = 2
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[227]++;
  xdr["enum"]("ClaimAtomType", {
    claimAtomTypeV0: 0,
    claimAtomTypeOrderBook: 1,
    claimAtomTypeLiquidityPool: 2
  });

  // === xdr source ============================================================
  //
  //   struct ClaimOfferAtomV0
  //   {
  //       // emitted to identify the offer
  //       uint256 sellerEd25519; // Account that owns the offer
  //       int64 offerID;
  //   
  //       // amount and asset taken from the owner
  //       Asset assetSold;
  //       int64 amountSold;
  //   
  //       // amount and asset sent to the owner
  //       Asset assetBought;
  //       int64 amountBought;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[228]++;
  xdr.struct("ClaimOfferAtomV0", [["sellerEd25519", xdr.lookup("Uint256")], ["offerId", xdr.lookup("Int64")], ["assetSold", xdr.lookup("Asset")], ["amountSold", xdr.lookup("Int64")], ["assetBought", xdr.lookup("Asset")], ["amountBought", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ClaimOfferAtom
  //   {
  //       // emitted to identify the offer
  //       AccountID sellerID; // Account that owns the offer
  //       int64 offerID;
  //   
  //       // amount and asset taken from the owner
  //       Asset assetSold;
  //       int64 amountSold;
  //   
  //       // amount and asset sent to the owner
  //       Asset assetBought;
  //       int64 amountBought;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[229]++;
  xdr.struct("ClaimOfferAtom", [["sellerId", xdr.lookup("AccountId")], ["offerId", xdr.lookup("Int64")], ["assetSold", xdr.lookup("Asset")], ["amountSold", xdr.lookup("Int64")], ["assetBought", xdr.lookup("Asset")], ["amountBought", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct ClaimLiquidityAtom
  //   {
  //       PoolID liquidityPoolID;
  //   
  //       // amount and asset taken from the pool
  //       Asset assetSold;
  //       int64 amountSold;
  //   
  //       // amount and asset sent to the pool
  //       Asset assetBought;
  //       int64 amountBought;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[230]++;
  xdr.struct("ClaimLiquidityAtom", [["liquidityPoolId", xdr.lookup("PoolId")], ["assetSold", xdr.lookup("Asset")], ["amountSold", xdr.lookup("Int64")], ["assetBought", xdr.lookup("Asset")], ["amountBought", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union ClaimAtom switch (ClaimAtomType type)
  //   {
  //   case CLAIM_ATOM_TYPE_V0:
  //       ClaimOfferAtomV0 v0;
  //   case CLAIM_ATOM_TYPE_ORDER_BOOK:
  //       ClaimOfferAtom orderBook;
  //   case CLAIM_ATOM_TYPE_LIQUIDITY_POOL:
  //       ClaimLiquidityAtom liquidityPool;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[231]++;
  xdr.union("ClaimAtom", {
    switchOn: xdr.lookup("ClaimAtomType"),
    switchName: "type",
    switches: [["claimAtomTypeV0", "v0"], ["claimAtomTypeOrderBook", "orderBook"], ["claimAtomTypeLiquidityPool", "liquidityPool"]],
    arms: {
      v0: xdr.lookup("ClaimOfferAtomV0"),
      orderBook: xdr.lookup("ClaimOfferAtom"),
      liquidityPool: xdr.lookup("ClaimLiquidityAtom")
    }
  });

  // === xdr source ============================================================
  //
  //   enum CreateAccountResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CREATE_ACCOUNT_SUCCESS = 0, // account was created
  //   
  //       // codes considered as "failure" for the operation
  //       CREATE_ACCOUNT_MALFORMED = -1,   // invalid destination
  //       CREATE_ACCOUNT_UNDERFUNDED = -2, // not enough funds in source account
  //       CREATE_ACCOUNT_LOW_RESERVE =
  //           -3, // would create an account below the min reserve
  //       CREATE_ACCOUNT_ALREADY_EXIST = -4 // account already exists
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[232]++;
  xdr["enum"]("CreateAccountResultCode", {
    createAccountSuccess: 0,
    createAccountMalformed: -1,
    createAccountUnderfunded: -2,
    createAccountLowReserve: -3,
    createAccountAlreadyExist: -4
  });

  // === xdr source ============================================================
  //
  //   union CreateAccountResult switch (CreateAccountResultCode code)
  //   {
  //   case CREATE_ACCOUNT_SUCCESS:
  //       void;
  //   case CREATE_ACCOUNT_MALFORMED:
  //   case CREATE_ACCOUNT_UNDERFUNDED:
  //   case CREATE_ACCOUNT_LOW_RESERVE:
  //   case CREATE_ACCOUNT_ALREADY_EXIST:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[233]++;
  xdr.union("CreateAccountResult", {
    switchOn: xdr.lookup("CreateAccountResultCode"),
    switchName: "code",
    switches: [["createAccountSuccess", xdr["void"]()], ["createAccountMalformed", xdr["void"]()], ["createAccountUnderfunded", xdr["void"]()], ["createAccountLowReserve", xdr["void"]()], ["createAccountAlreadyExist", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum PaymentResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       PAYMENT_SUCCESS = 0, // payment successfully completed
  //   
  //       // codes considered as "failure" for the operation
  //       PAYMENT_MALFORMED = -1,          // bad input
  //       PAYMENT_UNDERFUNDED = -2,        // not enough funds in source account
  //       PAYMENT_SRC_NO_TRUST = -3,       // no trust line on source account
  //       PAYMENT_SRC_NOT_AUTHORIZED = -4, // source not authorized to transfer
  //       PAYMENT_NO_DESTINATION = -5,     // destination account does not exist
  //       PAYMENT_NO_TRUST = -6,       // destination missing a trust line for asset
  //       PAYMENT_NOT_AUTHORIZED = -7, // destination not authorized to hold asset
  //       PAYMENT_LINE_FULL = -8,      // destination would go above their limit
  //       PAYMENT_NO_ISSUER = -9       // missing issuer on asset
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[234]++;
  xdr["enum"]("PaymentResultCode", {
    paymentSuccess: 0,
    paymentMalformed: -1,
    paymentUnderfunded: -2,
    paymentSrcNoTrust: -3,
    paymentSrcNotAuthorized: -4,
    paymentNoDestination: -5,
    paymentNoTrust: -6,
    paymentNotAuthorized: -7,
    paymentLineFull: -8,
    paymentNoIssuer: -9
  });

  // === xdr source ============================================================
  //
  //   union PaymentResult switch (PaymentResultCode code)
  //   {
  //   case PAYMENT_SUCCESS:
  //       void;
  //   case PAYMENT_MALFORMED:
  //   case PAYMENT_UNDERFUNDED:
  //   case PAYMENT_SRC_NO_TRUST:
  //   case PAYMENT_SRC_NOT_AUTHORIZED:
  //   case PAYMENT_NO_DESTINATION:
  //   case PAYMENT_NO_TRUST:
  //   case PAYMENT_NOT_AUTHORIZED:
  //   case PAYMENT_LINE_FULL:
  //   case PAYMENT_NO_ISSUER:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[235]++;
  xdr.union("PaymentResult", {
    switchOn: xdr.lookup("PaymentResultCode"),
    switchName: "code",
    switches: [["paymentSuccess", xdr["void"]()], ["paymentMalformed", xdr["void"]()], ["paymentUnderfunded", xdr["void"]()], ["paymentSrcNoTrust", xdr["void"]()], ["paymentSrcNotAuthorized", xdr["void"]()], ["paymentNoDestination", xdr["void"]()], ["paymentNoTrust", xdr["void"]()], ["paymentNotAuthorized", xdr["void"]()], ["paymentLineFull", xdr["void"]()], ["paymentNoIssuer", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum PathPaymentStrictReceiveResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       PATH_PAYMENT_STRICT_RECEIVE_SUCCESS = 0, // success
  //   
  //       // codes considered as "failure" for the operation
  //       PATH_PAYMENT_STRICT_RECEIVE_MALFORMED = -1, // bad input
  //       PATH_PAYMENT_STRICT_RECEIVE_UNDERFUNDED =
  //           -2, // not enough funds in source account
  //       PATH_PAYMENT_STRICT_RECEIVE_SRC_NO_TRUST =
  //           -3, // no trust line on source account
  //       PATH_PAYMENT_STRICT_RECEIVE_SRC_NOT_AUTHORIZED =
  //           -4, // source not authorized to transfer
  //       PATH_PAYMENT_STRICT_RECEIVE_NO_DESTINATION =
  //           -5, // destination account does not exist
  //       PATH_PAYMENT_STRICT_RECEIVE_NO_TRUST =
  //           -6, // dest missing a trust line for asset
  //       PATH_PAYMENT_STRICT_RECEIVE_NOT_AUTHORIZED =
  //           -7, // dest not authorized to hold asset
  //       PATH_PAYMENT_STRICT_RECEIVE_LINE_FULL =
  //           -8, // dest would go above their limit
  //       PATH_PAYMENT_STRICT_RECEIVE_NO_ISSUER = -9, // missing issuer on one asset
  //       PATH_PAYMENT_STRICT_RECEIVE_TOO_FEW_OFFERS =
  //           -10, // not enough offers to satisfy path
  //       PATH_PAYMENT_STRICT_RECEIVE_OFFER_CROSS_SELF =
  //           -11, // would cross one of its own offers
  //       PATH_PAYMENT_STRICT_RECEIVE_OVER_SENDMAX = -12 // could not satisfy sendmax
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[236]++;
  xdr["enum"]("PathPaymentStrictReceiveResultCode", {
    pathPaymentStrictReceiveSuccess: 0,
    pathPaymentStrictReceiveMalformed: -1,
    pathPaymentStrictReceiveUnderfunded: -2,
    pathPaymentStrictReceiveSrcNoTrust: -3,
    pathPaymentStrictReceiveSrcNotAuthorized: -4,
    pathPaymentStrictReceiveNoDestination: -5,
    pathPaymentStrictReceiveNoTrust: -6,
    pathPaymentStrictReceiveNotAuthorized: -7,
    pathPaymentStrictReceiveLineFull: -8,
    pathPaymentStrictReceiveNoIssuer: -9,
    pathPaymentStrictReceiveTooFewOffers: -10,
    pathPaymentStrictReceiveOfferCrossSelf: -11,
    pathPaymentStrictReceiveOverSendmax: -12
  });

  // === xdr source ============================================================
  //
  //   struct SimplePaymentResult
  //   {
  //       AccountID destination;
  //       Asset asset;
  //       int64 amount;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[237]++;
  xdr.struct("SimplePaymentResult", [["destination", xdr.lookup("AccountId")], ["asset", xdr.lookup("Asset")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[238]++;
  xdr.struct("PathPaymentStrictReceiveResultSuccess", [["offers", xdr.varArray(xdr.lookup("ClaimAtom"), 2147483647)], ["last", xdr.lookup("SimplePaymentResult")]]);

  // === xdr source ============================================================
  //
  //   union PathPaymentStrictReceiveResult switch (
  //       PathPaymentStrictReceiveResultCode code)
  //   {
  //   case PATH_PAYMENT_STRICT_RECEIVE_SUCCESS:
  //       struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       } success;
  //   case PATH_PAYMENT_STRICT_RECEIVE_MALFORMED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_UNDERFUNDED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_SRC_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_RECEIVE_SRC_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_NO_DESTINATION:
  //   case PATH_PAYMENT_STRICT_RECEIVE_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_RECEIVE_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_RECEIVE_LINE_FULL:
  //       void;
  //   case PATH_PAYMENT_STRICT_RECEIVE_NO_ISSUER:
  //       Asset noIssuer; // the asset that caused the error
  //   case PATH_PAYMENT_STRICT_RECEIVE_TOO_FEW_OFFERS:
  //   case PATH_PAYMENT_STRICT_RECEIVE_OFFER_CROSS_SELF:
  //   case PATH_PAYMENT_STRICT_RECEIVE_OVER_SENDMAX:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[239]++;
  xdr.union("PathPaymentStrictReceiveResult", {
    switchOn: xdr.lookup("PathPaymentStrictReceiveResultCode"),
    switchName: "code",
    switches: [["pathPaymentStrictReceiveSuccess", "success"], ["pathPaymentStrictReceiveMalformed", xdr["void"]()], ["pathPaymentStrictReceiveUnderfunded", xdr["void"]()], ["pathPaymentStrictReceiveSrcNoTrust", xdr["void"]()], ["pathPaymentStrictReceiveSrcNotAuthorized", xdr["void"]()], ["pathPaymentStrictReceiveNoDestination", xdr["void"]()], ["pathPaymentStrictReceiveNoTrust", xdr["void"]()], ["pathPaymentStrictReceiveNotAuthorized", xdr["void"]()], ["pathPaymentStrictReceiveLineFull", xdr["void"]()], ["pathPaymentStrictReceiveNoIssuer", "noIssuer"], ["pathPaymentStrictReceiveTooFewOffers", xdr["void"]()], ["pathPaymentStrictReceiveOfferCrossSelf", xdr["void"]()], ["pathPaymentStrictReceiveOverSendmax", xdr["void"]()]],
    arms: {
      success: xdr.lookup("PathPaymentStrictReceiveResultSuccess"),
      noIssuer: xdr.lookup("Asset")
    }
  });

  // === xdr source ============================================================
  //
  //   enum PathPaymentStrictSendResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       PATH_PAYMENT_STRICT_SEND_SUCCESS = 0, // success
  //   
  //       // codes considered as "failure" for the operation
  //       PATH_PAYMENT_STRICT_SEND_MALFORMED = -1, // bad input
  //       PATH_PAYMENT_STRICT_SEND_UNDERFUNDED =
  //           -2, // not enough funds in source account
  //       PATH_PAYMENT_STRICT_SEND_SRC_NO_TRUST =
  //           -3, // no trust line on source account
  //       PATH_PAYMENT_STRICT_SEND_SRC_NOT_AUTHORIZED =
  //           -4, // source not authorized to transfer
  //       PATH_PAYMENT_STRICT_SEND_NO_DESTINATION =
  //           -5, // destination account does not exist
  //       PATH_PAYMENT_STRICT_SEND_NO_TRUST =
  //           -6, // dest missing a trust line for asset
  //       PATH_PAYMENT_STRICT_SEND_NOT_AUTHORIZED =
  //           -7, // dest not authorized to hold asset
  //       PATH_PAYMENT_STRICT_SEND_LINE_FULL = -8, // dest would go above their limit
  //       PATH_PAYMENT_STRICT_SEND_NO_ISSUER = -9, // missing issuer on one asset
  //       PATH_PAYMENT_STRICT_SEND_TOO_FEW_OFFERS =
  //           -10, // not enough offers to satisfy path
  //       PATH_PAYMENT_STRICT_SEND_OFFER_CROSS_SELF =
  //           -11, // would cross one of its own offers
  //       PATH_PAYMENT_STRICT_SEND_UNDER_DESTMIN = -12 // could not satisfy destMin
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[240]++;
  xdr["enum"]("PathPaymentStrictSendResultCode", {
    pathPaymentStrictSendSuccess: 0,
    pathPaymentStrictSendMalformed: -1,
    pathPaymentStrictSendUnderfunded: -2,
    pathPaymentStrictSendSrcNoTrust: -3,
    pathPaymentStrictSendSrcNotAuthorized: -4,
    pathPaymentStrictSendNoDestination: -5,
    pathPaymentStrictSendNoTrust: -6,
    pathPaymentStrictSendNotAuthorized: -7,
    pathPaymentStrictSendLineFull: -8,
    pathPaymentStrictSendNoIssuer: -9,
    pathPaymentStrictSendTooFewOffers: -10,
    pathPaymentStrictSendOfferCrossSelf: -11,
    pathPaymentStrictSendUnderDestmin: -12
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[241]++;
  xdr.struct("PathPaymentStrictSendResultSuccess", [["offers", xdr.varArray(xdr.lookup("ClaimAtom"), 2147483647)], ["last", xdr.lookup("SimplePaymentResult")]]);

  // === xdr source ============================================================
  //
  //   union PathPaymentStrictSendResult switch (PathPaymentStrictSendResultCode code)
  //   {
  //   case PATH_PAYMENT_STRICT_SEND_SUCCESS:
  //       struct
  //       {
  //           ClaimAtom offers<>;
  //           SimplePaymentResult last;
  //       } success;
  //   case PATH_PAYMENT_STRICT_SEND_MALFORMED:
  //   case PATH_PAYMENT_STRICT_SEND_UNDERFUNDED:
  //   case PATH_PAYMENT_STRICT_SEND_SRC_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_SEND_SRC_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_SEND_NO_DESTINATION:
  //   case PATH_PAYMENT_STRICT_SEND_NO_TRUST:
  //   case PATH_PAYMENT_STRICT_SEND_NOT_AUTHORIZED:
  //   case PATH_PAYMENT_STRICT_SEND_LINE_FULL:
  //       void;
  //   case PATH_PAYMENT_STRICT_SEND_NO_ISSUER:
  //       Asset noIssuer; // the asset that caused the error
  //   case PATH_PAYMENT_STRICT_SEND_TOO_FEW_OFFERS:
  //   case PATH_PAYMENT_STRICT_SEND_OFFER_CROSS_SELF:
  //   case PATH_PAYMENT_STRICT_SEND_UNDER_DESTMIN:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[242]++;
  xdr.union("PathPaymentStrictSendResult", {
    switchOn: xdr.lookup("PathPaymentStrictSendResultCode"),
    switchName: "code",
    switches: [["pathPaymentStrictSendSuccess", "success"], ["pathPaymentStrictSendMalformed", xdr["void"]()], ["pathPaymentStrictSendUnderfunded", xdr["void"]()], ["pathPaymentStrictSendSrcNoTrust", xdr["void"]()], ["pathPaymentStrictSendSrcNotAuthorized", xdr["void"]()], ["pathPaymentStrictSendNoDestination", xdr["void"]()], ["pathPaymentStrictSendNoTrust", xdr["void"]()], ["pathPaymentStrictSendNotAuthorized", xdr["void"]()], ["pathPaymentStrictSendLineFull", xdr["void"]()], ["pathPaymentStrictSendNoIssuer", "noIssuer"], ["pathPaymentStrictSendTooFewOffers", xdr["void"]()], ["pathPaymentStrictSendOfferCrossSelf", xdr["void"]()], ["pathPaymentStrictSendUnderDestmin", xdr["void"]()]],
    arms: {
      success: xdr.lookup("PathPaymentStrictSendResultSuccess"),
      noIssuer: xdr.lookup("Asset")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ManageSellOfferResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       MANAGE_SELL_OFFER_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       MANAGE_SELL_OFFER_MALFORMED = -1, // generated offer would be invalid
  //       MANAGE_SELL_OFFER_SELL_NO_TRUST =
  //           -2,                              // no trust line for what we're selling
  //       MANAGE_SELL_OFFER_BUY_NO_TRUST = -3, // no trust line for what we're buying
  //       MANAGE_SELL_OFFER_SELL_NOT_AUTHORIZED = -4, // not authorized to sell
  //       MANAGE_SELL_OFFER_BUY_NOT_AUTHORIZED = -5,  // not authorized to buy
  //       MANAGE_SELL_OFFER_LINE_FULL = -6, // can't receive more of what it's buying
  //       MANAGE_SELL_OFFER_UNDERFUNDED = -7, // doesn't hold what it's trying to sell
  //       MANAGE_SELL_OFFER_CROSS_SELF =
  //           -8, // would cross an offer from the same user
  //       MANAGE_SELL_OFFER_SELL_NO_ISSUER = -9, // no issuer for what we're selling
  //       MANAGE_SELL_OFFER_BUY_NO_ISSUER = -10, // no issuer for what we're buying
  //   
  //       // update errors
  //       MANAGE_SELL_OFFER_NOT_FOUND =
  //           -11, // offerID does not match an existing offer
  //   
  //       MANAGE_SELL_OFFER_LOW_RESERVE =
  //           -12 // not enough funds to create a new Offer
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[243]++;
  xdr["enum"]("ManageSellOfferResultCode", {
    manageSellOfferSuccess: 0,
    manageSellOfferMalformed: -1,
    manageSellOfferSellNoTrust: -2,
    manageSellOfferBuyNoTrust: -3,
    manageSellOfferSellNotAuthorized: -4,
    manageSellOfferBuyNotAuthorized: -5,
    manageSellOfferLineFull: -6,
    manageSellOfferUnderfunded: -7,
    manageSellOfferCrossSelf: -8,
    manageSellOfferSellNoIssuer: -9,
    manageSellOfferBuyNoIssuer: -10,
    manageSellOfferNotFound: -11,
    manageSellOfferLowReserve: -12
  });

  // === xdr source ============================================================
  //
  //   enum ManageOfferEffect
  //   {
  //       MANAGE_OFFER_CREATED = 0,
  //       MANAGE_OFFER_UPDATED = 1,
  //       MANAGE_OFFER_DELETED = 2
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[244]++;
  xdr["enum"]("ManageOfferEffect", {
    manageOfferCreated: 0,
    manageOfferUpdated: 1,
    manageOfferDeleted: 2
  });

  // === xdr source ============================================================
  //
  //   union switch (ManageOfferEffect effect)
  //       {
  //       case MANAGE_OFFER_CREATED:
  //       case MANAGE_OFFER_UPDATED:
  //           OfferEntry offer;
  //       case MANAGE_OFFER_DELETED:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[245]++;
  xdr.union("ManageOfferSuccessResultOffer", {
    switchOn: xdr.lookup("ManageOfferEffect"),
    switchName: "effect",
    switches: [["manageOfferCreated", "offer"], ["manageOfferUpdated", "offer"], ["manageOfferDeleted", xdr["void"]()]],
    arms: {
      offer: xdr.lookup("OfferEntry")
    }
  });

  // === xdr source ============================================================
  //
  //   struct ManageOfferSuccessResult
  //   {
  //       // offers that got claimed while creating this offer
  //       ClaimAtom offersClaimed<>;
  //   
  //       union switch (ManageOfferEffect effect)
  //       {
  //       case MANAGE_OFFER_CREATED:
  //       case MANAGE_OFFER_UPDATED:
  //           OfferEntry offer;
  //       case MANAGE_OFFER_DELETED:
  //           void;
  //       }
  //       offer;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[246]++;
  xdr.struct("ManageOfferSuccessResult", [["offersClaimed", xdr.varArray(xdr.lookup("ClaimAtom"), 2147483647)], ["offer", xdr.lookup("ManageOfferSuccessResultOffer")]]);

  // === xdr source ============================================================
  //
  //   union ManageSellOfferResult switch (ManageSellOfferResultCode code)
  //   {
  //   case MANAGE_SELL_OFFER_SUCCESS:
  //       ManageOfferSuccessResult success;
  //   case MANAGE_SELL_OFFER_MALFORMED:
  //   case MANAGE_SELL_OFFER_SELL_NO_TRUST:
  //   case MANAGE_SELL_OFFER_BUY_NO_TRUST:
  //   case MANAGE_SELL_OFFER_SELL_NOT_AUTHORIZED:
  //   case MANAGE_SELL_OFFER_BUY_NOT_AUTHORIZED:
  //   case MANAGE_SELL_OFFER_LINE_FULL:
  //   case MANAGE_SELL_OFFER_UNDERFUNDED:
  //   case MANAGE_SELL_OFFER_CROSS_SELF:
  //   case MANAGE_SELL_OFFER_SELL_NO_ISSUER:
  //   case MANAGE_SELL_OFFER_BUY_NO_ISSUER:
  //   case MANAGE_SELL_OFFER_NOT_FOUND:
  //   case MANAGE_SELL_OFFER_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[247]++;
  xdr.union("ManageSellOfferResult", {
    switchOn: xdr.lookup("ManageSellOfferResultCode"),
    switchName: "code",
    switches: [["manageSellOfferSuccess", "success"], ["manageSellOfferMalformed", xdr["void"]()], ["manageSellOfferSellNoTrust", xdr["void"]()], ["manageSellOfferBuyNoTrust", xdr["void"]()], ["manageSellOfferSellNotAuthorized", xdr["void"]()], ["manageSellOfferBuyNotAuthorized", xdr["void"]()], ["manageSellOfferLineFull", xdr["void"]()], ["manageSellOfferUnderfunded", xdr["void"]()], ["manageSellOfferCrossSelf", xdr["void"]()], ["manageSellOfferSellNoIssuer", xdr["void"]()], ["manageSellOfferBuyNoIssuer", xdr["void"]()], ["manageSellOfferNotFound", xdr["void"]()], ["manageSellOfferLowReserve", xdr["void"]()]],
    arms: {
      success: xdr.lookup("ManageOfferSuccessResult")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ManageBuyOfferResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       MANAGE_BUY_OFFER_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       MANAGE_BUY_OFFER_MALFORMED = -1,     // generated offer would be invalid
  //       MANAGE_BUY_OFFER_SELL_NO_TRUST = -2, // no trust line for what we're selling
  //       MANAGE_BUY_OFFER_BUY_NO_TRUST = -3,  // no trust line for what we're buying
  //       MANAGE_BUY_OFFER_SELL_NOT_AUTHORIZED = -4, // not authorized to sell
  //       MANAGE_BUY_OFFER_BUY_NOT_AUTHORIZED = -5,  // not authorized to buy
  //       MANAGE_BUY_OFFER_LINE_FULL = -6,   // can't receive more of what it's buying
  //       MANAGE_BUY_OFFER_UNDERFUNDED = -7, // doesn't hold what it's trying to sell
  //       MANAGE_BUY_OFFER_CROSS_SELF = -8, // would cross an offer from the same user
  //       MANAGE_BUY_OFFER_SELL_NO_ISSUER = -9, // no issuer for what we're selling
  //       MANAGE_BUY_OFFER_BUY_NO_ISSUER = -10, // no issuer for what we're buying
  //   
  //       // update errors
  //       MANAGE_BUY_OFFER_NOT_FOUND =
  //           -11, // offerID does not match an existing offer
  //   
  //       MANAGE_BUY_OFFER_LOW_RESERVE = -12 // not enough funds to create a new Offer
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[248]++;
  xdr["enum"]("ManageBuyOfferResultCode", {
    manageBuyOfferSuccess: 0,
    manageBuyOfferMalformed: -1,
    manageBuyOfferSellNoTrust: -2,
    manageBuyOfferBuyNoTrust: -3,
    manageBuyOfferSellNotAuthorized: -4,
    manageBuyOfferBuyNotAuthorized: -5,
    manageBuyOfferLineFull: -6,
    manageBuyOfferUnderfunded: -7,
    manageBuyOfferCrossSelf: -8,
    manageBuyOfferSellNoIssuer: -9,
    manageBuyOfferBuyNoIssuer: -10,
    manageBuyOfferNotFound: -11,
    manageBuyOfferLowReserve: -12
  });

  // === xdr source ============================================================
  //
  //   union ManageBuyOfferResult switch (ManageBuyOfferResultCode code)
  //   {
  //   case MANAGE_BUY_OFFER_SUCCESS:
  //       ManageOfferSuccessResult success;
  //   case MANAGE_BUY_OFFER_MALFORMED:
  //   case MANAGE_BUY_OFFER_SELL_NO_TRUST:
  //   case MANAGE_BUY_OFFER_BUY_NO_TRUST:
  //   case MANAGE_BUY_OFFER_SELL_NOT_AUTHORIZED:
  //   case MANAGE_BUY_OFFER_BUY_NOT_AUTHORIZED:
  //   case MANAGE_BUY_OFFER_LINE_FULL:
  //   case MANAGE_BUY_OFFER_UNDERFUNDED:
  //   case MANAGE_BUY_OFFER_CROSS_SELF:
  //   case MANAGE_BUY_OFFER_SELL_NO_ISSUER:
  //   case MANAGE_BUY_OFFER_BUY_NO_ISSUER:
  //   case MANAGE_BUY_OFFER_NOT_FOUND:
  //   case MANAGE_BUY_OFFER_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[249]++;
  xdr.union("ManageBuyOfferResult", {
    switchOn: xdr.lookup("ManageBuyOfferResultCode"),
    switchName: "code",
    switches: [["manageBuyOfferSuccess", "success"], ["manageBuyOfferMalformed", xdr["void"]()], ["manageBuyOfferSellNoTrust", xdr["void"]()], ["manageBuyOfferBuyNoTrust", xdr["void"]()], ["manageBuyOfferSellNotAuthorized", xdr["void"]()], ["manageBuyOfferBuyNotAuthorized", xdr["void"]()], ["manageBuyOfferLineFull", xdr["void"]()], ["manageBuyOfferUnderfunded", xdr["void"]()], ["manageBuyOfferCrossSelf", xdr["void"]()], ["manageBuyOfferSellNoIssuer", xdr["void"]()], ["manageBuyOfferBuyNoIssuer", xdr["void"]()], ["manageBuyOfferNotFound", xdr["void"]()], ["manageBuyOfferLowReserve", xdr["void"]()]],
    arms: {
      success: xdr.lookup("ManageOfferSuccessResult")
    }
  });

  // === xdr source ============================================================
  //
  //   enum SetOptionsResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       SET_OPTIONS_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       SET_OPTIONS_LOW_RESERVE = -1,      // not enough funds to add a signer
  //       SET_OPTIONS_TOO_MANY_SIGNERS = -2, // max number of signers already reached
  //       SET_OPTIONS_BAD_FLAGS = -3,        // invalid combination of clear/set flags
  //       SET_OPTIONS_INVALID_INFLATION = -4,      // inflation account does not exist
  //       SET_OPTIONS_CANT_CHANGE = -5,            // can no longer change this option
  //       SET_OPTIONS_UNKNOWN_FLAG = -6,           // can't set an unknown flag
  //       SET_OPTIONS_THRESHOLD_OUT_OF_RANGE = -7, // bad value for weight/threshold
  //       SET_OPTIONS_BAD_SIGNER = -8,             // signer cannot be masterkey
  //       SET_OPTIONS_INVALID_HOME_DOMAIN = -9,    // malformed home domain
  //       SET_OPTIONS_AUTH_REVOCABLE_REQUIRED =
  //           -10 // auth revocable is required for clawback
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[250]++;
  xdr["enum"]("SetOptionsResultCode", {
    setOptionsSuccess: 0,
    setOptionsLowReserve: -1,
    setOptionsTooManySigners: -2,
    setOptionsBadFlags: -3,
    setOptionsInvalidInflation: -4,
    setOptionsCantChange: -5,
    setOptionsUnknownFlag: -6,
    setOptionsThresholdOutOfRange: -7,
    setOptionsBadSigner: -8,
    setOptionsInvalidHomeDomain: -9,
    setOptionsAuthRevocableRequired: -10
  });

  // === xdr source ============================================================
  //
  //   union SetOptionsResult switch (SetOptionsResultCode code)
  //   {
  //   case SET_OPTIONS_SUCCESS:
  //       void;
  //   case SET_OPTIONS_LOW_RESERVE:
  //   case SET_OPTIONS_TOO_MANY_SIGNERS:
  //   case SET_OPTIONS_BAD_FLAGS:
  //   case SET_OPTIONS_INVALID_INFLATION:
  //   case SET_OPTIONS_CANT_CHANGE:
  //   case SET_OPTIONS_UNKNOWN_FLAG:
  //   case SET_OPTIONS_THRESHOLD_OUT_OF_RANGE:
  //   case SET_OPTIONS_BAD_SIGNER:
  //   case SET_OPTIONS_INVALID_HOME_DOMAIN:
  //   case SET_OPTIONS_AUTH_REVOCABLE_REQUIRED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[251]++;
  xdr.union("SetOptionsResult", {
    switchOn: xdr.lookup("SetOptionsResultCode"),
    switchName: "code",
    switches: [["setOptionsSuccess", xdr["void"]()], ["setOptionsLowReserve", xdr["void"]()], ["setOptionsTooManySigners", xdr["void"]()], ["setOptionsBadFlags", xdr["void"]()], ["setOptionsInvalidInflation", xdr["void"]()], ["setOptionsCantChange", xdr["void"]()], ["setOptionsUnknownFlag", xdr["void"]()], ["setOptionsThresholdOutOfRange", xdr["void"]()], ["setOptionsBadSigner", xdr["void"]()], ["setOptionsInvalidHomeDomain", xdr["void"]()], ["setOptionsAuthRevocableRequired", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum ChangeTrustResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CHANGE_TRUST_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       CHANGE_TRUST_MALFORMED = -1,     // bad input
  //       CHANGE_TRUST_NO_ISSUER = -2,     // could not find issuer
  //       CHANGE_TRUST_INVALID_LIMIT = -3, // cannot drop limit below balance
  //                                        // cannot create with a limit of 0
  //       CHANGE_TRUST_LOW_RESERVE =
  //           -4, // not enough funds to create a new trust line,
  //       CHANGE_TRUST_SELF_NOT_ALLOWED = -5,   // trusting self is not allowed
  //       CHANGE_TRUST_TRUST_LINE_MISSING = -6, // Asset trustline is missing for pool
  //       CHANGE_TRUST_CANNOT_DELETE =
  //           -7, // Asset trustline is still referenced in a pool
  //       CHANGE_TRUST_NOT_AUTH_MAINTAIN_LIABILITIES =
  //           -8 // Asset trustline is deauthorized
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[252]++;
  xdr["enum"]("ChangeTrustResultCode", {
    changeTrustSuccess: 0,
    changeTrustMalformed: -1,
    changeTrustNoIssuer: -2,
    changeTrustInvalidLimit: -3,
    changeTrustLowReserve: -4,
    changeTrustSelfNotAllowed: -5,
    changeTrustTrustLineMissing: -6,
    changeTrustCannotDelete: -7,
    changeTrustNotAuthMaintainLiabilities: -8
  });

  // === xdr source ============================================================
  //
  //   union ChangeTrustResult switch (ChangeTrustResultCode code)
  //   {
  //   case CHANGE_TRUST_SUCCESS:
  //       void;
  //   case CHANGE_TRUST_MALFORMED:
  //   case CHANGE_TRUST_NO_ISSUER:
  //   case CHANGE_TRUST_INVALID_LIMIT:
  //   case CHANGE_TRUST_LOW_RESERVE:
  //   case CHANGE_TRUST_SELF_NOT_ALLOWED:
  //   case CHANGE_TRUST_TRUST_LINE_MISSING:
  //   case CHANGE_TRUST_CANNOT_DELETE:
  //   case CHANGE_TRUST_NOT_AUTH_MAINTAIN_LIABILITIES:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[253]++;
  xdr.union("ChangeTrustResult", {
    switchOn: xdr.lookup("ChangeTrustResultCode"),
    switchName: "code",
    switches: [["changeTrustSuccess", xdr["void"]()], ["changeTrustMalformed", xdr["void"]()], ["changeTrustNoIssuer", xdr["void"]()], ["changeTrustInvalidLimit", xdr["void"]()], ["changeTrustLowReserve", xdr["void"]()], ["changeTrustSelfNotAllowed", xdr["void"]()], ["changeTrustTrustLineMissing", xdr["void"]()], ["changeTrustCannotDelete", xdr["void"]()], ["changeTrustNotAuthMaintainLiabilities", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum AllowTrustResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       ALLOW_TRUST_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       ALLOW_TRUST_MALFORMED = -1,     // asset is not ASSET_TYPE_ALPHANUM
  //       ALLOW_TRUST_NO_TRUST_LINE = -2, // trustor does not have a trustline
  //                                       // source account does not require trust
  //       ALLOW_TRUST_TRUST_NOT_REQUIRED = -3,
  //       ALLOW_TRUST_CANT_REVOKE = -4,      // source account can't revoke trust,
  //       ALLOW_TRUST_SELF_NOT_ALLOWED = -5, // trusting self is not allowed
  //       ALLOW_TRUST_LOW_RESERVE = -6       // claimable balances can't be created
  //                                          // on revoke due to low reserves
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[254]++;
  xdr["enum"]("AllowTrustResultCode", {
    allowTrustSuccess: 0,
    allowTrustMalformed: -1,
    allowTrustNoTrustLine: -2,
    allowTrustTrustNotRequired: -3,
    allowTrustCantRevoke: -4,
    allowTrustSelfNotAllowed: -5,
    allowTrustLowReserve: -6
  });

  // === xdr source ============================================================
  //
  //   union AllowTrustResult switch (AllowTrustResultCode code)
  //   {
  //   case ALLOW_TRUST_SUCCESS:
  //       void;
  //   case ALLOW_TRUST_MALFORMED:
  //   case ALLOW_TRUST_NO_TRUST_LINE:
  //   case ALLOW_TRUST_TRUST_NOT_REQUIRED:
  //   case ALLOW_TRUST_CANT_REVOKE:
  //   case ALLOW_TRUST_SELF_NOT_ALLOWED:
  //   case ALLOW_TRUST_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[255]++;
  xdr.union("AllowTrustResult", {
    switchOn: xdr.lookup("AllowTrustResultCode"),
    switchName: "code",
    switches: [["allowTrustSuccess", xdr["void"]()], ["allowTrustMalformed", xdr["void"]()], ["allowTrustNoTrustLine", xdr["void"]()], ["allowTrustTrustNotRequired", xdr["void"]()], ["allowTrustCantRevoke", xdr["void"]()], ["allowTrustSelfNotAllowed", xdr["void"]()], ["allowTrustLowReserve", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum AccountMergeResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       ACCOUNT_MERGE_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       ACCOUNT_MERGE_MALFORMED = -1,       // can't merge onto itself
  //       ACCOUNT_MERGE_NO_ACCOUNT = -2,      // destination does not exist
  //       ACCOUNT_MERGE_IMMUTABLE_SET = -3,   // source account has AUTH_IMMUTABLE set
  //       ACCOUNT_MERGE_HAS_SUB_ENTRIES = -4, // account has trust lines/offers
  //       ACCOUNT_MERGE_SEQNUM_TOO_FAR = -5,  // sequence number is over max allowed
  //       ACCOUNT_MERGE_DEST_FULL = -6,       // can't add source balance to
  //                                           // destination balance
  //       ACCOUNT_MERGE_IS_SPONSOR = -7       // can't merge account that is a sponsor
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[256]++;
  xdr["enum"]("AccountMergeResultCode", {
    accountMergeSuccess: 0,
    accountMergeMalformed: -1,
    accountMergeNoAccount: -2,
    accountMergeImmutableSet: -3,
    accountMergeHasSubEntries: -4,
    accountMergeSeqnumTooFar: -5,
    accountMergeDestFull: -6,
    accountMergeIsSponsor: -7
  });

  // === xdr source ============================================================
  //
  //   union AccountMergeResult switch (AccountMergeResultCode code)
  //   {
  //   case ACCOUNT_MERGE_SUCCESS:
  //       int64 sourceAccountBalance; // how much got transferred from source account
  //   case ACCOUNT_MERGE_MALFORMED:
  //   case ACCOUNT_MERGE_NO_ACCOUNT:
  //   case ACCOUNT_MERGE_IMMUTABLE_SET:
  //   case ACCOUNT_MERGE_HAS_SUB_ENTRIES:
  //   case ACCOUNT_MERGE_SEQNUM_TOO_FAR:
  //   case ACCOUNT_MERGE_DEST_FULL:
  //   case ACCOUNT_MERGE_IS_SPONSOR:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[257]++;
  xdr.union("AccountMergeResult", {
    switchOn: xdr.lookup("AccountMergeResultCode"),
    switchName: "code",
    switches: [["accountMergeSuccess", "sourceAccountBalance"], ["accountMergeMalformed", xdr["void"]()], ["accountMergeNoAccount", xdr["void"]()], ["accountMergeImmutableSet", xdr["void"]()], ["accountMergeHasSubEntries", xdr["void"]()], ["accountMergeSeqnumTooFar", xdr["void"]()], ["accountMergeDestFull", xdr["void"]()], ["accountMergeIsSponsor", xdr["void"]()]],
    arms: {
      sourceAccountBalance: xdr.lookup("Int64")
    }
  });

  // === xdr source ============================================================
  //
  //   enum InflationResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       INFLATION_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       INFLATION_NOT_TIME = -1
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[258]++;
  xdr["enum"]("InflationResultCode", {
    inflationSuccess: 0,
    inflationNotTime: -1
  });

  // === xdr source ============================================================
  //
  //   struct InflationPayout // or use PaymentResultAtom to limit types?
  //   {
  //       AccountID destination;
  //       int64 amount;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[259]++;
  xdr.struct("InflationPayout", [["destination", xdr.lookup("AccountId")], ["amount", xdr.lookup("Int64")]]);

  // === xdr source ============================================================
  //
  //   union InflationResult switch (InflationResultCode code)
  //   {
  //   case INFLATION_SUCCESS:
  //       InflationPayout payouts<>;
  //   case INFLATION_NOT_TIME:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[260]++;
  xdr.union("InflationResult", {
    switchOn: xdr.lookup("InflationResultCode"),
    switchName: "code",
    switches: [["inflationSuccess", "payouts"], ["inflationNotTime", xdr["void"]()]],
    arms: {
      payouts: xdr.varArray(xdr.lookup("InflationPayout"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   enum ManageDataResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       MANAGE_DATA_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       MANAGE_DATA_NOT_SUPPORTED_YET =
  //           -1, // The network hasn't moved to this protocol change yet
  //       MANAGE_DATA_NAME_NOT_FOUND =
  //           -2, // Trying to remove a Data Entry that isn't there
  //       MANAGE_DATA_LOW_RESERVE = -3, // not enough funds to create a new Data Entry
  //       MANAGE_DATA_INVALID_NAME = -4 // Name not a valid string
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[261]++;
  xdr["enum"]("ManageDataResultCode", {
    manageDataSuccess: 0,
    manageDataNotSupportedYet: -1,
    manageDataNameNotFound: -2,
    manageDataLowReserve: -3,
    manageDataInvalidName: -4
  });

  // === xdr source ============================================================
  //
  //   union ManageDataResult switch (ManageDataResultCode code)
  //   {
  //   case MANAGE_DATA_SUCCESS:
  //       void;
  //   case MANAGE_DATA_NOT_SUPPORTED_YET:
  //   case MANAGE_DATA_NAME_NOT_FOUND:
  //   case MANAGE_DATA_LOW_RESERVE:
  //   case MANAGE_DATA_INVALID_NAME:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[262]++;
  xdr.union("ManageDataResult", {
    switchOn: xdr.lookup("ManageDataResultCode"),
    switchName: "code",
    switches: [["manageDataSuccess", xdr["void"]()], ["manageDataNotSupportedYet", xdr["void"]()], ["manageDataNameNotFound", xdr["void"]()], ["manageDataLowReserve", xdr["void"]()], ["manageDataInvalidName", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum BumpSequenceResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       BUMP_SEQUENCE_SUCCESS = 0,
  //       // codes considered as "failure" for the operation
  //       BUMP_SEQUENCE_BAD_SEQ = -1 // `bumpTo` is not within bounds
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[263]++;
  xdr["enum"]("BumpSequenceResultCode", {
    bumpSequenceSuccess: 0,
    bumpSequenceBadSeq: -1
  });

  // === xdr source ============================================================
  //
  //   union BumpSequenceResult switch (BumpSequenceResultCode code)
  //   {
  //   case BUMP_SEQUENCE_SUCCESS:
  //       void;
  //   case BUMP_SEQUENCE_BAD_SEQ:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[264]++;
  xdr.union("BumpSequenceResult", {
    switchOn: xdr.lookup("BumpSequenceResultCode"),
    switchName: "code",
    switches: [["bumpSequenceSuccess", xdr["void"]()], ["bumpSequenceBadSeq", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum CreateClaimableBalanceResultCode
  //   {
  //       CREATE_CLAIMABLE_BALANCE_SUCCESS = 0,
  //       CREATE_CLAIMABLE_BALANCE_MALFORMED = -1,
  //       CREATE_CLAIMABLE_BALANCE_LOW_RESERVE = -2,
  //       CREATE_CLAIMABLE_BALANCE_NO_TRUST = -3,
  //       CREATE_CLAIMABLE_BALANCE_NOT_AUTHORIZED = -4,
  //       CREATE_CLAIMABLE_BALANCE_UNDERFUNDED = -5
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[265]++;
  xdr["enum"]("CreateClaimableBalanceResultCode", {
    createClaimableBalanceSuccess: 0,
    createClaimableBalanceMalformed: -1,
    createClaimableBalanceLowReserve: -2,
    createClaimableBalanceNoTrust: -3,
    createClaimableBalanceNotAuthorized: -4,
    createClaimableBalanceUnderfunded: -5
  });

  // === xdr source ============================================================
  //
  //   union CreateClaimableBalanceResult switch (
  //       CreateClaimableBalanceResultCode code)
  //   {
  //   case CREATE_CLAIMABLE_BALANCE_SUCCESS:
  //       ClaimableBalanceID balanceID;
  //   case CREATE_CLAIMABLE_BALANCE_MALFORMED:
  //   case CREATE_CLAIMABLE_BALANCE_LOW_RESERVE:
  //   case CREATE_CLAIMABLE_BALANCE_NO_TRUST:
  //   case CREATE_CLAIMABLE_BALANCE_NOT_AUTHORIZED:
  //   case CREATE_CLAIMABLE_BALANCE_UNDERFUNDED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[266]++;
  xdr.union("CreateClaimableBalanceResult", {
    switchOn: xdr.lookup("CreateClaimableBalanceResultCode"),
    switchName: "code",
    switches: [["createClaimableBalanceSuccess", "balanceId"], ["createClaimableBalanceMalformed", xdr["void"]()], ["createClaimableBalanceLowReserve", xdr["void"]()], ["createClaimableBalanceNoTrust", xdr["void"]()], ["createClaimableBalanceNotAuthorized", xdr["void"]()], ["createClaimableBalanceUnderfunded", xdr["void"]()]],
    arms: {
      balanceId: xdr.lookup("ClaimableBalanceId")
    }
  });

  // === xdr source ============================================================
  //
  //   enum ClaimClaimableBalanceResultCode
  //   {
  //       CLAIM_CLAIMABLE_BALANCE_SUCCESS = 0,
  //       CLAIM_CLAIMABLE_BALANCE_DOES_NOT_EXIST = -1,
  //       CLAIM_CLAIMABLE_BALANCE_CANNOT_CLAIM = -2,
  //       CLAIM_CLAIMABLE_BALANCE_LINE_FULL = -3,
  //       CLAIM_CLAIMABLE_BALANCE_NO_TRUST = -4,
  //       CLAIM_CLAIMABLE_BALANCE_NOT_AUTHORIZED = -5
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[267]++;
  xdr["enum"]("ClaimClaimableBalanceResultCode", {
    claimClaimableBalanceSuccess: 0,
    claimClaimableBalanceDoesNotExist: -1,
    claimClaimableBalanceCannotClaim: -2,
    claimClaimableBalanceLineFull: -3,
    claimClaimableBalanceNoTrust: -4,
    claimClaimableBalanceNotAuthorized: -5
  });

  // === xdr source ============================================================
  //
  //   union ClaimClaimableBalanceResult switch (ClaimClaimableBalanceResultCode code)
  //   {
  //   case CLAIM_CLAIMABLE_BALANCE_SUCCESS:
  //       void;
  //   case CLAIM_CLAIMABLE_BALANCE_DOES_NOT_EXIST:
  //   case CLAIM_CLAIMABLE_BALANCE_CANNOT_CLAIM:
  //   case CLAIM_CLAIMABLE_BALANCE_LINE_FULL:
  //   case CLAIM_CLAIMABLE_BALANCE_NO_TRUST:
  //   case CLAIM_CLAIMABLE_BALANCE_NOT_AUTHORIZED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[268]++;
  xdr.union("ClaimClaimableBalanceResult", {
    switchOn: xdr.lookup("ClaimClaimableBalanceResultCode"),
    switchName: "code",
    switches: [["claimClaimableBalanceSuccess", xdr["void"]()], ["claimClaimableBalanceDoesNotExist", xdr["void"]()], ["claimClaimableBalanceCannotClaim", xdr["void"]()], ["claimClaimableBalanceLineFull", xdr["void"]()], ["claimClaimableBalanceNoTrust", xdr["void"]()], ["claimClaimableBalanceNotAuthorized", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum BeginSponsoringFutureReservesResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       BEGIN_SPONSORING_FUTURE_RESERVES_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       BEGIN_SPONSORING_FUTURE_RESERVES_MALFORMED = -1,
  //       BEGIN_SPONSORING_FUTURE_RESERVES_ALREADY_SPONSORED = -2,
  //       BEGIN_SPONSORING_FUTURE_RESERVES_RECURSIVE = -3
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[269]++;
  xdr["enum"]("BeginSponsoringFutureReservesResultCode", {
    beginSponsoringFutureReservesSuccess: 0,
    beginSponsoringFutureReservesMalformed: -1,
    beginSponsoringFutureReservesAlreadySponsored: -2,
    beginSponsoringFutureReservesRecursive: -3
  });

  // === xdr source ============================================================
  //
  //   union BeginSponsoringFutureReservesResult switch (
  //       BeginSponsoringFutureReservesResultCode code)
  //   {
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_SUCCESS:
  //       void;
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_MALFORMED:
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_ALREADY_SPONSORED:
  //   case BEGIN_SPONSORING_FUTURE_RESERVES_RECURSIVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[270]++;
  xdr.union("BeginSponsoringFutureReservesResult", {
    switchOn: xdr.lookup("BeginSponsoringFutureReservesResultCode"),
    switchName: "code",
    switches: [["beginSponsoringFutureReservesSuccess", xdr["void"]()], ["beginSponsoringFutureReservesMalformed", xdr["void"]()], ["beginSponsoringFutureReservesAlreadySponsored", xdr["void"]()], ["beginSponsoringFutureReservesRecursive", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum EndSponsoringFutureReservesResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       END_SPONSORING_FUTURE_RESERVES_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       END_SPONSORING_FUTURE_RESERVES_NOT_SPONSORED = -1
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[271]++;
  xdr["enum"]("EndSponsoringFutureReservesResultCode", {
    endSponsoringFutureReservesSuccess: 0,
    endSponsoringFutureReservesNotSponsored: -1
  });

  // === xdr source ============================================================
  //
  //   union EndSponsoringFutureReservesResult switch (
  //       EndSponsoringFutureReservesResultCode code)
  //   {
  //   case END_SPONSORING_FUTURE_RESERVES_SUCCESS:
  //       void;
  //   case END_SPONSORING_FUTURE_RESERVES_NOT_SPONSORED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[272]++;
  xdr.union("EndSponsoringFutureReservesResult", {
    switchOn: xdr.lookup("EndSponsoringFutureReservesResultCode"),
    switchName: "code",
    switches: [["endSponsoringFutureReservesSuccess", xdr["void"]()], ["endSponsoringFutureReservesNotSponsored", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum RevokeSponsorshipResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       REVOKE_SPONSORSHIP_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       REVOKE_SPONSORSHIP_DOES_NOT_EXIST = -1,
  //       REVOKE_SPONSORSHIP_NOT_SPONSOR = -2,
  //       REVOKE_SPONSORSHIP_LOW_RESERVE = -3,
  //       REVOKE_SPONSORSHIP_ONLY_TRANSFERABLE = -4,
  //       REVOKE_SPONSORSHIP_MALFORMED = -5
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[273]++;
  xdr["enum"]("RevokeSponsorshipResultCode", {
    revokeSponsorshipSuccess: 0,
    revokeSponsorshipDoesNotExist: -1,
    revokeSponsorshipNotSponsor: -2,
    revokeSponsorshipLowReserve: -3,
    revokeSponsorshipOnlyTransferable: -4,
    revokeSponsorshipMalformed: -5
  });

  // === xdr source ============================================================
  //
  //   union RevokeSponsorshipResult switch (RevokeSponsorshipResultCode code)
  //   {
  //   case REVOKE_SPONSORSHIP_SUCCESS:
  //       void;
  //   case REVOKE_SPONSORSHIP_DOES_NOT_EXIST:
  //   case REVOKE_SPONSORSHIP_NOT_SPONSOR:
  //   case REVOKE_SPONSORSHIP_LOW_RESERVE:
  //   case REVOKE_SPONSORSHIP_ONLY_TRANSFERABLE:
  //   case REVOKE_SPONSORSHIP_MALFORMED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[274]++;
  xdr.union("RevokeSponsorshipResult", {
    switchOn: xdr.lookup("RevokeSponsorshipResultCode"),
    switchName: "code",
    switches: [["revokeSponsorshipSuccess", xdr["void"]()], ["revokeSponsorshipDoesNotExist", xdr["void"]()], ["revokeSponsorshipNotSponsor", xdr["void"]()], ["revokeSponsorshipLowReserve", xdr["void"]()], ["revokeSponsorshipOnlyTransferable", xdr["void"]()], ["revokeSponsorshipMalformed", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum ClawbackResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CLAWBACK_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       CLAWBACK_MALFORMED = -1,
  //       CLAWBACK_NOT_CLAWBACK_ENABLED = -2,
  //       CLAWBACK_NO_TRUST = -3,
  //       CLAWBACK_UNDERFUNDED = -4
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[275]++;
  xdr["enum"]("ClawbackResultCode", {
    clawbackSuccess: 0,
    clawbackMalformed: -1,
    clawbackNotClawbackEnabled: -2,
    clawbackNoTrust: -3,
    clawbackUnderfunded: -4
  });

  // === xdr source ============================================================
  //
  //   union ClawbackResult switch (ClawbackResultCode code)
  //   {
  //   case CLAWBACK_SUCCESS:
  //       void;
  //   case CLAWBACK_MALFORMED:
  //   case CLAWBACK_NOT_CLAWBACK_ENABLED:
  //   case CLAWBACK_NO_TRUST:
  //   case CLAWBACK_UNDERFUNDED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[276]++;
  xdr.union("ClawbackResult", {
    switchOn: xdr.lookup("ClawbackResultCode"),
    switchName: "code",
    switches: [["clawbackSuccess", xdr["void"]()], ["clawbackMalformed", xdr["void"]()], ["clawbackNotClawbackEnabled", xdr["void"]()], ["clawbackNoTrust", xdr["void"]()], ["clawbackUnderfunded", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum ClawbackClaimableBalanceResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       CLAWBACK_CLAIMABLE_BALANCE_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       CLAWBACK_CLAIMABLE_BALANCE_DOES_NOT_EXIST = -1,
  //       CLAWBACK_CLAIMABLE_BALANCE_NOT_ISSUER = -2,
  //       CLAWBACK_CLAIMABLE_BALANCE_NOT_CLAWBACK_ENABLED = -3
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[277]++;
  xdr["enum"]("ClawbackClaimableBalanceResultCode", {
    clawbackClaimableBalanceSuccess: 0,
    clawbackClaimableBalanceDoesNotExist: -1,
    clawbackClaimableBalanceNotIssuer: -2,
    clawbackClaimableBalanceNotClawbackEnabled: -3
  });

  // === xdr source ============================================================
  //
  //   union ClawbackClaimableBalanceResult switch (
  //       ClawbackClaimableBalanceResultCode code)
  //   {
  //   case CLAWBACK_CLAIMABLE_BALANCE_SUCCESS:
  //       void;
  //   case CLAWBACK_CLAIMABLE_BALANCE_DOES_NOT_EXIST:
  //   case CLAWBACK_CLAIMABLE_BALANCE_NOT_ISSUER:
  //   case CLAWBACK_CLAIMABLE_BALANCE_NOT_CLAWBACK_ENABLED:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[278]++;
  xdr.union("ClawbackClaimableBalanceResult", {
    switchOn: xdr.lookup("ClawbackClaimableBalanceResultCode"),
    switchName: "code",
    switches: [["clawbackClaimableBalanceSuccess", xdr["void"]()], ["clawbackClaimableBalanceDoesNotExist", xdr["void"]()], ["clawbackClaimableBalanceNotIssuer", xdr["void"]()], ["clawbackClaimableBalanceNotClawbackEnabled", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum SetTrustLineFlagsResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       SET_TRUST_LINE_FLAGS_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       SET_TRUST_LINE_FLAGS_MALFORMED = -1,
  //       SET_TRUST_LINE_FLAGS_NO_TRUST_LINE = -2,
  //       SET_TRUST_LINE_FLAGS_CANT_REVOKE = -3,
  //       SET_TRUST_LINE_FLAGS_INVALID_STATE = -4,
  //       SET_TRUST_LINE_FLAGS_LOW_RESERVE = -5 // claimable balances can't be created
  //                                             // on revoke due to low reserves
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[279]++;
  xdr["enum"]("SetTrustLineFlagsResultCode", {
    setTrustLineFlagsSuccess: 0,
    setTrustLineFlagsMalformed: -1,
    setTrustLineFlagsNoTrustLine: -2,
    setTrustLineFlagsCantRevoke: -3,
    setTrustLineFlagsInvalidState: -4,
    setTrustLineFlagsLowReserve: -5
  });

  // === xdr source ============================================================
  //
  //   union SetTrustLineFlagsResult switch (SetTrustLineFlagsResultCode code)
  //   {
  //   case SET_TRUST_LINE_FLAGS_SUCCESS:
  //       void;
  //   case SET_TRUST_LINE_FLAGS_MALFORMED:
  //   case SET_TRUST_LINE_FLAGS_NO_TRUST_LINE:
  //   case SET_TRUST_LINE_FLAGS_CANT_REVOKE:
  //   case SET_TRUST_LINE_FLAGS_INVALID_STATE:
  //   case SET_TRUST_LINE_FLAGS_LOW_RESERVE:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[280]++;
  xdr.union("SetTrustLineFlagsResult", {
    switchOn: xdr.lookup("SetTrustLineFlagsResultCode"),
    switchName: "code",
    switches: [["setTrustLineFlagsSuccess", xdr["void"]()], ["setTrustLineFlagsMalformed", xdr["void"]()], ["setTrustLineFlagsNoTrustLine", xdr["void"]()], ["setTrustLineFlagsCantRevoke", xdr["void"]()], ["setTrustLineFlagsInvalidState", xdr["void"]()], ["setTrustLineFlagsLowReserve", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum LiquidityPoolDepositResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       LIQUIDITY_POOL_DEPOSIT_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       LIQUIDITY_POOL_DEPOSIT_MALFORMED = -1,      // bad input
  //       LIQUIDITY_POOL_DEPOSIT_NO_TRUST = -2,       // no trust line for one of the
  //                                                   // assets
  //       LIQUIDITY_POOL_DEPOSIT_NOT_AUTHORIZED = -3, // not authorized for one of the
  //                                                   // assets
  //       LIQUIDITY_POOL_DEPOSIT_UNDERFUNDED = -4,    // not enough balance for one of
  //                                                   // the assets
  //       LIQUIDITY_POOL_DEPOSIT_LINE_FULL = -5,      // pool share trust line doesn't
  //                                                   // have sufficient limit
  //       LIQUIDITY_POOL_DEPOSIT_BAD_PRICE = -6,      // deposit price outside bounds
  //       LIQUIDITY_POOL_DEPOSIT_POOL_FULL = -7       // pool reserves are full
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[281]++;
  xdr["enum"]("LiquidityPoolDepositResultCode", {
    liquidityPoolDepositSuccess: 0,
    liquidityPoolDepositMalformed: -1,
    liquidityPoolDepositNoTrust: -2,
    liquidityPoolDepositNotAuthorized: -3,
    liquidityPoolDepositUnderfunded: -4,
    liquidityPoolDepositLineFull: -5,
    liquidityPoolDepositBadPrice: -6,
    liquidityPoolDepositPoolFull: -7
  });

  // === xdr source ============================================================
  //
  //   union LiquidityPoolDepositResult switch (LiquidityPoolDepositResultCode code)
  //   {
  //   case LIQUIDITY_POOL_DEPOSIT_SUCCESS:
  //       void;
  //   case LIQUIDITY_POOL_DEPOSIT_MALFORMED:
  //   case LIQUIDITY_POOL_DEPOSIT_NO_TRUST:
  //   case LIQUIDITY_POOL_DEPOSIT_NOT_AUTHORIZED:
  //   case LIQUIDITY_POOL_DEPOSIT_UNDERFUNDED:
  //   case LIQUIDITY_POOL_DEPOSIT_LINE_FULL:
  //   case LIQUIDITY_POOL_DEPOSIT_BAD_PRICE:
  //   case LIQUIDITY_POOL_DEPOSIT_POOL_FULL:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[282]++;
  xdr.union("LiquidityPoolDepositResult", {
    switchOn: xdr.lookup("LiquidityPoolDepositResultCode"),
    switchName: "code",
    switches: [["liquidityPoolDepositSuccess", xdr["void"]()], ["liquidityPoolDepositMalformed", xdr["void"]()], ["liquidityPoolDepositNoTrust", xdr["void"]()], ["liquidityPoolDepositNotAuthorized", xdr["void"]()], ["liquidityPoolDepositUnderfunded", xdr["void"]()], ["liquidityPoolDepositLineFull", xdr["void"]()], ["liquidityPoolDepositBadPrice", xdr["void"]()], ["liquidityPoolDepositPoolFull", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum LiquidityPoolWithdrawResultCode
  //   {
  //       // codes considered as "success" for the operation
  //       LIQUIDITY_POOL_WITHDRAW_SUCCESS = 0,
  //   
  //       // codes considered as "failure" for the operation
  //       LIQUIDITY_POOL_WITHDRAW_MALFORMED = -1,    // bad input
  //       LIQUIDITY_POOL_WITHDRAW_NO_TRUST = -2,     // no trust line for one of the
  //                                                  // assets
  //       LIQUIDITY_POOL_WITHDRAW_UNDERFUNDED = -3,  // not enough balance of the
  //                                                  // pool share
  //       LIQUIDITY_POOL_WITHDRAW_LINE_FULL = -4,    // would go above limit for one
  //                                                  // of the assets
  //       LIQUIDITY_POOL_WITHDRAW_UNDER_MINIMUM = -5 // didn't withdraw enough
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[283]++;
  xdr["enum"]("LiquidityPoolWithdrawResultCode", {
    liquidityPoolWithdrawSuccess: 0,
    liquidityPoolWithdrawMalformed: -1,
    liquidityPoolWithdrawNoTrust: -2,
    liquidityPoolWithdrawUnderfunded: -3,
    liquidityPoolWithdrawLineFull: -4,
    liquidityPoolWithdrawUnderMinimum: -5
  });

  // === xdr source ============================================================
  //
  //   union LiquidityPoolWithdrawResult switch (LiquidityPoolWithdrawResultCode code)
  //   {
  //   case LIQUIDITY_POOL_WITHDRAW_SUCCESS:
  //       void;
  //   case LIQUIDITY_POOL_WITHDRAW_MALFORMED:
  //   case LIQUIDITY_POOL_WITHDRAW_NO_TRUST:
  //   case LIQUIDITY_POOL_WITHDRAW_UNDERFUNDED:
  //   case LIQUIDITY_POOL_WITHDRAW_LINE_FULL:
  //   case LIQUIDITY_POOL_WITHDRAW_UNDER_MINIMUM:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[284]++;
  xdr.union("LiquidityPoolWithdrawResult", {
    switchOn: xdr.lookup("LiquidityPoolWithdrawResultCode"),
    switchName: "code",
    switches: [["liquidityPoolWithdrawSuccess", xdr["void"]()], ["liquidityPoolWithdrawMalformed", xdr["void"]()], ["liquidityPoolWithdrawNoTrust", xdr["void"]()], ["liquidityPoolWithdrawUnderfunded", xdr["void"]()], ["liquidityPoolWithdrawLineFull", xdr["void"]()], ["liquidityPoolWithdrawUnderMinimum", xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum OperationResultCode
  //   {
  //       opINNER = 0, // inner object result is valid
  //   
  //       opBAD_AUTH = -1,            // too few valid signatures / wrong network
  //       opNO_ACCOUNT = -2,          // source account was not found
  //       opNOT_SUPPORTED = -3,       // operation not supported at this time
  //       opTOO_MANY_SUBENTRIES = -4, // max number of subentries already reached
  //       opEXCEEDED_WORK_LIMIT = -5, // operation did too much work
  //       opTOO_MANY_SPONSORING = -6  // account is sponsoring too many entries
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[285]++;
  xdr["enum"]("OperationResultCode", {
    opInner: 0,
    opBadAuth: -1,
    opNoAccount: -2,
    opNotSupported: -3,
    opTooManySubentries: -4,
    opExceededWorkLimit: -5,
    opTooManySponsoring: -6
  });

  // === xdr source ============================================================
  //
  //   union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountResult createAccountResult;
  //       case PAYMENT:
  //           PaymentResult paymentResult;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveResult pathPaymentStrictReceiveResult;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferResult manageSellOfferResult;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           ManageSellOfferResult createPassiveSellOfferResult;
  //       case SET_OPTIONS:
  //           SetOptionsResult setOptionsResult;
  //       case CHANGE_TRUST:
  //           ChangeTrustResult changeTrustResult;
  //       case ALLOW_TRUST:
  //           AllowTrustResult allowTrustResult;
  //       case ACCOUNT_MERGE:
  //           AccountMergeResult accountMergeResult;
  //       case INFLATION:
  //           InflationResult inflationResult;
  //       case MANAGE_DATA:
  //           ManageDataResult manageDataResult;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceResult bumpSeqResult;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferResult manageBuyOfferResult;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendResult pathPaymentStrictSendResult;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceResult createClaimableBalanceResult;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceResult claimClaimableBalanceResult;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesResult beginSponsoringFutureReservesResult;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           EndSponsoringFutureReservesResult endSponsoringFutureReservesResult;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipResult revokeSponsorshipResult;
  //       case CLAWBACK:
  //           ClawbackResult clawbackResult;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceResult clawbackClaimableBalanceResult;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsResult setTrustLineFlagsResult;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositResult liquidityPoolDepositResult;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawResult liquidityPoolWithdrawResult;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[286]++;
  xdr.union("OperationResultTr", {
    switchOn: xdr.lookup("OperationType"),
    switchName: "type",
    switches: [["createAccount", "createAccountResult"], ["payment", "paymentResult"], ["pathPaymentStrictReceive", "pathPaymentStrictReceiveResult"], ["manageSellOffer", "manageSellOfferResult"], ["createPassiveSellOffer", "createPassiveSellOfferResult"], ["setOptions", "setOptionsResult"], ["changeTrust", "changeTrustResult"], ["allowTrust", "allowTrustResult"], ["accountMerge", "accountMergeResult"], ["inflation", "inflationResult"], ["manageData", "manageDataResult"], ["bumpSequence", "bumpSeqResult"], ["manageBuyOffer", "manageBuyOfferResult"], ["pathPaymentStrictSend", "pathPaymentStrictSendResult"], ["createClaimableBalance", "createClaimableBalanceResult"], ["claimClaimableBalance", "claimClaimableBalanceResult"], ["beginSponsoringFutureReserves", "beginSponsoringFutureReservesResult"], ["endSponsoringFutureReserves", "endSponsoringFutureReservesResult"], ["revokeSponsorship", "revokeSponsorshipResult"], ["clawback", "clawbackResult"], ["clawbackClaimableBalance", "clawbackClaimableBalanceResult"], ["setTrustLineFlags", "setTrustLineFlagsResult"], ["liquidityPoolDeposit", "liquidityPoolDepositResult"], ["liquidityPoolWithdraw", "liquidityPoolWithdrawResult"]],
    arms: {
      createAccountResult: xdr.lookup("CreateAccountResult"),
      paymentResult: xdr.lookup("PaymentResult"),
      pathPaymentStrictReceiveResult: xdr.lookup("PathPaymentStrictReceiveResult"),
      manageSellOfferResult: xdr.lookup("ManageSellOfferResult"),
      createPassiveSellOfferResult: xdr.lookup("ManageSellOfferResult"),
      setOptionsResult: xdr.lookup("SetOptionsResult"),
      changeTrustResult: xdr.lookup("ChangeTrustResult"),
      allowTrustResult: xdr.lookup("AllowTrustResult"),
      accountMergeResult: xdr.lookup("AccountMergeResult"),
      inflationResult: xdr.lookup("InflationResult"),
      manageDataResult: xdr.lookup("ManageDataResult"),
      bumpSeqResult: xdr.lookup("BumpSequenceResult"),
      manageBuyOfferResult: xdr.lookup("ManageBuyOfferResult"),
      pathPaymentStrictSendResult: xdr.lookup("PathPaymentStrictSendResult"),
      createClaimableBalanceResult: xdr.lookup("CreateClaimableBalanceResult"),
      claimClaimableBalanceResult: xdr.lookup("ClaimClaimableBalanceResult"),
      beginSponsoringFutureReservesResult: xdr.lookup("BeginSponsoringFutureReservesResult"),
      endSponsoringFutureReservesResult: xdr.lookup("EndSponsoringFutureReservesResult"),
      revokeSponsorshipResult: xdr.lookup("RevokeSponsorshipResult"),
      clawbackResult: xdr.lookup("ClawbackResult"),
      clawbackClaimableBalanceResult: xdr.lookup("ClawbackClaimableBalanceResult"),
      setTrustLineFlagsResult: xdr.lookup("SetTrustLineFlagsResult"),
      liquidityPoolDepositResult: xdr.lookup("LiquidityPoolDepositResult"),
      liquidityPoolWithdrawResult: xdr.lookup("LiquidityPoolWithdrawResult")
    }
  });

  // === xdr source ============================================================
  //
  //   union OperationResult switch (OperationResultCode code)
  //   {
  //   case opINNER:
  //       union switch (OperationType type)
  //       {
  //       case CREATE_ACCOUNT:
  //           CreateAccountResult createAccountResult;
  //       case PAYMENT:
  //           PaymentResult paymentResult;
  //       case PATH_PAYMENT_STRICT_RECEIVE:
  //           PathPaymentStrictReceiveResult pathPaymentStrictReceiveResult;
  //       case MANAGE_SELL_OFFER:
  //           ManageSellOfferResult manageSellOfferResult;
  //       case CREATE_PASSIVE_SELL_OFFER:
  //           ManageSellOfferResult createPassiveSellOfferResult;
  //       case SET_OPTIONS:
  //           SetOptionsResult setOptionsResult;
  //       case CHANGE_TRUST:
  //           ChangeTrustResult changeTrustResult;
  //       case ALLOW_TRUST:
  //           AllowTrustResult allowTrustResult;
  //       case ACCOUNT_MERGE:
  //           AccountMergeResult accountMergeResult;
  //       case INFLATION:
  //           InflationResult inflationResult;
  //       case MANAGE_DATA:
  //           ManageDataResult manageDataResult;
  //       case BUMP_SEQUENCE:
  //           BumpSequenceResult bumpSeqResult;
  //       case MANAGE_BUY_OFFER:
  //           ManageBuyOfferResult manageBuyOfferResult;
  //       case PATH_PAYMENT_STRICT_SEND:
  //           PathPaymentStrictSendResult pathPaymentStrictSendResult;
  //       case CREATE_CLAIMABLE_BALANCE:
  //           CreateClaimableBalanceResult createClaimableBalanceResult;
  //       case CLAIM_CLAIMABLE_BALANCE:
  //           ClaimClaimableBalanceResult claimClaimableBalanceResult;
  //       case BEGIN_SPONSORING_FUTURE_RESERVES:
  //           BeginSponsoringFutureReservesResult beginSponsoringFutureReservesResult;
  //       case END_SPONSORING_FUTURE_RESERVES:
  //           EndSponsoringFutureReservesResult endSponsoringFutureReservesResult;
  //       case REVOKE_SPONSORSHIP:
  //           RevokeSponsorshipResult revokeSponsorshipResult;
  //       case CLAWBACK:
  //           ClawbackResult clawbackResult;
  //       case CLAWBACK_CLAIMABLE_BALANCE:
  //           ClawbackClaimableBalanceResult clawbackClaimableBalanceResult;
  //       case SET_TRUST_LINE_FLAGS:
  //           SetTrustLineFlagsResult setTrustLineFlagsResult;
  //       case LIQUIDITY_POOL_DEPOSIT:
  //           LiquidityPoolDepositResult liquidityPoolDepositResult;
  //       case LIQUIDITY_POOL_WITHDRAW:
  //           LiquidityPoolWithdrawResult liquidityPoolWithdrawResult;
  //       }
  //       tr;
  //   case opBAD_AUTH:
  //   case opNO_ACCOUNT:
  //   case opNOT_SUPPORTED:
  //   case opTOO_MANY_SUBENTRIES:
  //   case opEXCEEDED_WORK_LIMIT:
  //   case opTOO_MANY_SPONSORING:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[287]++;
  xdr.union("OperationResult", {
    switchOn: xdr.lookup("OperationResultCode"),
    switchName: "code",
    switches: [["opInner", "tr"], ["opBadAuth", xdr["void"]()], ["opNoAccount", xdr["void"]()], ["opNotSupported", xdr["void"]()], ["opTooManySubentries", xdr["void"]()], ["opExceededWorkLimit", xdr["void"]()], ["opTooManySponsoring", xdr["void"]()]],
    arms: {
      tr: xdr.lookup("OperationResultTr")
    }
  });

  // === xdr source ============================================================
  //
  //   enum TransactionResultCode
  //   {
  //       txFEE_BUMP_INNER_SUCCESS = 1, // fee bump inner transaction succeeded
  //       txSUCCESS = 0,                // all operations succeeded
  //   
  //       txFAILED = -1, // one of the operations failed (none were applied)
  //   
  //       txTOO_EARLY = -2,         // ledger closeTime before minTime
  //       txTOO_LATE = -3,          // ledger closeTime after maxTime
  //       txMISSING_OPERATION = -4, // no operation was specified
  //       txBAD_SEQ = -5,           // sequence number does not match source account
  //   
  //       txBAD_AUTH = -6,             // too few valid signatures / wrong network
  //       txINSUFFICIENT_BALANCE = -7, // fee would bring account below reserve
  //       txNO_ACCOUNT = -8,           // source account not found
  //       txINSUFFICIENT_FEE = -9,     // fee is too small
  //       txBAD_AUTH_EXTRA = -10,      // unused signatures attached to transaction
  //       txINTERNAL_ERROR = -11,      // an unknown error occurred
  //   
  //       txNOT_SUPPORTED = -12,         // transaction type not supported
  //       txFEE_BUMP_INNER_FAILED = -13, // fee bump inner transaction failed
  //       txBAD_SPONSORSHIP = -14,       // sponsorship not confirmed
  //       txBAD_MIN_SEQ_AGE_OR_GAP =
  //           -15, // minSeqAge or minSeqLedgerGap conditions not met
  //       txMALFORMED = -16 // precondition is invalid
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[288]++;
  xdr["enum"]("TransactionResultCode", {
    txFeeBumpInnerSuccess: 1,
    txSuccess: 0,
    txFailed: -1,
    txTooEarly: -2,
    txTooLate: -3,
    txMissingOperation: -4,
    txBadSeq: -5,
    txBadAuth: -6,
    txInsufficientBalance: -7,
    txNoAccount: -8,
    txInsufficientFee: -9,
    txBadAuthExtra: -10,
    txInternalError: -11,
    txNotSupported: -12,
    txFeeBumpInnerFailed: -13,
    txBadSponsorship: -14,
    txBadMinSeqAgeOrGap: -15,
    txMalformed: -16
  });

  // === xdr source ============================================================
  //
  //   union switch (TransactionResultCode code)
  //       {
  //       // txFEE_BUMP_INNER_SUCCESS is not included
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // txFEE_BUMP_INNER_FAILED is not included
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[289]++;
  xdr.union("InnerTransactionResultResult", {
    switchOn: xdr.lookup("TransactionResultCode"),
    switchName: "code",
    switches: [["txSuccess", "results"], ["txFailed", "results"], ["txTooEarly", xdr["void"]()], ["txTooLate", xdr["void"]()], ["txMissingOperation", xdr["void"]()], ["txBadSeq", xdr["void"]()], ["txBadAuth", xdr["void"]()], ["txInsufficientBalance", xdr["void"]()], ["txNoAccount", xdr["void"]()], ["txInsufficientFee", xdr["void"]()], ["txBadAuthExtra", xdr["void"]()], ["txInternalError", xdr["void"]()], ["txNotSupported", xdr["void"]()], ["txBadSponsorship", xdr["void"]()], ["txBadMinSeqAgeOrGap", xdr["void"]()], ["txMalformed", xdr["void"]()]],
    arms: {
      results: xdr.varArray(xdr.lookup("OperationResult"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[290]++;
  xdr.union("InnerTransactionResultExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct InnerTransactionResult
  //   {
  //       // Always 0. Here for binary compatibility.
  //       int64 feeCharged;
  //   
  //       union switch (TransactionResultCode code)
  //       {
  //       // txFEE_BUMP_INNER_SUCCESS is not included
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // txFEE_BUMP_INNER_FAILED is not included
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //           void;
  //       }
  //       result;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[291]++;
  xdr.struct("InnerTransactionResult", [["feeCharged", xdr.lookup("Int64")], ["result", xdr.lookup("InnerTransactionResultResult")], ["ext", xdr.lookup("InnerTransactionResultExt")]]);

  // === xdr source ============================================================
  //
  //   struct InnerTransactionResultPair
  //   {
  //       Hash transactionHash;          // hash of the inner transaction
  //       InnerTransactionResult result; // result for the inner transaction
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[292]++;
  xdr.struct("InnerTransactionResultPair", [["transactionHash", xdr.lookup("Hash")], ["result", xdr.lookup("InnerTransactionResult")]]);

  // === xdr source ============================================================
  //
  //   union switch (TransactionResultCode code)
  //       {
  //       case txFEE_BUMP_INNER_SUCCESS:
  //       case txFEE_BUMP_INNER_FAILED:
  //           InnerTransactionResultPair innerResultPair;
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // case txFEE_BUMP_INNER_FAILED: handled above
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[293]++;
  xdr.union("TransactionResultResult", {
    switchOn: xdr.lookup("TransactionResultCode"),
    switchName: "code",
    switches: [["txFeeBumpInnerSuccess", "innerResultPair"], ["txFeeBumpInnerFailed", "innerResultPair"], ["txSuccess", "results"], ["txFailed", "results"], ["txTooEarly", xdr["void"]()], ["txTooLate", xdr["void"]()], ["txMissingOperation", xdr["void"]()], ["txBadSeq", xdr["void"]()], ["txBadAuth", xdr["void"]()], ["txInsufficientBalance", xdr["void"]()], ["txNoAccount", xdr["void"]()], ["txInsufficientFee", xdr["void"]()], ["txBadAuthExtra", xdr["void"]()], ["txInternalError", xdr["void"]()], ["txNotSupported", xdr["void"]()], ["txBadSponsorship", xdr["void"]()], ["txBadMinSeqAgeOrGap", xdr["void"]()], ["txMalformed", xdr["void"]()]],
    arms: {
      innerResultPair: xdr.lookup("InnerTransactionResultPair"),
      results: xdr.varArray(xdr.lookup("OperationResult"), 2147483647)
    }
  });

  // === xdr source ============================================================
  //
  //   union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[294]++;
  xdr.union("TransactionResultExt", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   struct TransactionResult
  //   {
  //       int64 feeCharged; // actual fee charged for the transaction
  //   
  //       union switch (TransactionResultCode code)
  //       {
  //       case txFEE_BUMP_INNER_SUCCESS:
  //       case txFEE_BUMP_INNER_FAILED:
  //           InnerTransactionResultPair innerResultPair;
  //       case txSUCCESS:
  //       case txFAILED:
  //           OperationResult results<>;
  //       case txTOO_EARLY:
  //       case txTOO_LATE:
  //       case txMISSING_OPERATION:
  //       case txBAD_SEQ:
  //       case txBAD_AUTH:
  //       case txINSUFFICIENT_BALANCE:
  //       case txNO_ACCOUNT:
  //       case txINSUFFICIENT_FEE:
  //       case txBAD_AUTH_EXTRA:
  //       case txINTERNAL_ERROR:
  //       case txNOT_SUPPORTED:
  //       // case txFEE_BUMP_INNER_FAILED: handled above
  //       case txBAD_SPONSORSHIP:
  //       case txBAD_MIN_SEQ_AGE_OR_GAP:
  //       case txMALFORMED:
  //           void;
  //       }
  //       result;
  //   
  //       // reserved for future use
  //       union switch (int v)
  //       {
  //       case 0:
  //           void;
  //       }
  //       ext;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[295]++;
  xdr.struct("TransactionResult", [["feeCharged", xdr.lookup("Int64")], ["result", xdr.lookup("TransactionResultResult")], ["ext", xdr.lookup("TransactionResultExt")]]);

  // === xdr source ============================================================
  //
  //   typedef opaque Hash[32];
  //
  // ===========================================================================
  cov_1racd7g41m().s[296]++;
  xdr.typedef("Hash", xdr.opaque(32));

  // === xdr source ============================================================
  //
  //   typedef opaque uint256[32];
  //
  // ===========================================================================
  cov_1racd7g41m().s[297]++;
  xdr.typedef("Uint256", xdr.opaque(32));

  // === xdr source ============================================================
  //
  //   typedef unsigned int uint32;
  //
  // ===========================================================================
  cov_1racd7g41m().s[298]++;
  xdr.typedef("Uint32", xdr.uint());

  // === xdr source ============================================================
  //
  //   typedef int int32;
  //
  // ===========================================================================
  cov_1racd7g41m().s[299]++;
  xdr.typedef("Int32", xdr["int"]());

  // === xdr source ============================================================
  //
  //   typedef unsigned hyper uint64;
  //
  // ===========================================================================
  cov_1racd7g41m().s[300]++;
  xdr.typedef("Uint64", xdr.uhyper());

  // === xdr source ============================================================
  //
  //   typedef hyper int64;
  //
  // ===========================================================================
  cov_1racd7g41m().s[301]++;
  xdr.typedef("Int64", xdr.hyper());

  // === xdr source ============================================================
  //
  //   union ExtensionPoint switch (int v)
  //   {
  //   case 0:
  //       void;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[302]++;
  xdr.union("ExtensionPoint", {
    switchOn: xdr["int"](),
    switchName: "v",
    switches: [[0, xdr["void"]()]],
    arms: {}
  });

  // === xdr source ============================================================
  //
  //   enum CryptoKeyType
  //   {
  //       KEY_TYPE_ED25519 = 0,
  //       KEY_TYPE_PRE_AUTH_TX = 1,
  //       KEY_TYPE_HASH_X = 2,
  //       KEY_TYPE_ED25519_SIGNED_PAYLOAD = 3,
  //       // MUXED enum values for supported type are derived from the enum values
  //       // above by ORing them with 0x100
  //       KEY_TYPE_MUXED_ED25519 = 0x100
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[303]++;
  xdr["enum"]("CryptoKeyType", {
    keyTypeEd25519: 0,
    keyTypePreAuthTx: 1,
    keyTypeHashX: 2,
    keyTypeEd25519SignedPayload: 3,
    keyTypeMuxedEd25519: 256
  });

  // === xdr source ============================================================
  //
  //   enum PublicKeyType
  //   {
  //       PUBLIC_KEY_TYPE_ED25519 = KEY_TYPE_ED25519
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[304]++;
  xdr["enum"]("PublicKeyType", {
    publicKeyTypeEd25519: 0
  });

  // === xdr source ============================================================
  //
  //   enum SignerKeyType
  //   {
  //       SIGNER_KEY_TYPE_ED25519 = KEY_TYPE_ED25519,
  //       SIGNER_KEY_TYPE_PRE_AUTH_TX = KEY_TYPE_PRE_AUTH_TX,
  //       SIGNER_KEY_TYPE_HASH_X = KEY_TYPE_HASH_X,
  //       SIGNER_KEY_TYPE_ED25519_SIGNED_PAYLOAD = KEY_TYPE_ED25519_SIGNED_PAYLOAD
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[305]++;
  xdr["enum"]("SignerKeyType", {
    signerKeyTypeEd25519: 0,
    signerKeyTypePreAuthTx: 1,
    signerKeyTypeHashX: 2,
    signerKeyTypeEd25519SignedPayload: 3
  });

  // === xdr source ============================================================
  //
  //   union PublicKey switch (PublicKeyType type)
  //   {
  //   case PUBLIC_KEY_TYPE_ED25519:
  //       uint256 ed25519;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[306]++;
  xdr.union("PublicKey", {
    switchOn: xdr.lookup("PublicKeyType"),
    switchName: "type",
    switches: [["publicKeyTypeEd25519", "ed25519"]],
    arms: {
      ed25519: xdr.lookup("Uint256")
    }
  });

  // === xdr source ============================================================
  //
  //   struct
  //       {
  //           /* Public key that must sign the payload. */
  //           uint256 ed25519;
  //           /* Payload to be raw signed by ed25519. */
  //           opaque payload<64>;
  //       }
  //
  // ===========================================================================
  cov_1racd7g41m().s[307]++;
  xdr.struct("SignerKeyEd25519SignedPayload", [["ed25519", xdr.lookup("Uint256")], ["payload", xdr.varOpaque(64)]]);

  // === xdr source ============================================================
  //
  //   union SignerKey switch (SignerKeyType type)
  //   {
  //   case SIGNER_KEY_TYPE_ED25519:
  //       uint256 ed25519;
  //   case SIGNER_KEY_TYPE_PRE_AUTH_TX:
  //       /* SHA-256 Hash of TransactionSignaturePayload structure */
  //       uint256 preAuthTx;
  //   case SIGNER_KEY_TYPE_HASH_X:
  //       /* Hash of random 256 bit preimage X */
  //       uint256 hashX;
  //   case SIGNER_KEY_TYPE_ED25519_SIGNED_PAYLOAD:
  //       struct
  //       {
  //           /* Public key that must sign the payload. */
  //           uint256 ed25519;
  //           /* Payload to be raw signed by ed25519. */
  //           opaque payload<64>;
  //       } ed25519SignedPayload;
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[308]++;
  xdr.union("SignerKey", {
    switchOn: xdr.lookup("SignerKeyType"),
    switchName: "type",
    switches: [["signerKeyTypeEd25519", "ed25519"], ["signerKeyTypePreAuthTx", "preAuthTx"], ["signerKeyTypeHashX", "hashX"], ["signerKeyTypeEd25519SignedPayload", "ed25519SignedPayload"]],
    arms: {
      ed25519: xdr.lookup("Uint256"),
      preAuthTx: xdr.lookup("Uint256"),
      hashX: xdr.lookup("Uint256"),
      ed25519SignedPayload: xdr.lookup("SignerKeyEd25519SignedPayload")
    }
  });

  // === xdr source ============================================================
  //
  //   typedef opaque Signature<64>;
  //
  // ===========================================================================
  cov_1racd7g41m().s[309]++;
  xdr.typedef("Signature", xdr.varOpaque(64));

  // === xdr source ============================================================
  //
  //   typedef opaque SignatureHint[4];
  //
  // ===========================================================================
  cov_1racd7g41m().s[310]++;
  xdr.typedef("SignatureHint", xdr.opaque(4));

  // === xdr source ============================================================
  //
  //   typedef PublicKey NodeID;
  //
  // ===========================================================================
  cov_1racd7g41m().s[311]++;
  xdr.typedef("NodeId", xdr.lookup("PublicKey"));

  // === xdr source ============================================================
  //
  //   struct Curve25519Secret
  //   {
  //       opaque key[32];
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[312]++;
  xdr.struct("Curve25519Secret", [["key", xdr.opaque(32)]]);

  // === xdr source ============================================================
  //
  //   struct Curve25519Public
  //   {
  //       opaque key[32];
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[313]++;
  xdr.struct("Curve25519Public", [["key", xdr.opaque(32)]]);

  // === xdr source ============================================================
  //
  //   struct HmacSha256Key
  //   {
  //       opaque key[32];
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[314]++;
  xdr.struct("HmacSha256Key", [["key", xdr.opaque(32)]]);

  // === xdr source ============================================================
  //
  //   struct HmacSha256Mac
  //   {
  //       opaque mac[32];
  //   };
  //
  // ===========================================================================
  cov_1racd7g41m().s[315]++;
  xdr.struct("HmacSha256Mac", [["mac", xdr.opaque(32)]]);
}));
var _default = types;
exports["default"] = _default;