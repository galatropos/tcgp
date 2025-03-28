const app = document.querySelector("#app");

import type from "./view/type.js"
import expansion from "./view/expansion.js"
import card from "./view/card.js"

import homeData from "./js/home.js"
import typeData from "./js/type.js"
import expansionData from "./js/expansion.js"
import cardData from "./js/card.js"


const route = window.location.href.split("/").pop();
switch (route) {
  case "":
    homeData(app)
    break;
  case "type":
    typeData(app)
    break;
  case "expansion":
    expansionData(app)
    break;
    case "card":
    cardData(app)
      break;
}

