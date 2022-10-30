/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let ans = [];
  nums.forEach((item, key) => {
    ans[key] = nums[item];
  });
  return ans;
};
