/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  for (var i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
      return i;
    }
  }
  return -1;
};

const firstUniqChar = (s) => {
  var map = {};
  var i;
  for (i = 0; i < s.length; i++) {
    map[s.charAt(i)] = (map[s.charAt(i)] || 0) + 1;
  }
  for (i = 0; i < s.length; i++) {
    if (map[s.charAt(i)] === 1) {
      return i;
    }
  }
  return -1;
};