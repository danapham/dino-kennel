import { getDinos } from "./data.js";

const displayDinos = (divId, x, y) => {
  const dinos = getDinos();

  for (let i = 0; i < dinos.length; i++) {
    if (dinos[i].health <= y && dinos[i].health >= x) {
      buildCards(divId);
    }
  }
}

const buildCards = (divId) =>  {
  $(`#${divId}`).html(
    `<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  )
}

export { displayDinos };
