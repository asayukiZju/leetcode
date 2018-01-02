/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows==1) return s;
    var ans = new Array();
    for(var i = 0;i<numRows;i++){
        ans.push("");
    }
    var now = 0;
    var inc = 1;
    var len = s.length;
    for(var i = 0;i<len;i++){
        if(now==0) {
            ans[0] = ans[0] + s[i];
            inc = 1;
            now = 1;
            continue;
        }        
        if(now==numRows-1) {
            ans[numRows-1] = ans[numRows-1] + s[i];
            inc = -1;
            now = numRows-2;
            continue;
        }
        ans[now] = ans[now] + s[i]
        now = now + inc;
    }
    var rs = "";
    for(var i = 0;i<numRows;i++){
        rs = rs+ans[i];
    }
    return rs;
};