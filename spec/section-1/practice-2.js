'use strict';

function collectSameElements(collectionA, collectionB) {
  var x;
  var y;
  var result = []
  for(x in collectionA){
    for(y in collectionB[0]){
      if(collectionA[x] == collectionB[0][y]){
        result.push(collectionA[x]);
      }
    }
  }
  return result;
}
