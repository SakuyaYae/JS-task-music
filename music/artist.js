export default class Artist {
  artistName;
  artistInfo;
  yearBorn;
  currentBands;
  previusBands;
  intrumentsPlayed;

  constructor(artistName, artistInfo, yearBorn, currentBands = [], previusBands = [], intrumentsPlayed) {
    this.artistName = artistName;
    this.artistInfo = artistInfo;
    this.yearBorn = yearBorn;
    this.currentBands = currentBands;
    this.previusBands = previusBands;
    this.intrumentsPlayed = intrumentsPlayed;
  }
}