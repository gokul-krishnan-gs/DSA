function arrayPairSum(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Pick every alternate element (at even indices)
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }

    return sum;
}

// Example usage:
console.log(arrayPairSum([1, 4, 3, 2])); // Output: 4
console.log(arrayPairSum([6, 2, 6, 5, 1, 2])); // Output: 9
