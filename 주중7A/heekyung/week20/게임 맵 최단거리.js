function solution(maps) {
   const n = maps.length;
   const m = maps[0].length;

   let answer = -1;

   let visited = Array.from(Array(n), () => Array(m).fill(false));

   let queue = [[0, 0, 1]];

   let queueIndex = 0;

   const moveX = [-1, 0, 1, 0];
   const moveY = [0, 1, 0, -1];

   // 7. BFS 진행할 while 문
   while (queue.length > queueIndex) {
      const now = queue[queueIndex];
      queueIndex += 1;

      if (now[0] == n - 1 && now[1] == m - 1) {
         answer = now[2];
         break;
      }

      if (!visited[now[0]][now[1]]) {
         visit(now[0], now[1], now[2])
      }
   }

   function visit(x, y, count) {
      visited[x][y] = true;

      for (let i = 0; i < moveX.length; i++) {
         const movedX = x + moveX[i];
         const movedY = y + moveY[i];

         if (movedX >= 0 && movedX < n && movedY >= 0 && movedY < m && !visited[movedX][movedY] && maps[movedX][movedY] == 1) {
            queue.push([x + moveX[i], y + moveY[i], count + 1]);
         }
      }
   }

   return answer;
}