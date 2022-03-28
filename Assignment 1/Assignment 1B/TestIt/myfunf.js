const stopper = require("stopwords").english;

function ccrct(inpu){
  if(inpu.endsWith('.') || inpu.endsWith('?')){
    var nenp = inpu;
  }
  else{
    var nenp = inpu + ".";
  }
  return nenp;
}

function senseg(inpu) {
  var nenp = ccrct(inpu).replace(/[?]/g, ".");
  var arr = nenp.split(".");
  arr.pop();
  return arr;
}

function worseg(inpu) {
  var nenp = ccrct(inpu).replace(/[?]/g, ".");
  nenp = nenp.replace(/[.]/g, "");
  var arr = nenp.split(" ");
  return arr;
}


function storem(inpu) {
  var nenp = ccrct(inpu).replace(/[?]/g, ".");
  nenp = nenp.replace(/[.]/g, "");
  var arr = nenp.split(" ");
  var txt = "";
  arr.forEach(funku);
  function funku(item, index, arr) {
    if (stopper.includes(item)) {
    } else {
      txt += item + " ";
    }
  }
  return txt;
}

function remdup(inpu) {
  var nenp = ccrct(inpu).toLowerCase();
  nenp = nenp.replace(/[?]/g, ".");
  nenp = nenp.replace(/[.]/g, "");
  var arr = nenp.split(" ");
  function remoDup(arr) {
    return [...new Set(arr)];
  }
  var arr = remoDup(arr);
  var txt = "";
  arr.forEach(function (item) {
    txt += item + " ";
  });
  return txt;
}

function revit(inpu) {
  var nenp = ccrct(inpu).replace(/[?]/g, ".");
  nenp = nenp.replace(/[.]/g, "");
  var arr = nenp.split(" ");
  var txt = "";
  arr.forEach((item) => {
    txt += item.split("").reverse().join("") + " ";
  });
  return txt;
}

function exnum(inpu) {
  var arr1 = ccrct(inpu).match(/\d+/g);
  if(arr1 === null){
    var txt = "No Numbers";
  }
  else{
    var txt = "";
    arr1.forEach(myFunction);
    function myFunction(value, index, array) {
        txt += value + ", "; 
      }
    }
  return txt;
}

module.exports = {
  senseg,
  worseg,
  storem,
  remdup,
  revit,
  exnum,
};
