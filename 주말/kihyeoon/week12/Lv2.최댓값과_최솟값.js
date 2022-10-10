function solution(s) {
  const arr = s.split(" ").sort((a, b) => a - b);
  return arr[0].concat(" ", arr[arr.length - 1]);
}

function solution1(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}

solution("-1 -2 -3 -4");
