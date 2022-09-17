function solution(n, arr1, arr2) {
  //n인 정사각형 배열
  //암호화된 배열은 지도 각 가로줄에서 벽 부분(#)은 1, 공백 부분(' ')은 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열
  // 01001 + 11110 = 11111 이런 방식
  // 즉, 벽과 벽을 더해도 그냥 벽이 나오는 형태

  //배열에 들어있는 각각의 숫자들을 이진수로 변환해야 할듯
  //이진법 연산....
  let answer = [];
  for (let i = 0; i < n; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2);
    let newArray = [];
    for (let j = binary.length - n; j < binary.length; j++) {
      binary[j] === "1" ? newArray.push("#") : newArray.push(" ");
    }
    answer.push(newArray.join(""));
  }
  return answer;
}
