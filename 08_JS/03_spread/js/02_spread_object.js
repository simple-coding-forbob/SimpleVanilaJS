// 객체에서의 스프레드 연산자 사용
// TODO: 객체의 속성이 없으면 추가되고, 있으면 수정됨(**)
let a = {name: "철수"}
let b = {...a, age: 10};
console.log(b);

// 객체 속성 수정
let c = {...a, name: "영희"};
console.log(c);
