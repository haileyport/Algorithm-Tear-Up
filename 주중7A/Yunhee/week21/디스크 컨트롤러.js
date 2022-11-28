function solution(jobs) {
    let totalTime = 0; //  각 프로세스 처리 시간의 총합, 프로세스 처리 시간 = ( 현재시간 - 요청시점) + 소요시간
    let currentTime = 0; // 현재 시간
    let waitingRoom = []; // 우선순위 큐
  
    const scheduling = () => {
      // 만약 스케줄러(waitingRoom)가 비어있다면, false를 리턴해서 현재 시간을 변경하도록 한다.
      if (!waitingRoom.length) return false;
  
      // waitingRoom은 소요시간이 낮은 작업 순으로 정렬되어있다. 
      // 따라서 가장 첫번째 작업을 꺼내서 처리 시간을 totalTime에 더해주고, 현재 시간(currentTime)을 작업이 끝난 직후로 변경해준다.
      const [inputTime, workTime] = waitingRoom.shift();
      totalTime += currentTime - inputTime + workTime;
      currentTime += workTime;
      return true;
    };
  
    const insertJob = (job) => {
      waitingRoom.push(job);
      let i = waitingRoom.length - 1;
      waitingRoom.sort((a, b) => a[1] - b[1]);
    };
  
    jobs
      // jobs는 들어온 순서로 정렬되어있지 않기 때문에 우선적으로 요청 시점 순으로 정렬
      .sort((a, b) => a[0] - b[0])
      .forEach(([inputTime, workTime]) => {
        // 현재 시간보다 요청 시간이 더 나중이라면, 스케줄러에 있는 작업들 중에서 처리할 작업을 선별한 후 다시 현재 시간과 요청 시간을 비교한다. 
        while (currentTime < inputTime) {
          // 만약 스케줄러가 비어있다면 현재 시간을 해당 작업의 요청 시간으로 변경해준다.
          if (!scheduling()) {
            currentTime = inputTime;
          }
        }
        // 현재 시간과 비교하여 요청시간이 빠른 작업들을 모두 스케줄러에 넣는다.
        insertJob([inputTime, workTime]);
      });
  
    // jobs를 모두 순회 했어도 waitingRoom에 아직 처리를 기다리는 작업들이 남아있을 수 있기 때문에 모두 빌 때까지 스케줄링해준다.ㅉ
    while (waitingRoom.length > 0) {
      scheduling();
    }
  
    // 평균 시간을 얻기 위해 totalTime을 작업의 수로 나눠 준다.
    return parseInt(totalTime / jobs.length);
  }