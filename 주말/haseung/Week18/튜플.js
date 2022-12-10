function solution(s) {
  const answer = [];
  // console.log(s.slice(2, s.length - 2).split("},{")) //[ '2', '2,1', '2,1,3', '2,1,3,4' ]
  // console.log(s.slice(2, s.length - 2).split("},{").map(str=>str.split(',').map(Number).)) //[ [ 2 ], [ 2, 1 ], [ 2, 1, 3 ], [ 2, 1, 3, 4 ] ]
  //   s.slice(2, s.length - 2)
  //   .split("},{")
  //   .map((str) => str.split(",").map(Number))
  //   .sort((a, b) => a.length - b.length)
  //   .flatMap((arr) => {
  //     arr.map((v) => {
  //       if (!answer.includes(v)) answer.push(v);
  //     });
  //   });
  // return answer;

  const splited = s.slice(2, s.length - 2).split("},{");
  const sortedArrayAfterSplit = splited
    .map((str) => str.split(",").map(Number))
    .sort((a, b) => a.length - b.length);

  sortedArrayAfterSplit.flatMap((arr) => {
    arr.map((value) => {
      if (!answer.includes(value)) answer.push(value);
    });
  });
  return answer;
}
