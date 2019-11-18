function searchProp(nameProp, obj) {
  for(let key in obj) {
    if(!obj.hasOwnProperty(nameProp) && key === nameProp) {
      return obj[key];
    }
  } return undefined;
};

module.exports = searchProp;