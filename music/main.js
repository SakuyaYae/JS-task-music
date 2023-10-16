import Band from "./band.js";
import Artist from "./artist.js";
import prompt from "prompt-sync";
const userInput = prompt({ sigint: true });

var run = true;
var artist = null;
var band = null;

function displayMenu() {
  console.log(
    `\n ==Menu==
      1. Show menu 
      2. add new band 
      3. Add new artist 
      4. Delete  artist 
      5. Delete band 
      6. Display band 
      7. Display artist 
      8. Add band to artist 
      9. Add artist to band
      10. Remove band from artist
      11. Remove artist artist from band
      100. Quit the program`
  );
}

displayMenu();
while (run) {
  switch (parseInt(userInput().trim())) {
    case 1:
      displayMenu();
      break;

    case 2:
      band = new Band("Slayers", "Argent metalBand", 2016, artist);
      console.log("Band created: " + band.getBandName());
      break;

    case 3:
      artist = new Artist("Doom", "Doom slayer", 1993, ["Bass", "Drums"]);
      console.log("Artist created: " + artist.getArtistName());
      break;

    case 4:
      if (artist == null || band == null) {
        console.log("Error: no artists and/or bands have been created");
        break;
      }
      artist.setCurrentBands(artist.utils.remove(band, artist.getCurrentBands()));
      break;
    case 5:
      console.log("Not implemented");
      break;
    case 6:
      if (band == null) {
        console.log("Error: no artists have been created");
        break;
      }
      else {
        band.utils.display(band.getCurrentMembers());
        break;
      }

    case 7:
      if (artist == null) {
        console.log("Error: no artists have been created");
        break;
      }
      else {
        artist.utils.display(artist.getCurrentBands());
        break;
      }

    case 8:
      if (artist == null || band == null) {
        console.log("Error: no artists and/or bands have been created");
        break;
      }
      artist.setCurrentBands(artist.utils.add(band));
      break;

    case 9:
      if (artist == null || band == null) {
        console.log("Error: no artists and/or bands have been created");
        break;
      }
      band.setCurrentMembers(band.utils.add(artist));
      break;

    case 100:
      run = false;
      console.log("Program has been quit.");
      break;

    default:
      console.log("Invalid input. type a valid number from the menu.");
      displayMenu();
      break;
  }
}

