import "./style.css";

export default function loadFooter() {
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
