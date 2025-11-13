// 1초 뒤에 실행되는 함수: 서울 택배를 콘솔 탭에 표시
function getData() {
  setTimeout(() => {
    console.log("서울 택배");
  }, 1000);
}

function show() {
  getData();
  console.log("부산 택배"); // 위 함수를 기둘리지 않고 바로 실행(비동기)
}

show();  // 함수 실행