// function solution(n) {
//     let zeroCount = 0;
//     let oneCount = 0;
//     let num = `${n.toString(2)}`
//     let result;
//     for(let n of num){
//         if(n === '0') zeroCount++
//         else oneCount++
//     }
//     if(zeroCount === 0){
//         result = `10${'1'.repeat(oneCount-1)}`
//     }
//     else{

//     }
// }

// n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 이진수로 변환했을때 0이 있다 > 0이 있는 가장 마지막 자리를 1로 채운다 (단, 맨 마지막은 x)
//  그리고 1의 갯수만큼 뒤에부터 채운다
//만약에 0이 없다!
//그렇다면 두번째 자리에 0을 끼워넣은걸 반환
// 78(1001110)의 다음 큰 숫자는
// 83(1010011)입니다.

function solution(n) {
  let num = n.toString(2);
  let oneCount = num.match(/1/g).length;
  let result = n;

  while (true) {
    result++;
    let one = result.toString(2).match(/1/g).length;
    if (one === oneCount) {
      break;
    }
  }
  return result;
}

//3점
//그냥 만들어서 비교하는게 더 빠르다......ㅋㅋㅋㅋㅋ
