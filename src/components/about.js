import pizza from "../../dist/assets/pizza.png";
import pasta from "../../dist/assets/pasta.png";
import burger from "../../dist/assets/burger.png";
import "./style.css";

export default function loadAbout() {
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
  ];
  const section = document.createElement("section");
  const h1 = document.createElement("h1");
  const elements = document.createElement("div");
  section.classList.add("about-section");
  elements.classList.add("elements");
  h1.innerHTML = "What we <span>Deliver</span> ?";
  section.appendChild(h1);
  section.appendChild(elements);

  for (let i = 0; i < menu.length; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    img.src = menu[i].imgSrc;
    h2.textContent = menu[i].title;
    p.textContent = "Order Now >";

    elements.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
  }

  document.getElementById("content").appendChild(section);

  return section;
}
