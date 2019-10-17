function defenisNum(num) {
  if (num > 2 && num < 1000) {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return "Число " + num + " - составное число";
      };

      if (num % i ===1) {
          return "Число " + num + " - простое число";
      };
    }
  } 
  return "Данные неверны";
};

module.exports = defenisNum;