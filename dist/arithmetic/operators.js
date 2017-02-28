'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divide = exports.multiply = exports.subtract = exports.sum = exports.add = undefined;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var add = function add(x, y) {
  return _ramda2.default.add(x, y);
};

var sum = function sum(numbers) {
  return _ramda2.default.sum([].concat(_toConsumableArray(numbers)));
};

var subtract = function subtract(x, y) {
  return _ramda2.default.substract(x, y);
};

var multiply = function multiply(x, y) {
  return _ramda2.default.multiply(x, y);
};

var divide = function divide(x, y) {
  return _ramda2.default.divide(x, y);
};

exports.add = add;
exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;