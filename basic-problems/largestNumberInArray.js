function largestNumberInArray(arr){
  let max = arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i] > max)
      max = arr[i];
  }
  return max;
}

console.log(largestNumberInArray([5,12,7,3,25,1]));

//25
