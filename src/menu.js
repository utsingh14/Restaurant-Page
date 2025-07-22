import { reset } from "./reset";

export function renderMenu() {
  reset();

  // menu
  const menu = document.querySelector("#menu");
  menu.style.textDecoration = "underline";
}
