import { displayDinos } from "./modules/cards.js";
import { getAdventures } from "./modules/data.js";

const init = () => {
  displayDinos("kennel", 29, 101)
  displayDinos("hospital", 0, 30)
  displayDinos("graveyard", -1, 1)
}

init();

const adventureTime = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = new Date();
  // const month = date.getMonth();
  console.log(date.getMonth());
}

// const sendOnAdventure = (id) => {

//   const adventures = getAdventures();
//   const selectedAdventure = adventures[Math.floor(Math.random() * adventures.length)];
//   let adventureObj = {};

//   adventureObj.adventure = selectedAdventure.title;
//   adventureObj.timestamp = Date().getTime();
//   console.log(adventureObj);
// }

adventureTime();

// sendOnAdventure();
