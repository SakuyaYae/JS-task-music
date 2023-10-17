import Controller from "./controller.js";
import prompt from "prompt-sync";
const userInput = prompt({ sigint: true });

const controller = new Controller();
var run = true;

function displayMenu() {
  console.log(
    `\n ==Menu==
      1. Show menu 
      2. add new band 
      3. Add new artist 
      4. Delete  band
      5. Delete artist
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
      controller.addNew("band");
      console.log("Band created");
      break;

    case 3:
      controller.addNew("artist");
      console.log("Artist created");
      break;

    case 4:
      controller.deleteObject("band");
      break;

    case 5:
      controller.deleteObject("artist");
      break;

    case 6:
      controller.displayData("band");
      break;

    case 7:
      controller.displayData("artist");
      break;

    case 8:
      controller.addTo("band");
      break;

    case 9:
      controller.addTo("artist")
      break;
    case 10:
      controller.removeFrom("band");
      break;

    case 11:
      controller.removeFrom("artist");
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

