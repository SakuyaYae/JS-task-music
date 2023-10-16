import Band from "./band.js";
import fs from "fs";

export default class ArtistUtils {
  #bandList = [];
  constructor() { }

  addArtist(artistName, artistInfo, yearBorn, intrumentsPlayed) {
    const jsonArtists = fs.readFileSync("./artists.json");
    const artistJsonList = JSON.parse(jsonArtists);
    const band = new Band(artistName, artistInfo, yearBorn, intrumentsPlayed);
    this.#bandList.push(band.getBandDataObject());
  }

  removBand(indexToRemove) {
    this.#bandList.splice(indexToRemove, 0);
  }

  display() {
    for (var i; i < this.#bandList; i++) {
      console.log(this.#bandList[i]);
    }
  }
}