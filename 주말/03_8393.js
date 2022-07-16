// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력

// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력

// 1부터 n까지 합을 출력한다.

// 예제 입력 1

// 3

// 예제 출력 1

// 6

//입력받은 것을 처음부터 Number 형변환
const inputs = Number(require("fs").readFileSync(0, "utf-8"));

let sum = 0; //모두 더한 값을 처음에는 0으로 초기화

for (let i = 1; i <= inputs; i++) {
  sum += i;
}

console.log(sum);
