function solution(s) {
  let regexp = /\d/
  let regexp2 = /[a-z]{3,5}/g
  let dict = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9 
  }
  let answer = s.split(regexp);
  // for(let i = 0; i < answer.length; i++){
  //   if(answer[i] !== ''){
  //     console.log(answer[i]);

  //   }
  // }
  let answer2 = s.split(regexp2);
  console.log(answer);
  console.log(answer2);
}
solution("2three45sixseven")

// const morse = '-.-. --- -.. .'
// // (1)
// const morseToChar = {
//   '-.-.': 'c',
//   '-..': 'd',
//   '.': 'e',
//   '---': 'o',
// }

// const morseArray = morse.split(' ') // (2) [ '-.-.', '---', '-..', '.' ]
// const textArray = morseArray.map((char) => morseToChar[char]) // (3) [ 'c', 'o', 'd', 'e' ]
// const text = textArray.join(") // (4)