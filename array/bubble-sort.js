function bubbleSort(array){
      let n = array.length;
      for(let i=0;i<n-1;i++){  //need n - 1 passes to fully sort n items.
        for(let j=0;j<n-1-i;j++){ //After each pass, the last i elements are already sorted, so skip comparing them.
          if(array[j] > array[j+1]){  //for descending order change the comparison operator to  < 
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
          }
        }
      }
      return array;
    }
