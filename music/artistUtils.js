import Artist from "./artist.js";
import fs from "fs";

export default class ArtistUtils {
  #artistList = [];
  constructor() {
    const jsonArtists = fs.readFileSync("./artist.json");
    const artistJsonList = JSON.parse(jsonArtists);
    for (var i = 0; i < artistJsonList.length; i++) {
      const artistFromJson = new Artist(artistJsonList[i].artistName, artistJsonList[i].artistInfo, artistJsonList[i].yearBorn, artistJsonList[i].intrumentsPlayed);
      this.#artistList.push(artistFromJson.getArtistDataObject());
    }
  }

  addArtist(artistName, artistInfo, yearBorn, intrumentsPlayed) {
    const artist = new Artist(artistName, artistInfo, yearBorn, intrumentsPlayed);
    this.#artistList.push(artist.getArtistDataObject());
  }

  removeArtist(indexToRemove) {
    this.#artistList.splice(indexToRemove, 1);
  }

  addBandToArtist(band, indexOfArtist, bandName) {
    if (indexOfArtist > this.#artistList.length) {
      console.log("Error: index of artist dose not exist");
    }
    else {
      this.#artistList[indexOfArtist].currentBands.push("Id: " + band + " Band name: " + bandName);
    }
  }

  removeBandFromArtist(band, indexOfArtist) {
    if (indexOfArtist > this.#artistList.length) {
      console.log("Error: index of artist dose not exist");
    }
    else {
      if (this.#artistList[indexOfArtist].currentBands.length < 1) {
        console.log("Artist is not a member of any bands");
      }
      else {
        const bands = this.#artistList[indexOfArtist].currentBands;
        const indexOfBand = bands.indexOf(band);
        const previusBand = bands.splice(indexOfBand, 1);
        this.#artistList[indexOfArtist].currentBands = bands;
        this.#artistList[indexOfArtist].previusBands.push(previusBand);
      }
    }
  }

  getArtistObject(indexOfArtist) {
    return this.#artistList[indexOfArtist].artistName;
  }

  getArtistInstrument(indexOfArtist) {
    return this.#artistList[indexOfArtist].intrumentsPlayed;
  }

  showBandsInArtist(indexOfArtist) {
    console.log(this.#artistList[indexOfArtist].currentBands);
  }

  getArtistListLength() {
    return this.#artistList.length;
  }
  display() {
    if (this.#artistList.length > 0) {
      for (var i = 0; i < this.#artistList.length; i++) {
        console.log(this.#artistList[i]);
      }
    }
    else if (this.#artistList.length === 0) {
      console.log("there are no artists to display");
    }
    else {
      console.log("An error has happend");
    }
  }

  writeArtistListToJson() {
    fs.writeFileSync('./artist.json', JSON.stringify(this.#artistList, null, 2), (err) => {
      if (err) throw err;
      console.log("ArtistList saved");
    });
  }
}