/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const ans = [];
  const recurse = (str, avail, paren) => {
    if (avail === 0 && paren === 0) {
      ans.push(str);
    } else if (avail <= 0 || paren === n) {
      recurse(`${str})`, avail, paren - 1);
    } else if (avail > 0 && paren < n && paren >= 0) {
      recurse(`${str})`, avail, paren - 1);
      recurse(`${str}(`, avail - 1, paren + 1);
    }
  };
  recurse('(', n - 1, 1);
  return ans;
};

test('Generate parentheses with value 1', () => {
  const ans = ['()'];
  expect(generateParenthesis(1)).toEqual(ans);
});

test('Generate parentheses with value 2', () => {
  const ans = ['()()', '(())'];
  expect(generateParenthesis(2)).toEqual(ans);
});

test('Generate parentheses with value 3', () => {
  const ans = ['()()()', '()(())', '(())()', '(()())', '((()))'];
  expect(generateParenthesis(3)).toEqual(ans);
});

/* eslint max-len: ["error", { "code": 300 }] */
test('Generate parentheses with value 4', () => {
  const ans = ['()()()()', '()()(())', '()(())()', '()(()())', '()((()))', '(())()()', '(())(())', '(()())()', '(()()())', '(()(()))', '((()))()', '((())())', '((()()))', '(((())))'];
  expect(generateParenthesis(4)).toEqual(ans);
});
