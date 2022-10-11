function solution(n, lost, reserve) {
  //lost와 reserve가 모두 정렬되어있다고 보장할 수 없기 때문에 우선 정렬 수행

  const sortedLosts = lost.sort((a, b) => a - b);
  const sortedReserves = reserve.sort((a, b) => a - b);

  let count = 0;
  let hasUniform = new Array(n).fill(1); //처음에 모두 하나씩 가지고 있다고 가정

  //잃어버린 학생에 대한 처리 - -1 해주기
  for (let sortedLost of sortedLosts) {
    hasUniform[sortedLost - 1]--;
  }

  //여벌이 있는 학생에 대한 처리 - +1 해주기
  for (let sortedReserve of sortedReserves) {
    hasUniform[sortedReserve - 1]++;
  }

  for (let i = 0; i < hasUniform.length; i++) {
    if (hasUniform[i] === 0) {
      if (hasUniform[i - 1] === 2) {
        hasUniform[i]++;
        hasUniform[i - 1]--;
      } else if (hasUniform[i + 1] === 2) {
        hasUniform[i]++;
        hasUniform[i + 1];
      }
    }
    if (hasUniform[i] >= 1) {
      count++;
    }
  }

  return count;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
