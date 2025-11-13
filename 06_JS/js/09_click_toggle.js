function toggleMenu() {
  const menu = document.querySelector("#menu");

  // 현재 display 상태 확인
  if (menu.style.display === "none") {
    menu.style.display = "block"; // 보이기
  } else {
    menu.style.display = "none"; // 숨기기
  }
}
