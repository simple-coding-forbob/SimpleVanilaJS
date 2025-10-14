function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("서울 택배");  // 결과 보냄
    }, 1000);
  });
}

// async/await : 함수 앞에 async 키워드를 붙여서 이 함수 안에서 await 키워드를 사용 가능
// await : 프라미스 객체를 사용한 함수 앞에 붙이면 결과가 올때까지 기다림, 밑에 코드 실행되지 않음
// 목적: then() 함수 보다 가독성이 좋음
// 예) 프라미스 사용 함수: fetch(), axios(), ajax()
async function show() {
    const data= await getData();
    console.log(data);
    console.log("부산 택배");  // 위의 결과 기둘림
}

show();  // 함수 실행