const titleToNumber = function (s) {

  let r = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    r += (26 ** (s.length - i - 1) * (s[i].charCodeAt(0) - 65 + 1));
  }
  return r;
};

const titleToNumber = function (s) {

  let r = 0;
  for (let i = 0; i < s.length; i++) {
    r = r * 26 + (s[i].charCodeAt(0) - 65 + 1);
  }
  return r;
};