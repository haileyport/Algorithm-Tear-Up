function solution(arr) {
  let prev = arr[0];
  let answer = [prev]
  arr.forEach(el => {
    if (el !== prev) answer.push(el);
    prev = el;
  })
  return answer;
}