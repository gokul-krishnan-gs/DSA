
  function differenceOfSums(nums) {
    
    let sumElement = 0;
    let sumDigit = 0;
    
    let numString = nums.join('');
    let numStringArray = numString.split('');
    let numNumberArray = numStringArray.map(Number);

    for(let i=0;i<nums.length;i++){
        sumElement += nums[i];
    }

    numNumberArray.forEach((index)=>{
        sumDigit += index;
    });

    return Math.abs(sumElement - sumDigit);
    
};
