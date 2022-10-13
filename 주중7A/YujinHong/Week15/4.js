function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) absolutes[i] = -absolutes[i];
  }

  return absolutes.reduce((acc, cur) => acc + cur);
}
