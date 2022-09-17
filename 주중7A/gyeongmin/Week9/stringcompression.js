function solution(s) {
    var answer = s.length;
    // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
    s = s + ' '
    for(let i = 1; i < s.length / 2; i++){
         // 정답으로 리턴할 문자열
        let result = '';
        //자를 문자열
        let before = s.substr(0,i)
        //동일한 문자열 개수
        let count = 1;
        // 인덱스
        let index = 0;
        for(let index = i; index <= s.length; index+=i){
            let after = s.substr(index, i);
            
            if(before === after){
                count++
            }else{
                result = (count === 1) ? result + before : result + `${count}${before}`;
                
                count = 1;
                before = after;
            }
        }

        result = (count === 1) ? result + before : result + `${count}${before}`;
        //console.log(result)
        answer = Math.min(answer, result.length-1);
    }
   
  return answer;
}
