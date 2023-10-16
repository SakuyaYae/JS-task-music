export default class Utils {
  add(itemToAdd) {
    const returnArr = [];
    returnArr.push(itemToAdd);
    return returnArr;
  }

  remove(itemToRemove) {
    const returnArr = [];
    const index = returnArr.indexOf(itemToRemove);
    returnArr.splice(index, 1);
    return returnArr;
  }
}