/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  if (s === "") {
    return true;
  }

  const alphanum = s.toLowerCase().replace(/[\W]/g, "");

  let front = 0;
  let back = alphanum.length - 1;

  while (front < back) {
    const frontChar = alphanum[front];
    const backChar = alphanum[back];
    if (frontChar != backChar) {
      return false;
    }
    front++;
    back--;
  }

  return true;
};