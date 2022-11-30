function solution(arr1, arr2) {
  //arr1[0][0]과 arr2[0][0]을 더해야한다
  // for(let i = 0; i < arr1.length; i++) {
  //     for(let j = 0; j < arr1[i].length; j++) {
  //          arr1[i][j] = arr1[i][j] + arr2[i][j]
  //     }
  //  }
  //  return arr1
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
