let a = [10,20,30];
// for (let i = 0; i < a.length; i++) {
//   if (a[i] < 30) {
//     console.log(a[i]);
//   } 
// }

let b = a.filter((value)=> value < 30);
console.log(b)  // [10,20]