 
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  const dividendStr = dividend.toString();
  const initalDepth = Math.abs(divisor).toString().length

  const loop = function (curDividendIndx, curDividendDepth, remainder) {
    let curDividend 
    let result = 0;

    if (curDividendIndx < dividendStr.length) {
      curDividend = Number(`${remainder}${dividendStr.slice(curDividendIndx, curDividendIndx + curDividendDepth)}`);
    } else {
      return  ""
    }
    if (curDividend > divisor) {
      while (curDividend >= divisor) {
        result +=1
        curDividend -= divisor
      }
    }
    const previousResult = loop(curDividendIndx + curDividendDepth, 1, curDividend)
    return `${result}${previousResult}`
  }
  return Number(loop(0, initalDepth, ''))
};

// Testcases - Runing JEST ;)
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
