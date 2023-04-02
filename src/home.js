import "./home.css";
import pasta from "./assets/pasta.png";
import pizza from "./assets/pizza.png";
import fries from "./assets/fries.png";
import burger from "./assets/burger.png";

function loadNavbar() {
  const liTitles = ["Home", "Menu", "About us "];

  const nav = document.createElement("nav");
  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  const buttons = document.createElement("div");
  const login = document.createElement("button");
  const signup = document.createElement("button");
  let liArrays = [];

  for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");

    li.textContent = liTitles[i];

    ul.appendChild(li);

    liArrays.push(li);
  }

  signup.textContent = "Sign Up";
  login.textContent = "Login";
  h1.textContent = "The Resto";

  nav.classList.add("hello");
  signup.classList.add("signup");

  document.getElementById("content").appendChild(nav);
  nav.appendChild(h1);
  nav.appendChild(ul);
  nav.appendChild(buttons);
  buttons.appendChild(login);
  buttons.appendChild(signup);
  return liArrays;
}

function loadBody() {
  const main = document.createElement("main");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const trackOrder = document.createElement("button");
  const buttons = document.createElement("div");
  const img = document.createElement("img");
  const deliveryDiv = document.createElement("div");
  const mainDiv = document.createElement("div");

  const deliveryInfo = [
    {
      title: "Fast Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque vero aspernatur nam. ",
    },
    {
      title: "Free Delivery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque vero aspernatur nam.",
    },
    {
      title: "Fresh Food",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eaque vero aspernatur nam.",
    },
  ];

  for (let i = 0; i < deliveryInfo.length; i++) {
    const deliveryH1 = document.createElement("h1");
    const deliveryP = document.createElement("p");
    const div = document.createElement("div");

    deliveryH1.textContent = deliveryInfo[i].title;
    deliveryP.textContent = deliveryInfo[i].description;
    div.classList.add("delivery-element");

    div.appendChild(deliveryH1);
    div.appendChild(deliveryP);
    deliveryDiv.appendChild(div);
  }

  h1.innerHTML = "All Fast Food is  Available <br/> at The Resto !";
  p.textContent = "Tasty and affordable!";
  button.textContent = "Order Now";
  trackOrder.textContent = "Track Order";
  buttons.classList.add("buttons");
  img.src = pasta;
  mainDiv.classList.add("main-div");
  deliveryDiv.classList.add("delivery-info");

  div.appendChild(h1);
  div.appendChild(p);
  buttons.appendChild(button);
  buttons.appendChild(trackOrder);
  div.appendChild(buttons);
  mainDiv.appendChild(div);
  mainDiv.appendChild(img);
  main.appendChild(mainDiv);
  main.appendChild(deliveryDiv);
  document.getElementById("content").appendChild(main);

  return main;
}

function loadMenu() {
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

function loadAbout() {
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

function loadFooter() {
  const footer = document.createElement("footer");
  const ul = document.createElement("ul");
  const div = document.createElement("div");

  const foot = [
    {
      h1: "Menu",
      titles: ["Home", "Offers", "Service", "About us"],
    },
    {
      h1: "Information",
      titles: ["Menu", "Quality", "Fast Delivery"],
    },
    {
      h1: "Contact Us",
      titles: ["Explore", "Test@test.test", "+124 323 545"],
    },
  ];

  for (let i = 0; i < foot.length; i++) {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const h1 = document.createElement("h1");

    h1.textContent = foot[i].h1;
    for (let j = 0; j < foot[i].titles.length; j++) {
      console.log(foot[i].titles);
      const li = document.createElement("li");
      li.textContent = foot[i].titles[j];
      ul.appendChild(li);
    }
    footer.appendChild(div);
    div.appendChild(h1);
    div.appendChild(ul);
    div.classList.add("footer-divs");
  }

  document.getElementById("content").appendChild(footer);

  return footer;
}

export { loadNavbar, loadMenu, loadAbout, loadBody, loadFooter };
