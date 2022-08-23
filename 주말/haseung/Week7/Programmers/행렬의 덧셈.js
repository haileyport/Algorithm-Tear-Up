function solution(arr1, arr2) {
  return arr1.map((arr, index) => arr.map((arrs, j) => arrs + arr2[index][j]));
}
