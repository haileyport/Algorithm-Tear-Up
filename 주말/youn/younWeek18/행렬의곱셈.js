function solution(arr1, arr2) {
  let answer = [];
  arr1.forEach((v) => answer.push(Array(arr2[0].length).fill(0)));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}
