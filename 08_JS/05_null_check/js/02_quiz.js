// Nullish coalescing(널리쉬 코얼레싱) 연산자: ??
let a=null;
// if (a != null || a != undefined) {
//     console.log(a);
// } else {
//     console.log("없음");
// }

console.log(`${a?? "없음"}`);