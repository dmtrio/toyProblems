
/**
 * @param {number} start (optional: defaults to 0)
 * @return {function} With add, sub and val methods
 */

const createCounter = (start = 0) => {
  let numberOfTimes = start;
  const counter = () => {
    return counter;
  }
  counter.add = () => numberOfTimes += 1;
  counter.sub = () => numberOfTimes -= 1;
  counter.val = () => numberOfTimes;
  return counter;
}

test('createCounter returns a counting function', () => {
  const counter = createCounter();
  counter.add();
  expect(counter.val()).toBe(1);
});

test('createCounter method add counts the number of times called', () => {
  const counter = createCounter();
  counter.add();
  counter.add();
  counter.add();
  counter.add();
  expect(counter.val()).toBe(4);
});

test('createCounter adds and subtracts when the methods add and sub are called', () => {
  const counter = createCounter();
  counter.add();
  counter.add();
  counter.sub();
  expect(counter.val()).toBe(1);
});

test('createCounter can be set to start at a number other than 0', () => {
  const counter = createCounter(3);
  counter.sub();
  counter.sub();
  counter.sub();
  expect(counter.val()).toBe(0);
});
