function reverseString(str){

  let stringArray = str.split('');
  let revString = stringArray.reverse();
  let revWord = revString.join(''); 

  return revWord;
}

console.log(reverseString("hello"));

//olleh
