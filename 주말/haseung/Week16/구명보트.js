function solution(people, limit) {
  let answer = 0;
  const peopleArray = people.sort((a, b) => a - b);

  let start = 0;
  let end = peopleArray.length - 1;

  while (start <= end) {
    if (peopleArray[start] + peopleArray[end] <= limit) {
      start++;
      end--;
      answer++;
    } else {
      end--;
      answer++;
    }
  }
  return answer;
}
