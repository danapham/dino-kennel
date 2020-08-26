import { getDinos } from "./data.js";

const displayDinos = (divId, x, y) => {
  const dinos = getDinos();

  for (let i = 0; i < dinos.length; i++) {
    if ( x < dinos[i].health && dinos[i].health < y) {
      $(`#${divId}`).append(
        `<div class="card" style="width: 18rem;">
        <img src="${dinos[i].imageUrl}" class="card-img-top" alt="image of dinosaur">
        <div class="card-body">
          <h5 class="card-title">${dinos[i].name}</h5>
          <p class="card-text" id="dinoHealth${i}">Health: ${dinos[i].health}</p>
          <button type="button" class="btn btn-primary" id="feedButton${i}">Feed</button>
          <button type="button" class="btn btn-primary" id="petButton${i}">Pet</button>
          <button type="button" class="btn btn-primary">Adventure</button>
          <button type="button" class="btn btn-primary">Release</button>
          <button type="button" class="btn btn-primary">View Profile</button>
        </div>
      </div>`
      )

      petDino(i);
      feedDino(i);
    }
  }


}

const petDino = (id) => {
  const dinos = getDinos();

  $(`#petButton${id}`).click(() => {
    dinos[id].health += 5;
    $(`#dinoHealth${id}`).html(`Health: ${dinos[id].health}`)
  })
}

const feedDino = (id) => {
  const dinos = getDinos();

  $(`#feedButton${id}`).click(() => {
    dinos[id].health += 10;
    $(`#dinoHealth${id}`).html(`Health: ${dinos[id].health}`)
  })
}

export { displayDinos };
