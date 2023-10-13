import Band from "./band.js";
import Artist from "./artist.js";
import prompt from "prompt-sync";
const userInput = prompt({ sigint: true });

var run = true;
var artist;
var band;

function displayMenu() {
  console.log("\n ==Menu== \n 1. Show menu \n 2. add new band \n 3. Add new artist \n 100. Quit the program");
}



while (run) {
  displayMenu();

  switch (parseInt(userInput().trim())) {
    case 1:
      displayMenu();
      break;

    case 2:
      band = new Band("Slayers", "Argent metalBand", 2016, artist);
      console.log("Band created: " + band.bandName);
      break;

    case 3:
      artist = new Artist("Doom", "Doom slayer", 1993, ["Bass", "Drums"]);
      console.log("Artist created: " + artist.artistName);
      break;

    case 100:
      run = false;
      console.log("Program has been quit.");
      break;

    default:
      console.log("Invalid input. type a valid number from the menu.");
      break;

  }
}

