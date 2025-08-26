const buildArray = function(nums) {
    let ans = new Array(nums.length);
   ans =  nums.map((element) => {
    return nums[element];
   });

   return ans;
};
