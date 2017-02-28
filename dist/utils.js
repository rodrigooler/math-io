"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearEquation = exports.getRandomInt = exports.getRandomArbitrary = exports.getRandom = exports.product = exports.negate = exports.median = exports.mean = exports.decrement = exports.increase = exports.modulo = undefined;

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var modulo = function modulo(x, y) {
  return _ramda2.default.modulo(x, y);
};

var increase = function increase(x) {
  return _ramda2.default.inc(x);
};

var decrement = function decrement(x) {
  return _ramda2.default.dec(x);
};

var mean = function mean(numbers) {
  return _ramda2.default.mean([].concat(_toConsumableArray(numbers)));
};

var median = function median(numbers) {
  return _ramda2.default.median([].concat(_toConsumableArray(numbers)));
};

var negate = function negate(x) {
  return _ramda2.default.negate(x);
};

var product = function product(numbers) {
  return _ramda2.default.product([].concat(_toConsumableArray(numbers)));
};

var getRandom = function getRandom() {
  return Math.random();
};

var getRandomArbitrary = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var linearEquation = function linearEquation(a, b, x) {
  return {
    y: _ramda2.default.multiply(a, x) + b,
    x: x
  };
};

var percentage = function percentage(x, percent) {
  return _ramda2.default.divide(_ramda2.default.multiply(x, percent), 100);
};

exports.modulo = modulo;
exports.increase = increase;
exports.decrement = decrement;
exports.mean = mean;
exports.median = median;
exports.negate = negate;
exports.product = product;
exports.getRandom = getRandom;
exports.getRandomArbitrary = getRandomArbitrary;
exports.getRandomInt = getRandomInt;
exports.linearEquation = linearEquation;