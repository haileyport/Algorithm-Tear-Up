function solution(new_id) {
  var answer = "";

  answer = new_id
    .toLowerCase() // 1단계
    .replace(/[^\w-.]/g, "") // 2단계
    .replace(/\.{2,}/g, ".") // 3단계
    .replace(/^\.|\.$/, "") // 4단계
    .replace(/^$/, "a") // 5단계
    .slice(0, 15) // 6단계
    .replace(/\.$/, ""); // 6단계

  // 7단계
  const length = answer.length;
  if (length < 3) {
    // answer += answer[length - 1].repeat(3 - length);
    answer = answer.padEnd(3, answer[length - 1]);
  }

  return answer;
}
