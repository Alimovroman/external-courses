function defenisNum(a) {
  if (a > 2 && a < 1000) {
    for (let i = 2; i <= a / 2; i++) {
      if (a % i === 0) {
        return "Число " + a + " - составное число";
      };

      if (a % i ===1) {
          return "Число " + a + " - простое число";
      };
    }
  } 
  return "Данные неверны";
};

module.exports = defenisNum;