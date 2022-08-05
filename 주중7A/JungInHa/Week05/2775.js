const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
input.shift(); 

for (let i = 0; i < input.length; i += 2) {
  let floor = Number(input[i]); 
  let room = Number(input[i + 1]);
  let people = new Array(floor + 1).fill(0).map(() => new Array(room)); 
  // people 배열은 각 층을 요소로 한다. (층수는 0층부터이므로 +1)
  // people 배열의 각 요소는 각 방을 요소로 갖는 배열이다. 

  // 0층: 1명 2명 3명 ...
  // 1층: 1명 3명 6명  10명... 
  // 2층: 1명 4명 10명 20명... 
  // 3층: 1명 5명 15명 35명...

  people.map((floor) => {
    floor[0] = 1; // 모든 층의 1호에는 1명이 산다
  })
  
  for (let i = 1; i <= room; i++) {
    people[0][i - 1] = i; // 0층의 i번째 방에는 i명이 산다 (index = i - 1)
  }
  
  for (let j = 1; j <= floor; j++) {
    for (let i = 2; i <= room; i++) { 
      people[j][i - 1] = people[j][i - 2] + people[j - 1][i - 1];
    } 
    // j층 i호(index = i - 1)에는 같은 층 직전 호의 사람 수 + 아래층 같은 호의 사람 수 만큼이 산다.
    // 203호 = 202호(= 101호 + 102호) + 103호
  }
  
  console.log(people[floor][room - 1]);
}