import Artist from "./artist.js";
import fs from "fs";

export default class ArtistUtils {
  #artistList = [];
  constructor() { }

  addArtist(artistName, artistInfo, yearBorn, intrumentsPlayed) {
    const jsonArtists = fs.readFileSync("./artists.json");
    const artistJsonList = JSON.parse(jsonArtists);
    const artist = new Artist(artistName, artistInfo, yearBorn, intrumentsPlayed);
    this.#artistList.push(artist.getArtistDataObject());
  }

  removeArtist(indexToRemove) {
    this.#artistList.splice(indexToRemove, 0);
  }

  display() {
    for (var i; i < this.#artistList; i++) {
      console.log(this.#artistList[i]);
    }
  }
}