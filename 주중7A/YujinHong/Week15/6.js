function solution(sizes) {
  // 가로, 세로 오름차순 정렬
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
  }

  let width = [],
    height = [];
  for (let i = 0; i < sizes.length; i++) {
    width.push(sizes[i][0]);
    height.push(sizes[i][1]);
  }

  return Math.max(...width) * Math.max(...height);
}
