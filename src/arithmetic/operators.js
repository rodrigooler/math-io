// @flow

import R from 'ramda';

const add = (x: number, y: number): number => R.add(x, y);

const sum = (numbers) => R.sum([...numbers]);

const subtract = (x: number, y: number): number => R.substract(x, y);

const multiply = (x: number, y: number): number => R.multiply(x, y);

const divide = (x: number, y: number): number => R.divide(x, y);

export {
  add,
  sum,
  subtract,
  multiply,
  divide,
}
