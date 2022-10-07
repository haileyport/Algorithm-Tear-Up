function solution(array, commands) {
  let answer = [];
  commands.forEach(el => {
    const [i, j, k] = [...el];
    let arr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(arr[k - 1])
  })
  return answer;
}