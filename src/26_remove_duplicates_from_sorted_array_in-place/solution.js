/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let slow = 0;
  nums.forEach(num => {
    if (nums[slow] !== num) {
      nums[++slow] = num;
    }
  });
  return slow + 1;
};