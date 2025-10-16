// 연습문제 2) 객체 구조분해 할당 문제
// 아래와 같이 객체가 있습니다. 구조분해 할당 이용해서 출력하세요
// let dept = {dname : "Sales",loc : "부산"}
// console.log(dept.dname, dept.loc); // Sales 부산

let {dname, loc} = {dname : "Sales",loc : "부산"};
console.log(dname, loc); // Sales 부산