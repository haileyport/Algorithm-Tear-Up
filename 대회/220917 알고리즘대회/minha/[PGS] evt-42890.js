function solution(relation) {
  var answer = 1; // 학번은 기본적으로 유일키이며 후보키

  //1가지 속성의 후보키 검사
  for (let i = 1; i < relation[0].length; i++) {
    if (isCandidateKey(relation, i)) answer += 1;
  }

  //전공, 학년 속성의 후보키 검사
  if (isMultiCandidateKey(relation, [1, 2])) answer += 1;

  return answer;
}
function isCandidateKey(arr, index) {
  let newArr = [];
  arr.forEach(el => {
    if (newArr.includes(el[index])) //중복 있으면 추가 X
      return false;
    else newArr.push(el[index])

  })
  console.log(newArr);
  // 원래 배열이랑 길이 다르면 return false
  return newArr.length === arr.length ? true : false;

}

//여러개의 후보키
function isMultiCandidateKey(arr, indexArr) {
  console.log("여러개의 후보키를 테스트합니다")
  let newArr = [];
  // indexArr = [1, 2]
  let multiArr = [];
  arr.forEach(el => {
    for (let i = 0; i < indexArr.length; i++) {
      //중복 있으면 추가 x
      if (newArr.includes(el[indexArr[i]]))
        return false;
      else multiArr.push(el[indexArr[i]])


    }
    newArr.push(multiArr);

  })
  console.log(newArr);
  // 원래 배열이랑 길이 다르면 return false
  return newArr.length === arr.length ? true : false;

}

// 3개 이상씩 테스트 할 때, 기존(2개를 사용한 후보키)에 있던거인지 확인해야함.
// ["이름", "전공"] 이 후보키가 있었다면 3개를 선택할 때 ["이름", "전공", "그외"]로 선택되면 안된다. 3개에 ["이름", "전공"]이 포함되지 않아야함. ["이름", "그외", "그외1"] 이런식으로 구성되어야 한다. <- 최소성 만족 부분
