import { reset } from "./reset";

export function renderMenu() {
  reset();
  const container = document.querySelector("#container");

  // menu
  const menu = document.querySelector("#menu");
  menu.style.textDecoration = "underline";
}
