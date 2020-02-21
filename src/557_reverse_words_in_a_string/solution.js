const reverseWords = function (s) {
  let array = s.split(" ")
  let result = ''
  for (let v of array) {
    result += v.split('').reverse().join("") + " "
  }
  return result.substring(0, result.length - 1)
};