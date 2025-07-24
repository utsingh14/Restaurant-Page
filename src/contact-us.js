import { reset } from "./reset";
import "./contact-us.css";

export function renderContactUs() {
  reset();

  const container = document.querySelector("#container");

  // highlight contact tab
  const contact = document.querySelector("#contact-us");
  contact.style.textDecoration = "underline";

  // contact container
  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";

  container.appendChild(contactContainer);

  // Contact container
  const contactSection = document.createElement("div");
  contactSection.classList.add("contact-section");

  contactSection.innerHTML = `
        <div class="grid-header">
          <h1>Contact Us</h1>
        </div>
        <div>
          <h3>Business Hours:</h3>
          <div class="icon timetable"></div>
          <ul>
            <li>Monday – Friday: 10:00 AM – 11:00 PM</li>
            <li>Saturday – Sunday: 11:00 AM – 12:00 Mid Night</li>
          </ul>
        </div>
        <div>
          <h3>Address:</h3>
          <div class="icon address"></div>
          <p>The Velvet Fork, 123 Fake Street, Fake City, Fake State,</p>
          <p>PinCode:- 12345</p>
        </div>
        <div class="map">
          <h3>Location:</h3>
          <iframe
            src="https://maps.google.com/maps?q=Fake%20Street,%20Fake%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="80%"
            style="border: 0"
          ></iframe>
          <p>here is google map or gps location</p>
        </div>
        <div>
          <h3>Phone:</h3>
          <div class="icon phone"></div>
          <p>+91 1234567890</p>
        </div>
        <div>
          <h3>Email:</h3>
          <div class="icon email"></div>
          <p>contact@thevelvetfork.com</p>
        </div>
        <div class="grid-footer">
          <h3>Follow Us:</h3>
          <ul>
            <li>
              <div class="small-icon instagram"></div>
              <a href="https://www.instagram.com" target="_blank">Instagram</a>
            </li>
            <li>
              <div class="small-icon facebook"></div>
              <a href="https://www.facebook.com" target="_blank">Facebook</a>
            </li>
            <li>
              <div class="small-icon twitter"></div>
              <a href="https://www.twitter.com" target="_blank">Twitter</a>
            </li>
          </ul>
        </div>
      `;

  contactContainer.appendChild(contactSection);
}
