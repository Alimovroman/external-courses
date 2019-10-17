function addObject(str, obj) {
  let newObj = obj;
  if (str in obj) {
    return newObj[str];
  }
  
  newObj[str] = "new";
  return(newObj.str);
};
module.exports = addObject;