import BandUtils from "./bandUtils.js";
import ArtistUtils from "./artistUtils.js";
import prompt from "prompt-sync";
const userInput = prompt({ sigint: true });

export default class Controller {
  #bandUtils;
  #artistUtils;

  constructor() {
    this.#artistUtils = new ArtistUtils();
    this.#bandUtils = new BandUtils();
  }

  addNew(objectToCreate) {
    var input;
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
        input = userInput().trim().toLowerCase();
        inputArr.push(input);
      }

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
        input = userInput().trim().toLowerCase();
        inputArray.push(input);
      }

      inputArray[4] = parseInt(inputArray[4]);
      this.#artistUtils.addArtist(inputArray[0], inputArray[1], inputArray[2], inputArray[3]);
    }
    else {
      console.log("error wrong value: " + objectToCreate);
    }
  }

  deleteObject(objectToDelete) {

  }

  addTo(objectToAdd) {

  }

  removeFrom(objectToRemove) {
    if (objectToRemove === "band") {
    }
    else if (objectToRemove === "artist") {
    }

    else {
      console.log("Error wrong value: " + objectToRemove);
    }
  }

  displayData(objectToDisplay) {
    if (objectToDisplay === "band") {
      this.#bandUtils.display();
    }
    else if (objectToDisplay === "artist") {
      this.#artistUtils.display();
    }

    else {
      console.log("Error wrong value: " + objectToDisplay);
    }
  }
}