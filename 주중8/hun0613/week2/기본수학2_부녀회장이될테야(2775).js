// memory : 10448KB
// time : 188ms

// 0. 줄바꿈을 기준으로 input에 할당
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');


/*
    check.1 : 아파트 거주조건 -> a층의 b호에 살려면, 자신의 아래층 (a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와야한다.
    check.2 : 첫번째 줄 -> test case수
    check.3 : 각 케이스마다 첫번째는 정수 k층, 두번째는 정수 n호
    check.4 : 아파트는 0층, 1호부터 있다.
    check.5 : 0층의 i호에는 i가 산다.
    

    * 구상도 *

         1호  2호  3호  4호  5호  ...  14호
    14층 1    8    36
    ...  1   7    28
    4층  1    6    21
    3층  1    5    15
    2층  1    4    10
    1층  1    3    6
    0층  1    2    3    4    5  ...  14



    0. test케이스의 행을 가리킬 casePointer 2로 선언 (첫번째 케이스의 '호'수를 할당)
    0. check.2에 따라 테스트케이스의 개수를 알려주는 caseNum에 input[0]을 Number로 타입변환 후 할당
    0. 필요한 범위 내의 호수별 인원을 담을 배열 arrTenant 선언

    1. casePointer <= caseNum * 2 인 동안 (caseNum * 2는 입력값의 마지막 index)

    1-0. arrTenant에 들어갈 1차원배열 (층별 거주자 수 배열) arrTenantOnTheFloor 빈 배열로 초기화

    1-1. for문으로 i는 1부터 input[casePointer]까지 1씩 증가하면서
            1-1-1. arrTenantOnTheFloor에 i를 push (0층에 해당하는 배열완성)
    1-2. arrTenant에 arrTenantOnTheFloor를 push (0층 데이터 확보)

    1-3. 한 층이 끝났으므로 arrTenantOnTheFloor 빈 배열로 초기화

    1-4. for문으로 i은 1부터 input[casePointer-1]까지 1씩 증가하면서 (이제 1층부터 GO!)
        1-1-1. for j는 1부터 input[casePointer]까지 1씩 증가하면서 (1호부터 GO!)
            1-1-1. arrTenantOnTheFloor에 getTenantNumberFromFirst(i,j)의 리턴값 push (1층부터 알고싶은 층과 호까지 입주자 수 할당)

        1-1-2. arrTenant에 arrTenantOnTheFloor push (필요한 층,호수별 입주자 수 데이터 완성)

    1-5. console.log(arrTenant[input[casePointer-1]][input[casePointer]-1]) //(호수는 배열상 0부터 시작하니까 -1)

    1-6. 첫번째 케이스가 끝났으므로 새로운 케이스 시작을 위해 초기화 arrTenant = [];
    1-7. 2번째 케이스의 호를 가리켜야 하기 때문에 casePointer + 2



    2. 함수선언 
        층과 호를 파라미터로 받는 함수 getTenantNumberFromFirst 선언{
                for문으로 i는 1부터 호까지 
                totalNum = totalNum + arrTenant[층-1][i] (밑의 층에 1호부터 주어진 호수까지의 입주자 수의 합계를 알려줌)
        
        totalNum 리턴
    }
*/


// 0. test케이스의 행을 가리킬 casePointer 2로 선언 (첫번째 케이스의 '호'수를 할당)
// 0. check.2에 따라 테스트케이스의 개수를 알려주는 caseNum에 input[0]을 Number로 타입변환 후 할당
// 0. 필요한 범위 내의 호수별 인원을 담을 배열 arrTenant 선언

let casePointer = 2; // 호
let caseNum = Number(input[0]); // 테스트 개수
let arrTenant = [];
 

// 1. casePointer <= caseNum * 2 인 동안 (caseNum * 2는 입력값의 마지막 index)
while (casePointer <= caseNum * 2){
    // 1-0. arrTenant에 들어갈 1차원배열 (층별 거주자 수 배열) arrTenantOnTheFloor 빈 배열로 초기화
    let arrTenantOnTheFloor = [];

    // 1-1. for문으로 i는 1부터 input[casePointer]까지 1씩 증가하면서
    for(let i = 1; i <= Number(input[casePointer]); i++){
        // 1-1-1. arrTenantOnTheFloor에 i를 push (0층에 해당하는 배열완성)
        arrTenantOnTheFloor.push(i);
    }
    // 1-2. arrTenant에 arrTenantOnTheFloor를 push (0층 데이터 확보)
    arrTenant.push(arrTenantOnTheFloor);

    // 1-3. 
    arrTenantOnTheFloor = [];

    // 1-4. for문으로 i은 1부터 input[casePointer-1]까지 1씩 증가하면서 (이제 1층부터 GO!)
    for(let i = 1; i <= Number(input[casePointer - 1]); i++){
        // 1-4-1. for j는 1부터 input[casePointer]까지 1씩 증가하면서 (1호부터 GO!)
        for(let j = 1; j <= Number(input[casePointer]); j++){
            // 1-4-1-1. arrTenantOnTheFloor에 getTenantNumberFromFirst(i,j)의 리턴값 push (1층부터 알고싶은 층과 호까지 입주자 수 할당)
            arrTenantOnTheFloor.push(getTenantNumberFromFirst(i, j));
        }
        // 1-4-2. arrTenant에 arrTenantOnTheFloor push (필요한 층,호수별 입주자 수 데이터 완성)
        arrTenant.push(arrTenantOnTheFloor);
        // 1-4-2. 한 층이 끝났으므로 arrTenantOnTheFloor 빈 배열로 초기화
        arrTenantOnTheFloor = [];
    }
    // 1-5. console.log(arrTenant[input[casePointer-1]][input[casePointer]-1]) //(호수는 배열상 0부터 시작하니까 -1)
    console.log(arrTenant[Number(input[casePointer-1])][Number(input[casePointer])-1]);
    
    // 1-6. 첫번째 케이스가 끝났으므로 새로운 케이스 시작을 위해 초기화 arrTenant = [];
    arrTenant= [];
    // 1-7. 2번째 케이스의 호를 가리켜야 하기 때문에 casePointer + 2
    casePointer += 2;
}


// 2. 함수선언 
// 층과 호를 파라미터로 받는 함수 getTenantNumberFromFirst 선언{
    // for문으로 i는 1부터 호까지 
        // totalNum = totalNum + arrTenant[층-1][i] (밑의 층에 1호부터 주어진 호수까지의 입주자 수의 합계를 알려줌)

    // totalNum 리턴
// }

function getTenantNumberFromFirst(floor, room){
    let totalNum = 0;
    for(let j = 0; j < room; j++){
        totalNum = totalNum + arrTenant[floor-1][j];
    }

    return totalNum;
}

