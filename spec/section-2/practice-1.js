'use strict';

function countSameElements(collection) {
  var x;
  var y;
  var result = []
  for (x in collection){
    var exist = false;
    for (y in result){
      if(result[y].key==collection[x]){
        result[y].count=result[y].count+1;
        exist = true;
      }
    }
    if(!exist){
      result.push({key:collection[x],count:1});
    }
  }
  return result;
}
