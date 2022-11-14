function solution(N, stages) {
  let result = [];
  let failureRates = [];
  let challengerNum, failNum;

  for (let i = 1; i <= N; i++) {
    (challengerNum = 0), (failNum = 0);
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) challengerNum++;
      if (stages[j] === i) failNum++;
    }
    if (challengerNum === 0) failureRates.push(0);
    else failureRates.push(failNum / challengerNum);
  }

  let sortedRates = failureRates.slice().sort((a, b) => b - a);
  let maxIdx;

  for (let i = 0; i < sortedRates.length; i++) {
    maxIdx = failureRates.indexOf(sortedRates[i]);
    result.push(failureRates.indexOf(sortedRates[i]) + 1);
    failureRates[maxIdx] = -1;
  }

  return result;
}
