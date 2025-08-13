// Given a number n, return true if it’s a prime number, otherwise false.
function isPrimeOrNot(n){
  if(n <= 1)
    return false;

  for(let i=2; i<n;i++){
    if(n % i === 0)
      return false
  }
  return true;
}

console.log(isPrimeOrNot(7));


// use i<= Math.sqrt(n) for efficiency
