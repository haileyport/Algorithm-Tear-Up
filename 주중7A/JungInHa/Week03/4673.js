// 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. n을 d(n)의 생성자라고 한다.
// 생성자가 없는 숫자를 셀프 넘버라고 한다.
// 입력은 없다.

// 1~10000의 수 중에서 셀프넘버가 아닌 수를 배열에 저장해둔다.
let notSelfNum = []

for (let i = 1; i <= 10000; i++) {
  let nums = String(i).split('')
  let sum = 0;

  for (let j = 0; j < nums.length; j++) {
    sum += parseInt(nums[j]);
  }
  sum += i;
 
  if (!notSelfNum.includes(sum)) {
    notSelfNum.push(sum);
  }
}

// 1~10000의 수 중에서 notSelfNum 배열에 저장되어 있지 않은 수를 출력한다. 
for (let i = 1; i < 10000; i++) {
  if (!notSelfNum.includes(i)) {
    console.log(i);
  }
}