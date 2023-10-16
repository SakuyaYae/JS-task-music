export default class Utils {
  add(itemToAdd) {
    const returnArr = [];
    returnArr.push(itemToAdd);
    return returnArr;
  }

  remove(itemToRemove, arrToRemoveFrom) {
    const index = arrToRemoveFrom.indexOf(itemToRemove);
    arrToRemoveFrom.splice(index, 1);
    return arrToRemoveFrom;
  }

  display(objectToDisplay) {
    console.log(objectToDisplay);
  }
}