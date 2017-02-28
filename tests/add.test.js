import { add } from '../src/arithmetic/operators';

test('adds 1 + 2 to equals 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 10 + 30 to equals 40', () => {
  expect(add(10, 30)).toBe(40);
});

test('adds 1000 + 5000 to equals 6000', () => {
  expect(add(1000, 5000)).toBe(6000);
});

test('adds 9999999 + 9999999 to equals 19999998', () => {
  expect(add(9999999, 9999999)).toBe(19999998);
});

test('adds -10000 + -120000 to equals -130000', () => {
  expect(add(-10000, -120000)).toBe(-130000);
});

test('adds -10000 + 120000 to equals -110000', () => {
  expect(add(-10000, 120000)).toBe(110000);
});

test('adds -0 + 0 to equals 0', () => {
  expect(add(-0, 0)).toBe(0);
});
