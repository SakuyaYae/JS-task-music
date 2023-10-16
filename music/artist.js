import Display from "./display.js";

export default class Artist {
  #artistName;
  #artistInfo;
  #yearBorn;
  #currentBands;
  #previusBands;
  #intrumentsPlayed;

  constructor(artistName = "", artistInfo = "", yearBorn = "", intrumentsPlayed = [], currentBands = [], previusBands = []) {
    this.#artistName = artistName;
    this.#artistInfo = artistInfo;
    this.#yearBorn = yearBorn;
    this.#currentBands = currentBands;
    this.#previusBands = previusBands;
    this.#intrumentsPlayed = intrumentsPlayed;
    this.display = new Display();
  }


  addBand() {

  }

  removeBand() {

  }

  #calculateAge() {
    const currentYear = parseInt(Date().substring(11, 16).trim());
    const age = currentYear - this.#yearBorn;
    return age;
  }

  getArtistName() {
    return this.#artistName;
  }

  getArtistInfo() {
    return this.#artistInfo;
  }

  getYearBorn() {
    return this.#yearBorn;
  }
  getAge() {
    return this.#calculateAge();
  }

  getCurrentBands() {
    return this.#currentBands;
  }

  getPreviusBands() {
    return this.#previusBands;
  }

  getIntrumentsPlayed() {
    return this.#intrumentsPlayed;
  }
}