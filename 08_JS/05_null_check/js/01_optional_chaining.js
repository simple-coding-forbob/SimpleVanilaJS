// 옵셔널 체이닝(optional chaining) 연산자 : ?.
// 아래 예)
// let num = null;
// // 미리 변수의 값에 null 이 있는지 체크했음
// if( num == null || num == undefined) {
//     console.log("num 변수에 null 이 있습니다.");
// }

let user = null; // 객체 , address 속성이 있는지 없는지 체크
console.log(`user 는 ${user?.address}`);