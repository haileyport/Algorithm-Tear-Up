function solution(progresses, speeds) {
   var answer = [];
   let count = 0
   let count2 = 0
   for (let i = 0; i <= progresses.length; i++) {
      if (progresses[i] + (speeds[i] * count) >= 100) {

         count2++
         continue;
      } else {
         answer.push(count2)
         count2 = 0
         count = 0
      }
      while (progresses[i] < 100) {
         progresses[i] += speeds[i]
         count++
      }
      if (progresses[i] >= 100) {
         count2++

      }
   }

   answer.shift()
   return answer
}
