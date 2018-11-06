'use strict';

function collectSameElements(collectionA, objectB) {
   var x;
   var y;
   var result = []
   for(x in collectionA){
     for(y in objectB.value){
       if(collectionA[x].key == objectB.value[y]){
         result.push(collectionA[x].key);
       }
     }
   }
   return result;
}
