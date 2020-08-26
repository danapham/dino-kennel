import { displayDinos } from "./modules/cards.js";

const init = () => {
  displayDinos("kennel", 29, 101)
  displayDinos("hospital", 0, 30)
  displayDinos("graveyard", -1, 1)
}

init();
