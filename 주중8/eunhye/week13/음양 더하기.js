function solution(absolutes, signs) {
  let answer = 0;

  for (i = 0; i < absolutes.length; i++) {
    const num = absolutes[i];
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }

  return answer;
}
