import { sum } from '../src/arithmetic/operators';

test('Adds 1 + 2 + 3 to equals 6', () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test('Adds 10 + 30 + 50 to equals 6', () => {
  expect(sum([10, 30, 50])).toBe(90);
});
