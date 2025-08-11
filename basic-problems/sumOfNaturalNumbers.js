//Given a positive integer n, find the sum of the first n natural numbers.

function sumOfNaturalNumbers(n){
  let sum = 0;
for(let i=1;i<=n;i++){
  sum += i;
}

return console.log(sum);
}


/*
function sumOfNaturalNumbers(num){
  return console.log((num*(num+1))/2);
}
*/

sumOfNaturalNumbers(2);
