var getConcatenation = function (nums) {
  // let result = nums.slice()
  // for(let i =0; i< nums.length; i++){
  //     result.push(nums[i])
  // }
  // return result
  return [...nums, ...nums];
};
