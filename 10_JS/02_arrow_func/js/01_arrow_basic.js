// 1) 화살표 함수 (*****)
// 함수 기본
// 1) 매개변수 2개 전달받아서 더하기 함수
// (1) 함수 선언식
// 사용법 : function 함수명(){}
// function sum(a, b) {
//   return a + b;
// }
// // (2) 함수 표현식
// // 사용법 : let 함수명 = function(){};
// let sum = function (a, b) {
//   return a + b;
// };

// // (3) 화살표 함수 변경
// // 목적 : 코딩 단순화(함수 축약형)
let sum = (a, b) => a + b;
// 실행
console.log(sum(10, 20)); // 30

// // 2줄이상 함수
// function mySum(a, b) {
//   let result = a + b;
//   return result;
// }

// // 2) 함수 표현식
// let mySum = function (a, b) {
//   let result = a + b;
//   return result;
// };
// // 3) 화살표 함수
// let mySum = (a, b) => {
//   let result = a + b;
//   return result;
// };
// console.log(mySum(10, 20)); // 30