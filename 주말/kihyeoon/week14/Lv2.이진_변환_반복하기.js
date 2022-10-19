solution("110010101001");

function solution(s) {
  let count = 0;
  let zero = 0;

  const trans = (str) => {
    zero += str.split("").filter((el) => el === "0").length;
    return Number(
      str
        .split("")
        .filter((el) => el !== "0")
        .join("").length
    ).toString(2);
  };

  while (s !== "1") {
    s = trans(s);
    count++;
  }
  return [count, zero];
}

function solution2(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
