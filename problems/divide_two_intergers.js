
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  const absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  const dividendStrArr = absDividend.toString().split('');
  const initalDepth = absDivisor.toString().length;
  let finalNumber;

  const substractionLoop = (curDividendIndx, carryOver) => {
    let result = 0;
    let str = '';

    if (curDividendIndx < dividendStrArr.length) {
      let curDividend = Number(`${carryOver}${dividendStrArr[curDividendIndx]}`);
      while (curDividend >= absDivisor) {
        result += 1;
        curDividend -= absDivisor;
      }
      str = `${result}${substractionLoop(curDividendIndx + 1, curDividend)}`;
    }
    return str;
  };

  if (absDivisor > absDividend) {
    return 0;
  }

  finalNumber = Number(substractionLoop(initalDepth - 1, dividendStrArr.slice(0, initalDepth - 1).join('')));
  if ((divisor < 0 && dividend > 0) || (divisor > 0 && dividend < 0)) {
    finalNumber = 0 - finalNumber;
  }
  finalNumber = Math.min(finalNumber, 2147483647);
  finalNumber = Math.max(finalNumber, -2147483648);

  return finalNumber;
};

// Testcases - Runing JEST ;)
test('Return 1 if if you divide 1 by 1', () => {
  expect(divide(1, 1)).toBe(1);
});

test('Return 2147483647 if the divisor is lesser than 32 bit signed int', () => {
  expect(divide(-2147483648, -1)).toBe(2147483647);
});

test('Return 2147483648 if the divisor is greater than 32 bit signed int', () => {
  expect(divide(-2147483648, 1)).toBe(-2147483648);
});

test('Return -1 if if you divide -1 by 1', () => {
  expect(divide(-1, 1)).toBe(-1);
});

test('Return 0 if the divisor is larger than the dividend', () => {
  expect(divide(1, 3)).toBe(0);
});

test('Return the correct result for single ints in devidend and divisor', () => {
  expect(divide(9, 3)).toBe(3);
});

test('Return the correct result for first value int not divisible by divisor', () => {
  expect(divide(10, 3)).toBe(3);
});

test('Return the correct divisot', () => {
  expect(divide(70, 4)).toBe(17);
});

test('Return the correct divisor for thousands divided by tens', () => {
  expect(divide(6000, 40)).toBe(150);
});

test('Handle negative divisor', () => {
  expect(divide(7, -3)).toBe(-2);
});
