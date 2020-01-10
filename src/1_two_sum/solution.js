/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in hash) {
      return [hash[another], i];
    }

    hash[nums[i]] = i;
  }

  return null;
};