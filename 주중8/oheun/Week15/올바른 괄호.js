/**
 *
 */

/**
 * 스택 이용해볼까
 * @param {*} s 괄호 문자열
 * @returns 올바르면 true 올바르지 않으면 false
 */
/**
 * 스택 이용해볼까
 * @param {*} s 괄호 문자열
 * @returns 올바르면 true 올바르지 않으면 false
 */
//  function solution(s) {
//     let open = [];

//   let answer = true;
//     s.split("").forEach((el) => {
//       // (이면 push하고 그 다음에 ) 나오면 pop하기
//       // 근데 pop했을 때 나올 수 있는 애가 없으면 false
//       if (el === "("){
//           open.push(el);
//       }else {
//           if(open.pop() === undefined){
//               answer = false;
//           };
//       }
//       console.log(open);
//     });
      
//     open.length < 1? answer = true: answer = false;
//     return open;
//   }

// forEach가 아니라 for문 썼더니 맞다고 뜸.
function solution(s) {
    let open = 0;

    for (let i = 0; i < s.length; i++) {
        open += s[i] === '('? 1:-1;
        if(open < 0) return false;
    }

    return open === 0 ? true :false;
}



let output = solution("())))");
console.log(output);
