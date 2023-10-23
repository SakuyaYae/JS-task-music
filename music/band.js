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
    this.#previusMembers = [];
  }

  setCurrentMembers(memberToChange, method = 0) {
    if (method === 0) {
      this.#currentMembers.push(memberToChange);
    }
    else {
      this.#currentMembers = memberToChange;
    }

  }

  getCurrentMembers() {
    return this.#currentMembers;
  }

  setPreviusMembers(memberToAdd) {
    this.#previusMembers.push(memberToAdd);
  }

  getBandDataObject() {
    if (this.#yearDisolved === "") {
      return {
        bandName: this.#bandName,
        bandInfo: this.#bandInfo,
        yearFounded: this.#yearFounded,
        currentMembers: this.#currentMembers,
        previusMembers: this.#previusMembers
      };
    }
    return {
      bandName: this.#bandName,
      bandInfo: this.#bandInfo,
      yearFounded: this.#yearFounded,
      yearDisolved: this.#yearDisolved,
      currentMembers: this.#currentMembers,
      previusMembers: this.#previusMembers
    };

  }
}