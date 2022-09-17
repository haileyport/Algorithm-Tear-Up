function solution(s) {
  let answer = 0;

  const data = ["zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine"];
  while (isNaN(Number(s))) {
    for (let i = 0; i < data.length; i++) {
      s = s.replace(data[i], i);
    }
  }
  answer = Number(s);
  return answer;

}