function returnRandom(min, max) {
  let resultRandom = (min + Math.random() * (max - min)).toFixed(0);
  return Math.round(resultRandom);
};
module.exports = returnRandom;