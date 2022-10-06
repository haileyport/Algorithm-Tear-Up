// function solution(participant, completion) {
//     // var answer = '';
//     //     for(let i of participant){
//     //         if( completion.indexOf(i) === -1) {
//     //             answer += i

//     //         } else {
//     //            completion = completion.filter(el => el !== i)
//     //         }
//     //     }
//     //     return answer;

//     participant = participant.sort()
//     completion = completion.sort()
//     for (let a = 0; a < participant.length; a++) {
//         if (participant[a] !== completion[a]) {
//             return participant[a]
//         }
//     }
//     return participant;
// }

function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b)=>b-a);
    
    for(var i=0, j=people.length-1 ; i<=j; i++,answer++)
        if(people[i]+people[j] <= limit) j--;
    
    return answer;
}

