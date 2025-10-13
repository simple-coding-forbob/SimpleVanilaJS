function ckClass() {
  const tit = document.querySelector("#tit");

  // 🔹 참고
  // 기존 클래스 유지하면서 새 클래스 추가
//   tit.classList.add("title2");

  // 기존 클래스 일부 교체
  tit.classList.replace("title", "title2");
}
