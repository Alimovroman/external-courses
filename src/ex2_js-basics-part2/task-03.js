function checkNum(a) {
  let x = 0, y = 0, z = 0, arr1 = [];
    for (let i = 0; i <= a.length; i++) {
      if (a[i] === null || a[i] === undefined) {
        continue;
      };

      if (a[i] === 0) {
        z++;
      } else {
        if (a[i] % 2 === 1) {
          y++;
        } else {
          x++;
        };
      };
    };
    arr1.push(x,y,z);
    return arr1;  
};
module.exports = checkNum;