function solution(n) {
  let binary = n.toString(2);
  let numOfOnes = binary.split("").filter((el) => el === "1").length;

  while (true) {
    binary = (++n).toString(2);
    let newNumOfOnes = binary.split("").filter((el) => el === "1").length;
    if (numOfOnes === newNumOfOnes) {
      return n;
    }
  }

  return;
}
