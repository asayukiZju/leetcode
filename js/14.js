/**
 * @param {string[]} strs
 * @return {string}
 */
var compare = function(str1,str2){
    var len1 = str1.length;
    var len2 = str2.length;
    var len = (len1<len2)?len1:len2;
    var str = "";
    for(var k=0;k<len;k++){
        if(str1[k]==str2[k])
            {
                str=str+str1[k];
            }
        else break;
    }
    return str;
}
var longestCommonPrefix = function(strs) {
    var ans = "";
    var len = strs.length;
    for(var i=0;i<len;i++){
        if(i==0){
            ans = strs[0];
        }
        else{
            ans = compare(ans,strs[i]);
            if(ans.length==0) return "";
        }
    }
    return ans;
};