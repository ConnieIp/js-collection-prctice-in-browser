'use strict';

function collectSameElements(collectionA, collectionB) {
  var x;
  var y;
  var result = []
  for(x in collectionA){
    for(y in collectionB){
      if(collectionA[x] == collectionB[y]){
        result.push(collectionA[x]);
      }
    }
  }
  return result;
}
