// const inputs = Number(require("fs").readFileSync(0, "utf-8").toString().trim());
const inputs = 256;
const arr = [];

function constructor(nums) {
  const N = nums.toString().split("");
  return nums + N.reduce((acc, num) => (acc += Number(num)), 0);
}

for (let i = 1; i <= inputs; i++) {
  // 1부터 inputs까지 반복
  //   console.log(constructor(i));
  if (constructor(i) === inputs) {
    // 입력값과 자신의 합이 같다면
    arr.push(i);
  }
}
console.log(arr);

if (arr.length) {
  //arr.length가 0이 아니면
  console.log(Math.min.apply(null, arr)); //Math.min.apply(null, arr)를 실행하면 arr의 최소값을 출력한다.
} else {
  console.log(0);
}
