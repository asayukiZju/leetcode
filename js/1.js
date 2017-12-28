/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var ans = {};
    for(i in nums)
        {
            if(ans[target-nums[i]]===undefined) ans[nums[i]] = i;
            else return [+ans[target-nums[i]],+i];
        }
};