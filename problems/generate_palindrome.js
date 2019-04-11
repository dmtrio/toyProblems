// You have two strings,  and . Find a string, , such that:

//  can be expressed as  where  is a non-empty substring of  and  is a non-empty substring of .
//  is a palindromic string.
// The length of  is as long as possible.
// For each of the  pairs of strings ( and ) received as input, find and print string  on a new line. If you're able to form more than one valid string , print whichever one comes first alphabetically. If there is no valid answer, print  instead.

// Input Format

// The first line contains a single integer, , denoting the number of queries. The subsequent lines describe each query over two lines:

// The first line contains a single string denoting .
// The second line contains a single string denoting .
// Constraints

//  and  contain only lowercase English letters.
// Sum of |a| over all queries does not exceed 
// Sum of |b| over all queries does not exceed 
// Output Format

// For each pair of strings ( and ), find some  satisfying the conditions above and print it on a new line. If there is no such string, print  instead.

// Sample Input

// 3
// bac
// bac
// abc
// def
// jdfh
// fds
// Sample Output

// aba
// -1
// dfhfd
// Explanation

// We perform the following three queries:

// Concatenate  with  to create .
// We're given  and ; because both strings are composed of unique characters, we cannot use them to form a palindromic string. Thus, we print .
// Concatenate  with  to create . Note that we chose these particular substrings because the length of string  must be maximal.



function buildPalindrome(a, b) {
  // compare the first string char by char to the second string char by char

  // iterate through each char of first string
    // compare current char to each char of second string starting from the end
      // if there's a match attempt palindrome assembly
      // compare char right of cur char in first string to char left of cur char in second string
      // if matches are successful and we run out of char to compare log as palindrome


  // iterate through each char of first string
    // compare current char to each char of second string starting from the end
      // if there's a match attempt palindrome assembly
      // combine both strings from using matches as start/end points  ex: ('dfebhbe' + 'xfd') ('ac' + 'ba' ) ('dfh' + 'fd')
      // compare characters starting from the center (if odd length skip middle) (dfebhbexfd)
  
  let short, long

  if (a.length > b.length ) {
    long = a;
    short = b;
  } else {
    long = b;
    short = a;
  }

  findFragment(short.reverse(), long, short.length);

}

function findFragment(fragment, search, fLength) {
  // const times = fragment.length - fLength + 1;
  // while (times > 0) {
  const match = search.indexOf(fragment);
  while (match > -1) {
    if (match) {

    } 
    match = search.indexOf(fragment, match);
  }

}

test('Return aba as the longest palindrome from bac, bac', () => {
  expect(buildPalindrome('bac', 'bac')).toBe('aba');
  'cab'
});

test('Return -1 (not found) as the longest palindrome from abc, def', () => {
  expect(buildPalindrome('abc', 'def')).toBe(-1);
});

test('Return aba as the longest palindrome from jdfh, fds', () => {
  expect(buildPalindrome('jdfh', 'fds')).toBe('dfhfd');
  'sdf'
});

test('Return dfebhbefd as the longest palindrome from jdfebhbe, fds', () => {
  expect(buildPalindrome('jdfebhbe', 'fds')).toBe('dfebhbefd');
  'sdf'
});

test('Return dfebhbefd as the longest palindrome from jdfebhbe, fds', () => {
  expect(buildPalindrome('jdfebhbe', 'xfds')).toBe('dfebhbefd');
  'sdfx'
});

test('Return dfeefd as the longest palindrome from jdfex, xefds', () => {
  expect(buildPalindrome('jdfex', 'xefds')).toBe('dfeefd');
  'sdfex'
});

test('Return dfebhbefd as the longest palindrome from xfds, jdfebhbe', () => {
  expect(buildPalindrome('xfds', 'jdfebhbe')).toBe('dfebhbefd');
  'ebhbefdj'
});

test('Return abcdefedcba as the longest palindrome from abcabcdef, edcba', () => {
  expect(buildPalindrome('abcabcdef', 'edcba')).toBe('abcdefedcba');
  'ebhbefdj'
});