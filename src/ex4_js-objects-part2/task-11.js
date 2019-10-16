function searchStr(str) {
  let result = {}, arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    let symbol = arr[i];
    if ( result[symbol] !== undefined) {
      result[symbol]++;
    }else {
      result[symbol] = 1;
    }
  }
  for (var key in result) {
    if (result.hasOwnProperty(key)) {
    console.log(`символ ${key} встречается ${result[key]} раз(а)`)
    }
  }
};

module.exports = searchStr;
