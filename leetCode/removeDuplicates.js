
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Pointer for unique elements position

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { 
            nums[k] = nums[i]; // Place the unique element
            k++;
        }
    }

    return k;
};
