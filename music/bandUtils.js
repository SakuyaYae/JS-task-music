import Band from "./band.js";
import fs from "fs";

export default class ArtistUtils {
  #bandList = [];
  constructor() {
    const jsonBands = fs.readFileSync("./band.json");
    const bandJsonList = JSON.parse(jsonBands);
    for (var i = 0; i < bandJsonList.length; i++) {
      const bandFromJson = new Band(bandJsonList[i].bandName, bandJsonList[i].bandInfo, bandJsonList[i].yearFounded, bandJsonList[i].yearDisolved);
      this.#bandList.push(bandFromJson.getBandDataObject());
    }

  }

  addBand(bandName, bandInfo, yearFounded, yearDisolved = "") {
    const band = new Band(bandName, bandInfo, yearFounded, yearDisolved);
    this.#bandList.push(band.getBandDataObject());
  }

  removBand(indexToRemove) {
    this.#bandList.splice(indexToRemove, 1);
  }

  addArtistToBand(artist, indexOfBand) {
    this.#bandList[indexOfBand].setCurrentMembers(artist);
  }

  removeArtistFromBand(artist, indexOfBand) {
    const members = this.#bandList[indexOfBand].getCurrentMembers();
    const indexOfMember = members.indexOf(artist);
    const previusMember = members.splice(indexOfMember, 1);
    this.#bandList[indexOfBand].setCurrentMembers(members, 1);
    this.#bandList[indexOfBand].setPreviusMembers(previusMember);
  }

  display() {
    if (this.#bandList.length > 0) {
      for (var i = 0; i < this.#bandList.length; i++) {
        console.log(i + ". " + this.#bandList[i].bandName);
      }
    }
    else if (this.#bandList.length === 0) {
      console.log("There are no bands to display");
    }
    else {
      console.log("An error has happend")
    }
  }

  writeArtistListToJson() {
    fs.writeFileSync('./band.json', JSON.stringify(this.#bandList, null, 2), (err) => {
      if (err) throw err;
      console.log("BandList saved");
    });
  }
}