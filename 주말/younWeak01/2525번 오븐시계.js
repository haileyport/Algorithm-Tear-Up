let fs = require('fs');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let h = parseInt(input[0].split(' ')[0]);
let m = parseInt(input[0].split(' ')[1]);
let mplus = parseInt(input[1]);

// 분 합친시간이 60이하면 h는 그대로 m은 mplus더한값
//분합친시간이 60이상 일경우  h는 1더해주고 m은 m과 mplus더한값빼기 60인데
//시간을 ㅡm+mplus더한값에서 /60을 나눈 몫 n그중에서도 float사용?
if( 1440 >=m + mplus && m + mplus >= 60){ //17 40 80 /23 48 25
   
    h = h + Math.floor((m+mplus)/60);//73 /60 1 -->24
    m =(m + mplus) - (Math.floor((m+mplus)/60)*60);//73-1*60=13
    
           if( h >= 24){
        h = h- 24 ;
        }
    }
     else if(m + mplus < 60 ){ 
     m = m + mplus;
    
    }


console.log(`${h} ${m}`);




