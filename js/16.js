/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function sortNumber(a,b)
{
return a - b
}
var threeSumClosest = function(nums, target) {
    var anums = nums.sort(sortNumber);
    var len = anums.length;
    var tsum = nums[0] + nums[1] + nums[2];
    var td = Math.abs(tsum - target);
    var ans = tsum;
    for(var i = 1;i < len-1;i++){
        var j = 0;
        var k = len-1;
        while(j<i&&k>i){
            var sum = anums[i] + anums[j] + anums[k];
            var ttd = Math.abs(sum - target);
            if(ttd < td) {ans = sum; td = ttd;}
            if(sum<target) j++;
            else if(sum>target) k--;
            else break;
        }
    }
    return ans;
};