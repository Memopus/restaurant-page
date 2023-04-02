import "./style.css";

export default function loadNavbar() {
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
  h1.classList.add("the-title");

  document.getElementById("content").appendChild(nav);
  nav.appendChild(h1);
  nav.appendChild(ul);
  nav.appendChild(buttons);
  buttons.appendChild(login);
  buttons.appendChild(signup);
  return liArrays;
}
