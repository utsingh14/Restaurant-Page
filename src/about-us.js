import { reset } from "./reset";
import "./about-us.css";

export function renderAboutUs() {
  reset();
  const container = document.querySelector("#container");

  // about us
  const about = document.querySelector("#about-us");
  about.style.textDecoration = "underline";

  // our brand story
  const story = document.createElement("div");
  story.id = "story";
  story.innerHTML = `
        <h1>The Velvet Fork – Brand Story</h1>

        <p>Since 2008, <strong>The Velvet Fork</strong> has stood as a tribute to timeless dining — where culinary artistry, warm ambiance, and meaningful moments intertwine. Born from a vision to create not just meals but experiences, The Velvet Fork began as a quiet corner in the city and has grown into a beloved destination for those who appreciate the finer things in life.</p>

        <p>Our name reflects our philosophy: “Velvet” for comfort, luxury, and depth; “Fork” for simplicity, nourishment, and tradition. Together, they represent our commitment to balance — between innovation and heritage, minimalism and richness, elegance and warmth.</p>

        <p>Inside our doors, you’ll find interiors inspired by modern European lounges and classic bistros — dark wood tones, soft lighting, matte gold details, and seating that invites you to stay a little longer. Every corner is designed with intention, so that your experience feels intimate, immersive, and above all, memorable.</p>

        <p>At the heart of our kitchen is a team that believes cooking is an act of love. Our chefs source the freshest seasonal ingredients and approach every dish with precision and passion. From hand-rolled pastas to smoked cuts and slow-roasted vegetables, each plate is a narrative — rooted in flavor, elevated with technique.</p>

        <p>But it’s not just about what’s on the table. It’s about the stories shared across it. Over the years, we’ve hosted first dates, anniversaries, business deals, family reunions, and solo escapes — each adding a new layer to our story.</p>

        <p>We invite you to dine with us and discover what makes The Velvet Fork more than just a restaurant. Since 2008, we’ve been serving not only meals but memories — and yours might just be the next chapter in our journey.</p>

        <p><em>Welcome to The Velvet Fork. Where flavor meets elegance.</em></p>

    `;

  // storyContainer
  const storyContainer = document.createElement("div");
  storyContainer.id = "story-container";
  storyContainer.appendChild(story);
  container.appendChild(storyContainer);

  // memories
  const memories = document.createElement("div");
  memories.id = "memories";
  story.appendChild(memories);
}
