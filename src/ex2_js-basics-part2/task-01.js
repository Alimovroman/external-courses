function transformArg(a) {
    if ( a === Number(a) ) {
        return 'number';
    } else if ( a === String(a) ){
        return 'string';
    }
    return undefined;
  };
  module.exports = transformArg;