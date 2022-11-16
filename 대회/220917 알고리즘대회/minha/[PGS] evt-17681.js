function solution(n, arr1, arr2) {
  var answer = [];
  console.log(arr1, arr2)

  let arr1two = arr1.map(el => el.toString(2).padStart(n, '0'));
  let arr2two = arr2.map(el => el.toString(2).padStart(n, '0'));
  console.log(arr1two);
  console.log(arr2two);

  for (let i = 0; i < n; i++) {
    let curLine = "";
    for (let j = 0; j < n; j++) {
      console.log('arr1two[i][j]:', arr1two[i][j]);
      console.log('arr2two[i][j]:', arr2two[i][j]);

      curLine = (arr1two[i][j] == 1 || arr2two[i][j] == 1) ?
        curLine.concat("#") : curLine.concat(" ");
      console.log(curLine);
    }
    answer.push(curLine);

  }


  return answer;
}