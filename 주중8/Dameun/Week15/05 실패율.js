function solution(N, stages) {
  let stagePass = Array(N).fill(0);
  let stageChallenge = Array(N).fill(0);
  let data = stages.sort((a, b) => a - b);
  function stageCheck(data) {
    if (data.length === 0) return;

    if (data[0] > N) {
      for (let n = 0; n < N; n++) {
        stagePass[n]++;
        stageChallenge[n]++;
      }
    } else {
      for (let n = 0; n < data[0]; n++) {
        stageChallenge[n]++;
      }
      for (let n = 0; n < data[0] - 1; n++) {
        stagePass[n]++;
      }
    }
    data.shift();
    stageCheck(data);
  }
  stageCheck(data);

  //   console.log(stageChallenge, stagePass);
  let failRate = [];
  for (let n = 0; n < stageChallenge.length; n++) {
    failRate.push([
      n + 1,
      Math.round(
        ((stageChallenge[n] - stagePass[n]) / stageChallenge[n]) * 100
      ) / 100,
    ]);
  }
  //   console.log(failRate);
  failRate = failRate.sort(function (a, b) {
    return b[1] - a[1];
  });
  let result = [];
  for (let n of failRate) {
    result.push(n[0]);
  }
  //   console.log(result);
  return result;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

//실패~
