export default class Band {
  #bandName;
  #bandInfo;
  #yearFounded;
  #yearDisolved;
  #currentMembers;
  #previusMembers;

  constructor(bandName, bandInfo, yearFounded, currentMembers, yearDisolved = "") {
    this.#bandName = bandName;
    this.#bandInfo = bandInfo;
    this.#yearFounded = yearFounded;
    this.#yearDisolved = yearDisolved;
    this.#currentMembers = currentMembers;
  }

  addArtist() {

  }

  removeArtist() {

  }

  displayBand() {
    if (this.#yearDisolved === "") {
      console.log(` Name: ${this.#bandName}
                  About: ${this.#bandInfo}
                  Founded: ${this.#yearFounded}
                  Current Members: ${this.#currentMembers}
                  Previus Members: ${this.#previusMembers}`);
    }
    else {
      console.log(` Name: ${this.#bandName}
                  About: ${this.#bandInfo}
                  Founded: ${this.#yearFounded}
                  Disolved: ${this.#yearDisolved}
                  Current Members: ${this.#currentMembers}
                  Previus Members: ${this.#previusMembers}`);
    }
  }
  getBandName() {
    return this.#bandName;
  }
}