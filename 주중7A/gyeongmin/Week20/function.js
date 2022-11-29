function solution(progresses, speeds) {
    var answer = [];
    //배포 일자 배열 만들기
    const distribute = progresses.map((progress, index) =>
    //남은 진도율 / 작업속도 (올림)
    Math.ceil((100 - progress) / speeds[index])
  );
    console.log(distribute) //[7, 3, 9]
    
  let functionCount = 1;
  let day = distribute[0];

  for (let i = 1; i < progresses.length; i++) {
      //만약에 배포날짜가 이전배포날짜보다 짧거나 같다면
    if (distribute[i] <= day) {
        //앞의 기능이 끝나야하므로 아직 대기
      functionCount++;
      //뒤의 배포날짜가 앞의 배포날짜보다 길면 앞의 기능은 배포되어도 되므로
    } else {
      day = distribute[i]; // 뒤의 배포날짜로 대체시키고
      answer.push(functionCount); // 오늘 배포시키는 기능들 push
      functionCount = 1; //다시 배포기능은 1로 리셋
    }
  }

  answer.push(functionCount);

  return answer;
}
