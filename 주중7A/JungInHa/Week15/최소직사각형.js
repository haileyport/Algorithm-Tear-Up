function solution(sizes) { 
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach(set => {
    if (set[0] < set[1]) set.reverse();

    if (set[0] > maxWidth) maxWidth = set[0];
    if (set[1] > maxHeight) maxHeight = set[1];
  })

  let answer = maxWidth * maxHeight;
  return answer;
}
