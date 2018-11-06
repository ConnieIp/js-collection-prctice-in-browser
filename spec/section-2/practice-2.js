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
    }else{
      char=collection[x];
      cnt=1;
    }
    for (y in result){
      if(result[y].key==collection[x]){
        result[y].count=result[y].count+1;
        exist = true;
      }
    }
    if(!exist){
      result.push({key:char,count:cnt});
    }
  }
  return result;
}
