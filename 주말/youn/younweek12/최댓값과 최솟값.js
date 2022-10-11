function solution(s) {
    //최대 최소를 찾는데 음수도 포함
      //최댓값찾는 함수하나 최소찾는 함수하나 만들면 되지않남..?
      //우선 공백으로 분리되어잇으니 배열로 만들어준다
    //배열만들어준걸 각각 함수로 나타내본다?
      
      let newarr = s.split(" ")
     
    
    let minnum = Math.min(...newarr)
    let maxnum = Math.max(...newarr)
    
    let result = minnum + " "+ maxnum
    
    return result
  }