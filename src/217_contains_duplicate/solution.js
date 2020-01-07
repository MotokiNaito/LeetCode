/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  if (nums <= 1) return false;

  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i])) {
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }

  return false;
};