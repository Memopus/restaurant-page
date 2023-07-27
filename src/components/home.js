import pasta from "../../dist/assets/pasta.png";

export default function loadBody() {
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
  const imgDiv = document.createElement("div");

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
  imgDiv.classList.add("img-div");

  div.appendChild(h1);
  div.appendChild(p);
  imgDiv.appendChild(img);
  buttons.appendChild(button);
  buttons.appendChild(trackOrder);
  div.appendChild(buttons);
  mainDiv.appendChild(div);
  mainDiv.appendChild(imgDiv);
  main.appendChild(mainDiv);
  main.appendChild(deliveryDiv);
  document.getElementById("content").appendChild(main);

  return main;
}
