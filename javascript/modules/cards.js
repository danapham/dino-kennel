import { getDinos, getAdventures } from "./data.js";
import { displayAdventureLog } from "./profile.js";

const displayDinos = (divId, x, y) => {
  const dinos = getDinos();

  for (let i = 0; i < dinos.length; i++) {
    if (x < dinos[i].health && dinos[i].health < y) {
      $(`#${divId}`).append(
        `<div class="card" style="width: 19rem;" id="dinoCard${i}">
        <div class="card-image-container">
          <img src="${dinos[i].imageUrl}" class="card-img-top card-image" alt="image of dinosaur">
        </div>
        <div class="card-body">
          <h5 class="card-title">${dinos[i].name}</h5>
          <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" id="healthBar${i}" style="width: ${dinos[i].health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="health-bar-text">
                <p class="card-text" id="dinoHealth${i}">${dinos[i].health}%</p>  
              </div>
            </div>
          </div>

          <button type="button" class="btn btn-primary card-btn" id="feedButton${i}" title="Feed"><i class="fas fa-seedling"></i></button>
          <button type="button" class="btn btn-primary card-btn" id="petButton${i}" title="Pet"><i class="fas fa-hand-paper"></i></button>
          <button type="button" class="btn btn-primary card-btn" id="adventureButton${i}" title="Send on adventure"><i class="fas fa-snowboarding"></i></button>
          <button type="button" class="btn btn-primary card-btn" id="releaseButton${i}" title="Release into wild"><i class="far fa-arrow-alt-circle-right"></i></button>
          <button type="button" class="btn btn-primary card-btn" data-toggle="modal" data-target="#profile${i}" id="profileButton${i}" title="View dino log"><i class="fas fa-book-open"></i></button>

        </div>

        <div class="modal fade" id="profile${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">About ${dinos[i].name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4">
                    <img src="${dinos[i].imageUrl}" class="card-img-top" alt="image of dinosaur">
                  </div>
                <div class="col-md-4 ml-auto">
                  <h6>Type: ${dinos[i].type}</h6>
                  <h6>Age: ${dinos[i].age}</h6>
                  <h6>Owner: ${dinos[i].owner}</h6>
                  <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" id="healthBar${i}" style="width: ${dinos[i].health}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div class="health-bar-text">
                        <p class="card-text" id="dinoHealth${i}">${dinos[i].health}%</p>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="row">
                  <div class="col">
                    <h6>Date</h6>
                  </div>
                  <div class="col">
                    <h6>Adventure</h6>
                  </div>
                </div>
              </div>
              <div id="adventureLog${i}"></div>
            </div>
          </div>
        </div>`
      );
      petDino(i);
      feedDino(i);
      sendOnAdventure(i);
      updateHealthBar(i);
      releaseDino(i);
      displayAdventureLog(i);
    }
  }
};

const petDino = (id) => {
  const dinos = getDinos();

  $(`#petButton${id}`).click(() => {
    if (dinos[id].health + 5 > 100) {
      dinos[id].health = 100;
    } else {
      dinos[id].health += 5;
    }

    $(`#dinoHealth${id}`).html(`${dinos[id].health}%`);
    updateHealthBar(id);

    $("#kennel").html("");
    $("#hospital").html("");
    $("#graveyard").html("");
    displayDinos("kennel", 29, 101);
    displayDinos("hospital", 0, 30);
    displayDinos("graveyard", -1, 1);
  });
};

const feedDino = (id) => {
  const dinos = getDinos();

  $(`#feedButton${id}`).click(() => {
    if (dinos[id].health + 10 > 100) {
      dinos[id].health = 100;
    } else {
      dinos[id].health += 10;
    }

    $(`#dinoHealth${id}`).html(`${dinos[id].health}%`);
    updateHealthBar(id);

    $("#kennel").html("");
    $("#hospital").html("");
    $("#graveyard").html("");
    displayDinos("kennel", 29, 101);
    displayDinos("hospital", 0, 30);
    displayDinos("graveyard", -1, 1);
  });
};

const adventureTime = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`;
};

const sendOnAdventure = (id) => {
  $(`#adventureButton${id}`).click(() => {
    const dinos = getDinos();
    const adventures = getAdventures();
    const selectedAdventure =
      adventures[Math.floor(Math.random() * adventures.length)];
    let adventureObj = {};

    adventureObj.adventure = selectedAdventure.title;
    adventureObj.timestamp = adventureTime();

    dinos[id].adventures.push(adventureObj);

    if (dinos[id].health - selectedAdventure.healthHit < 0) {
      dinos[id].health = 0;
    } else {
      dinos[id].health -= selectedAdventure.healthHit;
    }

    $(`#dinoHealth${id}`).html(`${dinos[id].health}%`);
    updateHealthBar(id);

    $("#kennel").html("");
    $("#hospital").html("");
    $("#graveyard").html("");
    displayDinos("kennel", 29, 101);
    displayDinos("hospital", 0, 30);
    displayDinos("graveyard", -1, 1);
  });
};

const updateHealthBar = (id) => {
  const dinos = getDinos();

  if (0 < dinos[id].health && dinos[id].health < 30) {
    $(`#healthBar${id}`).attr("class", "progress-bar bg-danger");
  } else if (29 < dinos[id].health && dinos[id].health < 60) {
    $(`#healthBar${id}`).attr("class", "progress-bar bg-warning");
  } else if (59 < dinos[id].health && dinos[id].health < 101) {
    $(`#healthBar${id}`).attr("class", "progress-bar bg-success");
  }

  $(`#healthBar${id}`).attr("style", `width: ${dinos[id].health}%`);
};

const releaseDino = (id) => {
  $(`#releaseButton${id}`).click(() => {
    const dinos = getDinos();

    dinos.splice(id, 1);
    $("#kennel").html("");
    $("#hospital").html("");
    $("#graveyard").html("");
    displayDinos("kennel", 29, 101);
    displayDinos("hospital", 0, 30);
    displayDinos("graveyard", -1, 1);
  });
};

export { displayDinos };
