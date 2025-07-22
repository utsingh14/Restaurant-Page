import { reset } from "./reset";

export function renderContactUs() {
  reset();

  // contact us
  const contact = document.querySelector("#contact-us");
  contact.style.textDecoration = "underline";
}
