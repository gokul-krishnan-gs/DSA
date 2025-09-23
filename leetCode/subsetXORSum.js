
var subsetXORSum = function(nums) {
     function dfs(index, currentXor) {
        if (index === nums.length) {
            return currentXor;
        }
        let include = dfs(index + 1, currentXor ^ nums[index]);
        let exclude = dfs(index + 1, currentXor);
        return include + exclude;
    }
    
    return dfs(0, 0);   
};
