import Artist from "./artist.js";
import fs from "fs";

export default class ArtistUtils {
  #artistList = [];
  constructor() { }

  addArtist(artistName, artistInfo, yearBorn, intrumentsPlayed) {
    //const jsonArtists = fs.readFileSync("./artists.json");
    //const artistJsonList = JSON.parse(jsonArtists);
    const artist = new Artist(artistName, artistInfo, yearBorn, intrumentsPlayed);
    this.#artistList.push(artist.getArtistDataObject());
  }

  removeArtist(indexToRemove) {
    this.#artistList.splice(indexToRemove, 1);
  }

  addBandToArtist(band, indexOfArtist) {
    this.#artistList[indexOfArtist].setCurrentMembers(band);
  }

  removeBandFromArtist(band, indexOfArtist) {
    const bands = this.#artistList[indexOfArtist].getCurrentBands();
    const indexOfBand = bands.indexOf(band);
    const previusBand = bands.splice(indexOfBand, 1);
    this.#artistList[indexOfArtist].setCurrentBands(bands, 1);
    this.#artistList[indexOfArtist].setPreviusBands(previusBand);
  }

  display() {
    if (this.#artistList.length > 0) {
      for (var i = 0; i < this.#artistList.length; i++) {
        console.log(i + ". " + this.#artistList[i].artistName);
      }
    }
    else if (this.#artistList.length === 0) {
      console.log("there are no artists to display");
    }
    else {
      console.log("An error has happend");
    }
  }
}