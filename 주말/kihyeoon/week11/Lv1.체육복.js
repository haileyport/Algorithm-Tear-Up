// function solution(n, lost, reserve) {
//   let newLost = lost;

//   for (let i = 0; i < lost.length; i++) {
//     if (reserve.indexOf(lost[i]) !== -1) {
//       newLost = newLost.filter((el) => el !== lost[i]);
//       reserve = reserve.filter((el) => el !== lost[i]);
//       continue;
//     }
//     if (reserve.indexOf(lost[i] - 1) !== -1) {
//       newLost = newLost.filter((el) => el !== lost[i]);
//       reserve = reserve.filter((el) => el !== lost[i] - 1);
//       continue;
//     }
//     if (reserve.indexOf(lost[i] + 1) !== -1) {
//       newLost = newLost.filter((el) => el !== lost[i]);
//       reserve = reserve.filter((el) => el !== lost[i] + 1);
//     }
//   }
//   return n - newLost.length;
//   // return newLost;
// }

function solution(n, lost, reserve) {
  let answer = 0;
  let studentClothes = new Array(n).fill(1);
  for (const student of reserve) studentClothes[student - 1] += 1;
  for (const student of lost) studentClothes[student - 1] -= 1;
  for (let i = 0; i < n; i++) {
    if (studentClothes[i] === 0) {
      if (studentClothes[i - 1] === 2 || studentClothes[i + 1] === 2) {
        if (studentClothes[i - 1] === 2) {
          studentClothes[i - 1] -= 1;
          studentClothes[i] += 1;
        } else {
          studentClothes[i + 1] -= 1;
          studentClothes[i] += 1;
        }
      }
    }
  }
  for (const student of studentClothes) {
    answer += student > 0 ? 1 : 0;
  }
  return answer;
}

solution(5, [2, 4], [1, 3, 5]);
