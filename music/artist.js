export default class Artist {
  #artistName;
  #artistInfo;
  #yearBorn;
  #currentBands;
  #previusBands;
  #intrumentsPlayed;

  constructor(artistName, artistInfo, yearBorn, intrumentsPlayed = []) {
    this.#artistName = artistName;
    this.#artistInfo = artistInfo;
    this.#yearBorn = yearBorn;
    this.#currentBands = [];
    this.#previusBands = [];
    this.#intrumentsPlayed = intrumentsPlayed;
  }

  #calculateAge() {
    const currentYear = parseInt(Date().substring(11, 16).trim());
    const age = currentYear - this.#yearBorn.substring(0, 4).trim();
    return age;
  }

  getCurrentBands() {
    return this.#currentBands;
  }

  setCurrentBands(bandToChange, method = 0) {
    if (method === 0) {
      this.#currentBands.push(bandToChange);
    }
    else {
      this.#currentBands = bandToChange;
    }
  }

  setPreviusBands(bandToAdd) {
    this.#previusBands.push(bandToAdd);
  }

  getArtistDataObject() {
    return {
      artistName: this.#artistName,
      artistInfo: this.#artistInfo,
      yearBorn: this.#yearBorn,
      age: this.#calculateAge(),
      currentBands: this.#currentBands,
      previusBands: this.#previusBands,
      intrumentsPlayed: this.#intrumentsPlayed
    };
  }
}