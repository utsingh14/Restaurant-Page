import "./home.css";
import { reset } from "./reset";

export function renderHome() {
  reset();

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

  // our story
  const ourStory = document.createElement("div");
  ourStory.id = "our-story";
  ourStory.innerHTML = `
        <h1>The Velvet Fork – Brand Story</h1>

        <p>Since 2008, <strong>The Velvet Fork</strong> has stood as a tribute to timeless dining — where culinary artistry, warm ambiance, and meaningful moments intertwine. Born from a vision to create not just meals but experiences, The Velvet Fork began as a quiet corner in the city and has grown into a beloved destination for those who appreciate the finer things in life.</p>

        <p>Our name reflects our philosophy: “Velvet” for comfort, luxury, and depth; “Fork” for simplicity, nourishment, and tradition. Together, they represent our commitment to balance — between innovation and heritage, minimalism and richness, elegance and warmth.</p>

        <p>Inside our doors, you’ll find interiors inspired by modern European lounges and classic bistros — dark wood tones, soft lighting, matte gold details, and seating that invites you to stay a little longer. Every corner is designed with intention, so that your experience feels intimate, immersive, and above all, memorable.</p>

        <p>At the heart of our kitchen is a team that believes cooking is an act of love. Our chefs source the freshest seasonal ingredients and approach every dish with precision and passion. From hand-rolled pastas to smoked cuts and slow-roasted vegetables, each plate is a narrative — rooted in flavor, elevated with technique.</p>

        <p>But it’s not just about what’s on the table. It’s about the stories shared across it. Over the years, we’ve hosted first dates, anniversaries, business deals, family reunions, and solo escapes — each adding a new layer to our story.</p>

        <p>We invite you to dine with us and discover what makes The Velvet Fork more than just a restaurant. Since 2008, we’ve been serving not only meals but memories — and yours might just be the next chapter in our journey.</p>

        <p><em>Welcome to The Velvet Fork. Where flavor meets elegance.</em></p>
    `;
  container.appendChild(ourStory);

  // home collage
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
