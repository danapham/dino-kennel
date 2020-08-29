import { getDinos, getAdventures } from "./data.js";

const displayAdventureLog = (id) => {
  $(`#profileButton${id}`).click(() => {
    const dinos = getDinos();

    $(`#adventureLog${id}`).html("");
    
    for (let j = 0; j < dinos[id].adventures.length; j++) {
      $(`#adventureLog${id}`).append(`
        <div class="row">
          <div class="col">
            <p>${dinos[id].adventures[j].timestamp}</p>
          </div>
          <div class="col">
            <p>${dinos[id].adventures[j].adventure}</p>
          </div>
        </div>`);
    }
  });

};

export { displayAdventureLog };
