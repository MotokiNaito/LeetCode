/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  const needleLengh = needle.length;

  if (needle === '' && haystack === '') {
    return 0
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, needleLengh) === needle) {
      return i;
    }
  }
  return -1;
};