function solution(nums) {
  

    let result = [...new Set(nums)]
     let mix = nums.length/2
      
      return result.length > mix ? mix : result.length
  }