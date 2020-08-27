import { getDinos, getAdventures } from "./data.js";

const displayDinos = (divId, x, y) => {
  const dinos = getDinos();

  for (let i = 0; i < dinos.length; i++) {
    if ( x < dinos[i].health && dinos[i].health < y) {
      $(`#${divId}`).append(
        `<div class="card" style="width: 18rem;">
        <img src="${dinos[i].imageUrl}" class="card-img-top" alt="image of dinosaur">
        <div class="card-body">
          <h5 class="card-title">${dinos[i].name}</h5>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" id="healthBar${i}" style="width: ${dinos[i].health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="health-bar-text">
                <p class="card-text" id="dinoHealth${i}">${dinos[i].health}%</p>  
              </div>
            </div>
          

          </div>
          <button type="button" class="btn btn-primary" id="feedButton${i}">Feed</button>
          <button type="button" class="btn btn-primary" id="petButton${i}">Pet</button>
          <button type="button" class="btn btn-primary" id="adventureButton${i}">Adventure</button>
          <button type="button" class="btn btn-primary">Release</button>
          <button type="button" class="btn btn-primary">View Profile</button>
        </div>
      </div>`
      )

      petDino(i);
      feedDino(i);
      sendOnAdventure(i);
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

const adventureTime = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`
}

const sendOnAdventure = (id) => {
  $(`#adventureButton${id}`).click(() => {
    const dinos = getDinos();
    const adventures = getAdventures();
    const selectedAdventure = adventures[Math.floor(Math.random() * adventures.length)];
    let adventureObj = {};

    adventureObj.adventure = selectedAdventure.title;
    adventureObj.timestamp = adventureTime();

    dinos[id].adventures.push(adventureObj);
    dinos[id].health -= selectedAdventure.healthHit;
    $(`#dinoHealth${id}`).html(`Health: ${dinos[id].health}`)
  })
}

const updateHealthBar = (id) => {

}

export { displayDinos };
