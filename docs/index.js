

console.warn('index.js loaded 333');

const categories = [
  {
    title: "Fruits",
    items: ["Apple", "Banana", "Orange"]
  },
  {
    title: "Vegetables",
    items: ["Carrot", "Broccoli", "Spinach"]
  },
  {
    title: "Drinks",
    items: ["Water", "Juice", "Tea"]
  }
];

const container = document.getElementById("container");

categories.forEach(category => {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "category";

  const titleEl = document.createElement("div");
  titleEl.className = "category-title";
  titleEl.textContent = category.title;
  categoryDiv.appendChild(titleEl);

  const buttonList = document.createElement("div");
  buttonList.className = "button-list";

  category.items.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item;
    btn.addEventListener("click", () => {
      alert(`You clicked ${item}`);
    });
    buttonList.appendChild(btn);
  });

  categoryDiv.appendChild(buttonList);
  container.appendChild(categoryDiv);
});