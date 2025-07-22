export function reset() {
  const home = document.querySelector("#home");
  const menu = document.querySelector("#menu");
  const about = document.querySelector("#about-us");
  const contact = document.querySelector("#contact-us");

  home.style.textDecoration = "none";
  menu.style.textDecoration = "none";
  about.style.textDecoration = "none";
  contact.style.textDecoration = "none";

  const container = document.querySelector("#container");
  container.innerHTML = "";
}
