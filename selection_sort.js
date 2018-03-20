

function selectionSort(array){

  console.log(array);

    var currentIndex = 0;

    var init = new Date().getTime();


      while (array.length -1 > currentIndex) {

        
        var max = findMax(array,currentIndex);
        var temp = array[currentIndex].frequencia;
        array[currentIndex].frequencia = array[max].frequencia;
        array[max].frequencia = temp;


        currentIndex += 1;

        
      }

      console.log(array);
      console.log('Sorting ' + array.length + ' elements took ' + (new Date().getTime() - init) + ' mili seconds');


}



function findMax(array, inicio) {

      var currentIndex = array.length-1;
      var maxValue = Number.MIN_SAFE_INTEGER;
      var maxIndex;
      
      
      while (inicio <= currentIndex) {
       
        

        if(array[currentIndex].frequencia>maxValue){
          maxValue = array[currentIndex].frequencia;
          maxIndex = currentIndex;
        }


        currentIndex -= 1;

        
      }

      return maxIndex;
}