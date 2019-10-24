function returnRandom(min, max) {
  let resultRandom = (min + Math.random() * (max - min));
  return Math.round(resultRandom);
};
module.exports = returnRandom;