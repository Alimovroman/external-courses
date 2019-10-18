obj = Object.create();
function searchProp(nameProp, obj) {
  let x = Object.keys(obj) ;
  for (let i = 0; i < x.length; i++) {
    if ( x[i] === nameProp) { 
       console.log(nameProp);
    }
  } return
};

module.exports = searchProp;