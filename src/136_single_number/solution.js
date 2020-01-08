/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let hash = {};
  nums.forEach(num => {
    if (hash.hasOwnProperty(num)) {
      hash[num] += 1;
    } else {
      hash[num] = 1;
    }
  });

  for (let key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }

};