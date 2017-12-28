/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var flag = new Array();
    for(var i=97;i<=122;i++)
        {
            flag[String.fromCharCode(i)] = -1;
        }
    var nowb = -1;
    var tempmax = 0;
    var nowmax = 0;
    for(var i=0;i<len;i++)
        {
            if(flag[s[i]]>=nowb) 
            {
                nowb=flag[s[i]]+1;
                if(tempmax>nowmax) nowmax=tempmax;
                tempmax=i-nowb;
            }
            flag[s[i]]=i;
            tempmax++;
        }
    if(tempmax>nowmax) nowmax=tempmax;
                tempmax=0;
    return nowmax;
};