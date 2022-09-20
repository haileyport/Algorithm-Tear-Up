function solution(s){
    //     var answer = true;
    
    //     // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //     console.log('Hello Javascript')
    
    //     return answer;
        let count = 0;
        
        s.split('').forEach(el => {
            if(el === 'p' || el === 'P'){
                count++;
            }else if (el === 'y' || el === "Y"){
                count--;
            }
        });
        
        return count ? false : true;
        
        
    }