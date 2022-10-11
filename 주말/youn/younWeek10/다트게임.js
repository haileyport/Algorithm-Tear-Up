
let dartResult = "1D2S#10S"
//1D2S#10S
function solution(dartResult) {
  let num =0;
    let answer = [];
    let changenum = 0
    
    for(let i =0; i<dartResult.length; i++){
        if(dartResult[i]>=0 && dartResult[i]<= 9){
            if(dartResult[i]== 1 && dartResult[i+1] == 0){
                changenum = 10;
              i++;
            }else{
                changenum = dartResult[i];
              
            }
          console.log(changenum)
        }else if(dartResult[i]=== "S"){
            answer.push(changenum)
        }else if(dartResult[i]==="D"){
            answer.push(Math.pow(changenum ,2))
        }else if(dartResult[i]==="T"){
            answer.push(Math.pow(changenum,3))
        }else if(dartResult[i]==="*"){
             answer[answer.length-1]*=2;
            answer[answer.length-2]*=2;
        }else if(dartResult[i]==="#"){
           answer[answer.length-1]*=-1;
        }
    }
    console.log(answer)
    for(let i=0; i<answer.length; i++){
        num += Number(answer[i])
    }
    return num
}


