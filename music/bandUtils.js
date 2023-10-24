import Band from "./band.js";
import fs from "fs";

export default class ArtistUtils {
  #bandList = [];
  constructor() {
    const jsonBands = fs.readFileSync("./band.json");
    const bandJsonList = JSON.parse(jsonBands);
    for (var i = 0; i < bandJsonList.length; i++) {
      const bandFromJson = new Band(bandJsonList[i].bandName, bandJsonList[i].bandInfo, bandJsonList[i].yearFounded, bandJsonList[i].currentMembers, bandJsonList[i].yearDisolved);
      this.#bandList.push(bandFromJson.getBandDataObject());
    }

  }

  addBand(bandName, bandInfo, yearFounded, currentMembers, yearDisolved = "") {
    const band = new Band(bandName, bandInfo, yearFounded, currentMembers, yearDisolved);
    this.#bandList.push(band.getBandDataObject());
  }

  removBand(indexToRemove) {
    this.#bandList.splice(indexToRemove, 1);
  }

  addArtistToBand(artist, indexOfBand, artistName) {
    if (indexOfBand > this.#bandList.length) {
      console.log("Error: index of band dose not exist");
    }
    else if (indexOfBand < 0) {
      return ["Artist Id: " + artist + " Artist name: " + artistName];
    }
    else {
      this.#bandList[indexOfBand].currentMembers.push("Artist Id: " + artist + " Artist name: " + artistName);
    }
  }

  getBandListLength() {
    return this.#bandList.length;
  }

  removeArtistFromBand(artist, indexOfBand) {
    if (indexOfBand > this.#bandList.length) {
      console.log("Error: index of band dose not exist");
    }
    else {
      const members = this.#bandList[indexOfBand].currentMembers;
      const indexOfMember = members.indexOf(artist);
      const previusMember = members.splice(indexOfMember, 1);
      this.#bandList[indexOfBand].currentMembers = members;
      this.#bandList[indexOfBand].previusMembers.push(previusMember);
    }
  }

  display() {
    if (this.#bandList.length > 0) {
      for (var i = 0; i < this.#bandList.length; i++) {
        console.log(this.#bandList[i]);
      }
    }
    else if (this.#bandList.length === 0) {
      console.log("There are no bands to display");
    }
    else {
      console.log("An error has happend")
    }
  }

  getLatestBand() {
    return this.#bandList.length - 1;
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