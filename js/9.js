/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    if(x<10) return true;
    var a = Math.floor((Math.log10(x)+1));
    var b = 0;
    for(var i = 0;i<a/2;i++){
        b = b*10 + x%10;
        x = Math.floor(x/10);
    }
    if(a%2 == 1 ) b = Math.floor(b/10);
    if(b==x) return true;
    else return false;
};