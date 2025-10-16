// Nullish coalescing(널리쉬 코얼레싱) 연산자: ??
let user=null;
// if (user != null || user != undefined) {
//     console.log(user);
// } else {
//     console.log("사용자 없음");
// }

console.log(`${user?? "사용자 없음"}`);