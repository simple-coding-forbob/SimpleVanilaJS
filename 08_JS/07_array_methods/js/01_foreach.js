// foreach : 
// 용도 : 단순 출력용
// 특징 : 1) return 없음
//        2) break 문 못씀
// 자동으로 반복문을 실행함(배열의 끝까지)
// 사용법 : 배열변수.forEach((value)=>{반복문;})
let a = [1,2,3];
// for(let i=0; i<a.length; i++){
//     console.log(a[i], i);
// }

// 배열 메소드 : forEach((값,인덱스번호(생략가능))=>{})
a.forEach((val, i)=>console.log(val, i));