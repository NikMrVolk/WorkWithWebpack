import Img from "./images/fox.jpg";
import { add } from "./js/add.js";
import "./css/style.css";

const component = () => {
  const element = document.createElement("div");

  element.classList.add("foo");

  const myIcon = new Image();
  myIcon.src = Img;

  element.appendChild(myIcon);

  add();

  return element;
};

document.body.appendChild(component());
