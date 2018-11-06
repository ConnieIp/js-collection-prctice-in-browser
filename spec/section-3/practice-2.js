'use strict';

function createUpdatedCollection(collectionA, objectB) {
   var x;
   var y;
   for(x in collectionA){
     for(y in objectB.value){
       if(collectionA[x].key == objectB.value[y]){
         var minus=Math.floor(collectionA[x].count/3);
         collectionA[x].count=collectionA[x].count-minus;
       }
     }
   }
   return collectionA;
}
