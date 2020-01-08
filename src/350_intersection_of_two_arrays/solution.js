/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => {
  let hash = {};
  nums1.forEach(num => hash[num] ? hash[num] += 1 : hash[num] = 1);

  let result = [];
  nums2.forEach(num => {
    if (hash[num] > 0) {
      result.push(num);
      hash[num]--;
    }
  });

  return result;
};