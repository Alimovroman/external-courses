function sumAndRound(num1, num2) {
  let sum = 0;
    sum = (num1 + num2).toFixed(3);
    return Number(sum);
};

module.exports = sumAndRound;