function copiesArr(array, begin, end) {
  let newArray = [], start = begin, finish = end;
  if (begin === undefined) {
    start = 0;
  } else if (begin < 0 ) {
    start += array.length;
  }

  if (end === undefined) {
    finish = array.length;
  } else if (end < 0 ) {
    finish += array.length;
  }
  for (let i = start; i < finish; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = copiesArr;

