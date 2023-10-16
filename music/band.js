export default class Band {
  #bandName;
  #bandInfo;
  #yearFounded;
  #yearDisolved;
  #currentMembers;
  #previusMembers;

  constructor(bandName = "", bandInfo = "", yearFounded = "") {
    this.#bandName = bandName;
    this.#bandInfo = bandInfo;
    this.#yearFounded = yearFounded;
    this.#yearDisolved = [];
    this.#currentMembers = [];
    this.#previusMembers = [];
  }

  setCurrentMembers(memberToChange) {
    this.#currentMembers.push(memberToChange);
  }

  setPreviusMembers(memberToAdd) {
    this.#previusMembers.push(memberToAdd);
  }

  getBandDataObject() {
    if (this.#yearDisolved === "") {
      return {
        bandName: this.#bandName,
        bandInfo: this.#bandInfo,
        yearFounded: this.#yearFounded
      };
    }
    return {
      bandName: this.#bandName,
      bandInfo: this.#bandInfo,
      yearFounded: this.#yearFounded,
      yearDisolved: this.#yearDisolved
    };

  }
}