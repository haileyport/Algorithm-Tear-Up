function solution(land) {
  let scores = [land[0]];
  let len = land.length;
  for (let i = 1; i < len; i++) {
    scores.push(new Array(4).fill(0)); 
    let prev = scores[i - 1]; 
    scores[i][0] = land[i][0] + Math.max(prev[1], prev[2], prev[3]);
    scores[i][1] = land[i][1] + Math.max(prev[0], prev[2], prev[3]);
    scores[i][2] = land[i][2] + Math.max(prev[0], prev[1], prev[3]);
    scores[i][3] = land[i][3] + Math.max(prev[0], prev[1], prev[2]);
  }

  const answer = Math.max(...scores[len - 1]);
  return answer;
}
