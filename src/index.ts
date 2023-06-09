import Img from "./images/fox.jpg";
import { add } from "./js/add.js";
import "./css/style.css";
import * as _ from "lodash";

const component = () => {
  const element = document.createElement("div");

  element.classList.add("foo");

  const myIcon = new Image();
  myIcon.src = Img;

  element.appendChild(myIcon);

  _.add(1, 2);

  return element;
};

document.body.appendChild(component());
