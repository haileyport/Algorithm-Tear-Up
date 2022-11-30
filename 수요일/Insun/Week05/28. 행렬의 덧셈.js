function solution(arr1, arr2) {
  //arr1[0][0]과 arr2[0][0]을 더해야한다
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
