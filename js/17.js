/**
 * @param {string} digits
 * @return {string[]}
 */
var digit2letter = [[],[],["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"]]
var mult = function(a,b){
    var ans = new Array();
    for(var i = 0;i<a.length;i++){
        for(var j = 0;j<b.length;j++){
            ans.push(a[i]+b[j]);
        }
    }
    return ans;
}
var letterCombinations = function(digits) {
    if (digits.length == 0 ) return [];
    if (digits.length == 1 ) return digit2letter[digits[0]];
    var ans = mult(digit2letter[digits[0]],digit2letter[digits[1]]);
    for(var i = 2;i < digits.length;i++){
        ans = mult(ans,digit2letter[digits[i]]);
    }
    return ans;
};