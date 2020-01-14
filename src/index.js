import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

document.body.appendChild(makeButton("My first button!"));

console.log(
  nav(),
  top,
  bottom,

  makeColorStyle("cyan")
);
