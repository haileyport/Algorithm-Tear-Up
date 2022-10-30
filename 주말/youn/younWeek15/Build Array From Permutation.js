var buildArray = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let k = nums[i];

    result.push(nums[k]);
  }
  return result;
};
