export default class Artist {
  artistName;
  artistInfo;
  yearBorn;
  currentBands;
  previusBands;
  intrumentsPlayed;

  constructor(artistName, artistInfo, yearBorn, intrumentsPlayed, currentBands = [], previusBands = []) {
    this.artistName = artistName;
    this.artistInfo = artistInfo;
    this.yearBorn = yearBorn;
    this.currentBands = currentBands;
    this.previusBands = previusBands;
    this.intrumentsPlayed = intrumentsPlayed;
  }

  addBand() {

  }

  removeBand() {

  }

  displayArtist() {
    console.log(` Name: ${this.artistName}
                  About: ${this.artistInfo}
                  Age: ${this.calculateAge()} Born: ${this.yearBorn}
                  Current bands: ${this.currentBands}
                  Previus bands: ${this.previusBands}
                  Instruments ${this.intrumentsPlayed}`)
  }

  calculateAge() {
    const currentYear = parseInt(Date().substring(11, 16).trim());
    const age = currentYear - this.yearBorn;
    return age;
  }
}