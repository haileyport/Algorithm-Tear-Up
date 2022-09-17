// 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.

// 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.

// 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

// 첫 번째 줄에 Test case의 수 T가 주어진다. 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다

//각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

// 예제 입력 1
// 2
// 1
// 3
// 2
// 3
// 예제 출력 1
// 6
// 10

// const inputs = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const inputs = [2, 1, 3, 2, 3];

const T = Number(inputs.shift());

for (let i = 0; i < T; i++) {
  const k = inputs.shift();
  const n = inputs.shift();

  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[k][n]);
}
