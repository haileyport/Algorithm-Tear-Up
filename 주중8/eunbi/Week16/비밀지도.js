//[PGS] 비밀지도, +2

// 테스트 1 〉	통과 (0.25ms, 33.4MB)
// 테스트 2 〉	통과 (0.49ms, 33.5MB)
// 테스트 3 〉	통과 (0.15ms, 33.4MB)
// 테스트 4 〉	통과 (0.28ms, 33.5MB)
// 테스트 5 〉	통과 (0.26ms, 33.4MB)
// 테스트 6 〉	통과 (0.28ms, 33.5MB)
// 테스트 7 〉	통과 (0.24ms, 33.4MB)
// 테스트 8 〉	통과 (0.24ms, 33.4MB)

function solution(n, arr1, arr2) {
    
  const firstMap = (arr1.map(el => el.toString(2))).map(item => {
      if(item.length < n){
          let def = n - item.length; 
          return item = '0'.repeat(def) + item;   
      }
      else return item;
  });

  const secondMap = (arr2.map(el => el.toString(2))).map(item => {
      if(item.length < n){
        let def = n - item.length; 
        return item = '0'.repeat(def) + item;   
      }
      else return item;
  });

  const result = firstMap.map((el, i) => {
    if(el.length < n) {
      let def = n - el.length; 
      el = '0'.repeat(def) + el;
    }
    else if(secondMap[i].length < n){
      let def = n - secondMap[i].length;
      secondMap[i] = '0'.repeat(def) + secondMap[i];
    }
      
    let ele = '';
      
    [...el].map((item, idx) => {    
      if(item === '1' || secondMap[i][idx] === '1') ele += '#';
      else  ele += ' ';
    })
      
    return ele;
  })

   return result;
}

