import Display from "./display.js";
import Utils from "./utils.js";

export default class Band {
  #bandName;
  #bandInfo;
  #yearFounded;
  #yearDisolved;
  #currentMembers;
  #previusMembers;

  constructor(bandName = "", bandInfo = "", yearFounded = "", currentMembers = [], yearDisolved = "") {
    this.#bandName = bandName;
    this.#bandInfo = bandInfo;
    this.#yearFounded = yearFounded;
    this.#yearDisolved = yearDisolved;
    this.#currentMembers = currentMembers;
    this.display = new Display();
    this.utils = new Utils();
  }

  getBandName() {
    return this.#bandName;
  }

  getBandInfo() {
    return this.#bandInfo;
  }

  getYearFounded() {
    return this.#yearFounded;
  }

  getYearDisolved() {
    return this.#yearDisolved;
  }

  getCurrentMembers() {
    return this.#currentMembers;
  }

  getPreviusMembers() {
    return this.#previusMembers;
  }
}