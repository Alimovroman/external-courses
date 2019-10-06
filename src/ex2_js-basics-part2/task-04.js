function checkOnBoolean(a) {
  for( let i = 0; i<a.length; i++) {
    for( let j = i+1; j<a.length; j++) {
      if(a[i] === a[j]) {
          return true;
      }  
    }
  } return false;
};
module.exports = checkOnBoolean;