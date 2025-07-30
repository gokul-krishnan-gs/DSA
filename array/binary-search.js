function binarySearch(array,item){
  let left = 0;
  let right = array.length - 1;
  while(left <= right){
    let middle = Math.floor((left+right)/2);
    if(array[middle] === item){
    return middle;
    }else if(array[middle] > item){
      right = middle - 1;
    }else if(array[middle] <  item){
      left = middle + 1;
    }
  }
  return -1;
}