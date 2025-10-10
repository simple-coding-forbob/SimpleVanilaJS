// 11_hover_show_hide.js
const subMenu = document.querySelector("#sub-menu");
const dropDown = document.querySelector("#drop-down");

function showMenu() {
  dropDown.style.display = "block"; // 마우스 올리면 보이기
}

function hideMenu() {
  dropDown.style.display = "none"; // 마우스 나가면 숨기기
}