function solution(n, arr1, arr2) {
    var answer = [];
    //한변의 길이가 n
    //벽('#'): 1, 공백(''): 0
    //둘다 공백이어야 공백
  //10진수 arr를 2진수 arr로 변환
  function parse(arr){
    for(let i=0; i < arr.length; i++){
  //2진수로 변환시킨걸 arr.length 만큼의 길이를 0으로 채워줘
  	arr[i] = arr[i].toString(2).padStart(arr.length, '0');
  	}
    return arr;
  }
  //arr1, arr2를 더해서 sumArr에 넣기.
  let sumArr = [];
  for(let i = 0; i < n; i++){
	 sumArr.push(String(Number(parse(arr1)[i]) + Number(parse(arr2)[i])).padStart(n, '0'))
  }
  //비밀지도라인들을 arr로 만들었다가 join시키고 answer로 하나씩 넣기
  for(let i = 0; i < n; i++){
    let secretArr = [];
    for(j = 0; j < n; j++){
      (sumArr[i][j] >= '1') ? secretArr.push('#') : secretArr.push(' ')
    }
    answer.push(secretArr.join(''))
  }
  
    return answer;
}
