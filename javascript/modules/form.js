import { getDinos } from "./data.js";
import { displayDinos } from "./cards.js"

const addNewDino = () => {
  $("#newDinoSubmit").click(() => {
    const dinos = getDinos();
    const newDino = {};

    newDino.name = $("#name").val();
    newDino.type = $("#type").val();
    newDino.age = parseInt($("#age").val());
    newDino.owner = $("#owner").val();
    newDino.adventures = [];
    newDino.health = 100;
    newDino.imageURL = $("#name").val();

    dinos.push(newDino);

    $("#kennel").html("");
    $("#hospital").html("");
    $("#graveyard").html("");
    displayDinos("kennel", 29, 101)
    displayDinos("hospital", 0, 30)
    displayDinos("graveyard", -1, 1)
  });
};

export { addNewDino };
