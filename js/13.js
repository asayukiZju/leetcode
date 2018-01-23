/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var loma = {
        M:1000,
        D:500,
        C:100,
        L:50,
        X:10,
        V:5,
        I:1
    }
    var ans = loma[s[0]];
    var temp = loma[s[0]];
    for(var i = 1;i<s.length;i++){
        var now = loma[s[i]];
        if(now<=temp){
            temp = temp+ans;
        }
    }
};