export default class Band {
  bandName;
  bandInfo;
  yearFounded;
  yearDisolved;
  currentMembers;
  previusMembers;

  constructor(bandName, bandInfo, yearFounded, yearDisolved = "", currentMembers) {
    this.bandName = bandName;
    this.bandInfo = bandInfo;
    this.yearFounded = yearFounded;
    this.yearDisolved = yearDisolved;
    this.currentMembers = currentMembers;
  }
}