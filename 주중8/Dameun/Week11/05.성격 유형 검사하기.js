function solution(survey, choices) {
  let result = []
  for(let n=0; n<survey.length; n++){
    result.push(getPoint(survey[n],choices[n]))
  }
  // console.log(result);

  let type = ['R','T','C','F','J','M','A','N']
  let typePoint = new Array(8).fill(0)
  for(let n of result){
    typePoint[type.indexOf(n[0])] += Number(n[1])
  }
  let typeResult = ''
  for(let n= 0; n< typePoint.length; n += 2){
    // console.log(n);
    if(typePoint[n] >= typePoint[n+1]){
      typeResult += type[n]
    }else{
      typeResult += type[n+1]
    }
  }
  // console.log(typeResult);
  return typeResult;
}


function getPoint (el,point){
  let score = [3,2,1,0,1,2,3];
  if(point === 4){
    return 0
  }else if(point < 4){
    return el[0] + score[point-1]
  }else{
    return el[1] + score[point-1]
  } 
}

//5점
//20분

