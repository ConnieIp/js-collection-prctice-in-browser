'use strict';

function createUpdatedCollection(collectionA, objectB) {
   var x;
   var y;
   for(x in collectionA){
     for(y in objectB.value){
       if(collectionA[x].key == objectB.value[y]){
         collectionA[x].count=collectionA[x].count-1;
       }
     }
   }
   return collectionA;
}
