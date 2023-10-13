import Band from "./band.js";
import Artist from "./artist.js";
import prompt from "prompt-sync";
const userInput = prompt({ sigint: true });

var run = true;

function displayMenu() {
  console.log("\n Menu \n 1. Show menu \n 2. \n 100. Quit the program")
}



while (run) {
  displayMenu();

  switch (parseInt(userInput().trim())) {
    case 1:
      displayMenu();
      break;

    case 2:
      console.log("Sakuya");
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

