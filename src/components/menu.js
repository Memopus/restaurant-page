import pizza from "../../dist/assets/pizza.png";
import fries from "../../dist/assets/fries.png";
import burger from "../../dist/assets/burger.png";
import pasta from "../../dist/assets/pasta.png";
import "./style.css";

export default function loadMenu() {
  const section = document.createElement("section");
  const menuDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  section.classList.add("menu-section");
  h1.innerHTML = "Our <span>Regular </span> Menu";
  section.appendChild(h1);

  const menu = [
    {
      title: "Burger",
      imgSrc: burger,
      price: "8$",
    },
    {
      title: "Pizza",
      imgSrc: pizza,
      price: "10$",
    },
    {
      title: "Pasta",
      imgSrc: pasta,
      price: "6$",
    },
    {
      title: "Fries",
      imgSrc: fries,
      price: "3$",
    },
  ];

  for (let i = 0; i < menu.length; i++) {
    const card = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const price = document.createElement("p");
    const icon = document.createElement("i");
    const text = document.createElement("div");

    card.classList.add("card");
    icon.classList.add("fa");
    icon.classList.add("fa-shopping-cart");
    icon.classList.add("fa-2x");

    text.classList.add("text");

    img.src = menu[i].imgSrc;
    h2.textContent = menu[i].title;
    price.textContent = menu[i].price;

    menuDiv.appendChild(card);
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(text);
    text.appendChild(price);
    text.appendChild(icon);
  }

  menuDiv.classList.add("menu");
  section.appendChild(menuDiv);
  document.getElementById("content").appendChild(section);

  return section;
}
