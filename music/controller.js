import BandUtils from "./bandUtils.js";
import ArtistUtils from "./artistUtils.js";
import prompt from "prompt-sync";
const userInput = prompt({ sigint: true });

export default class Controller {
  #bandUtils;
  #artistUtils;
  #input;

  constructor() {
    this.#artistUtils = new ArtistUtils();
    this.#bandUtils = new BandUtils();
  }

  addNew(objectToCreate) {
    if (objectToCreate === "band") {
      const bandCreateQuestions = [
        "What is the name of the band? ",
        "Type som info about the band ",
        "when was the band founded? ",
        "Has the band disoleved? yes/no ",
        "When was the band disolved? "];
      const inputArr = [];
      for (var i = 0; i < bandCreateQuestions.length; i++) {
        console.log(bandCreateQuestions[i]);
        this.#input = userInput().trim().toLowerCase();
        if (bandCreateQuestions[3] === "no") {
          continue;
        }
        inputArr.push(this.#input);
      }
      parseInt(inputArr[2]);
      if (inputArr[3] === "yes") {
        inputArr[4] = parseInt(inputArr[4]);
        this.#bandUtils.addBand(inputArr[0], inputArr[1], inputArr[2], inputArr[4]);
      }
      else {
        this.#bandUtils.addBand(inputArr[0], inputArr[1], inputArr[2]);
      }
    }
    else if (objectToCreate === "artist") {
      const artistCreateQuestions = [
        "What is the name of the artist? ",
        "Type som info about the artist ",
        "When was the artist born? ",
        "What instruments dose the artist play? "];
      const inputArray = [];

      for (var i = 0; i < artistCreateQuestions.length; i++) {
        console.log(artistCreateQuestions[i]);
        this.#input = userInput().trim().toLowerCase();
        inputArray.push(this.#input);
      }

      inputArray[2] = parseInt(inputArray[2]);
      this.#artistUtils.addArtist(inputArray[0], inputArray[1], inputArray[2], inputArray[3]);
    }
    else {
      console.log("error wrong value: " + objectToCreate);
    }
  }

  deleteObject(objectToDelete) {
    var run = true;
    if (objectToDelete === "band") {
      while (run) {
        console.log("Chose whits band to remove. ");
        this.#bandUtils.display();
        this.#input = parseInt(userInput());
        if (isNaN(this.#input)) {
          console.log("error NaN value. type a number from the list.")
        }
        else {
          this.#bandUtils.removBand(input);
          run = false
        }
      }
    }
    else if (objectToDelete === "artist") {
      while (run) {
        console.log("Chose whits artist to remove. ");
        this.#artistUtils.display();
        this.#input = parseInt(userInput());
        if (isNaN(this.#input)) {
          console.log("error NaN value. type a number from the list.")
        }
        else {
          this.#artistUtils.removeArtist(input);
          run = false
        }
      }
    }
    else {
      console.log("Error wrong value: " + objectToDelete);
    }
  }

  addTo(objectToAdd) {
    if (objectToAdd === "band") {
      console.log("Chose whits band to remove. ");
      this.#bandUtils.display();
      this.#input = parseInt(userInput());
      if (isNaN(this.#input)) {
        console.log("error NaN value. type a number from the list.")
      }
      else {
        this.#bandUtils.addArtistToBand(this.#input);
      }
    }
    else if (objectToAdd === "artist") {
      console.log("Chose whits artist to remove. ");
      this.#artistUtils.display();
      this.#input = parseInt(userInput());
      if (isNaN(this.#input)) {
        console.log("error NaN value. type a number from the list.")
      }
      else {
        this.#artistUtils.addBandToArtist(this.#input);
      }
    }
    else {
      console.log("Error wrong value: " + objectToAdd);
    }
  }

  removeFrom(objectToRemove) {
    if (objectToRemove === "band") {
      console.log("Chose whits band to remove. ");
      this.#bandUtils.display();
      this.#input = parseInt(userInput());
      if (isNaN(this.#input)) {
        console.log("error NaN value. type a number from the list.")
      }
      else {
        this.#bandUtils.removeArtistFromBand(this.#input);
      }
    }
    else if (objectToRemove === "artist") {
      console.log("Chose whits artist to remove. ");
      this.#artistUtils.display();
      this.#input = parseInt(userInput());
      if (isNaN(this.#input)) {
        console.log("error NaN value. type a number from the list.")
      }
      else {
        this.#artistUtils.removeBandFromArtist(this.#input);
      }
    }
    else {
      console.log("Error wrong value: " + objectToRemove);
    }
  }

  displayData(objectToDisplay) {
    if (objectToDisplay == "band") {
      this.#bandUtils.display();
    }
    else if (objectToDisplay == "artist") {
      this.#artistUtils.display();
    }
    else {
      console.log("Error wrong value: " + objectToDisplay);
    }
  }
}