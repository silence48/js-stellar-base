"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manageData = manageData;
var _isString = _interopRequireDefault(require("lodash/isString"));
var _xdr = _interopRequireDefault(require("../xdr"));
var _BrowserBuffer = _interopRequireDefault(require("../util/BrowserBuffer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * This operation adds data entry to the ledger.
 * @function
 * @alias Operation.manageData
 * @param {object} opts Options object
 * @param {string} opts.name - The name of the data entry.
 * @param {string|Buffer} opts.value - The value of the data entry.
 * @param {string} [opts.source] - The optional source account.
 * @returns {xdr.ManageDataOp} Manage Data operation
 */
function manageData(opts) {
  var attributes = {};
  if (!((0, _isString["default"])(opts.name) && opts.name.length <= 64)) {
    throw new Error('name must be a string, up to 64 characters');
  }
  attributes.dataName = opts.name;
  if (!(0, _isString["default"])(opts.value) && !_BrowserBuffer["default"].isBuffer(opts.value) && opts.value !== null) {
    throw new Error('value must be a string, BrowserBuffer or null');
  }
  if ((0, _isString["default"])(opts.value)) {
    attributes.dataValue = _BrowserBuffer["default"].from(opts.value);
  } else {
    attributes.dataValue = opts.value;
  }
  if (attributes.dataValue !== null && attributes.dataValue.length > 64) {
    throw new Error('value cannot be longer that 64 bytes');
  }
  var manageDataOp = new _xdr["default"].ManageDataOp(attributes);
  var opAttributes = {};
  opAttributes.body = _xdr["default"].OperationBody.manageData(manageDataOp);
  this.setSourceAccount(opAttributes, opts);
  return new _xdr["default"].Operation(opAttributes);
}