import { getDinos } from "./data.js";

const displayDinos = (divId, x, y) => {
  const dinos = getDinos();;

  for (let i = 0; i < dinos.length; i++) {
    if ( x < dinos[i].health && dinos[i].health < y) {
      $(`#${divId}`).append(
        `<div class="card" style="width: 18rem;">
        <img src="${dinos[i].imageUrl}" class="card-img-top" alt="image of dinosaur">
        <div class="card-body">
          <h5 class="card-title">${dinos[i].name}</h5>
          <p class="card-text">Health: ${dinos[i].health}</p>
          <a href="#" class="btn btn-primary">Feed</a>
          <a href="#" class="btn btn-primary">Pet</a>
          <a href="#" class="btn btn-primary">Adventure</a>
          <a href="#" class="btn btn-primary">Release</a>
          <a href="#" class="btn btn-primary">View Profile</a>
        </div>
      </div>`
      )
    }
  }
}

export { displayDinos };
