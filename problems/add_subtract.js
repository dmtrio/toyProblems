
/**
 * @param {number} num
 * @return {number}
 */

function addSubtract(x) {
  var numbers = [];
  var inner = function(y) {
    numbers.push(y);
    return inner;
  }
  inner.valueOf = function() {
    return numbers.reduce((a, c, i, s) => {
      if (i % 2 == 1 || i == 0) {
        return a + c;
      } else {
        return a - c;
      }
    }, 0);
  };
  inner.view = () => numbers;
  return inner(x);
}

test('addSubtract adds then subtracts when call with 3 times', () => {
  expect(new addSubtract(1)(2)(3) + 0).toBe(0);
});

test('addSubtract adds then subtracts when call with 4 times', () => {
  expect(new addSubtract(1)(2)(3)(4) + 0).toBe(4);
});