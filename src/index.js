import "./style.css";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderAboutUs } from "./about-us";
import { renderContactUs } from "./contact-us";

const home = document.querySelector("#home");
const logo = document.querySelector("#logo");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about-us");
const contact = document.querySelector("#contact-us");

home.addEventListener("click", () => {
  renderHome();
});

logo.addEventListener("click", () => {
  renderHome();
});

menu.addEventListener("click", () => {
  renderMenu();
});

about.addEventListener("click", () => {
  renderAboutUs();
});

contact.addEventListener("click", () => {
  renderContactUs();
});

renderHome();
