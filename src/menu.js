import { reset } from "./reset";

export function renderMenu() {
  reset();
  const container = document.querySelector("#container");

  // menu
  const menu = document.querySelector("#menu");
  menu.style.textDecoration = "underline";

  // // menu container
  // const menuSection = document.createElement("div");
  // menuSection.id = "menu-section";
  // container.appendChild(menuSection);

  // // heading
  // const heading = document.createElement("h1");
  // heading.textContent = "Our Menu";
  // menuSection.appendChild(heading);

  // // create menu categories
  // const categories = [
  //   {
  //     title: "Starters",
  //     items: [
  //       {
  //         name: "Truffle Mushroom Soup",
  //         desc: "Creamy wild mushrooms with a hint of truffle oil",
  //       },
  //       {
  //         name: "Burrata Bruschetta",
  //         desc: "Toasted sourdough, heirloom tomatoes, balsamic glaze",
  //       },
  //       {
  //         name: "Smoked Duck Salad",
  //         desc: "Greens, citrus vinaigrette, maple-glazed pecans",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Mains",
  //     items: [
  //       {
  //         name: "Porcini Risotto",
  //         desc: "Arborio rice, porcini mushrooms, white wine reduction",
  //       },
  //       {
  //         name: "Seared Sea Bass",
  //         desc: "Garlic butter, lemon caper sauce, roasted asparagus",
  //       },
  //       {
  //         name: "Braised Lamb Shank",
  //         desc: "Slow-cooked in red wine, served with creamy polenta",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Desserts",
  //     items: [
  //       {
  //         name: "Velvet Chocolate Torte",
  //         desc: "Dark chocolate ganache, raspberry coulis",
  //       },
  //       {
  //         name: "Lavender Crème Brûlée",
  //         desc: "Caramelized sugar crust with floral notes",
  //       },
  //       {
  //         name: "Lemon Basil Sorbet",
  //         desc: "Refreshing citrus palette cleanser",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Drinks",
  //     items: [
  //       {
  //         name: "Velvet Red Sangria",
  //         desc: "Red wine, orange liqueur, seasonal fruits",
  //       },
  //       { name: "Espresso Martini", desc: "Vodka, espresso, coffee liqueur" },
  //       {
  //         name: "Mocktail: Rose Lemonade",
  //         desc: "Sparkling rose syrup with lemon zest",
  //       },
  //     ],
  //   },
  // ];

  // // loop to render categories
  // categories.forEach((section) => {
  //   const category = document.createElement("div");
  //   category.className = "menu-category";

  //   const categoryTitle = document.createElement("h2");
  //   categoryTitle.textContent = section.title;
  //   category.appendChild(categoryTitle);

  //   section.items.forEach((item) => {
  //     const menuItem = document.createElement("div");
  //     menuItem.className = "menu-item";

  //     menuItem.innerHTML = `
  //       <h3>${item.name}</h3>
  //       <p>${item.desc}</p>
  //     `;

  //     category.appendChild(menuItem);
  //   });

  //   menuSection.appendChild(category);
  // });
}
