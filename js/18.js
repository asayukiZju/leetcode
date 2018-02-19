/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function sortNumber(a,b)
{
return a - b
}
var fourSum = function(nums, target) {
    var len = nums.length;
    if(len<4) return [];
    var anums = nums.sort(sortNumber);
    var ans = {};
    var tans = new Array();
    for(var i=1;i<len-2;i++){      
        for(var j=i+1;j<len-1;j++){
            var left = 0;
            var right = len-1;
            while(left<i&&right>j){
                var tsum = anums[i] + anums[j] + anums[left] + anums[right];
                if(tsum==target){
                        if(!ans[anums[left]]){
                            ans[anums[left]]={};
                        }
                        if(!ans[anums[left]][anums[i]]){
                            ans[anums[left]][anums[i]]={};
                        }
                        if(!ans[anums[left]][anums[i]][anums[j]]){
                            ans[anums[left]][anums[i]][anums[j]]={};
                        }
                        ans[anums[left]][anums[i]][anums[j]][anums[right]]=0;
                    
                }
                if(tsum<=target){
                    left++;
                    while(anums[left]==anums[left-1]){left++;}
                }
                if(tsum>=target){
                    right--;
                    while(anums[right]==anums[right+1]){right--;}
                }
            }
        }
    }
    for(var a in ans){
        for(var b in ans[a]){
            for(var c in ans[a][b]){
                for(var d in ans[a][b][c]){
                    tans.push([parseInt(a),parseInt(b),parseInt(c),parseInt(d)]);
                }
            }
        }
    }
    return tans;
};