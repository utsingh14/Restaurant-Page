import "./home.css";
import { reset } from "./reset";

export function renderHome() {
  reset();
  const container = document.querySelector("#container");

  // home
  const home = document.querySelector("#home");
  home.style.textDecoration = "underline";

  // create tag line segment
  const tagLine = document.createElement("div");
  tagLine.id = "tag-line";
  container.appendChild(tagLine);

  const line = document.createElement("div");
  line.id = "line";
  line.innerHTML = `
        <h3>The Velvet Fork</h3>
        <p>Where Flavor Meets Elegance </p>
        <p> — Since 2008</p>
    `;
  tagLine.appendChild(line);

  // our services
  const services = document.createElement("div");
  services.id = "our-services";
  services.innerHTML = `
      <div class="grid-header">
        <h1>Our Services</h1>
      </div>
      <div class="dinning">
        <div class="dinning-icon large-icon"></div>
        <h2>Dinning</h2>
        </div>
      <div class="take-away">
        <div class="take-away-icon large-icon"></div>
        <h2>Take Away</h2>
      </div>
      <div class="delivery">
        <div class="delivery-icon large-icon"></div>
        <h2>Delivery</h2>
      </div>
  `;
  container.appendChild(services);

  // home photo collage
  const homeCollage = document.createElement("div");
  homeCollage.innerHTML = `
        <div id="home5"></div>
        <div id="home2"></div>
        <div id="home3"></div>
        <div id="home4"></div>
    `;
  homeCollage.id = "home-collage";
  container.appendChild(homeCollage);

  // testimonials
  const testimonials = document.createElement("div");
  testimonials.id = "testimonials";
  testimonials.innerHTML = `
  <h2>What Our Guests Say</h2>
  
  <blockquote>
    “From the first sip of wine to the final bite of dessert, every moment at The Velvet Fork is unforgettable.”
    <cite>– Rhea Kapoor</cite>
  </blockquote>

  <blockquote>
    “I celebrated my anniversary here, and it felt like a scene from a movie — cozy lighting, soft jazz, and food that touched the soul.”
    <cite>– Sameer Bhatt</cite>
  </blockquote>

  <blockquote>
    “The Velvet Fork has mastered the art of fine dining without pretension. It's now part of our weekly ritual.”
    <cite>– Aarav Mehta</cite>
  </blockquote>
`;
  container.appendChild(testimonials);
}
