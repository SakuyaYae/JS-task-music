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
      const artistToAdd = [];
      const bandCreateQuestions = [
        "What is the name of the band? ",
        "Type som info about the band ",
        "When was the band founded? ",
        "Select a member of the band",
        "Has the band disoleved? yes/no ",
        "When was the band disolved? "];
      const inputArr = [];
      for (var i = 0; i < bandCreateQuestions.length; i++) {
        console.log(bandCreateQuestions[i]);
        if (bandCreateQuestions[i] === bandCreateQuestions[3]) {
          this.#artistUtils.display();
          this.#input = userInput().trim().toLowerCase();
          artistToAdd.push(this.#input);
          const artistToAddToBand = this.#artistUtils.getArtistObject(this.#input);
          this.#input = this.#bandUtils.addArtistToBand(this.#input, -1, artistToAddToBand);
        }
        else {
          this.#input = userInput().trim().toLowerCase();
        }
        if (bandCreateQuestions[i] === bandCreateQuestions[4] && this.#input === "no") {
          i++;
        }
        inputArr.push(this.#input);
      }
      parseInt(inputArr[2]);
      if (inputArr[4] === "yes") {
        inputArr[5] = parseInt(inputArr[5]);
        this.#bandUtils.addBand(inputArr[0], inputArr[1], inputArr[2], inputArr[3], inputArr[5]);
      }
      else {
        this.#bandUtils.addBand(inputArr[0], inputArr[1], inputArr[2], inputArr[3]);
      }
      const chosenBand = this.#bandUtils.getLatestBand();
      this.#artistUtils.addBandToArtist(chosenBand, artistToAdd[0], inputArr[0]);
    }
    else if (objectToCreate === "artist") {
      const artistCreateQuestions = [
        "What is the name of the artist? ",
        "Type som info about the artist ",
        "When was the artist born? (YYYYMMDD) ",
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
        else if (this.#bandUtils.getBandListLength() < this.#input) {
          console.log("Index out of bounds");
        }
        else {
          this.#bandUtils.removBand(this.#input);
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
        else if (this.#artistUtils.getArtistListLength() < this.#input) {
          console.log("index out of bounds");
        }
        else {
          this.#artistUtils.removeArtist(this.#input);
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
      console.log("Chose whits band to add artist to: ");
      this.#bandUtils.display();
      this.#input = parseInt(userInput());
      const chosenBand = this.#input;
      if (isNaN(this.#input)) {
        console.log("error NaN value. type a number from the list.");
      }
      else if (this.#bandUtils.getBandListLength() < this.#input) {
        console.log("index out of bounds");
      }
      else {
        console.log("Chose whits artist to add to band: ");
        this.#artistUtils.display();
        this.#input = parseInt(userInput());
        if (isNaN(this.#input)) {
          console.log("error NaN value. type a number from the list.")
        }
        else {
          const bandToAddToArtist = this.#bandUtils.getBandObject(chosenBand);
          const artistToAddToBand = this.#artistUtils.getArtistObject(this.#input);
          this.#bandUtils.addArtistToBand(this.#input, chosenBand, artistToAddToBand);
          this.#artistUtils.addBandToArtist(chosenBand, this.#input, bandToAddToArtist);
        }
      }
    }
    else if (objectToAdd === "artist") {
      console.log("Chose whits artist to add band to: ");
      this.#artistUtils.display();
      this.#input = parseInt(userInput());
      const chosenArtist = this.#input;
      if (isNaN(this.#input)) {
        console.log("Error NaN value. type a number from the list.")
      }
      else if (this.#artistUtils.getArtistListLength() < this.#input) {
        console.log("index out of bounds");
      }
      else {
        console.log("Chose whits band to add to artist: ");
        this.#bandUtils.display();
        this.#input = parseInt(userInput());
        if (isNaN(this.#input)) {
          console.log("error NaN value. type a number from the list.");
        }
        else {
          const bandToAddToArtist = this.#bandUtils.getBandObject(this.#input);
          const artistToAddToBand = this.#artistUtils.getArtistObject(chosenArtist);
          this.#artistUtils.addBandToArtist(this.#input, chosenArtist, bandToAddToArtist);
          this.#bandUtils.addArtistToBand(chosenArtist, this.#input, artistToAddToBand);
        }
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
      else if (this.#artistUtils.getArtistListLength() < this.#input) {
        console.log("error Index out of bounds");
      }
      else {
        const chosenBand = this.#input;
        console.log("Chose whits artist to remove from band: ");
        this.#bandUtils.showMembersInBand(chosenBand);
        this.#input = parseInt(userInput());
        if (isNaN(this.#input)) {
          console.log("error NaN value. type a number from the list.")
        }
        else if (this.#bandUtils.getBandListLength() < this.#input) {

        }
        else {
          this.#bandUtils.removeArtistFromBand(this.#input, chosenBand);
          this.#artistUtils.removeBandFromArtist(chosenBand, this.#input);
        }
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
        console.log("Chose whits band to remove from artist: ");
        const chosenArtist = this.#input;
        this.#artistUtils.showBandsInArtist(chosenArtist);
        this.#input = parseInt(userInput());
        if (isNaN(this.#input)) {
          console.log("error NaN value. type a number from the list.");
        }
        else {
          this.#artistUtils.removeBandFromArtist(this.#input, chosenArtist);
          this.#bandUtils.removeArtistFromBand(chosenArtist, this.#input)
        }
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

  writeToJson() {
    this.#artistUtils.writeArtistListToJson();
    this.#bandUtils.writeArtistListToJson();
  }
}
