import "./menu.css";
import { reset } from "./reset";

// Dynamically import all images from the menu folder
const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    const fileName = key.replace("./", "");
    images[fileName] = r(key);
  });
  return images;
};

const menuImages = importAll(
  require.context("./assets/menu", false, /\.(png|jpe?g|svg)$/)
);

export function renderMenu() {
  reset();
  const container = document.querySelector("#container");

  // menu
  const menu = document.querySelector("#menu");
  menu.style.textDecoration = "underline";

  // menu container
  const menuSection = document.createElement("div");
  menuSection.id = "menu-section";
  container.appendChild(menuSection);

  // heading
  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";
  menuSection.appendChild(heading);

  // create menu categories
  const categories = [
    {
      title: "Starters",
      items: [
        {
          image: "truffle-mushroom-soup.jpg",
          name: "Truffle Mushroom Soup",
          desc: "Creamy wild mushrooms with a hint of truffle oil",
        },
        {
          image: "burrata-bruschetta.jpg",
          name: "Burrata Bruschetta",
          desc: "Toasted sourdough, heirloom tomatoes, balsamic glaze",
        },
        {
          image: "smoked-duck-salad.jpg",
          name: "Smoked Duck Salad",
          desc: "Greens, citrus vinaigrette, maple-glazed pecans",
        },
        {
          image: "goat-cheese-tartlets.jpg",
          name: "Goat Cheese Tartlets",
          desc: "Mini tartlets with herbed goat cheese and fig jam",
        },
        {
          image: "crispy-calamari.jpg",
          name: "Crispy Calamari",
          desc: "Golden-fried squid rings with garlic aioli",
        },
      ],
    },
    {
      title: "Mains",
      items: [
        {
          image: "porcini-risotto.jpg",
          name: "Porcini Risotto",
          desc: "Arborio rice, porcini mushrooms, white wine reduction",
        },
        {
          image: "seared-sea-bass.jpg",
          name: "Seared Sea Bass",
          desc: "Garlic butter, lemon caper sauce, roasted asparagus",
        },
        {
          image: "braised-lamb-shank.jpg",
          name: "Braised Lamb Shank",
          desc: "Slow-cooked in red wine, served with creamy polenta",
        },
        {
          image: "grilled-vegan-skewers.jpg",
          name: "Grilled Vegan Skewers",
          desc: "Tofu, bell peppers, zucchini with chimichurri sauce",
        },
        {
          image: "chicken-parmigiana.jpg",
          name: "Chicken Parmigiana",
          desc: "Breaded chicken breast with marinara and mozzarella",
        },
      ],
    },
    {
      title: "Desserts",
      items: [
        {
          image: "velvet-chocolate-torte.jpg",
          name: "Velvet Chocolate Torte",
          desc: "Dark chocolate ganache, raspberry coulis",
        },
        {
          image: "lavender-creme-brulee.jpg",
          name: "Lavender Crème Brûlée",
          desc: "Caramelized sugar crust with floral notes",
        },
        {
          image: "lemon-basil-sorbet.jpg",
          name: "Lemon Basil Sorbet",
          desc: "Refreshing citrus palette cleanser",
        },
        {
          image: "salted-caramel-panna-cotta.jpg",
          name: "Salted Caramel Panna Cotta",
          desc: "Creamy custard with sea salt caramel drizzle",
        },
        {
          image: "berry-tiramisu.jpg",
          name: "Berry Tiramisu",
          desc: "Layered sponge cake with mascarpone and mixed berries",
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          image: "velvet-red-sangria.jpg",
          name: "Velvet Red Sangria",
          desc: "Red wine, orange liqueur, seasonal fruits",
        },
        {
          image: "espresso-martini.jpg",
          name: "Espresso Martini",
          desc: "Vodka, espresso, coffee liqueur",
        },
        {
          image: "mocktail-rose-lemonade.jpg",
          name: "Mocktail: Rose Lemonade",
          desc: "Sparkling rose syrup with lemon zest",
        },
        {
          image: "mango-lassi.jpg",
          name: "Mango Lassi",
          desc: "Sweet mango yogurt drink with a touch of cardamom",
        },
        {
          image: "cucumber-mint-cooler.jpg",
          name: "Cucumber Mint Cooler",
          desc: "Chilled cucumber juice with lime and mint",
        },
      ],
    },
    {
      title: "END",
      items: [],
    },
  ];

  // loop to render categories
  categories.forEach((section) => {
    const category = document.createElement("div");
    category.className = "menu-category";

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = section.title;
    category.appendChild(categoryTitle);

    section.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      const img = menuImages[item.image]; // dynamically loaded

      menuItem.innerHTML = `
        <div class="large-icon" style="background-image: url('${img}');"></div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      `;

      category.appendChild(menuItem);
    });

    menuSection.appendChild(category);
  });
}
