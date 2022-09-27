//10점

function solution(s) {
  let answer = "";
  let isFirst = false;
  answer = s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((el, idx) => {
          if (idx === 0 && typeof el === "number") {
            isFirst = true;
            return;
          } else if (idx === 0) {
            isFirst = true;
            return el.toUpperCase();
          }
          if (isFirst) {
            return el.toLowerCase();
          }
        })
        .join("")
    )
    .join(" ");
  return answer;
}
