function solution(people, limit) {
  let sortpe = people.sort((a, b) => a - b); //[50 50 70 80]
  let count = 0;
  let i = 0;
  let j = sortpe.length - 1;
  while (i < j) {
    if (people[i] + people[j] <= limit) {
      count++;
      i++;
      j--;
    } else {
      count++;

      j--;
    }
    if (i == j) count++;
  }
  return count;
}
