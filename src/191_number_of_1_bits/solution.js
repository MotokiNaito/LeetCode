/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  return n.toString(2).split('').filter((digit) => digit === '1').length;
};