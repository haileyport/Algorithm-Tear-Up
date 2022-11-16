function solution(s) {
  const splitedString = s.split(" ");
  let [minValue, maxValue] = [0, 0];
  maxValue = Math.max(...splitedString);
  minValue = Math.min(...splitedString);
  return minValue + " " + maxValue;
}
