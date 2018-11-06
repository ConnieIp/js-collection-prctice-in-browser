'use strict';

function countSameElements(collection) {
  var x;
  var y;
  var result = []
  for (x in collection){
    var exist = false;
    var char;
    var cnt;
    if(collection[x].includes("-")){
      char=collection[x].substring(0,collection[x].indexOf("-"));
      cnt=parseInt(collection[x].substring(collection[x].indexOf("-")+1));
    }else if(collection[x].includes(":")){
      char=collection[x].substring(0,collection[x].indexOf(":"));
      cnt=parseInt(collection[x].substring(collection[x].indexOf(":")+1));
    }else if(collection[x].includes("[")&&collection[x].includes("]")){
      char=collection[x].substring(0,collection[x].indexOf("["));
      cnt=parseInt(collection[x].substring(collection[x].indexOf("[")+1,collection[x].indexOf("]")));
    }else{
      char=collection[x];
      cnt=1;
    }
    for (y in result){
      if(result[y].name==char){
        result[y].summary=result[y].summary+cnt;
        exist = true;
      }
    }
    if(!exist){
      result.push({name:char,summary:cnt});
    }
  }
  return result;
}
