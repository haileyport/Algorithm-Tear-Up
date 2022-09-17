const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const testCases = input.slice(1);

testCases.map(function (testCase) {
  let hotelInfo = testCase.split(" ");
  let height = Number(hotelInfo[0]);
  let customer = Number(hotelInfo[2]); 

  let floor = customer % height;
  let room = Math.ceil(customer / height);

  if (floor === 0) { 
    floor = height;
  }

  if (room < 10) {
    room = '0' + room
  } 

  console.log(String(floor) + room)
})