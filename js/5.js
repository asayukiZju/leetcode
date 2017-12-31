/**
 * @param {string} s
 * @return {string}
 */
var findPalindrome1 = function(s,c){
    var len = s.length;
    var l = c;
    var r = c;
    for(var i=0;(c-i>=0&&c+i<len);i++){
        if(s[c-i]!=s[c+i])
        {
            l = c-i+1;
            r = c+i-1;
            break;
        }
        if(c-i==0||c+i==len-1){
            l = c-i;
            r = c+i;
        }
    }
    return{l:l,r:r,len:r-l+1};
}
var findPalindrome2 = function(s,c1,c2){
    var len = s.length;
    var l = c1;
    var r = c2;
    for(var i=0;(c1-i>=0&&c2+i<len);i++){
        if(s[c1-i]!=s[c2+i])
        {
            l = c1-i+1;
            r = c2+i-1;
            break;
        }
        if(c1-i==0||c2+i==len-1){
            l = c1-i;
            r = c2+i;
        }
    }
    return{l:l,r:r,len:r-l+1};
}
var longestPalindrome = function(s) {
    var maxl = 0;
    var maxr = 0;
    var maxlen = 1;
    var len = s.length;
    for(var i=0;i<len;i++){
        var temp = findPalindrome1(s,i)
        if(temp.len>maxlen){
            maxl=temp.l;
            maxr=temp.r;
            maxlen=temp.len;
        }
    }
    for(var i=0;i<len-1;i++){
        if(s[i]==s[i+1]){
            var temp = findPalindrome2(s,i,i+1)
            if(temp.len>maxlen){
                maxl=temp.l;
                maxr=temp.r;
                maxlen=temp.len;
            }
        }
        
    }
    return s.substring(maxl,maxr+1);
};