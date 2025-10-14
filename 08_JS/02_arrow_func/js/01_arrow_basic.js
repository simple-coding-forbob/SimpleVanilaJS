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
// let sum = (a, b) => a + b;
// 실행
// TODO: console.log(sum(10, 20)); // 30

// // 1줄짜리 함수일 경우
// // 예제 1) : 함수 선언식 -> 화살표 함수로 바꾸세요
// // 1) 함수 선언식
// function double(n) {
//   return n * 2;
// }

// // 2) 함수 표현식
// let double = function (n) {
//   return n * 2;
// };
// // 3) 화살표 함수(축약형)
// let double = (n) => n * 2;
// 실행
// TODO: console.log(double(5)); // 10

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
// TODO: console.log(mySum(10, 20)); // 30

// TODO: 요약
// TODO: 1) 1줄짜리 : (x,y,...) => 실행문;
// TODO: 2) 2줄이상 : (x,y,...) => {실행문; return 실행문2;}

// // 연습문제
// // 1) 함수 -> 화살표 바꾸기
// let sum = function (x, y) {
//   return x + y;
// };

// let sum = (x, y) => x + y;
// TODO: console.log(sum(10, 20)); // 30

// // 2) 함수 -> 화살표 바꾸기
// // let pow = function(x) {
// //     return x * x;
// // }
// let pow = (x) => x * x;
// TODO: console.log(pow(5)); // 25

// // 3) 함수 -> 화살표
// // let sysHi = function() {
// //     console.log("안녕하세요");
// // }

// let sysHi = () => console.log("안녕하세요");
// TODO: sysHi(); // 안녕하세요

// // 4) 함수 -> 화살표
// // function hello(name) {
// //     console.log('Hello, ' + name + '!');
// // }
// let hello = (name) => console.log("Hello, " + name + "!");
// TODO: hello("홍길동"); // Hello, 홍길동!