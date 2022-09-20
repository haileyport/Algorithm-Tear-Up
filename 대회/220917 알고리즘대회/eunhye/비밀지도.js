function solution(n, arr1, arr2) {
  arr1 = arr1.map((el) => el.toString(2).padStart(n, 0));
  arr2 = arr2.map((el) => el.toString(2).padStart(n, 0));

  const answer = [];

  for (i = 0; i < arr1.length; i++) {
    let word = "";
    for (j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        word += "#";
      } else {
        word += " ";
      }
    }
    answer.push(word);
  }

  return answer;
}
