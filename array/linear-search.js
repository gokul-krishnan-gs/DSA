function linearSearch(array,item){
  let i;
  for(i=0;i<array.length;i++){
    if(array[i] === item){
    return i;
    }
  }
  return -1;
}