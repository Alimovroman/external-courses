function checkNum(arg) {
  let evenElem = 0, oddElem = 0, zeroElem = 0, arr = [];
    for (let i = 0; i <= arg.length; i++) {
      if (arg[i] === null || arg[i] === undefined) {
        continue;
      };

      if (arg[i] === 0) {
        zeroElem++;
      } else {
        if (arg[i] % 2 === 1) {
          oddElem++;
        } else {
          evenElem++;
        };
      };
    };
    arr.push(evenElem, oddElem, zeroElem);
    return arr;  
};
module.exports = checkNum;