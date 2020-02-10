const isSubsequence = function (s, t) {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[count] == t[i]) {
      count++;
    }
  }
  if (count == s.length) {
    return true;
  } else return false;
};