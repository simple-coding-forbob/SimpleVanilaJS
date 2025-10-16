// TODO: 2) 객체 구조분해할당(***)
// TODO: 객체의 속성값을 분해해서 다른 변수에 저장
// 예제 2)
// let candy = {name: "캔디",count: 5}
// console.log(candy.name, candy.count);

let {name, count} = {name: "캔디",count: 5};
console.log(name, count);

// 연습문제 2) 객체 구조분해 할당 문제
// 아래와 같이 객체가 있습니다. 구조분해 할당 이용해서 출력하세요
// let dept = {
//     no : 1,
//     dname : "Sales",
//     loc : "부산"
// }
// let {no, dname, loc} = dept;
// console.log(no, dname, loc); // 1 Sales 부산