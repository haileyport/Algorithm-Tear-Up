function solution(sizes) {
  let maxWidth = 0, maxHeight = 0;
  // 가로 세로 중 더 긴것을 가로, 작은것을 세로로 변경하고 max 찾기
  sizes.forEach(el => {
    if (el[0] < el[1]) [el[0], el[1]] = [el[1], el[0]];
    if (el[0] > maxWidth) maxWidth = el[0];
    if (el[1] > maxHeight) maxHeight = el[1];
  })

  return maxWidth * maxHeight;

}