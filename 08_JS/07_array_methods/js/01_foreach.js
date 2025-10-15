// 코딩 역사 : 구조적프로그래밍(절차적) : c언어
//          -> 객체지향프로그래밍 : js, java, c++ , c#, 파이썬
//          -> 함수형프로그래밍 : 클로저 등
// 함수형프로그래밍 (1억) vs 객체지향(5000만원) : 미국기준
// 객체지향 : 40명 -> 5명(함수형) : AT&T (통신사)
// foreach : 
// 용도 : 단순 출력용
// 특징 : 1) return 없음
//        2) break 문 못씀
// 자동으로 반복문을 실행함(배열의 끝까지)
// 사용법 : 배열변수.forEach((value)=>{반복문;})
// let myArr = [1,2,3,4,5];

// 향상된 for문
// for (const i of myArr) {
//     console.log(i);
// }
// 함수형 프로그래밍 함수 : forEach((값,인덱스번호(생략),배열(생략))=>{})
// myArr.forEach((value, index)=>{
//     console.log("value", value);
//     console.log("index", index);
// });

// 연습문제 1) forEach() 함수 사용해서 출력하기
// let arr = [0,1,2,3,4,5,6,7,8,9,10];

// arr.forEach((value) => console.log(value));

// 2) forEach() 함수 사용해서 출력하기
let strDummy = ["a", "b","c", "d", "e"]
strDummy.forEach((value) => console.log(value));
