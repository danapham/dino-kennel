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
          <p class="card-text" id="dinoHealth">Health: ${dinos[i].health}</p>
          <a href="#" class="btn btn-primary">Feed</a>
          <a href="#" class="btn btn-primary" id="petButton${i}">Pet</a>
          <a href="#" class="btn btn-primary">Adventure</a>
          <a href="#" class="btn btn-primary">Release</a>
          <a href="#" class="btn btn-primary">View Profile</a>
        </div>
      </div>`
      )

      petDino(i);
    }
  }


}

const petDino = (id) => {
  const dinos = getDinos();

  $(`#petButton${id}`).click(() => {
    dinos[id].health -= 10;
    $("#dinoHealth").val(`Health: ${dinos[id].health}`)
  })

}

export { displayDinos };
