import { reset } from "./reset";

export function renderContactUs() {
  reset();
  const container = document.querySelector("#container");

  // contact us
  const contact = document.querySelector("#contact-us");
  contact.style.textDecoration = "underline";
}
