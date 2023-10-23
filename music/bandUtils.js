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

  addArtistToBand(artist, indexOfBand, artistName) {
    if (artist > this.#bandList.length) {
      console.log("Error: index of artist dose not exist");
    }
    else if (indexOfBand > this.#bandList.length) {
      console.log("Error: index of band dose not exist");
    }
    else {
      this.#bandList[indexOfBand].currentMembers.push("Artist Id: " + artist + " Artist name " + artistName);
    }
  }

  removeArtistFromBand(artist, indexOfBand) {
    if (artist > this.#bandList.length) {
      console.log("Error: index of artist dose not exist");
    }
    else if (indexOfBand > this.#bandList.length) {
      console.log("Error: index of band dose not exist");
    }
    else {
      const members = this.#bandList[indexOfBand].currentMembers[artist];
      const indexOfMember = members.indexOf(artist);
      const previusMember = members.splice(indexOfMember, 1);
      this.#bandList[indexOfBand].currentMembers = members;
      this.#bandList[indexOfBand].previusMembers.push(previusMember);
    }
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

  getBandObject(indexOfBand) {
    return this.#bandList[indexOfBand].bandName;
  }

  showMembersInBand(indexOfBand) {
    console.log(this.#bandList[indexOfBand].currentMembers);
  }

  writeArtistListToJson() {
    fs.writeFileSync('./band.json', JSON.stringify(this.#bandList, null, 2), (err) => {
      if (err) throw err;
      console.log("BandList saved");
    });
  }
}