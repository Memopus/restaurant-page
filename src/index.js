import home from "./home";
import { loadNavbar, loadMenu, loadAbout, loadBody, loadFooter } from "./home";

const nav = loadNavbar();
let body = loadBody();
let menu = loadMenu();
let about = loadAbout();
let footer = loadFooter();

window.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.target);
  if (nav.includes(e.target) && e.target.innerText === "Home") {
    reset();
    body = loadBody();
    footer = loadFooter();
  }
  if (nav.includes(e.target) && e.target.innerText === "Menu") {
    reset();
    menu = loadMenu();
    menu.style.top = "10px";
    menu.style.padding = "5rem";
    footer = loadFooter();
    footer.style.top = "10px";
  }
  if (nav.includes(e.target) && e.target.innerText === "About us") {
    console.log("es");
    reset();
    about = loadAbout();
    about.style.top = "10px";
    about.style.padding = "5rem";
    footer = loadFooter();
    footer.style.top = "10px";
  }
});

function reset() {
  if (body !== "") {
    body.remove();
    body = "";
  }

  if (about !== "") {
    about.remove();
    about = "";
  }
  if (menu !== "") {
    menu.remove();
    menu = "";
  }
  if (footer !== "") {
    footer.remove();
    footer = "";
  }
}
