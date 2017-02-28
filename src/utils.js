// @flow

import R from "ramda";

const modulo = (x: number, y: number): number => R.modulo(x, y);

const increase = (x: number): number => R.inc(x);

const decrement = (x: number): number => R.dec(x);

const mean = (numbers) => R.mean([...numbers]);

const median = (numbers) => R.median([...numbers]);

const negate = (x: number): number => R.negate(x);

const product = (numbers) => R.product([...numbers]);

const getRandom = (): number => Math.random();

const getRandomArbitrary = (min: number, max: number): number => Math.random() * (max - min) + min;

const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

const linearEquation = (a: number, b: number, x: number): Object => {
  return {
    y: R.multiply(a, x) + b,
    x,
  }
};

const percentage = (x, percent) => R.divide(R.multiply(x, percent), 100);

export {
  modulo,
  increase,
  decrement,
  mean,
  median,
  negate,
  product,
  getRandom,
  getRandomArbitrary,
  getRandomInt,
  linearEquation,
}
