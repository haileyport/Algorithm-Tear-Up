function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let rt = people.length - 1;
  let lt = 0;
  while (lt < rt) {
    if (people[lt] + people[rt] > limit) rt--;
    else {
      rt--;
      lt++;
    }
    answer++;
  }
  if (lt === rt) answer++;
  return answer;
}