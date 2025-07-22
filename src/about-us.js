import { reset } from "./reset";

export function renderAboutUs() {
  reset();

  // about us
  const about = document.querySelector("#about-us");
  about.style.textDecoration = "underline";
}
