// 1차 시도
function solution(word) {
    const strArr = ["A", "E", "I", "O", "U"];
    let count = 0;
    
    function repeat(str, arr){
        count++;
        
        if(arr.length <= 1) {
            return str + arr[0];
        }
        
        const copyArr = arr.slice(1);
        str += arr[0];
        
        return repeat(str, copyArr);
    }
    
    repeat("", strArr);
    
    return count;
}

// 참고한 풀이 https://jinn2u.tistory.com/9
function solution(word) {
  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const plus = [781, 156, 31, 6, 1];
    
  return word
    .split("")
    .reduce((acc, ch, idx) => acc + obj[ch] * plus[idx] + 1, 0);
}