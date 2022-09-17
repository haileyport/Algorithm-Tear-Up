function solution(arr1, arr2) {
  let answer = [];
  
  for (let i = 0; i < arr1.length; i++) {
      let arr = arr1[i].map((el, idx) => {
          return el + arr2[i][idx];
      })
      answer.push(arr)
  }

  return answer;
}