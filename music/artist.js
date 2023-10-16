export default class Artist {
  #artistName;
  #artistInfo;
  #yearBorn;
  #currentBands;
  #previusBands;
  #intrumentsPlayed;

  constructor(artistName = "", artistInfo = "", yearBorn = "", intrumentsPlayed = []) {
    this.#artistName = artistName;
    this.#artistInfo = artistInfo;
    this.#yearBorn = yearBorn;
    this.#currentBands = [];
    this.#previusBands = [];
    this.#intrumentsPlayed = intrumentsPlayed;
    this.utils = new Utils();
  }

  #calculateAge() {
    const currentYear = parseInt(Date().substring(11, 16).trim());
    const age = currentYear - this.#yearBorn;
    return age;
  }

  setCurrentBands(bandToChange) {
    this.#currentBands.push(bandToChange);
  }

  setPreviusBands(bandToAdd) {
    this.#previusBands.push(bandToAdd);
  }

  getArtistDataObject() {
    return {
      artistName: this.#artistName,
      artistInfo: this.#artistInfo,
      yearBorn: this.#yearBorn
    };
  }
}