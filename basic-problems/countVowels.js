function countVowels(str){
  let count = 0;
  for(let i=0;i<str.length;i++){
    if(str[i] === 'a'||str[i] === 'e'|| str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u'){
      count++;
    }  
  }
  return count;
}

console.log(countVowels("hello world"));

function countAllVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countAllVowels("Gokul Krishnan"));


