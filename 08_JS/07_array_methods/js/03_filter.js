// filter 함수
// 함수의 조건이 참인 것만 뽑아서 몇개만 새로운 배열을 만듬
// 원본배열보다 개수가 작음
// 특징 : 리턴값 있음
// 예제 1) 아래 배열에서 3보다 큰수만 뽑아서 새로운 배열을
//         만드세요.
// 사용법) let 변수 = 배열변수.filter((value)=>{조건문;})
let a = [1,2,3];
// for(let i=0; i<a.length; i++){
//     if(a[i]>1) {
//         console.log(a[i]); // 2, 3
//     }
// }

let b = a.filter((value)=> value > 1 );
console.log(b);