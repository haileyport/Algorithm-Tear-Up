function solution(cacheSize, cities) {
  let arr = Array(cacheSize).fill('');
	let runtime = 0
  for(let i = 0; i < cities.length; i++){
    let lookup = cities[i].toLowerCase()
    if(!arr.includes(lookup)){
      if(arr.length === cacheSize){
      	arr.unshift(lookup)  
        arr.pop()
        runtime += 5
        // console.log(arr)
      }
    }else{
      // 있다면???? 쿠쿠루삥뽕 
      // 앞으로 꺼내오고 뒤를 연결시킴
			let index = arr.indexOf(lookup);
      // console.log(arr)
      // console.log(lookup)
      // console.log(index)
      arr.splice(index,1)
      arr.unshift(lookup)
      runtime += 1
    }
  }
  // console.log(arr);
  console.log(runtime)
  return runtime;
}