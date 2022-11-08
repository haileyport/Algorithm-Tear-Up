function solution(s){
    let loowerS = s.toLowerCase().split('')
    
    let pCount = loowerS.filter(e => 'p' === e).length
    let yCount = loowerS.filter(e => 'y' === e).length
    if(pCount === yCount){
        return true
    } return false
}

// function numPY(s){
//     //함수를 완성하세요
//       return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
//   }
  
  
//   // 아래는 테스트로 출력해 보기 위한 코드입니다.
//   console.log( numPY("pPoooyY") )
//   console.log( numPY("Pyy") )