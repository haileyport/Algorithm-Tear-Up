/*
왜 안될까?
+ Math. 쓰는 건 어떤 걸까
*/

/**
 * 
 * @param {*} sizes 
 * @returns 
 */
// function solution(sizes) {
//   let maxWidth = 0;
//   let maxHeight = 0;

//   // 저게 왜 되는거지
//   for (let card of sizes) {
//     let [width, height] = card;

//     maxWidth = width > maxWidth ? width : maxWidth;
//     maxHeight = height > maxHeight ? height : maxHeight;

//     // max인 걸 바꿔봐야 함.
//   }
//   let size = maxWidth * maxHeight;
//   return size;
// }

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  // 저게 왜 되는거지
  for (let card of sizes) {
    let [width, height] = card;

    if(width < height) {
      cur = width;
      height = width;
      width = height;
    }

    maxWidth = width > maxWidth ? width : maxWidth;
    maxHeight = height > maxHeight ? height : maxHeight;

    // max인 걸 바꿔봐야 함.
  }
  let size = maxWidth * maxHeight;
  return size;
}

sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];
console.log(solution(sizes));